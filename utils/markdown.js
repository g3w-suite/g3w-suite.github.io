'use strict';

const { marked } = require('marked');
const { gfmHeadingId, getHeadingList } = require('marked-gfm-heading-id');
marked.use(gfmHeadingId());

function autoTranslateMarkdown(markdown, lang, translations = {}) {
  // ponytail: single-line blocks only; add token-aware parsing if multiline Markdown needs translation
  const entries = translations[lang] || {};
  const lines = markdown.split(/(\r?\n)/);
  let inCodeFence = false;
  for (let index = 0; index < lines.length; index += 2) {
    const line = lines[index];
    if (/^\s*(```|~~~)/.test(line)) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;
    let wholeBlockTranslated = false;
    if (lang !== 'en' && /^\s*\|/.test(line)) {
      lines[index] = line.split('|').map(cell => {
        const leading = /^\s*/.exec(cell)[0];
        const trailing = /\s*$/.exec(cell)[0];
        const key = cell.slice(leading.length, cell.length - trailing.length);
        return `${leading}${Object.hasOwn(entries, key) ? entries[key] : key}${trailing}`;
      }).join('|');
    }
    if (lang !== 'en' && !wholeBlockTranslated && !/^\s*\|/.test(line)) {
      const match = /^(\s*(?:(?:#{1,6}|>+)\s+|(?:[-*+]\s+|\d+[.)]\s+))?(?:<span id="[^"]+"><\/span>)?)(.*?)(\s*)$/.exec(line);
      if (match && match[2] && !/[{}]/.test(match[2]) && Object.hasOwn(entries, match[2])) {
        lines[index] = `${match[1]}${entries[match[2]]}${match[3]}`;
        wholeBlockTranslated = true;
      }
    }
    if (!wholeBlockTranslated && lang !== 'en') {
      lines[index] = lines[index].replace(/!\[([^\[\]]+)\]\(([^)]*)\)/g, (_, label, destination) => {
        const translatedLabel = Object.hasOwn(entries, label) ? entries[label] : label;
        return `![${translatedLabel}](${destination})`;
      });
      lines[index] = lines[index].replace(/(^|[^!])\[((?:[^\[\]]|!\[[^\[\]]*\]\([^)]*\))*)\]\(([^)]*)\)/g, (_, before, label, destination) => {
        const translatedLabel = Object.hasOwn(entries, label) ? entries[label] : label;
        return `${before}[${translatedLabel}](${destination})`;
      });
    }
    lines[index] = lines[index].replace(/(^|[^!])\[((?:[^\[\]]|!\[[^\[\]]*\]\([^)]*\))*)\]\(([^)]*)\)/g, (_, before, label, destination) => {
      const localizedDestination = destination
        .replace(/^\/?en\/(docs\/.*)$/, (_, docsPath) => `/${lang === 'it' ? 'it/' : ''}${docsPath}`)
        .replace(/^\/?en\//, `/${lang}/`);
      return `${before}[${label}](${localizedDestination})`;
    });
  }
  return lines.join('');
}

function renderYoutubeVideos(html) {
  const consentDialog = /<template id="youtube-consent-dialog">([\s\S]*?)<\/template>/.exec(html)?.[1];
  if (!consentDialog) return html;
  const output = html.replace(/<iframe\b(?=[^>]*\bsrc=["']https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/)[^>]*>\s*<\/iframe>/gi, iframe => {
    const classes = /\bclass=(["'])(.*?)\1/i.exec(iframe)?.[2];
    const frame = iframe
      .replace(/\s+class=(["']).*?\1/i, '')
      .replace(/\s+src=(["'])(.*?)\1/i, ' data-youtube-src="$2"');
    return `<div class="youtube-consent${classes ? ` ${classes}` : ''}">${frame}${consentDialog}</div>`;
  });
  return output.replace(/<template id="youtube-consent-dialog">[\s\S]*?<\/template>/, '');
}

function renderMarkdownButtonLinks(html) {
  const buttonClasses = {
    'github-button': 'btn btn--github',
    'light-button': 'btn btn--light',
    'outline-button': 'btn btn--outline',
    'outline-small-button': 'btn btn--outline btn--sm',
    'primary-button': 'btn btn--primary',
  };
  return html.replace(
    /<a href="([^"]+)" title="(github-button|light-button|outline-button|outline-small-button|primary-button)">([\s\S]*?)<\/a>/g,
    (_, href, type, label) => {
      const github = type === 'github-button';
      const external = /^https?:\/\//i.test(href);
      const icon = github
        ? '<svg class="icon" aria-hidden="true"><use href="/icons.svg#github"></use></svg>'
        : '';
      const target = external ? ' target="_blank" rel="noopener"' : '';
      return `<a class="${buttonClasses[type]}" href="${href}"${target}>${icon}${label}</a>`;
    }
  );
}

function renderChangelogMarkdown(markdown) {
  const tokens = marked.lexer(markdown);
  const headerTokens = [];
  if (tokens[0]?.type === 'heading' && tokens[0].depth === 1) {
    headerTokens.push(tokens.shift());
    if (tokens[0]?.type === 'paragraph') headerTokens.push(tokens.shift());
  }
  const header = marked.parser(headerTokens).replace('<p>', '<p class="section-intro">');
  const pageHeader = headerTokens.length
    ? `<div class="page-header"><div class="container">${header}</div></div>`
    : '';
  return `<main id="main-content">${pageHeader}<section class="section"><div class="container content-page"><div class="changelog">${marked.parser(tokens)}</div></div></section></main>`
    .replace(/(<h[1-6]\b[^>]*?)\s+id="[^"]+"/g, '$1');
}

function renderPageMarkdown(markdown, page) {
  const main = /(<main\b[^>]*>)([\s\S]*?)(<\/main>)/i.exec(markdown);
  let html = main
    ? markdown.slice(0, main.index) +
      main[1] +
      renderMarkdownSections(main[2], page) +
      main[3] +
      markdown.slice(main.index + main[0].length)
    : `<main id="main-content">${renderMarkdownSections(markdown, page)}</main>`;
  if (page !== 'index.md' && !html.includes('class="page-header"')) {
    const mainStart = html.indexOf('<main');
    const mainEnd = mainStart === -1 ? -1 : html.indexOf('</main>', mainStart);
    const headingStart = mainStart === -1 ? -1 : html.indexOf('<h1', mainStart);
    if (mainEnd !== -1 && headingStart !== -1 && headingStart < mainEnd) {
      const heading = /<h1\b[^>]*>[\s\S]*?<\/h1>/.exec(html.slice(headingStart, mainEnd));
      if (heading) {
        html = html.slice(0, headingStart) +
          `<div class="page-header"><div class="container">${heading[0]}</div></div>` +
          html.slice(headingStart + heading[0].length);
      }
    }
  }
  return renderDelimitedSections(html, page);
}

function renderMarkdownSections(markdown, page) {
  const tokens = marked.lexer(markdown);
  if (tokens.some(token => token.type === 'hr')) return marked.parser(tokens);

  const root = { items: [] };
  const stack = [{ depth: 1, items: root.items }];
  for (const token of tokens) {
    if (token.type !== 'heading' || token.depth < 2) {
      stack[stack.length - 1].items.push(token);
      continue;
    }

    while (stack.length > 1 && stack[stack.length - 1].depth >= token.depth) stack.pop();
    const section = { section: true, depth: token.depth, heading: token, items: [] };
    stack[stack.length - 1].items.push(section);
    stack.push(section);
  }

  const firstSection = root.items.findIndex(item => item.section);
  if (page === 'index.md' && firstSection !== -1) {
    const hero = root.items.splice(0, firstSection);
    return renderHomepageHero(hero) + renderItems(root.items, true);
  }

  const profile = firstSection === -1 ? [] : root.items.slice(0, firstSection).filter(item => item.raw.trim());
  if (
    /^about[\\/]/.test(page) &&
    profile.length === 4 &&
    profile[0].type === 'heading' && profile[0].depth === 1 &&
    profile[1].type === 'paragraph' && profile[1].tokens.length === 1 && profile[1].tokens[0].type === 'image' &&
    profile[2].type === 'paragraph' && profile[2].tokens[0]?.type === 'strong' &&
    profile[3].type === 'paragraph' && profile[3].tokens.some(token => token.type === 'link')
  ) {
    root.items.splice(0, firstSection);
    const header = marked.parser([profile[1], profile[0], profile[2], profile[3]]);
    return `<div class="page-header"><div class="container contributor-profile__header">${header}</div></div>${renderItems(root.items, true)}`;
  }

  if (firstSection !== -1 && page !== 'index.md' && !markdown.includes('class="page-header"')) {
    const headingTokens = root.items.slice(0, firstSection).filter(
      item => !item.section && item.type === 'heading' && item.depth === 1
    );
    const preamble = root.items.slice(0, firstSection).filter(
      item => !item.section && !(item.type === 'heading' && item.depth === 1)
    ).filter(item => item.raw.trim());
    if (preamble.length) {
      root.items.splice(0, firstSection, ...headingTokens, { section: true, depth: 1, items: preamble });
    } else {
      root.items.splice(0, firstSection, ...headingTokens);
    }
  }

  function renderItems(items, topLevel = false) {
    let html = '';
    let buffered = [];
    const flush = () => {
      if (buffered.length) html += marked.parser(buffered);
      buffered = [];
    };

    for (const item of items) {
      if (!item.section) {
        buffered.push(item);
        continue;
      }

      flush();
      const heading = item.heading ? marked.parser([item.heading]) : '';
      const content = `${heading}${renderItems(item.items)}`;
      html += topLevel
        ? `<section class="section"><div class="container">${content}</div></section>`
        : `<section class="section">${content}</section>`;
    }
    flush();
    return html;
  }

  return renderItems(root.items, true);
}

function renderHomepageHero(items) {
  const tokens = items.filter(item => item.type !== 'space');
  if (
    tokens.length !== 5 ||
    tokens[0].type !== 'paragraph' ||
    tokens[1].type !== 'heading' ||
    tokens[1].depth !== 1 ||
    tokens.slice(2).some(item => item.type !== 'paragraph')
  ) {
    throw new Error('Homepage Markdown must start with a label, title, subtitle, buttons, and image');
  }

  const label = marked.parser([tokens[0]]).replace('<p>', '<p class="section-label">');
  const title = marked.parser([tokens[1]]);
  const subtitle = marked.parser([tokens[2]]).replace('<p>', '<p class="hero__subtitle">');
  const buttons = marked.parser([tokens[3]]).replace(/^<p>|<\/p>\s*$/g, '');
  const image = marked.parser([tokens[4]]);
  return `<section class="hero hero--split"><div class="container"><div class="hero__content">${label}${title}${subtitle}<div class="btn-group">${buttons}</div></div><div class="hero__media">${image}</div></div></section>`;
}

function renderDelimitedSections(html, page) {
  const mainStart = html.indexOf('<main');
  if (mainStart === -1) return html;
  const mainOpenEnd = html.indexOf('>', mainStart) + 1;
  const mainEnd = html.indexOf('</main>', mainOpenEnd);
  if (mainEnd === -1) return html;

  const content = html.slice(mainOpenEnd, mainEnd);
  const parts = content.split(/<hr\s*\/?>/gi);
  if (parts.length === 1) return html;
  if (parts.length < 3) throw new Error('A Markdown page section needs opening and closing separators');

  let rendered = parts[0];
  let sectionNumber = 0;
  for (let index = 1; index < parts.length - 1; index += 1) {
    if (!parts[index].trim()) throw new Error('Markdown section cannot be empty');
    sectionNumber += 1;
    const containerClasses = sectionContainerClasses[page]?.[sectionNumber];
    rendered += `<section class="section"><div class="container${containerClasses ? ` ${containerClasses}` : ''}">${parts[index]}</div></section>`;
  }
  rendered += parts[parts.length - 1];
  return html.slice(0, mainOpenEnd) + rendered + html.slice(mainEnd);
}

module.exports = { marked, getHeadingList, autoTranslateMarkdown, renderYoutubeVideos, renderMarkdownButtonLinks, renderChangelogMarkdown, renderPageMarkdown };
