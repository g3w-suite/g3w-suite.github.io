# G3W-Suite Website - Agent Instructions

## Scope

Static multilingual marketing/documentation website for G3W-Suite. `server.js` expands reusable components into static HTML; there is no frontend framework.

## Verified Current State (2026-05-18)

- `npm run build` generates the publishable site in ignored `public/`; `npm run dev` generates and serves ignored `.dev/`.
- Source pages are in `src/it/` and `src/en/`; shared components are `_meta.html`, `_header.html` and `_footer.html` in each language folder.

## Run

```bash
npm run dev
```

`src/assets/` contains source styles, scripts, fonts and images; `src/index.html` is the root redirect. `public/` is generated output.

## Tests

With Node.js 22, run `npm ci` followed by `npm test`. The English Gherkin
scenarios in `test/features/` check site conventions and run on GitHub Actions
for pushes and pull requests.

## Project Structure

```
src/
|- index.html           # Redirect to it/index.html
|- assets/              # Source styles, scripts, fonts and images
|- it/                  # Italian pages and _header.html/_footer.html
`- en/                  # English pages and _header.html/_footer.html
public/                 # Generated publishing output; ignored by Git
```

`src/index.html` is the root redirect. `server.js` generates static pages for publishing or local development.

## Key Conventions

- Internal page URLs use trailing-slash directories, never `.html`; `demo.html` publishes as `demo/index.html`. Use site-root URLs (`/it/demo/`, `/assets/...`) instead of `../` or `./`; SSI paths remain relative to source files.
- The build prefixes internal URLs and the root redirect with `SITE_BASE_PATH`; the deploy workflow obtains it from `configure-pages` so project Pages and custom domains both work.
- Keep `<main id="main-content">` on all pages.
- Keep hreflang alternates and language switch links aligned between IT and EN pages.
- IT and EN are intentionally not always symmetric.
- `src/index.html` is a redirect page; do not turn it into a content page.

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

Edit shared navigation and footer in `src/it/_header.html`, `src/it/_footer.html`, `src/en/_header.html` and `src/en/_footer.html`; `server.js` expands the SSI include directives into static output. From `changelog/`, use `../_header.html` and `../_footer.html`.

## CSS/JS Rules

- `_footer.html` includes the shared script after `</footer>` using `{{siteRoot}}assets/app.js`; do not repeat it in pages.
- Use only `src/assets/style.css` for site styles.
- Use only `src/assets/app.js` for global interactions.
- Keep javascript vanilla (`'use strict'`, no libraries).
- Existing interactions to preserve: mobile menu toggle, dropdown accessibility, demo-card filtering.
- Prefer class-based styling over inline `style="..."`.

## Accessibility

- Preserve aria attributes used by nav controls (`aria-expanded`, `aria-controls`, `aria-label`, `aria-haspopup`).
- Keep keyboard behavior intact for menu/dropdowns (Escape handling is implemented in `app.js`).

## Working Guidance For Agents

- For nav/footer changes, edit the shared component instead of page files.
- When adding or renaming pages, verify language pair links (`src/it/*` <-> `src/en/*`) and hreflang tags.
- Keep content/language changes local to the correct folder and preserve existing URL conventions.

## Key Files

- `AGENTS.md`
- `package.json`
- `server.js`
- `src/index.html`
- `src/assets/style.css`
- `src/assets/app.js`
- `src/it/_header.html`
- `src/it/_footer.html`
- `src/it/index.html`
- `src/en/index.html`
