#!/usr/bin/env node
/**
 * ESTEIRA — traz um componente do banco para dentro do sistema, como DOBRA.
 *
 * Uso:
 *   node tools/tema/esteira.mjs <pasta-do-componente> --slot hero --nome cartaz [--registo editorial]
 *   node tools/tema/esteira.mjs bank/_componentes/secoes/secao-185 --slot prova --nome mosaico
 *
 * PORQUE ISTO EXISTE
 * Os 613 componentes do banco vêm de 613 sistemas de design diferentes. Foi isso que produziu
 * as 4 famílias de fonte a brigar no mesmo site e a marca alheia servida ao cliente. Costurá-los
 * diretamente nunca vai dar melhor que remendo. Mas a MECÂNICA deles é boa e é material caro.
 *
 * A esteira separa as duas coisas: fica com a mecânica (a estrutura e a animação) e deita fora
 * a identidade de origem (fonte, cor, peso, texto, fotos). O que sai é uma dobra que só sabe
 * falar a língua do NOSSO sistema, e que se combina com qualquer outra sem colidir.
 *
 * O QUE ELA NÃO FAZ, E É DE PROPÓSITO
 * Não decide o que é conteúdo e o que é estrutura, não escolhe as pré-condições, não escolhe
 * o registo. Isso é julgamento, e uma esteira que finge julgar produz exatamente o remendo que
 * viemos eliminar. Ela faz o trabalho mecânico, deixa o scaffold pronto, e REPORTA o que ficou
 * por decidir. A revisão humana é curta porque o trabalho chato já está feito.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, cpSync, statSync } from 'node:fs';
import { join, resolve, dirname, basename, extname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { estadoInicialDobra } from './dobras.mjs';
import { tokenizarCss as tokenizarCssPuro, mapearCores as mapearCoresPuras } from './lib/css.mjs';
import { acharImagensPresasAoCss as acharImagensPresasAoCssPuro, sugerirPrecondicoes as sugerirPrecondicoesPuras } from './lib/metadata.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');

/* ---------------------------------------------------------------- *
 * 1. Extrair as partes de um componente do banco
 * ---------------------------------------------------------------- */

const LIBS_CONHECIDAS = {
  'gsap.min.js': 'gsap', 'gsap/dist/gsap': 'gsap',
  'ScrollTrigger': 'scrolltrigger', 'Flip': 'flip', 'SplitText': 'splittext',
  'lenis': 'lenis', 'three': 'three', 'swiper': 'swiper', 'matter': 'matter',
  'imagesloaded': 'imagesloaded', 'splitting': 'splitting', 'splittype': 'splittype',
};

/** Alguns ZIPs do banco extraem para uma subpasta (ex. `hero-14/IntroGridMotionTransition-main/`)
 *  em vez de terem o `index.html` na raiz. Procurar 1 nível abaixo antes de desistir. */
function acharHtml(abs) {
  for (const f of ['index.html', 'demo.html']) if (existsSync(join(abs, f))) return { html: join(abs, f), raiz: abs };
  for (const nome of readdirSync(abs)) {
    const sub = join(abs, nome);
    if (!statSync(sub).isDirectory()) continue;
    for (const f of ['index.html', 'demo.html']) if (existsSync(join(sub, f))) return { html: join(sub, f), raiz: sub };
  }
  return null;
}

