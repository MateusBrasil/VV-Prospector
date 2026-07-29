import test from 'node:test';
import assert from 'node:assert/strict';
import { validarConteudoDoTema } from '../tools/tema/qualidade-conteudo.mjs';

const cliente = itens => ({ blocos: { servicos: { itens } } });

test('odontologia bloqueia tratamento sem fotografia própria', () => {
  const erros = validarConteudoDoTema(cliente([
    { titulo: 'Implantes', imagem: '/assets/implantes.webp' },
    { titulo: 'Ortodontia' },
  ]), 'odontologia');
  assert.equal(erros.length, 1);
  assert.match(erros[0], /Ortodontia/);
});

test('odontologia bloqueia a mesma fotografia em todos os tratamentos reais', () => {
  const erros = validarConteudoDoTema(cliente([
    { titulo: 'Implantes', imagem: '/assets/clinica.webp' },
    { titulo: 'Ortodontia', imagem: '/assets/clinica.webp' },
  ]), 'odontologia');
  assert.equal(erros.length, 1);
  assert.match(erros[0], /fotografia diferente/);
});

test('odontologia aceita narrativa visual completa e fixture técnica marcada', () => {
  const real = cliente([
    { titulo: 'Implantes', imagem: '/assets/implantes.webp' },
    { titulo: 'Ortodontia', imagem: '/assets/ortodontia.webp' },
  ]);
  assert.deepEqual(validarConteudoDoTema(real, 'odontologia'), []);
  const fixture = { ...cliente([{ titulo: 'Teste A', imagem: '/assets/teste.svg' }, { titulo: 'Teste B', imagem: '/assets/teste.svg' }]), _smoke_test: true };
  assert.deepEqual(validarConteudoDoTema(fixture, 'odontologia'), []);
});
