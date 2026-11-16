'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { projectRoot, staticDir, sourceDir, languages, publishedHtml } = require('../utils/config');
const { htmlFiles, markdownFiles } = require('../utils/files');
const { renderLanguageBlocks, translateHtml, extractPageTranslations, extractPageMetadata, renderPageMetadata, renderPageAlternates } = require('../utils/translations');
const { autoTranslateMarkdown, renderPageMarkdown, renderChangelogMarkdown, renderYoutubeVideos, renderMarkdownButtonLinks } = require('../utils/markdown');
const { outputPage, languagePageUrl, renderBreadcrumb, renderComponent } = require('../utils/routes');
const { buildDocumentation } = require('../utils/documentation');
const { prepareMermaid, renderMermaid } = require('../utils/mermaid');

function build(outputDir) {
  const diagrams = new Map();
  const pageFiles = [
    ...htmlFiles(sourceDir),
    ...markdownFiles(sourceDir).filter(file =>
      path.relative(sourceDir, file).split(path.sep)[0] !== 'docs'
    ),
  ];
  const pages = pageFiles.map(file => ({
    file,
    page: path.relative(sourceDir, file),
  }));
  if (!pages.length) throw new Error('No source pages found in src');

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), publishedHtml(fs.readFileSync(path.join(sourceDir, '_redirect.html'), 'utf8')));
  for (const lang of languages) {
    fs.rmSync(path.join(outputDir, lang), { recursive: true, force: true });
    fs.mkdirSync(path.join(outputDir, lang), { recursive: true });
  }

  const renderedPages = [];
  for (const { file, page } of pages) {
    const sourceHtml = fs.readFileSync(file, 'utf8');
    const pageTemplate = extractPageTranslations(sourceHtml, path.relative(projectRoot, file));
    const pageMetadata = extractPageMetadata(pageTemplate.html, path.relative(projectRoot, file));
    const pageUrls = Object.fromEntries(languages.map(lang => [lang, languagePageUrl(page, lang)]));
    for (const lang of languages) {
      try {
        const pageHead = [
          renderPageMetadata(pageMetadata.metadata, lang, pageTemplate.translations),
          renderPageAlternates(pageUrls),
        ].filter(Boolean).join('\n  ');
        let localized = translateHtml(
          renderLanguageBlocks(pageMetadata.html, lang),
          lang,
          pageTemplate.translations
        );
        if (path.extname(file) === '.md') {
          localized = autoTranslateMarkdown(localized, lang, pageTemplate.translations);
          localized = prepareMermaid(localized, diagrams, `${page} (${lang})`);
        }
        const content = localized.replace(
          /<!--#include file="(?:\.\.\/)?_(?:header|footer)\.html"-->/g,
          ''
        );
        const pageContent = path.extname(file) === '.md'
          ? page === path.join('news', 'index.md')
            ? renderPageMarkdown(content, page)
            : page.startsWith(`news${path.sep}`)
              ? renderChangelogMarkdown(content)
              : renderPageMarkdown(content, page)
          : content;
        const header = renderComponent('header', lang, page, pageUrls, pageHead);
        const footer = renderComponent('footer', lang, page, pageUrls);
        const output = renderMarkdownButtonLinks(renderYoutubeVideos(`${header}\n${pageContent}\n${footer}`));
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
    if (page !== 'index.md') {
      const segments = url.split('/').filter(Boolean);
      const items = [];
      for (let index = 2; index < segments.length; index++) {
        const parentUrl = `/${segments.slice(0, index).join('/')}/`;
        if (titles.has(parentUrl)) items.push({ href: parentUrl, label: titles.get(parentUrl) });
      }
      items.push({ label: title });
      result = output.replace(/(<main\b[^>]*>)/i, `$1${renderBreadcrumb(lang, items, page)}`);
    }
    const target = path.join(outputDir, lang, outputPage(page));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, publishedHtml(result));
  }
  buildDocumentation(outputDir, diagrams);
  renderMermaid(diagrams, outputDir);
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
