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
  const comparison = '**Available for QGIS >= 3.26**';
  const autolink = 'See <https://example.test/docs>.';
  const entries = { it: { [comparison]: '**Disponibile per QGIS >= 3.26**', [autolink]: 'Vedi <https://example.test/docs>.' } };
  assert.equal(autoTranslateMarkdown(`${comparison}\n${autolink}`, 'it', entries), `${entries.it[comparison]}\n${entries.it[autolink]}`);
  assert.equal(autoTranslateMarkdown(`${comparison}\n${autolink}`, 'en', entries), `${comparison}\n${autolink}`);
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
  assert.equal(readPage(path.join(staticDir, 'it', 'about', 'index.html')).$('head title').text(), 'Ecosistema Open Source - G3W-Suite');
  assert.equal(readPage(path.join(staticDir, 'en', 'about', 'index.html')).$('head title').text(), 'Open Source Ecosystem - G3W-Suite');
  assert.equal(
    readPage(path.join(staticDir, 'it', 'about', 'index.html')).$('meta[name="description"]').attr('content'),
    'Porta i progetti QGIS nel lavoro quotidiano con un WebGIS open source e modulare, pensato per la collaborazione.',
    'explicit attribute translations must be rendered'
  );
  assert.ok(
    sourceHtml.some(source => source.includes('"description": "Bring QGIS projects into everyday work with an open, modular WebGIS built for collaboration."')),
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
  assert.deepEqual(
    homepageIt('main ol').first().children('li').map((_, element) => homepageIt(element).children('p').first().text().trim()).get(),
    ['Crea il tuo progetto QGIS', 'Sincronizza i tuoi dati geografici', 'Pubblica il tuo progetto QGIS', 'Gestisci gli accessi e attiva le funzionalità aggiuntive']
  );
  const exploreIt = readPage(path.join(staticDir, 'it', 'about', 'index.html')).$;
  assert.equal(exploreIt('main h1').first().text().trim(), 'Ecosistema Open Source');
  assert.equal(readPage(path.join(staticDir, 'en', 'about', 'index.html')).$('main h1').first().text().trim(), 'Open Source Ecosystem');
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
  const latestChangelogIt = readPage(path.join(staticDir, 'it', 'news', 'v3.11', 'index.html')).$;
  assert.equal(latestChangelogIt('main .sponsor-country').first().text(), 'Svizzera');
  assert.equal(latestChangelogIt('main img[src="/img/site-bookmarks-projects.png"]').attr('alt'), 'Schermata: progetti preferiti');
  assert.ok(latestChangelogIt('main').text().includes('riduzione superiore al 90% dei tempi di compilazione'));
  const changelog38It = readPage(path.join(staticDir, 'it', 'news', 'v3.8', 'index.html')).$;
  assert.ok(changelog38It('main').text().includes("L'elenco dei gruppi cartografici può essere filtrato"));
  const changelog39It = readPage(path.join(staticDir, 'it', 'news', 'v3.9', 'index.html')).$;
  assert.equal(changelog39It('main img[src="/img/site-grosseto-logo.png"]').attr('alt'), 'Comune di Grosseto');
  const changelog310It = readPage(path.join(staticDir, 'it', 'news', 'v3.10', 'index.html')).$;
  const changelog310En = readPage(path.join(staticDir, 'en', 'news', 'v3.10', 'index.html')).$;
  assert.equal(changelog310It('main .sponsor-country').first().text(), 'Svizzera');
  assert.equal(changelog310En('main .sponsor-country').first().text(), 'Switzerland');
  assert.ok(changelog310It('main').text().includes('annotazioni sulla mappa'));
  for (const [lang, text, href] of [
    ['it', 'Guida rapida', '/it/docs/quick-start/'],
    ['en', 'Quick Start', '/docs/quick-start/'],
  ]) {
    const page = readPage(path.join(staticDir, lang, 'news', 'v3.9', 'index.html')).$;
    assert.equal(page('main .cta-box a.btn--outline').text().trim(), text);
    assert.equal(page('main .cta-box a.btn--outline').attr('href'), href);
    assert.equal(page('main .cta-box a.btn--primary').attr('href'), `${lang === 'it' ? '/it' : ''}/docs/demos/#demo-3-11`);
  }
  const modelIt = readPage(path.join(staticDir, 'it', 'news', 'model-builder-processing', 'index.html')).$;
  assert.equal(modelIt('main h2').first().text().trim(), 'Funzionalità e impostazioni di QGIS Model Builder');
  const timeSeriesIt = readPage(path.join(staticDir, 'it', 'docs', 'client-bottom-session', 'index.html')).$;
  assert.ok(timeSeriesIt('main').text().includes('la funzione Serie temporali è disponibile solo con QGIS Server versione >= 3.26'));
});
