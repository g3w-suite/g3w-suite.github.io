'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { basePath, languages, projectRoot, sourceDir, publishedHtml } = require('./config');
const { marked, getHeadingList, autoTranslateMarkdown } = require('./markdown');
const { extractPageTranslations, translateHtml } = require('./translations');
const { pageBodyClass, renderBreadcrumb, renderComponent } = require('./routes');
const { documentationFiles } = require('./files');

function documentationLink(href, file, docsDir, lang = 'en') {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) return href;
  const suffix = /([?#].*)$/.exec(href)?.[1] || '';
  const pathname = href.slice(0, href.length - suffix.length);
  if (!pathname) return href;
  if (pathname.startsWith('/')) {
    return pathname.startsWith('/docs/') && lang === 'it'
      ? `/it${pathname}${suffix}`
      : href;
  }

  const target = path.resolve(path.dirname(file), decodeURIComponent(pathname));
  const relative = path.relative(docsDir, target);
  if (relative.startsWith(`..${path.sep}`) || relative === '..') return href;

  const extension = path.extname(relative).toLowerCase();
  const page = path.join(docsDir, extension ? relative.slice(0, -extension.length) + '.md' : `${relative}.md`);
  if ((['.md', '.html', '.rst'].includes(extension) || !extension) && fs.existsSync(page)) {
    const pagePath = path.relative(docsDir, page).replace(/\\/g, '/').replace(/\.md$/, '');
    const docsRoot = lang === 'it' ? '/it/docs' : '/docs';
    const route = pagePath === 'quick-start'
      ? `${docsRoot}/`
      : `${docsRoot}/${pagePath === 'index' ? 'overview' : pagePath.replace(/\/index$/, '')}/`;
    return `${route}${suffix}`;
  }

  return `/docs/${relative.replace(/\\/g, '/')}${suffix}`;
}

function addDocumentationHeadingAliases(html, sourceHeadings, localizedHeadings) {
  const existingIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id));
  let headingIndex = 0;
  return html.replace(/<h[1-6]\b[^>]*>/g, heading => {
    const sourceId = sourceHeadings[headingIndex];
    const localizedId = localizedHeadings[headingIndex]?.id;
    headingIndex += 1;
    if (!sourceId || sourceId === localizedId || existingIds.has(sourceId)) return heading;
    existingIds.add(sourceId);
    return `${heading}<span id="${sourceId}"></span>`;
  });
}

function documentationNavigation(index, currentPage, docsDir, lang) {
  const groups = [];
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
      group.links.push(`<a href="${href}"${href === currentPage ? ' aria-current="page"' : ''}>${link[1]}</a>`);
    }
  }
  return groups.map(({ title, links }) =>
    `<section><h2>${title}</h2>${links.join('')}</section>`
  ).join('');
}

const documentationTranslations = {
  en: {
    description: 'G3W-SUITE documentation',
    edit: 'Edit this page',
    navigation: 'Documentation navigation',
    search: 'Search documentation',
    searchPlaceholder: 'Search docs',
    title: 'G3W-SUITE Documentation',
  },
  it: {
    description: 'Documentazione di G3W-SUITE',
    edit: 'Modifica questa pagina',
    navigation: 'Navigazione della documentazione',
    search: 'Cerca nella documentazione',
    searchPlaceholder: 'Cerca nella documentazione',
    title: 'Documentazione G3W-SUITE',
  },
};

