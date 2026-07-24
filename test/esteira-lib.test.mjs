import assert from 'node:assert/strict';
import test from 'node:test';
import { escoparCss, mapearCores, tokenizarCss } from '../tools/tema/lib/css.mjs';
import { acharImagensPresasAoCss, sugerirPrecondicoes } from '../tools/tema/lib/metadata.mjs';

test('tokenização preserva contraste por tokens e não corrompe hex com alfa', () => {
  const resultado = tokenizarCss('/* demo */ .a { color: #FFFFFF; background: #ffffffaa !important; font-family: Inter; }', 'teste');
  assert.match(resultado.css, /\[data-dobra="teste"\] \.a/);
  assert.doesNotMatch(resultado.css, /#[0-9a-f]/i);
  assert.doesNotMatch(resultado.css, /var\(--[^)]+\)aa/);
  assert.equal(resultado.relatorio.fontesTrocadas, 1);
  assert.equal(resultado.relatorio.importantsRemovidos, 1);
});

test('escopador mantém keyframes globais e escopa regras dentro de media', () => {
  const css = escoparCss('@media (min-width: 1px) { body { color: red } } @keyframes x { to { opacity: 0 } }', '[data-dobra="x"]');
  assert.match(css, /@media \(min-width: 1px\)\{\[data-dobra="x"\]\{ color: red \}\s*\}/);
  assert.match(css, /@keyframes x\{ to \{ opacity: 0 \} \}/);
});

test('mapeador de cores é determinístico para uma mesma entrada', () => {
  const css = '.a { color: #ffffff; border-color: #111111; }';
  assert.deepEqual(mapearCores(css), mapearCores(css));
});

test('metadados inferem pré-condições e denunciam imagens fixas no CSS', () => {
  const slots = [
    { tipo: 'imagem', exemplo: 'a.jpg' },
    { tipo: 'texto', tag: 'h1', exemplo: 'Marca' },
    { tipo: 'texto', tag: 'p', exemplo: 'x'.repeat(300) },
  ];
  assert.deepEqual(sugerirPrecondicoes(slots), { imagensMin: 1, copiaMinChars: 180 });
  assert.deepEqual(sugerirPrecondicoes([{ tipo: 'texto', tag: 'h1', exemplo: 'Marca' }]), { nomeMaxPalavras: 3 });
  assert.deepEqual(acharImagensPresasAoCss('.card:nth-child(2)::before { background-image: url(foto.jpg) }'), [{ posicao: 2, url: 'foto.jpg' }]);
});
