import assert from 'node:assert/strict';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { mkdtempSync } from 'node:fs';
import { materializarDobras } from '../tools/tema/dobras-manifest.mjs';

function preparar(estadoFonte = 'aprovada', estadoManifest = 'aprovada') {
  const raiz = mkdtempSync(join(tmpdir(), 'prospector-dobras-'));
  const origem = join(raiz, 'themes', 'base', 'dobras', 'botao', 'brilho');
  const tema = join(raiz, 'themes', 'tema-teste');
  const obra = join(tema, '.obras', 'cliente');
  mkdirSync(origem, { recursive: true });
  mkdirSync(obra, { recursive: true });
  writeFileSync(join(origem, 'Dobra.jsx'), 'export default function Dobra() {}');
  writeFileSync(join(origem, 'Dobra.css'), '.dobra {}');
  writeFileSync(join(origem, 'variant.json'), JSON.stringify({ estado: estadoFonte }));
  writeFileSync(join(tema, 'dobras.manifest.json'), JSON.stringify({
    dobras: [{ slot: 'botao', nome: 'brilho', estado: estadoManifest }],
  }));
  return { raiz, tema, obra };
}

test('hydrate materializa apenas a dobra aprovada declarada pelo tema', () => {
  const f = preparar();
  try {
    assert.equal(materializarDobras({ root: f.raiz, dirTema: f.tema, obra: f.obra }), 1);
    assert.equal(existsSync(join(f.obra, 'src', 'dobras', 'botao', 'brilho', 'Dobra.jsx')), true);
  } finally {
    rmSync(f.raiz, { recursive: true, force: true });
  }
});

test('manifest não promove dobra cuja fonte ainda não foi aprovada', () => {
  const f = preparar('revisar', 'aprovada');
  try {
    assert.throws(() => materializarDobras({ root: f.raiz, dirTema: f.tema, obra: f.obra }), /não está promovida/);
  } finally {
    rmSync(f.raiz, { recursive: true, force: true });
  }
});

test('manifest exige estado explícito de produção', () => {
  const f = preparar('aprovada', 'revisar');
  try {
    assert.throws(() => materializarDobras({ root: f.raiz, dirTema: f.tema, obra: f.obra }), /precisa declarar estado/);
  } finally {
    rmSync(f.raiz, { recursive: true, force: true });
  }
});