function buildDocumentation(outputDir) {
  const docsDir = path.join(sourceDir, 'docs');
  const indexFile = path.join(docsDir, 'index.md');
  const indexSource = fs.readFileSync(indexFile, 'utf8');
  const indexTranslations = extractPageTranslations(indexSource, path.relative(projectRoot, indexFile));
  const releasePattern = /^(\d{4}-\d{2}-\d{2})-changelog-(v\d+\.\d+)\.md$/;
  const releaseVersions = fs.readdirSync(path.join(sourceDir, 'news'))
    .map(file => releasePattern.exec(file))
    .filter(Boolean)
    .sort((a, b) => b[1].localeCompare(a[1]))
    .map(([, , version]) => version);
  const searchIndexes = Object.fromEntries(languages.map(lang => [lang, []]));
  for (const lang of languages) {
    const targetDir = path.join(outputDir, ...(lang === 'it' ? ['it', 'docs'] : ['docs']));
    fs.mkdirSync(targetDir, { recursive: true });
    for (const entry of fs.readdirSync(targetDir, { withFileTypes: true })) {
      fs.rmSync(path.join(targetDir, entry.name), { recursive: true, force: true });
    }
  }

  const pages = documentationFiles(docsDir).flatMap(file => {
    const source = path.relative(docsDir, file);
    if (source === 'index.md') return [{ file, source, relative: 'overview.md' }];
    if (source === 'quick-start.md') return [
      { file, source, relative: 'index.md' },
      { file, source, relative: 'quick-start.md', alias: true },
    ];
    return [{ file, source, relative: source }];
  });
  for (const { file, source: sourceRelative, relative, alias } of pages) {
    const source = fs.readFileSync(file, 'utf8');
    const extracted = extractPageTranslations(source, path.relative(projectRoot, file));
    const parentMatch = /^\[Back to ([^\]]+)\]\(([^)]+)\)/m.exec(extracted.html);
    for (const lang of languages) {
      const localizedSource = translateHtml(
        autoTranslateMarkdown(extracted.html, lang, extracted.translations),
        lang,
        extracted.translations
      );
      const title = /^#\s+(.+)$/m.exec(localizedSource)?.[1] || path.basename(file, '.md');
      const localizedParent = parentMatch && /^\[([^\]]+)\]\(([^)]+)\)/m.exec(localizedSource);
      const parentTarget = parentMatch
        ? path.resolve(path.dirname(file), parentMatch[2].split(/[?#]/)[0])
        : null;
      const parentFile = parentTarget && (path.extname(parentTarget) ? parentTarget : `${parentTarget}.md`);
      let parentTitle = parentMatch?.[1];
      if (parentFile && fs.existsSync(parentFile)) {
        const parentSource = extractPageTranslations(
          fs.readFileSync(parentFile, 'utf8'),
          path.relative(projectRoot, parentFile)
        );
        const localizedParentSource = translateHtml(
          autoTranslateMarkdown(parentSource.html, lang, parentSource.translations),
          lang,
          parentSource.translations
        );
        const parentHeading = /^#\s+(.+)$/m.exec(localizedParentSource)?.[1];
        if (parentHeading) parentTitle = marked.parseInline(parentHeading).replace(/<[^>]*>/g, '');
      }
      const sourceBody = localizedParent ? localizedSource.replace(localizedParent[0], '') : localizedSource;
      let sourceHeadings = [];
      if (lang === 'it') {
        marked.parse(parentMatch ? extracted.html.replace(parentMatch[0], '') : extracted.html);
        sourceHeadings = getHeadingList().map(({ id }) => id);
      }
      let content = marked.parse(sourceBody);
      if (lang === 'it') content = addDocumentationHeadingAliases(content, sourceHeadings, getHeadingList());
      content = content.replace(/\b(href|src)=(")(.*?)\2/g, (attribute, name, quote, href) =>
        `${name}="${documentationLink(href, file, docsDir, lang)}"`
      );
      const docsPath = relative === 'index.md'
        ? '/docs/'
        : `/docs/${relative.replace(/\.md$/, '').replace(/\\/g, '/')}/`;
      const pagePath = lang === 'it' ? `/it${docsPath}` : docsPath;
      const componentPage = path.join('docs', relative.replace(/\.md$/, '.html'));
      const pageUrls = { it: `/it${docsPath}`, en: docsPath };
      const headerDocument = renderComponent('header', lang, componentPage, pageUrls);
      const siteHeader = /<header\b[\s\S]*?<\/header>/i.exec(headerDocument)?.[0];
      if (!siteHeader) throw new Error('Shared header component has no <header> element');
      const siteFooter = renderComponent('footer', lang, componentPage, pageUrls)
        .replace(/<\/body>\s*<\/html>\s*$/i, '');
      const sourcePath = sourceRelative.replace(/\\/g, '/').split('/').map(encodeURIComponent).join('/');
      const sourceUrl = `https://github.com/g3w-suite/g3w-suite.github.io/edit/vanilla/src/docs/${sourcePath}`;
      const ui = documentationTranslations[lang];
      const heading = /<h1\b[^>]*>[\s\S]*?<\/h1>/.exec(content);
      if (!heading) throw new Error(`${file}: documentation page has no heading`);
      content = content.replace(heading[0], '');
      const breadcrumbItems = [];
      if (relative !== 'index.md') breadcrumbItems.push({ href: lang === 'it' ? '/it/docs/' : '/docs/', label: ui.title });
      if (parentMatch) breadcrumbItems.push({ href: documentationLink(parentMatch[2], file, docsDir, lang), label: parentTitle });
      breadcrumbItems.push({ label: heading[0].replace(/<[^>]*>/g, '').trim() });
      const breadcrumb = renderBreadcrumb(lang, breadcrumbItems);
      const releaseNotes = releaseVersions.length
        ? `<section class="docs-release-notes" aria-labelledby="docs-release-notes-title"><h2 id="docs-release-notes-title">Changelog</h2><div class="docs-release-notes__links">${releaseVersions.map(version =>
            `<a class="btn btn--outline" href="/${lang}/news/${version}/">${lang === 'it' ? 'Versione' : 'Version'} ${version.slice(1)}</a>`
          ).join('')}</div></section>`
        : '';
      const html = `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${ui.description}">
  <title>${title} - ${ui.title}</title>
  <link rel="alternate" href="${pageUrls.it}" hreflang="it">
  <link rel="alternate" href="${pageUrls.en}" hreflang="en">
  ${alias ? `<link rel="canonical" href="${lang === 'it' ? '/it/docs/' : '/docs/'}">` : ''}
  <link rel="stylesheet" href="/style.css">
  <style>
    .docs-layout{display:grid;grid-template-columns:minmax(220px,280px) minmax(0,1fr);gap:2rem;max-width:1440px;margin:2rem auto;padding:0 1.5rem}
    .docs-nav{border-right:1px solid #d8e0e4;padding-right:1rem}.docs-nav section{margin-bottom:1.5rem}.docs-nav h2{font-size:1rem;margin:0 0 .4rem}
    .docs-nav a{display:block;padding:.2rem 0}.docs-nav a[aria-current=page]{font-weight:700}
    .docs-content{min-width:0;max-width:900px}.docs-content img{max-width:100%;height:auto}.docs-content pre{overflow:auto;padding:1rem;background:#f2f5f6}
    .docs-content table{display:block;overflow-x:auto;border-collapse:collapse}.docs-content th,.docs-content td{border:1px solid #d8e0e4;padding:.5rem}
    @media(max-width:760px){.docs-layout{grid-template-columns:1fr}.docs-nav{border-right:0;border-bottom:1px solid #d8e0e4;padding:0 0 1rem}}
  </style>
</head>
<body class="${pageBodyClass(componentPage)}">
  ${siteHeader}
  <main id="main-content">
  ${breadcrumb}
  <div class="page-header"><div class="container">${heading[0]}</div></div>
  ${releaseNotes}
  <div class="docs-layout">
    <nav class="docs-nav" aria-label="${ui.navigation}">
      <form class="docs-search" role="search" data-index-url="${basePath}${lang === 'it' ? '/it/docs' : '/docs'}/search-index.json">
        <label for="docs-search-input" class="sr-only">${ui.search}</label>
        <input id="docs-search-input" type="search" name="q" placeholder="${ui.searchPlaceholder}" autocomplete="off" aria-controls="docs-search-results">
      </form>
      <div id="docs-search-results" class="docs-search-results" role="status" aria-live="polite" hidden></div>
      ${documentationNavigation(autoTranslateMarkdown(indexTranslations.html, lang, indexTranslations.translations), alias ? (lang === 'it' ? '/it/docs/' : '/docs/') : pagePath, docsDir, lang)}
    </nav>
    <div class="docs-content">
      <div class="docs-toolbar">
        <a class="docs-source-link" href="${sourceUrl}">${ui.edit}</a>
      </div>
      ${content}
    </div>
  </div>
  </main>
  ${siteFooter}
</body>
</html>`;
      const targetDir = path.join(outputDir, ...(lang === 'it' ? ['it', 'docs'] : ['docs']));
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
      if (!alias) searchIndexes[lang].push({ title, url: `${basePath}${pagePath}`, text });
    }
  }
  for (const lang of languages) {
    const targetDir = path.join(outputDir, ...(lang === 'it' ? ['it', 'docs'] : ['docs']));
    fs.writeFileSync(path.join(targetDir, 'search-index.json'), JSON.stringify(searchIndexes[lang]));
  }
}

module.exports = { buildDocumentation };
