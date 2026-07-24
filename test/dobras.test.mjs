import assert from 'node:assert/strict';
import test from 'node:test';
import { estadoDobra, estadoInicialDobra, podeUsarDobra } from '../tools/tema/dobras.mjs';
import { elegiveis } from '../tools/tema/compor-tema.mjs';

const cliente = { identidade: { nome: 'Casa Exemplo' }, imagens: {}, paginas: {}, blocos: {} };
const dobra = (estado, extras = {}) => ({
  slot: 'hero', nome: `hero-${estado || 'legado'}`, registo: 'sobrio', estado,
  precondicoes: {}, ...extras,
});

test('a esteira atribui estado inicial a partir dos pontos pendentes', () => {
  assert.equal(estadoInicialDobra([]), 'experimental');
  assert.equal(estadoInicialDobra(['confirmar contraste']), 'revisar');
});

test('variantes legadas continuam inspecionáveis, sem aprovação implícita', () => {
  assert.deepEqual(estadoDobra({ _rever: ['rever'] }), { estado: 'revisar', valido: true, origem: 'inferido-legado' });
  assert.deepEqual(estadoDobra({}), { estado: 'experimental', valido: true, origem: 'inferido-legado' });
  assert.equal(podeUsarDobra({}, 'producao'), false);
  assert.equal(podeUsarDobra({}, 'inspecao'), true);
});

test('produção bloqueia experimental e revisar, e permite apenas estados promovidos', () => {
  const resultado = elegiveis([
    dobra('experimental'), dobra('revisar'), dobra('aprovada'), dobra('em-producao'),
  ], cliente, 'sobrio');
  assert.deepEqual(resultado.map(x => x.elegivel), [false, false, true, true]);
  assert.match(resultado[0].razoes[0], /experimental/);
  assert.match(resultado[1].razoes[0], /revisar/);
});

test('inspeção mantém o kit visível para revisão sem permitir estados inválidos', () => {
  const resultado = elegiveis([dobra('experimental'), dobra('revisar'), dobra('desconhecido')], cliente, 'sobrio', { modo: 'inspecao' });
  assert.deepEqual(resultado.map(x => x.elegivel), [true, true, false]);
  assert.match(resultado[2].razoes[0], /estado inválido/);
});
