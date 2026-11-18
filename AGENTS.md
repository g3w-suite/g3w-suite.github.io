# G3W-Suite Website - Agent Instructions

## Scope

Static multilingual marketing/documentation website for G3W-Suite. `build/server.js` expands reusable components into static HTML; there is no frontend framework.

## Verified Current State

- `npm run build` generates the publishable site and localized Markdown documentation in `static/`; English docs use `/docs/` and other manuals use `/<language>/docs/`. `npm run dev` serves the same folder and rebuilds when files in `src/` or `i18n/` change.
- Shared page templates and components are directly in `src/`; tracked site assets are in `static/`. All catalogs in `i18n/` group translations by page or component path relative to `src/`, with `/` separators. Shared generated labels go in `@breadcrumb` and `@documentation`. Site and Markdown images share the flat `static/img/` directory. English uses the source strings directly.

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
build/
|- config.js             # Shared paths and build settings
|- server.js             # Build CLI and development server
|- build.js              # Site page generation
|- documentation.js      # Markdown manual generation
|- markdown.js
|- translations.js
|- utils/
   |- files.js
   |- routes.js
i18n/                   # Translation catalogs
src/
|- index.md             # Shared homepage template, published as it/ and en/
|- _redirect.html       # Root redirect emitted as static/index.html
|- _header.html          # Shared page components
|- _footer.html
|- news/                 # News index, dated articles and release notes
|- docs/                 # English Markdown manual with per-page Italian translations
static/
|- app.js, app.css, icons.svg
|- fonts/                # Tracked fonts
|- img/                  # Tracked site and manual images; no subfolders
|- it/, en/, docs/        # Generated publishing output; ignored by Git
```

`src/index.md` is the shared homepage template. Site pages, news articles and documentation pages are Markdown compiled by JavaScript; use HTML for custom layout and media. `src/_redirect.html` redirects to the best supported browser language, with English as the fallback. `build/` contains the site generator, server and build utilities.

## Key Conventions

- Internal page URLs use trailing-slash directories, never `.html`; `about/index.md` publishes as `/it/about/` and `/en/about/`, with member and component pages under `about/`. Use site-root URLs (`/it/about/`, `/img/...`) instead of `../` or `./`.
- The build prefixes internal URLs and the root redirect with `SITE_BASE_PATH`; the deploy workflow obtains it from `configure-pages` so project Pages and custom domains both work.
- Store local images as AVIF files directly in `static/img/` and reference them from `/img/<filename>`; GitHub profile portraits remain external and `static/icons.svg` is the shared icon sprite.
- Write Mermaid diagrams as top-level fenced Markdown blocks with translated alternative text after `mermaid`; diagrams render in the browser, and the Mermaid runtime loads only on pages that contain them.
- The build wraps Markdown page content in `<main id="main-content">`; do not add a `<main>` wrapper to Markdown sources.
- Every generated page gets a route-based `page-*` class on `<body>`, shared by its Italian and English versions.
- The build derives hreflang alternates and language-switcher links from each page path; do not hardcode alternate links.
- Markdown content can be translated without `{{t '...'}}` by adding the exact full line to the catalog; include inline Markdown such as `**bold**` in the key and translate the whole line, never a partial substring. Markdown link labels can also use their exact catalog key without the helper. Use `{{t '...'}}` for image alt text, attributes, and other inline text. Keep keys alphabetically sorted.
- Declare site page `title` and optional `description`, `ogTitle`, `ogDescription`, and `ogType` in YAML front matter at the top of the Markdown file. The build inserts them into `<head>`. Put their translations in the catalogs. `ogType` is copied as-is.
- Site pages in `src/` and news articles in `src/news/` are Markdown; use Markdown for content and images. News article filenames begin with their publication date (`YYYY-MM-DD-`), and `src/news/index.md` lists them newest first. Release notes use `YYYY-MM-DD-changelog-vX.Y.md`; the documentation homepage generates its version buttons from these filenames. In site page sources, HTML is limited to `<iframe>` and `<span id="...">` anchors inside headings; the build adds the `<main>` wrapper and generates other layout markup through JavaScript.
- Avoid HTML wrappers around Markdown used only for styling; target generated sections with the page body class and section position.
- Keep separate paragraphs inside Markdown list items using blank lines and indented continuation paragraphs; the renderer preserves this indentation.
- The first `#` heading in a non-homepage Markdown page gets a `.page-header` wrapper automatically. Do not write that wrapper manually unless the page needs a custom header.
- In site Markdown, each `##`–`######` heading starts a section; lower-level headings nest inside the previous section, while a heading at the same or higher level closes the previous section(s). The build adds section and container wrappers; `#` remains the page title. Prefer headings over standalone `---` section delimiters, which remain supported for existing custom layouts. Use the page's body class and section position for variant styling, and keep IDs as inline anchors when links target them.
- In Markdown links, use `/en/<page>/` for internal pages; the build changes that language segment to the current language. For other URLs, mark only the segment that changes between languages, not the entire URL.
- In `src/docs/`, keep English as the source text and add exact Italian line translations under the corresponding `docs/...` key in `i18n/it.json`. Local documentation links follow the current language.
- Use `{{#it}}...{{/it}}` and `{{#en}}...{{/en}}` only for genuine differences in content or markup.
- `src/_redirect.html` is the root redirect; do not replace it with page content.

