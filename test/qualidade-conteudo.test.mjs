import test from 'node:test';
import assert from 'node:assert/strict';
import { validarConteudoDoTema } from '../tools/tema/qualidade-conteudo.mjs';

const odontologiaValida = () => ({
  blocos: {
    servicos: { itens: [
      { titulo: 'Implantes', imagem: '/assets/implantes.webp' },
      { titulo: 'Ortodontia', imagem: '/assets/ortodontia.webp' },
      { titulo: 'Clinica geral', imagem: '/assets/clinica-geral.webp' },
    ] },
    equipa: { membros: [
      { nome: 'Dra. Ana', imagem: '/assets/dra-ana.webp' },
      { nome: 'Dr. Bruno', imagem: '/assets/dr-bruno.webp' },
    ] },
    faq: { itens: [
      { pergunta: 'Pergunta 1', resposta: 'Resposta 1' },
      { pergunta: 'Pergunta 2', resposta: 'Resposta 2' },
      { pergunta: 'Pergunta 3', resposta: 'Resposta 3' },
    ] },
  },
});

const esteticaValida = () => ({
  blocos: {
    vitrine: { itens: [
      { antes: '/assets/caso-1-antes.webp', depois: '/assets/caso-1-depois.webp' },
      { antes: '/assets/caso-2-antes.webp', depois: '/assets/caso-2-depois.webp' },
    ] },
    prova: { itens: [
      { nome: 'Pessoa 1', texto: 'Relato 1' },
      { nome: 'Pessoa 2', texto: 'Relato 2' },
      { nome: 'Pessoa 3', texto: 'Relato 3' },
    ] },
  },
});

test('restaurante bloqueia hero premium sem galeria real suficiente', () => {
  const cliente = { blocos: { hero: { imagens: [{ src: '/a.webp' }, { src: '/b.webp' }] } } };
  const erros = validarConteudoDoTema(cliente, 'restaurante-noir');
  assert.match(erros.join('\n'), /5 fotografias/);
});

test('restaurante bloqueia vitrine Code Eagle sem cinco cenas reais', () => {
  const cliente = { blocos: { hero: { imagens: Array.from({ length: 5 }, (_, i) => ({ src: `/${i}.webp` })) }, vitrine: { itens: [{ imagem: '/a.webp' }] } } };
  assert.match(validarConteudoDoTema(cliente, 'restaurante-noir').join('\n'), /5 pratos ou cenas/);
});

test('restaurante bloqueia quando hero e vitrine repetem o mesmo ensaio', () => {
  const imagens = Array.from({ length: 5 }, (_, i) => `/foto-${i}.webp`);
  const cliente = {
    blocos: {
      hero: { imagens: imagens.map(src => ({ src })) },
      vitrine: { itens: imagens.map(imagem => ({ imagem })) },
    },
  };
  assert.match(validarConteudoDoTema(cliente, 'restaurante-noir').join('\n'), /8 fotografias distintas/);
});

test('restaurante aceita narrativa visual com cenas variadas', () => {
  const cliente = {
    blocos: {
      hero: { imagens: Array.from({ length: 5 }, (_, i) => ({ src: `/ambiente-${i}.webp` })) },
      vitrine: { itens: Array.from({ length: 5 }, (_, i) => ({ imagem: `/prato-${i}.webp` })) },
    },
  };
  assert.deepEqual(validarConteudoDoTema(cliente, 'restaurante-noir'), []);
});

test('odontologia bloqueia tratamentos, equipa e FAQ insuficientes', () => {
  const cliente = odontologiaValida();
  cliente.blocos.servicos.itens[1].imagem = '';
  cliente.blocos.equipa.membros = [];
  cliente.blocos.faq.itens = [];
  const erros = validarConteudoDoTema(cliente, 'odontologia');
  assert.equal(erros.length, 3);
  assert.match(erros[0], /fotografia/);
  assert.match(erros[1], /2 profissionais/);
  assert.match(erros[2], /faq\.itens/);
});

test('odontologia bloqueia fotos repetidas em tratamentos e equipa reais', () => {
  const cliente = odontologiaValida();
  cliente.blocos.servicos.itens[2].imagem = cliente.blocos.servicos.itens[0].imagem;
  cliente.blocos.equipa.membros[1].imagem = cliente.blocos.equipa.membros[0].imagem;
  const erros = validarConteudoDoTema(cliente, 'odontologia');
  assert.equal(erros.length, 2);
  assert.match(erros[0], /mesma fotografia/);
  assert.match(erros[1], /mesma fotografia/);
});

test('odontologia aceita um briefing visual completo', () => {
  assert.deepEqual(validarConteudoDoTema(odontologiaValida(), 'odontologia'), []);
});

test('clinica estetica bloqueia portefolio e prova social insuficientes', () => {
  const cliente = esteticaValida();
  cliente.blocos.vitrine.itens[1].depois = '';
  cliente.blocos.prova.itens.pop();
  const erros = validarConteudoDoTema(cliente, 'clinica-estetica');
  assert.equal(erros.length, 2);
  assert.match(erros[0], /cada item/);
  assert.match(erros[1], /3 testemunhos/);
});

test('clinica estetica aceita antes/depois e prova social completos', () => {
  assert.deepEqual(validarConteudoDoTema(esteticaValida(), 'clinica-estetica'), []);
});
