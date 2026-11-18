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

The manual is maintained in English Markdown in `src/docs/`, with translations in `i18n/`. Its homepage, `index.md`, publishes at `/<language>/docs/`, including `/en/docs/` for English; Quick Start is a separate `quick-start.md` page. Name every other manual file after its English H1, using lowercase words separated by hyphens (for example `components-of-g3w-suite.md`). When renaming a page, update links and catalog scopes rather than adding redirects. The homepage's sections and links define the collapsible documentation navigation; the current page opens its section. Documentation pages reuse the site's shared header and footer, show release links and include language-specific client-side search. Images share the flat `static/img/` folder and are referenced as `/img/<filename>`.

The breadcrumb bar includes a link to edit each page's source on GitHub, except on the site homepage.

On desktop, the manual navigation is sticky below the header, without an internal scrollbar or height limit. The layout is as tall as its tallest column, so the page scroll reaches all navigation links. On screens up to 760px wide, navigation follows the page content without sticky positioning.

Page URLs use directories, never `.html`: `src/about/index.md` becomes `/it/about/` and `/en/about/`, and member pages live under the same `about/` route. Component descriptions are collected at `/en/docs/components-of-g3w-suite/` and `/it/docs/components-of-g3w-suite/`. The news index is `/it/news/` or `/en/news/`, and release notes are published under `/it/news/v<version>/` and `/en/news/v<version>/`. Their source files use the `YYYY-MM-DD-changelog-vX.Y.md` pattern, which also generates the version buttons at the top of the documentation homepage. The shared homepage is `src/index.md`; `src/_redirect.html` generates language-selection redirects. Use localized URLs in links; the build derives hreflang alternates and language-switcher targets from each page path. External URLs are unchanged. The local server redirects old `.html` URLs to the directory form.

## Where to make changes

- **Text and pages:** edit the shared HTML components in `src/` and the Markdown page sources directly in `src/` and `src/news/`. News articles use date-prefixed filenames and are listed newest first in `src/news/index.md`; release-note files use `YYYY-MM-DD-changelog-vX.Y.md`. The documentation homepage generates its changelog buttons from those filenames, so do not maintain a separate version list. Use Markdown for headings, paragraphs and lists; keep raw HTML for custom layout and media. English text is the default. Use the exact full Markdown line as the translation key, including inline Markdown such as `**bold**`. Markdown link labels can use their exact translation key without `{{t '...'}}`; use the helper for image alt text, attributes and other inline text. In Markdown links, use `/en/<page>/` for internal pages; the build changes that language segment to the current language. Use language blocks only where the languages need different markup or content.
- **Head metadata:** start every Markdown page, including news and manual pages, with YAML front matter between `---` lines. Set both `title` and `description`; `ogTitle`, `ogDescription`, and `ogType` are optional. Manual titles match the English H1. The build inserts them into `<head>`; translate the text values in the page's catalog scope, not in the front matter.
- **Shared document shell:** page templates and documentation use `src/_header.html` before page content and `src/_footer.html` after it. Do not add header/footer include directives or document-level tags to page files. The header opens the doctype, `<html>`, `<head>` and `<body>` and contains common head tags; each body gets a route-based `page-*` class. The footer closes the document.
- `_footer.html` also loads the shared `app.js`; do not add another script tag to individual pages.
- **Appearance and interactions:** edit `static/app.css` and `static/app.js` (vanilla JavaScript, without libraries).
- **Images:** add AVIF files to the flat `static/img/` directory and link them with `/img/...`. GitHub profile portraits remain external and dynamic; `static/icons.svg` is the shared icon sprite.
- **Code blocks:** put the language after the opening fence (for example, `js`, `python` or `bash`). Syntax highlighting assets are served locally and loaded only on pages with code blocks. Inline code does not load them.
- **Diagrams:** write top-level fenced Mermaid blocks in Markdown, with alternative text after `mermaid`. Diagrams render in the browser; the runtime is included only when the site has diagrams and loaded only on pages that contain them. Use language blocks inside the diagram when labels differ.

<pre><code>```mermaid {{t 'Diagram description'}}
flowchart LR
  source["Source"] --> page["Published page"]
```</code></pre>

Add the alternative text to the page's Italian translations.

The build reuses `src/_redirect.html` for the root and every page without a language prefix. For example, `/about/` and `/docs/demo/` select the matching page in the first supported browser language, falling back to `/en/about/` and `/en/docs/demo/`. These static redirects preserve query strings, fragments and `SITE_BASE_PATH`, and offer manual links when JavaScript is unavailable. They work on GitHub Pages as well as the development server, which adds a trailing slash when needed. Unknown pages still return 404. The language button opens a dialog with links to the current page in each published language. Site assets are tracked; generated pages and the Mermaid runtime bundle are ignored by Git.

All translation catalogs in `i18n/` group entries by the page or component path relative to `src/` (for example `docs/index.md` or `_footer.html`), then by the exact English source string. The `@breadcrumb` and `@documentation` groups hold labels shared across pages. English uses the source directly. Every manual uses `/<language>/docs/` and has its own search index. Review technical wording before relying on automatically translated instructions.

On pushes to `vanilla` or manual runs on that branch, the [CI workflow](./.github/workflows/ci.yml) uses Argos Translate locally on the runner to fill missing keys without overwriting existing translations. After the tests pass, it commits any catalog changes directly to `vanilla`; it opens no pull request. Translation generation and commits are disabled on pull requests and other branches. The workflow token must be allowed to push to `vanilla`. To list missing string counts without translating or editing catalogs, run `node utils/update-translations.js --dry-run`.

## Add or update a page

1. Start from an existing Markdown page directly in `src/` or `src/news/`, keeping its metadata and local translations. Release-note filenames use `YYYY-MM-DD-changelog-vX.Y.md`; other news articles start with `YYYY-MM-DD-`. Keep raw HTML for page-specific layout and media.
2. Add exact full-line Markdown translations or inline `{{t '...'}}` translations to the catalogs in `i18n/`. Use language blocks only for genuine differences. Check that generated `hreflang` tags and language switcher links point to the correct pages in both directions.
3. Use site-root URLs for internal pages and assets, such as `/it/about/` and `/img/logo.avif`, never `../` or `./`. Link to heading IDs generated from the English Markdown title (for example `/en/about/#governing-board`), not manual `<span id="...">` anchors. The build also generates these English heading aliases on translated pages. The build prefixes URLs and the root redirect with `SITE_BASE_PATH` when publishing under a subdirectory; GitHub Pages supplies this automatically.
4. Preserve ARIA attributes and keyboard behavior for menus when editing shared navigation components.
5. Check the pages in the browser, including on small screens, and run the tests.

## Tests and deployment

```sh
npm test
```

The Gherkin scenarios in `test/features/` check page structure, assets, language links, navigation accessibility and every internal `href`/`src` target (including HTML fragments) without contacting external sites; their implementations are in `test/steps/`. GitHub Actions runs them on every push and pull request.

Source Markdown, HTML, CSS, JavaScript and SVG must be saved as UTF-8. Tests reject invalid UTF-8, replacement characters and common mojibake sequences, including those encoded as HTML entities.

The [CD workflow](./.github/workflows/cd.yml) starts after a successful CI run on `vanilla` (excluding pull requests). CI uploads the validated commit SHA, including any generated translation commit, so CD builds and deploys that exact revision rather than a potentially newer branch tip. CD can also be started manually to deploy the selected revision without generating translations.

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
