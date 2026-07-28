import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { SMOKE_SLUG, eSmokeRestaurante, validarExecucaoSmoke, validarRelatorioSmokeQa } from '../tools/run-smoke.mjs';

test('modo smoke só reconhece a fixture canónica marcada explicitamente', () => {
  const root = '/projeto';
  const brief = { _smoke_test: true, slug: SMOKE_SLUG };
  assert.equal(eSmokeRestaurante({ root, briefPath: 'briefs/_smoke-test-restaurante.json', brief }), true);
  assert.equal(eSmokeRestaurante({ root, briefPath: 'briefs/copia.json', brief }), false);
  assert.equal(eSmokeRestaurante({ root, briefPath: 'briefs/_smoke-test-restaurante.json', brief: { slug: SMOKE_SLUG } }), false);
  assert.equal(eSmokeRestaurante({ root, briefPath: 'briefs/_smoke-test-restaurante.json', brief: { _smoke_test: true, slug: 'outro' } }), false);
});

test('smoke bloqueia deploy antes de qualquer efeito operacional', () => {
  assert.equal(validarExecucaoSmoke({ smoke: true, deploy: true }).ok, false);
  assert.equal(validarExecucaoSmoke({ smoke: true, deploy: false }).ok, true);
  assert.equal(validarExecucaoSmoke({ smoke: false, deploy: true }).ok, true);
});

test('QA smoke exige relatório OK com 375 e 1440', () => {
  const dir = mkdtempSync(join(tmpdir(), 'prospector-smoke-qa-'));
  try {
    assert.equal(validarRelatorioSmokeQa(dir).ok, false);
    mkdirSync(join(dir, '_qa'));
    writeFileSync(join(dir, '_qa', 'relatorio.json'), JSON.stringify({ veredicto: 'OK', fails: 0, viewports: ['375', '1440'] }));
    assert.equal(validarRelatorioSmokeQa(dir).ok, true);
    writeFileSync(join(dir, '_qa', 'relatorio.json'), JSON.stringify({ veredicto: 'OK', fails: 0, viewports: ['1440'] }));
    assert.equal(validarRelatorioSmokeQa(dir).ok, false);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
