/**
 * As direções de arte dos nichos têm de passar três testes que puxam em direções
 * diferentes, e é por isso que correm juntos: afastar da estética de IA pode empurrar o
 * acento para fora do código do nicho, e ficar dentro do código pode aproximá-lo do cliché.
 * Os três erros cobertos aqui foram todos cometidos de verdade nesta fase do projeto.
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { verificar, contraste, pareceIA, paraHsl } from '../tools/tema/verificar-direcoes.mjs';
import { aplicarDirecao } from '../tools/tema/direcoes.mjs';

const direcoes = JSON.parse(readFileSync(new URL('../themes/base/direcoes.json', import.meta.url), 'utf8'));

test('as direções de nicho passam contraste AA, anti-IA e código do nicho', () => {
  const r = verificar(direcoes);
  assert.equal(r.ok, true, `problemas:\n${r.problemas.join('\n')}`);
});

test('base300 e base200 nunca carregam texto (falharam AA nos 3 nichos quando carregavam)', () => {
  for (const [nicho, d] of Object.entries(direcoes)) {
    if (nicho.startsWith('_')) continue;
    for (const [papel, token] of Object.entries(d.design.papeis)) {
      assert.ok(!['base200', 'base300'].includes(token),
        `${nicho}: ${papel} aponta para ${token}, que é cor de linha e borda`);
    }
  }
});

test('o detetor de cara de IA apanha o teal saturado e absolve o petróleo dessaturado', () => {
  // teal-500 do Tailwind: o próprio
  assert.equal(pareceIA('#14b8a6').risco, true);
  // o acento que a odontologia teve por engano: H169, a 4 graus do teal-500, mas S45
  // contra S80. Fica absolvido pela saturação, e foi o que me fez subestimar o risco.
  assert.equal(pareceIA('#2f7d6f').risco, false);
  // o petróleo atual: dentro do código dentário e longe do default
  assert.equal(pareceIA('#27637a').risco, false);
});

test('os 3 nichos separam-se por matiz, densidade e escala, não só por cor', () => {
  const o = direcoes.odontologia, e = direcoes['clinica-estetica'], r = direcoes.restaurante;
  const matiz = x => paraHsl(x.design.cores.acento).h;

  // temperatura: odontologia fria, os outros dois quentes
  assert.ok(matiz(o) > 150, 'odontologia tem de ser fria');
  assert.ok(matiz(e) < 60 && matiz(r) < 60, 'estética e restauração são quentes');

  // densidade: o sinal mais rápido que o olho lê, e os 3 têm de ser distintos
  const respiro = x => parseFloat(x.design.ritmo.respiro);
  assert.ok(respiro(e) > respiro(o) && respiro(o) > respiro(r),
    'estética mais arejada que odontologia, que é mais arejada que restauração');

  // peso do display: nenhum usa 900, que é a assinatura do Kasablanca
  for (const [nome, d] of [['odontologia', o], ['estetica', e], ['restaurante', r]]) {
    assert.ok(d.design.display.peso < 900, `${nome} não pode usar peso 900`);
    assert.notEqual(d.design.display.caixa, 'uppercase', `${nome} não pode usar caixa alta`);
  }
});

test('cada direção declara tracking de display e a sobreposição do cliente preserva-o', () => {
  for (const nicho of ['odontologia', 'clinica-estetica', 'restaurante']) {
    assert.match(direcoes[nicho].design.display.tracking, /^-?\d+(\.\d+)?em$/,
      `${nicho} precisa de tracking de display escalável`);
  }
  const base = aplicarDirecao({ direcao: 'odontologia', design: { display: { peso: 700 } } }, direcoes);
  assert.equal(base.design.display.tracking, '-0.015em');
  assert.equal(base.design.display.peso, 700, 'a decisão específica do cliente vence a direção');
  const sobreposto = aplicarDirecao({ direcao: 'odontologia', design: { display: { tracking: '-0.01em' } } }, direcoes);
  assert.equal(sobreposto.design.display.tracking, '-0.01em');
});

test('o restaurante nega explicitamente a fórmula do Kasablanca', () => {
  const r = direcoes.restaurante;
  assert.equal(r.referencias.contraste, 'bugatti');
  const juntas = r.negacoes.join(' ').toLowerCase();
  for (const proibido of ['tela preta', 'caixa alta']) {
    assert.ok(juntas.includes(proibido), `falta negar "${proibido}"`);
  }
  // o h1 do restaurante tem de ser o MENOR dos três: aqui a imagem manda, não o texto
  const teto = x => parseFloat(x.design.display.escala.h1.match(/([\d.]+)rem\)/)[1]);
  assert.ok(teto(r) < teto(direcoes.odontologia) && teto(r) < teto(direcoes['clinica-estetica']),
    'no restaurante a fotografia domina, então o h1 é o menor dos três');
});
