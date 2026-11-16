'use strict';

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { marked } = require('./markdown');

const rendererVersion = crypto.createHash('sha256')
  .update(fs.readFileSync(path.resolve(__dirname, '../package-lock.json')))
  .update('mermaid-avif-v1')
  .digest('hex');
const generatedName = /^mermaid-[a-f0-9]{64}\.avif$/;

function prepareMermaid(markdown, diagrams, context) {
  const tokens = marked.lexer(markdown.replace(/\r\n/g, '\n'));
  const topLevel = new Set(tokens);
  marked.walkTokens(tokens, token => {
    if (token.type === 'code' && /^mermaid(?:\s|$)/.test(token.lang || '') && !topLevel.has(token)) {
      throw new Error('Mermaid diagrams must be top-level fenced blocks');
    }
  });
  return tokens.map(token => {
    if (token.type !== 'code' || !/^mermaid(?:\s|$)/.test(token.lang || '')) return token.raw;
    const alt = token.lang.slice('mermaid'.length).trim();
    if (!alt) throw new Error('Mermaid diagrams require alternative text after the mermaid language tag');
    const hash = crypto.createHash('sha256').update(rendererVersion).update(token.text).digest('hex');
    const name = `mermaid-${hash}.avif`;
    diagrams.set(name, { definition: token.text, context });
    const escaped = alt.replace(/&(?!#\d+;|#x[\da-f]+;|[a-z][\da-z]+;)|[<>"']/gi, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[char]);
    return `<p><img src="/img/${name}" alt="${escaped}"></p>\n\n`;
  }).join('');
}

function renderMermaid(diagrams, outputDir) {
  const imageDir = path.join(outputDir, 'img');
  fs.mkdirSync(imageDir, { recursive: true });
  const pending = [...diagrams].filter(([name]) => !fs.existsSync(path.join(imageDir, name)));
  if (pending.length) {
    const result = spawnSync(process.execPath, [__filename], {
      input: JSON.stringify({ imageDir, diagrams: pending }),
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 300000,
    });
    if (result.error) throw result.error;
    if (result.status !== 0) throw new Error(`Mermaid rendering failed: ${result.stderr.trim() || `exit ${result.status}`}`);
  }
  for (const name of fs.readdirSync(imageDir)) {
    if (generatedName.test(name) && !diagrams.has(name)) fs.unlinkSync(path.join(imageDir, name));
  }
}

async function renderImages() {
  const { imageDir, diagrams } = JSON.parse(fs.readFileSync(0, 'utf8'));
  const { default: puppeteer } = await import('puppeteer');
  const { renderMermaid: render } = await import('@mermaid-js/mermaid-cli');
  const sharp = require('sharp');
  const browserPath = await puppeteer.executablePath();
  const browser = await puppeteer.launch({
    headless: true,
    ...(!process.env.PUPPETEER_EXECUTABLE_PATH && !fs.existsSync(browserPath) ? { channel: 'chrome' } : {}),
  });
  try {
    for (const [name, { definition, context }] of diagrams) {
      try {
        const { data } = await render(browser, definition, 'png', {
          mermaidConfig: {
            theme: 'base',
            themeVariables: {
              fontFamily: 'Arial',
              fontSize: '18px',
              primaryColor: '#fff7ed',
              primaryBorderColor: '#e87722',
              primaryTextColor: '#2b2b2b',
              lineColor: '#777777',
            },
            flowchart: { useMaxWidth: false },
          },
        });
        const image = await sharp(Buffer.from(data)).avif({ quality: 90, chromaSubsampling: '4:4:4' }).toBuffer();
        const target = path.join(imageDir, name);
        const temporary = `${target}.${process.pid}.tmp`;
        try {
          fs.writeFileSync(temporary, image);
          fs.renameSync(temporary, target);
        } finally {
          fs.rmSync(temporary, { force: true });
        }
      } catch (error) {
        throw new Error(`${context}: ${error.message}`, { cause: error });
      }
    }
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  renderImages().catch(error => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}

module.exports = { prepareMermaid, renderMermaid };
