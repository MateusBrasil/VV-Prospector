import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { analisarTema } from '../tools/orcamento-performance.mjs';

function temaTemporario() {
  const dir = mkdtempSync(join(tmpdir(), 'prospector-orcamento-'));
  mkdirSync(join(dir, 'src'), { recursive: true });
  mkdirSync(join(dir, 'public', '.obras', 'ignorada'), { recursive: true });
  writeFileSync(join(dir, 'src', 'page.js'), 'x'.repeat(80));
  writeFileSync(join(dir, 'public', 'hero.webp'), 'x'.repeat(120));
  writeFileSync(join(dir, 'public', '.obras', 'ignorada', 'gigante.bin'), 'x'.repeat(2000));
  return dir;
}

test('mede apenas src/public e ignora obras geradas', () => {
  const dir = temaTemporario();
  try {
    const r = analisarTema(dir, { codigoBytes: 100, publicBytes: 200, maiorAssetBytes: 150, ficheiros: 3 });
    assert.equal(r.ok, true);
    assert.equal(r.metricas.codigoBytes, 80);
    assert.equal(r.metricas.publicBytes, 120);
    assert.equal(r.metricas.ficheiros, 2);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('reprova total e asset individual acima do orçamento', () => {
  const dir = temaTemporario();
  try {
    const r = analisarTema(dir, { codigoBytes: 40, publicBytes: 100, maiorAssetBytes: 100, ficheiros: 1 });
    assert.equal(r.ok, false);
    assert.equal(r.falhas.length, 4);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('não segue symlink ou junction para asset externo grande', t => {
  const dir = temaTemporario();
  const externo = mkdtempSync(join(tmpdir(), 'prospector-orcamento-externo-'));
  const link = join(dir, 'public', 'asset-link');
  try {
    writeFileSync(join(externo, 'gigante.bin'), 'x'.repeat(4096));
    try {
      symlinkSync(externo, link, process.platform === 'win32' ? 'junction' : 'dir');
    } catch (erro) {
      // Em máquinas Windows com política restritiva, junctions podem ser proibidos.
      if (erro.code === 'EPERM' || erro.code === 'EACCES') {
        t.skip(`não foi possível criar link de diretório: ${erro.code}`);
        return;
      }
      throw erro;
    }
    const r = analisarTema(dir, { codigoBytes: 100, publicBytes: 200, maiorAssetBytes: 150, ficheiros: 3 });
    assert.equal(r.ok, true);
    assert.equal(r.metricas.publicBytes, 120);
    assert.equal(r.metricas.ficheiros, 2);
  } finally {
    rmSync(dir, { recursive: true, force: true });
    rmSync(externo, { recursive: true, force: true });
  }
});
