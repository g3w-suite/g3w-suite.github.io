'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { When, Then } = require('@cucumber/cucumber');

When('the development server starts with PORT set to another value', { timeout: 30000 }, async function () {
  this.server = spawn(process.execPath, ['build/server.js', '--dev'], {
    env: { ...process.env, PORT: '0' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  this.serverErrors = '';
  this.serverOutput = '';
  this.server.stderr.setEncoding('utf8');
  this.server.stderr.on('data', data => { this.serverErrors += data; });
  this.server.stdout.setEncoding('utf8');
  this.server.stdout.on('data', data => { this.serverOutput += data; });
  try {
    this.port = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Server startup timed out')), 20000);
      this.server.once('error', error => { clearTimeout(timer); reject(error); });
      this.server.once('exit', code => { clearTimeout(timer); reject(new Error(`Server exited (${code}): ${this.serverErrors}`)); });
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

Then('it serves the root page on port 8080', { timeout: 90000 }, async function () {
  const probe = `dev-watch-${process.pid}-${Date.now()}`;
  const source = path.resolve('src', `${probe}.md`);
  const output = path.resolve('static', 'en', probe, 'index.html');
  const failingPage = path.resolve('src', `zz-dev-watch-failure-${process.pid}-${Date.now()}.md`);
  try {
    assert.equal(this.port, 8080);
    const response = await fetch(`http://localhost:${this.port}/`);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /url=\/it\//i);
    const image = await fetch(`http://localhost:${this.port}/img/site-g3w-suite-logo.avif`);
    assert.equal(image.status, 200);
    assert.equal(image.headers.get('content-type'), 'image/avif');
    for (const url of ['/it/about/', '/it/docs/components/', '/en/news/v3.11/']) {
      const page = await fetch(`http://localhost:${this.port}${url}`);
      assert.equal(page.status, 200, url);
    }
    for (const [source, target] of [
      ['/it/about.html?test=1', '/it/about/?test=1'],
      ['/it/about/index.html', '/it/about/'],
      ['/it/index.html', '/it/'],
      ['/it/news/v3.11/index.html', '/it/news/v3.11/'],
      ['/it/about?test=1', '/it/about/?test=1'],
    ]) {
      const redirect = await fetch(`http://localhost:${this.port}${source}`, { redirect: 'manual' });
      assert.equal(redirect.status, 301, source);
      assert.equal(redirect.headers.get('location'), target, source);
    }

    fs.writeFileSync(source, '# Development server test\n\nrebuilt\n');
    const deadline = Date.now() + 15000;
    while (Date.now() < deadline && (!fs.existsSync(output) || !fs.readFileSync(output, 'utf8').includes('<p>rebuilt</p>'))) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    assert.ok(
      fs.existsSync(output) && fs.readFileSync(output, 'utf8').includes('<p>rebuilt</p>'),
      `development server must rebuild changed source files: ${this.serverErrors}`
    );

    fs.writeFileSync(failingPage, '---\ntitle: [\n---\n\n# Invalid front matter\n');
    const failureDeadline = Date.now() + 15000;
    while (Date.now() < failureDeadline && !this.serverErrors.includes('Build failed:')) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    assert.match(this.serverErrors, /Build failed:/, 'failed rebuild must report its error');
    assert.equal(this.server.exitCode, null, 'failed rebuild must not stop the development server');
    assert.equal((await fetch(`http://localhost:${this.port}/`)).status, 200, 'server must continue serving after a failed rebuild');

    const successfulBuilds = (this.serverOutput.match(/Sito aggiornato\./g) || []).length;
    fs.rmSync(failingPage, { force: true });
    const recoveryDeadline = Date.now() + 15000;
    while (Date.now() < recoveryDeadline && (this.serverOutput.match(/Sito aggiornato\./g) || []).length === successfulBuilds) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    assert.ok((this.serverOutput.match(/Sito aggiornato\./g) || []).length > successfulBuilds, 'server must rebuild successfully after the source error is fixed');
  } finally {
    fs.rmSync(source, { force: true });
    fs.rmSync(failingPage, { force: true });
    this.server.kill();
    for (const lang of ['en', 'it']) {
      fs.rmSync(path.resolve('static', lang, probe), { recursive: true, force: true });
    }
  }
});
