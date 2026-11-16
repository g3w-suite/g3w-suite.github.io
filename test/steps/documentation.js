'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { Then } = require('@cucumber/cucumber');
const { load } = require('cheerio');
const { staticDir, languages, filesIn, htmlFiles, pageBodyClass, readPage, localTarget } = require('../support/site');

Then('release links are available in the documentation navigation', function () {
  const releasePattern = /^(\d{4}-\d{2}-\d{2})-changelog-(v\d+\.\d+)\.md$/;
  const releaseRoutes = filesIn(path.resolve('src/news'))
    .map(file => releasePattern.exec(path.basename(file)))
    .filter(Boolean)
    .sort((a, b) => b[1].localeCompare(a[1]))
    .map(([, , version]) => version);

  for (const lang of languages) {
    const docsRoot = path.join(staticDir, ...(lang === 'it' ? ['it', 'docs'] : ['docs']));
    const index = readPage(path.join(docsRoot, 'index.html')).$;
    const releaseSection = index('nav.docs-nav > details.docs-release-notes');
    assert.equal(releaseSection.length, 1, `${lang} release links must be in the documentation navigation`);
    assert.equal(releaseSection.attr('open'), undefined, `${lang} release notes must be collapsed initially`);
    assert.equal(releaseSection.find('summary').text().trim(), 'Changelog');
    assert.deepEqual(
      releaseSection.find('a').map((_, link) => link.attribs.href).get(),
      releaseRoutes.map(version => `/${lang}/news/${version}/`),
      `${lang} documentation home must show each release`
    );
    assert.equal(index('main > .docs-release-notes').length, 0, `${lang} release notes must not occupy the main content`);
    assert.equal(
      releaseSection.find('a').first().text().trim(),
      `${lang === 'it' ? 'Versione' : 'Version'} ${releaseRoutes[0].slice(1)}`,
      `${lang} release links must use the localized label`
    );

    for (const file of htmlFiles(docsRoot)) {
      const page = readPage(file).$;
      const releases = page('nav.docs-nav > details.docs-release-notes');
      assert.equal(releases.length, 1, `${file}: release links must appear on every documentation page`);
      assert.deepEqual(
        releases.find('a').map((_, link) => link.attribs.href).get(),
        releaseRoutes.map(version => `/${lang}/news/${version}/`),
        `${file}: release links must match the documentation home`
      );
    }
  }
});
Then('every documentation source is Markdown and has a generated page', function () {
  const sourceDir = path.resolve('src/docs');
  const sources = filesIn(sourceDir);
  const pages = htmlFiles(path.join(staticDir, 'docs'));
  assert.ok(sources.length > 0, 'expected Markdown documentation sources');
  assert.ok(sources.every(file => file.endsWith('.md')), 'documentation sources must use Markdown');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'images')), 'documentation images must be stored outside src/docs');
  assert.equal(pages.length, sources.length + 1, 'Quick Start must also retain its previous route');
  for (const file of sources) {
    const source = fs.readFileSync(file, 'utf8');
    const block = /<script type="application\/json" data-i18n>([\s\S]*?)<\/script>/.exec(source);
    assert.ok(block, `${file}: Italian translations are missing`);
    let translations;
    assert.doesNotThrow(() => { translations = JSON.parse(block[1]); }, `${file}: translation JSON is invalid`);
    assert.ok(translations.it && Object.keys(translations.it).length, `${file}: Italian translations are empty`);
    const keys = Object.keys(translations.it);
    assert.deepEqual(keys, [...keys].sort(), `${file}: Italian translations must be sorted`);
  }

  const index = readPage(path.join(staticDir, 'docs', 'index.html')).$;
  assert.equal(index('main h1').text(), 'Quick Start', 'documentation home must show Quick Start');
  const italianPages = htmlFiles(path.join(staticDir, 'it', 'docs'));
  assert.equal(italianPages.length, sources.length + 1, 'Italian Quick Start must also retain its previous route');
  const italianIndex = readPage(path.join(staticDir, 'it', 'docs', 'index.html')).$;
  assert.equal(italianIndex('html').attr('lang'), 'it');
  assert.equal(italianIndex('main h1').text(), 'Guida rapida');
  assert.equal(index('nav.docs-nav section').first().find('h2').text(), 'Getting started');
  assert.equal(index('nav.docs-nav section details[open]').length, 1, 'only the current navigation group must start open');
  assert.equal(index('nav.docs-nav section a').first().attr('href'), '/docs/');
  assert.equal(italianIndex('nav.docs-nav section a').first().attr('href'), '/it/docs/');
  assert.equal(italianIndex('nav.docs-nav section a').first().text(), 'Guida rapida');
  assert.equal(index('nav.docs-nav section a').first().attr('aria-current'), 'page');
  assert.equal(italianIndex('nav.docs-nav section a').first().attr('aria-current'), 'page');
  assert.ok(index('nav.docs-nav a[href="/docs/overview/"]').length, 'navigation must retain the manual overview');
  assert.ok(readPage(path.join(staticDir, 'docs', 'overview', 'index.html')).$('main h1').text().includes('G3W-SUITE 3.11'));
  const oldQuickStart = readPage(path.join(staticDir, 'docs', 'quick-start', 'index.html')).$;
  assert.equal(oldQuickStart('main h1').text(), 'Quick Start');
  assert.equal(oldQuickStart('link[rel="canonical"]').attr('href'), '/docs/');
  assert.ok(italianIndex('nav.docs-nav a[href="/it/docs/settings/"]').length, 'Italian navigation must link to the localized settings page');
  assert.equal(italianIndex('header.site-header .nav-list a[href="/it/docs/"]').length, 1, 'Italian documentation header must link to its localized home');
  assert.equal(italianIndex('footer.site-footer a[href="/it/docs/"]').length, 1, 'Italian documentation footer must link to its localized home');
  assert.equal(italianIndex('form.docs-search').attr('data-index-url'), '/it/docs/search-index.json');
  const italianIntroduction = readPage(path.join(staticDir, 'it', 'docs', 'introduction', 'index.html')).$;
  assert.equal(italianIntroduction('main h1').text(), 'Introduzione');
  for (const file of pages) {
    const page = readPage(file).$;
    const outputRelative = path.relative(path.join(staticDir, 'docs'), file).split(path.sep).join('/');
    const italianFile = path.join(staticDir, 'it', 'docs', outputRelative);
    const italianPage = readPage(italianFile).$;
    for (const [document, name] of [[page, file], [italianPage, italianFile]]) {
      assert.equal(document('head style').length, 0, `${name}: styles must use the shared stylesheet`);
      assert.equal(document('head link[rel="stylesheet"][href="/style.css"]').length, 1, `${name}: shared stylesheet is missing`);
    }
    assert.equal(page('body').attr('class'), pageBodyClass(path.join('docs', outputRelative)), `${file}: body must have a page-specific class`);
    assert.equal(italianPage('body').attr('class'), pageBodyClass(path.join('docs', outputRelative)), `${italianFile}: body must have a page-specific class`);
    const sourceRelative = outputRelative === 'index.html'
      ? 'quick-start.md'
      : outputRelative === 'overview/index.html'
        ? 'index.md'
        : `${outputRelative.replace(/\/index\.html$/, '')}.md`;
    const docsRoute = outputRelative === 'index.html' ? '' : outputRelative.replace(/\/index\.html$/, '');
    const englishRoute = docsRoute ? `/docs/${docsRoute}/` : '/docs/';
    const italianRoute = docsRoute ? `/it/docs/${docsRoute}/` : '/it/docs/';
    const sourcePath = sourceRelative.split('/').map(encodeURIComponent).join('/');
    assert.equal(page('.docs-toolbar').length, 0, `${file}: the old documentation toolbar must not remain`);
    assert.ok(page('nav.site-breadcrumb a[href="/en/"]').length, `${file}: breadcrumb is missing the site home link`);
    assert.equal(page('main > .page-header h1').length, 1, `${file}: documentation page header is missing`);
    assert.equal(page('nav.site-breadcrumb [aria-current="page"]').text(), page('main > .page-header h1').text(), `${file}: breadcrumb must identify the current page`);
    assert.ok(italianPage('nav.site-breadcrumb a[href="/it/"]').length, `${italianFile}: breadcrumb is missing the localized site home link`);
    if (outputRelative !== 'index.html') {
      assert.equal(page('nav.site-breadcrumb a[href="/docs/"]').first().text(), 'Documentation');
      assert.equal(italianPage('nav.site-breadcrumb a[href="/it/docs/"]').first().text(), 'Documentazione');
    }
    assert.equal(italianPage('main > .page-header h1').length, 1, `${italianFile}: localized page header is missing`);
    assert.equal(italianPage('nav.site-breadcrumb [aria-current="page"]').text(), italianPage('main > .page-header h1').text(), `${italianFile}: breadcrumb must identify the current page`);
    assert.equal(
      page('nav.site-breadcrumb > .container > a.site-edit-link').attr('href'),
      `https://github.com/g3w-suite/g3w-suite.github.io/edit/vanilla/src/docs/${sourcePath}`,
      `${file}: GitHub edit link does not match the Markdown source`
    );
    assert.equal(page('.site-edit-link').length, 1, `${file}: expected one edit link`);
    assert.equal(page('.site-edit-link').text(), 'Edit');
    assert.equal(italianPage('.site-edit-link').length, 1, `${italianFile}: expected one localized edit link`);
    assert.equal(italianPage('.site-edit-link').text(), 'Modifica');
    assert.equal(italianPage('.site-edit-link').attr('href'), page('.site-edit-link').attr('href'), `${italianFile}: edit link must target the shared source`);
    assert.equal(page('html').attr('lang'), 'en', `${file}: English docs must declare their language`);
    assert.equal(italianPage('html').attr('lang'), 'it', `${italianFile}: Italian docs must declare their language`);
    assert.equal(page('head link[rel="alternate"][hreflang="it"]').attr('href'), italianRoute);
    assert.equal(page('head link[rel="alternate"][hreflang="en"]').attr('href'), englishRoute);
    assert.equal(italianPage('head link[rel="alternate"][hreflang="it"]').attr('href'), italianRoute);
    assert.equal(italianPage('head link[rel="alternate"][hreflang="en"]').attr('href'), englishRoute);
    assert.equal(italianPage('.lang-switcher a[hreflang="it"][lang="it"]').attr('href'), italianRoute);
    assert.equal(italianPage('.lang-switcher a[hreflang="en"][lang="en"]').attr('href'), englishRoute);
  }
  const childPage = readPage(path.join(staticDir, 'docs', 'admin-users', 'index.html')).$;
  assert.ok(childPage('nav.site-breadcrumb a[href="/docs/g3wsuite_administration/"]').length, 'child pages must link to their parent in the breadcrumb');
  assert.equal(childPage('nav.docs-nav section details[open] a[href="/docs/g3wsuite_administration/"]').length, 1, 'child pages must open the parent navigation group');
  assert.equal(
    childPage('.docs-content a').filter((_, link) => childPage(link).text().startsWith('Back to')).length,
    0,
    'the breadcrumb must replace the duplicate back link'
  );
  const italianChildPage = readPage(path.join(staticDir, 'it', 'docs', 'admin-users', 'index.html')).$;
  assert.ok(italianChildPage('nav.site-breadcrumb a[href="/it/docs/g3wsuite_administration/"]').length, 'Italian child pages must link to their localized parent breadcrumb');
  assert.equal(italianChildPage('nav.site-breadcrumb a[href="/it/docs/g3wsuite_administration/"]').text(), 'G3W-ADMIN: il pannello di amministrazione');
  assert.ok(index('nav.docs-nav a[href="/docs/settings/"]').length, 'navigation must link to the local settings page');
  assert.ok(fs.existsSync(path.join(staticDir, 'docs', 'settings', 'index.html')), 'settings Markdown page was not generated');
  assert.equal(index('body > header.site-header').length, 1, 'documentation must use the shared site header');
  assert.equal(index('body > footer.site-footer').length, 1, 'documentation must use the shared site footer');
  assert.equal(index('header.site-header .nav-list a[href="/docs/"]').length, 1, 'shared English header must link to English documentation');
  assert.equal(index('footer.site-footer a[href="/docs/"]').length, 1, 'shared English footer must link to English documentation');
  assert.equal(index('form.docs-search[role="search"] input[type="search"]').length, 1, 'documentation must include a search form');
  assert.equal(index('form.docs-search').attr('data-index-url'), '/docs/search-index.json');
  assert.equal(index('body > script[src="/app.js"]').length, 1, 'documentation must load the shared site script');
  const searchIndex = JSON.parse(fs.readFileSync(path.join(staticDir, 'docs', 'search-index.json'), 'utf8'));
  assert.equal(searchIndex.length, sources.length, 'every documentation page must appear in the search index');
  assert.ok(searchIndex.every(page => page.title && page.text && page.url.startsWith('/docs/')), 'search index entries must include title, content and local URL');
  const italianSearchIndex = JSON.parse(fs.readFileSync(path.join(staticDir, 'it', 'docs', 'search-index.json'), 'utf8'));
  assert.equal(italianSearchIndex.length, sources.length, 'every documentation page must appear in the Italian search index');
  assert.ok(italianSearchIndex.every(page => page.title && page.text && page.url.startsWith('/it/docs/')), 'Italian search results must include localized page URLs');
  const englishPages = new Map(searchIndex.map(page => [page.url, page]));
  for (const page of italianSearchIndex) {
    const englishPage = englishPages.get(page.url.replace('/it/docs/', '/docs/'));
    assert.ok(englishPage, `${page.url}: missing English search entry`);
    assert.notEqual(
      `${page.title}\n${page.text}`,
      `${englishPage.title}\n${englishPage.text}`,
      `${page.url}: Italian content is not translated`
    );
  }

  for (const [lang, docsPages] of [['en', pages], ['it', italianPages]]) {
    const expected = new Set(docsPages);
    const visited = new Set();
    const queue = [path.join(staticDir, ...(lang === 'it' ? ['it', 'docs'] : ['docs']), 'index.html')];
    for (const file of queue) {
      if (visited.has(file)) continue;
      visited.add(file);
      const page = readPage(file).$;
      page('a[href]').each((_, link) => {
        const target = localTarget(file, page(link).attr('href'));
        if (expected.has(target) && !visited.has(target)) queue.push(target);
      });
    }
    assert.deepEqual([...expected].filter(file => !visited.has(file)), [], `${lang}: documentation pages must be reachable`);
  }

  const linkedPages = new Map();
  for (const file of [...pages, ...italianPages]) {
    const page = readPage(file).$;
    page('.docs-content a[href*="#"]').each((_, link) => {
      const href = page(link).attr('href');
      const url = new URL(href, 'https://www.g3wsuite.it/');
      if (!url.hash || !['g3wsuite.it', 'www.g3wsuite.it'].includes(url.hostname)) return;
      const target = localTarget(file, href);
      if (!target || !target.endsWith('.html')) return;
      if (!linkedPages.has(target)) linkedPages.set(target, readPage(target).$);
      const targetPage = linkedPages.get(target);
      const fragment = decodeURIComponent(url.hash.slice(1));
      const found = targetPage('[id], a[name]').toArray().some(element =>
        targetPage(element).attr('id') === fragment || targetPage(element).attr('name') === fragment
      );
      assert.ok(found, `${path.relative(staticDir, file)}: missing documentation fragment ${href}`);
    });
  }

  const imagesDir = path.join(staticDir, 'img');
  const images = filesIn(imagesDir);
  assert.ok(images.length, 'static/img must contain documentation and site images');
  assert.ok(images.every(file => path.dirname(file) === imagesDir), 'static/img must not contain subfolders');
  assert.ok(!fs.existsSync(path.join(staticDir, 'images')), 'legacy static/images folder must not exist');
  assert.ok(!fs.existsSync(path.join(staticDir, 'docs', 'images')), 'documentation images must not be copied under docs');
});
