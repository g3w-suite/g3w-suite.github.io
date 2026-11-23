'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { parse: parseYaml } = require('yaml');
const { catalogDir, docsRoot, languages } = require('./config');

const notFoundSearchLabel = 'Search';

function catalog(lang) {
  if (lang === 'en') return {};
  const file = path.join(catalogDir, `${lang}.json`);
  const entries = JSON.parse(fs.readFileSync(file, 'utf8'));
  const isMap = value => value && typeof value === 'object' && !Array.isArray(value);
  const validEntries = value => isMap(value) && Object.values(value).every(text => typeof text === 'string');
  if (!isMap(entries) || !Object.values(entries).every(validEntries)) {
    throw new Error(`Invalid translation catalog: ${file}`);
  }
  return entries;
}

function pageCatalog(lang, entries, source) {
  return { [lang]: entries[source.split(path.sep).join('/')] || {} };
}

function localizeSiteUrl(url, lang) {
  return url.replace(/^\/?(?:en\/)?docs\//, `${docsRoot(lang)}/`)
    .replace(/^\/?en\//, `/${lang}/`);
}

function localizeSiteLinks(html, lang) {
  return html.replace(/(\bhref=["'])(\/(?:docs|en)\/[^"']*)/g, (_, before, url) =>
    before + localizeSiteUrl(url, lang));
}

function renderLanguageBlocks(html, lang) {
  const output = html.replace(/\{\{#(it|en)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_, target, content) =>
    target === (lang === 'it' ? 'it' : 'en') ? content : ''
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
  const translated = pageTranslations[lang]?.[key] ?? (lang === 'it' ? undefined : key);
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

function extractPageMetadata(html, file) {
  if (!/^---[ \t]*\r?\n/.test(html)) return { html, metadata: null };
  const block = /^---[ \t]*\r?\n([\s\S]*?)^---[ \t]*(?:\r?\n|$)(?:[ \t]*\r?\n)?/m.exec(html);
  if (!block) throw new Error(`${file} has unclosed YAML front matter`);

  let metadata;
  try {
    metadata = parseYaml(block[1], { maxAliasCount: 0 });
  } catch (error) {
    throw new Error(`${file} has invalid YAML front matter: ${error.message}`);
  }
  const allowedFields = ['title', 'description', 'ogTitle', 'ogDescription', 'ogType'];
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata) ||
    !Object.keys(metadata).length || Object.keys(metadata).some(key => !allowedFields.includes(key)) ||
    Object.entries(metadata).some(([key, value]) => typeof value !== 'string' || !value.trim() ||
      key === 'ogType' && !/^[a-z][a-z\d.-]*$/i.test(value))) {
    throw new Error(`${file} front matter has invalid metadata fields`);
  }
  return { html: html.slice(block[0].length), metadata };
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

module.exports = { catalog, pageCatalog, localizeSiteUrl, localizeSiteLinks, renderLanguageBlocks, translate, translateHtml, extractPageMetadata, renderPageMetadata, renderPageAlternates, notFoundSearchLabel };
