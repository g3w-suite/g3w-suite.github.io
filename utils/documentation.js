'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { basePath, languages, projectRoot, sourceDir, publishedHtml } = require('./config');
const { marked, getHeadingList, autoTranslateMarkdown, renderMarkdownButtonLinks } = require('./markdown');
const { extractPageTranslations, translateHtml, renderLanguageBlocks, renderPageAlternates } = require('./translations');
const { renderBreadcrumb, renderComponent } = require('./routes');
const { documentationFiles } = require('./files');
const { prepareMermaid } = require('./mermaid');

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

function linkDocumentationHeadings(html) {
  return html.replace(/<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/g, (heading, level, attributes, content) => {
    const id = /\bid="([^"]+)"/.exec(attributes)?.[1];
    if (!id || /<a\b/i.test(content)) return heading;
    return `<h${level}${attributes}><a class="docs-heading-link" href="#${id}">${content}</a></h${level}>`;
  });
}

function documentationNavigation(index, currentPage, parentPage, docsDir, lang) {
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
      group.links.push({ href, label: link[1] });
    }
  }
  const indexFile = path.join(docsDir, 'index.md');
  const pages = documentationFiles(docsDir).map(file => {
    const source = fs.readFileSync(file, 'utf8');
    const extracted = extractPageTranslations(source, path.relative(projectRoot, file));
    const localized = translateHtml(
      autoTranslateMarkdown(extracted.html, lang, extracted.translations),
      lang,
      extracted.translations
    );
    const title = /^#\s+(.+)$/m.exec(localized)?.[1] || path.basename(file, '.md');
    const href = documentationLink(path.relative(docsDir, file), indexFile, docsDir, lang);
    const back = /^\[Back to [^\]]+\]\(([^)]+)\)/m.exec(source);
    return {
      href,
      label: marked.parseInline(title).replace(/<[^>]*>/g, ''),
      parent: back ? documentationLink(back[1], file, docsDir, lang) : null,
    };
  });
  const listed = new Set(groups.flatMap(item => item.links.map(link => link.href)));
  const children = new Map();
  const additional = [];
  for (const page of pages) {
    if (listed.has(page.href)) {
      for (const item of groups) {
        const link = item.links.find(entry => entry.href === page.href);
        if (link) link.label = page.label;
      }
      continue;
    }
    const parentGroup = groups.find(item => item.links.some(link => link.href === page.parent));
    if (parentGroup) {
      const siblings = children.get(page.parent) || [];
      siblings.push({ ...page, child: true });
      children.set(page.parent, siblings);
    } else {
      additional.push(page);
    }
    listed.add(page.href);
  }
  if (additional.length) {
    groups.push({
      title: lang === 'it' ? 'Altre pagine' : 'Other pages',
      links: additional,
    });
  }
  return groups.map(({ title, links }) => {
    const hasCurrentChild = links.some(({ href }) =>
      (children.get(href) || []).some(child => child.href === currentPage)
    );
    const open = links.some(({ href }) => href === currentPage || href === parentPage) || hasCurrentChild;
    const renderLink = ({ href, label, child }) =>
      `<a${child ? ' class="docs-nav__page"' : ''} href="${href}"${href === currentPage ? ' aria-current="page"' : ''}>${label}</a>`;
    return `<section><details${open ? ' open' : ''}><summary><h2>${title}</h2></summary>${links.map(link => {
      const subpages = children.get(link.href) || [];
      if (!subpages.length) return renderLink(link);
      const openSubpages = link.href === currentPage || link.href === parentPage ||
        subpages.some(child => child.href === currentPage);
      return `<details class="docs-nav__subgroup"${openSubpages ? ' open' : ''}><summary>${renderLink(link)}</summary>${subpages.map(renderLink).join('')}</details>`;
    }).join('')}</details></section>`;
  }).join('');
}

const documentationTranslations = {
  en: {
    breadcrumb: 'Documentation',
    description: 'G3W-SUITE documentation',
    navigation: 'Documentation navigation',
    search: 'Search documentation',
    searchPlaceholder: 'Search docs',
    title: 'G3W-SUITE Documentation',
  },
  it: {
    breadcrumb: 'Documentazione',
    description: 'Documentazione di G3W-SUITE',
    navigation: 'Navigazione della documentazione',
    search: 'Cerca nella documentazione',
    searchPlaceholder: 'Cerca nella documentazione',
    title: 'Documentazione G3W-SUITE',
  },
};

