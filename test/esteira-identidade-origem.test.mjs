/**
 * A esteira existe para arrancar a IDENTIDADE DA ORIGEM e deixar só a mecânica.
 * Estes testes cobrem três vazamentos reais encontrados no lote de 552 dobras
 * (2026-07-27), todos com a mesma forma: a peça saía "processada" mas continuava
 * a falar do dono do template, não do cliente.
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import { tokenizarCss } from '../tools/tema/lib/css.mjs';
import { classificarJs, escoparJs, extrairSlots } from '../tools/tema/esteira.mjs';

test('@import de fonte de CDN é removido do CSS (66 dobras traziam a fonte da origem de volta)', () => {
  const css = `@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
    .a { color: #ffffff; }`;
  const r = tokenizarCss(css, 'teste');

  assert.equal(r.relatorio.importsFonteRemovidos, 1);
  assert.doesNotMatch(r.css, /@import/);
  assert.doesNotMatch(r.css, /fonts\.googleapis/);
});

test('@import que não é de fonte não é tocado — remover às cegas partiria CSS legítimo', () => {
  const r = tokenizarCss('@import url("./base.css"); .a { color: #fff; }', 'teste');

  assert.equal(r.relatorio.importsFonteRemovidos, 0);
  assert.match(r.css, /@import url\("\.\/base\.css"\)/);
});

test('url() de host externo é REGISTADO mas não removido (apagar background parte a peça)', () => {
  const r = tokenizarCss('.a { background-image: url("https://cdn.exemplo.com/foto.jpg"); }', 'teste');

  assert.deepEqual(r.relatorio.urlsExternas, ['https://cdn.exemplo.com/foto.jpg']);
  // continua lá de propósito: a decisão de substituir por slot ou asset local é da revisão
  assert.match(r.css, /cdn\.exemplo\.com/);
});

test('href para o site da origem vira slot — o clique não pode levar o visitante do cliente para lá', () => {
  const { jsx, slots } = extrairSlots('<a href="https://tympanus.net/Development/Foo/">{s.acao}</a>');

  assert.doesNotMatch(jsx, /tympanus\.net/);
  assert.match(jsx, /href=\{s\.destino \|\| '#'\}/);
  const link = slots.find(s => s.tipo === 'link');
  assert.equal(link.exemplo, 'https://tympanus.net/Development/Foo/');
});

test('href relativo do próprio componente não é tocado', () => {
  const { jsx, slots } = extrairSlots('<a href="#secao">ir</a>');

  assert.match(jsx, /href="#secao"/);
  assert.equal(slots.filter(s => s.tipo === 'link').length, 0);
});

test('botão recebe onClick uma única vez — correr a esteira duas vezes dá o mesmo ficheiro', () => {
  const uma = extrairSlots('<button class="x">ir</button>').jsx;
  const duas = extrairSlots(uma).jsx;

  // contar o ATRIBUTO, não a string "onClick": ela aparece 2x por ligação
  // (`onClick={s.onClick}`), e contar a string dava um falso positivo.
  const atributos = t => (t.match(/onClick=/g) || []).length;

  assert.equal(atributos(uma), 1);
  assert.equal(atributos(duas), 1,
    'idempotência: foi um script avulso a correr 2x que deixou 24 dobras com onClick duplicado');
  assert.equal(uma, duas, 'a segunda passagem tem de dar exatamente o mesmo ficheiro');
});

test('vídeo de fundo vira slot — hero-4/hero-6 transmitiam MB de CDN de terceiro por visita', () => {
  const { jsx, slots } = extrairSlots('<video autoplay={true}><source src="https://cdn.exemplo.com/f.mp4" type="video/mp4" /></video>');

  assert.doesNotMatch(jsx, /cdn\.exemplo\.com/);
  assert.match(jsx, /src=\{s\.video\}/);
  const v = slots.find(s => s.tipo === 'video');
  assert.equal(v.exemplo, 'https://cdn.exemplo.com/f.mp4');
  assert.equal(v.externa, true);
});

test('classificação do JS separa o barato do caro (485 dobras tinham o mesmo aviso genérico)', () => {
  assert.equal(classificarJs('').categoria, 'sem-js');
  assert.equal(classificarJs('document.querySelectorAll(".x").forEach(e => e.classList.add("y"))').categoria, 'dom-simples');
  assert.equal(classificarJs('window.scrollY; document.body.classList.add("x")').categoria, 'global-duro');
  assert.equal(classificarJs('import gsap from "gsap";').categoria, 'modulo-es');
  assert.equal(classificarJs('const r = new THREE.WebGLRenderer();').categoria, 'webgl');

  // só o dom-simples é escopável: nas outras, trocar o prefixo seria mentira
  assert.equal(classificarJs('document.querySelector(".a")').escopavel, true);
  assert.equal(classificarJs('document.body.append(x)').escopavel, false);
});

test('escopar o JS troca a busca global pela busca dentro da própria dobra', () => {
  const js = escoparJs('document.querySelectorAll(".c"); document.getElementById("alvo");');

  assert.match(js, /raiz\.current\.querySelectorAll\('?\.?"?\.c/);
  assert.match(js, /raiz\.current\.querySelector\('#alvo'\)/);
  assert.doesNotMatch(js, /\bdocument\./);
});
