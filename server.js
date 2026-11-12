'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { marked } = require('marked');
const { gfmHeadingId } = require('marked-gfm-heading-id');

marked.use(gfmHeadingId());

const projectRoot = __dirname;
const staticDir = path.join(projectRoot, 'static');
const sourceDir = path.join(projectRoot, 'src');
const languages = ['it', 'en'];
const devMode = process.argv.includes('--dev');
const buildOnly = process.argv.includes('--build');
const root = staticDir;
const port = 8080;
const basePath = (process.env.SITE_BASE_PATH || '').replace(/\/$/, '');
if (basePath && !/^\/[a-zA-Z0-9._/-]+$/.test(basePath)) {
  throw new Error('SITE_BASE_PATH must be an absolute URL path, for example /www.g3wsuite.it');
}

function publishedHtml(html) {
  return html
    .replace(/(\b(?:href|src)=["'])\/(?!\/)/g, `$1${basePath}/`)
    .replace(/(\bcontent=["'][^"']*\burl=)\/(?!\/)/gi, `$1${basePath}/`);
}

function renderLanguageBlocks(html, lang) {
  const output = html.replace(/\{\{#(it|en)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_, target, content) =>
    target === lang ? content : ''
  );
  const bad = /\{\{(?:#(?:it|en)|\/(?:it|en))\}\}/.exec(output);
  if (bad) throw new Error(`Unclosed language block ${bad[0]}`);
  // Typos like "{{#en}" never match the block regex above, so catch them here
  const typo = /\{\{[#/](?:it|en)(?!\}\})/.exec(output);
  if (typo) {
    const line = html.slice(0, html.indexOf(typo[0])).split('\n').length;
    throw new Error(`Malformed language tag "${typo[0]}" near line ${line} (expected {{#it}}/{{#en}} ... {{/it}}/{{/en}})`);
  }
  return output;
}

function translate(source, lang, pageTranslations = {}) {
  const leading = /^\s*/.exec(source)[0];
  const trailing = /\s*$/.exec(source)[0];
  const text = source.slice(leading.length, source.length - trailing.length);
  const key = text.replace(/&amp;/g, '&');
  const translated = pageTranslations[lang]?.[key] ?? (lang === 'en' ? key : undefined);
  if (typeof translated !== 'string') throw new Error(`Missing Italian translation: ${text}`);
  const escaped = translated.replace(/&(?!#\d+;|#x[\da-f]+;|[a-z][\da-z]+;)|[<>"']/gi, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
  return `${leading}${escaped}${trailing}`;
}

function translateHtml(html, lang, pageTranslations = {}) {
  const output = html.replace(/\{\{t\s+'((?:\\.|[^'\\])*)'\s*\}\}/g, (_, source) =>
    translate(source.replace(/\\(['\\])/g, '$1'), lang, pageTranslations)
  );
  if (/\{\{t\b|\{\{\/t\}\}/.test(output)) throw new Error('Invalid or unclosed translation helper');
  return output;
}

function extractPageTranslations(html, file) {
  const blocks = [...html.matchAll(/<script type="application\/json" data-i18n>([\s\S]*?)<\/script>/g)];
  if (blocks.length > 1) throw new Error(`${file} must contain at most one data-i18n block`);
  if (!blocks.length) return { html, translations: {} };

  let translations;
  try {
    translations = JSON.parse(blocks[0][1]);
  } catch (error) {
    throw new Error(`${file} has invalid data-i18n JSON: ${error.message}`);
  }
  if (!translations || typeof translations !== 'object' || Array.isArray(translations)) {
    throw new Error(`${file} data-i18n must be an object keyed by language`);
  }
  for (const [lang, entries] of Object.entries(translations)) {
    if (!languages.includes(lang) || !entries || typeof entries !== 'object' || Array.isArray(entries) ||
      Object.values(entries).some(value => typeof value !== 'string')) {
      throw new Error(`${file} has invalid ${lang} translations in data-i18n`);
    }
  }
  return { html: html.replace(blocks[0][0], ''), translations };
}

function extractPageMetadata(html, file) {
  const blocks = [...html.matchAll(/<script type="application\/json" data-i18n-meta>([\s\S]*?)<\/script>/g)];
  if (blocks.length > 1) throw new Error(`${file} must contain at most one data-i18n-meta block`);
  if (!blocks.length) return { html, metadata: null };

  let metadata;
  try {
    metadata = JSON.parse(blocks[0][1]);
  } catch (error) {
    throw new Error(`${file} has invalid data-i18n-meta JSON: ${error.message}`);
  }
  const allowedFields = ['title', 'description', 'ogTitle', 'ogDescription', 'ogType'];
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata) ||
    !Object.keys(metadata).length || Object.keys(metadata).some(key => !allowedFields.includes(key)) ||
    Object.entries(metadata).some(([key, value]) => typeof value !== 'string' || !value.trim() ||
      key === 'ogType' && !/^[a-z][a-z\d.-]*$/i.test(value))) {
    throw new Error(`${file} data-i18n-meta has invalid metadata fields`);
  }
  return { html: html.replace(blocks[0][0], ''), metadata };
}

function renderPageMetadata(metadata, lang, translations) {
  if (!metadata) return '';
  const tags = [];
  if (metadata.title) tags.push(`<title>${translate(metadata.title, lang, translations)}</title>`);
  if (metadata.description) {
    tags.push(`<meta name="description" content="${translate(metadata.description, lang, translations)}">`);
  }
  if (metadata.ogTitle) tags.push(`<meta property="og:title" content="${translate(metadata.ogTitle, lang, translations)}">`);
  if (metadata.ogDescription) {
    tags.push(`<meta property="og:description" content="${translate(metadata.ogDescription, lang, translations)}">`);
  }
  if (metadata.ogType) tags.push(`<meta property="og:type" content="${metadata.ogType}">`);
  return tags.join('\n');
}

function renderPageAlternates(pageUrls) {
  return languages.map(lang =>
    `<link rel="alternate" href="${pageUrls[lang]}" hreflang="${lang}">`
  ).join('\n');
}

function renderYoutubeVideos(html) {
  const consentDialog = /<template id="youtube-consent-dialog">([\s\S]*?)<\/template>/.exec(html)?.[1];
  if (!consentDialog) return html;
  const output = html.replace(/<iframe\b(?=[^>]*\bsrc=["']https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/)[^>]*>\s*<\/iframe>/gi, iframe => {
    const classes = /\bclass=(["'])(.*?)\1/i.exec(iframe)?.[2];
    const frame = iframe
      .replace(/\s+class=(["']).*?\1/i, '')
      .replace(/\s+src=(["'])(.*?)\1/i, ' data-youtube-src="$2"');
    return `<div class="youtube-consent${classes ? ` ${classes}` : ''}">${frame}${consentDialog}</div>`;
  });
  return output.replace(/<template id="youtube-consent-dialog">[\s\S]*?<\/template>/, '');
}

function renderChangelogMarkdown(markdown) {
  const tokens = marked.lexer(markdown);
  const headerTokens = [];
  if (tokens[0]?.type === 'heading' && tokens[0].depth === 1) {
    headerTokens.push(tokens.shift());
    if (tokens[0]?.type === 'paragraph') headerTokens.push(tokens.shift());
  }
  const header = marked.parser(headerTokens).replace('<p>', '<p class="section-intro">');
  const pageHeader = headerTokens.length
    ? `<div class="page-header"><div class="container">${header}</div></div>`
    : '';
  return `<main id="main-content">${pageHeader}<section class="section"><div class="container content-page"><div class="changelog">${marked.parser(tokens)}</div></div></section></main>`
    .replace(/(<h[1-6]\b[^>]*?)\s+id="[^"]+"/g, '$1');
}

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(file);
    return entry.isFile() && file.endsWith('.html') && !entry.name.startsWith('_') ? [file] : [];
  });
}

function markdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(file);
    return entry.isFile() && file.endsWith('.md') ? [file] : [];
  });
}

function documentationFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return documentationFiles(file);
    return entry.isFile() && file.endsWith('.md') ? [file] : [];
  });
}

function documentationLink(href, file, docsDir) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) return href;
  const suffix = /([?#].*)$/.exec(href)?.[1] || '';
  const pathname = href.slice(0, href.length - suffix.length);
  if (!pathname) return href;
  if (pathname.startsWith('/')) return href;

  const target = path.resolve(path.dirname(file), decodeURIComponent(pathname));
  const relative = path.relative(docsDir, target);
  if (relative.startsWith(`..${path.sep}`) || relative === '..') return href;

  const extension = path.extname(relative).toLowerCase();
  const page = path.join(docsDir, extension ? relative.slice(0, -extension.length) + '.md' : `${relative}.md`);
  if ((['.md', '.html', '.rst'].includes(extension) || !extension) && fs.existsSync(page)) {
    const pagePath = path.relative(docsDir, page).replace(/\\/g, '/').replace(/\.md$/, '');
    const route = pagePath === 'index'
      ? '/docs/'
      : `/docs/${pagePath.replace(/\/index$/, '')}/`;
    return `${route}${suffix}`;
  }

  return `/docs/${relative.replace(/\\/g, '/')}${suffix}`;
}

function documentationNavigation(index, currentPage, docsDir) {
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
      const href = documentationLink(link[2], path.join(docsDir, 'index.md'), docsDir);
      group.links.push(`<a href="${href}"${href === currentPage ? ' aria-current="page"' : ''}>${link[1]}</a>`);
    }
  }
  return groups.map(({ title, links }) =>
    `<section><h2>${title}</h2>${links.join('')}</section>`
  ).join('');
}

function buildDocumentation(outputDir) {
  const docsDir = path.join(sourceDir, 'docs');
  const indexFile = path.join(docsDir, 'index.md');
  const index = fs.readFileSync(indexFile, 'utf8');
  const targetDir = path.join(outputDir, 'docs');
  fs.mkdirSync(targetDir, { recursive: true });
  for (const entry of fs.readdirSync(targetDir, { withFileTypes: true })) {
    fs.rmSync(path.join(targetDir, entry.name), { recursive: true, force: true });
  }

  const searchIndex = [];
  for (const file of documentationFiles(docsDir)) {
    const relative = path.relative(docsDir, file);
    const source = fs.readFileSync(file, 'utf8');
    const title = /^#\s+(.+)$/m.exec(source)?.[1] || path.basename(file, '.md');
    const parent = /^\[Back to ([^\]]+)\]\(([^)]+)\)/m.exec(source);
    const sourceBody = parent ? source.replace(parent[0], '') : source;
    let content = marked.parse(sourceBody);
    content = content.replace(/\b(href|src)=(")(.*?)\2/g, (attribute, name, quote, href) =>
      `${name}="${documentationLink(href, file, docsDir)}"`
    );
    const pagePath = relative === 'index.md'
      ? '/docs/'
      : `/docs/${relative.replace(/\.md$/, '').replace(/\\/g, '/')}/`;
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
    searchIndex.push({ title, url: `${basePath}${pagePath}`, text });
    const componentPage = path.join('docs', relative.replace(/\.md$/, '.html'));
    const pageUrls = { it: '/it/', en: pagePath };
    const headerDocument = renderComponent('header', 'en', componentPage, pageUrls);
    const siteHeader = /<header\b[\s\S]*?<\/header>/i.exec(headerDocument)?.[0];
    if (!siteHeader) throw new Error('Shared header component has no <header> element');
    const siteFooter = renderComponent('footer', 'en', componentPage, pageUrls)
      .replace(/<\/body>\s*<\/html>\s*$/i, '');
    const parentBreadcrumb = parent
      ? `<li><a href="${documentationLink(parent[2], file, docsDir)}">${parent[1]}</a></li>`
      : '';
    const sourcePath = relative.replace(/\\/g, '/').split('/').map(encodeURIComponent).join('/');
    const sourceUrl = `https://github.com/g3w-suite/g3w-suite.github.io/edit/vanilla/src/docs/${sourcePath}`;
    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="G3W-SUITE documentation">
  <title>${title} - G3W-SUITE Documentation</title>
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
  <div class="docs-layout">
    <nav class="docs-nav" aria-label="Documentation navigation">
      <form class="docs-search" role="search" data-index-url="${basePath}/docs/search-index.json">
        <label for="docs-search-input" class="sr-only">Search documentation</label>
        <input id="docs-search-input" type="search" name="q" placeholder="Search docs" autocomplete="off" aria-controls="docs-search-results">
      </form>
      <div id="docs-search-results" class="docs-search-results" role="status" aria-live="polite" hidden></div>
      ${documentationNavigation(index, pagePath, docsDir)}
    </nav>
    <main id="main-content" class="docs-content">
      <nav class="docs-toolbar" aria-label="Breadcrumb">
        <ol class="docs-breadcrumb">
          <li><a class="docs-breadcrumb__home" href="/docs/" aria-label="Documentation home"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M12 3 2 12h3v9h5v-6h4v6h5v-9h3z"></path></svg></a></li>
          ${parentBreadcrumb}
          <li aria-current="page">${title}</li>
        </ol>
        <a class="docs-source-link" href="${sourceUrl}">Edit this page</a>
      </nav>
      ${content}
    </main>
  </div>
  ${siteFooter}
</body>
</html>`;
    const target = relative === 'index.md'
      ? path.join(targetDir, 'index.html')
      : path.join(targetDir, relative.replace(/\.md$/, `${path.sep}index.html`));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, publishedHtml(html));
  }
  fs.writeFileSync(path.join(targetDir, 'search-index.json'), JSON.stringify(searchIndex));
}

function outputPage(page) {
  const htmlPage = page.replace(/\.md$/, '.html');
  return path.basename(htmlPage) === 'index.html' ? htmlPage : htmlPage.replace(/\.html$/, `${path.sep}index.html`);
}

function languagePageUrl(page, lang) {
  const output = outputPage(page).split(path.sep).join('/');
  const route = output.replace(/(^|\/)index\.html$/, '');
  return `/${lang}/${route}${route ? '/' : ''}`;
}

function pageBodyClass(page) {
  const route = outputPage(page).split(path.sep).join('/').replace(/(^|\/)index\.html$/, '');
  const slug = route.split('/').filter(Boolean).join('-').toLowerCase().replace(/[^a-z0-9-]/g, '-');
  return `page-${slug || 'home'}`;
}

function renderComponent(component, lang, page, pageUrls, pageHead = '') {
  const values = {
    itPage: pageUrls.it,
    enPage: pageUrls.en,
    langRoot: `/${lang}/`,
    siteRoot: '/',
    lang,
    pageClass: pageBodyClass(page),
    pageHead,
  };
  const name = `_${component}.html`;
  let output;
  try {
    const componentTemplate = extractPageTranslations(
      fs.readFileSync(path.join(sourceDir, name), 'utf8').trim(),
      `src/${name}`
    );
    output = translateHtml(
      renderLanguageBlocks(componentTemplate.html, lang),
      lang,
      componentTemplate.translations
    );
  } catch (e) {
    e.message = `src/${name}: ${e.message}`;
    throw e;
  }
  output = output.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in values)) throw new Error(`Unknown ${component} placeholder: ${key}`);
    return values[key];
  });
  const active = page.startsWith(`changelog${path.sep}`)
    ? 'changelog'
    : path.basename(page, '.html');
  output = output.replace(/<a\b([^>]*?)\sdata-nav-key="([^"]+)"([^>]*)>/g, (_, before, key, after) =>
    `<a${before}${after}${key === active ? ' aria-current="page"' : ''}>`
  );
  return output.replace(/<a\b([^>]*?)\sdata-lang-key="([^"]+)"([^>]*)>/g, (_, before, key, after) =>
    `<a${before}${after}${key === lang ? ' aria-current="true"' : ''}>`
  );
}

function build(outputDir) {
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
        const localized = translateHtml(
          renderLanguageBlocks(pageMetadata.html, lang),
          lang,
          pageTemplate.translations
        );
        const content = localized.replace(
          /<!--#include file="(?:\.\.\/)?_(?:header|footer)\.html"-->/g,
          ''
        );
        const pageContent = path.extname(file) === '.md'
          ? page.startsWith(`changelog${path.sep}`)
            ? renderChangelogMarkdown(content)
            // Remove source indentation so Marked doesn't treat nested HTML as code.
            : marked.parse(content.replace(/^[\t ]+/gm, ''))
          : content;
        const header = renderComponent('header', lang, page, pageUrls, pageHead);
        const footer = renderComponent('footer', lang, page, pageUrls);
        const output = renderYoutubeVideos(`${header}\n${pageContent}\n${footer}`);
        const target = path.join(outputDir, lang, outputPage(page));
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, publishedHtml(output));
      } catch (e) {
        e.message = `${path.relative(projectRoot, file)} (${lang}): ${e.message}`;
        throw e;
      }
    }
  }
  buildDocumentation(outputDir);
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

if (buildOnly) runBuild(staticDir);
else if (devMode) runBuild(root, false);

if (devMode) {
  let rebuildTimer;
  const watcher = fs.watch(sourceDir, { recursive: true }, () => {
    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(() => {
      if (runBuild(root, false)) console.log('Sito aggiornato.');
    }, 100);
  });
  watcher.on('error', error => console.error(`Source watcher failed: ${error.message}`));
}

if (!buildOnly) {
  http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname.endsWith('.html')) {
      const clean = url.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');
      res.writeHead(301, { Location: clean + url.search });
      res.end();
      return;
    }
    let filePath = path.join(root, decodeURIComponent(url.pathname));
    if (req.url === '/') filePath = path.join(root, 'index.html');
    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else if (!err && stats.isDirectory()) {
        if (!url.pathname.endsWith('/')) {
          res.writeHead(301, { Location: url.pathname + '/' + url.search });
          res.end();
          return;
        }
        const indexFile = path.join(filePath, 'index.html');
        fs.stat(indexFile, (err2, stats2) => {
          if (!err2 && stats2.isFile()) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(indexFile).pipe(res);
          } else {
            res.writeHead(403);
            res.end('Directory access is forbidden');
          }
        });
      } else {
        res.writeHead(404);
        res.end('File not found');
      }
    });
  }).listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}/`);
  });
}