## Page Source Pattern

Site page files are Markdown fragments compiled by JavaScript. Use Markdown for content and images; source HTML is limited to `<iframe>` and `<span id="...">` anchors inside headings. The build wraps content in `<main id="main-content">` and injects the shared header and footer; do not write document-level tags or header/footer includes in page sources.

```markdown
---
title: Page title
---

# Page title

Markdown page content
```

For `example.md`, the corresponding `i18n/it.json` entry is:

```json
{
  "example.md": {
    "Markdown page content": "Contenuto della pagina",
    "Page title": "Titolo della pagina"
  }
}
```

## Critical Pitfall

`_header.html` provides the doctype, language, head and opening body, including common charset, viewport and stylesheet tags; the build injects it and passes page metadata and generated hreflang links. `_footer.html` closes the document and is injected after page content.

Edit shared navigation and common head tags in `src/_header.html`, and the footer in `src/_footer.html`. The build inserts both components automatically for every page template.

## CSS/JS Rules

- `_footer.html` includes the shared script after `</footer>` using `{{siteRoot}}app.js`; do not repeat it in pages.
- Use only `static/app.css` for site styles.
- Use only `static/app.js` for global interactions.
- Keep javascript vanilla (`'use strict'`, no libraries).
- Existing interactions to preserve: mobile menu toggle, dropdown accessibility, demo-card filtering.
- Prefer class-based styling over inline `style="..."`.

## Accessibility

- Preserve aria attributes used by nav controls (`aria-expanded`, `aria-controls`, `aria-label`, `aria-haspopup`).
- Keep keyboard behavior intact for menu/dropdowns (Escape handling is implemented in `app.js`).
- Give every image non-empty alt text; the build adds `loading="lazy"` to generated images, and tests report missing or empty alt text.

## Working Guidance For Agents

- For nav/footer changes, edit the shared component instead of page files.
- When adding or renaming pages directly in `src/` or in `src/news/`, verify generated links in both languages and hreflang tags.
- Keep content/language changes local to the correct folder and preserve existing URL conventions.

### G3W-SUITE manual sources and screenshots

- Verify product behavior in the matching release tag or branch of the upstream [G3W-CLIENT](https://github.com/g3w-suite/g3w-client), [G3W-ADMIN](https://github.com/g3w-suite/g3w-admin), and [G3W-SUITE-DOCKER](https://github.com/g3w-suite/g3w-suite-docker) repositories.
- Use the AI-generated DeepWiki pages for [G3W-CLIENT](https://deepwiki.com/g3w-suite/g3w-client), [G3W-ADMIN](https://deepwiki.com/g3w-suite/g3w-admin), and [G3W-SUITE-DOCKER](https://deepwiki.com/g3w-suite/g3w-suite-docker), or the DeepWiki MCP server when available, to find relevant code. Verify claims against the release source before documenting them.
- Capture real screenshots from the version covered by the page: [3.11](https://v311.g3wsuite.it), [3.10](https://v310.g3wsuite.it), or the corresponding versioned demo. Use [the development instance](https://dev.g3wsuite.it) only for the latest development UI. Check that the selected screen and UI labels match the instructions, crop to the relevant controls, and exclude credentials and private data. If a screen is unavailable, do not mock it or substitute another version's UI.
- When replacing a screenshot, preserve the workflow step and the context the reader needs: show where the controls are, fill in representative demo values, and capture the resulting state when the text describes what happens after an action. Keep the existing image if a new capture omits that information.

## Key Files

- `AGENTS.md`
- `package.json`
- `build/server.js`
- `src/index.md`
- `static/app.css`
- `static/app.js`
- `src/_header.html`
- `src/_footer.html`
- `src/_redirect.html`
