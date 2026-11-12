# G3W-Suite Website - Agent Instructions

## Scope

Static multilingual marketing/documentation website for G3W-Suite. `server.js` expands reusable components into static HTML; there is no frontend framework.

## Verified Current State

- `npm run build` generates the publishable site and Markdown documentation in `static/`; `npm run dev` serves the same folder and rebuilds when files in `src/` change.
- Shared page templates and components are directly in `src/`; tracked site assets are in `static/`. Italian translations live in each page or component's `data-i18n` JSON block, placed at the file end or immediately before `</body>`; omit empty language maps. Site and Markdown images share the flat `static/img/` directory. Only strings marked with `{{t '...'}}` are translated. English uses the source strings directly.

## Run

```bash
npm run dev
```

`static/` contains tracked styles, scripts, fonts and images alongside generated pages. `src/index.md` is the shared homepage and `src/_redirect.html` supplies the root redirect.

## Tests

With Node.js 22, run `npm ci` followed by `npm test`. The English Gherkin
scenarios in `test/features/` check site conventions and run on GitHub Actions
for pushes and pull requests.

## Project Structure

```
src/
|- index.md             # Shared homepage template, published as it/ and en/
|- _redirect.html       # Root redirect emitted as static/index.html
|- _header.html          # Shared page components
|- _footer.html
|- changelog/            # Markdown release notes compiled by JavaScript
|- docs/                 # Markdown source for the current English manual
static/
|- app.js, style.css, icons.svg
|- fonts/                # Tracked fonts
|- img/                  # Tracked site and manual images; no subfolders
|- it/, en/, docs/        # Generated publishing output; ignored by Git
```

`src/index.md` is the shared homepage template. Site pages and changelog pages are Markdown compiled by JavaScript; use HTML for custom layout and media. `src/_redirect.html` generates the root redirect to Italian. `server.js` also generates the Markdown manual under `/docs/`.

## Key Conventions

- Internal page URLs use trailing-slash directories, never `.html`; `demo.md` publishes as `demo/index.html`. Use site-root URLs (`/it/demo/`, `/img/...`) instead of `../` or `./`.
- The build prefixes internal URLs and the root redirect with `SITE_BASE_PATH`; the deploy workflow obtains it from `configure-pages` so project Pages and custom domains both work.
- Reference Markdown manual images from `/img/<filename>`; keep all images directly in `static/img/`.
- Keep `<main id="main-content">` on all pages.
- Every generated page gets a route-based `page-*` class on `<body>`, shared by its Italian and English versions.
- The build derives hreflang alternates and language-switcher links from each page path; do not hardcode alternate links.
- Wrap every text or attribute value that needs Italian translation in `{{t '...'}}`; only marked strings are translated. Define its Italian translation in the same page or component's `data-i18n` JSON block, with keys alphabetically sorted.
- Declare every page title, optional description, and Open Graph title/description in a trailing `data-i18n-meta` JSON block; the build inserts them into `<head>`, and their Italian strings must also exist in the page's `data-i18n` block. `ogType` is copied as-is.
- Site pages in `src/` and changelog pages in `src/changelog/` are Markdown; use raw HTML only for custom layout and media.
- For URLs, mark only the segment that changes between languages, not the entire URL.
- Use `{{#it}}...{{/it}}` and `{{#en}}...{{/en}}` only for genuine differences in content or markup.
- `src/_redirect.html` is the root redirect; do not replace it with page content.

## Page Source Pattern

Site page files are Markdown fragments compiled by JavaScript. Prefer Markdown for text and use raw HTML for custom layout and media. The build injects the shared header and footer; do not write document-level tags or header/footer includes in page sources.

```html
<main id="main-content">...</main>
<!-- data-i18n and data-i18n-meta scripts go here -->
```

## Critical Pitfall

`_header.html` provides the doctype, language, head and opening body, including common charset, viewport and stylesheet tags; the build injects it and passes page metadata and generated hreflang links. `_footer.html` closes the document and is injected after page content and local JSON scripts. Declare titles, descriptions and page-specific Open Graph metadata in `data-i18n-meta`.

Edit shared navigation and common head tags in `src/_header.html`, and the footer in `src/_footer.html`. The build inserts both components automatically for every page template.

## CSS/JS Rules

- `_footer.html` includes the shared script after `</footer>` using `{{siteRoot}}app.js`; do not repeat it in pages.
- Use only `static/style.css` for site styles.
- Use only `static/app.js` for global interactions.
- Keep javascript vanilla (`'use strict'`, no libraries).
- Existing interactions to preserve: mobile menu toggle, dropdown accessibility, demo-card filtering.
- Prefer class-based styling over inline `style="..."`.

## Accessibility

- Preserve aria attributes used by nav controls (`aria-expanded`, `aria-controls`, `aria-label`, `aria-haspopup`).
- Keep keyboard behavior intact for menu/dropdowns (Escape handling is implemented in `app.js`).

## Working Guidance For Agents

- For nav/footer changes, edit the shared component instead of page files.
- When adding or renaming pages directly in `src/` or in `src/changelog/`, verify generated links in both languages and hreflang tags.
- Keep content/language changes local to the correct folder and preserve existing URL conventions.

## Key Files

- `AGENTS.md`
- `package.json`
- `server.js`
- `src/index.md`
- `static/style.css`
- `static/app.js`
- `src/_header.html`
- `src/_footer.html`
- `src/_redirect.html`