export function extrairPartes(dir) {
  const abs0 = resolve(ROOT, dir);
  const achado = acharHtml(abs0);
  if (!achado) throw new Error(`sem index.html em ${dir} (procurado na raiz e 1 nível abaixo)`);
  const { html: htmlPath, raiz: abs } = achado;
  const doc = readFileSync(htmlPath, 'utf8');

  // ACHADO REAL (8 dobras corrompidas no lote de 2026-07-24: gooey-search-interaction,
  // animacao-3d-4, animated-tabs, image-collage-toggle, 3d-hover-menu, menu-marquee,
  // carousel-3d-1, carrosel-3d-2): alguns componentes do banco têm um arquivo chamado
  // "index.html" que na verdade é código-fonte JSX/JS cru (import React, export default
  // function App() {...}) salvo com a extensão errada — não é HTML, não tem <body>. Sem
  // esta guarda, `extrairPartes` seguia em frente, `mBody` não encontrava `<body>` e
  // devolvia o DOCUMENTO INTEIRO como se fosse o corpo, e o código JS acabava literalmente
  // como TEXTO dentro do JSX gerado — dobra visualmente quebrada (o código aparece escrito
  // na tela) sem erro nenhum, porque tecnicamente "funcionava" (gerava um Dobra.jsx válido
  // sintaticamente, só que com conteúdo sem sentido). Falhar alto aqui, cedo, é melhor que
  // produzir lixo silencioso — é exatamente a lição que motivou esta ferramenta inteira.
  if (!/<html[\s>]|<body[\s>]|<!doctype/i.test(doc) && /\bimport\s+React\b|\bexport\s+default\s+function\b/.test(doc)) {
    throw new Error(`"${htmlPath}" não é HTML — parece ser JSX/JS de app React cru salvo com extensão .html (sem <html>/<body>, com "import React"/"export default function"). Não processável por esta esteira; precisaria de adaptação manual do componente React pra dobra.`);
  }

  // corpo
  const mBody = doc.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let html = mBody ? mBody[1] : doc;
  // fora com os scripts inline do corpo: o JS vai à parte, e deixá-los aqui duplicava tudo
  const scriptsInline = [];
  html = html.replace(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi, (_, js) => { scriptsInline.push(js); return ''; });
  // BUG REAL CORRIGIDO (achado em 382 de 552 dobras, 2026-07-24): a regex acima só remove
  // <script> SEM src (o lookahead negativo `(?!...src=)` existe exatamente pra NÃO comer
  // scripts com src aqui — mas o código mais abaixo, que lê o CONTEÚDO desses scripts com
  // src pra virar import, nunca REMOVIA a tag do HTML. Resultado: toda tag
  // `<script src="...">` (local OU de CDN externo) sobrevivia intacta dentro do JSX final
  // — em produção isso é uma tag <script> real no DOM, pedindo um caminho local que não
  // existe (404) ou, pior, um CDN externo de terceiro (a mesma classe de vazamento que a
  // regra de "zero CDN" do projeto existe pra proibir). As libs já entram por `import` no
  // topo do ficheiro gerado (ver mais abaixo); a tag <script> nunca deveria sobreviver.
  html = html.replace(/<script\b[^>]*\bsrc=[^>]*>\s*<\/script>/gi, '');

  // CSS: <style> do documento + ficheiros referenciados
  let css = '';
  for (const m of doc.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) css += m[1] + '\n';
  for (const m of doc.matchAll(/<link[^>]+href=["']([^"']+\.css)["']/gi)) {
    const f = join(abs, m[1]);
    if (existsSync(f)) css += readFileSync(f, 'utf8') + '\n';
  }
  for (const f of readdirSync(abs).filter(f => f.endsWith('.css'))) {
    const conteudo = readFileSync(join(abs, f), 'utf8');
    if (!css.includes(conteudo.slice(0, 200))) css += conteudo + '\n';
  }

  // JS: ficheiros locais + inline
  let js = scriptsInline.join('\n');
  for (const m of doc.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)) {
    const src = m[1];
    if (/^https?:\/\//.test(src)) continue;           // CDN: vem do motor, não do bloco
    const f = join(abs, src);
    if (existsSync(f)) js = readFileSync(f, 'utf8') + '\n' + js;
  }

  // libs (dos <script src> de CDN e do próprio código)
  const libs = new Set();
  for (const [chave, nome] of Object.entries(LIBS_CONHECIDAS))
    if (doc.includes(chave) || js.includes(chave)) libs.add(nome);

  // o que o componente puxava de fora e nós não queremos
  const fontesOrigem = [...doc.matchAll(/<link[^>]+href=["']([^"']*(?:fonts\.googleapis|typekit|cdnfonts)[^"']*)["']/gi)].map(m => m[1]);

  return { html, css, js, libs: [...libs], fontesOrigem, dir: abs };
}

/* ---------------------------------------------------------------- *
 * 2. Tokenizar o CSS: arrancar a identidade de origem
 * ---------------------------------------------------------------- */

const cortarComentarios = s => s.replace(/\/\*[\s\S]*?\*\//g, '');

/**
 * Substitui font-family, cor e peso do template pelos nossos tokens.
 *
 * As cores são o caso difícil e a decisão aqui é deliberada: NÃO se remapeia hex
 * automaticamente. Um gerador não sabe distinguir a cor de marca de um cinza de borda
 * ou de uma sombra, e trocar às cegas parte o contraste. O que se faz é MARCAR cada hex
 * com um comentário para a revisão, e reportar a lista. Marcar é honesto; adivinhar não.
 */
/**
 * Mapeia as cores de um template de origem para os nossos tokens, por LUMINÂNCIA.
 *
 * Porque luminância e não matiz: o matiz da origem é justamente o que queremos deitar fora
 * (é a marca de outra pessoa). O que interessa preservar é o PAPEL de cada cor na composição,
 * e o papel lê-se no brilho: o quase-preto era fundo, o quase-branco era texto sobre ele, os
 * do meio eram superfícies e bordas. Trocando por luminância, a dobra mantém a estrutura de
 * contraste que o autor desenhou e passa a falar a cor do nosso cliente.
 *
 * A cor mais SATURADA da origem é caso à parte: era o acento, e vira o nosso acento. É a
 * única em que o matiz importava, e é por isso que é a única que não segue a régua do brilho.
 */
function mapearCores(css) {
  // CORRIGIDO (achado ao converter bank/_componentes/botoes/glass-button-red): quando o
  // MESMO hex aparece com e sem canal alfa no mesmo CSS (ex. "#ffffff" numa regra e
  // "#ffffffaa" noutra), a troca por substring (`.split().join()`, abaixo) processava o
  // mais curto primeiro e ele batia como PREFIXO do mais longo, corrompendo-o pra
  // "var(--base-100)aa" — os 2 dígitos de alfa sobravam soltos, CSS inválido. Ordenar do
  // mais longo pro mais curto garante que "#ffffffaa" é trocado inteiro antes de
  // "#ffffff" ter chance de morder o prefixo dele.
  const hexes = [...new Set((css.match(/#[0-9a-fA-F]{3,8}\b/g) || []).map(h => h.toLowerCase()))]
    .sort((a, b) => b.length - a.length);
  if (!hexes.length) return { css, mapeadas: 0, acento: null };

  const info = hexes.map(h => {
    let s = h.replace('#', '');
    if (s.length === 3) s = [...s].map(c => c + c).join('');
    if (s.length === 8) s = s.slice(0, 6);
    if (s.length !== 6) return null;
    const [r, g, b] = [0, 2, 4].map(i => parseInt(s.slice(i, i + 2), 16));
    const lin = v => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return { hex: h, L, sat: max === 0 ? 0 : (max - min) / max };
  }).filter(Boolean);

  // o acento da origem: mais saturado, e com saturação que se note
  const acento = [...info].sort((a, b) => b.sat - a.sat)[0];
  const ehAcento = acento && acento.sat > 0.35 ? acento.hex : null;

  // os degraus do sistema, do mais claro ao mais escuro
  const DEGRAUS = [
    { token: '--base-100', L: 0.78 }, { token: '--base-200', L: 0.42 },
    { token: '--base-300', L: 0.18 }, { token: '--base-400', L: 0.08 },
    { token: '--base-500', L: 0.03 }, { token: '--base-600', L: 0.012 },
  ];

  // CORRIGIDO (achado no mesmo componente, mesma revisão): `hexes` é lowercased pra
  // deduplicar, mas o CSS de origem mistura maiúsculas e minúsculas (ex. "#FFEBEE" no
  // gradiente, "#ffffff" no glow) — `.split(c.hex)` é sensível a maiúsculas, então as
  // variantes em maiúscula nunca batiam e sobreviviam até o catch-all no fim desta
  // função, que substitui TUDO que sobrou por um único token fixo (--base-300),
  // colapsando cores bem diferentes (texto branco E fundo) no MESMO token — o botão
  // saía com o texto da cor do próprio fundo, invisível. Regex com flag "i" substitui
  // qualquer capitalização do mesmo hex.
  let mapeadas = 0;
  for (const c of info) {
    const re = new RegExp(c.hex, 'gi');
    if (c.hex === ehAcento) {
      css = css.replace(re, 'var(--acento)');
      mapeadas++;
      continue;
    }
    const alvo = DEGRAUS.reduce((a, d) => (Math.abs(d.L - c.L) < Math.abs(a.L - c.L) ? d : a));
    css = css.replace(re, `var(${alvo.token})`);
    mapeadas++;
  }
  // as formas maiúsculas e curtas que sobraram
  css = css.replace(/#[0-9a-fA-F]{3,8}\b/g, 'var(--base-300)');
  return { css, mapeadas, acento: ehAcento };
}

export function tokenizarCss(cssBruto, scope, { mapearCor = true } = {}) {
  let css = cortarComentarios(cssBruto);
  const relatorio = { fontesTrocadas: 0, pesosTrocados: 0, hexEncontrados: [], importantsRemovidos: 0, coresMapeadas: 0, acentoOrigem: null };

  // fontes → tokens do sistema
  css = css.replace(/font-family\s*:\s*([^;}]+)([;}])/gi, (m, valor, fim) => {
    if (/var\(--fonte-/.test(valor)) return m;
    relatorio.fontesTrocadas++;
    const mono = /mono|courier|consol/i.test(valor);
    return `font-family: var(${mono ? '--fonte-mono' : '--fonte-corpo'})${fim}`;
  });

  // display herda a fonte de display do sistema
  css = css.replace(/(^|[},])\s*([^{}]*\b(h1|h2|h3|h4|h5|h6)\b[^{}]*)\{/gi,
    (m) => m);   // os seletores mantêm-se; a fonte vem do estrutura.css

  // !important de origem: quase sempre o autor a brigar com o próprio framework dele
  const antesImp = css.length;
  css = css.replace(/\s*!important/gi, () => { relatorio.importantsRemovidos++; return ''; });

  // hex: registar antes de mapear, para o relatório dizer de onde se partiu
  for (const m of css.matchAll(/#[0-9a-fA-F]{3,8}\b/g))
    if (!relatorio.hexEncontrados.includes(m[0])) relatorio.hexEncontrados.push(m[0]);

  if (mapearCor) {
    const r = mapearCores(css);
    css = r.css;
    relatorio.coresMapeadas = r.mapeadas;
    relatorio.acentoOrigem = r.acento;
  }

  // escopar tudo debaixo do data-blk da dobra
  css = escopar(css, `[data-dobra="${scope}"]`);

  return { css, relatorio };
}

/** Prefixa cada seletor de topo. Parser por chaves, não regex de linha: o CSS destes
 *  componentes tem @media aninhado e seletor multi-linha, e regex ingénua parte ambos. */
function escopar(css, prefixo) {
  const out = [];
  let i = 0;
  while (i < css.length) {
    const abre = css.indexOf('{', i);
    if (abre === -1) { out.push(css.slice(i)); break; }
    const cabeca = css.slice(i, abre).trim();
    const fecho = fecharBloco(css, abre);
    const corpo = css.slice(abre + 1, fecho);

    if (cabeca.startsWith('@')) {
      // @media/@supports: escopar o interior, manter a condição
      if (/^@(media|supports|container|layer)/i.test(cabeca)) out.push(`${cabeca}{${escopar(corpo, prefixo)}}`);
      else out.push(`${cabeca}{${corpo}}`);          // @keyframes/@font-face ficam globais
    } else {
      const sels = cabeca.split(',').map(s => s.trim()).filter(Boolean).map(s => {
        if (/^(html|:root)$/i.test(s)) return prefixo;            // globais viram o escopo
        if (/^body$/i.test(s)) return prefixo;
        if (/^\*$/.test(s)) return `${prefixo} *`;
        return `${prefixo} ${s}`;
      });
      out.push(`${sels.join(',')}{${corpo}}`);
    }
    i = fecho + 1;
  }
  return out.join('\n');
}

function fecharBloco(s, abre) {
  let d = 0;
  for (let i = abre; i < s.length; i++) {
    if (s[i] === '{') d++;
    else if (s[i] === '}') { d--; if (d === 0) return i; }
  }
  return s.length - 1;
}

/* ---------------------------------------------------------------- *
 * 3. HTML → JSX
 * ---------------------------------------------------------------- */

const ATRIBUTOS = {
  class: 'className', for: 'htmlFor', srcset: 'srcSet', crossorigin: 'crossOrigin',
  tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength', autoplay: 'autoPlay',
  autocomplete: 'autoComplete', novalidate: 'noValidate', enctype: 'encType',
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray', 'stroke-dashoffset': 'strokeDashoffset',
  'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'clip-path': 'clipPath',
  'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity', 'text-anchor': 'textAnchor',
  'font-size': 'fontSize', 'font-family': 'fontFamily', 'font-weight': 'fontWeight',
  'xlink:href': 'xlinkHref', 'gradientunits': 'gradientUnits', 'viewbox': 'viewBox',
  'preserveaspectratio': 'preserveAspectRatio',
};
const VAZIAS = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr']);

/**
 * Marca as imagens de `style="background-image:url(X)"` ANTES de `htmlParaJsx` converter
 * o atributo para `style={{...}}`. É PRECISO vir antes: depois da conversão, a URL vive dentro
 * de uma string JS (`'url(X)'`), sem aspas duplas para o regex de estilo reconhecer, e a esteira
 * saía a dizer "0 imagem" para blocos que tinham 26 fotos, todas erradamente invisíveis.
 * Devolve o HTML com um marcador de texto simples no lugar da URL (sobrevive à conversão de
 * `htmlParaJsx` porque não é aspas nem chaveta) e a lista de slots encontrados.
 */
function marcarImagensDeEstiloInline(html) {
  const slots = [];
  let n = 0;
  const marcado = html.replace(
    /\sstyle=(["'])([^"']*?background-image\s*:\s*url\(\s*['"]?([^'")]+?)['"]?\s*\)[^"']*?)\1/gi,
    (m, aspas, valorCompleto, url) => {
      n++;
      const nome = `imagem${n > 1 ? n : ''}`;
      const marca = `__ESTEIRA_SLOT_${nome}__`;
      slots.push({ nome, tipo: 'imagem', exemplo: url, externa: /^https?:\/\//.test(url), viaBackground: true });
      const novoValor = valorCompleto.replace(/url\(\s*['"]?[^'")]+?['"]?\s*\)/i, `url(${marca})`);
      return ` style=${aspas}${novoValor}${aspas}`;
    }
  );
  return { html: marcado, slots };
}

export function htmlParaJsx(html) {
  let jsx = html;
  const notas = [];

  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '');                    // comentários HTML fora

  // style="a:b;c:d" → style={{a:'b',c:'d'}}
  jsx = jsx.replace(/\bstyle\s*=\s*"([^"]*)"/gi, (_, s) => {
    const props = s.split(';').map(p => p.trim()).filter(Boolean).map(p => {
      const i = p.indexOf(':');
      if (i === -1) return null;
      const chave = p.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const valor = p.slice(i + 1).trim();
      return `${/^[a-zA-Z][\w]*$/.test(chave) ? chave : `'${chave}'`}: '${valor.replace(/'/g, "\\'")}'`;
    }).filter(Boolean);
    return `style={{${props.join(', ')}}}`;
  });

  // atributos com nome diferente em JSX
  jsx = jsx.replace(/\s([a-zA-Z-:]+)\s*=/g, (m, attr) => {
    const novo = ATRIBUTOS[attr.toLowerCase()] || ATRIBUTOS[attr];
    return novo ? ` ${novo}=` : m;
  });
  // data-* e aria-* mantêm-se; qualquer outro com hífen não é válido em JSX
  for (const m of jsx.matchAll(/\s([a-z]+-[a-z-]+)=/gi))
    if (!/^(data|aria)-/i.test(m[1])) notas.push(`atributo "${m[1]}" pode não ser válido em JSX`);

  // tags vazias precisam de fechar
  for (const t of VAZIAS)
    jsx = jsx.replace(new RegExp(`<${t}\\b([^>]*?)\\s*/?>`, 'gi'), (_, at) => `<${t}${at.replace(/\/$/, '')} />`);

  // atributos booleanos sem valor
  jsx = jsx.replace(/\s(disabled|checked|selected|autoplay|muted|loop|controls|playsinline|required|hidden)(?=[\s>])/gi,
    (_, a) => ` ${a.toLowerCase()}={true}`);

  // chaveta solta no texto quebra o JSX
  if (/\{|\}/.test(jsx.replace(/\{\{[^}]*\}\}/g, '').replace(/=\{[^}]*\}/g, '')))
    notas.push('há chavetas no markup que podem precisar de escape em JSX');

  return { jsx: jsx.trim(), notas };
}

/* ---------------------------------------------------------------- *
 * 4. Slots: onde entra o cliente
 * ---------------------------------------------------------------- */

const NOME_POR_TAG = { h1: 'titulo', h2: 'titulo', h3: 'subtitulo', h4: 'subtitulo',
  h5: 'rotulo', h6: 'rotulo', p: 'texto', span: 'rotulo', li: 'item', a: 'acao', button: 'acao' };

/**
 * Marca cada texto visível e cada imagem como slot, com nome sugerido pela tag.
 * O nome é SUGESTÃO: quem revê renomeia para o que a dobra significa de facto. O valor
 * original fica guardado como `exemplo`, e é o que permite ver o que ali estava sem
 * abrir o componente de origem.
 */
export function extrairSlots(jsx, slotsDeEstilo = []) {
  const slots = [...slotsDeEstilo];
  // continuar a contagem a partir do que o estilo inline já usou, para "imagem1"/"imagem2"
  // do <img> nunca colidir com "imagem1"/"imagem2" já atribuído a um background-image
  const contador = { imagem: slotsDeEstilo.filter(s => s.tipo === 'imagem').length };
  let out = jsx;

  // texto entre tags, só quando não contém outra tag
  out = out.replace(/<(h1|h2|h3|h4|h5|h6|p|span|li|a|button)\b([^>]*)>([^<>{}]{2,})<\/\1>/gi,
    (m, tag, attrs, texto) => {
      const limpo = texto.trim();
      if (!limpo || /^[\s\d.,:;|/-]*$/.test(limpo)) return m;
      const base = NOME_POR_TAG[tag.toLowerCase()] || 'texto';
      contador[base] = (contador[base] || 0) + 1;
      const nome = `${base}${contador[base] > 1 ? contador[base] : ''}`;
      slots.push({ nome, tipo: 'texto', exemplo: limpo.slice(0, 160), tag });
      return `<${tag}${attrs}>{s.${nome}}</${tag}>`;
    });

  // imagens em <img>
  out = out.replace(/<img\b([^>]*?)src=["']([^"']+)["']([^>]*)\/>/gi, (m, a, src, b) => {
    contador.imagem = (contador.imagem || 0) + 1;
    const nome = `imagem${contador.imagem > 1 ? contador.imagem : ''}`;
    slots.push({ nome, tipo: 'imagem', exemplo: src, externa: /^https?:\/\//.test(src) });
    return `<img${a}src={s.${nome}}${b}/>`;
  });

  // Resolver os marcadores de `marcarImagensDeEstiloInline`: a essa altura o `style` já é
  // `style={{backgroundImage: 'url(__ESTEIRA_SLOT_imagemN__)'}}` (JSX object, via htmlParaJsx),
  // e o marcador vira uma interpolação de verdade dentro do template literal.
  out = out.replace(/'url\(__ESTEIRA_SLOT_(\w+)__\)'/g, (m, nome) => `\`url(\${s.${nome}})\``);

  return { jsx: out, slots };
}

/** Deteta imagens presas ao CSS por seletor posicional (`.card:nth-child(3):before{background-image:url(...)}`).
 *  Isto NÃO é um slot mecanizável: o número de itens está fixo no CSS, e um cliente com mais
 *  ou menos fotos que o template partiria a grelha. É honesto reportar em vez de fingir que o
 *  slot de `<img>`/inline resolveu tudo. */
function acharImagensPresasAoCss(css) {
  const achados = [...css.matchAll(/:nth-child\((\d+)\)[^{]*\{[^}]*background-image\s*:\s*url\(['"]?([^'")]+)/gi)];
  return achados.map(m => ({ posicao: +m[1], url: m[2] }));
}

/* ---------------------------------------------------------------- *
 * 5. Escrever a dobra
 * ---------------------------------------------------------------- */

const REGISTOS = ['sobrio', 'editorial', 'cinematografico'];

export function esteirar({ origem, slot, nome, registo = null }) {
  const partes = extrairPartes(origem);
  const scope = `${slot}-${nome}`;
  const destino = join(ROOT, 'themes', 'base', 'dobras', slot, nome);
  mkdirSync(destino, { recursive: true });

  const { css, relatorio: relCss } = tokenizarCssPuro(partes.css, scope);
  // ACHADO REAL (lote de ~500 componentes, 2026-07-24): hex também aparece em
  // `style="background: #ff4d8c"` INLINE no próprio HTML de origem (não só no CSS
  // externo) — 95 das dobras já processadas tinham isto e a tokenização nunca alcançava
  // esse hex, porque só rodava sobre `partes.css`. O gate de pureza (`C3
  // hex-fora-de-token`) reprova qualquer uma dessas se um dia chegar a produção.
  // `mapearCores` é reaproveitada aqui, no HTML bruto, ANTES de qualquer outra
  // transformação — os mesmos hexes que aparecerem depois no CSS externo já saem
  // mapeados aos MESMOS tokens (a função é determinística por brilho/saturação), então
  // não há risco de o inline e o externo divergirem em qual token cada cor vira.
  const { css: htmlComCorMapeada, mapeadas: coresInlineMapeadas } = mapearCoresPuras(partes.html);
  if (coresInlineMapeadas) relCss.coresMapeadas += coresInlineMapeadas;
  // A imagem de background-image inline tem de ser marcada ANTES de htmlParaJsx converter o
  // atributo style para objeto, senão a URL fica presa dentro de uma string JS sem aspas
  // duplas para o extrator reconhecer (ver marcarImagensDeEstiloInline).
  const { html: htmlMarcado, slots: slotsEstilo } = marcarImagensDeEstiloInline(htmlComCorMapeada);
  const { jsx: jsxBruto, notas } = htmlParaJsx(htmlMarcado);
  const { jsx, slots } = extrairSlots(jsxBruto, slotsEstilo);
  const presasAoCss = acharImagensPresasAoCssPuro(partes.css);

  // assets locais viajam com a dobra; os externos são apontados para revisão
  const dirAssets = join(destino, 'assets');
  let copiados = 0;
  for (const sub of ['img', 'images', 'assets', 'fotos']) {
    const de = join(partes.dir, sub);
    if (existsSync(de) && statSync(de).isDirectory()) { cpSync(de, dirAssets, { recursive: true }); copiados++; }
  }
  const externas = slots.filter(s => s.externa).map(s => s.exemplo);

  const componente = [
    '"use client";',
    '',
    `/* DOBRA gerada pela esteira a partir de ${origem}`,
    ' *',
    ' * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.',
    ' * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.',
    ' * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).',
    ' */',
    '',
    "import { useRef } from 'react';",
    partes.libs.includes('gsap') ? "import gsap from 'gsap';" : '',
    partes.libs.includes('scrolltrigger') ? "import { ScrollTrigger } from 'gsap/ScrollTrigger';" : '',
    partes.libs.includes('gsap') ? "import { useGSAP } from '@gsap/react';" : '',
    '',
    `import './Dobra.css';`,
    '',
    partes.libs.includes('scrolltrigger') ? 'gsap.registerPlugin(ScrollTrigger);' : '',
    '',
    `export default function Dobra({ slots: s = {} }) {`,
    '  const raiz = useRef(null);',
    '',
    partes.js.trim()
      ? [
        '  /* ⚠ REVER: o JS de origem está abaixo em bruto, dentro do useGSAP.',
        '   * A esteira NÃO o converte sozinha porque ele foi escrito para correr num documento',
        '   * inteiro (usa document.querySelector global, espera classes que já não existem, e às',
        '   * vezes assume ordem de carregamento). Converter às cegas produz animação que corre no',
        '   * elemento errado, que é pior que animação nenhuma. Escopar ao `raiz.current` e testar. */',
        partes.libs.includes('gsap') ? '  useGSAP(() => {' : '  // useEffect(() => {',
        ...partes.js.split('\n').map(l => '  //   ' + l),
        partes.libs.includes('gsap') ? '  }, { scope: raiz });' : '  // }, []);',
      ].join('\n')
      : '  /* a origem não trazia JS */',
    '',
    `  return (`,
    `    <section className="dobra" data-dobra="${scope}" ref={raiz}>`,
    ...jsx.split('\n').map(l => '      ' + l),
    `    </section>`,
    `  );`,
    `}`,
    '',
  ].filter(l => l !== '').join('\n');

  // ACHADO REAL (categoria Botões, 2026-07-24, 18 de 22 componentes processados no mesmo
  // lote): o banco costuma embrulhar o componente numa PÁGINA DE DEMONSTRAÇÃO inteira —
  // a regra do escopo raiz (`[data-dobra="x"]{...}`, sem combinador) centra o componente
  // sozinho num "height:100vh" com fundo próprio. Isso vaza pra dentro de qualquer uso como
  // peça embutida (herda altura/fundo de página). A esteira NÃO remove sozinha (removê-la
  // às cegas partiria um componente que É de página inteira de propósito, como um hero) —
  // só avisa, porque decidir "isto é demo ou é intencional" é julgamento.
  const paginaDeDemo = new RegExp(`\\[data-dobra="${scope}"\\]\\s*\\{[^}]*(?:height:\\s*100(?:vh|%)|min-height:\\s*100(?:vh|%))[^}]*\\}`, 'i').test(css);

  const pontosRever = [
    registo ? null : 'registo por definir (sobrio | editorial | cinematografico)',
    // Achado real (esteira do card-grid-hover-effect, 2026-07-23): 6 fotos "invisíveis" para
    // o extrator de slots porque vinham presas a `.card:nth-child(N):before{background-image}`
    // no CSS, não a um atributo de elemento. Reportar aqui em vez de deixar a dobra sair com
    // "0 imagem" e a ilusão de que não precisa de nenhuma foto do cliente.
    presasAoCss.length
      ? `${presasAoCss.length} imagem(ns) presa(s) a seletor CSS posicional (:nth-child), NÃO são slot mecanizável: o número de itens está fixo no CSS. Rever à mão: ou generaliza-se para N itens a partir de um array de slots, ou o número de "vitrine" desta dobra fica fixo em ${presasAoCss.length} para sempre`
      : null,
    relCss.coresMapeadas
      ? `${relCss.coresMapeadas} cor(es) mapeadas para tokens por luminância${relCss.acentoOrigem ? ` (acento da origem ${relCss.acentoOrigem} → var(--acento))` : ''}: confirmar no ecrã que o contraste se mantém`
      : null,
    partes.js.trim() ? 'JS de origem comentado no Dobra.jsx: escopar à raiz e testar' : null,
    externas.length
      ? `${externas.length} foto(s) de demonstração de host externo: o slot tem de as substituir. Confirmar que NENHUMA sobrevive ao build (${externas.slice(0, 2).join(' ')})`
      : null,
    partes.fontesOrigem.length ? `fonte(s) de origem descartadas (o sistema fornece): ${partes.fontesOrigem.length}` : null,
    paginaDeDemo
      ? `PÁGINA DE DEMONSTRAÇÃO detetada no escopo raiz (height 100vh/100% + provável centralização): confirmar se é a origem a embrulhar o componente sozinho numa página (remover, é peça embutida) ou se é estrutural (mantém, é um hero/secção de página inteira mesmo)`
      : null,
    ...notas,
  ].filter(Boolean);

  const variante = {
    slot, nome, scope, origem,
    registo: registo || null,
    estado: estadoInicialDobra(pontosRever),
    libs: partes.libs,
    slots: slots.map(({ nome, tipo, exemplo }) => ({ nome, tipo, exemplo })),
    precondicoes: sugerirPrecondicoesPuras(slots),
    _rever: pontosRever,
    _nota: 'Gerado por tools/tema/esteira.mjs. Estado inicial é experimental sem avisos e revisar com pontos em _rever; só revisão humana promove para aprovada/em-producao.',
  };

  writeFileSync(join(destino, 'Dobra.jsx'), componente, 'utf8');
  writeFileSync(join(destino, 'Dobra.css'), css, 'utf8');
  writeFileSync(join(destino, 'variant.json'), JSON.stringify(variante, null, 2), 'utf8');

  return { destino, variante, relCss, copiados };
}

/** Pré-condições sugeridas a partir do que a dobra CONSOME. Uma dobra que precisa de 12 fotos
 *  não pode ser oferecida a um cliente que tem 4: é assim que nasce a grelha com buracos. */
function sugerirPrecondicoes(slots) {
  const imagens = slots.filter(s => s.tipo === 'imagem').length;
  const textos = slots.filter(s => s.tipo === 'texto');
  const maisLongo = Math.max(0, ...textos.map(t => (t.exemplo || '').length));
  const p = {};
  if (imagens) p.imagensMin = imagens;
  if (maisLongo > 220) p.copiaMinChars = Math.round(maisLongo * 0.6);
  if (textos.some(t => /^h1$/i.test(t.tag)) && maisLongo < 25) p.nomeMaxPalavras = 3;
  return p;
}

/* ---------------------------------------------------------------- *
 * CLI
 * ---------------------------------------------------------------- */

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const arg = (n, d = null) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
  const origem = process.argv[2];
  const slot = arg('--slot');
  const nome = arg('--nome');
  const registo = arg('--registo');
  if (!origem || !slot || !nome) {
    console.error('uso: node tools/tema/esteira.mjs <pasta-componente> --slot <slot> --nome <nome> [--registo sobrio|editorial|cinematografico]');
    process.exit(1);
  }
  if (registo && !REGISTOS.includes(registo)) {
    console.error(`registo inválido: ${registo} (${REGISTOS.join(' | ')})`); process.exit(1);
  }
  try {
    const r = esteirar({ origem, slot, nome, registo });
    console.log(`\n✓ dobra em themes/base/dobras/${slot}/${nome}`);
    console.log(`  libs: ${r.variante.libs.join(', ') || '—'}`);
    console.log(`  slots: ${r.variante.slots.length} (${r.variante.slots.filter(s => s.tipo === 'imagem').length} imagem, ${r.variante.slots.filter(s => s.tipo === 'texto').length} texto)`);
    console.log(`  fontes de origem trocadas por tokens: ${r.relCss.fontesTrocadas} · !important removidos: ${r.relCss.importantsRemovidos}`);
    if (r.variante.precondicoes && Object.keys(r.variante.precondicoes).length)
      console.log(`  pré-condições sugeridas: ${JSON.stringify(r.variante.precondicoes)}`);
    if (r.variante._rever.length) {
      console.log(`\n  ⚠ ${r.variante._rever.length} ponto(s) que a esteira NÃO decide (é julgamento, não mecânica):`);
      for (const n of r.variante._rever) console.log(`     · ${n}`);
    }
    console.log('');
  } catch (e) {
    console.error(`\n✗ ${e.message}\n`);
    process.exit(1);
  }
}
