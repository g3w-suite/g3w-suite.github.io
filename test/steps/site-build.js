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
const { catalog } = require('../../utils/translations');
const { prepareMermaid, copyMermaidScript } = require('../../utils/mermaid');

Then('the browser highlighter supports the languages used in code blocks', function () {
  const assets = path.join(staticDir, 'highlight');
  const context = {};
  runInNewContext(fs.readFileSync(path.join(assets, 'highlight.min.js'), 'utf8'), context);
  const docs = readPage(path.join(staticDir, 'en', 'docs', 'translate-g3w-suite', 'index.html')).$;
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
  const obsoleteRedirect = fs.mkdtempSync(path.join(staticDir, 'obsolete-language-redirect-'));
  fs.copyFileSync(path.join(staticDir, 'index.html'), path.join(obsoleteRedirect, 'index.html'));
  const build = basePath => {
    const result = spawnSync(process.execPath, ['build/server.js', '--build'], {
      env: { ...process.env, SITE_BASE_PATH: basePath },
      encoding: 'utf8',
    });
    assert.equal(result.status, 0, result.stderr);
  };
  try {
    build(prefix);
    const notFound = readPage(path.join(staticDir, '404.html')).$;
    assert.equal(notFound('meta[name="robots"]').attr('content'), 'noindex');
    assert.equal(notFound('header.site-header').length, 1, '404 must use the shared site header');
    assert.equal(notFound('footer.site-footer').length, 1, '404 must use the shared site footer');
    assert.equal(notFound(`link[rel="alternate"][hreflang="it"]`).attr('href'), `${prefix}/it/404/`);
    assert.equal(notFound('form.google-search').attr('action'), 'https://www.google.com/search');
    const italianNotFound = readPage(path.join(staticDir, 'it', '404', 'index.html')).$;
    assert.equal(italianNotFound('main h1').text(), 'Pagina non trovata');
    assert.equal(italianNotFound('header.site-header').length, 1);
    assert.equal(italianNotFound('footer.site-footer').length, 1);
    assert.ok(!fs.existsSync(obsoleteRedirect), 'rebuilds must remove redirects for deleted page routes');
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
    const redirect = readPage(path.join(staticDir, 'docs', 'demo', 'index.html')).$;
    const links = redirect('a[hreflang]').toArray().map(element => ({
      href: redirect(element).attr('href'),
      hreflang: redirect(element).attr('hreflang'),
    }));
    let redirected;
    runInNewContext(redirect('script').text(), {
      document: { querySelectorAll: () => links },
      navigator: { languages: ['fr-CA', 'en'] },
      location: { search: '?example=1', hash: '#details', replace: url => { redirected = url; } },
    });
    assert.equal(redirected, `${prefix}/fr/docs/demo/?example=1#details`);
    const explore = readPage(path.join(staticDir, 'en', 'about', 'index.html')).$;
    assert.equal(explore('link[rel="stylesheet"]').attr('href'), `${prefix}/app.css`);
    const demos = readPage(path.join(staticDir, 'en', 'docs', 'demo', 'index.html')).$;
    assert.ok(demos('a[href="https://v311.g3wsuite.it/"]').length, 'external URLs must remain unchanged');
    const docs = readPage(path.join(staticDir, 'en', 'docs', 'index.html')).$;
    assert.equal(docs('form.docs-search').attr('data-index-url'), `${prefix}/en/docs/search-index.json`);
    const searchIndex = JSON.parse(fs.readFileSync(path.join(staticDir, 'en', 'docs', 'search-index.json'), 'utf8'));
    assert.ok(searchIndex.every(page => page.url.startsWith(`${prefix}/en/docs/`)), 'search results must include the project base path');
    const llms = fs.readFileSync(path.join(staticDir, 'llms.txt'), 'utf8');
    const llmsFull = fs.readFileSync(path.join(staticDir, 'llms-full.txt'), 'utf8');
    assert.ok(llms.includes(`](${prefix}/en/docs/`), 'llms.txt links must include the project base path');
    assert.ok(llmsFull.includes(`](${prefix}/en/docs/`), 'llms-full.txt links must include the project base path');
    const robots = fs.readFileSync(path.join(staticDir, 'robots.txt'), 'utf8');
    const sitemap = fs.readFileSync(path.join(staticDir, 'sitemap.xml'), 'utf8');
    assert.ok(robots.includes(`Sitemap: https://www.g3wsuite.it${prefix}/sitemap.xml`), 'robots.txt must link to the prefixed sitemap');
    for (const lang of languages) {
      for (const file of htmlFiles(path.join(staticDir, lang))) {
        if (path.relative(path.join(staticDir, lang), file) === path.join('404', 'index.html')) continue;
        const route = path.relative(staticDir, file).split(path.sep).join('/').replace(/index\.html$/, '');
        assert.ok(sitemap.includes(`<loc>https://www.g3wsuite.it${prefix}/${route}</loc>`), `${file}: missing from sitemap`);
      }
      assert.ok(!sitemap.includes(`<loc>https://www.g3wsuite.it${prefix}/${lang}/404/</loc>`), `${lang}: 404 page must not be in sitemap`);
    }
    const italianDocs = readPage(path.join(staticDir, 'it', 'docs', 'index.html')).$;
    assert.equal(italianDocs('html').attr('lang'), 'it');
    assert.equal(italianDocs('form.docs-search').attr('data-index-url'), `${prefix}/it/docs/search-index.json`);
    const italianSearch = JSON.parse(fs.readFileSync(path.join(staticDir, 'it', 'docs', 'search-index.json'), 'utf8'));
    assert.ok(italianSearch.every(page => page.url.startsWith(`${prefix}/it/docs/`)), 'Italian search results must include the language route and project base path');
  } finally {
    fs.rmSync(obsoleteRedirect, { recursive: true, force: true });
    build('');
  }
});

