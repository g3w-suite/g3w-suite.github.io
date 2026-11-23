'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { marked } = require('marked');
const { catalogDir, sourceDir, languages } = require('./config');
const { htmlFiles, markdownFiles } = require('./files');
const { autoTranslateMarkdown } = require('./markdown');
const { documentationLabels } = require('./documentation');
const { renderBreadcrumb } = require('./routes');
const { catalog, extractPageMetadata, renderLanguageBlocks, renderPageMetadata, translateHtml } = require('./translations');

function observeMissing(entries, missing) {
  return new Proxy(entries, {
    get(target, key) {
      if (Object.hasOwn(target, key)) return target[key];
      missing.add(key);
      return key;
    },
  });
}

function isMarkdownText(key) {
  const prose = key.replace(/!?\[(?:[^\[\]]|!\[[^\[\]]*\]\([^)]*\))*\]\([^)]*\)/g, '');
  return /[a-z]/i.test(prose) && !/^(?:\s*(?:!\[|<(?=[a-z!/])|`)|(?:https?:\/\/|\/)\S+$)/i.test(key) &&
    !/^(?:https?:\/\/|\/)\S+$/i.test(prose);
}

function usedPageKeys(source, file, lang, entries) {
  const { html, metadata } = extractPageMetadata(source, file);
  const used = new Set();
  const body = renderLanguageBlocks(html, lang);
  const explicit = { [lang]: new Proxy(entries, {
    get(target, key) {
      if (Object.hasOwn(target, key)) used.add(key);
      return target[key];
    },
  }) };
  renderPageMetadata(metadata, lang, explicit);
  translateHtml(body, lang, explicit);
  if (file.endsWith('.md')) {
    const markdown = { [lang]: new Proxy(entries, {
      getOwnPropertyDescriptor(target, key) {
        if (Object.hasOwn(target, key)) used.add(key);
        return Reflect.getOwnPropertyDescriptor(target, key);
      },
    }) };
    autoTranslateMarkdown(body, lang, markdown);
  }
  return used;
}

function missingPageKeys(source, file, lang, entries) {
  const { html, metadata } = extractPageMetadata(source, file);
  const missing = new Set();
  const body = renderLanguageBlocks(html, lang);
  const explicit = { [lang]: observeMissing(entries, missing) };
  renderPageMetadata(metadata, lang, explicit);
  translateHtml(body, lang, explicit);
  if (file.endsWith('.md')) {
    const candidates = new Set();
    let seen = candidates;
    const markdown = { [lang]: new Proxy(entries, {
      getOwnPropertyDescriptor(target, key) {
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        if (!descriptor && isMarkdownText(key)) seen.add(key);
        return descriptor;
      },
    }) };
    autoTranslateMarkdown(body, lang, markdown);
    if (lang === 'it') {
      // Only keep keys also present outside language blocks, without losing localized URLs.
      seen = new Set();
      autoTranslateMarkdown(html.replace(/\{\{#(it|en)\}\}[\s\S]*?\{\{\/\1\}\}/g, ''), lang, markdown);
      for (const key of candidates) if (seen.has(key)) missing.add(key);
    } else {
      for (const key of candidates) missing.add(key);
    }
  }
  return [...missing];
}

function missingSharedKeys(lang, entries) {
  const breadcrumb = new Set();
  renderBreadcrumb(lang, [], 'index.md', { '@breadcrumb': observeMissing(entries['@breadcrumb'] || {}, breadcrumb) });
  return [
    ['@breadcrumb', [...breadcrumb]],
    ['@documentation', Object.values(documentationLabels).filter(key => !Object.hasOwn(entries['@documentation'] || {}, key))],
  ];
}

function validateTranslation(source, translation) {
  if (typeof translation !== 'string' || !translation.trim()) {
    throw new Error('Empty translation');
  }
  const repeatedWords = /(?:^|[\s,])(\p{L}[\p{L}\p{M}\p{N}'\u2019.-]*)(?:[,\s]+\1){2,}(?=[\s,.;:!?]|$)/iu;
  const repeatedLabel = /^\s*(\p{L}[\p{L}\p{M}\p{N}'\u2019.-]*)(?:\s+\1)+\s*$/iu;
  if ((repeatedWords.test(translation) && !repeatedWords.test(source)) ||
      (repeatedLabel.test(translation) && !repeatedLabel.test(source))) {
    throw new Error('Corrupted translation: repeated words');
  }
  const repeatedSequence = /([\p{L}\p{N}]{2,12}?)\1{5,}/iu;
  if (repeatedSequence.test(translation) && !repeatedSequence.test(source)) {
    throw new Error('Corrupted translation: repeated characters');
  }
  const repeatedPunctuation = /,(?:\s*,)+|[!?](?:\s*[!?]){3,}|!{2,}\[|\. {1,}\.|\.{4,}/;
  if (repeatedPunctuation.test(translation) && !repeatedPunctuation.test(source)) {
    throw new Error('Corrupted translation: repeated punctuation');
  }
  const withoutCode = text => text.replace(/(`+[^`\n]*`+)/g, '\0');
  const damagedWord = text => /\p{L}\?\p{L}/u.test(withoutCode(text)
    .replace(/\]\([^)\n]*\)|(?:https?:\/\/|\/)[^\s<>\])]+/g, ''));
  if ((translation.includes('\uFFFD') && !source.includes('\uFFFD')) ||
      (damagedWord(translation) && !damagedWord(source))) {
    throw new Error('Corrupted translation: damaged text encoding');
  }
  const repeatedSpaces = /(?<=\S) {2,}(?=\S)/;
  if (repeatedSpaces.test(withoutCode(translation)) && !repeatedSpaces.test(withoutCode(source))) {
    throw new Error('Corrupted translation: repeated spaces');
  }
  const brokenEntity = /&\s+(?:#(?:x[\da-f]+|\d+)|[a-z]+);/i;
  if (brokenEntity.test(translation) && !brokenEntity.test(source)) {
    throw new Error('Corrupted translation: malformed HTML entity');
  }
  for (const [, value] of source.matchAll(/\b(?:user|password):\s*\*\*([^*]+)\*\*/gi)) {
    if (!translation.includes(`**${value}**`)) {
      throw new Error('Corrupted translation: changed login value');
    }
  }
  const versions = translation.match(/\d+(?:\.\d+)+(?:\.x)?/g) || [];
  for (const match of source.matchAll(/\b(?:(?:QGIS|Ubuntu|Django|Python|G3W-SUITE)\s+(?:\*{1,2})?(\d+(?:\.\d+)+(?:\.x)?)|(\d+(?:\.\d+)+(?:\.x)?)\s+(?:LTR|LTS)\b)/g)) {
    if (!versions.includes(match[1] || match[2])) {
      throw new Error('Corrupted translation: changed software version');
    }
  }
  const markers = text => JSON.stringify(text.match(/\*+|_+|~~/g) || []);
  if (/[*_]/.test(source) && markers(source) === markers(translation)) {
    const formatting = text => {
      const counts = { strong: 0, em: 0 };
      marked.walkTokens(marked.lexer(text), token => {
        if (Object.hasOwn(counts, token.type)) counts[token.type]++;
      });
      return counts;
    };
    const expected = formatting(source);
    const actual = formatting(translation);
    if (actual.strong < expected.strong || actual.em < expected.em) {
      throw new Error('Corrupted translation: broken Markdown emphasis');
    }
  }
}

