'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { Then } = require('@cucumber/cucumber');
const { autoTranslateMarkdown } = require('../../utils/markdown');
const {
  staticDir,
  languages,
  htmlFiles,
  pageSourceFiles,
  extractPageTranslations,
  extractPageMetadata,
  renderLanguageBlocks,
  findUnmarkedTranslations,
  translationHelperPattern,
  markdownTranslationKeys,
  readPage,
} = require('../support/site');

Then('translated text is rendered for each language', function () {
  const imageLink = '[![Contributor](https://example.test/avatar.png) Contributor](/en/about/contributor/)';
  assert.equal(
    autoTranslateMarkdown(imageLink, 'it'),
    '[![Contributor](https://example.test/avatar.png) Contributor](/it/about/contributor/)',
    'internal links wrapping images must use the current language route'
  );
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
  assert.equal(pages.it('main > section:nth-of-type(2) h2 > strong:first-of-type').first().text(), 'Inizia in pochi minuti');
  assert.equal(pages.en('main > section:nth-of-type(2) h2 > strong:first-of-type').first().text(), 'Get started in minutes');
  assert.equal(readPage(path.join(staticDir, 'it', 'explore', 'index.html')).$('head title').text(), 'Esplora G3W-SUITE - G3W-Suite');
  assert.equal(readPage(path.join(staticDir, 'en', 'explore', 'index.html')).$('head title').text(), 'Explore G3W-SUITE - G3W-Suite');
  assert.equal(
    readPage(path.join(staticDir, 'it', 'explore', 'index.html')).$('meta[name="description"]').attr('content'),
    'G3W-SUITE pubblica servizi WebGIS da progetti QGIS e offre editing collaborativo, analisi e opzioni flessibili di distribuzione.',
    'explicit attribute translations must be rendered'
  );
  assert.ok(
    sourceHtml.some(source => source.includes('"description": "G3W-SUITE publishes WebGIS services from QGIS projects and provides collaborative editing, analysis and flexible deployment options."')),
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
      if (file.endsWith('.md')) {
        for (const key of markdownTranslationKeys(localizedHtml)) {
          if (Object.hasOwn(pageTranslations[lang] || {}, key)) localUsage.get(lang).add(key);
        }
      }
    }
    const unusedLocal = Object.entries(pageTranslations).flatMap(([lang, entries]) =>
      Object.keys(entries).filter(key => !localUsage.get(lang).has(key)).map(key => `${lang}: ${key}`)
    );
    assert.deepEqual(unusedLocal, [], `${file}: unused page-local translations`);
    if (!file.endsWith('.md')) {
      unmarked.push(...findUnmarkedTranslations(
        path.relative(process.cwd(), file),
        html,
        pageTranslations.it || {}
      ));
    }
  }
  assert.deepEqual(unmarked, [], `translatable strings missing {{t '...'}}: ${unmarked.join('\n')}`);

  const outputFiles = htmlFiles(staticDir);
  const unexpanded = outputFiles.filter(file => /\{\{t\b|\{\{\/t\}\}/.test(fs.readFileSync(file, 'utf8')));
  assert.deepEqual(unexpanded, [], 'generated site contains unexpanded translation helpers');
  const leakedTranslations = outputFiles.filter(file => /data-i18n(?:-meta)?/.test(fs.readFileSync(file, 'utf8')));
  assert.deepEqual(leakedTranslations, [], 'page-local translation data must not appear in generated HTML');

  const homepageIt = readPage(path.join(staticDir, 'it', 'index.html')).$;
  assert.equal(
    homepageIt('main > section > .container > h2').first().text().trim(),
    'Inizia in pochi minuti Pubblica il tuo progetto QGIS in 4 passi'
  );
  assert.equal(
    homepageIt('main > section > .container > h2').eq(1).text().trim(),
    'Dal desktop al web in pochi clic'
  );
  assert.equal(
    readPage(path.join(staticDir, 'en', 'index.html')).$('main > section > .container > h2').first().text().trim(),
    'Get started in minutes Publish your QGIS project in 4 steps'
  );
  assert.ok(!homepageIt('main').text().includes('opit'), 'whole-block translation must not corrupt substrings');
  assert.equal(homepageIt('main a[href="/it/news/merginmaps/"]').text().trim(), 'Scopri le soluzioni');
  assert.equal(
    readPage(path.join(staticDir, 'en', 'index.html')).$('main a[href="/en/news/merginmaps/"]').text().trim(),
    'Discover the solutions'
  );
  assert.equal(homepageIt('main a[href="/it/docs/quick-start/"]').text().trim(), 'Guida rapida');
  const exploreIt = readPage(path.join(staticDir, 'it', 'explore', 'index.html')).$;
  assert.equal(exploreIt('main h1').first().text().trim(), 'Esplora G3W-SUITE');
  const quickStartIt = readPage(path.join(staticDir, 'it', 'docs', 'quick-start', 'index.html')).$;
  assert.equal(quickStartIt('main h1').first().text().trim(), 'Guida rapida');
  assert.equal(quickStartIt('main iframe').length, 4);
  assert.equal(quickStartIt('main iframe').first().attr('title'), 'Guida rapida 1: crea il tuo progetto QGIS');
  const merginMapsIt = readPage(path.join(staticDir, 'it', 'news', 'merginmaps', 'index.html')).$;
  assert.equal(
    merginMapsIt('main li').filter((_, element) => merginMapsIt(element).text().startsWith('Formazione')).first().text().trim(),
    'Formazione: preparazione del progetto QGIS, creazione e progettazione dei moduli di inserimento dati, mappe di sfondo, raccolta dati sul campo, sincronizzazione e tutto il necessario per ottenere i migliori risultati.'
  );
  const changelogIt = readPage(path.join(staticDir, 'it', 'news', 'v3.0', 'index.html')).$;
  assert.equal(
    changelogIt('main p').filter((_, element) => changelogIt(element).text().includes('funzionalità e le proprietà del server QGIS')).first().text().trim(),
    'Le funzionalità e le proprietà del server QGIS, come tutti i servizi da esso supportati (WMS, WFS, WCS ecc.), sono ora gestite e controllate da G3W-SUITE tramite la QGIS API.'
  );
});
