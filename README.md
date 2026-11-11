# G3W-Suite Website

The multilingual G3W-Suite website is a static site in Italian and English. Shared components are expanded into static HTML at build time.

## Run locally

With Node.js 22 and npm:

```sh
npm i
npm run dev
```

Open [http://localhost:8080/](http://localhost:8080/). Development output is generated in `.dev/`; port 8080 must be available and does not normally require elevated privileges on Linux.

Run `npm run build` to generate the published site in `public/`.

Page URLs use directories, never `.html`: `src/it/demo.html` becomes `/it/demo/` (published as `it/demo/index.html`); language and changelog indexes stay `/it/` and `/it/changelog/`. Use these URLs in links and hreflang tags. External URLs are unchanged. The local server redirects old `.html` URLs to the directory form.

## Where to make changes

- **Text and pages:** edit the HTML files in `src/it/` and `src/en/`. Check both versions: filenames may differ, for example `it/moduli.html` and `en/modules.html`.
- **Shared header and footer:** edit `_header.html` and `_footer.html` in each language folder; pages include them with `<!--#include file="_header.html"-->` and `<!--#include file="_footer.html"-->` (use `../` from `changelog/`).
- `_footer.html` also loads the shared `app.js`; do not add another script tag to individual pages.
- **Shared head tags:** `_meta.html` contains charset, viewport and stylesheet. Include it with `<!--#include file="_meta.html"-->` (use `../` from `changelog/`); keep titles, descriptions, Open Graph tags and hreflang links in each page.
- **Appearance and interactions:** edit `src/assets/style.css` and `src/assets/app.js` (vanilla JavaScript, without libraries).
- **Images:** add them to `src/assets/img/` and link them with `/assets/img/...`.

Reload the browser to see changes. `src/index.html` only redirects to the Italian version. `public/` is generated for publishing and is not source.

## Add or update a page

1. Start from an existing page in the same folder, keeping the language, title, metadata, component markers and `<main id="main-content">`.
2. Update the Italian and English versions and check that `hreflang` tags and language switcher links point to the correct pages in both directions.
3. Use site-root URLs for internal pages and assets, such as `/it/demo/` and `/assets/img/logo.png`, never `../` or `./`. Same-page fragments (`#section`) are allowed. The site must be hosted at the domain root. SSI file paths remain relative to the source file.
4. Preserve ARIA attributes and keyboard behavior for menus when editing shared navigation components.
5. Check the pages in the browser, including on small screens, and run the tests.

## Tests and deployment

```sh
npm test
```

The Gherkin scenarios in `test/features/` check page structure, assets, language links, navigation accessibility and every internal `href`/`src` target (including HTML fragments) without contacting external sites; their implementations are in `test/steps/`. GitHub Actions runs them on every push and pull request.

A separate workflow deploys `public/` to GitHub Pages on pushes to the `vanilla` branch and can also be started manually.

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
