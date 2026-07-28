/**
 * O banco e uma biblioteca comercial e NAO viaja no Git. Sem esta verificacao, a maquina
 * de outra pessoa poderia ter um catalogo incompleto e a fabrica escolheria outras dobras
 * sem ninguem dar por nada: "a ferramenta e pior no PC dele", quando o que difere e o
 * material. Falhar alto e cedo, nunca produzir um site pior em silencio.
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import { verificar, lerLock, impressaoDoBanco } from '../tools/catalogo-lock.mjs';

test('o lock existe e descreve o catalogo de referencia', () => {
  const lock = lerLock();
  assert.ok(lock, 'catalogo.lock.json tem de existir no repositorio');
  assert.ok(lock.total > 0 && lock.hash, 'o lock precisa de total e hash');
});

test('esta maquina confere com o lock', () => {
  const r = verificar();
  assert.ok(['ok', 'sem-banco'].includes(r.estado), `estado inesperado: ${r.estado}\n${r.mensagem}`);
});

test('banco ausente e tolerado mas avisado, porque as dobras promovidas continuam a servir', () => {
  const r = verificar({ lock: lerLock(), atual: null });
  assert.equal(r.estado, 'sem-banco');
  assert.match(r.mensagem, /licença comercial|licenca comercial|biblioteca comercial/i);
});

test('catalogo divergente diz EXATAMENTE o que falta, nao so que nao bate', () => {
  const lock = lerLock();
  const parcial = { total: 400, categorias: { ...lock.categorias, botoes: 10 }, hash: 'x' };
  const r = verificar({ lock, atual: parcial });
  assert.equal(r.estado, 'divergente');
  assert.ok(r.faltam.some(f => f.startsWith('botoes:')), 'tem de apontar a categoria em falta');
});
