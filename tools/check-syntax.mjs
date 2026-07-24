#!/usr/bin/env node
/** Verificação portátil de sintaxe para todas as ferramentas ESM da fábrica. */
import { readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));

export function listarFerramentas(dir = join(ROOT, 'tools')) {
  const achadas = [];
  const andar = atual => {
    for (const nome of readdirSync(atual)) {
      const ficheiro = join(atual, nome);
      if (statSync(ficheiro).isDirectory()) andar(ficheiro);
      else if (nome.endsWith('.mjs')) achadas.push(ficheiro);
    }
  };
  andar(dir);
  return achadas.sort();
}

export function verificarSintaxe(ficheiros = listarFerramentas()) {
  const falhas = [];
  for (const ficheiro of ficheiros) {
    const r = spawnSync(process.execPath, ['--check', ficheiro], { encoding: 'utf8' });
    if (r.status !== 0) falhas.push({ ficheiro, erro: (r.stderr || r.stdout || 'erro de sintaxe').trim() });
  }
  return { ok: falhas.length === 0, falhas, total: ficheiros.length };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const r = verificarSintaxe();
  if (r.ok) console.log(`✓ sintaxe: ${r.total} ferramenta(s) verificada(s)`);
  else {
    console.error(`✗ sintaxe: ${r.falhas.length}/${r.total} falhou/falharam`);
    for (const f of r.falhas) console.error(`\n${relative(ROOT, f.ficheiro)}\n${f.erro}`);
    process.exitCode = 1;
  }
}
