'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { Then } = require('@cucumber/cucumber');
const { staticDir, languages, filesIn, htmlFiles, pageSourceFiles, newsSlug, readPage } = require('../support/site');

Then('sponsor profiles link to their credited releases in both languages', function () {
  const sponsors = {
    'arpa-liguria': '3.3,3.10,3.11',
    'arpa-piemonte': '3.4,3.5,3.7',
    'bonifica-renana': '3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.8,3.10,3.11',
    'citta-metropolitana-roma': '3.5',
    'cnr-irpi': '3.4,3.9',
    'comune-bari': '3.3,3.4',
    'comune-grosseto': '3.6,3.9',
    'comune-palermo': '3.3',
    'comune-trento': '3.3,3.4,3.6',
    'comunita-carnia': '3.6,3.10',
    'foca-management-partners': '3.8',
    gis3w: '3.0,3.1,3.8,3.9,3.10',
    intercad: '3.10',
    lea: '3.10,3.11',
    'museo-civico-rovereto': '3.9',
    planetek: '3.1,3.2,3.3,3.4',
    qmap: '3.8',
    qtibia: '3.7',
    'regione-lazio': '3.2,3.5',
    risval: '3.0',
    stantec: '3.10',
  };
  for (const lang of languages) {
    const index = readPage(path.join(staticDir, lang, 'sponsors', 'index.html')).$;
    for (const [slug, versions] of Object.entries(sponsors)) {
      assert.equal(index(`main a[href="/${lang}/sponsors/${slug}/"]`).length, 1, `${lang}: missing ${slug}`);
      const profile = readPage(path.join(staticDir, lang, 'sponsors', slug, 'index.html')).$;
      assert.equal(profile(`main a[href="/${lang}/sponsors/"]`).length, 1, `${lang}: ${slug} must link back`);
      assert.deepEqual(
        profile(`main a[href^="/${lang}/news/v"]`).map((_, link) => link.attribs.href).get(),
        versions.split(',').map(version => `/${lang}/news/v${version}/`),
        `${lang}: ${slug} must link to its credited releases`
      );
      assert.equal(profile('main h2').first().text(), lang === 'it' ? 'Contributo a G3W-SUITE' : 'Contribution to G3W-SUITE');
    }
  }
});

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
Then('both languages are generated from shared page templates', function () {
  const sourceDir = path.resolve('src');
  assert.ok(fs.existsSync(path.join(sourceDir, 'index.md')), 'missing shared homepage template');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'index.html')), 'homepage source must be Markdown');
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
  assert.ok(!fs.existsSync(path.join(sourceDir, 'changelog')), 'changelog source folder must be removed');
  const newsFiles = filesIn(path.join(sourceDir, 'news')).map(file => path.basename(file)).sort();
  const datedNewsFiles = newsFiles.filter(file => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(file));
  assert.deepEqual(newsFiles, [
    '2020-06-30-changelog-v3.0.md',
    '2020-11-18-changelog-v3.1.md',
    '2021-04-07-changelog-v3.2.md',
    '2021-10-07-changelog-v3.3.md',
    '2022-04-05-changelog-v3.4.md',
    '2022-11-15-changelog-v3.5.md',
    '2023-05-17-changelog-v3.6.md',
    '2023-12-13-changelog-v3.7.md',
    '2023-12-13-model-builder-processing.md',
    '2024-03-16-merginmaps.md',
    '2024-06-17-changelog-v3.8.md',
    '2025-01-23-changelog-v3.9.md',
    '2025-07-30-changelog-v3.10.md',
    '2026-04-08-changelog-v3.11.md',
    '2026-11-13-geospatial-infrastructure.md',
    'index.md',
  ]);
  const newsIndexSource = fs.readFileSync(path.join(sourceDir, 'news', 'index.md'), 'utf8').split('<script')[0];
  const listedArticles = [...newsIndexSource.matchAll(/\]\(\/en\/news\/([^/]+)\/\)/g)].map(([, slug]) => slug);
  assert.deepEqual(
    listedArticles.slice().sort(),
    datedNewsFiles.map(newsSlug).sort(),
    'news must list every dated article exactly once'
  );
  const listedDates = listedArticles.map(slug =>
    datedNewsFiles.find(file => newsSlug(file) === slug).slice(0, 10)
  );
  assert.deepEqual(
    listedDates,
    listedDates.slice().sort().reverse(),
    'news articles must be listed newest first'
  );
  for (const file of datedNewsFiles) {
    const source = fs.readFileSync(path.join(sourceDir, 'news', file), 'utf8');
    assert.match(source, /\[G3W-SUITE team\]\(\/en\/about\/g3w-suite-team\/\)/, `${file} must link to its author profile`);
  }
  for (const page of ['about/index', 'about/g3w-suite-team', 'explore/index']) {
    assert.ok(fs.existsSync(path.join(sourceDir, `${page}.md`)), `${page} page source must be Markdown`);
    assert.ok(!fs.existsSync(path.join(sourceDir, `${page}.html`)), `${page} HTML source must be removed`);
  }
  const markdownPages = {
    community: 'community/index',
    index: 'index',
    sponsors: 'sponsors/index',
  };
  for (const [name, source] of Object.entries(markdownPages)) {
    assert.ok(fs.existsSync(path.join(sourceDir, `${source}.md`)), `${name} page source must be Markdown`);
    assert.ok(!fs.existsSync(path.join(sourceDir, `${source}.html`)), `${name} HTML source must be removed`);
  }
  for (const lang of languages) {
    const homepage = readPage(path.join(staticDir, lang, 'index.html')).$;
    assert.equal(homepage('.hero__subtitle').length, 1, `${lang} homepage hero content must render as HTML`);
    assert.equal(homepage(`a[href="/${lang}/news/geospatial-infrastructure/"]`).length, 0, `${lang} homepage must not duplicate the News article`);
    for (const name of Object.keys(markdownPages)) {
      const file = name === 'index'
        ? path.join(staticDir, lang, 'index.html')
        : path.join(staticDir, lang, name, 'index.html');
      const page = readPage(file).$;
      assert.equal(page('main#main-content').length, 1, `${lang} ${name} page must keep its main content`);
      assert.equal(page('main pre code').length, 0, `${lang} ${name} page must not render HTML as a code block`);
      if (name === 'index') {
        const githubButtons = page('a.btn--github');
        assert.ok(githubButtons.length, `${lang} ${name} page must keep its GitHub buttons`);
        assert.equal(
          page('a.btn--github svg use[href="/icons.svg#github"]').length,
          githubButtons.length,
          `${lang} ${name} page must reuse the GitHub icon sprite`
        );
      }
    }
    const explore = readPage(path.join(staticDir, lang, 'explore', 'index.html')).$;
    const sections = explore('main > section.section');
    const demoCards = explore('main > section.demo-card');
    assert.equal(sections.length, 7, `${lang} Explore page must create sections from headings`);
    assert.equal(demoCards.length, 3, `${lang} Explore page must preserve its demo cards`);
    assert.equal(explore('ul.demo-grid, li.demo-card').length, 0, `${lang} demo cards must not use list markup`);
    for (const id of ['demo-3-11', 'demo-3-10']) {
      assert.equal(explore(`#${id}`).length, 1, `${lang} Explore page must preserve #${id}`);
    }
    assert.ok(
      demoCards.toArray().every(section =>
        explore(section).find('h2, p').length >= 2 && explore(section).find('ul > li > a').length > 0),
      `${lang} demo cards must keep their heading, description, and actions`
    );
    assert.equal(sections.eq(3).find('table th').length, 9, `${lang} Explore compatibility section must render its table`);
    const features = sections.eq(4).children('.container');
    assert.equal(features.children('h2').length, 1, `${lang} feature section must start with its h2`);
    assert.equal(features.children('section.section').length, 5, `${lang} feature section must group its h3 topics`);
    assert.equal(explore('main a[href*="/explore/g3w-"]').length, 7, `${lang} Explore page must link to all component pages`);
    for (const component of [
      'g3w-admin',
      'g3w-client',
      'g3w-admin-processing',
      'g3w-admin-frontend',
      'g3w-admin-pdnd',
      'g3w-suite-docker',
      'g3w-client-plugin-editing',
    ]) {
      const componentPage = readPage(path.join(staticDir, lang, 'explore', component, 'index.html')).$;
      assert.ok(componentPage('main img[alt]').length, `${lang} ${component} page must include an image with alt text`);
      assert.equal(
        componentPage(`nav a[aria-current="page"][href="/${lang}/explore/"]`).length,
        1,
        `${lang} ${component} page must mark Explore as current`
      );
    }
    assert.ok(!fs.existsSync(path.join(staticDir, lang, 'demo')), `${lang} legacy demo route must be removed`);
    assert.ok(!fs.existsSync(path.join(staticDir, lang, 'modules')), `${lang} legacy modules route must be removed`);
    const newsIndex = readPage(path.join(staticDir, lang, 'news', 'index.html')).$;
    assert.equal(newsIndex('main h2').length, 0, `${lang} news index must not add a section heading`);
    assert.equal(
      newsIndex('main > p').first().text().trim(),
      lang === 'it' ? 'Ultime novità su G3W-SUITE' : 'Latest updates from G3W-SUITE',
      `${lang} news index must keep its short introduction`
    );
    assert.deepEqual(
      newsIndex(`main a[href^="/${lang}/news/"]`).map((_, link) => link.attribs.href).get(),
      listedArticles.map(slug => `/${lang}/news/${slug}/`),
      `${lang} news must list articles newest first`
    );
    for (const file of datedNewsFiles) {
      const article = readPage(path.join(staticDir, lang, 'news', newsSlug(file), 'index.html')).$;
      assert.equal(
        article(`main a[href="/${lang}/about/g3w-suite-team/"]`).text().trim(),
        'G3W-SUITE team',
        `${lang} ${file} must link to its author profile`
      );
    }
    for (const file of datedNewsFiles) {
      const article = newsSlug(file);
      assert.equal(newsIndex(`main a[href="/${lang}/news/${article}/"]`).length, 1, `${lang} news must link to ${article}`);
      const newsArticle = readPage(path.join(staticDir, lang, 'news', article, 'index.html')).$;
      assert.equal(newsArticle('.changelog').length, 1, `${lang} ${article} must use the single-column article layout`);
      if (article === 'geospatial-infrastructure') {
        assert.equal(
          newsArticle('main h1').first().text(),
          lang === 'it' ? 'Una piattaforma per gestire la tua infrastruttura geospaziale' : 'A platform for managing your geospatial infrastructure'
        );
        assert.equal(
          newsArticle('main h2').first().text(),
          lang === 'it' ? 'Parti dai progetti QGIS che hai già' : 'Start with the QGIS work you already have'
        );
      }
    }
  }
  assert.deepEqual(
    htmlFiles(sourceDir).filter(file => !path.basename(file).startsWith('_')),
    [],
    'all source pages must use Markdown'
  );
  for (const file of pageSourceFiles(sourceDir)) {
    const source = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(
      source,
      /<!--#include file="(?:\.\.\/)?_(?:header|footer)\.html"-->/,
      `${file}: shared shell components must be injected by the build`
    );
    assert.doesNotMatch(source, /<!doctype html>|<\/?html\b|<\/?head\b|<\/?body\b/i, `${file}: document shell must come from shared components`);
  }
  assert.ok(!fs.existsSync(path.join(sourceDir, 'demo.md')), 'demo content must live in explore/index.md');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'modules.md')), 'component pages must live under explore/');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'pages')), 'page templates must be directly in src');
});
Then('site page sources contain only the allowed HTML elements', function () {
  const sourceDir = path.resolve('src');
  const pages = [
    'community/index.md',
    'index.md',
    'sponsors/index.md',
    'about/index.md',
    'explore/index.md',
    'news/index.md',
    'news/2024-03-16-merginmaps.md',
    'news/2023-12-13-model-builder-processing.md',
  ];
  assert.ok(!fs.existsSync(path.join(sourceDir, 'community.md')), 'community page must live under community/');
  assert.ok(!fs.existsSync(path.join(sourceDir, 'sponsors.md')), 'sponsors page must live under sponsors/');
  for (const page of pages) {
    const file = path.join(sourceDir, page);
    const source = fs.readFileSync(file, 'utf8');
    assert.equal((source.match(/<main\b[^>]*>/gi) || []).length, 0, `${file}: main element is injected by the build`);
    for (const [opening] of source.matchAll(/<script\b[^>]*>/gi)) {
      assert.match(opening, /^<script type="application\/json" data-i18n(?:-meta)?>$/i, `${file}: only translation scripts are allowed`);
    }

    const markdown = source
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, '')
      .replace(/^(#{1,6}\s.*)$/gm, heading => heading.replace(/<span id="[^"]+"><\/span>/g, ''));
    assert.doesNotMatch(markdown, /<\/?[a-z][^>]*>/i, `${file}: use Markdown instead of other HTML elements`);
  }
});
Then('homepage steps keep titles and descriptions in separate paragraphs', function () {
  for (const lang of languages) {
    const home = readPage(path.join(staticDir, lang, 'index.html')).$;
    const steps = home('main > section > .container > ol > li');
    assert.equal(steps.length, 4, `${lang}: expected four homepage steps`);
    steps.each((index, element) => {
      const step = home(element);
      assert.equal(step.children('p').length, index < 2 ? 3 : 2, `${lang}: step ${index + 1} must preserve its paragraphs`);
      assert.equal(step.children('p').first().children('strong').length, 1, `${lang}: step ${index + 1} must have a separate title`);
      assert.equal(step.children().not('p').length, 0, `${lang}: step descriptions must stay inside their list item`);
    });
  }
});
Then('generated buttons retain their styles and external-link behavior', function () {
  for (const lang of languages) {
    const home = readPage(path.join(staticDir, lang, 'index.html')).$;
    assert.ok(home('main a.btn--primary').length, `${lang} homepage must render primary buttons`);
    assert.ok(home('main a.btn--light').length, `${lang} homepage must render light buttons`);
    assert.ok(home('main a.btn--outline.btn--sm').length, `${lang} homepage must render small outline buttons`);
    assert.equal(home('main a.btn--github svg use[href="/icons.svg#github"]').length, home('main a.btn--github').length);
    assert.equal(home('main a[title$="-button"]').length, 0, `${lang} homepage must consume button markers`);

    const explore = readPage(path.join(staticDir, lang, 'explore', 'index.html')).$;
    assert.ok(explore('main a.btn--primary').length, `${lang} Explore page must render primary buttons`);
    assert.ok(explore('main a.btn--outline').length, `${lang} Explore page must render outline buttons`);
    assert.equal(explore('main a[title$="-button"]').length, 0, `${lang} Explore page must consume button markers`);

    const model = readPage(path.join(staticDir, lang, 'news', 'model-builder-processing', 'index.html')).$;
    const demoButton = model('main a.btn--primary');
    assert.equal(demoButton.attr('target'), '_blank', `${lang} external Markdown buttons must open in a new tab`);
    assert.equal(demoButton.attr('rel'), 'noopener', `${lang} external Markdown buttons must be safe`);
  }
});
