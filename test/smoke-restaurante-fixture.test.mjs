import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import test from 'node:test';
import { resolver } from '../tools/tema/schema.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const lerJson = caminho => JSON.parse(readFileSync(join(ROOT, caminho), 'utf8'));

test('fixture de restaurante liga um brief de tema a conteúdo sintético válido', () => {
  const caminhoBrief = 'briefs/_smoke-test-restaurante.json';
  const caminhoCliente = 'clientes/_smoke-test-restaurante/cliente.json';
  assert.equal(existsSync(join(ROOT, caminhoBrief)), true);
  assert.equal(existsSync(join(ROOT, caminhoCliente)), true);
  const brief = lerJson(caminhoBrief);
  const cliente = lerJson(caminhoCliente);
  const resultado = resolver(cliente);
  assert.equal(brief._smoke_test, true);
  assert.equal(brief.semSite, true);
  assert.equal(brief.slug, cliente.slug);
  assert.equal(brief.tema, cliente.tema);
  assert.equal(resultado.ok, true, resultado.fatais.join('\n'));
});
