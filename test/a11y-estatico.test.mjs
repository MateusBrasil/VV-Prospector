import assert from 'node:assert/strict';
import test from 'node:test';
import { validarFontesTema } from '../tools/a11y-estatico.mjs';

const fonte = (ficheiro, texto) => ({ ficheiro, texto });

test('gate estático aceita contrato mínimo de idioma, landmarks, alt e foco', () => {
  const r = validarFontesTema({
    nome: 'teste',
    ui: [fonte('/tmp/src/app/layout.js', '<html lang={C.locale}><body /></html>'), fonte('/tmp/src/page.jsx', '<nav /><main><img src={x} alt="Imagem" /></main><footer />')],
    css: [fonte('/tmp/system.css', 'a:focus-visible { outline: 2px solid; }')],
  });
  assert.equal(r.ok, true);
});

test('gate estático reporta as violações acessíveis de forma explícita', () => {
  const r = validarFontesTema({ nome: 'teste', ui: [fonte('/tmp/src/app/layout.js', '<html><img src={x} /></html>')], css: [] });
  assert.equal(r.ok, false);
  assert.equal(r.erros.length, 6);
  assert.match(r.erros.join('\n'), /sem alt/);
});
