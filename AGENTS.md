# G3W-Suite Website - Agent Instructions

## Scope

Static multilingual marketing/documentation website for G3W-Suite. `server.js` expands reusable components into static HTML; there is no frontend framework.

## Verified Current State

- `npm run build` generates the publishable site and Markdown documentation in `static/`; `npm run dev` serves the same folder and rebuilds when files in `src/` change.
- Shared page templates and components are directly in `src/`; tracked site assets are in `static/`, with the Italian translation catalog at `src/i18n/it.json`. Site and Markdown images share the flat `static/img/` directory. Only strings marked with `{{t '...'}}` are translated. English uses the source strings directly.

## Run

```bash
npm run dev
```

`static/` contains tracked styles, scripts, fonts and images alongside generated pages. `src/index.html` is the shared homepage and `src/_redirect.html` supplies the root redirect.

## Tests

With Node.js 22, run `npm ci` followed by `npm test`. The English Gherkin
scenarios in `test/features/` check site conventions and run on GitHub Actions
for pushes and pull requests.

## Project Structure

```
src/
|- index.html           # Shared homepage template, published as it/ and en/
|- _redirect.html       # Root redirect emitted as static/index.html
|- _header.html          # Shared page components
|- _footer.html
|- _meta.html
|- changelog/            # Shared changelog pages
|- docs/                 # Markdown source for the current English manual
|- i18n/
   |- it.json
static/
|- app.js, style.css, icons.svg
|- fonts/                # Tracked fonts
|- img/                  # Tracked site and manual images; no subfolders
|- it/, en/, docs/        # Generated publishing output; ignored by Git
```

`src/index.html` is the shared homepage template. `src/_redirect.html` generates the root redirect to Italian. `server.js` generates static pages for publishing or local development, including the Markdown manual under `/docs/`.

## Key Conventions

- Internal page URLs use trailing-slash directories, never `.html`; `demo.html` publishes as `demo/index.html`. Use site-root URLs (`/it/demo/`, `/img/...`) instead of `../` or `./`; SSI paths remain relative to source files.
- The build prefixes internal URLs and the root redirect with `SITE_BASE_PATH`; the deploy workflow obtains it from `configure-pages` so project Pages and custom domains both work.
- Reference Markdown manual images from `/img/<filename>`; keep all images directly in `static/img/`.
- Keep `<main id="main-content">` on all pages.
- Keep hreflang alternates and language switch links aligned between IT and EN pages.
- Wrap every text or attribute value that needs Italian translation in `{{t '...'}}`; only marked strings are translated. The source string must exist in `src/i18n/it.json`, whose keys stay unique and alphabetically sorted.
- For URLs, mark only the segment that changes between languages, not the entire URL.
- Use `{{#it}}...{{/it}}` and `{{#en}}...{{/en}}` only for genuine differences in content or markup.
- `src/_redirect.html` is the root redirect; do not replace it with page content.

## HTML Pattern

Most content pages follow:

```html
<!doctype html>
<html lang="it|en">
<head>
  <!--#include file="_meta.html"-->
  <title>...</title>
  <link rel="alternate" ...>
</head>
<body>
  <!--#include file="_header.html"-->
  <main id="main-content">...</main>
  <!--#include file="_footer.html"-->
</body>
</html>
```

## Critical Pitfall

`_meta.html` contains shared charset, viewport and stylesheet tags. Keep page-specific titles, descriptions, Open Graph tags and hreflang links in each page. Use `../_meta.html` from `changelog/`.

Edit shared navigation, footer and metadata in `src/_header.html`, `src/_footer.html` and `src/_meta.html`; `server.js` expands the SSI include directives into static output. From `src/changelog/`, use `../_header.html`, `../_footer.html` and `../_meta.html`.

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
- `src/index.html`
- `static/style.css`
- `static/app.js`
- `src/_header.html`
- `src/_footer.html`
- `src/_redirect.html`
- `src/i18n/it.json`
