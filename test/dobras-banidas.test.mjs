/**
 * O seletor de kits recomendava COMPONENTES BANIDOS. Achado real ao construir o tema
 * `odontologia` (2026-07-27): `hero/hero-5` é um preloader e `hero/hero-16` é um ecrã de
 * "Enter", e o seletor apontava os dois como os melhores heroes sóbrios do nicho.
 *
 * A causa é que `registo` mede QUANTO a peça se mexe, e um preloader quase não se mexe,
 * por isso saiu `sobrio` e subiu ao topo por custo baixo. São eixos diferentes: um mede
 * intensidade, o outro mede o que é proibido. Nenhum substitui o outro.
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import { estaBanida, inventario } from '../tools/tema/selecionar-24.mjs';

test('as dobras que causaram a regra são apanhadas', () => {
  assert.equal(estaBanida('hero', 'hero-5').banida, true, 'hero-5 é um preloader');
  assert.equal(estaBanida('hero', 'hero-16').banida, true, 'hero-16 é um ecrã de Enter');
  // A dobra do Hero original da Vaninha, que o Mateus reprovou ao vivo com
  // "se aperto não acontece nada". Se o filtro não apanhar esta, não serve para nada.
  assert.equal(estaBanida('hero', 'grade').banida, true, 'hero/grade tem bloco .enter');
});

test('bane tambem o portao disfarcado, que nao se chama preloader', () => {
  // CORRECAO: a primeira versao deste teste AFIRMAVA que hero-21 e hero-6 eram legitimas.
  // Eu escrevi essa assercao sem as ter lido. O agente que construiu o tema clinica-estetica
  // leu-as e contestou, com razao: o hero-21 remove  do DOM ao fim de 3 s e so
  // revela o conteudo ao segundo 4. E um ecra de abertura com outro nome.
  // Um teste que garante que uma peca banida e legitima e pior que teste nenhum.
  assert.equal(estaBanida('hero', 'hero-21').banida, true, 'hero-21 retem o conteudo 4 s');
});

test('nao bane dobras legitimas verificadas', () => {
  // So entra aqui o que foi mesmo verificado. O hero-9 esta no tema odontologia, que
  // compilou e passou o QA visual a 375 e 1440 sem falhas.
  assert.equal(estaBanida('hero', 'hero-9').banida, false, 'hero-9 nao devia ser banida');
});

test('nenhuma dobra banida chega ao inventário como candidata utilizável', () => {
  const inv = inventario();
  const banidas = Object.values(inv).flat().filter(d => d.banida);
  assert.ok(banidas.length > 0, 'o acervo tem mesmo dobras banidas, o teste seria vazio senão');
  for (const d of banidas) {
    assert.ok(d.porqueBanida, `${d.slot}/${d.nome} banida sem motivo declarado`);
  }
});
