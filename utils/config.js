'use strict';

const path = require('node:path');
const projectRoot = path.resolve(__dirname, '..');
const staticDir = path.join(projectRoot, 'static');
const sourceDir = path.join(projectRoot, 'src');
const catalogDir = path.join(projectRoot, 'i18n');
// The client uses "se" internally for Swedish; the web language tag is "sv".
const languages = ['it', 'en', 'bg', 'de', 'es', 'fi', 'fr', 'pl', 'pt', 'ro', 'sv', 'uk'];
const docsRoot = lang => `/${lang}/docs`;
function languageName(lang) {
  return new Intl.DisplayNames([lang], { type: 'language' }).of(lang);
}
const port = 8080;
const basePath = (process.env.SITE_BASE_PATH || '').replace(/\/$/, '');
if (basePath && !/^\/[a-zA-Z0-9._/-]+$/.test(basePath)) {
  throw new Error('SITE_BASE_PATH must be an absolute URL path, for example /www.g3wsuite.it');
}

function publishedHtml(html) {
  return html
    .replace(/<img\b[^>]*>/gi, image => {
      const loading = /\sloading\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/i;
      return loading.test(image)
        ? image.replace(loading, ' loading="lazy"')
        : image.replace(/(\s*\/?)>$/, ' loading="lazy"$1>');
    })
    .replace(/(\b(?:href|src)=["'])\/(?!\/)/g, `$1${basePath}/`)
    .replace(/(\bcontent=["'][^"']*\burl=)\/(?!\/)/gi, `$1${basePath}/`);
}

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.avif': 'image/avif',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

module.exports = { projectRoot, staticDir, sourceDir, catalogDir, languages, languageName, docsRoot, port, basePath, publishedHtml, mimeTypes };
