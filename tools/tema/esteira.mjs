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
 *
 * As transformacoes de CSS vivem em ./lib/css.mjs e sao importadas no topo.
 * ATE 2026-07-27 EXISTIA AQUI UMA SEGUNDA COPIA DELAS (mapearCores, tokenizarCss,
 * escopar, fecharBloco), morta: nada importava esteira.mjs e os testes ja apontavam
 * para lib/css.mjs. A copia morta custou uma correcao aplicada no ficheiro errado,
 * que passou nos testes sem mudar nada no resultado. E o mesmo bug que tokens.mjs
 * documenta: duas fontes de verdade para a mesma regra sao o bug, nao a regex.
 * ---------------------------------------------------------------- */

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
  // ACRESCENTADO 2026-07-27: medidos no acervo, estes eram os atributos SVG hifenizados que
  // mais sobreviviam sem tradução (vector-effect em 61 dobras, dominant-baseline em 53,
  // stroke-miterlimit em 39). O React aceita-os hifenizados, mas emite aviso e a forma
  // canónica é camelCase; traduzi-los aqui é o mesmo trabalho que já se faz para os outros.
  'vector-effect': 'vectorEffect', 'dominant-baseline': 'dominantBaseline',
  'stroke-miterlimit': 'strokeMiterlimit', 'stroke-opacity': 'strokeOpacity',
  'fill-opacity': 'fillOpacity', 'shape-rendering': 'shapeRendering',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'marker-end': 'markerEnd', 'marker-start': 'markerStart', 'marker-mid': 'markerMid',
  'paint-order': 'paintOrder', 'text-rendering': 'textRendering',
  'letter-spacing': 'letterSpacing', 'word-spacing': 'wordSpacing',
  'baseline-shift': 'baselineShift', 'alignment-baseline': 'alignmentBaseline',
  'flood-color': 'floodColor', 'flood-opacity': 'floodOpacity',
};

/** Atributos próprios da origem, sem tradução possível. O React 16+ passa-os para o DOM tal
 *  e qual, portanto não são erro: são um gancho de JS da origem que fica órfão se o JS não
 *  for reescrito. Reportar como isso, e não como "pode não ser válido em JSX", que era o
 *  aviso antigo e mandava a revisão procurar um problema de sintaxe que não existe. */
const PREFIXOS_DE_ORIGEM = /^(bounce|hero|button|fs|split|reveal|magnet|marquee|tilt|parallax)-/i;
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
  // data-* e aria-* mantêm-se. O que sobra hifenizado divide-se em dois casos com
  // gravidades muito diferentes, e o aviso antigo tratava-os como um só ("pode não ser
  // válido em JSX"), mandando a revisão procurar um erro de sintaxe que não existe.
  const orfaos = new Set();
  for (const m of jsx.matchAll(/\s([a-z]+-[a-z-]+)=/gi))
    if (!/^(data|aria)-/i.test(m[1])) orfaos.add(m[1]);
  if (orfaos.size) {
    const daOrigem = [...orfaos].filter(a => PREFIXOS_DE_ORIGEM.test(a));
    const desconhecidos = [...orfaos].filter(a => !PREFIXOS_DE_ORIGEM.test(a));
    if (daOrigem.length) notas.push(
      `${daOrigem.length} atributo(s) de gancho da ORIGEM (${daOrigem.slice(0, 3).join(', ')}): o React passa-os ao DOM tal e qual, não são erro de sintaxe. Ficam órfãos se o JS de origem não for reescrito`);
    if (desconhecidos.length) notas.push(
      `${desconhecidos.length} atributo(s) hifenizado(s) sem tradução conhecida (${desconhecidos.slice(0, 3).join(', ')}): confirmar se é SVG que devia estar em camelCase`);
  }

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
 * 3b. Classificar o JS de origem: quanto custa pôr esta dobra a mexer
 * ---------------------------------------------------------------- */

/**
 * MEDIDO no acervo de 552 (2026-07-27): 485 dobras saíam com o JS comentado e todas com o
 * MESMO aviso genérico ("escopar à raiz e testar"). Esse aviso é verdadeiro mas inútil para
 * planear: não distingue a dobra que custa 2 minutos da que custa meio dia. A distribuição
 * real é: 67 sem JS nenhum, 35 só-DOM, 330 com global duro, 92 módulo ES, 28 WebGL/Three.
 *
 * Classificar muda a curadoria de "rever 485" para "as 35 baratas primeiro". As categorias:
 *
 *  - `sem-js`      a origem não trazia JS. Não há nada a converter.
 *  - `dom-simples` só toca em querySelector/classList dentro do próprio componente. Escopar
 *                  ao `raiz.current` é uma troca mecânica e correta, e a esteira FÁ-LA.
 *  - `global-duro` mexe em window/document.body/listeners de load|resize|scroll. Escopar não
 *                  chega: o código assume que é dono da página. Precisa de reescrita.
 *  - `modulo-es`   traz import/export. Não corre como corpo de função; precisa de ser partido
 *                  em módulo de verdade ou reescrito.
 *  - `webgl`       Three.js/WebGL. Além da conversão, arrasta peso e ciclo de vida de canvas.
 */
