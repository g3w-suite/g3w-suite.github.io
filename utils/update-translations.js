'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
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

function updateCatalog(entries, missing, translations) {
  const updated = { ...entries };
  for (const [page, keys] of Object.entries(missing)) {
    const values = new Map(Object.entries(entries[page] || {}));
    for (const key of keys) {
      if (values.has(key)) continue;
      if (!Object.hasOwn(translations, key) || typeof translations[key] !== 'string' || !translations[key].trim()) {
        throw new Error(`Missing machine translation for ${page}: ${key}`);
      }
      values.set(key, translations[key]);
    }
    updated[page] = Object.fromEntries([...values.keys()].sort().map(key => [key, values.get(key)]));
  }
  return Object.fromEntries(Object.keys(updated).sort().map(key => [key, updated[key]]));
}

function main() {
  const sources = [...markdownFiles(sourceDir), ...htmlFiles(sourceDir), ...['_header.html', '_footer.html']
    .map(file => path.join(sourceDir, file))]
    .map(file => [path.relative(sourceDir, file).split(path.sep).join('/'), fs.readFileSync(file, 'utf8')]);
  const catalogs = {};
  const missing = {};
  const requests = {};
  for (const lang of languages.filter(lang => lang !== 'en')) {
    const entries = catalogs[lang] = catalog(lang);
    const pages = sources.map(([file, source]) => [
      file, missingPageKeys(source, file, lang, entries[file] || {}),
    ]);
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
  const updates = Object.keys(requests).map(lang => [
    path.join(catalogDir, `${lang}.json`),
    JSON.stringify(updateCatalog(catalogs[lang], missing[lang], translated[lang]), null, 2) + '\n',
  ]);
  for (const [file, contents] of updates) fs.writeFileSync(file, contents);
}

if (require.main === module) main();
module.exports = { missingPageKeys, updateCatalog };
