'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { Then } = require('@cucumber/cucumber');
const { missingPageKeys, updateCatalog, validateTranslation } = require('../../utils/update-translations');
const { languages: siteLanguages } = require('../../utils/config');
const { autoTranslateMarkdown } = require('../../utils/markdown');
const { catalog, pageCatalog, extractPageMetadata } = require('../../utils/translations');
const {
  staticDir,
  languages,
  filesIn,
  htmlFiles,
  pageSourceFiles,
  renderLanguageBlocks,
  findUnmarkedTranslations,
  translationHelperPattern,
  markdownTranslationKeys,
  readPage,
} = require('../support/site');

Then('the translation updater adds only missing source keys', function () {
  const file = 'docs/example.md';
  const entries = { [file]: { Existing: 'Gia tradotto' } };
  const markdown = [
    '---', 'title: New title', 'ogType: website', '---', '# Existing',
    'New **body** with `QGIS`.', '[Navigation label](/en/docs/)', '| Table heading |',
    'Read the [localized guide](https://{{#it}}it.{{/it}}example.org).',
    '<iframe title="{{t \'Video title\'}}"></iframe>',
    '{{#it}}Testo gia localizzato{{/it}}', '{{#en}}English branch{{/en}}',
    '```sh', 'echo Example', '```',
  ].join('\n');
  const missing = missingPageKeys(markdown, file, 'it', entries[file]);
  assert.deepEqual(missing.sort(), [
    'Navigation label', 'New **body** with `QGIS`.', 'New title', 'Table heading', 'Video title', 'localized guide',
  ]);
  assert.ok(missingPageKeys(markdown, file, 'fr', {}).includes('English branch'));
  const generated = Object.fromEntries([...missing, 'Existing'].map(key => [key, `Draft: ${key}`]));
  const updated = updateCatalog(entries, { [file]: [...missing, 'Existing'] }, generated);
  assert.equal(updated[file].Existing, 'Gia tradotto');
  assert.deepEqual(missingPageKeys(markdown, file, 'it', updated[file]), []);
});

