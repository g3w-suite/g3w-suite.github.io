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
const translations = require(path.join(sourceDir, 'i18n', 'it.json'));
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

function translate(source, lang) {
  if (lang === 'en') return source;
  const leading = /^\s*/.exec(source)[0];
  const trailing = /\s*$/.exec(source)[0];
  const text = source.slice(leading.length, source.length - trailing.length);
  const key = text.replace(/&amp;/g, '&');
  if (!Object.hasOwn(translations, key)) throw new Error(`Missing Italian translation: ${text}`);
  const translated = translations[key].replace(/&(?!#\d+;|#x[\da-f]+;|[a-z][\da-z]+;)|[<>"']/gi, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
  return `${leading}${translated}${trailing}`;
}

function translateHtml(html, lang) {
  const output = html.replace(/\{\{t\s+'((?:\\.|[^'\\])*)'\s*\}\}/g, (_, source) =>
    translate(source.replace(/\\(['\\])/g, '$1'), lang)
  );
  if (/\{\{t\b|\{\{\/t\}\}/.test(output)) throw new Error('Invalid or unclosed translation helper');
  return output;
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
    let content = marked.parse(source);
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
    const componentHtml = `<link rel="alternate" hreflang="it" href="/it/"><link rel="alternate" hreflang="en" href="${pagePath}">`;
    const componentPage = path.join('docs', relative.replace(/\.md$/, '.html'));
    const siteHeader = renderComponent('header', 'en', componentPage, componentHtml);
    const siteFooter = renderComponent('footer', 'en', componentPage, componentHtml);
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
<body>
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
    <main id="main-content" class="docs-content">${content}</main>
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

function alternateUrl(html, lang) {
  const tag = html.match(/<link\b[^>]*>/gi)?.find(link =>
    /\brel="alternate"/i.test(link) && new RegExp(`\\bhreflang="${lang}"`, 'i').test(link)
  );
  const href = tag && /\bhref="([^"]+)"/i.exec(tag)?.[1];
  if (!href) throw new Error(`Missing ${lang} alternate link`);
  return href;
}

function outputPage(page, lang) {
  if (page === 'modules.html' && lang === 'it') page = 'moduli.html';
  return path.basename(page) === 'index.html' ? page : page.replace(/\.html$/, `${path.sep}index.html`);
}

function renderComponent(component, lang, page, html) {
  const values = {
    itPage: alternateUrl(html, 'it'),
    enPage: alternateUrl(html, 'en'),
    langRoot: `/${lang}/`,
    siteRoot: '/',
  };
  const name = `_${component}.html`;
  let output;
  try {
    output = translateHtml(
      renderLanguageBlocks(fs.readFileSync(path.join(sourceDir, name), 'utf8').trim(), lang),
      lang
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
    : ({ moduli: 'modules', modules: 'modules' })[path.basename(page, '.html')] || path.basename(page, '.html');
  output = output.replace(/<a\b([^>]*?)\sdata-nav-key="([^"]+)"([^>]*)>/g, (_, before, key, after) =>
    `<a${before}${after}${key === active ? ' aria-current="page"' : ''}>`
  );
  return output.replace(/<a\b([^>]*?)\sdata-lang-key="([^"]+)"([^>]*)>/g, (_, before, key, after) =>
    `<a${before}${after}${key === lang ? ' aria-current="true"' : ''}>`
  );
}

function build(outputDir) {
  const pages = htmlFiles(sourceDir).map(file => ({
    file,
    page: path.relative(sourceDir, file),
  }));
  if (!pages.length) throw new Error('No source HTML pages found in src');

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), publishedHtml(fs.readFileSync(path.join(sourceDir, '_redirect.html'), 'utf8')));
  for (const lang of languages) {
    fs.rmSync(path.join(outputDir, lang), { recursive: true, force: true });
    fs.mkdirSync(path.join(outputDir, lang), { recursive: true });
  }

  for (const { file, page } of pages) {
    const sourceHtml = fs.readFileSync(file, 'utf8');
    for (const lang of languages) {
      try {
      const html = translateHtml(renderLanguageBlocks(sourceHtml, lang), lang);
      const counts = { meta: 0, header: 0, footer: 0 };
      const localized = html.replace(/<html\b([^>]*?)\blang="[^"]+"/i, `<html$1lang="${lang}"`);
      const output = renderYoutubeVideos(localized.replace(/<!--#include file="([^"]+)"-->/g, (_, include) => {
        const name = path.basename(include, '.html').replace(/^_/, '');
        const componentPath = path.normalize(path.join(path.dirname(page), include));
        if (!['meta', 'header', 'footer'].includes(name) || componentPath !== `_${name}.html`) {
          throw new Error(`Invalid component include in ${file}: ${include}`);
        }
        counts[name]++;
        return renderComponent(name, lang, page, localized);
      }));
      if (counts.meta !== 1 || counts.header !== 1 || counts.footer !== 1) {
        throw new Error(`${file} must contain one meta, one header and one footer include`);
      }
      const target = path.join(outputDir, lang, outputPage(page, lang));
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
