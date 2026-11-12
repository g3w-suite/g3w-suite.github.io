# G3W-Suite Website

The multilingual G3W-Suite website is a static site in Italian and English. Shared components are expanded into static HTML at build time.

## Run locally

With Node.js 22 and npm:

```sh
npm i
npm run dev
```

Open [http://localhost:8080/](http://localhost:8080/). The server generates and serves files directly from `static/`, watching `src/` for changes, so just reload the browser. Port 8080 must be available and does not normally require elevated privileges on Linux.

Run `npm run build` to generate the published site and documentation in `static/`.

## Documentation

The English manual is maintained as Markdown in `src/docs/` and compiled with the site build to `/docs/`. Documentation pages reuse the site's shared header and footer and include client-side search across the manual. Images share the flat `static/img/` folder and are referenced as `/img/<filename>`.

Page URLs use directories, never `.html`: `src/demo.html` becomes `/it/demo/` and `/en/demo/` (published as `it/demo/index.html` and `en/demo/index.html`); language and changelog indexes stay `/it/` and `/it/changelog/`. The shared homepage is `src/index.html`; `src/_redirect.html` generates the root redirect. Use these URLs in links; the build derives hreflang alternates and language-switcher targets from each page path. External URLs are unchanged. The local server redirects old `.html` URLs to the directory form.

## Where to make changes

- **Text and pages:** edit the shared HTML fragments directly in `src/`. English text is the default; wrap every text or attribute value that needs Italian translation in `{{t '...'}}` and define its Italian value in that file's `<script type="application/json" data-i18n>` block. Omit empty language maps such as `"en": {}`. Keep the data blocks at the end of the page. Unmarked strings are left unchanged. In URLs, mark only the portion that changes between languages, not the entire URL. Use `{{#it}}...{{/it}}` and `{{#en}}...{{/en}}` only where the languages need different markup or content.
- **Head metadata:** define the page `title`, optional `description`, and Open Graph title/description/type in a `<script type="application/json" data-i18n-meta>` block; the build inserts them into `<head>`. Italian text values belong in the same page's `data-i18n` block.
- **Shared document shell:** page templates are fragments; the build injects `src/_header.html` before page content and `src/_footer.html` after it. Do not add header/footer include directives or document-level tags to page files. The header opens the doctype, `<html>`, `<head>` and `<body>` and contains common head tags; the footer closes the document.
- `_footer.html` also loads the shared `app.js`; do not add another script tag to individual pages.
- **Appearance and interactions:** edit `static/style.css` and `static/app.js` (vanilla JavaScript, without libraries).
- **Images:** add them to the flat `static/img/` directory and link them with `/img/...`.

`src/_redirect.html` only redirects to the Italian version. Assets in `static/` are tracked; generated pages are ignored by Git.

## Add or update a page

1. Start from an existing page directly in `src/` or in `src/changelog/`, keeping its metadata, component markers and `<main id="main-content">`.
2. Add exact source-string translations to the page's `data-i18n` JSON block and mark translated strings with `{{t '...'}}`; shared components keep their translations in their own files. Use language blocks only for genuine differences. Check that generated `hreflang` tags and language switcher links point to the correct pages in both directions.
3. Use site-root URLs for internal pages and assets, such as `/it/demo/` and `/img/logo.png`, never `../` or `./`. Same-page fragments (`#section`) are allowed. The build prefixes these URLs and the root redirect with `SITE_BASE_PATH` when publishing under a subdirectory; GitHub Pages supplies this automatically.
4. Preserve ARIA attributes and keyboard behavior for menus when editing shared navigation components.
5. Check the pages in the browser, including on small screens, and run the tests.

## Tests and deployment

```sh
npm test
```

The Gherkin scenarios in `test/features/` check page structure, assets, language links, navigation accessibility and every internal `href`/`src` target (including HTML fragments) without contacting external sites; their implementations are in `test/steps/`. GitHub Actions runs them on every push and pull request.

Source HTML, CSS, JavaScript and SVG must be saved as UTF-8. Tests reject invalid UTF-8, replacement characters and common mojibake sequences, including those encoded as HTML entities.

A separate workflow deploys `static/` to GitHub Pages on pushes to the `vanilla` branch and can also be started manually.

## Connect a custom domain

To publish the site on your own domain with GitHub Pages:

1. [Verify the domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) in your GitHub organization to reduce the risk of domain takeover.
2. In the repository settings, under **Settings → Pages → Custom domain**, enter and save the desired domain.
3. Configure DNS records with your DNS provider:
   - For a subdomain such as `www.example.com`, create a `CNAME` record for `www` pointing to `g3w-suite.github.io`, without the repository name. If the site is published from another account or organization, use its `<account>.github.io` address instead.
   - For an apex domain such as `example.com`, create four `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`.
4. Wait for DNS propagation (up to 24 hours), check the domain in the Pages settings and enable **Enforce HTTPS** when available.

Do not use wildcard DNS records. This repository deploys through GitHub Actions, so a `CNAME` file is not required. For more details, see the [GitHub documentation on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## License

This project is distributed under the [Mozilla Public License 2.0](LICENSE).