function updateCatalog(entries, missing, translations) {
  const updated = { ...entries };
  const errors = [];
  for (const [page, keys] of Object.entries(missing)) {
    const values = new Map(Object.entries(entries[page] || {}));
    for (const key of keys) {
      if (values.has(key)) continue;
      if (!Object.hasOwn(translations, key) || typeof translations[key] !== 'string' || !translations[key].trim()) {
        errors.push(`Missing machine translation for ${page}: ${key}`);
        continue;
      }
      try {
        validateTranslation(key, translations[key]);
      } catch (error) {
        errors.push(`${page}: ${error.message}: ${key}`);
        continue;
      }
      values.set(key, translations[key]);
    }
    updated[page] = Object.fromEntries([...values.keys()].sort().map(key => [key, values.get(key)]));
  }
  if (errors.length) throw new AggregateError(errors, errors.join('\n'));
  return Object.fromEntries(Object.keys(updated).sort().map(key => [key, updated[key]]));
}

function main() {
  const sources = [...markdownFiles(sourceDir), ...htmlFiles(sourceDir), ...['_header.html', '_footer.html']
    .map(file => path.join(sourceDir, file))]
    .map(file => [path.relative(sourceDir, file).split(path.sep).join('/'), fs.readFileSync(file, 'utf8')]);
  const catalogs = {};
  const missing = {};
  const used = {};
  const requests = {};
  for (const lang of languages.filter(lang => lang !== 'en')) {
    const entries = catalogs[lang] = catalog(lang);
    const pages = sources.map(([file, source]) => {
      used[`${lang}:${file}`] = usedPageKeys(source, file, lang, entries[file] || {});
      return [file, missingPageKeys(source, file, lang, entries[file] || {})];
    });
    missing[lang] = Object.fromEntries([...pages, ...missingSharedKeys(lang, entries)].filter(([, keys]) => keys.length));
    const keys = [...new Set(Object.values(missing[lang]).flat())];
    if (keys.length) requests[lang] = keys;
    console.log(`${lang}: ${keys.length} unique missing strings`);
  }
  const hasMissing = Object.keys(requests).length > 0;
  if (process.argv.includes('--dry-run')) {
    if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `has_missing=${hasMissing}\n`);
    return;
  }
  if (!hasMissing) return;

  const result = spawnSync(process.env.PYTHON || 'python', [path.join(__dirname, 'translate-argos.py')], {
    input: JSON.stringify(requests),
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
    stdio: ['pipe', 'pipe', 'inherit'],
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`Argos Translate failed (${result.signal || result.status})`);
  const translated = JSON.parse(result.stdout);
  const updates = [];
  const errors = [];
  for (const lang of Object.keys(requests)) {
    try {
      const updated = updateCatalog(catalogs[lang], missing[lang], translated[lang] || {});
      // Keep only keys that are actually used
      const usedKeys = new Set();
      for (const [file, keys] of Object.entries(used).filter(([k]) => k.startsWith(`${lang}:`))) {
        for (const key of keys) usedKeys.add(key);
      }
      const cleaned = {};
      for (const page of Object.keys(updated)) {
        cleaned[page] = Object.fromEntries(Object.entries(updated[page]).filter(([k]) => usedKeys.has(k)));
      }
      updates.push([path.join(catalogDir, `${lang}.json`), JSON.stringify(cleaned, null, 2) + '\n']);
    } catch (error) {
      if (!(error instanceof AggregateError)) throw error;
      errors.push(...error.errors.map(message => `${lang}: ${message}`));
    }
  }
  if (errors.length) throw new Error(`Cannot save translations (${errors.length} errors):\n${errors.join('\n')}`);
  for (const [file, contents] of updates) fs.writeFileSync(file, contents);
}

if (require.main === module) main();
module.exports = { missingPageKeys, updateCatalog, validateTranslation };
