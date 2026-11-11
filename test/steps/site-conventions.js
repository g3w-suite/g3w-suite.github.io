'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { Given, Then } = require('@cucumber/cucumber');
const { load } = require('cheerio');

const publicDir = path.resolve('public');
const languages = ['it', 'en'];

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : entry.isFile() && file.endsWith('.html') ? [file] : [];
  });
}

function translationHelperPattern() {
  return /\{\{t\s+'((?:\\.|[^'\\])*)'\s*\}\}/g;
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
  const pagePath = path.relative(publicDir, file).split(path.sep).join('/');
  const url = new URL(href, `https://www.g3wsuite.it/${pagePath}`);
  if (!['http:', 'https:'].includes(url.protocol) || !['g3wsuite.it', 'www.g3wsuite.it'].includes(url.hostname)) return null;
  const target = path.join(publicDir, decodeURIComponent(url.pathname));
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
  const sourceDir = path.resolve('src');
  const decoder = new TextDecoder('utf-8', { fatal: true });
  const corrupted = /[\u0080-\u009f\ufffd]|\u00c3[\u0080-\u00bf\u0192]|\u00c2[\u0080-\u00bf]|\u00e2[\u0080\u20ac]|\u00ef\u00bf\u00bd/;
  for (const relative of fs.readdirSync(sourceDir, { recursive: true })) {
    if (!/\.(?:html|css|js|svg)$/.test(relative)) continue;
    const file = path.join(sourceDir, relative);
    let text;
    assert.doesNotThrow(() => { text = decoder.decode(fs.readFileSync(file)); }, `${relative}: invalid UTF-8`);
    if (relative.endsWith('.html')) text = load(text).html();
    assert.ok(!corrupted.test(text), `${relative}: corrupted character sequence`);
  }
});

Then('translated text is rendered for each language', function () {
  const sourceFiles = htmlFiles(path.resolve('src'));
  const sourceHtml = sourceFiles.map(file => fs.readFileSync(file, 'utf8'));
  const outputHtml = htmlFiles(publicDir).map(file => fs.readFileSync(file, 'utf8'));
  const pages = {
    it: readPage(path.join(publicDir, 'it', 'index.html')).$,
    en: readPage(path.join(publicDir, 'en', 'index.html')).$,
  };
  assert.equal(pages.it('.section-intro .section-label').first().text(), 'Inizia in pochi minuti');
  assert.equal(pages.en('.section-intro .section-label').first().text(), 'Get started in minutes');
  assert.equal(
    readPage(path.join(publicDir, 'it', 'demo', 'index.html')).$('meta[name="description"]').attr('content'),
    'Demo G3W-Suite relative ai branch attualmente supportati: stabile, bug fixing e sviluppo.',
    'explicit attribute translations must be rendered'
  );
  assert.ok(
    sourceHtml.some(source => source.includes("{{t 'G3W-Suite demos for currently supported branches: stable, bug fixing and dev.'}}")),
    'translated meta descriptions must use the translation helper'
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
  const translations = require(path.join(sourceDir, 'assets', 'i18n', 'it.json'));
  assert.ok(Object.values(translations).every(value => typeof value === 'string'), 'Italian translations must be flat string values');
  assert.ok(Object.hasOwn(translations, 'Features'), 'translation keys must be source strings');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'i18n')), 'obsolete translation folder still exists');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'translations.json')), 'obsolete translation catalog still exists');
  assert.ok(fs.existsSync(path.join(publicDir, 'assets', 'i18n', 'it.json')), 'translation catalog was not copied to the build output');
  for (const lang of languages) {
    assert.ok(!fs.existsSync(path.join(sourceDir, lang)), `language-specific source folder still exists: src/${lang}`);
    assert.ok(fs.existsSync(path.join(publicDir, lang, 'index.html')), `missing generated homepage for ${lang}`);
  }
  assert.ok(!fs.existsSync(path.join(sourceDir, 'pages')), 'page templates must be directly in src');
});

