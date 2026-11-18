'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { basePath, languages, docsRoot, sourceDir, publishedHtml } = require('./config');
const { marked, getHeadingList, addHeadingAliases, autoTranslateMarkdown, renderMarkdownButtonLinks } = require('./markdown');
const { pageCatalog, localizeSiteUrl, translate, translateHtml, renderLanguageBlocks, extractPageMetadata, renderPageMetadata, renderPageAlternates } = require('./translations');
const { renderBreadcrumb, renderComponent } = require('./routes');
const { documentationFiles } = require('./files');
const { prepareMermaid } = require('./mermaid');

function documentationLink(href, file, docsDir, lang = 'en') {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) return href;
  const suffix = /([?#].*)$/.exec(href)?.[1] || '';
  const pathname = href.slice(0, href.length - suffix.length);
  if (!pathname) return href;
  if (pathname.startsWith('/')) {
    return localizeSiteUrl(href, lang);
  }

  const target = path.resolve(path.dirname(file), decodeURIComponent(pathname));
  const relative = path.relative(docsDir, target);
  if (relative.startsWith(`..${path.sep}`) || relative === '..') return href;

  const extension = path.extname(relative).toLowerCase();
  const page = path.join(docsDir, extension ? relative.slice(0, -extension.length) + '.md' : `${relative}.md`);
  if ((['.md', '.html', '.rst'].includes(extension) || !extension) && fs.existsSync(page)) {
    const pagePath = path.relative(docsDir, page).replace(/\\/g, '/').replace(/\.md$/, '');
    const route = pagePath === 'index' ? `${docsRoot(lang)}/` : `${docsRoot(lang)}/${pagePath.replace(/\/index$/, '')}/`;
    return `${route}${suffix}`;
  }

  return `${docsRoot(lang)}/${relative.replace(/\\/g, '/')}${suffix}`;
}

function linkDocumentationHeadings(html) {
  return html.replace(/<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/g, (heading, level, attributes, content) => {
    const id = /\bid="([^"]+)"/.exec(attributes)?.[1];
    if (!id || /<a\b/i.test(content)) return heading;
    return `<h${level}${attributes}><a class="docs-heading-link" href="#${id}">${content}</a></h${level}>`;
  });
}

function documentationNavigation(index, docsDir, lang, titles) {
  const groups = [];
  const listed = new Set();
  let group;
  for (const line of index.split(/\r?\n/)) {
    const heading = /^##\s+(.+)$/.exec(line);
    if (heading) {
      group = { title: heading[1], links: [] };
      groups.push(group);
      continue;
    }
    const link = /^\s*-\s+\[([^\]]+)\]\(([^)]+)\)/.exec(line);
    if (group && link) {
      const indexFile = path.join(docsDir, 'index.md');
      const href = documentationLink(link[2], indexFile, docsDir, lang);
      if (!titles.has(href)) throw new Error(`Unknown documentation index entry: ${href}`);
      if (listed.has(href)) throw new Error(`Duplicate documentation index entry: ${href}`);
      listed.add(href);
      group.links.push({ href, label: titles.get(href) });
    }
  }
  const missing = [...titles.keys()].filter(href => !listed.has(href));
  if (missing.length) throw new Error(`Missing documentation index entries: ${missing.join(', ')}`);
  return currentPage => groups.map(({ title, links }) => {
    const open = links.some(({ href }) => href === currentPage);
    const renderLink = ({ href, label }) =>
      `<a href="${href}"${href === currentPage ? ' aria-current="page"' : ''}>${label}</a>`;
    return `<section><details${open ? ' open' : ''}><summary><h2>${title}</h2></summary>${links.map(renderLink).join('')}</details></section>`;
  }).join('');
}

const documentationLabels = {
  breadcrumb: 'Documentation',
  navigation: 'Documentation navigation',
  noResults: 'No results found.',
  search: 'Search documentation',
  searchError: 'Search is unavailable. Please try again.',
  searchPlaceholder: 'Search docs',
  searchResults: 'Search results',
  searching: 'Searching...',
  version: 'Version',
};

