---
title: A new website for G3W-SUITE
description: Explore the new G3W-SUITE website and learn how its pages, translations and documentation are prepared.
ogTitle: A new website for G3W-SUITE
ogDescription: Explore the new G3W-SUITE website and learn how its pages, translations and documentation are prepared.
---

# A new website for G3W-SUITE

Published: **16 November 2026**

The new G3W-SUITE website brings the project, documentation and community together in one place. Here is what you can find and how we keep it up to date.

{{#en}}By{{/en}}{{#it}}A cura di{{/it}} [Matteo Tosi](/en/about/matteo-tosi/)

## Find your way around

The [project page](/en/about/) introduces the people, features and components behind G3W-SUITE. The [documentation](/en/docs/) brings together the Quick Start, demos, installation guides and reference material.

The navigation at the top also leads to [sponsors](/en/sponsors/), [news](/en/news/) and the [community](/en/community/). On a phone, the same links are available from the menu button.

![{{t 'G3W-SUITE homepage'}}](/img/site-new-website-home-{{#en}}en{{/en}}{{#it}}it{{/it}}.avif)

## A website prepared in advance

When you open a page, your browser receives a page that has already been prepared. The site does not need to assemble its text and layout from a database for each visitor.

Think of it like a booklet: we prepare the pages before publication, and visitors receive the finished version. Interactive features, such as the mobile menu and documentation search, still work in the browser.

## Shared pieces, consistent pages

The menu, footer and visual styles are shared across the site. Rather than maintaining a separate copy for every page, we update these common pieces once and use them when preparing the pages.

This makes it easier to keep navigation and presentation consistent as the site grows, while the content of each page remains separate.

```mermaid {{t 'Diagram: text and translations combine with shared elements to create pages for visitors'}}
flowchart TB
{{#en}}  content["English text<br/>and Italian translation"] --> build["Site generator"]
  shared["Shared menu,<br/>footer and styles"] --> build
  build --> pages["Ready-to-read pages"]
  pages --> visitors["Visitors"]{{/en}}{{#it}}  content["Testo inglese<br/>e traduzione italiana"] --> build["Generazione del sito"]
  shared["Menu, piè di pagina<br/>e stili condivisi"] --> build
  build --> pages["Pagine pronte"]
  pages --> visitors["Visitatori"]{{/it}}
```

## Two languages, one structure

The site is available in English and Italian. Use the language switcher in the header to open the corresponding page in the other language.

We maintain the original page text in English and add its Italian translation alongside it. When the site is prepared for publication, both versions are generated with the same navigation and layout.

## Search the documentation

The documentation has a navigation menu and a search box. Start typing a topic to see matching pages and short excerpts; the menu also shows where the current page belongs.

To make this possible, we prepare a list of documentation pages when the site is built. Your browser loads that list when you search and finds matches locally.

![{{t 'Documentation navigation and search'}}](/img/site-new-website-docs-{{#en}}en{{/en}}{{#it}}it{{/it}}.avif)

## From an edit to a published page

The site's content is stored as text files in a public GitHub repository. The files use Markdown, a simple way to write headings, links and lists without designing each page by hand.

On every page except the homepage, the **Edit** link beside the breadcrumb takes you to its source file on GitHub. From there, you can propose a correction or an update; a GitHub account is needed to submit changes.

When updates are published, an automated process prepares the pages, adds the shared elements and makes the finished site available through GitHub Pages. Automated checks also help catch problems such as broken internal links and missing translations.

```mermaid {{t 'Diagram: an update is built and published through GitHub, with separate automated checks'}}
flowchart TB
{{#en}}  update["Proposed update"] --> repository["GitHub repository"]
  repository --> build["Site generation"]
  repository --> checks["Automatic checks"]
  build --> pages["GitHub Pages"]
  pages --> readers["Readers"]{{/en}}{{#it}}  update["Proposta di modifica"] --> repository["Repository GitHub"]
  repository --> build["Generazione del sito"]
  repository --> checks["Controlli automatici"]
  build --> pages["GitHub Pages"]
  pages --> readers["Lettori"]{{/it}}
```

## Built to be improved together

The website's source is open, just like G3W-SUITE. You can [explore the repository](https://github.com/g3w-suite/g3w-suite.github.io), suggest an improvement or ask a question in the [community forum](https://github.com/g3w-suite/community/discussions).

We hope the new site makes it easier to discover the project and find the information you need. If something is unclear or missing, your feedback can help us improve it.

[Explore the documentation](/en/docs/ "primary-button") [Visit the community](/en/community/ "outline-button")
