'use strict';

const { languages } = require('./config');

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

module.exports = { renderLanguageBlocks, translate, translateHtml, extractPageTranslations, extractPageMetadata, renderPageMetadata, renderPageAlternates };