Then('corrupted machine translations are rejected', function () {
  for (const [source, translated, error] of [
    ['No plugin needed.', `Inget ${'nej '.repeat(3)}plugin behövs.`, /repeated words/],
    ['Community', 'gemenskap gemenskap', /repeated words/],
    ['Enable snapping.', `Aktivieren Sie ${'Schnapp'.repeat(6)}.`, /repeated characters/],
    ['Open the map.', 'Відкрийте '.repeat(12), /repeated words/],
    ['Open the map.', 'С.В., '.repeat(4), /repeated words/],
    ['Open the map.', 'Відкрити, , , карту.', /repeated punctuation/],
    ['Read it.', 'Прочитайте . .', /repeated punctuation/],
    ['Read it.', 'Прочитайте.....', /repeated punctuation/],
    ['See ![Map](/img/map.avif).', 'Див. !!!!!!!!!', /repeated punctuation/],
    ['See ![Map](/img/map.avif).', 'Див. !!![Карта](/img/map.avif).', /repeated punctuation/],
    ['Use labels.', 'Використайте  підписи.', /repeated spaces/],
    ['user: **viewer1**', 'utilisateur : **visualiseur1**', /changed login value/],
    ['password: **example123**', 'mot de passe : **example123 (extra)**', /changed login value/],
    ['Title:', 'Titre & #160;:', /malformed HTML entity/],
    ['Data search', 'B?squeda de datos', /damaged text encoding/],
    ['Installation', 'Installazion\uFFFDe', /damaged text encoding/],
    ['Use QGIS 3.40 LTR.', 'Utiliser QGIS 3,40 LTR.', /changed software version/],
    ['Use QGIS 3.4.', 'Utiliser QGIS 3.44.', /changed software version/],
    ['**Open the map**', '** Ouvrir la carte**', /broken Markdown/],
    ['The **map** is ready.', 'La **carte ** est prête.', /broken Markdown/],
  ]) {
    assert.throws(() => updateCatalog({}, { 'example.md': [source] }, { [source]: translated }), error);
  }
  assert.throws(
    () => updateCatalog({}, { 'a.md': ['Title:'], 'b.md': ['Use labels.'] }, { 'Title:': 'Titre & #160;:' }),
    /a\.md: Corrupted translation: malformed HTML entity[\s\S]*Missing machine translation for b\.md/
  );
  assert.doesNotThrow(() => validateTranslation('user: **viewer1**', 'utilisateur : **viewer1**'));
  assert.doesNotThrow(() => validateTranslation('The **map** is ready.', 'La **carte** est prête.'));
  assert.doesNotThrow(() => validateTranslation('Wait!!!!', 'Attendez!!!!'));
  assert.doesNotThrow(() => validateTranslation('What is new?', '¿Qué hay de nuevo?'));
  assert.doesNotThrow(() => validateTranslation('Read the guide.', 'Leggi la [guida](guide?lang=it) su https://example.com/guide?lang=it.'));
  assert.doesNotThrow(() => validateTranslation('Use `a?b`.', 'Usa `a?b`.'));
  assert.doesNotThrow(() => validateTranslation('No no no!', 'Non non non !'));
  assert.doesNotThrow(() => validateTranslation('An ellipsis…', 'Wielokropek...'));
  assert.doesNotThrow(() => validateTranslation('Use `x y`.', 'Użyj `x  y`.'));
  assert.doesNotThrow(() => validateTranslation('A hard break', 'Łamanie wiersza  '));
});

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
  const about = path.join('src', 'about', 'index.md');
  assert.equal(
    extractPageMetadata(fs.readFileSync(about, 'utf8'), about).metadata.description,
    'Bring QGIS projects into everyday work with an open, modular WebGIS built for collaboration.'
  );
  assert.throws(() => extractPageMetadata('---\r\ntitle: [\r\n---\r\n', 'example.md'), /example\.md has invalid YAML front matter/);
  assert.throws(() => extractPageMetadata('---\ntitle: Example\n', 'example.md'), /example\.md has unclosed YAML front matter/);
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
Then('the page-scoped catalogs are valid and used by the build', function () {
  const sourceDir = path.resolve('src');
  const docs = filesIn(path.join(sourceDir, 'docs')).filter(file => file.endsWith('.md'));
  const sourceFiles = [
    ...pageSourceFiles(sourceDir),
    ...['_header.html', '_footer.html'].map(file => path.join(sourceDir, file)),
    ...docs,
  ];
  const sourceKeys = new Set([
    ...sourceFiles.map(file => path.relative(sourceDir, file).split(path.sep).join('/')),
    '@breadcrumb',
    '@documentation',
  ]);
  const catalogs = Object.fromEntries(siteLanguages.filter(lang => lang !== 'en').map(lang => [lang, catalog(lang)]));
  for (const [lang, entries] of Object.entries(catalogs)) {
    for (const source of Object.keys(entries)) assert.ok(sourceKeys.has(source), `${lang}/${source}: orphaned translations`);
    assert.ok(Object.hasOwn(entries, '@breadcrumb') && Object.hasOwn(entries, '@documentation'), `${lang}: missing shared labels`);
    for (const [page, values] of Object.entries(entries)) {
      for (const [source, translation] of Object.entries(values)) {
        assert.doesNotThrow(() => validateTranslation(source, translation), `${lang}/${page}: ${source}`);
      }
    }
  }
  const italian = catalogs.it;
  const unmarked = [];
  for (const file of sourceFiles) {
    const sourceHtml = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(sourceHtml, /<script\b[^>]*\bdata-i18n(?:-meta)?(?:\s|>)/, `${file}: use catalogs and front matter instead of scripts`);
    const { html, metadata } = extractPageMetadata(sourceHtml, file);
    const pageTranslations = pageCatalog('it', italian, path.relative(sourceDir, file));
    if (!path.basename(file).startsWith('_')) {
      assert.ok(metadata?.title && metadata.description, `${file}: page title and description must be declared in YAML front matter`);
    }
    const localUsage = new Map(languages.map(lang => [lang, new Set()]));
    if (path.relative(sourceDir, file) === '404.md') {
      for (const usage of localUsage.values()) usage.add('Search');
    }
    for (const [key, value] of Object.entries(metadata || {})) {
      if (key === 'ogType') continue;
      if (Object.hasOwn(pageTranslations.it || {}, value)) {
        localUsage.get('it').add(value);
      } else {
        assert.fail(`${file}: missing Italian translation for metadata "${value}"`);
      }
    }
    for (const [lang, entries] of Object.entries(pageTranslations)) {
      const keys = Object.keys(entries);
      assert.deepEqual(keys, [...keys].sort(), `${file}: ${lang} translations must be sorted`);
    }
    if (docs.includes(file)) continue;
    for (const lang of languages) {
      const localizedHtml = renderLanguageBlocks(html, lang);
      for (const [, literal] of localizedHtml.matchAll(translationHelperPattern())) {
        const key = literal.replace(/\\(['\\])/g, '$1');
        if (Object.hasOwn(pageTranslations[lang] || {}, key)) {
          localUsage.get(lang).add(key);
        } else if (lang === 'it') {
          assert.fail(`${file}: missing Italian translation for "${key}"`);
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
  const footer = readPage(path.join(staticDir, 'it', 'index.html')).$;
  const sponsors = readPage(path.join(staticDir, 'it', 'sponsors', 'index.html')).$;
  assert.match(footer('footer a[href^="mailto:"]').attr('href'), /subject=Supporto G3W-SUITE/);
  assert.match(sponsors('main').text(), /Sostieni G3W-SUITE/);
  const french = readPage(path.join(staticDir, 'fr', 'about', 'index.html')).$;
  assert.equal(french('.site-edit-link').text(), catalogs.fr['@breadcrumb'].Edit);
  assert.equal(french('head title').text(), catalogs.fr['about/index.md']['Open Source Ecosystem - G3W-Suite']);

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
  assert.equal(latestChangelogIt('main img[src="/img/site-bookmarks-projects.avif"]').attr('alt'), 'Schermata: progetti preferiti');
  assert.ok(latestChangelogIt('main').text().includes('riduzione superiore al 90% dei tempi di compilazione'));
  const changelog38It = readPage(path.join(staticDir, 'it', 'news', 'v3.8', 'index.html')).$;
  assert.ok(changelog38It('main').text().includes("L'elenco dei gruppi cartografici può essere filtrato"));
  const changelog39It = readPage(path.join(staticDir, 'it', 'news', 'v3.9', 'index.html')).$;
  assert.equal(changelog39It('main img[src="/img/site-grosseto-logo.avif"]').attr('alt'), 'Comune di Grosseto');
  const changelog310It = readPage(path.join(staticDir, 'it', 'news', 'v3.10', 'index.html')).$;
  const changelog310En = readPage(path.join(staticDir, 'en', 'news', 'v3.10', 'index.html')).$;
  assert.equal(changelog310It('main .sponsor-country').first().text(), 'Svizzera');
  assert.equal(changelog310En('main .sponsor-country').first().text(), 'Switzerland');
  assert.ok(changelog310It('main').text().includes('annotazioni sulla mappa'));
  for (const [lang, text, href] of [
    ['it', 'Guida rapida', '/it/docs/quick-start/'],
    ['en', 'Quick Start', '/en/docs/quick-start/'],
  ]) {
    const page = readPage(path.join(staticDir, lang, 'news', 'v3.9', 'index.html')).$;
    assert.equal(page('main .cta-box a.btn--outline').text().trim(), text);
    assert.equal(page('main .cta-box a.btn--outline').attr('href'), href);
    assert.equal(page('main .cta-box a.btn--primary').attr('href'), `/${lang}/docs/demo/#try-the-live-demo`);
  }
  const modelIt = readPage(path.join(staticDir, 'it', 'news', 'model-builder-processing', 'index.html')).$;
  assert.equal(modelIt('main h2').first().text().trim(), 'Funzionalità e impostazioni di QGIS Model Builder');
  const timeSeriesIt = readPage(path.join(staticDir, 'it', 'docs', 'bottom-panel-and-time-series', 'index.html')).$;
  assert.ok(timeSeriesIt('main').text().includes('la funzione Serie temporali è disponibile solo con QGIS Server versione >= 3.26'));
});