function buildDocumentation(outputDir, diagrams, catalogs) {
  const docsDir = path.join(sourceDir, 'docs');
  const indexFile = path.join(docsDir, 'index.md');
  const pages = documentationFiles(docsDir).map(file => {
    const relative = path.relative(docsDir, file);
    const { html, metadata } = extractPageMetadata(fs.readFileSync(file, 'utf8'), file);
    if (!metadata?.title || !metadata.description) throw new Error(`${file}: documentation requires title and description in front matter`);
    return { file, relative, html, metadata };
  });
  const releasePattern = /^(\d{4}-\d{2}-\d{2})-changelog-(v\d+\.\d+)\.md$/;
  const releaseVersions = fs.readdirSync(path.join(sourceDir, 'news'))
    .map(file => releasePattern.exec(file))
    .filter(Boolean)
    .sort((a, b) => b[1].localeCompare(a[1]))
    .map(([, , version]) => version);
  const searchIndexes = Object.fromEntries(languages.map(lang => [lang, []]));
  let llmsPages = [];
  for (const lang of languages) {
    const targetDir = path.join(outputDir, docsRoot(lang));
    fs.mkdirSync(targetDir, { recursive: true });
    for (const entry of fs.readdirSync(targetDir, { withFileTypes: true })) {
      fs.rmSync(path.join(targetDir, entry.name), { recursive: true, force: true });
    }
  }

  for (const lang of languages) {
    const entries = catalogs[lang];
    const shared = pageCatalog(lang, entries, '@documentation');
    const label = value => translate(value, lang, shared);
    const ui = Object.fromEntries(Object.entries(documentationLabels)
      .map(([key, value]) => [key, label(value)]));
    const localizedPages = pages.map(({ file, relative, html, metadata }) => {
      const translations = pageCatalog(lang, entries, path.relative(sourceDir, file));
      const localized = translateHtml(
        autoTranslateMarkdown(renderLanguageBlocks(html, lang), lang, translations), lang, translations
      );
      const title = /^#\s+(.+)$/m.exec(localized)?.[1];
      if (!title) throw new Error(`${file}: documentation page has no heading`);
      const pagePath = documentationLink(relative, indexFile, docsDir, lang);
      return { file, relative, html, metadata, translations, localized, title, pagePath };
    });
    if (lang === 'en') {
      llmsPages = localizedPages.map(({ metadata, localized, pagePath, title }) => ({
        metadata, content: localized, pagePath, title,
      }));
    }
    const titles = new Map(localizedPages.map(({ pagePath, title }) =>
      [pagePath, marked.parseInline(title).replace(/<[^>]*>/g, '')]));
    const index = localizedPages.find(({ file }) => file === indexFile);
    const navigation = documentationNavigation(index.localized, docsDir, lang, titles);
    for (const { file, relative, html: source, metadata, translations, localized, title, pagePath } of localizedPages) {
      const sourceBody = prepareMermaid(localized, diagrams, `${relative} (${lang})`);
      let sourceHeadings = [];
      if (lang !== 'en') {
        marked.parse(source);
        sourceHeadings = getHeadingList().map(({ id }) => id);
      }
      let content = renderMarkdownButtonLinks(marked.parse(sourceBody));
      if (lang !== 'en') content = addHeadingAliases(content, sourceHeadings);
      content = content.replace(/\b(href|src)=(")(.*?)\2/g, (attribute, name, quote, href) =>
        `${name}="${documentationLink(href, file, docsDir, lang)}"`
      );
      const componentPage = path.join('docs', relative.replace(/\.md$/, '.html'));
      const pageUrls = Object.fromEntries(languages.map(code => [code, documentationLink(relative, indexFile, docsDir, code)]));
      const pageHead = [
        renderPageMetadata(metadata, lang, translations),
        renderPageAlternates(pageUrls),
      ].join('\n  ');
      const siteHeader = renderComponent('header', lang, componentPage, pageUrls, entries, pageHead);
      const siteFooter = renderComponent('footer', lang, componentPage, pageUrls, entries);
      const heading = /<h1\b[^>]*>[\s\S]*?<\/h1>/.exec(content);
      if (!heading) throw new Error(`${file}: documentation page has no heading`);
      content = linkDocumentationHeadings(content.replace(heading[0], ''));
      const breadcrumbItems = [];
      if (relative !== 'index.md') breadcrumbItems.push({ href: `${docsRoot(lang)}/`, label: ui.breadcrumb });
      breadcrumbItems.push({ label: heading[0].replace(/<[^>]*>/g, '').trim() });
      const breadcrumb = renderBreadcrumb(lang, breadcrumbItems, path.join('docs', relative), entries);
      const releaseNotes = releaseVersions.length
        ? `<details class="docs-release-notes"><summary>Changelog</summary>${releaseVersions.map(version =>
            `<a href="/${lang}/news/${version}/">${ui.version} ${version.slice(1)}</a>`
          ).join('')}</details>`
        : '';
      const html = `${siteHeader}
  <main id="main-content">
  ${breadcrumb}
  <div class="page-header"><div class="container">${heading[0]}</div></div>
  <div class="docs-layout">
    <div class="docs-content">
      ${content}
    </div>
    <nav class="docs-nav" aria-label="${ui.navigation}">
      <form class="docs-search" role="search" data-index-url="${basePath}${docsRoot(lang)}/search-index.json"
        data-searching="${ui.searching}"
        data-empty="${ui.noResults}"
        data-results="${ui.searchResults}"
        data-error="${ui.searchError}">
        <label for="docs-search-input" class="sr-only">${ui.search}</label>
        <input id="docs-search-input" type="search" name="q" placeholder="${ui.searchPlaceholder}" autocomplete="off" aria-controls="docs-search-results">
      </form>
      <div id="docs-search-results" class="docs-search-results" role="status" aria-live="polite" hidden></div>
      ${releaseNotes}
      ${navigation(pagePath)}
    </nav>
  </div>
  </main>
  ${siteFooter}`;
      const targetDir = path.join(outputDir, docsRoot(lang));
      const target = relative === 'index.md'
        ? path.join(targetDir, 'index.html')
        : path.join(targetDir, relative.replace(/\.md$/, `${path.sep}index.html`));
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, publishedHtml(html));

      const text = content
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
      searchIndexes[lang].push({ title, url: `${basePath}${pagePath}`, text });
    }
  }
  for (const lang of languages) {
    const targetDir = path.join(outputDir, docsRoot(lang));
    fs.writeFileSync(path.join(targetDir, 'search-index.json'), JSON.stringify(searchIndexes[lang]));
  }
  fs.writeFileSync(path.join(outputDir, 'llms.txt'), [
    '# G3W-SUITE',
    '',
    `> ${pages.find(({ relative }) => relative === 'index.md').metadata.description}`,
    '',
    '## Documentation',
    ...llmsPages.map(({ metadata, pagePath, title }) =>
      `- [${title}](${basePath}${pagePath}): ${metadata.description}`),
    '',
  ].join('\n'));
  fs.writeFileSync(path.join(outputDir, 'llms-full.txt'), [
    '# G3W-SUITE Documentation',
    '',
    ...llmsPages.map(({ content, metadata, pagePath, title }) => [
      `## ${title}`,
      '',
      metadata.description,
      '',
      `[Read online](${basePath}${pagePath})`,
      '',
      content.trim(),
    ].join('\n')),
    '',
  ].join('\n'));
}

module.exports = { buildDocumentation, documentationLabels };
