'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { staticDir, sourceDir, catalogDir, port, mimeTypes } = require('../utils/config');
const { runBuild } = require('./build');
const devMode = process.argv.includes('--dev');
const buildOnly = process.argv.includes('--build');
const root = staticDir;

if (buildOnly) runBuild(staticDir);
else if (devMode) runBuild(root, false);

if (devMode) {
  let rebuildTimer;
  const rebuild = () => {
    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(() => {
      if (runBuild(root, false)) console.log('Sito aggiornato.');
    }, 100);
  };
  for (const dir of [sourceDir, catalogDir]) {
    fs.watch(dir, { recursive: true }, rebuild)
      .on('error', error => console.error(`Watcher failed for ${dir}: ${error.message}`));
  }
}

if (!buildOnly) {
  const respondNotFound = res => {
    fs.readFile(path.join(root, '404.html'), (error, content) => {
      if (error) {
        console.error(`Failed to read 404.html: ${error.message}`);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  };
  http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname.endsWith('.html')) {
      const clean = url.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');
      res.writeHead(301, { Location: clean + url.search });
      res.end();
      return;
    }
    let filePath = path.join(root, decodeURIComponent(url.pathname));
    if (req.url === '/') filePath = path.join(root, 'index.html');
    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else if (!err && stats.isDirectory()) {
        if (!url.pathname.endsWith('/')) {
          res.writeHead(301, { Location: url.pathname + '/' + url.search });
          res.end();
          return;
        }
        const indexFile = path.join(filePath, 'index.html');
        fs.stat(indexFile, (err2, stats2) => {
          if (!err2 && stats2.isFile()) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(indexFile).pipe(res);
          } else {
            res.writeHead(403);
            res.end('Directory access is forbidden');
          }
        });
      } else {
        respondNotFound(res);
      }
    });
  }).listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}/`);
  });
}
