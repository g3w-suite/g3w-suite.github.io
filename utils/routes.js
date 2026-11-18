'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { sourceDir, languages, languageName, docsRoot } = require('./config');
const { pageCatalog, translate, translateHtml, renderLanguageBlocks } = require('./translations');

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

function renderLanguageLinks(pageUrls, currentLanguage) {
  return [...languages].sort().map(lang =>
    `<li><a href="${pageUrls[lang]}" lang="${lang}" hreflang="${lang}"${lang === currentLanguage ? ' aria-current="true"' : ''}>${languageName(lang)}</a></li>`
  ).join('');
}

function renderLanguageOptions(currentLanguage) {
  const names = new Intl.DisplayNames(['en'], { type: 'language' });
  return [...languages].sort().map(lang => {
    const label = names.of(lang);
    return `<label><input type="radio" name="language" value="${lang}"${lang === currentLanguage ? ' checked' : ''}><img src="/img/language-${lang}.avif" width="24" height="16" alt="${label}" aria-hidden="true"><span lang="en">${label}</span></label>`;
  }).join('');
}

function pageBodyClass(page) {
  const route = outputPage(page).split(path.sep).join('/').replace(/(^|\/)index\.html$/, '');
  const slug = route.split('/').filter(Boolean).join('-').toLowerCase().replace(/[^a-z0-9-]/g, '-');
  return `page-${slug || 'home'}`;
}

function renderBreadcrumb(lang, items, sourcePage, entries) {
  const translations = pageCatalog(lang, entries, '@breadcrumb');
  const label = translate('Breadcrumb', lang, translations);
  const editLabel = translate('Edit', lang, translations);
  const sourcePath = sourcePage.split(path.sep).map(encodeURIComponent).join('/');
  const sourceUrl = `https://github.com/g3w-suite/g3w-suite.github.io/edit/vanilla/src/${sourcePath}`;
  const links = [{ href: `/${lang}/`, label: translate('Home', lang, translations) }, ...items];
  return `<nav class="site-breadcrumb" aria-label="${label}"><div class="container"><ol>${links.map(({ href, label: text }, index) =>
    index === links.length - 1
      ? `<li aria-current="page">${text}</li>`
      : `<li><a href="${href}">${text}</a></li>`
  ).join('')}</ol><a class="site-edit-link" href="${sourceUrl}">${editLabel}</a></div></nav>`;
}

function renderComponent(component, lang, page, pageUrls, entries, pageHead = '') {
  const values = {
    currentLanguage: new Intl.DisplayNames(['en'], { type: 'language' }).of(lang),
    languageOptions: renderLanguageOptions(lang),
    langRoot: `/${lang}/`,
    documentationUrl: `${docsRoot(lang)}/`,
    siteRoot: '/',
    lang,
    pageClass: pageBodyClass(page),
    pageHead,
  };
  const name = `_${component}.html`;
  let output;
  try {
    const template = fs.readFileSync(path.join(sourceDir, name), 'utf8').trim();
    output = translateHtml(
      renderLanguageBlocks(template, lang),
      lang,
      pageCatalog(lang, entries, name)
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
  return output;
}

module.exports = { outputPage, languagePageUrl, renderLanguageLinks, pageBodyClass, renderBreadcrumb, renderComponent };
