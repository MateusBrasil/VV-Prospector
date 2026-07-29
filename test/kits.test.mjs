import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { carregarEValidar, validarRegistry } from '../tools/tema/kits.mjs';
import { resolverTemaDoKit } from '../tools/tema/hydrate.mjs';

function raiz() {
  const root = mkdtempSync(join(tmpdir(), 'prospector-kits-'));
  const dir = join(root, 'themes', 'base', 'dobras', 'hero', 'pronto');
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'variant.json'), JSON.stringify({
    estado: 'aprovada',
    origem: 'bank/_componentes/hero-section/hero-teste',
    slots: [{ nome: 'titulo', tipo: 'texto' }],
  }));
  const tema = join(root, 'themes', 'tema-teste');
  mkdirSync(tema, { recursive: true });
  writeFileSync(join(tema, 'dobras.manifest.json'), JSON.stringify({
    dobras: [{ slot: 'hero', nome: 'pronto', estado: 'aprovada' }],
  }));
  return root;
}
const base = estado => ({ versao: 1, kits: [{ nicho: 'teste', estado, tema: estado === 'mvp-pronto' ? 'tema-teste' : null, estrutura: [{ slot: 'hero', fonte: 'tema', componente: 'Hero' }], componentesAprovados: [{ slot: 'hero', nome: 'pronto', estado: 'aprovada' }], candidatosRevisar: [], riscos: ['risco conhecido'], criteriosPromocao: ['QA visual'] }] });

test('kit mvp-pronto aceita apenas referência de dobra promovida', () => {
  const root = raiz();
  try { assert.equal(validarRegistry({ root, registry: base('mvp-pronto') }).ok, true); }
  finally { rmSync(root, { recursive: true, force: true }); }
});

test('os três kits iniciais apontam para temas reais e dobras promovidas', () => {
  const resultado = carregarEValidar();
  assert.equal(resultado.ok, true, resultado.erros.join('\n'));
  const porNicho = new Map(resultado.kits.map(kit => [kit.nicho, kit]));
  assert.equal(porNicho.get('restaurante')?.tema, 'restaurante-noir');
  assert.equal(porNicho.get('clinica-estetica')?.tema, 'clinica-estetica');
  assert.equal(porNicho.get('clinica-dentaria')?.tema, 'odontologia');
});

test('hidratação só aceita temas MVP do registry', () => {
  assert.equal(resolverTemaDoKit({ tema: 'odontologia@1' }).tema, 'odontologia');
  assert.throws(() => resolverTemaDoKit({}), /tema obrigatório/);
  assert.throws(() => resolverTemaDoKit({ tema: 'tema-artesanal' }), /fora dos kits MVP/);
});

test('kit mvp-pronto falha ao declarar dobra revisar como aprovada', () => {
  const root = raiz();
  try {
    const registry = base('mvp-pronto');
    registry.kits[0].componentesAprovados[0].estado = 'revisar';
    assert.equal(validarRegistry({ root, registry }).ok, false);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('estrutura não pode apontar para uma dobra fora da lista aprovada', () => {
  const root = raiz();
  try {
    const registry = base('mvp-pronto');
    registry.kits[0].estrutura = [{ slot: 'hero', fonte: 'dobra', componente: 'outra' }];
    assert.equal(validarRegistry({ root, registry }).ok, false);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('kit mvp-pronto recusa dobra aprovada que o tema não materializa', () => {
  const root = raiz();
  try {
    writeFileSync(join(root, 'themes', 'tema-teste', 'dobras.manifest.json'), JSON.stringify({ dobras: [] }));
    const resultado = validarRegistry({ root, registry: base('mvp-pronto') });
    assert.equal(resultado.ok, false);
    assert.match(resultado.erros.join('\n'), /não materializada/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('kit mvp-pronto recusa peça sem origem Code Eagle ou contrato de slots', () => {
  const root = raiz();
  try {
    const variante = join(root, 'themes', 'base', 'dobras', 'hero', 'pronto', 'variant.json');
    writeFileSync(variante, JSON.stringify({ estado: 'aprovada', origem: 'tema/artesanal', slots: [] }));
    const resultado = validarRegistry({ root, registry: base('mvp-pronto') });
    assert.equal(resultado.ok, false);
    assert.match(resultado.erros.join('\n'), /origem rastreável/);
    assert.match(resultado.erros.join('\n'), /contrato de conteúdo/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('kit em-curadoria pode registrar candidato revisar sem alegar produção', () => {
  const root = raiz();
  try {
    const dir = join(root, 'themes', 'base', 'dobras', 'faq', 'candidato');
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'variant.json'), JSON.stringify({ estado: 'revisar' }));
    const registry = base('em-curadoria');
    registry.kits[0].componentesAprovados = [];
    registry.kits[0].candidatosRevisar = [{ slot: 'faq', nome: 'candidato', estado: 'revisar' }];
    assert.equal(validarRegistry({ root, registry }).ok, true);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
