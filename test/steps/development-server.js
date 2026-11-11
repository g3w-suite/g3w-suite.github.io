'use strict';

const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const { When, Then } = require('@cucumber/cucumber');

When('the development server starts with PORT set to another value', async function () {
  this.server = spawn(process.execPath, ['server.js', '--dev'], {
    env: { ...process.env, PORT: '0' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let errors = '';
  this.server.stderr.setEncoding('utf8');
  this.server.stderr.on('data', data => { errors += data; });
  this.server.stdout.setEncoding('utf8');
  try {
    this.port = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Server startup timed out')), 4000);
      this.server.once('error', error => { clearTimeout(timer); reject(error); });
      this.server.once('exit', code => { clearTimeout(timer); reject(new Error(`Server exited (${code}): ${errors}`)); });
      this.server.stdout.once('data', data => {
        clearTimeout(timer);
        const match = /http:\/\/localhost:(\d+)\//.exec(data);
        if (!match) reject(new Error(`Unexpected server output: ${data}`));
        else resolve(Number(match[1]));
      });
    });
  } catch (error) {
    this.server.kill();
    throw error;
  }
});

Then('it serves the root page on port 8080', async function () {
  try {
    assert.equal(this.port, 8080);
    const response = await fetch(`http://localhost:${this.port}/`);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /url=\/it\//i);
    for (const url of ['/it/demo/', '/en/changelog/v3.11/']) {
      const page = await fetch(`http://localhost:${this.port}${url}`);
      assert.equal(page.status, 200, url);
    }
    for (const [source, target] of [
      ['/it/demo.html?test=1', '/it/demo/?test=1'],
      ['/it/demo/index.html', '/it/demo/'],
      ['/it/index.html', '/it/'],
      ['/it/changelog/index.html', '/it/changelog/'],
      ['/it/demo?test=1', '/it/demo/?test=1'],
    ]) {
      const redirect = await fetch(`http://localhost:${this.port}${source}`, { redirect: 'manual' });
      assert.equal(redirect.status, 301, source);
      assert.equal(redirect.headers.get('location'), target, source);
    }
  } finally {
    this.server.kill();
  }
});