Then('all language-specific not-found pages have the shared header and footer', function () {
  const source = readPage(path.join(staticDir, '404.html')).$;
  assert.equal(source('header.site-header').length, 1);
  assert.equal(source('footer.site-footer').length, 1);
  assert.equal(source('meta[name="robots"]').attr('content'), 'noindex');
  for (const lang of languages) {
    const page = readPage(path.join(staticDir, lang, '404', 'index.html')).$;
    const expectedTitle = lang === 'en' ? 'Page not found' : catalog(lang)['404.md']['Page not found'];
    const expectedSearch = lang === 'en' ? 'Search' : catalog(lang)['404.md'].Search;
    assert.equal(page('html').attr('lang'), lang);
    assert.equal(page('main h1').text(), expectedTitle);
    assert.equal(page('main h2').length, 0);
    assert.equal(page('main > .page-header > .container > h1').text(), expectedTitle);
    assert.doesNotMatch(page('main').text(), /google/i);
    assert.equal(page('header.site-header').length, 1, `${lang}: missing shared header`);
    assert.equal(page('footer.site-footer').length, 1, `${lang}: missing shared footer`);
    assert.equal(page('meta[name="robots"]').attr('content'), 'noindex');
    const form = page('main > section > .container > form.google-search');
    assert.equal(form.attr('action'), 'https://www.google.com/search', `${lang}: missing Google search form`);
    assert.equal(form.attr('method'), 'get');
    assert.equal(form.find('input[type="search"][name="q"][required]').length, 1);
    assert.equal(form.find('input[name="as_sitesearch"]').attr('value'), 'www.g3wsuite.it');
    assert.equal(form.find('button[type="submit"]').text(), expectedSearch);
    assert.equal(form.find('input[type="search"]').attr('placeholder'), expectedSearch);
    assert.equal(form.find('label').attr('for'), form.find('input[type="search"]').attr('id'));
    assert.equal(page('.docs-search, #docs-search-results').length, 0);
  }
  const sitemap = fs.readFileSync(path.join(staticDir, 'sitemap.xml'), 'utf8');
  assert.ok(languages.every(lang => !sitemap.includes(`<loc>https://www.g3wsuite.it/${lang}/404/</loc>`)));
});

Then('missing routes preserve their address and select the appropriate language', async function () {
  const script = fs.readFileSync(path.join(staticDir, 'app.js'), 'utf8');
  for (const [prefix, pathname, preferred, expected] of [
    ['', '/missing-page', ['fr-CA', 'it'], '/fr/missing-page'],
    ['', '/missing-page/', ['ja', 'it-IT'], '/it/missing-page/'],
    ['', '/missing-page', ['ja'], '/en/missing-page'],
    ['/project', '/project/missing-page', ['fr'], '/project/fr/missing-page'],
    ['', '/fr/missing-page', ['it'], null],
    ['', '/en/missing-page', ['fr'], null],
  ]) {
    let redirected;
    let requested;
    let replaced = false;
    const alternates = languages.map(lang => ({
      hreflang: lang, href: `https://example.test${prefix}/${lang}/404/`,
    }));
    const element = { lang: 'en', replaceChildren: () => { replaced = true; } };
    await runInNewContext(script, {
      URL,
      navigator: { languages: preferred },
      location: { pathname, search: '?example=1', hash: '#details', replace: url => { redirected = url; } },
      document: {
        currentScript: { src: 'https://example.test/app.js' },
        body: { classList: { contains: () => true } },
        documentElement: element,
        querySelector: () => null,
        querySelectorAll: selector => selector.startsWith('link[') ? alternates : [],
        addEventListener: () => {},
      },
      fetch: async url => {
        requested = url;
        return { ok: true, text: async () => '<html lang="fr"></html>' };
      },
      DOMParser: class {
        parseFromString() { return { documentElement: { lang: 'fr', childNodes: [] } }; }
      },
    });
    assert.equal(redirected, expected ? `${expected}?example=1#details` : undefined);
    assert.equal(requested, pathname === '/fr/missing-page' ? 'https://example.test/fr/404/' : undefined);
    assert.equal(replaced, pathname === '/fr/missing-page');
    assert.equal(element.lang, replaced ? 'fr' : 'en');
  }
});
