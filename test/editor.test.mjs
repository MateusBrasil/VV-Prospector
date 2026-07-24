import assert from 'node:assert/strict';
import test from 'node:test';
import { injetarEditor, validarUrlEditor } from '../tools/editor.mjs';

test('editor só aceita URLs HTTP(S) ou relativas para imagens', () => {
  for (const url of ['https://cdn.example/imagem.jpg', 'http://empresa.example/imagem.jpg', '/assets/imagem.jpg', './imagem.jpg']) assert.equal(validarUrlEditor(url).ok, true, url);
  for (const url of ['javascript:alert(1)', 'data:image/svg+xml,<svg>', 'file:///C:/segredo.png', '//evil.example/a.jpg', 'java\nscript:alert(1)']) assert.equal(validarUrlEditor(url).ok, false, url);
});

test('editor persiste texto puro e não reintroduz HTML editado', () => {
  const editor = injetarEditor('<!doctype html><html><body><p>Olá</p></body></html>');
  assert.match(editor, /el\.textContent/);
  assert.doesNotMatch(editor, /el\.innerHTML/);
  assert.match(editor, /URL\.revokeObjectURL/);
  assert.throws(() => injetarEditor('<p>sem body</p>'), /sem <\/body>/);
});
