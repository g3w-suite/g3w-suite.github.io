'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { Given, Then } = require('@cucumber/cucumber');
const { load } = require('cheerio');
const { staticDir, languages, filesIn, htmlFiles, pageBodyClass, readPage, localTarget, checkPages } = require('../support/site');

Given('the HTML pages in the language folders', function () {
  this.pages = languages.flatMap(lang => {
    const languageDir = path.join(staticDir, lang);
    const files = htmlFiles(languageDir).filter(file =>
      !path.relative(languageDir, file).startsWith(`docs${path.sep}`)
    );
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
    const main = $('body > main#main-content');
    const heading = main.find('h1').first();
    for (const section of main.children('section').toArray()) {
      expect($(section).children('.container').length === 1, 'main section must have one container');
    }
    const pagePath = path.relative(path.join(staticDir, lang), file).split(path.sep).join('/');
    const breadcrumb = main.children('nav.site-breadcrumb');
    if (pagePath === 'index.html') {
      expect(breadcrumb.length === 0, 'homepage must not have a breadcrumb');
      expect(main.find('.site-edit-link').length === 0, 'homepage must not have an edit link');
    } else {
      expect(breadcrumb.length === 1, 'page must have one breadcrumb');
      expect(breadcrumb.find(`a[href="/${lang}/"]`).length === 1, 'breadcrumb must link to the localized home');
      expect(breadcrumb.find('[aria-current="page"]').text().trim() === heading.text().trim(), 'breadcrumb must identify the current page');
      const edit = breadcrumb.find('> .container > a.site-edit-link');
      expect(edit.length === 1, 'breadcrumb must contain one edit link');
      expect(edit.text().trim() === (lang === 'it' ? 'Modifica' : 'Edit'), 'edit link must use the current language');
      const examples = {
        'about/index.html': 'about/index.md',
        'about/francesco-boccacci/index.html': 'about/francesco-boccacci.md',
        'news/v3.11/index.html': 'news/2026-04-08-changelog-v3.11.md',
      };
      if (examples[pagePath]) {
        expect(edit.attr('href') === `https://github.com/g3w-suite/g3w-suite.github.io/edit/vanilla/src/${examples[pagePath]}`, 'edit link must point to the source file');
      }
      const parent = pagePath.split('/').slice(0, -2).join('/');
      if (parent) expect(breadcrumb.find(`a[href="/${lang}/${parent}/"]`).length === 1, 'breadcrumb must link to the parent page');
    }
    if (!main.find('.changelog').length) {
      expect(main.find('hr:not([style])').length === 0, 'Markdown section separators must be compiled');
    }
    if (heading.length && !main.hasClass('docs-content')) {
      const homepage = path.relative(path.join(staticDir, lang), file) === 'index.html';
      expect(
        homepage ? !heading.closest('.page-header').length : heading.closest('.page-header').length === 1,
        homepage ? 'homepage h1 must remain in the hero' : 'main h1 must use the generated page header'
      );
    }
    if (path.relative(path.join(staticDir, lang), file) === path.join('about', 'index.html')) {
      for (const id of ['features', 'components', 'people']) {
        expect(main.find(`[id="${id}"]`).length === 1, `missing section anchor #${id}`);
      }
    }
  });
});
Then('every page uses the shared assets with root-relative paths', function () {
  for (const asset of ['app.css', 'app.js', 'icons.svg']) {
    assert.ok(fs.statSync(path.join(staticDir, asset)).isFile(), `Missing shared asset ${asset}`);
  }
  checkPages(this.pages, ({ $ }, expect) => {
    const stylesheet = '/app.css';
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
Then('every generated image uses lazy loading', function () {
  const missing = [];
  for (const file of htmlFiles(staticDir)) {
    const { $ } = readPage(file);
    $('img').each((_, image) => {
      if ($(image).attr('loading') !== 'lazy') {
        missing.push(`${path.relative(staticDir, file)}: ${$(image).attr('src') || '<missing src>'}`);
      }
    });
  }
  assert.deepEqual(missing, [], `generated images without loading="lazy":\n${missing.join('\n')}`);
});
Then('every generated image has non-empty alternative text', function () {
  const missing = [];
  let count = 0;
  for (const file of htmlFiles(staticDir)) {
    const { $ } = readPage(file);
    let pageCount = 0;
    $('img').each((_, image) => {
      if (!$(image).attr('alt')?.trim()) {
        pageCount += 1;
      }
    });
    if (pageCount) {
      count += pageCount;
      missing.push(`${path.relative(staticDir, file)} (${pageCount})`);
    }
  }
  assert.equal(
    missing.length,
    0,
    `generated images with missing alt text: ${count} images across ${missing.length} pages\n${missing.join('\n')}`
  );
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
  checkPages(this.pages, ({ $, lang, file }, expect) => {
    const button = $('button.menu-toggle-btn');
    const nav = $('nav.main-nav');
    expect(button.length === 1 && button.attr('aria-expanded') === 'false', 'menu button must start collapsed');
    expect(button.attr('aria-label')?.trim(), 'menu button needs an accessible label');
    expect(button.attr('aria-controls') && button.attr('aria-controls') === nav.attr('id'), 'menu button must control the navigation');
    expect(nav.length === 1 && nav.attr('aria-label')?.trim(), 'navigation needs an accessible label');
    const expectedNavigation = lang === 'it'
      ? [
          ['Il progetto', `/${lang}/about/`],
          ['Documentazione', '/it/docs/'],
          ['Sponsor', `/${lang}/sponsors/`],
          ['Novità', `/${lang}/news/`],
          ['Community', `/${lang}/community/`],
        ]
      : [
          ['About', `/${lang}/about/`],
          ['Documentation', '/docs/'],
          ['Sponsors', `/${lang}/sponsors/`],
          ['News', `/${lang}/news/`],
          ['Community', `/${lang}/community/`],
        ];
    expect(nav.find('.nav-list > li > a').toArray().every((link, index) =>
      $(link).text().trim() === expectedNavigation[index]?.[0] &&
      $(link).attr('href') === expectedNavigation[index]?.[1]
    ) && nav.find('.nav-list > li').length === expectedNavigation.length, 'navigation must match the top-level destinations');
    const relativePage = path.relative(path.join(staticDir, lang), file);
    const pageRoute = path.dirname(relativePage);
    const expectedActiveKey = relativePage === 'index.html'
      ? null
      : relativePage.startsWith(`news${path.sep}`)
        ? 'news'
      : relativePage.startsWith(`docs${path.sep}`)
        ? 'documentation'
        : relativePage.startsWith(`about${path.sep}`)
          ? 'about'
        : relativePage.startsWith(`sponsors${path.sep}`)
          ? 'sponsors'
        : ['community', 'sponsors'].includes(pageRoute)
            ? pageRoute
            : null;
    const currentLinks = nav.find('a[aria-current="page"]');
    const activeHref = {
      about: `/${lang}/about/`,
      documentation: lang === 'it' ? '/it/docs/' : '/docs/',
      sponsors: `/${lang}/sponsors/`,
      news: `/${lang}/news/`,
      community: `/${lang}/community/`,
    }[expectedActiveKey];
    expect(expectedActiveKey
      ? currentLinks.length === 1 && currentLinks.attr('href') === activeHref
      : currentLinks.length === 0, 'only the current top-level page should be marked current');
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
