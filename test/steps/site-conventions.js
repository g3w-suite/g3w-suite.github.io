'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
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

function readPage(file) {
  const html = fs.readFileSync(file, 'utf8');
  return { file, html, $: load(html) };
}

function relativeAsset(file, name) {
  return path.relative(path.dirname(file), path.join(publicDir, 'assets', name)).split(path.sep).join('/');
}

function localTarget(file, href) {
  if (!href || /^(?:[a-z][a-z\d+.-]*:|[\\/]|#)/i.test(href)) return null;
  return path.resolve(path.dirname(file), href.split(/[?#]/, 1)[0]);
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

Given('the HTML pages in the language folders', function () {
  this.pages = languages.flatMap(lang => {
    const files = htmlFiles(path.join(publicDir, lang));
    assert.ok(files.length, `No HTML pages found for ${lang}`);
    return files.map(file => ({ ...readPage(file), lang }));
  });
});

Then('every page declares its language, metadata, and main structure', function () {
  checkPages(this.pages, ({ $, html, lang }, expect) => {
    expect(/^<!doctype html>/i.test(html.trimStart()), 'missing HTML doctype');
    expect($('html').attr('lang') === lang, `html lang must be ${lang}`);
    expect($('head meta[charset]').attr('charset')?.toLowerCase() === 'utf-8', 'missing UTF-8 charset');
    expect($('head meta[name="viewport"]').length === 1, 'missing viewport');
    expect($('head title').text().trim().length > 0, 'missing title');
    expect($('body > header').length === 1, 'missing header');
    expect($('body > main#main-content').length === 1, 'missing main#main-content');
    expect($('body > footer').length === 1, 'missing footer');
  });
});

Then('every page uses the shared assets with correct relative paths', function () {
  for (const asset of ['style.css', 'app.js']) {
    assert.ok(fs.statSync(path.join(publicDir, 'assets', asset)).isFile(), `Missing shared asset ${asset}`);
  }
  checkPages(this.pages, ({ $, file }, expect) => {
    const stylesheet = relativeAsset(file, 'style.css');
    const script = relativeAsset(file, 'app.js');
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