Then('translation keys are unique, sorted, and used by the Italian build', function () {
  const sourceDir = path.resolve('src');
  const catalogFile = path.join(sourceDir, 'assets', 'i18n', 'it.json');
  const catalogSource = fs.readFileSync(catalogFile, 'utf8');
  const catalogKeys = [...catalogSource.matchAll(/^\s*("(?:\\.|[^"\\])*")\s*:/gm)]
    .map(([, key]) => JSON.parse(key));
  const translations = require(catalogFile);
  const seen = new Set();
  const duplicates = catalogKeys.filter(key => {
    if (seen.has(key)) return true;
    seen.add(key);
    return false;
  });
  assert.deepEqual(duplicates, [], `duplicate translation keys: ${duplicates.join(', ')}`);
  assert.equal(catalogKeys.length, Object.keys(translations).length, 'every catalog key must be quoted');
  assert.deepEqual(
    catalogKeys,
    [...catalogKeys].sort((a, b) => a < b ? -1 : a > b ? 1 : 0),
    'translation keys must be sorted'
  );
  assert.deepEqual(
    catalogKeys.filter(key => /^(?:\/|https?:\/\/|mailto:)/i.test(key)),
    [],
    'URLs must not be translated as whole strings'
  );
  assert.ok(catalogKeys.every(key => !key.includes('{{langRoot}}')), 'catalog keys must not include URL placeholders');

  const sourceFiles = htmlFiles(sourceDir);
  const usedKeys = new Set();
  const unmarked = [];
  for (const file of sourceFiles) {
    const html = fs.readFileSync(file, 'utf8');
    const italianHtml = renderLanguageBlocks(html, 'it');
    for (const [, literal] of italianHtml.matchAll(translationHelperPattern())) {
      const key = literal.replace(/\\(['\\])/g, '$1');
      assert.ok(Object.hasOwn(translations, key), `${file}: unknown translation key "${key}"`);
      usedKeys.add(key);
    }
    unmarked.push(...findUnmarkedTranslations(path.relative(process.cwd(), file), html, translations));
  }
  const unusedKeys = catalogKeys.filter(key => !usedKeys.has(key));
  assert.deepEqual(unusedKeys, [], `translations not used by the Italian build: ${unusedKeys.join(', ')}`);
  assert.deepEqual(unmarked, [], `translatable strings missing {{t '...'}}: ${unmarked.join('\n')}`);

  const outputFiles = htmlFiles(path.join(publicDir, 'it'));
  const unexpanded = outputFiles.filter(file => /\{\{t\b|\{\{\/t\}\}/.test(fs.readFileSync(file, 'utf8')));
  assert.deepEqual(unexpanded, [], 'Italian build contains unexpanded translation helpers');
});

Given('the HTML pages in the language folders', function () {
  this.pages = languages.flatMap(lang => {
    const files = htmlFiles(path.join(publicDir, lang));
    assert.ok(files.length, `No HTML pages found for ${lang}`);
    assert.ok(files.every(file => !path.basename(file).startsWith('_')), 'included files must not be published');
    return files.map(file => ({ ...readPage(file), lang }));
  });
});

Then('every page declares its language, metadata, and main structure', function () {
  checkPages(this.pages, ({ $, html, lang }, expect) => {
    expect(/^<!doctype html>/i.test(html.trimStart()), 'missing HTML doctype');
    expect($('html').attr('lang') === lang, `html lang must be ${lang}`);
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
  for (const asset of ['style.css', 'app.js']) {
    assert.ok(fs.statSync(path.join(publicDir, 'assets', asset)).isFile(), `Missing shared asset ${asset}`);
  }
  checkPages(this.pages, ({ $ }, expect) => {
    const stylesheet = '/assets/style.css';
    const script = '/assets/app.js';
    expect($(`head link[rel="stylesheet"][href="${stylesheet}"]`).length === 1, `missing stylesheet ${stylesheet}`);
    expect($(`body script[src="${script}"]`).length === 1, `missing script ${script}`);
  });
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
      const languageDir = path.join(publicDir, targetLang) + path.sep;
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

Then('the root page redirects to the Italian version', function () {
  const file = path.join(publicDir, 'index.html');
  const { $ } = readPage(file);
  const target = path.join(publicDir, 'it', 'index.html');
  const refresh = $('meta[http-equiv]').filter((_, element) => $(element).attr('http-equiv').toLowerCase() === 'refresh');
  const match = /^\s*0\s*;\s*url\s*=\s*(.+?)\s*$/i.exec(refresh.attr('content') || '');
  assert.equal(refresh.length, 1, 'expected one redirect');
  assert.equal(localTarget(file, match && match[1]), target, 'redirect must target the Italian homepage');
  assert.ok($('a[href]').toArray().some(element => localTarget(file, $(element).attr('href')) === target), 'fallback link must target the Italian homepage');
  assert.equal($('main').length, 0, 'the root page must remain a redirect');
});

Then('every internal link and asset resolves without HTML extensions', function () {
  const pages = [readPage(path.join(publicDir, 'index.html')), ...this.pages];
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
    for (const file of htmlFiles(publicDir)) {
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
    const { $ } = readPage(path.join(publicDir, 'index.html'));
    assert.equal($('meta[http-equiv="refresh"]').attr('content'), `0; url=${prefix}/it/`);
    const demo = readPage(path.join(publicDir, 'en', 'demo', 'index.html')).$;
    assert.equal(demo('link[rel="stylesheet"]').attr('href'), `${prefix}/assets/style.css`);
    assert.ok(demo('a[href="https://v311.g3wsuite.it/"]').length, 'external URLs must remain unchanged');
  } finally {
    build('');
  }
});
