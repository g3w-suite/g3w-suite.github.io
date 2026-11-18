'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { runInNewContext } = require('node:vm');
const { Then } = require('@cucumber/cucumber');
const { staticDir, htmlFiles, readPage, localTarget } = require('../support/site');
const { languages } = require('../../utils/config');
const { prepareMermaid, copyMermaidScript } = require('../../utils/mermaid');

Then('the browser highlighter supports the languages used in code blocks', function () {
  const assets = path.join(staticDir, 'highlight');
  const context = {};
  runInNewContext(fs.readFileSync(path.join(assets, 'highlight.min.js'), 'utf8'), context);
  const docs = readPage(path.join(staticDir, 'docs', 'translation', 'index.html')).$;
  for (const language of ['js', 'po']) {
    const snippet = docs(`pre > code.language-${language}`).text();
    assert.ok(snippet.trim());
    assert.match(context.hljs.highlight(snippet, { language }).value, /<span class="hljs-keyword">/);
  }
  assert.ok(context.hljs.getLanguage('nginx'));
  assert.ok(context.hljs.getLanguage('jsonc'));
  assert.match(fs.readFileSync(path.join(assets, 'github.min.css'), 'utf8'), /\.hljs-keyword/);
});

Then('Mermaid blocks render at runtime with accessible labels', function () {
  const output = fs.mkdtempSync(path.join(os.tmpdir(), 'g3w-mermaid-'));
  try {
    const markdown = label => `\`\`\`mermaid Diagram of the workflow\nflowchart LR\n  a["${label}"] --> b["Published"]\n\`\`\`\n`;
    const diagrams = new Set();
    const html = prepareMermaid(markdown('First & <diagram>'), diagrams, 'example.md (en)');
    assert.equal(diagrams.size, 1);
    assert.match(html, /<figure class="mermaid-diagram" role="img" aria-busy="true" aria-label="Diagram of the workflow">/);
    assert.match(html, /<pre class="mermaid" aria-hidden="true">[\s\S]*First &amp; &lt;diagram&gt;[\s\S]*<\/pre>/);
    assert.doesNotMatch(html, /<img|\.avif/);
    assert.throws(
      () => prepareMermaid('```mermaid\nflowchart LR\n a-->b\n```\n', new Set(), 'example.md'),
      /alternative text/
    );
    assert.throws(
      () => prepareMermaid('> ```mermaid Diagram\n> flowchart LR\n> a-->b\n> ```\n', new Set(), 'example.md'),
      /top-level/
    );
    copyMermaidScript(output);
    assert.ok(fs.statSync(path.join(output, 'mermaid.min.js')).size > 0);
    assert.ok(fs.existsSync(path.join(staticDir, 'mermaid.min.js')), 'site build must publish the Mermaid runtime');
  } finally {
    fs.rmSync(output, { recursive: true, force: true });
  }
});

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
    for (const lang of languages) {
      assert.equal($(`a[hreflang="${lang}"]`).attr('href'), `${prefix}/${lang}/`);
    }
    const explore = readPage(path.join(staticDir, 'en', 'about', 'index.html')).$;
    assert.equal(explore('link[rel="stylesheet"]').attr('href'), `${prefix}/app.css`);
    const demos = readPage(path.join(staticDir, 'docs', 'demo', 'index.html')).$;
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
