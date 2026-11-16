'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { Then } = require('@cucumber/cucumber');
const { staticDir, htmlFiles, readPage, localTarget } = require('../support/site');

Then('the build supports a project base path without broken internal links', function () {
  const prefix = '/www.g3wsuite.it';
  const build = basePath => {
    const result = spawnSync(process.execPath, ['build/server.js', '--build'], {
      env: { ...process.env, SITE_BASE_PATH: basePath },
      encoding: 'utf8',
    });
    assert.equal(result.status, 0, result.stderr);
  };
  try {
    build(prefix);
    for (const file of htmlFiles(staticDir)) {
      const { $ } = readPage(file);
      $('[href], [src]').each((_, element) => {
        for (const attr of ['href', 'src']) {
          const href = $(element).attr(attr);
          if (!href || !href.startsWith('/') || href.startsWith('//')) continue;
          assert.ok(href.startsWith(prefix + '/'), `${file}: missing project prefix in ${href}`);
          const target = localTarget(file, href.slice(prefix.length));
          assert.ok(target && fs.existsSync(target) && fs.statSync(target).isFile(), `${file}: broken ${href}`);
        }
      });

    }
    const { $ } = readPage(path.join(staticDir, 'index.html'));
    assert.equal($('meta[http-equiv="refresh"]').attr('content'), `0; url=${prefix}/it/`);
    const explore = readPage(path.join(staticDir, 'en', 'about', 'index.html')).$;
    assert.equal(explore('link[rel="stylesheet"]').attr('href'), `${prefix}/style.css`);
    const demos = readPage(path.join(staticDir, 'en', 'about', 'demos', 'index.html')).$;
    assert.ok(demos('a[href="https://v311.g3wsuite.it/"]').length, 'external URLs must remain unchanged');
    const docs = readPage(path.join(staticDir, 'docs', 'index.html')).$;
    assert.equal(docs('form.docs-search').attr('data-index-url'), `${prefix}/docs/search-index.json`);
    const searchIndex = JSON.parse(fs.readFileSync(path.join(staticDir, 'docs', 'search-index.json'), 'utf8'));
    assert.ok(searchIndex.every(page => page.url.startsWith(`${prefix}/docs/`)), 'search results must include the project base path');
    const italianDocs = readPage(path.join(staticDir, 'it', 'docs', 'index.html')).$;
    assert.equal(italianDocs('html').attr('lang'), 'it');
    assert.equal(italianDocs('form.docs-search').attr('data-index-url'), `${prefix}/it/docs/search-index.json`);
    const italianSearch = JSON.parse(fs.readFileSync(path.join(staticDir, 'it', 'docs', 'search-index.json'), 'utf8'));
    assert.ok(italianSearch.every(page => page.url.startsWith(`${prefix}/it/docs/`)), 'Italian search results must include the language route and project base path');
  } finally {
    build('');
  }
});
