import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { avaliarCatalogo, diagnosticar, instalarChromium, verificarLocksTemas, versaoMaior } from '../tools/fabrica.mjs';

test('lê a versão maior de Node sem depender do formato completo', () => {
  assert.equal(versaoMaior('v22.3.1'), 22);
  assert.equal(versaoMaior('20.0.0'), 20);
  assert.equal(versaoMaior('desconhecida'), 0);
});

test('diagnóstico reprova Node antigo e ficheiros obrigatórios ausentes', () => {
  const relatorio = diagnosticar({
    root: 'C:/fabrica-inexistente', nodeVersion: '20.1.0', env: {}, arquivos: ['motor.mjs'], playwright: null,
  });
  assert.equal(relatorio.ok, false);
  assert.equal(relatorio.erros >= 3, true);
  assert.match(relatorio.resultados.find(r => r.nome === 'node').remedio, /Node\.js 22/);
  assert.equal(relatorio.resultados.find(r => r.nome === 'arquivo:motor.mjs').ok, false);
});

test('instalação de browser nunca tenta instalar dependência NPM e exige Playwright', () => {
  let chamou = false;
  const resultado = instalarChromium({ playwrightDisponivel: false, executar: () => { chamou = true; } });
  assert.equal(resultado.ok, false);
  assert.equal(chamou, false);
});

test('instalação explícita usa apenas playwright install chromium', () => {
  let chamada;
  const resultado = instalarChromium({
    playwrightDisponivel: true,
    platform: 'linux',
    executar: (cmd, args) => { chamada = [cmd, args]; return { status: 0 }; },
  });
  assert.equal(resultado.ok, true);
  assert.deepEqual(chamada, ['npx', ['playwright', 'install', 'chromium']]);
});

test('banco ausente é aviso: a fábrica opera apenas com kits existentes', () => {
  const r = avaliarCatalogo({ estado: 'sem-banco', mensagem: 'ausente' });
  assert.equal(r.ok, false);
  assert.equal(r.nivel, 'aviso');
  assert.match(r.detalhe, /kits existentes/);
});

test('banco idêntico libera curadoria completa', () => {
  const r = avaliarCatalogo({ estado: 'ok', mensagem: 'catálogo confere: 615 componentes' });
  assert.equal(r.ok, true);
  assert.equal(r.nivel, 'ok');
});

test('banco divergente bloqueia a fábrica para impedir resultado diferente', () => {
  const r = avaliarCatalogo({ estado: 'divergente', mensagem: 'catálogo não confere' });
  assert.equal(r.ok, false);
  assert.equal(r.nivel, 'erro');
  assert.match(r.remedio, /divergência/);
});

test('lock ausente também bloqueia porque não há referência reproduzível', () => {
  const r = avaliarCatalogo({ estado: 'sem-lock', mensagem: 'lock ausente' });
  assert.equal(r.ok, false);
  assert.equal(r.nivel, 'erro');
});

test('todo tema com package.json precisa de lock próprio', () => {
  const root = mkdtempSync(join(tmpdir(), 'prospector-fabrica-'));
  try {
    mkdirSync(join(root, 'themes', 'com-lock'), { recursive: true });
    mkdirSync(join(root, 'themes', 'sem-lock'), { recursive: true });
    writeFileSync(join(root, 'themes', 'com-lock', 'package.json'), '{}');
    writeFileSync(join(root, 'themes', 'com-lock', 'package-lock.json'), '{}');
    writeFileSync(join(root, 'themes', 'sem-lock', 'package.json'), '{}');
    const itens = verificarLocksTemas(root);
    assert.equal(itens.find(i => i.nome === 'tema:com-lock:lock').ok, true);
    assert.equal(itens.find(i => i.nome === 'tema:sem-lock:lock').ok, false);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