export function classificarJs(js = '') {
  if (!js.trim()) return { categoria: 'sem-js', escopavel: false };
  if (/THREE\.|new Scene\(|WebGLRenderer/.test(js)) return { categoria: 'webgl', escopavel: false };
  if (/\bimport\s+[\w{*]/.test(js) || /\bexport\s+(default|const|function)/.test(js))
    return { categoria: 'modulo-es', escopavel: false };
  if (/\bwindow\.\w+\s*=|\bdocument\.body\b|\bdocument\.documentElement\b|addEventListener\(\s*['"](?:load|DOMContentLoaded|resize|scroll)/.test(js))
    return { categoria: 'global-duro', escopavel: false };
  return { categoria: 'dom-simples', escopavel: true };
}

/**
 * Troca as buscas globais por buscas dentro da própria dobra. Só é chamada para
 * `dom-simples`, onde esta troca é equivalente — nas outras categorias seria mentira,
 * porque lá o código conta mesmo com a página inteira.
 */
export function escoparJs(js) {
  return js
    .replace(/\bdocument\.querySelectorAll\b/g, 'raiz.current.querySelectorAll')
    .replace(/\bdocument\.querySelector\b/g, 'raiz.current.querySelector')
    .replace(/\bdocument\.getElementById\(\s*(['"])([^'"]+)\1\s*\)/g, 'raiz.current.querySelector(\'#$2\')')
    .replace(/\bdocument\.getElementsByClassName\(\s*(['"])([^'"]+)\1\s*\)/g, 'raiz.current.querySelectorAll(\'.$2\')');
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

  // ACHADO REAL (39 de 552 dobras, 2026-07-27): o destino dos links ficava cravado no host
  // da ORIGEM — `<a href="https://tympanus.net/...">`, dribbble, codepen, github. A esteira
  // arrancava o TEXTO do link (virava slot) mas deixava o href, então o rótulo era do cliente
  // e o clique levava o visitante do cliente para o site de quem fez o template. É identidade
  // de origem tanto quanto a fonte e a cor, e sai pela mesma razão. Vira slot: o destino passa
  // a ser conteúdo que o cliente fornece, com "#" como neutro enquanto ninguém o preenche.
  out = out.replace(/\shref=["'](https?:\/\/[^"']*)["']/gi, (m, url) => {
    contador.destino = (contador.destino || 0) + 1;
    const nome = `destino${contador.destino > 1 ? contador.destino : ''}`;
    slots.push({ nome, tipo: 'link', exemplo: url, externa: true });
    return ` href={s.${nome} || '#'}`;
  });

  // `<button>` da origem não tem destino nenhum: o comportamento dele vivia no JS solto que a
  // esteira comenta. Sem isto, a dobra sai com um botão que parece clicável e não faz nada —
  // o defeito exato que o Mateus apanhou ao vivo no site da Vaninha ("se aperto não acontece
  // nada"). Injetar o `onClick` aqui, na esteira, e não num script avulso: a primeira versão
  // disto foi um script à parte que correu duas vezes e deixou 24 dobras com
  // `onClick={s.onClick} onClick={s.onClick}` duplicado. A guarda `!/onClick/` torna a
  // operação idempotente — correr a esteira N vezes dá sempre o mesmo ficheiro.
  out = out.replace(/<button\b([^>]*)>/gi, (m, attrs) =>
    /onClick/i.test(attrs) ? m : `<button${attrs} onClick={s.onClick}>`);

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

  // ACHADO REAL (hero-4 e hero-6, 2026-07-27): o extrator só conhecia `<img>`, então o vídeo
  // de fundo de um hero escapava inteiro — `<source src="https://...b-cdn.net/....mp4">` e
  // `<video src="https://videos.pexels.com/...">` sobreviviam com o host da origem cravado.
  // É pior que a foto hotlinked: um hero com vídeo transmite MB do CDN de terceiro a cada
  // visita do site do cliente, e morre no dia em que esse host sair do ar. Mesmo tratamento
  // que a imagem: vira slot, o cliente fornece o ficheiro.
  out = out.replace(/<(video|source)\b([^>]*?)\ssrc=["']([^"']+)["']([^>]*?)(\/?)>/gi, (m, tag, a, src, b, fecho) => {
    contador.video = (contador.video || 0) + 1;
    const nome = `video${contador.video > 1 ? contador.video : ''}`;
    slots.push({ nome, tipo: 'video', exemplo: src, externa: /^https?:\/\//.test(src) });
    return `<${tag}${a} src={s.${nome}}${b}${fecho}>`;
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

  // `let` e não `const`: a remoção do CSS de página de demonstração, mais abaixo, reescreve
  // o bloco raiz. Era const, e as 20 dobras que tinham esse CSS falhavam com "Assignment to
  // constant variable" — e falhavam SÓ essas, o que torna o erro fácil de não notar num lote.
  const tokenizado = tokenizarCssPuro(partes.css, scope);
  let css = tokenizado.css;
  const relCss = tokenizado.relatorio;
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
  const classeJs = classificarJs(partes.js);
  // o `useEffect` só é importado quando é mesmo emitido: uma dobra com JS escopado sem GSAP
  // usa-o, e uma com o JS ainda comentado não — importar sempre deixaria import por usar.
  const usaUseEffect = classeJs.escopavel && !partes.libs.includes('gsap');

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
    usaUseEffect ? "import { useEffect, useRef } from 'react';" : "import { useRef } from 'react';",
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
    classeJs.categoria === 'sem-js'
      ? '  /* a origem não trazia JS */'
      : classeJs.escopavel
        ? [
          `  /* JS de origem ESCOPADO pela esteira (categoria: ${classeJs.categoria}).`,
          '   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca',
          '   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.',
          '   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */',
          partes.libs.includes('gsap') ? '  useGSAP(() => {' : '  useEffect(() => {',
          ...escoparJs(partes.js).split('\n').map(l => '    ' + l),
          partes.libs.includes('gsap') ? '  }, { scope: raiz });' : '  }, []);',
        ].join('\n')
        : [
          `  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: ${classeJs.categoria}).`,
          '   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO',
          '   * chega: o código assume que é dono da página (window/document.body/listeners de',
          '   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às',
          '   * cegas produz animação que corre no elemento errado, que é pior que animação',
          '   * nenhuma. Precisa de reescrita, não de troca de prefixo. */',
          partes.libs.includes('gsap') ? '  useGSAP(() => {' : '  // useEffect(() => {',
          ...partes.js.split('\n').map(l => '  //   ' + l),
          partes.libs.includes('gsap') ? '  }, { scope: raiz });' : '  // }, []);',
        ].join('\n'),
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
  // peça embutida (herda altura/fundo de página).
  //
  // ATUALIZAÇÃO 2026-07-27: durante muito tempo a esteira só AVISAVA, com o argumento de que
  // "isto é demo ou é intencional" era julgamento. Medido no acervo, esse aviso estava em 107
  // das 157 dobras dos slots que os kits de nicho exigem, e era o maior bloqueio isolado.
  //
  // O julgamento existe, mas não é por dobra: é POR SLOT, e nesse nível é determinado. Uma
  // secção de contacto, serviços, equipa, prova ou vitrine é sempre peça EMBUTIDA numa
  // página que tem outras secções acima e abaixo — não há caso em que ela deva medir um ecrã
  // inteiro por decisão de design da ORIGEM. Já um `hero` ou uma `transicao` pode legitimamente
  // ocupar a viewport toda, e aí continua a ser julgamento humano.
  const SLOTS_SEMPRE_EMBUTIDOS = new Set(['contacto', 'servicos', 'equipa', 'prova', 'vitrine',
    'precos', 'faq', 'passos', 'numeros', 'logos', 'sobre', 'cta', 'diferenciais', 'botao']);
  const reRaiz = new RegExp(`(\\[data-dobra="${scope}"\\]\\s*\\{)([^}]*)(\\})`, 'i');
  const temAlturaDeEcra = /(?:min-)?height:\s*100(?:vh|%)/i;
  const mRaiz = css.match(reRaiz);
  let paginaDeDemo = Boolean(mRaiz && temAlturaDeEcra.test(mRaiz[2]));
  let demoRemovida = false;

  if (paginaDeDemo && SLOTS_SEMPRE_EMBUTIDOS.has(slot)) {
    // Sai a altura de ecrã e a centragem que só existia para pousar a peça sozinha no meio
    // da página de demonstração. O resto do bloco raiz (cor, fonte, radius) fica intacto.
    css = css.replace(reRaiz, (_, abre, corpo, fecha) => {
      const limpo = corpo
        .split(';')
        .filter(d => !/(?:min-)?height:\s*100(?:vh|%)/i.test(d))
        .filter(d => !/place-items:\s*center/i.test(d))
        .filter(d => !/align-items:\s*center/i.test(d))
        .filter(d => !/justify-content:\s*center/i.test(d))
        .join(';');
      return `${abre}${limpo}${fecha}`;
    });
    paginaDeDemo = false;
    demoRemovida = true;
  }

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
    classeJs.escopavel
      ? 'JS de origem ESCOPADO automaticamente à raiz da dobra (era só-DOM): confirmar no ecrã que a animação corre no elemento certo'
      : classeJs.categoria === 'sem-js' ? null
        : `JS de origem comentado no Dobra.jsx — categoria "${classeJs.categoria}": ${
          classeJs.categoria === 'global-duro' ? 'assume ser dono da página (window/document.body/listeners de load|resize|scroll); escopar não chega, precisa de reescrita'
            : classeJs.categoria === 'modulo-es' ? 'traz import/export, não corre como corpo de função; precisa de virar módulo a sério'
              : 'monta canvas WebGL/Three; arrasta peso e ciclo de vida próprio'}`,
    externas.length
      ? `${externas.length} foto(s) de demonstração de host externo: o slot tem de as substituir. Confirmar que NENHUMA sobrevive ao build (${externas.slice(0, 2).join(' ')})`
      : null,
    // MEDIDO 2026-07-27: este aviso disparava em 277 de 552 dobras (50% do acervo) e
    // sozinho impedia metade do catálogo de alguma vez ficar elegível. Um alerta que
    // dispara em metade dos casos não informa nada, só bloqueia.
    //
    // Olhando os números, 274 dessas 277 traziam da origem apenas UMA ou DUAS famílias de
    // fonte, e o nosso sistema fornece display + corpo + mono: o mapeamento é direto e não
    // há estrutura tipográfica perdida. Descartar a fonte da origem é, aliás, a razão de
    // ser desta esteira, não um efeito colateral a confirmar caso a caso.
    //
    // O risco real está nas outras 3: quando a origem usava 3+ famílias, ela estava a
    // apoiar-se num CONTRASTE tipográfico que o nosso par não reproduz, e aí a peça pode
    // perder a hierarquia que a fazia funcionar. Só esse caso merece bloquear.
    partes.fontesOrigem.length >= 3
      ? `a origem usava ${partes.fontesOrigem.length} famílias de fonte e o sistema fornece display + corpo: a peça apoiava-se num contraste tipográfico que o nosso par não reproduz. Confirmar no ecrã que a hierarquia se mantém`
      : null,
    relCss.importsFonteRemovidos
      ? `${relCss.importsFonteRemovidos} @import de fonte de CDN removido(s) do CSS (o sistema fornece a fonte; CDN externo é proibido pelo gate E8)`
      : null,
    relCss.urlsExternas?.length
      ? `${relCss.urlsExternas.length} url(...) de host externo AINDA no CSS — foto/vídeo de demonstração servida pela origem. NÃO foi removida sozinha porque apagar um background-image pode partir a peça. Substituir por asset local ou por slot antes de aprovar (${relCss.urlsExternas.slice(0, 2).join(' ')})`
      : null,
    slots.some(s => s.tipo === 'link')
      ? `${slots.filter(s => s.tipo === 'link').length} link(s) apontavam para o site da ORIGEM e viraram slot (destino*): sem valor do cliente ficam em "#". Definir o destino real ou remover o link antes de aprovar`
      : null,
    paginaDeDemo
      ? `PÁGINA DE DEMONSTRAÇÃO detetada no escopo raiz (height 100vh/100% + provável centralização): no slot "${slot}" isto PODE ser estrutural (um hero ocupa mesmo o ecrã todo), por isso não foi removido. Confirmar à mão se é a origem a embrulhar a peça numa página de demo ou se é intencional`
      : null,
    ...notas,
  ].filter(Boolean);

  const variante = {
    slot, nome, scope, origem,
    registo: registo || null,
    estado: estadoInicialDobra(pontosRever),
    libs: partes.libs,
    // Informativo, não bloqueante: quantas famílias de fonte a origem trazia e que foram
    // substituídas pelos tokens do sistema. Fica registado para a revisão saber de onde a
    // peça partiu, sem entrar em `_rever` (ver a nota junto ao aviso, mais acima).
    fontesDescartadas: partes.fontesOrigem.length,
    // Custo de pôr a dobra a mexer, para a curadoria poder ordenar por preço em vez de
    // rever 485 avisos idênticos. Ver classificarJs().
    js: { categoria: classeJs.categoria, escopadoAutomaticamente: classeJs.escopavel },
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
