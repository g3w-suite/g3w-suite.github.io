'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { When, Then } = require('@cucumber/cucumber');

When('the development server starts with PORT set to another value', async function () {
  this.server = spawn(process.execPath, ['server.js', '--dev'], {
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
      const timer = setTimeout(() => reject(new Error('Server startup timed out')), 4000);
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

Then('it serves the root page on port 8080', async function () {
  const probe = `dev-watch-${process.pid}-${Date.now()}.txt`;
  const source = path.resolve('src', 'assets', probe);
  const output = path.resolve('.dev', 'assets', probe);
  const failingPage = path.resolve('src', `zz-dev-watch-failure-${process.pid}-${Date.now()}.html`);
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

    fs.writeFileSync(source, 'rebuilt');
    const deadline = Date.now() + 5000;
    while (Date.now() < deadline && (!fs.existsSync(output) || fs.readFileSync(output, 'utf8') !== 'rebuilt')) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    assert.equal(fs.readFileSync(output, 'utf8'), 'rebuilt', 'development server must rebuild changed source files');

    fs.writeFileSync(failingPage, '<html lang="en"></html>');
    const failureDeadline = Date.now() + 5000;
    while (Date.now() < failureDeadline && !this.serverErrors.includes('Build failed:')) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    assert.match(this.serverErrors, /Build failed:/, 'failed rebuild must report its error');
    assert.equal(this.server.exitCode, null, 'failed rebuild must not stop the development server');
    assert.equal((await fetch(`http://localhost:${this.port}/`)).status, 200, 'server must continue serving after a failed rebuild');

    const successfulBuilds = (this.serverOutput.match(/Sito aggiornato\./g) || []).length;
    fs.rmSync(failingPage, { force: true });
    const recoveryDeadline = Date.now() + 5000;
    while (Date.now() < recoveryDeadline && (this.serverOutput.match(/Sito aggiornato\./g) || []).length === successfulBuilds) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    assert.ok((this.serverOutput.match(/Sito aggiornato\./g) || []).length > successfulBuilds, 'server must rebuild successfully after the source error is fixed');
  } finally {
    fs.rmSync(source, { force: true });
    fs.rmSync(failingPage, { force: true });
    this.server.kill();
    fs.rmSync(output, { force: true });
  }
});
