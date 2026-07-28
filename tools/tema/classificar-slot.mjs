#!/usr/bin/env node
/**
 * CLASSIFICAR-SLOT — propõe o slot real de uma dobra a partir do que ela CONTÉM.
 *
 * PORQUE ISTO EXISTE
 * O processamento em massa do banco (2026-07-24) despejou 383 de 552 dobras num slot
 * único, `destaque`, enquanto os slots que um site precisa de facto — prova, sobre, cta,
 * faq, equipa, precos — ficaram com 0 a 4 cada. Com esse inventário é impossível montar
 * um kit de nicho: não se faz um site de restaurante com 383 "destaque" e 1 "cta".
 *
 * Das 383, 194 vêm da categoria `secoes` do banco e são mesmo secções de página. As
 * outras ~189 vêm de `scroll`, `webgl-threejs`, `textos`, `parallax`, `physics` — essas
 * NÃO são secções, são efeitos que se aplicam sobre uma secção, e `destaque` está certo.
 *
 * O QUE ELA NÃO FAZ, E É DE PROPÓSITO
 * Não reescreve nada sozinha. Propõe, mostra a evidência que a levou à proposta, e deixa
 * a decisão para quem revê — pela mesma razão que a esteira não converte JS às cegas:
 * classificar mal é pior que não classificar, porque um slot errado põe a dobra a ser
 * oferecida ao cliente errado e ninguém percebe porquê.
 */
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

/**
 * Cada regra olha para o TEXTO real que a origem trazia (guardado em `slots[].exemplo`)
 * e para a forma da dobra. A ordem importa: a primeira que bate ganha, e as mais
 * específicas vêm primeiro, senão `sobre` (que é a mais genérica) engolia tudo.
 */
