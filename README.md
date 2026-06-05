# g3wsuite.it

Marketing website for [G3W-Suite](https://g3wsuite.it), an open-source enterprise WebGIS platform built on top of QGIS Server.

The site is built with **[Hugo](https://gohugo.io/)** (v0.123+) and supports two languages: Italian (default, served at `/`) and English (served at `/en/`).

---

## Project structure

```
hugo.toml               # Hugo configuration (baseURL, languages, uglyURLs)
content/
  it/                   # Italian content pages (.html files with front matter)
  en/                   # English content pages (.html files with front matter)
layouts/
  _default/
    baseof.html         # Master template (DOCTYPE, head, header, footer, JS)
    single.html         # Default single-page layout
  index.html            # Homepage layout
  contatti/single.html  # Italian contact page (adds Leaflet map init)
  contact/single.html   # English contact page (adds Leaflet map init)
  partials/
    head.html           # <head> section (meta, OG tags, conditional Leaflet CSS)
    header.html         # Navigation bar (logo, menu, dark mode, language switcher)
    footer.html         # Footer (links, contact info, social)
i18n/
  it.yaml               # Italian UI strings and URL slugs
  en.yaml               # English UI strings and URL slugs
static/
  assets/
    style.css           # Global stylesheet
    main.js             # Client-side JS (nav, dark mode, tabs, accordion, slider)
    images/             # All site images (logos, screenshots, partner logos, flags)
```

## Pages

| Italian | English | Description |
|---------|---------|-------------|
| `/` | `/en/` | Homepage |
| `/features.html` | `/en/features.html` | Product features |
| `/risorse.html` | `/en/resources.html` | Resources & demo |
| `/contatti.html` | `/en/contact.html` | Contact (with OSM map) |
| `/partners.html` | `/en/partners.html` | Partners |
| `/merginmaps.html` | `/en/merginmaps.html` | MerginMaps partnership |

## Development

```bash
# Local preview with live reload
hugo server

# Production build (outputs to public/)
hugo --minify
```

## Deployment

Deploy the contents of the `public/` directory to any static hosting provider (Nginx, Apache, GitHub Pages, Netlify, etc.).

