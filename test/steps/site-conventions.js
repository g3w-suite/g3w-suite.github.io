'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { Given, Then } = require('@cucumber/cucumber');
const { load } = require('cheerio');

const staticDir = path.resolve('static');
const languages = ['it', 'en'];

function htmlFiles(dir) {
  return filesIn(dir).filter(file => file.endsWith('.html'));
}

function pageSourceFiles(dir) {
  const changelogDir = path.join(dir, 'changelog');
  return [
    ...htmlFiles(dir).filter(file => !path.basename(file).startsWith('_')),
    ...filesIn(changelogDir).filter(file => file.endsWith('.md')),
  ];
}

function pageBodyClass(route) {
  const slug = route.split(path.sep).join('/')
    .replace(/(^|\/)index\.html$/, '')
    .replace(/\.html$/, '')
    .split('/')
    .filter(Boolean)
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-');
  return `page-${slug || 'home'}`;
}

function filesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(file) : entry.isFile() ? [file] : [];
  });
}

function translationHelperPattern() {
  return /\{\{t\s+'((?:\\.|[^'\\])*)'\s*\}\}/g;
}

function extractPageTranslations(html, file) {
  const blocks = [...html.matchAll(/<script type="application\/json" data-i18n>([\s\S]*?)<\/script>/g)];
  assert.ok(blocks.length <= 1, `${file}: expected at most one data-i18n block`);
  if (!blocks.length) return { html, translations: {} };

  const translations = JSON.parse(blocks[0][1]);
  assert.ok(translations && typeof translations === 'object' && !Array.isArray(translations), `${file}: data-i18n must be an object`);
  for (const [lang, entries] of Object.entries(translations)) {
    assert.ok(languages.includes(lang), `${file}: unsupported data-i18n language "${lang}"`);
    assert.ok(entries && typeof entries === 'object' && !Array.isArray(entries), `${file}: ${lang} translations must be an object`);
    assert.ok(Object.keys(entries).length > 0, `${file}: omit empty ${lang} translations`);
    assert.ok(Object.values(entries).every(value => typeof value === 'string'), `${file}: ${lang} translations must be strings`);
  }
  return { html: html.replace(blocks[0][0], ''), translations };
}

function extractPageMetadata(html, file) {
  const blocks = [...html.matchAll(/<script type="application\/json" data-i18n-meta>([\s\S]*?)<\/script>/g)];
  assert.ok(blocks.length <= 1, `${file}: expected at most one data-i18n-meta block`);
  if (!blocks.length) return { html, metadata: null };

  const metadata = JSON.parse(blocks[0][1]);
  assert.ok(metadata && typeof metadata === 'object' && !Array.isArray(metadata), `${file}: data-i18n-meta must be an object`);
  assert.ok(Object.keys(metadata).length > 0, `${file}: data-i18n-meta must not be empty`);
  assert.ok(Object.keys(metadata).every(key =>
    ['title', 'description', 'ogTitle', 'ogDescription', 'ogType'].includes(key)
  ), `${file}: unsupported data-i18n-meta key`);
  assert.ok(Object.values(metadata).every(value => typeof value === 'string' && value.trim()), `${file}: metadata values must be non-empty strings`);
  return { html: html.replace(blocks[0][0], ''), metadata };
}