const REGRAS = [
  { slot: 'precos', re: /\b(€|\$|£)\s?\d|\/\s?(mês|mes|month|ano|year)\b|\bpreço|\bpricing\b|\bplano\b|\bsubscri/i },
  // FAQ apanha-se melhor pela FORMA (várias perguntas seguidas) que por palavra-chave: a
  // secao-28 era "Is Aurae suitable for all skin types? | How long does it take...?" e
  // nenhuma regra de palavra bateria. Ver `pareceFaq`.
  { slot: 'faq', re: /\bfaq\b|perguntas?\s+frequentes|\bdúvidas?\b|frequently\s+asked/i },
  { slot: 'prova', re: /\b(depoiment|testimonial|avalia|review|estrela|★|⭐)\b|disse\s+sobre|\bclientes?\s+dizem|hear\s+from\s+our|what\s+(our\s+)?clients/i },
  // CORRIGIDO: `\bteam\b` não casava com "teams" — a secao-171 ("Meet our teams") ficou de
  // fora por causa da fronteira de palavra. É o tipo de erro que passa despercebido porque
  // a regra "quase" funciona.
  { slot: 'equipa', re: /\b(equipa|equipe|teams?|founders?|co-?founder|ceo|cto|diretor|fundador)\b|meet\s+(our|the)\s+/i },
  // CORRIGIDO: faltavam as formas idiomáticas inglesas, que são a maioria do banco.
  // 7 secções de contacto ("Get in Touch", "Connect with us") ficaram por classificar.
  { slot: 'contacto', re: /\b(contact|contacto|fale\s+conn?osco|telefone|e-?mail|morada|endereço)\b|get\s+in\s+touch|connect\s+with\s+us|we'?re\s+here\s+to\s+help|visit\s+us|reach\s+out/i },
  { slot: 'servicos', re: /\b(serviç|services?|especialidade|expertise|solutions?)\b|o\s+que\s+fazemos|what\s+we\s+do|we\s+help\s+|our\s+commitment/i },
  { slot: 'passos', re: /\b(passos?|steps?|processo|process)\b|como\s+funciona|how\s+it\s+works|your\s+journey/i },
  { slot: 'sobre', re: /\b(for\s+over\s+\d+\s+years|our\s+mission|our\s+story|about\s+us)\b|desde\s+\d{4}|há\s+mais\s+de\s+\d+\s+anos|trusted\s+since/i },
  { slot: 'cta', re: /\b(começar|comece|agenda|marcar|reservar)\b|book\s+now|get\s+started|pedir\s+orçamento|ready\s+to\s+(upgrade|elevate|start)/i },
  { slot: 'numeros', re: /\b\d{2,}\s?(\+|k|m|%)\b|\banos\s+de\b|\bclientes\s+atendidos|\bprojetos\s+entregues/i },
  { slot: 'logos', re: /\b(parceiros?|trusted\s+by|as\s+seen\s+(in|on)|marcas?)\b|clientes?\s+que/i },
];

/** Uma secção com 2+ textos terminados em "?" é um FAQ, mesmo sem dizer "FAQ". */
function pareceFaq(textos) {
  return textos.filter(t => t.trim().endsWith('?')).length >= 2;
}

/** Categorias do banco que são EFEITO, não secção: ficam em `destaque` de propósito. */
const CATEGORIAS_DE_EFEITO = new Set([
  'scroll', 'animacoes', 'webgl-threejs', 'textos', 'animacoes-svg', 'animacoes-de-rolagem',
  'ui-effects', 'efeitos-3d', 'parallax', 'loaders', 'physics', 'efeitos-mouse',
  'checkbox', 'animacoes-de-grid',
]);

export function categoriaDeOrigem(origem = '') {
  return origem.split('/')[2] || '';
}

/**
 * @returns {{slot: string|null, motivo: string, evidencia: string|null, confianca: 'alta'|'media'|'nenhuma'}}
 */
export function proporSlot(variante) {
  const categoria = categoriaDeOrigem(variante.origem);
  if (CATEGORIAS_DE_EFEITO.has(categoria)) {
    return { slot: null, motivo: `categoria de origem "${categoria}" é efeito, não secção`, evidencia: null, confianca: 'nenhuma' };
  }

  const textos = (variante.slots || []).filter(s => s.tipo === 'texto').map(s => s.exemplo || '');
  const corpo = textos.join(' · ');
  if (!corpo.trim()) {
    return { slot: null, motivo: 'sem texto de origem para inferir', evidencia: null, confianca: 'nenhuma' };
  }

  if (pareceFaq(textos)) {
    return { slot: 'faq', motivo: 'duas ou mais perguntas seguidas — é um FAQ mesmo sem dizer "FAQ"', evidencia: textos.find(t => t.trim().endsWith('?'))?.slice(0, 60) || null, confianca: 'alta' };
  }

  for (const regra of REGRAS) {
    const m = corpo.match(regra.re);
    if (m) {
      // duas regras diferentes a bater no mesmo corpo = sinal fraco, marca-se como média
      const outras = REGRAS.filter(r => r.slot !== regra.slot && r.re.test(corpo)).length;
      return {
        slot: regra.slot,
        motivo: `texto de origem bate com "${regra.slot}"${outras ? ` (mas ${outras} outra(s) regra(s) também batem)` : ''}`,
        evidencia: m[0].slice(0, 60),
        confianca: outras ? 'media' : 'alta',
      };
    }
  }

  const imagens = (variante.slots || []).filter(s => s.tipo === 'imagem').length;
  if (imagens >= 4) {
    return { slot: 'vitrine', motivo: `${imagens} imagens e nenhum texto característico`, evidencia: `${imagens} slots de imagem`, confianca: 'media' };
  }
  return { slot: null, motivo: 'nenhuma regra bateu', evidencia: corpo.slice(0, 70), confianca: 'nenhuma' };
}

/**
 * REGISTO — a escada de intensidade estética do sistema (ver ESCADA em compor-tema.mjs).
 * `sobrio` só recebe dobras sóbrias; `editorial` recebe sóbrio+editorial; `cinematografico`
 * recebe tudo. Um cliente contido nunca pode apanhar a dobra com partículas.
 *
 * 544 das 552 dobras não tinham registo, e "registo por definir" era o ponto de `_rever`
 * mais comum do catálogo inteiro — sozinho impedia QUALQUER dobra de ser elegível. Não é
 * julgamento visual: é uma leitura do quanto a peça se mexe e chama a atenção, e isso
 * lê-se nos sinais técnicos que ela já declara.
 *
 * A inferência é conservadora por desenho: na dúvida devolve `editorial`, o meio da escada,
 * porque errar para `sobrio` esconderia a dobra de quem a podia usar, e errar para
 * `cinematografico` poria uma peça barulhenta num cliente que pediu contenção — e esse
 * segundo erro é o que estraga um site entregue.
 */
/**
 * ERRO CORRIGIDO 2026-07-27: a primeira versão inferia o registo de sinais TÉCNICOS ("usa
 * GSAP?", "usa WebGL?"). Resultado medido: das 552 dobras, só 46 saíram `sobrio`, e TODAS
 * em botão, cursor, destaque e vitrine — zero em slots de secção. O nicho de odontologia,
 * que é sóbrio por decisão de negócio, ficou sem um único candidato para hero, serviços,
 * equipa ou contacto, e o kit era impossível de montar.
 *
 * A causa é conceptual: praticamente toda secção real do banco anima com GSAP, porque é
 * assim que estes componentes foram feitos. Registo é um TETO ESTÉTICO, o quão alto a peça
 * fala, não uma impressão digital de biblioteca. Uma secção com um fade suave em GSAP é
 * sóbria; uma com partículas a explodir é cinematográfica. As duas importam GSAP.
 *
 * Agora lê-se o CARÁTER do movimento e do visual, no CSS e no JS, não o `import`.
 */
// SEGUNDA CORREÇÃO, mesma sessão: a primeira lista era frouxa e mandou 359 de 549 para
// `cinematografico` (contra 173 antes), incluindo 100% do slot `servicos`. Os culpados eram
// `\bcanvas\b`, que casa com qualquer classe CSS chamada "canvas", e `mix-blend-mode`, que é
// técnica subtil de uso comum. Trocar uma regra frouxa por outra frouxa no sentido inverso é
// o mesmo erro; o que se exige agora é PROVA de espetáculo, não indício.
const SINAIS_CINEMATOGRAFICO = [
  /THREE\.|WebGLRenderer|new\s+Scene\(|getContext\(\s*['"]webgl/i,   // 3D a sério
  /createElement\(\s*['"]canvas|requestAnimationFrame[\s\S]{0,200}getContext/i, // canvas desenhado por JS
  /particle|confetti|\bphysics\b|matter\.js/i,
  /perspective\s*:\s*\d[\s\S]{0,300}rotate3d|rotate3d[\s\S]{0,300}perspective/i, // 3D combinado
  // NÃO incluir `filter: blur(...)`. Terceira correção da mesma regra: um blur de 40px é
  // fundo suave decorativo, usado a toda a hora em gradientes ambientais, e sozinho mandou
  // as 11 dobras do slot `servicos` (100% do slot) para cinematográfico. Blur é indício de
  // decoração, não prova de espetáculo.
];
const SINAIS_EDITORIAL = [
  /ScrollTrigger|scrub|pin\s*:/i, /SplitText|splitting|splittype/i,
  /clip-path/i, /animation[^;]*infinite/i, /marquee/i,
  /scale\(\s*(?:1\.[4-9]|[2-9])/i,                        // escala grande, gesto visível
  /skew|matrix3d/i,
];

export function inferirRegisto(variante, fontes = {}) {
  // `fontes` traz o CSS e o JS quando disponíveis; sem eles cai-se nos metadados, que é o
  // melhor que há mas é mais pobre, e por isso o resultado é declarado como tal.
  const texto = `${fontes.css || ''}\n${fontes.js || ''}`;
  const categoria = categoriaDeOrigem(variante.origem);

  // A categoria de origem continua a mandar quando é inequívoca: um componente da pasta
  // webgl-threejs é cinematográfico independentemente do que o CSS diga.
  if (/webgl|efeitos-3d|physics/.test(categoria))
    return { registo: 'cinematografico', motivo: `categoria de origem "${categoria}"` };

  if (texto.trim()) {
    if (SINAIS_CINEMATOGRAFICO.some(re => re.test(texto)))
      return { registo: 'cinematografico', motivo: 'movimento de espetáculo no código (3D, partículas, canvas ou blend)' };
    if (SINAIS_EDITORIAL.some(re => re.test(texto)))
      return { registo: 'editorial', motivo: 'movimento conduzido e visível (scroll, split, escala grande ou loop)' };
    // Chegar aqui significa: mexe-se, mas só em opacidade e deslocação curta. Isso é sóbrio,
    // use GSAP ou não. É esta linha que devolve candidatos ao nicho de odontologia.
    return { registo: 'sobrio', motivo: 'só opacidade e deslocação curta, sem gesto de espetáculo' };
  }

  if (/scroll|parallax|animacoes/.test(categoria))
    return { registo: 'editorial', motivo: `categoria de origem "${categoria}", sem código para ler` };
  return { registo: 'sobrio', motivo: 'sem código nem categoria que indiquem movimento forte' };
}

export function varrer(base = join(ROOT, 'themes', 'base', 'dobras')) {
  const achados = [];
  for (const slot of readdirSync(base)) {
    let entradas;
    try { entradas = readdirSync(join(base, slot)); } catch { continue; }
    for (const nome of entradas) {
      const vp = join(base, slot, nome, 'variant.json');
      if (!existsSync(vp)) continue;
      const v = JSON.parse(readFileSync(vp, 'utf8'));
      achados.push({ slotAtual: slot, nome, variante: v, proposta: proporSlot(v) });
    }
  }
  return achados;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const achados = varrer().filter(a => a.slotAtual === 'destaque');
  const porProposta = {};
  for (const a of achados) {
    const chave = a.proposta.slot ? `${a.proposta.slot} (${a.proposta.confianca})` : `— ficam em destaque: ${a.proposta.motivo.split('"')[0].trim()}`;
    (porProposta[chave] ||= []).push(a);
  }
  console.log(`\nPROPOSTA DE RECLASSIFICAÇÃO — ${achados.length} dobras hoje em "destaque"\n`);
  for (const [chave, lista] of Object.entries(porProposta).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`${String(lista.length).padStart(4)}  ${chave}`);
    for (const a of lista.slice(0, 3)) console.log(`        ex: ${a.nome} — "${a.proposta.evidencia || ''}"`);
  }
  console.log('\nNada foi alterado. Isto é só a proposta.\n');
}
