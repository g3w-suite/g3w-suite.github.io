'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { marked } = require('./markdown');

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

function prepareMermaid(markdown, diagrams, context) {
  const tokens = marked.lexer(markdown.replace(/\r\n/g, '\n'));
  const topLevel = new Set(tokens);
  marked.walkTokens(tokens, token => {
    if (token.type === 'code' && /^mermaid(?:\s|$)/.test(token.lang || '') && !topLevel.has(token)) {
      throw new Error(`${context}: Mermaid diagrams must be top-level fenced blocks`);
    }
  });
  return tokens.map(token => {
    if (token.type !== 'code' || !/^mermaid(?:\s|$)/.test(token.lang || '')) return token.raw;
    const alt = token.lang.slice('mermaid'.length).trim();
    if (!alt) throw new Error(`${context}: Mermaid diagrams require alternative text after the mermaid language tag`);
    diagrams.add(context);
    return `<figure class="mermaid-diagram" role="img" aria-busy="true" aria-label="${escapeHtml(alt)}"><pre class="mermaid" aria-hidden="true">${escapeHtml(token.text)}</pre></figure>\n\n`;
  }).join('');
}

function copyMermaidScript(outputDir) {
  const source = path.join(path.dirname(require.resolve('mermaid')), 'mermaid.min.js');
  fs.copyFileSync(source, path.join(outputDir, 'mermaid.min.js'));
}

module.exports = { prepareMermaid, copyMermaidScript };
