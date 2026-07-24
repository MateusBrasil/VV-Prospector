import assert from 'node:assert/strict';
import test from 'node:test';
import { aplicarSlotsSeguro, cssExtraSeguro, cssVarsSeguras, sanitizarMarkup, urlSegura } from '../tools/lib/composicao-segura.mjs';

test('slots HTML legados são sanitizados e slots de atributo bloqueiam javascript:', () => {
  const r = aplicarSlotsSeguro('<h1>{{titulo}}</h1><a href="{{link}}">x</a><img src="{{foto}}">', {
    '{{titulo}}': '<img src=x onerror=alert(1)>', '{{link}}': 'javascript:alert(1)', '{{foto}}': 'https://cdn.example/foto.jpg',
  });
  assert.match(r.html, /<img src="">/);
  assert.doesNotMatch(r.html, /onerror/i);
  assert.match(r.html, /href="#"/);
  assert.match(r.html, /src="https:\/\/cdn\.example\/foto\.jpg"/);
});

test('markup intencional é preservado somente após sanitização', () => {
  const r = aplicarSlotsSeguro('<nav>{{links}}</nav>', {
    '{{links}}': '<a href="/contacto" onclick="alert(1)">Contacto</a><script>alert(1)</script>',
  });
  assert.match(r.html, /<a href="\/contacto">Contacto<\/a>/);
  assert.doesNotMatch(r.html, /script|onclick/i);
  assert.equal(sanitizarMarkup('<a href="javascript:alert(1)">x</a>'), '<a href="#">x</a>');
});

test('URL allowlist e CSS do plano bloqueiam execução e escape de bloco', () => {
  assert.equal(urlSegura('https://example.com/a'), 'https://example.com/a');
  assert.equal(urlSegura('javascript:alert(1)'), '#');
  assert.deepEqual(cssVarsSeguras({ '--ok': 'oklch(.4 .1 120)', '--mal': 'red;}</style><script>' }).vars, { '--ok': 'oklch(.4 .1 120)' });
  assert.equal(cssExtraSeguro('{blk}{color:red}</style><script>').css, '');
});
