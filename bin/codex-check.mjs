#!/usr/bin/env node
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { makeChecklist } from '../src/codex-check.mjs';

const HELP = `codex-check

Usage:
  codex-check <task>

Example:
  codex-check "add tests"
`;

export async function main(argv = process.argv.slice(2), io = console) {
  if (argv[0] === '--help' || argv[0] === '-h' || argv[0] === 'help') {
    io.log(HELP.trimEnd());
    return 0;
  }

  io.log(makeChecklist(argv.join(' ')));
  return 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().then((code) => {
    process.exitCode = code;
  }).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
