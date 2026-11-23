'use strict';

const assert = require('node:assert/strict');
const { execFileSync, spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const yaml = require('yaml');

const workflow = yaml.parse(fs.readFileSync('.github/workflows/cd.yml', 'utf8'));
const step = (job, name) => workflow.jobs[job].steps.find(item => item.name === name);
const bash = process.platform === 'win32'
  ? path.resolve(execFileSync('git', ['--exec-path'], { encoding: 'utf8' }).trim(), '../../..', 'bin', 'bash.exe')
  : 'bash';

function run(script, mocks, env = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'g3w-preview-test-'));
  const output = path.join(dir, 'output');
  try {
    const result = spawnSync(bash, ['-e', '-c', `${mocks}\n${script}`], {
      encoding: 'utf8',
      env: { ...process.env, GITHUB_OUTPUT: output.replace(/\\/g, '/'), ...env },
    });
    result.outputValues = fs.existsSync(output) ? fs.readFileSync(output, 'utf8') : '';
    return result;
  } finally {
    fs.rmSync(output, { force: true });
    fs.rmdirSync(dir);
  }
}

test('PR lookup filters by owner and verifies the full repository', () => {
  const result = run(step('update-preview', 'Verify pull request').run, `
    gh() {
      if [[ "$1" == api && "$2" == --method ]]; then
        for arg in "$@"; do [[ "$arg" == "head=g3w-suite:topic" ]] && { echo 70; return; }; done
        return 1
      fi
      echo '{}'
    }
    jq() {
      case "$2" in
        .head.repo.full_name) echo g3w-suite/g3w-suite.github.io ;;
        .base.ref) echo vanilla ;;
      esac
    }
  `, {
    GITHUB_REPOSITORY: 'g3w-suite/g3w-suite.github.io',
    GITHUB_REPOSITORY_OWNER: 'g3w-suite',
    EVENT_NAME: 'workflow_run',
    HEAD_BRANCH: 'topic',
    PR_NUMBER: '',
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.outputValues, /eligible=true\s+number=70/);
});

test('preview deploys require a valid production commit', () => {
  const script = step('deploy', 'Read deployed production commit').run;
  const mocks = 'curl() { if [[ "$PRODUCTION_SHA" == fail ]]; then return 22; fi; printf "%s" "$PRODUCTION_SHA"; }';
  const env = { PAGE_URL: 'https://example.test/website', GITHUB_RUN_ID: '1', GITHUB_RUN_ATTEMPT: '1' };
  const sha = 'a'.repeat(40);
  const valid = run(script, mocks, { ...env, PRODUCTION_SHA: sha });
  assert.equal(valid.status, 0, valid.stderr);
  assert.match(valid.outputValues, new RegExp(`sha=${sha}`));
  for (const value of ['fail', 'not-a-commit']) {
    assert.notEqual(run(script, mocks, { ...env, PRODUCTION_SHA: value }).status, 0);
  }
  assert.match(step('deploy', 'Checkout').with.ref, /steps\.production\.outputs\.sha/);
});

test('production and preview deployments share a non-replacing queue', () => {
  const { concurrency } = workflow.jobs.deploy;
  assert.equal(concurrency.group, 'pages');
  assert.equal(concurrency.queue, 'max');
  assert.equal(concurrency['cancel-in-progress'], false);
});