function buildDocumentation(outputDir, diagrams) {
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
        autoTranslateMarkdown(renderLanguageBlocks(extracted.html, lang), lang, extracted.translations),
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
      const sourceBody = prepareMermaid(
        localizedParent ? localizedSource.replace(localizedParent[0], '') : localizedSource,
        diagrams,
        `${sourceRelative} (${lang})`
      );
      let sourceHeadings = [];
      if (lang === 'it') {
        marked.parse(parentMatch ? extracted.html.replace(parentMatch[0], '') : extracted.html);
        sourceHeadings = getHeadingList().map(({ id }) => id);
      }
      let content = renderMarkdownButtonLinks(marked.parse(sourceBody));
      if (lang === 'it') content = addDocumentationHeadingAliases(content, sourceHeadings, getHeadingList());
      content = linkDocumentationHeadings(content);
      content = content.replace(/\b(href|src)=(")(.*?)\2/g, (attribute, name, quote, href) =>
        `${name}="${documentationLink(href, file, docsDir, lang)}"`
      );
      const docsPath = relative === 'index.md'
        ? '/docs/'
        : `/docs/${relative.replace(/\.md$/, '').replace(/\\/g, '/')}/`;
      const pagePath = lang === 'it' ? `/it${docsPath}` : docsPath;
      const componentPage = path.join('docs', relative.replace(/\.md$/, '.html'));
      const pageUrls = { it: `/it${docsPath}`, en: docsPath };
      const ui = documentationTranslations[lang];
      const pageHead = [
        `<meta name="description" content="${ui.description}">`,
        `<title>${title} - ${ui.title}</title>`,
        renderPageAlternates(pageUrls),
        alias ? `<link rel="canonical" href="${lang === 'it' ? '/it/docs/' : '/docs/'}">` : '',
      ].filter(Boolean).join('\n  ');
      const siteHeader = renderComponent('header', lang, componentPage, pageUrls, pageHead);
      const siteFooter = renderComponent('footer', lang, componentPage, pageUrls);
      const heading = /<h1\b[^>]*>[\s\S]*?<\/h1>/.exec(content);
      if (!heading) throw new Error(`${file}: documentation page has no heading`);
      content = content.replace(heading[0], '');
      const breadcrumbItems = [];
      if (relative !== 'index.md') breadcrumbItems.push({ href: lang === 'it' ? '/it/docs/' : '/docs/', label: ui.breadcrumb });
      if (parentMatch) breadcrumbItems.push({ href: documentationLink(parentMatch[2], file, docsDir, lang), label: parentTitle });
      breadcrumbItems.push({ label: heading[0].replace(/<[^>]*>/g, '').trim() });
      const breadcrumb = renderBreadcrumb(lang, breadcrumbItems, path.join('docs', sourceRelative));
      const releaseNotes = releaseVersions.length
        ? `<details class="docs-release-notes"><summary>Changelog</summary>${releaseVersions.map(version =>
            `<a href="/${lang}/news/${version}/">${lang === 'it' ? 'Versione' : 'Version'} ${version.slice(1)}</a>`
          ).join('')}</details>`
        : '';
      const html = `${siteHeader}
  <main id="main-content">
  ${breadcrumb}
  <div class="page-header"><div class="container">${heading[0]}</div></div>
  <div class="docs-layout">
    <nav class="docs-nav" aria-label="${ui.navigation}">
      <form class="docs-search" role="search" data-index-url="${basePath}${lang === 'it' ? '/it/docs' : '/docs'}/search-index.json">
        <label for="docs-search-input" class="sr-only">${ui.search}</label>
        <input id="docs-search-input" type="search" name="q" placeholder="${ui.searchPlaceholder}" autocomplete="off" aria-controls="docs-search-results">
      </form>
      <div id="docs-search-results" class="docs-search-results" role="status" aria-live="polite" hidden></div>
      ${releaseNotes}
      ${documentationNavigation(autoTranslateMarkdown(indexTranslations.html, lang, indexTranslations.translations), alias ? (lang === 'it' ? '/it/docs/' : '/docs/') : pagePath, parentMatch ? documentationLink(parentMatch[2], file, docsDir, lang) : null, docsDir, lang)}
    </nav>
    <div class="docs-content">
      ${content}
    </div>
  </div>
  </main>
  ${siteFooter}`;
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
