# G3W-Suite Website - Agent Instructions

## Scope

Static multilingual marketing/documentation website for G3W-Suite. No build step and no frontend framework.

## Verified Current State (2026-05-18)

- `package.json` exists and defines `npm run dev` -> `node server.js`.
- Site is served from `public/` by `server.js` (port 80).
- Language folders are inside `public/` (`public/it/`, `public/en/`), not at repository root.

## Run

```bash
npm run dev
```

## Project Structure

```
public/
|- index.html           # Redirect to it/index.html
|- assets/
|  |- style.css         # Single global stylesheet
|  |- app.js            # Single global javascript
|  |- icons.svg         # SVG sprite
|  |- fonts/            # Titillium Web woff2
|  `- img/              # Shared images
|- it/                  # Italian pages (default language)
`- en/                  # English pages
```

## Key Conventions

- Keep page-level assets relative to language folders (`../assets/style.css`, `../assets/app.js`).
- Keep `<main id="main-content">` on all pages.
- Keep hreflang alternates and language switch links aligned between IT and EN pages.
- IT and EN are intentionally not always symmetric.
- `public/index.html` is a redirect page; do not turn it into a content page.

## HTML Pattern

Most content pages follow:

```html
<!doctype html>
<html lang="it|en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="alternate" ...>
  <link rel="stylesheet" href="../assets/style.css">
</head>
<body>
  <header>...</header>
  <main id="main-content">...</main>
  <footer>...</footer>
  <script src="../assets/app.js"></script>
</body>
</html>
```

## Critical Pitfall

There is no template/include system for header/footer/nav across language pages. Shared navigation/footer edits require updating many HTML files manually or via scripted bulk edits.

## CSS/JS Rules

- Use only `public/assets/style.css` for site styles.
- Use only `public/assets/app.js` for global interactions.
- Keep javascript vanilla (`'use strict'`, no libraries).
- Existing interactions to preserve: mobile menu toggle, dropdown accessibility, demo-card filtering.
- Prefer class-based styling over inline `style="..."`.

## Accessibility

- Preserve aria attributes used by nav controls (`aria-expanded`, `aria-controls`, `aria-label`, `aria-haspopup`).
- Keep keyboard behavior intact for menu/dropdowns (Escape handling is implemented in `app.js`).

## Working Guidance For Agents

- For nav/footer or repeated snippet changes, use scripted edits to avoid drift between pages.
- When adding or renaming pages, verify language pair links (`public/it/*` <-> `public/en/*`) and hreflang tags.
- Keep content/language changes local to the correct folder and preserve existing URL conventions.

## Key Files

- `AGENTS.md`
- `package.json`
- `server.js`
- `public/index.html`
- `public/assets/style.css`
- `public/assets/app.js`
- `public/it/index.html`
- `public/en/index.html`
