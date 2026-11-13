# G3W-Suite Website - Agent Instructions

## Scope

Static multilingual marketing/documentation website for G3W-Suite. `server.js` expands reusable components into static HTML; there is no frontend framework.

## Verified Current State

- `npm run build` generates the publishable site and bilingual Markdown documentation in `static/`; English docs use `/docs/` and Italian docs use `/it/docs/`. `npm run dev` serves the same folder and rebuilds when files in `src/` change.
- Shared page templates and components are directly in `src/`; tracked site assets are in `static/`. Italian translations live in each page or component's `data-i18n` JSON block, placed at the file end or immediately before `</body>`; omit empty language maps. Site and Markdown images share the flat `static/img/` directory. English uses the source strings directly.

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
|- news/                 # News index and articles
|- changelog/            # Markdown release notes compiled by JavaScript
|- docs/                 # English Markdown manual with per-page Italian translations
static/
|- app.js, style.css, icons.svg
|- fonts/                # Tracked fonts
|- img/                  # Tracked site and manual images; no subfolders
|- it/, en/, docs/        # Generated publishing output; ignored by Git
```

`src/index.md` is the shared homepage template. Site pages, news articles, changelog pages, and documentation pages are Markdown compiled by JavaScript; use HTML for custom layout and media. `src/_redirect.html` generates the root redirect to Italian. `server.js` generates the manual under `/docs/` and `/it/docs/`.

## Key Conventions

- Internal page URLs use trailing-slash directories, never `.html`; `demo.md` publishes as `demo/index.html`. Use site-root URLs (`/it/demo/`, `/img/...`) instead of `../` or `./`.
- The build prefixes internal URLs and the root redirect with `SITE_BASE_PATH`; the deploy workflow obtains it from `configure-pages` so project Pages and custom domains both work.
- Reference Markdown manual images from `/img/<filename>`; keep all images directly in `static/img/`.
- The build wraps Markdown page content in `<main id="main-content">`; do not add a `<main>` wrapper to Markdown sources.
- Every generated page gets a route-based `page-*` class on `<body>`, shared by its Italian and English versions.
- The build derives hreflang alternates and language-switcher links from each page path; do not hardcode alternate links.
- Markdown content can be translated without `{{t '...'}}` by adding the exact full line of text to that page's `data-i18n` block; include inline Markdown such as `**bold**` in the key and translate the whole line, never a partial substring. Markdown link labels can also use their exact `data-i18n` key without the helper. Use `{{t '...'}}` for image alt text, attributes, and other inline text. Keep keys alphabetically sorted.
- Declare every page title, optional description, and Open Graph title/description in a trailing `data-i18n-meta` JSON block; the build inserts them into `<head>`, and their Italian strings must also exist in the page's `data-i18n` block. `ogType` is copied as-is.
- Site pages in `src/` and changelog pages in `src/changelog/` are Markdown; use Markdown for content and images. In site page sources, HTML is limited to translation scripts, `<iframe>`, and `<span id="...">` anchors inside headings; the build adds the `<main>` wrapper and generates other layout markup through JavaScript.
- Avoid HTML wrappers around Markdown used only for styling; target generated sections with the page body class and section position.
- Keep separate paragraphs inside Markdown list items using blank lines and indented continuation paragraphs; the renderer preserves this indentation.
- The first `#` heading in a non-homepage Markdown page gets a `.page-header` wrapper automatically. Do not write that wrapper manually unless the page needs a custom header.
- In site Markdown, each `##`–`######` heading starts a section; lower-level headings nest inside the previous section, while a heading at the same or higher level closes the previous section(s). The build adds section and container wrappers; `#` remains the page title. Prefer headings over standalone `---` section delimiters, which remain supported for existing custom layouts. Use the page's body class and section position for variant styling, and keep IDs as inline anchors when links target them.
- In Markdown links, use `/en/<page>/` for internal pages; the build changes that language segment to the current language. For other URLs, mark only the segment that changes between languages, not the entire URL.
- In `src/docs/`, keep English as the source text and add exact Italian line translations to each page's `data-i18n` block. The manual compiler publishes matching routes under `/docs/` and `/it/docs/`, and local documentation links follow the current language.
- Use `{{#it}}...{{/it}}` and `{{#en}}...{{/en}}` only for genuine differences in content or markup.
- `src/_redirect.html` is the root redirect; do not replace it with page content.

## Page Source Pattern

Site page files are Markdown fragments compiled by JavaScript. Use Markdown for content and images; source HTML is limited to translation scripts, `<iframe>`, and `<span id="...">` anchors inside headings. The build wraps content in `<main id="main-content">` and injects the shared header and footer; do not write document-level tags or header/footer includes in page sources.

```markdown
# Page title

Markdown page content

<script type="application/json" data-i18n>
  { "it": { "Markdown page content": "Contenuto della pagina" } }
</script>
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
- Give every image non-empty alt text; the build adds `loading="lazy"` to generated images, and tests report missing or empty alt text.

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
