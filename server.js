'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = __dirname;
const publicDir = path.join(projectRoot, 'public');
const sourceDir = path.join(projectRoot, 'src');
const languages = ['it', 'en'];
const translations = require(path.join(sourceDir, 'i18n', 'it.js'));
const devMode = process.argv.includes('--dev');
const buildOnly = process.argv.includes('--build');
const root = devMode ? path.join(projectRoot, '.dev') : publicDir;
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
  if (/\{\{(?:#(?:it|en)|\/(?:it|en))\}\}/.test(output)) throw new Error('Unclosed language block');
  return output;
}

function translatedValue(key, scope, kind, attribute) {
  if (Object.hasOwn(translations, key)) return translations[key];
  if (attribute) return undefined;
  throw new Error(`Missing ${kind} translation for "${key}" in ${scope}`);
}

function translateHtml(html, lang, scope) {
  let output = html.replace(/<([a-z][^\s/>]*)([^>]*)>/gi, (tag, name, attributes) => {
    if (lang === 'en' || (name.toLowerCase() === 'link' && /\brel\s*=\s*(["'])alternate\1/i.test(attributes))) return tag;
    const translatedAttributes = attributes.replace(/\b([^\s=]+)=("([^"]*)"|'([^']*)')/g, (match, attribute, quoted, doubleValue, singleValue) => {
      const value = doubleValue === undefined ? singleValue : doubleValue;
      const translated = translatedValue(value, scope, 'attribute', attribute);
      if (translated === undefined) return match;
      return `${attribute}=${quoted[0]}${translated}${quoted[0]}`;
    });
    return `<${name}${translatedAttributes}>`;
  });
  output = output.replace(/\{\{t\s+("(?:\\.|[^"\\])*")\}\}/g, (_, literal) => {
    const text = JSON.parse(literal);
    const translated = lang === 'en'
      ? text
      : translatedValue(text, scope, 'text');
    return translated.replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char]);
  });
  return output;
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
  let output = translateHtml(
    renderLanguageBlocks(fs.readFileSync(path.join(sourceDir, name), 'utf8').trim(), lang),
    lang,
    name
  );
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
  fs.rmSync(path.join(outputDir, 'assets'), { recursive: true, force: true });
  fs.cpSync(path.join(projectRoot, 'src', 'assets'), path.join(outputDir, 'assets'), { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), publishedHtml(fs.readFileSync(path.join(sourceDir, '_redirect.html'), 'utf8')));
  for (const lang of languages) {
    fs.rmSync(path.join(outputDir, lang), { recursive: true, force: true });
    fs.mkdirSync(path.join(outputDir, lang), { recursive: true });
  }

  for (const { file, page } of pages) {
    const sourceHtml = fs.readFileSync(file, 'utf8');
    for (const lang of languages) {
      const scope = page.split(path.sep).join('/');
      const html = translateHtml(renderLanguageBlocks(sourceHtml, lang), lang, scope);
      const counts = { meta: 0, header: 0, footer: 0 };
      const localized = html.replace(/<html\b([^>]*?)\blang="[^"]+"/i, `<html$1lang="${lang}"`);
      const output = localized.replace(/<!--#include file="([^"]+)"-->/g, (_, include) => {
        const name = path.basename(include, '.html').replace(/^_/, '');
        const componentPath = path.normalize(path.join(path.dirname(page), include));
        if (!['meta', 'header', 'footer'].includes(name) || componentPath !== `_${name}.html`) {
          throw new Error(`Invalid component include in ${file}: ${include}`);
        }
        counts[name]++;
        return renderComponent(name, lang, page, localized);
      });
      if (counts.meta !== 1 || counts.header !== 1 || counts.footer !== 1) {
        throw new Error(`${file} must contain one meta, one header and one footer include`);
      }
      const target = path.join(outputDir, lang, outputPage(page, lang));
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, publishedHtml(output));
    }
  }
}

if (buildOnly) build(publicDir);
else if (devMode) build(root);

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
