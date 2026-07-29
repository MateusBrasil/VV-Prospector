import assert from 'node:assert/strict';
import test from 'node:test';
import { escolherModoMontagem } from '../tools/tema/modo-montagem.mjs';

test('um plano Code Eagle para nicho sem kit vence uma ficha de tema existente', () => {
  assert.equal(escolherModoMontagem({
    brief: { slug: 'oficina-exemplo', plano: 'planos/oficina-exemplo.json' },
    temFichaTema: true,
  }), 'compor');
});

test('tema declarado é uma escolha explícita e vence um plano legado', () => {
  assert.equal(escolherModoMontagem({
    brief: { tema: 'odontologia', plano: 'planos/legado.json' },
    temFichaTema: true,
  }), 'tema');
});

test('sem tema nem plano, mantém os fallbacks históricos', () => {
  assert.equal(escolherModoMontagem({ brief: { blocos: ['hero'] } }), 'assemble');
  assert.equal(escolherModoMontagem({ brief: { blocos: ['hero'] }, forcarRemix: true }), 'remix');
});