function renderLanguageBlocks(html, lang) {
  return html.replace(/\{\{#(it|en)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_, target, content) =>
    target === lang ? content : ''
  );
}

function findUnmarkedTranslations(file, html, translations) {
  const source = renderLanguageBlocks(html, 'it').replace(translationHelperPattern(), '__TRANSLATION_HELPER__');
  const unmarked = [];
  for (const [, name, attributes] of source.matchAll(/<([a-z][^\s/>]*)([^>]*)>/gi)) {
    if (name.toLowerCase() === 'link' && /\brel\s*=\s*(["'])alternate\1/i.test(attributes)) continue;
    for (const [, attribute, quoted, doubleValue, singleValue] of attributes.matchAll(/\b([^\s=]+)=("([^"]*)"|'([^']*)')/g)) {
      if (['lang', 'hreflang', 'data-lang-key', 'data-nav-key'].includes(attribute.toLowerCase())) continue;
      const value = doubleValue === undefined ? singleValue : doubleValue;
      if (Object.hasOwn(translations, value)) unmarked.push(`${file} ${attribute}="${value}"`);
    }
  }
  for (const [, content] of source.matchAll(/>([^<]+)</g)) {
    const leading = /^\s*/.exec(content)[0];
    const trailing = /\s*$/.exec(content)[0];
    const text = content.slice(leading.length, content.length - trailing.length);
    const key = Object.hasOwn(translations, text) ? text : text.replace(/&amp;/g, '&');
    if (text && Object.hasOwn(translations, key)) unmarked.push(`${file}: ${text}`);
  }
  return unmarked;
}

function readPage(file) {
  const html = fs.readFileSync(file, 'utf8');
  return { file, html, $: load(html) };
}

function localTarget(file, href) {
  if (!href) return null;
  const pagePath = path.relative(staticDir, file).split(path.sep).join('/');
  const url = new URL(href, `https://www.g3wsuite.it/${pagePath}`);
  if (!['http:', 'https:'].includes(url.protocol) || !['g3wsuite.it', 'www.g3wsuite.it'].includes(url.hostname)) return null;
  const target = path.join(staticDir, decodeURIComponent(url.pathname));
  return fs.existsSync(target) && fs.statSync(target).isDirectory() ? path.join(target, 'index.html') : target;
}

function checkPages(pages, check) {
  const errors = [];
  for (const page of pages) {
    const expect = (condition, message) => {
      if (!condition) errors.push(`${path.relative(process.cwd(), page.file)}: ${message}`);
    };
    check(page, expect);
  }
  assert.deepEqual(errors, [], errors.join('\n'));
}

Then('source text is valid UTF-8 without corrupted character sequences', function () {
  const decoder = new TextDecoder('utf-8', { fatal: true });
  const corrupted = /[\u0080-\u009f\ufffd]|\u00c3[\u0080-\u00bf\u0192]|\u00c2[\u0080-\u00bf]|\u00e2[\u0080\u20ac]|\u00ef\u00bf\u00bd/;
  const files = [
    ...filesIn(path.resolve('src')),
    ...['app.js', 'style.css', 'icons.svg'].map(file => path.join(staticDir, file)),
  ].filter(file => /\.(?:html|md|css|js|svg)$/.test(file));
  for (const file of files) {
    let text;
    const relative = path.relative(process.cwd(), file);
    assert.doesNotThrow(() => { text = decoder.decode(fs.readFileSync(file)); }, `${relative}: invalid UTF-8`);
    if (file.endsWith('.html')) text = load(text).html();
    assert.ok(!corrupted.test(text), `${relative}: corrupted character sequence`);
  }
});

Then('translated text is rendered for each language', function () {
  const sourceFiles = pageSourceFiles(path.resolve('src'));
  const sourceHtml = sourceFiles.map(file => fs.readFileSync(file, 'utf8'));
  const outputHtml = htmlFiles(staticDir).map(file => fs.readFileSync(file, 'utf8'));
  const pages = {
    it: readPage(path.join(staticDir, 'it', 'index.html')).$,
    en: readPage(path.join(staticDir, 'en', 'index.html')).$,
  };
  assert.equal(pages.it('meta[property="og:title"]').attr('content'), 'G3W-Suite - Open Source WebGIS da QGIS');
  assert.equal(pages.it('meta[property="og:description"]').attr('content'), 'Pubblica i tuoi progetti QGIS come servizi WebGIS con un clic. Open source, licenza MPL.');
  assert.equal(pages.it('meta[property="og:type"]').attr('content'), 'website');
  assert.equal(pages.it('.section-intro .section-label').first().text(), 'Inizia in pochi minuti');
  assert.equal(pages.en('.section-intro .section-label').first().text(), 'Get started in minutes');
  assert.equal(readPage(path.join(staticDir, 'it', 'demo', 'index.html')).$('head title').text(), 'Demo - G3W-Suite');
  assert.equal(readPage(path.join(staticDir, 'en', 'demo', 'index.html')).$('head title').text(), 'Demo - G3W-Suite');
  assert.equal(
    readPage(path.join(staticDir, 'it', 'demo', 'index.html')).$('meta[name="description"]').attr('content'),
    'Demo G3W-Suite relative ai branch attualmente supportati: stabile, bug fixing e sviluppo.',
    'explicit attribute translations must be rendered'
  );
  assert.ok(
    sourceHtml.some(source => source.includes('"description": "G3W-Suite demos for currently supported branches: stable, bug fixing and dev."')),
    'translated meta descriptions must use data-i18n-meta'
  );
  assert.ok(
    sourceHtml.some(source => /\b[\w:-]+=["'][^"']*\{\{t '(?:\\.|[^'\\])*'\s*\}\}[^"']*["']/.test(source)),
    'translated attributes must use the translation helper'
  );
  assert.ok(
    sourceHtml.some(source => />[^<]*\{\{t '(?:\\.|[^'\\])*'\s*\}\}[^<]*</.test(source)),
    'translated text must use the translation helper'
  );
  assert.ok(
    outputHtml.every(html => !/\{\{t\b|\{\{\/t\}\}/.test(html)),
    'translation helpers must be expanded in all generated pages'
  );
});

Then('both languages are generated from shared page templates', function () {
  const sourceDir = path.resolve('src');
  assert.ok(fs.existsSync(path.join(sourceDir, 'index.html')), 'missing shared homepage template');
  assert.ok(fs.existsSync(path.join(sourceDir, '_redirect.html')), 'missing root redirect template');
  assert.ok(fs.existsSync(path.join(sourceDir, '_header.html')), 'missing shared components');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'i18n')), 'translation catalog directory must not exist');
  assert.ok(!fs.existsSync(path.resolve('i18n')), 'translation catalog must not use a root i18n/ folder');
  assert.ok(!fs.existsSync(path.join(staticDir, 'i18n')), 'translation catalog must not be stored in static/');
  assert.ok(!fs.existsSync(path.join(staticDir, 'assets')), 'static/assets must be merged into static root');
  for (const lang of languages) {
    assert.ok(!fs.existsSync(path.join(sourceDir, lang)), `language-specific source folder still exists: src/${lang}`);
    assert.ok(fs.existsSync(path.join(staticDir, lang, 'index.html')), `missing generated homepage for ${lang}`);
  }
  const changelogFiles = filesIn(path.join(sourceDir, 'changelog'));
  assert.equal(changelogFiles.length, 13, 'expected all changelog sources to be present');
  assert.ok(changelogFiles.every(file => file.endsWith('.md')), 'changelog sources must be Markdown');
  for (const file of pageSourceFiles(sourceDir)) {
    const source = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(
      source,
      /<!--#include file="(?:\.\.\/)?_(?:header|footer)\.html"-->/,
      `${file}: shared shell components must be injected by the build`
    );
    assert.doesNotMatch(source, /<!doctype html>|<\/?html\b|<\/?head\b|<\/?body\b/i, `${file}: document shell must come from shared components`);
  }
  assert.ok(fs.existsSync(path.join(staticDir, 'it', 'modules', 'index.html')), 'Italian modules page must use /it/modules/');
  assert.ok(!fs.existsSync(path.join(staticDir, 'it', 'moduli')), 'Italian modules page must not use /it/moduli/');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'pages')), 'page templates must be directly in src');
});

Then('page-local translations are valid and used by the Italian build', function () {
  const sourceDir = path.resolve('src');
  const sourceFiles = pageSourceFiles(sourceDir);
  const unmarked = [];
  for (const file of sourceFiles) {
    const sourceHtml = fs.readFileSync(file, 'utf8');
    const { html: withoutMetadata, metadata } = extractPageMetadata(sourceHtml, file);
    const { html, translations: pageTranslations } = extractPageTranslations(withoutMetadata, file);
    if (!path.basename(file).startsWith('_')) {
      assert.ok(metadata && metadata.title, `${file}: page title must be declared in data-i18n-meta`);
    }
    const trailingBlocks = [...sourceHtml.matchAll(/<script type="application\/json" data-i18n(?:-meta)?>([\s\S]*?)<\/script>/g)];
    for (let index = 1; index < trailingBlocks.length; index++) {
      const previous = trailingBlocks[index - 1];
      assert.equal(
        sourceHtml.slice(previous.index + previous[0].length, trailingBlocks[index].index).trim(),
        '',
        `${file}: translation scripts must be adjacent`
      );
    }
    if (trailingBlocks.length) {
      const last = trailingBlocks[trailingBlocks.length - 1];
      const trailingHtml = sourceHtml.slice(last.index + last[0].length);
      assert.match(
        trailingHtml,
        /^\s*(?:<\/body>\s*)?(?:<\/html>\s*)?$/i,
        `${file}: translation scripts must be at the end of the source file`
      );
    }
    const localUsage = new Map(languages.map(lang => [lang, new Set()]));
    for (const [key, value] of Object.entries(metadata || {})) {
      if (key === 'ogType') continue;
      if (Object.hasOwn(pageTranslations.it || {}, value)) {
        localUsage.get('it').add(value);
      } else {
        assert.fail(`${file}: missing page-local Italian translation for metadata "${value}"`);
      }
    }
    for (const [lang, entries] of Object.entries(pageTranslations)) {
      const keys = Object.keys(entries);
      assert.deepEqual(keys, [...keys].sort(), `${file}: ${lang} translations must be sorted`);
    }
    for (const lang of languages) {
      const localizedHtml = renderLanguageBlocks(html, lang);
      for (const [, literal] of localizedHtml.matchAll(translationHelperPattern())) {
        const key = literal.replace(/\\(['\\])/g, '$1');
        if (Object.hasOwn(pageTranslations[lang] || {}, key)) {
          localUsage.get(lang).add(key);
        } else if (lang === 'it') {
          assert.fail(`${file}: missing page-local Italian translation for "${key}"`);
        }
      }
    }
    const unusedLocal = Object.entries(pageTranslations).flatMap(([lang, entries]) =>
      Object.keys(entries).filter(key => !localUsage.get(lang).has(key)).map(key => `${lang}: ${key}`)
    );
    assert.deepEqual(unusedLocal, [], `${file}: unused page-local translations`);
    unmarked.push(...findUnmarkedTranslations(
      path.relative(process.cwd(), file),
      html,
      pageTranslations.it || {}
    ));
  }
  assert.deepEqual(unmarked, [], `translatable strings missing {{t '...'}}: ${unmarked.join('\n')}`);

  const outputFiles = htmlFiles(staticDir);
  const unexpanded = outputFiles.filter(file => /\{\{t\b|\{\{\/t\}\}/.test(fs.readFileSync(file, 'utf8')));
  assert.deepEqual(unexpanded, [], 'generated site contains unexpanded translation helpers');
  const leakedTranslations = outputFiles.filter(file => /data-i18n(?:-meta)?/.test(fs.readFileSync(file, 'utf8')));
  assert.deepEqual(leakedTranslations, [], 'page-local translation data must not appear in generated HTML');
});

Given('the HTML pages in the language folders', function () {
  this.pages = languages.flatMap(lang => {
    const files = htmlFiles(path.join(staticDir, lang));
    assert.ok(files.length, `No HTML pages found for ${lang}`);
    assert.ok(files.every(file => !path.basename(file).startsWith('_')), 'included files must not be published');
    return files.map(file => ({ ...readPage(file), lang }));
  });
});

Then('every page declares its language, metadata, and main structure', function () {
  checkPages(this.pages, ({ $, html, file, lang }, expect) => {
    expect(/^<!doctype html>/i.test(html.trimStart()), 'missing HTML doctype');
    expect($('html').attr('lang') === lang, `html lang must be ${lang}`);
    expect($('body').attr('class') === pageBodyClass(path.relative(path.join(staticDir, lang), file)), 'body must have a page-specific class');
    expect($('head meta[charset]').length === 1 && $('head meta[charset]').attr('charset')?.toLowerCase() === 'utf-8', 'expected one UTF-8 charset');
    expect($('head meta[name="viewport"]').length === 1, 'missing viewport');
    expect($('head title').text().trim().length > 0, 'missing title');
    expect($('body > header').length === 1, 'missing header');
    expect($('body > main#main-content').length === 1, 'missing main#main-content');
    expect($('body > footer').length === 1, 'missing footer');
    expect(!/<!--#include\b/.test(html) && !/\{\{(?:langRoot|siteRoot|itPage|enPage)\}\}/.test(html), 'unexpanded component');
  });
});

Then('every page uses the shared assets with root-relative paths', function () {
  for (const asset of ['style.css', 'app.js', 'icons.svg']) {
    assert.ok(fs.statSync(path.join(staticDir, asset)).isFile(), `Missing shared asset ${asset}`);
  }
  checkPages(this.pages, ({ $ }, expect) => {
    const stylesheet = '/style.css';
    const script = '/app.js';
    expect($(`head link[rel="stylesheet"][href="${stylesheet}"]`).length === 1, `missing stylesheet ${stylesheet}`);
    expect($(`body script[src="${script}"]`).length === 1, `missing script ${script}`);
  });
});

Then('every published site image is referenced by compiled code', function () {
  const imageDir = path.join(staticDir, 'img');
  const images = filesIn(imageDir).filter(file =>
    path.basename(file).startsWith('site-') && /\.(?:apng|avif|bmp|gif|ico|jpe?g|png|svg|tiff?|webp)$/i.test(file)
  );
  const compiledCode = filesIn(staticDir)
    .filter(file => !file.startsWith(imageDir + path.sep) && /\.(?:html|css|js|svg)$/i.test(file))
    .map(file => fs.readFileSync(file, 'utf8'))
    .join('\n');
  const unreferenced = images
    .filter(file => {
      const relative = path.relative(imageDir, file).split(path.sep).join('/');
      return !compiledCode.includes(`img/${relative}`);
    })
    .map(file => path.relative(imageDir, file).split(path.sep).join('/'))
    .sort();
  assert.deepEqual(unreferenced, [], `unreferenced images: ${unreferenced.join(', ')}`);
});

Then('every page links consistently to the Italian and English versions', function () {
  checkPages(this.pages, ({ $, file, lang }, expect) => {
    expect($('head link[rel="alternate"][hreflang]').length === 2, 'expected two hreflang alternates');
    expect($('.lang-switcher').length === 1, 'expected one language switcher');
    for (const targetLang of languages) {
      const alternate = $(`head link[rel="alternate"][hreflang="${targetLang}"]`);
      const switchLink = $(`.lang-switcher a[hreflang="${targetLang}"][lang="${targetLang}"]`);
      expect(alternate.length === 1, `expected one ${targetLang} alternate`);
      expect(switchLink.length === 1, `expected one ${targetLang} language switch link`);
      const target = localTarget(file, alternate.attr('href'));
      const switchTarget = localTarget(file, switchLink.attr('href'));
      const languageDir = path.join(staticDir, targetLang) + path.sep;
      expect(target && target.startsWith(languageDir) && target.endsWith('.html') && fs.existsSync(target) && fs.statSync(target).isFile(), `${targetLang} alternate must target an existing HTML page in its language folder`);
      expect(target && target === switchTarget, `${targetLang} alternate and switch link must target the same page`);
      if (target && targetLang !== lang && target.startsWith(languageDir) && target.endsWith('.html') && fs.existsSync(target) && fs.statSync(target).isFile()) {
        const other = readPage(target).$;
        const backlink = other(`head link[rel="alternate"][hreflang="${lang}"]`);
        expect(backlink.length === 1 && localTarget(target, backlink.attr('href')) === file, `${targetLang} page must link back to this page`);
      }
      if (targetLang === lang) {
        expect(target === file, 'current-language link must target the current page');
        expect(switchLink.attr('aria-current') === 'true', 'current-language link must have aria-current="true"');
      } else {
        expect(switchLink.attr('aria-current') !== 'true', 'other-language link must not be current');
      }
    }
  });
});

Then('the navigation controls retain their accessibility attributes', function () {
  checkPages(this.pages, ({ $ }, expect) => {
    const button = $('button.menu-toggle-btn');
    const nav = $('nav.main-nav');
    expect(button.length === 1 && button.attr('aria-expanded') === 'false', 'menu button must start collapsed');
    expect(button.attr('aria-label')?.trim(), 'menu button needs an accessible label');
    expect(button.attr('aria-controls') && button.attr('aria-controls') === nav.attr('id'), 'menu button must control the navigation');
    expect(nav.length === 1 && nav.attr('aria-label')?.trim(), 'navigation needs an accessible label');
    $('[aria-haspopup]').each((_, element) => {
      const control = $(element);
      expect(['false', 'true'].includes(control.attr('aria-expanded')), 'dropdown control needs aria-expanded');
    });
  });
});

Then('YouTube videos do not load before consent', function () {
  let videoCount = 0;
  checkPages(this.pages, ({ $, lang }, expect) => {
    const labels = lang === 'it'
      ? ['Accetta e riproduci', 'Accetta e non chiedere più']
      : ['Accept and play', "Accept and don't ask again"];
    $('.youtube-consent').each((_, element) => {
      videoCount++;
      const video = $(element);
      const iframe = video.children('iframe');
      const buttons = video.find('[data-youtube-consent]');
      expect(iframe.length === 1, 'video placeholder must contain one iframe');
      expect(!iframe.attr('src'), 'YouTube iframe must not load before consent');
      expect(/^https:\/\/www\.youtube\.com\/embed\//.test(iframe.attr('data-youtube-src') || ''), 'video URL must be stored until consent');
      expect(buttons.length === 2 && buttons.eq(0).text().trim() === labels[0] && buttons.eq(1).text().trim() === labels[1], 'video consent buttons must be translated');
      expect(video.find('.youtube-consent__dialog h2').text().trim() === (lang === 'it' ? 'Avviso privacy' : 'Privacy notice'), 'privacy notice must be translated');
      const notice = video.find('.youtube-consent__dialog p').first().text().replace(/\s+/g, ' ').trim();
      expect(lang === 'it'
        ? notice.startsWith('Questo è un contenuto esterno ospitato su YouTube. Quando lo riproduci, può memorizzare cookie e trattare i tuoi dati.')
        : notice.startsWith('This is external content hosted on YouTube. When you play it, it may store cookies and process your data.'),
      'privacy notice must describe external content');
      const privacyLink = video.find('a[href="https://policies.google.com/privacy"]');
      const termsLink = video.find('a[href="https://www.youtube.com/t/terms"]');
      expect(privacyLink.length === 1, 'privacy policy link must be present');
      expect(termsLink.length === 1, 'terms link must be present');
      expect(privacyLink.text().trim() === (lang === 'it' ? 'Informativa privacy' : 'Privacy policy'), 'privacy policy link must be translated');
      expect(termsLink.text().trim() === (lang === 'it' ? 'Termini di servizio' : 'Terms of service'), 'terms link must be translated');
    });
  });
  assert.ok(videoCount > 0, 'expected generated YouTube video placeholders');
});

Then('the root page redirects to the Italian version', function () {
  const file = path.join(staticDir, 'index.html');
  const { $ } = readPage(file);
  const target = path.join(staticDir, 'it', 'index.html');
  const refresh = $('meta[http-equiv]').filter((_, element) => $(element).attr('http-equiv').toLowerCase() === 'refresh');
  const match = /^\s*0\s*;\s*url\s*=\s*(.+?)\s*$/i.exec(refresh.attr('content') || '');
  assert.equal(refresh.length, 1, 'expected one redirect');
  assert.equal(localTarget(file, match && match[1]), target, 'redirect must target the Italian homepage');
  assert.ok($('a[href]').toArray().some(element => localTarget(file, $(element).attr('href')) === target), 'fallback link must target the Italian homepage');
  assert.equal($('body').attr('class'), 'page-redirect', 'root redirect must have an identifying body class');
  assert.equal($('main').length, 0, 'the root page must remain a redirect');
});

Then('every internal link and asset resolves without HTML extensions', function () {
  const pages = [readPage(path.join(staticDir, 'index.html')), ...this.pages];
  const cache = new Map(pages.map(page => [page.file, page.$]));
  checkPages(pages, ({ $, file }, expect) => {
    $('[href], [src]').each((_, element) => {
      for (const attr of ['href', 'src']) {
        const href = $(element).attr(attr);
        const target = localTarget(file, href);
        if (!target) continue;
        expect(/^(?:\/|#|https?:)/i.test(href), `internal URL must be root-relative: ${href}`);
        expect(!/\.html(?:[?#]|$)/i.test(href), `internal URL must not use .html: ${href}`);
        const exists = fs.existsSync(target) && fs.statSync(target).isFile();
        expect(exists, `broken ${attr}: ${href}`);
        const fragment = href.split('#')[1];
        if (exists && fragment && /\.(?:html|svg)$/.test(target)) {
          if (!cache.has(target)) cache.set(target, load(fs.readFileSync(target, 'utf8'), { xmlMode: target.endsWith('.svg') }));
          const other = cache.get(target);
          const id = decodeURIComponent(fragment);
          expect(other('[id], a[name]').toArray().some(el => other(el).attr('id') === id || other(el).attr('name') === id), `missing fragment: ${href}`);
        }
      }
    });

  });
});

Then('the build supports a project base path without broken internal links', function () {
  const prefix = '/www.g3wsuite.it';
  const build = basePath => {
    const result = spawnSync(process.execPath, ['server.js', '--build'], {
      env: { ...process.env, SITE_BASE_PATH: basePath },
      encoding: 'utf8',
    });
    assert.equal(result.status, 0, result.stderr);
  };
  try {
    build(prefix);
    for (const file of htmlFiles(staticDir)) {
      const { $ } = readPage(file);
      $('[href], [src]').each((_, element) => {
        for (const attr of ['href', 'src']) {
          const href = $(element).attr(attr);
          if (!href || !href.startsWith('/') || href.startsWith('//')) continue;
          assert.ok(href.startsWith(prefix + '/'), `${file}: missing project prefix in ${href}`);
          const target = localTarget(file, href.slice(prefix.length));
          assert.ok(target && fs.existsSync(target) && fs.statSync(target).isFile(), `${file}: broken ${href}`);
        }
      });

    }
    const { $ } = readPage(path.join(staticDir, 'index.html'));
    assert.equal($('meta[http-equiv="refresh"]').attr('content'), `0; url=${prefix}/it/`);
    const demo = readPage(path.join(staticDir, 'en', 'demo', 'index.html')).$;
    assert.equal(demo('link[rel="stylesheet"]').attr('href'), `${prefix}/style.css`);
    assert.ok(demo('a[href="https://v311.g3wsuite.it/"]').length, 'external URLs must remain unchanged');
    const docs = readPage(path.join(staticDir, 'docs', 'index.html')).$;
    assert.equal(docs('form.docs-search').attr('data-index-url'), `${prefix}/docs/search-index.json`);
    const searchIndex = JSON.parse(fs.readFileSync(path.join(staticDir, 'docs', 'search-index.json'), 'utf8'));
    assert.ok(searchIndex.every(page => page.url.startsWith(`${prefix}/docs/`)), 'search results must include the project base path');
  } finally {
    build('');
  }
});

Then('every documentation source is Markdown and has a generated page', function () {
  const sourceDir = path.resolve('src/docs');
  const sources = filesIn(sourceDir);
  const pages = htmlFiles(path.join(staticDir, 'docs'));
  assert.ok(sources.length > 0, 'expected Markdown documentation sources');
  assert.ok(sources.every(file => file.endsWith('.md')), 'documentation sources must use Markdown');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'images')), 'documentation images must be stored outside src/docs');
  assert.equal(pages.length, sources.length, 'every Markdown source must generate one page');

  const index = readPage(path.join(staticDir, 'docs', 'index.html')).$;
  assert.ok(index('main h1').text().includes('G3W-SUITE 3.11'), 'documentation landing page is missing');
  for (const file of pages) {
    const page = readPage(file).$;
    const outputRelative = path.relative(path.join(staticDir, 'docs'), file).split(path.sep).join('/');
    assert.equal(page('body').attr('class'), pageBodyClass(path.join('docs', outputRelative)), `${file}: body must have a page-specific class`);
    const sourceRelative = outputRelative === 'index.html'
      ? 'index.md'
      : `${outputRelative.replace(/\/index\.html$/, '')}.md`;
    const sourcePath = sourceRelative.split('/').map(encodeURIComponent).join('/');
    assert.equal(page('nav.docs-toolbar').length, 1, `${file}: documentation toolbar is missing`);
    assert.ok(page('nav.docs-toolbar .docs-breadcrumb__home[href="/docs/"]').length, `${file}: documentation breadcrumb is missing its home link`);
    assert.equal(
      page('nav.docs-toolbar .docs-source-link').attr('href'),
      `https://github.com/g3w-suite/g3w-suite.github.io/edit/vanilla/src/docs/${sourcePath}`,
      `${file}: GitHub edit link does not match the Markdown source`
    );
  }
  const childPage = readPage(path.join(staticDir, 'docs', 'admin-users', 'index.html')).$;
  assert.ok(childPage('nav.docs-toolbar .docs-breadcrumb a[href="/docs/g3wsuite_administration/"]').length, 'child pages must link to their parent in the breadcrumb');
  assert.equal(
    childPage('main.docs-content a').filter((_, link) => childPage(link).text().startsWith('Back to')).length,
    0,
    'the breadcrumb must replace the duplicate back link'
  );
  assert.ok(index('nav.docs-nav a[href="/docs/settings/"]').length, 'navigation must link to the local settings page');
  assert.ok(fs.existsSync(path.join(staticDir, 'docs', 'settings', 'index.html')), 'settings Markdown page was not generated');
  assert.equal(index('body > header.site-header').length, 1, 'documentation must use the shared site header');
  assert.equal(index('body > footer.site-footer').length, 1, 'documentation must use the shared site footer');
  assert.equal(index('header.site-header .nav-list a[href="/docs/"]').length, 1, 'shared header must link to documentation');
  assert.equal(index('footer.site-footer a[href="/docs/"]').length, 1, 'shared footer must link to documentation');
  assert.equal(index('form.docs-search[role="search"] input[type="search"]').length, 1, 'documentation must include a search form');
  assert.equal(index('form.docs-search').attr('data-index-url'), '/docs/search-index.json');
  assert.equal(index('body > script[src="/app.js"]').length, 1, 'documentation must load the shared site script');
  const searchIndex = JSON.parse(fs.readFileSync(path.join(staticDir, 'docs', 'search-index.json'), 'utf8'));
  assert.equal(searchIndex.length, sources.length, 'every documentation page must appear in the search index');
  assert.ok(searchIndex.every(page => page.title && page.text && page.url.startsWith('/docs/')), 'search index entries must include title, content and local URL');

  const imagesDir = path.join(staticDir, 'img');
  const images = filesIn(imagesDir);
  assert.ok(images.length, 'static/img must contain documentation and site images');
  assert.ok(images.every(file => path.dirname(file) === imagesDir), 'static/img must not contain subfolders');
  assert.ok(!fs.existsSync(path.join(staticDir, 'images')), 'legacy static/images folder must not exist');
  assert.ok(!fs.existsSync(path.join(staticDir, 'docs', 'images')), 'documentation images must not be copied under docs');
});
