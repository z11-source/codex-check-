import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeChecklist } from '../src/codex-check.mjs';

const execFileAsync = promisify(execFile);

test('makeChecklist includes the task and practical checks', () => {
  const checklist = makeChecklist('add a README');

  assert.match(checklist, /Codex Pre-Code Check/);
  assert.match(checklist, /Task: add a README/);
  assert.match(checklist, /Read nearby files/);
  assert.match(checklist, /Run a small verification/);
});

test('makeChecklist uses a placeholder when no task is provided', () => {
  assert.match(makeChecklist(''), /Task: Describe the task/);
});

test('CLI prints a checklist', async () => {
  const { stdout } = await execFileAsync(process.execPath, ['./bin/codex-check.mjs', 'add tests']);

  assert.match(stdout, /Task: add tests/);
  assert.match(stdout, /Keep the change small/);
});
