'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { sourceDir } = require('./config');
const { extractPageTranslations, translateHtml, renderLanguageBlocks } = require('./translations');

function outputPage(page) {
  let htmlPage = page.replace(/\.md$/, '.html');
  const datedArticle = /^(\d{4}-\d{2}-\d{2})-(?:changelog-)?(.+)\.html$/.exec(path.basename(htmlPage));
  if (htmlPage.startsWith(`news${path.sep}`) && datedArticle) {
    htmlPage = path.join(path.dirname(htmlPage), `${datedArticle[2]}.html`);
  }
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

function renderBreadcrumb(lang, items) {
  const label = lang === 'it' ? 'Percorso di navigazione' : 'Breadcrumb';
  const links = [{ href: `/${lang}/`, label: 'Home' }, ...items];
  return `<nav class="site-breadcrumb" aria-label="${label}"><div class="container"><ol>${links.map(({ href, label: text }, index) =>
    index === links.length - 1
      ? `<li aria-current="page">${text}</li>`
      : `<li><a href="${href}">${text}</a></li>`
  ).join('')}</ol></div></nav>`;
}

function renderComponent(component, lang, page, pageUrls, pageHead = '') {
  const values = {
    itPage: pageUrls.it,
    enPage: pageUrls.en,
    langRoot: `/${lang}/`,
    documentationUrl: lang === 'it' ? '/it/docs/' : '/docs/',
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
  const active = page.startsWith(`news${path.sep}`)
    ? 'news'
    : page.startsWith(`docs${path.sep}`)
      ? 'documentation'
      : page.startsWith(`about${path.sep}`)
        ? 'about'
        : page.startsWith(`sponsors${path.sep}`)
            ? 'sponsors'
            : page.startsWith(`community${path.sep}`)
              ? 'community'
              : path.basename(page, path.extname(page));
  output = output.replace(/<a\b([^>]*?)\sdata-nav-key="([^"]+)"([^>]*)>/g, (_, before, key, after) =>
    `<a${before}${after}${key === active ? ' aria-current="page"' : ''}>`
  );
  return output.replace(/<a\b([^>]*?)\sdata-lang-key="([^"]+)"([^>]*)>/g, (_, before, key, after) =>
    `<a${before}${after}${key === lang ? ' aria-current="true"' : ''}>`
  );
}

module.exports = { outputPage, languagePageUrl, pageBodyClass, renderBreadcrumb, renderComponent };
