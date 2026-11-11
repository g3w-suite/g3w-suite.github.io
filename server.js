// server.js
// Semplice server statico Node.js per servire la cartella public

const http = require('http');
const fs = require('fs');
const path = require('path');

// Cambia qui il percorso della cartella da servire
const root = path.resolve(__dirname, 'public');
const port = 8080;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

http.createServer((req, res) => {
  let filePath = path.join(root, req.url.split('?')[0]);
  if (fs.statSync(root).isDirectory() && req.url === '/') {
    filePath = path.join(root, 'index.html');
  }
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else if (!err && stats.isDirectory()) {
      // Cerca index.html in directory
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
      res.writeHead(404);
      res.end('File not found');
    }
  });
}).listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}/`);
});
