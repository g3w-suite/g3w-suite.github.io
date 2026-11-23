'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { projectRoot, staticDir, sourceDir, siteOrigin, basePath, languages, publishedHtml } = require('../utils/config');
const { htmlFiles, markdownFiles } = require('../utils/files');
const { catalog, pageCatalog, localizeSiteLinks, renderLanguageBlocks, translate, translateHtml, extractPageMetadata, renderPageMetadata, renderPageAlternates, notFoundSearchLabel } = require('../utils/translations');
const { marked, getHeadingList, addHeadingAliases, autoTranslateMarkdown, renderPageMarkdown, renderChangelogMarkdown, renderYoutubeVideos, renderMarkdownButtonLinks } = require('../utils/markdown');
const { outputPage, languagePageUrl, renderLanguageLinks, renderBreadcrumb, renderComponent } = require('../utils/routes');
const { buildDocumentation } = require('../utils/documentation');
const { prepareMermaid, copyMermaidScript } = require('../utils/mermaid');

function build(outputDir) {
  const diagrams = new Set();
  const catalogs = Object.fromEntries(languages.map(lang => [lang, catalog(lang)]));
  const sourceFiles = [
    ...htmlFiles(sourceDir),
    ...markdownFiles(sourceDir),
  ];
  const pages = sourceFiles.filter(file =>
    path.relative(sourceDir, file).split(path.sep)[0] !== 'docs'
  ).map(file => ({
    file,
    page: path.relative(sourceDir, file),
  }));
  if (!pages.length) throw new Error('No source pages found in src');

  fs.mkdirSync(outputDir, { recursive: true });
  const redirectTemplate = fs.readFileSync(path.join(sourceDir, '_redirect.html'), 'utf8');
  const redirectPages = sourceFiles.map(file => path.relative(sourceDir, file));
  const redirectDirectories = new Set(redirectPages.map(page => outputPage(page).split(path.sep)[0]));
  redirectDirectories.delete('index.html');
  for (const entry of fs.readdirSync(outputDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || languages.includes(entry.name)) continue;
    const index = path.join(outputDir, entry.name, 'index.html');
    if (fs.existsSync(index) && /<body class="page-redirect">/.test(fs.readFileSync(index, 'utf8'))) {
      redirectDirectories.add(entry.name);
    }
  }
  for (const directory of redirectDirectories) {
    fs.rmSync(path.join(outputDir, directory), { recursive: true, force: true });
  }
  for (const page of redirectPages) {
    const pageUrls = Object.fromEntries(languages.map(lang => [lang, languagePageUrl(page, lang)]));
    const redirect = redirectTemplate.replace('{{languageLinks}}', renderLanguageLinks(pageUrls));
    const target = path.join(outputDir, outputPage(page));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, publishedHtml(redirect));
  }
  for (const lang of languages) {
    fs.rmSync(path.join(outputDir, lang), { recursive: true, force: true });
    fs.mkdirSync(path.join(outputDir, lang), { recursive: true });
  }

  const renderedPages = [];
  for (const { file, page } of pages) {
    const sourceHtml = fs.readFileSync(file, 'utf8');
    const pageMetadata = extractPageMetadata(sourceHtml, path.relative(projectRoot, file));
    const pageUrls = Object.fromEntries(languages.map(lang => [lang, languagePageUrl(page, lang)]));
    let sourceHeadings = [];
    if (path.extname(file) === '.md') {
      marked.parse(translateHtml(renderLanguageBlocks(pageMetadata.html, 'en'), 'en'));
      sourceHeadings = getHeadingList().map(({ id }) => id);
    }
    for (const lang of languages) {
      try {
        const translations = pageCatalog(lang, catalogs[lang], page);
        const pageHead = [
          renderPageMetadata(pageMetadata.metadata, lang, translations),
          renderPageAlternates(pageUrls),
          page === '404.md' ? '<meta name="robots" content="noindex">' : '',
        ].filter(Boolean).join('\n  ');
        let localized = translateHtml(
          renderLanguageBlocks(pageMetadata.html, lang),
          lang,
          translations
        );
        if (path.extname(file) === '.md') {
          localized = autoTranslateMarkdown(localized, lang, translations);
          localized = prepareMermaid(localized, diagrams, `${page} (${lang})`);
        }
        const content = localized.replace(
          /<!--#include file="(?:\.\.\/)?_(?:header|footer)\.html"-->/g,
          ''
        );
        let pageContent = path.extname(file) === '.md'
          ? page === path.join('news', 'index.md')
            ? renderPageMarkdown(content, page)
            : page.startsWith(`news${path.sep}`)
              ? renderChangelogMarkdown(content)
              : renderPageMarkdown(content, page)
          : content;
        if (page === '404.md') {
          const searchLabel = translate(notFoundSearchLabel, lang, translations);
          const search = `<form class="google-search" role="search" action="https://www.google.com/search" method="get">
            <input type="hidden" name="as_sitesearch" value="${new URL(siteOrigin).hostname}">
            <label for="google-search-input" class="sr-only">${searchLabel}</label>
            <input id="google-search-input" type="search" name="q" placeholder="${searchLabel}" required>
            <button type="submit" class="btn btn--primary">${searchLabel}</button>
          </form>`;
          const body = marked.parse(content);
          const heading = /<h1\b[^>]*>[\s\S]*?<\/h1>/.exec(body);
          if (!heading) throw new Error('Not-found page has no main heading');
          pageContent = `<main id="main-content"><div class="page-header"><div class="container">${heading[0]}</div></div><section class="section"><div class="container">${body.replace(heading[0], '')}${search}</div></section></main>`;
        }
        if (lang !== 'en') pageContent = addHeadingAliases(pageContent, sourceHeadings);
        const header = renderComponent('header', lang, page, pageUrls, catalogs[lang], pageHead);
        const footer = renderComponent('footer', lang, page, pageUrls, catalogs[lang]);
        const output = renderMarkdownButtonLinks(renderYoutubeVideos(`${header}\n${localizeSiteLinks(pageContent, lang)}\n${footer}`));
        const title = /<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(pageContent)?.[1].replace(/<[^>]*>/g, '').trim();
        if (!title) throw new Error('Page has no main heading for the breadcrumb');
        renderedPages.push({ page, lang, url: pageUrls[lang], title, output });
      } catch (e) {
        e.message = `${path.relative(projectRoot, file)} (${lang}): ${e.message}`;
        throw e;
      }
    }
  }
  const titles = new Map(renderedPages.map(({ url, title }) => [url, title]));
  for (const { page, lang, url, title, output } of renderedPages) {
    let result = output;
    if (page !== 'index.md' && page !== '404.md') {
      const segments = url.split('/').filter(Boolean);
      const items = [];
      for (let index = 2; index < segments.length; index++) {
        const parentUrl = `/${segments.slice(0, index).join('/')}/`;
        if (titles.has(parentUrl)) items.push({ href: parentUrl, label: titles.get(parentUrl) });
      }
      items.push({ label: title });
      result = output.replace(/(<main\b[^>]*>)/i, `$1${renderBreadcrumb(lang, items, page, catalogs[lang])}`);
    }
    const target = path.join(outputDir, lang, outputPage(page));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, publishedHtml(result));
  }
  buildDocumentation(outputDir, diagrams, catalogs);
  fs.copyFileSync(
    path.join(outputDir, 'en', outputPage('404.md')),
    path.join(outputDir, '404.html')
  );
  const sitemapUrls = languages.flatMap(lang =>
    htmlFiles(path.join(outputDir, lang))
      .filter(file => path.relative(path.join(outputDir, lang), file) !== path.join('404', 'index.html'))
      .map(file => {
      const route = path.relative(outputDir, file).split(path.sep).join('/').replace(/index\.html$/, '');
      return `${siteOrigin}${basePath}/${route}`;
      })
  );
  fs.writeFileSync(path.join(outputDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}${basePath}/sitemap.xml\n`);
  fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapUrls.map(url => `  <url><loc>${url}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n'));
  const mermaidScript = path.join(outputDir, 'mermaid.min.js');
  if (diagrams.size) copyMermaidScript(outputDir);
  else fs.rmSync(mermaidScript, { force: true });

  const highlightScript = require.resolve('@highlightjs/cdn-assets/highlight.min.js');
  const highlightDir = path.dirname(highlightScript);
  const highlightOutput = path.join(outputDir, 'highlight');
  fs.mkdirSync(highlightOutput, { recursive: true });
  const nginx = fs.readFileSync(path.join(highlightDir, 'languages', 'nginx.min.js'), 'utf8');
  const po = String.raw`hljs.registerLanguage('po', hljs => ({
    aliases: ['gettext'],
    contains: [hljs.HASH_COMMENT_MODE, hljs.QUOTE_STRING_MODE, { scope: 'keyword', match: /\b(?:msgctxt|msgid_plural|msgid|msgstr)\b/ }]
  }));`;
  fs.writeFileSync(path.join(highlightOutput, 'highlight.min.js'), [fs.readFileSync(highlightScript, 'utf8'), nginx, po].join('\n;\n'));
  const theme = fs.readFileSync(path.join(highlightDir, 'styles', 'github.min.css'), 'utf8');
  fs.writeFileSync(path.join(highlightOutput, 'github.min.css'), `${theme}\n.docs-content pre:has(> code.hljs) { padding: 0; }\n`);
  fs.copyFileSync(path.join(highlightDir, 'LICENSE'), path.join(highlightOutput, 'LICENSE'));
}

function runBuild(dir, exitOnError = true) {
  try {
    build(dir);
    return true;
  } catch (e) {
    // Short message (no stack) + GitHub annotation so the error shows in the run summary
    console.error(process.env.GITHUB_ACTIONS ? `::error title=Build failed::${e.message}` : `Build failed: ${e.message}`);
    if (exitOnError) process.exit(1);
    return false;
  }
}

module.exports = { build, runBuild };
