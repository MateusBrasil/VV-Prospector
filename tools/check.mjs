#!/usr/bin/env node
/** Executa a verificação local completa sem depender de shell/PowerShell. */
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const passos = [
  ['testes', ['--test', 'test/*.test.mjs']],
  ['sintaxe', ['tools/check-syntax.mjs']],
  ['a11y estática', ['tools/a11y-estatico.mjs']],
];

for (const [nome, args] of passos) {
  console.log(`\n→ ${nome}`);
  const r = spawnSync(process.execPath, args, { cwd: ROOT, stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status || 1);
}
