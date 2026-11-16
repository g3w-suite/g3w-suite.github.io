'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { load } = require('cheerio');

const staticDir = path.resolve('static');
const languages = ['it', 'en'];

function newsSlug(file) {
  return path.basename(file).replace(/^\d{4}-\d{2}-\d{2}-(?:changelog-)?/, '').replace(/\.md$/, '');
}

function htmlFiles(dir) {
  return filesIn(dir).filter(file => file.endsWith('.html'));
}

function pageSourceFiles(dir) {
  const markdownPages = filesIn(dir).filter(file =>
    file.endsWith('.md') && path.relative(dir, file).split(path.sep)[0] !== 'docs'
  );
  return [
    ...htmlFiles(dir).filter(file => !path.basename(file).startsWith('_')),
    ...markdownPages,
  ];
}

function pageBodyClass(route) {
  const slug = route.split(path.sep).join('/')
    .replace(/(^|\/)index\.html$/, '')
    .replace(/\.html$/, '')
    .split('/')
    .filter(Boolean)
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-');
  return `page-${slug || 'home'}`;
}

function filesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(file) : entry.isFile() ? [file] : [];
  });
}

function translationHelperPattern() {
  return /\{\{t\s+'((?:\\.|[^'\\])*)'\s*\}\}/g;
}

function markdownTranslationKeys(markdown) {
  const keys = new Set();
  let inCodeFence = false;
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence || /^\s*\|/.test(line)) continue;
    const match = /^(\s*(?:(?:#{1,6}|>+)\s+|(?:[-*+]\s+|\d+[.)]\s+))?(?:<span id="[^"]+"><\/span>)?)(.*?)(\s*)$/.exec(line);
    if (match && match[2] && !/[{}]/.test(match[2])) keys.add(match[2]);
    for (const [, label] of line.matchAll(/!\[([^\[\]]+)\]\(/g)) keys.add(label);
    for (const [, , label] of line.matchAll(/(^|[^!])\[([^\[\]]+)\]\(/g)) keys.add(label);
  }
  return keys;
}

function extractPageTranslations(html, file) {
  const blocks = [...html.matchAll(/<script type="application\/json" data-i18n>([\s\S]*?)<\/script>/g)];
  assert.ok(blocks.length <= 1, `${file}: expected at most one data-i18n block`);
  if (!blocks.length) return { html, translations: {} };

  const translations = JSON.parse(blocks[0][1]);
  assert.ok(translations && typeof translations === 'object' && !Array.isArray(translations), `${file}: data-i18n must be an object`);
  for (const [lang, entries] of Object.entries(translations)) {
    assert.ok(languages.includes(lang), `${file}: unsupported data-i18n language "${lang}"`);
    assert.ok(entries && typeof entries === 'object' && !Array.isArray(entries), `${file}: ${lang} translations must be an object`);
    assert.ok(Object.keys(entries).length > 0, `${file}: omit empty ${lang} translations`);
    assert.ok(Object.values(entries).every(value => typeof value === 'string'), `${file}: ${lang} translations must be strings`);
  }
  return { html: html.replace(blocks[0][0], ''), translations };
}

function extractPageMetadata(html, file) {
  const blocks = [...html.matchAll(/<script type="application\/json" data-i18n-meta>([\s\S]*?)<\/script>/g)];
  assert.ok(blocks.length <= 1, `${file}: expected at most one data-i18n-meta block`);
  if (!blocks.length) return { html, metadata: null };

  const metadata = JSON.parse(blocks[0][1]);
  assert.ok(metadata && typeof metadata === 'object' && !Array.isArray(metadata), `${file}: data-i18n-meta must be an object`);
  assert.ok(Object.keys(metadata).length > 0, `${file}: data-i18n-meta must not be empty`);
  assert.ok(Object.keys(metadata).every(key =>
    ['title', 'description', 'ogTitle', 'ogDescription', 'ogType'].includes(key)
  ), `${file}: unsupported data-i18n-meta key`);
  assert.ok(Object.values(metadata).every(value => typeof value === 'string' && value.trim()), `${file}: metadata values must be non-empty strings`);
  return { html: html.replace(blocks[0][0], ''), metadata };
}

function renderLanguageBlocks(html, lang) {
  return html.replace(/\{\{#(it|en)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_, target, content) =>
    target === lang ? content : ''
  );
}

function findUnmarkedTranslations(file, html, translations) {
  const source = renderLanguageBlocks(html, 'it').replace(translationHelperPattern(), '__TRANSLATION_HELPER__');
  const unmarked = [];
  for (const [, name, attributes] of source.matchAll(/<([a-z][^\s/>]*)([^>]*)>/gi)) {
    if (name.toLowerCase() === 'link' && /\brel\s*=\s*(["'])alternate\1/i.test(attributes)) continue;
    for (const [, attribute, quoted, doubleValue, singleValue] of attributes.matchAll(/\b([^\s=]+)=("([^"]*)"|'([^']*)')/g)) {
      if (['lang', 'hreflang', 'data-lang-key', 'data-nav-key'].includes(attribute.toLowerCase())) continue;
      const value = doubleValue === undefined ? singleValue : doubleValue;
      if (Object.hasOwn(translations, value)) unmarked.push(`${file} ${attribute}="${value}"`);
    }
  }
  for (const [, content] of source.matchAll(/>([^<]+)</g)) {
    const leading = /^\s*/.exec(content)[0];
    const trailing = /\s*$/.exec(content)[0];
    const text = content.slice(leading.length, content.length - trailing.length);
    const key = Object.hasOwn(translations, text) ? text : text.replace(/&amp;/g, '&');
    if (text && Object.hasOwn(translations, key)) unmarked.push(`${file}: ${text}`);
  }
  return unmarked;
}

function readPage(file) {
  const html = fs.readFileSync(file, 'utf8');
  return { file, html, $: load(html) };
}

function localTarget(file, href) {
  if (!href) return null;
  const pagePath = path.relative(staticDir, file).split(path.sep).join('/');
  const url = new URL(href, `https://www.g3wsuite.it/${pagePath}`);
  if (!['http:', 'https:'].includes(url.protocol) || !['g3wsuite.it', 'www.g3wsuite.it'].includes(url.hostname)) return null;
  const target = path.join(staticDir, decodeURIComponent(url.pathname));
  return fs.existsSync(target) && fs.statSync(target).isDirectory() ? path.join(target, 'index.html') : target;
}

function checkPages(pages, check) {
  const errors = [];
  for (const page of pages) {
    const expect = (condition, message) => {
      if (!condition) errors.push(`${path.relative(process.cwd(), page.file)}: ${message}`);
    };
    check(page, expect);
  }
  assert.deepEqual(errors, [], errors.join('\n'));
}

module.exports = {
  staticDir,
  languages,
  newsSlug,
  htmlFiles,
  pageSourceFiles,
  pageBodyClass,
  filesIn,
  translationHelperPattern,
  markdownTranslationKeys,
  extractPageTranslations,
  extractPageMetadata,
  renderLanguageBlocks,
  findUnmarkedTranslations,
  readPage,
  localTarget,
  checkPages,
};
