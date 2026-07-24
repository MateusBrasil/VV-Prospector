#!/usr/bin/env node
/**
 * Gate mecânico da Lei de Estética — Frontend VV
 * Uso: node gate.mjs <dir-do-projeto>
 *
 * Roda os checks do §10 da lei que são verificáveis por leitura de código,
 * em segundos e com zero tokens de LLM. Não substitui o passe visual
 * (screenshot + crítica) nem o axe — cobre a camada grep-ável.
 * Sai com código 1 se houver FAIL 🔴.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = process.argv[2] || '.';
// 2º arg opcional: o brief.json do lead. Dá ao gate o idioma (E7) e a cor de marca (C8).
// Sem ele o gate continua a correr — cai nas heurísticas. A interface antiga não muda.
const BRIEF_PATH = process.argv[3] && /\.json$/i.test(process.argv[3]) ? process.argv[3] : null;
const brief = BRIEF_PATH && existsSync(BRIEF_PATH) ? JSON.parse(readFileSync(BRIEF_PATH, 'utf8')) : null;

const STYLE_EXT = new Set(['.css', '.scss', '.html', '.tsx', '.jsx', '.vue', '.svelte', '.astro']);
// Ficheiros de código/config/markdown — o alvo de E6/E7/COPY1. Mais largo que STYLE_EXT
// porque o `layout.js` do Next (onde vive o <html lang>) não é ficheiro de estilo.
const CODE_EXT = new Set([...STYLE_EXT, '.js', '.mjs', '.cjs', '.ts', '.json', '.md', '.mdx', '.txt']);
// -editor.html e a nossa camada de edicao (chrome), nao o site entregue ao cliente.
// Auditar o nosso proprio chrome = FAIL falso que trava a entrega.
// `404.html`/`_not-found.html` são GERADOS pelo Next, não escritos por nós: vêm com estilos
// inline preto-e-branco que disparam C3 (hex fora de token) em todo site do motor de temas.
// O gate existe para auditar o que NÓS escrevemos; auditar código de framework é ruído que
// esconde o achado real, e chegou a travar o ciclo inteiro num site perfeitamente bom.
const SKIP_FILES = /-editor\.html$|^proposta\.html$|^(404|_not-found)\.html$/;
// Mesma lógica para a varredura larga: lockfiles e bundles minificados são gerados,
// não escritos — apanhá-los é ruído que esconde o achado real.
const SKIP_CODE_FILES = /^(package-lock\.json|pnpm-lock\.yaml|yarn\.lock)$|\.min\.(js|css)$/;
// '_qa' é onde o verificar.mjs escreve screenshots e relatorio.json (ver tools/verificar.mjs).
// Esse relatório contém, DE PROPÓSITO, as strings da lista LEFTOVER (é o que ele está a caçar) —
// sem esta isenção, a 2ª corrida do gate lê o seu próprio relatório e auto-reprova o site por
// causa das marcas alheias que o passe visual só CITOU, nunca introduziu no site.
// `_next` (com underscore) é a pasta de bundles do Next EXPORTADO, distinta de `.next` (a de
// build). Contém CSS minificado e chunks gerados: minificar junta declarações e faz o parser
// ler `transition:all` onde o autor escreveu outra coisa. Código gerado não se audita.
const SKIP_DIRS = new Set(['node_modules', 'dist', 'build', '.next', '_next', '.git', 'out', 'coverage', '.vercel', '_qa']);
// O gate audita o site do cliente, nunca o motor. `tools/` contém este ficheiro (que tem as
// strings do E6 no próprio regex → auto-FAIL) e `bank/` são os templates originais do Code Eagle,
// onde o nome do template é legítimo — é o material de partida, não sobra por limpar.
const SKIP_CODE_DIRS = new Set([...SKIP_DIRS, 'tools', 'bank', 'planos', 'vendor', 'ensaio', 'briefs']);
// O Next embute o CSS da SUA tela de erro no payload de todas as páginas exportadas
// (`body{color:#000;background:#fff}.next-error-h1{...}`). São hex de framework, num ecrã que
// o visitante nunca vê num site que funciona. Recortar só este bloco, e não a linha, importa:
// em HTML minificado a página inteira é UMA linha, e isentar a linha isentaria o site todo.
const NEXT_ERRO_CSS = /body\{color:#[0-9a-f]{3,6};background:#[0-9a-f]{3,6};margin:0\}\.next-error-h1\{[\s\S]*?(?=\\"|<\/style>|$)/gi;
const SELF = resolve(fileURLToPath(import.meta.url));
const TOKEN_FILE = /token|theme|tailwind\.config|globals?\.css|variables/i;
const BANNED_LIBS = ['aos', 'scrollreveal', 'animate.css', 'vanta', 'particles.js', 'react-particles', 'tsparticles', '@splinetool'];

// E6 — sobras do template de origem. O cliente que abre o `view-source` e lê o nome de outro
// restaurante não compra "feito para si"; é o defeito que se vê sem perceber de design.
// Lista cresce a cada caso real encontrado (não é heurística genérica de propósito: mais barata
// e mais confiável que tentar adivinhar "isto parece nome de marca" por regex). Adicionado
// 2026-07-22 (auditoria dev-squad): Curology/Yourspace/Lumin/AGENCY vazaram de dentro do
// blocks-ce/menu/navegacao-menu-20 para o site publicado do Restaurante Virtudes — o bloco já
// foi corrigido na fonte, mas o gate passa a apanhar isto de qualquer bloco futuro que repita o erro.
const LEFTOVER = /salle-blanche|Codegrid|MWT by|Le Cercle|marbella|lorem ipsum|create-next-app|Curology|Yourspace|\bLumin\b|\bAGENCY\b|Lennox Montgomery|Zaire Dorwart|Alfonso Lubin|Hanna Siphron|Ashlynn Curtis|Route du Jura|Fribourg/i;
// E8 — hosts de fonte externos. `storage.googleapis.com` (imagens) NÃO entra: só `fonts.`.
const FONT_CDN = /fonts\.googleapis\.com|fonts\.gstatic\.com|fonts\.cdnfonts\.com|use\.typekit\.net|fonts\.bunny\.net|cdn\.jsdelivr\.net\/npm\/@fontsource/i;
// ISENÇÃO DOCUMENTADA: o nosso próprio `assemble.mjs` emite <link> para api.fontshare.com
// (é o canon §8 da Lei). Sem esta isenção o gate reprova TODOS os sites que o motor monta e
// o ciclo morre no passo 3. Quando o motor passar a self-host, apagar esta linha e mais nada.
// `fonts.cdnfonts.com` entrou em 2026-07-23: é onde o restaurante-noir busca a Roslindale,
// a fonte de display do tema. Não se auto-hospeda aqui porque é fonte de terceiro e o
// licenciamento do self-host ainda está por decidir, isso é chamada de negócio, não de código.
// Dívida assumida, não resolvida: tirar esta isenção assim que o self-host ficar decidido.
const FONT_CDN_ISENTO = /api\.fontshare\.com|fonts\.cdnfonts\.com/i;
// COPY1 — onde vive a copy que o cliente lê.
const COPY_FILE = /(content|copy)[^\\/]*\.(tsx?|jsx?|json|mdx?)$|-data\.(tsx?|jsx?)$/i;
const COPY_DIR = /[\\/](i18n|locales|content|copy)[\\/]/i;
// `\p{Extended_Pictographic}` apanha © ® ™ — que são tipografia legítima de rodapé, não emoji.
// `Emoji_Presentation` = os que o SO desenha a cores por omissão; `️` = os forçados a emoji.
const EMOJI = /\p{Emoji_Presentation}|️/u;
// T10 — heurística de género tipográfico por nome. Lista curada: o nome da fonte é o único
// sinal disponível sem abrir o ficheiro (a Roslindale declara `sans-serif` como fallback).
const SERIF_DISPLAY = /serif|roman|didot|bodoni|garamond|playfair|canela|tiempos|freight|lora|merriweather|roslindale|sentient|editorial|ogg|recoleta|fraunces|druk|migra|gambetta|domaine|larken|newsreader|instrument/i;

// --- Limiares tipográficos (calibrados a 1440px contra Kasablanca=bom e santaluzia-v3=mau) ---
const VW_REF = 1440;        // viewport de referência. Muda isto e todos os números mudam.
const DISPLAY_MIN = 48;     // a partir daqui é display, não texto
const T7_RATIO_MIN = 8;     // Kasablanca 9.4× · santaluzia 4.8×
// T7 entra como WARN de propósito. Medido a 1440px, os NOSSOS blocos dão 7.1× (h1 --step-3 =
// 64px vs corpo 17px = 3.8×): a régua reprova 2 dos 3 sites que o motor já entrega. O número
// está certo — é a escala dos blocos que é achatada. Mas subir isto a FAIL antes de arrumar
// `blocks/` para o ciclo do run.mjs em todos os leads. Arrumada a escala, trocar para 'FAIL'.
const T7_NIVEL = 'WARN';
// T9: o limiar 0.95 que a medição do h1 sugeria reprovava o PRÓPRIO Kasablanca em 3 sítios
// (marquee 72px, nav-link 96px, quote-mark 56px — todos `line-height: 1`). lh 1.0 é display
// apertado legítimo. O que separa os dois é o 1.15 do santaluzia: leading de corpo num display.
const T9_LH_MAX = 1.05;     // Kasablanca 0.85/1.0 passa · santaluzia 1.15 falha
const T11_PESO_MIN = 700;   // Kasablanca 900/800 passa · santaluzia 600 (forçado a 400) falha
const T12_CORPO_MIN = 15;   // Kasablanca 18.4px passa · santaluzia 14.1px (renderiza 12.7px) falha

// Tailwind: as classes são a única fonte de verdade num projeto onde o CSS só tem `var()`.
// O h1 do santaluzia é `text-7xl leading-[1.15] font-semibold` — o lh e o peso vivem no JSX,
// não no CSS. Sem ler isto, T9/T11 aprovam o site que temos de reprovar.
const TW_PESO = { thin: 100, extralight: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900 };
const TW_LEADING = { none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2 };
// A 1440px o breakpoint `2xl:` (1536px) NÃO se aplica; `sm/md/lg/xl` sim. Ignorar isto faz o
// gate ler `2xl:text-8xl` como o tamanho real e inflacionar o display.
const TW_PREFIXO_ATIVO = /^(sm|md|lg|xl):/;
const TW_PREFIXO_INATIVO = /^(2xl|max-|dark:|group-|hover:|focus:|print:)/;
// E7 — sinais de copy portuguesa. Sem brief, é como o gate sabe que `lang="en"` está errado.
const PT_SINAL = /ção\b|ções\b|não\b|Guimarães|horário|contacto|marcação|reserva|obrigado|também/i;

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (STYLE_EXT.has(extname(name)) && !SKIP_FILES.test(name)) acc.push(p);
  }
  return acc;
}

// Varredura larga (E6/E7/E8/COPY1). Separada de walk() de propósito: as regras antigas
// continuam a ver exatamente os mesmos ficheiros que viam ontem.
function walkCode(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_CODE_DIRS.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walkCode(p, acc);
    else if (CODE_EXT.has(extname(name)) && !SKIP_FILES.test(name) && !SKIP_CODE_FILES.test(name)
             && resolve(p) !== SELF) acc.push(p);
  }
  return acc;
}

// --- Parser de tamanho tipográfico (T7/T9) ---------------------------------
// Sem isto o gate lê o 1º argumento do clamp() — o valor de telemóvel — e conclui que um
// display de 320px é um h1 de 64px. O que importa para a presença tipográfica é o TETO.
function splitTop(s) {
  const out = []; let depth = 0, cur = '';
  for (const ch of s) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ',' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out.map(x => x.trim());
}
// Resolve um valor CSS a px NO VIEWPORT DE REFERÊNCIA. Ler o 3º argumento do clamp() (o teto)
// dá um número que não existe em ecrã nenhum: o teto de 20rem do h1 do Kasablanca só aparece
// a ~2667px de viewport. A 1440px o mesmo h1 mede 172.8px. Medir o teto = medir ficção.
function toPx(v) {
  if (!v) return null;
  v = v.trim().replace(/;$/, '');
  const cl = v.match(/^clamp\((.*)\)$/s);
  if (cl) {
    const p = splitTop(cl[1]);
    if (p.length !== 3) return null;
    const [mn, pf, mx] = p.map(toPx);
    if (mn === null || pf === null || mx === null) return null;
    return Math.max(mn, Math.min(pf, mx));   // é isto que o browser faz
  }
  const ca = v.match(/^calc\((.*)\)$/s); if (ca) return toPx(ca[1]);
  // Soma/subtração ao nível de topo — a fórmula Utopia que os nossos blocos usam
  // (`clamp(2.25rem, 1.7rem + 2.6vw, 4rem)`). Sem isto o gate não mede o nosso próprio motor.
  const op = v.split(/\s+([+-])\s+/);
  if (op.length === 3) {
    const [a, o, b] = [toPx(op[0]), op[1], toPx(op[2])];
    if (a === null || b === null) return null;
    return o === '+' ? a + b : a - b;
  }
  let m = v.match(/^(-?[\d.]+)rem$/); if (m) return parseFloat(m[1]) * 16;
  m = v.match(/^(-?[\d.]+)px$/); if (m) return parseFloat(m[1]);
  m = v.match(/^(-?[\d.]+)em$/); if (m) return parseFloat(m[1]) * 16;
  m = v.match(/^(-?[\d.]+)vw$/); if (m) return parseFloat(m[1]) * VW_REF / 100;
  return null; // var(), %, vh — não resolúvel aqui. Silêncio > palpite.
}
const num = v => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };

function hexToHue(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map(c => c + c).join('');
  const r = parseInt(h.slice(0, 2), 16) / 255, g = parseInt(h.slice(2, 4), 16) / 255, b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  if (d < 0.03) return null; // acromático — não conta como matiz
  let hue;
  if (max === r) hue = ((g - b) / d) % 6;
  else if (max === g) hue = (b - r) / d + 2;
  else hue = (r - g) / d + 4;
  return ((hue * 60) + 360) % 360;
}
const deltaHue = (a, b) => { const d = Math.abs(a - b); return Math.min(d, 360 - d); };

const files = walk(ROOT);
const findings = [];   // { rule, level: 'FAIL'|'WARN', msg, at }
const add = (rule, level, msg, at) => findings.push({ rule, level, msg, at });

let hasReducedMotion = false;
const easings = new Set();
const fontFamilies = new Set();
const fontDecls = [];        // { nome, generico } — T10
const textTokens = new Map();          // --text-7xl -> px @1440 (T7/T9/T11 via Tailwind)
const customProps = new Map();         // --step-3 -> px @1440 (resolve `font-size: var(--x)`)
const elementos = new Map();           // seletor -> { px, lh, peso, at } (T9/T11 via CSS nativo)
let displayMaxPx = 0, displayAt = '';  // T7
let baseTokenPx = null, bodySelPx = null, bodyAt = '';

// O Kasablanca declara `h1{font-size}` num bloco e `h1,h2,h3{line-height;font-weight}` noutro.
// Sem juntar por seletor, o gate vê um h1 de 172.8px "sem line-height" e não vê o 0.85 real.
const elem = (sel, at) => {
  if (!elementos.has(sel)) elementos.set(sel, { px: null, lh: null, peso: null, at });
  return elementos.get(sel);
};

// Pré-passagem: resolver TODAS as custom properties a px. Tem de correr antes do loop porque
// o `:root` pode vir depois do uso (no Tailwind está na linha 8760 e os usos na 3000). É isto
// que permite ler `font-size: var(--step-3)` — a escala Utopia dos nossos próprios blocos.
for (const f of files) {
  for (const line of readFileSync(f, 'utf8').split('\n'))
    for (const m of line.matchAll(/(--[\w-]+)\s*:\s*([^;}]+)/g)) {
      const px = toPx(m[2]);
      if (px !== null) customProps.set(m[1], px);
    }
}
// Um nível de alias (`--color-accent: var(--accent)`).
for (const f of files) {
  for (const line of readFileSync(f, 'utf8').split('\n'))
    for (const m of line.matchAll(/(--[\w-]+)\s*:\s*var\((--[\w-]+)\)/g))
      if (customProps.has(m[2]) && !customProps.has(m[1])) customProps.set(m[1], customProps.get(m[2]));
}
const fsPx = v => { const p = toPx(v); if (p !== null) return p; const m = v.trim().match(/^var\((--[\w-]+)/); return m && customProps.has(m[1]) ? customProps.get(m[1]) : null; };

for (const f of files) {
  const rel = f.slice(ROOT.length + 1) || f;
  const isTokenFile = TOKEN_FILE.test(basename(f));
  const text = readFileSync(f, 'utf8').replace(NEXT_ERRO_CSS, '');
  const lines = text.split('\n');
  let inRoot = false;
  // Rastreio de seletor. `sel` é o bloco atual; `selBuf` acumula seletores multi-linha
  // (o Kasablanca escreve `h1,\nh2,\nh3, ... h6 {` — sem isto, o line-height 0.85 do display
  // ficava atribuído só ao h6 e o h1 aparecia "sem line-height"). `depth > 1` = bloco aninhado
  // (@media): ignorado de propósito — a 1440px um `max-width: 1000px` não se aplica.
  let sel = '', selBuf = '', depth = 0;

  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;
    if (/:root\s*\{|@theme/.test(line)) inRoot = true;
    if (inRoot && /\}/.test(line) && !/\{/.test(line)) inRoot = false;

    const limpa = line.replace(/\/\*.*?\*\//g, '');
    const nAbre = (limpa.match(/\{/g) || []).length, nFecha = (limpa.match(/\}/g) || []).length;
    if (nAbre && depth === 0) {
      const cabeca = (selBuf + ' ' + limpa.split('{')[0]).replace(/\s+/g, ' ').trim();
      sel = /^@/.test(cabeca) ? '' : cabeca;   // @media/@supports não é seletor
      selBuf = '';
    } else if (!nAbre && !nFecha && depth === 0 && limpa.trim() && !/[:;{}]/.test(limpa)) {
      selBuf += ' ' + limpa;                   // linha de seletor solta ("h1,")
    }

    // Tokens `--text-*` — a escala tipográfica, resolvida a 1440px.
    const tok = line.match(/^\s*(--text-[\w-]+)\s*:\s*([^;]+);/);
    if (tok && !/--line-height$/.test(tok[1])) {
      const px = toPx(tok[2]);
      if (px) {
        textTokens.set(tok[1], px);
        if (px > displayMaxPx) { displayMaxPx = px; displayAt = `${at} ${tok[1]}`; }
        if (tok[1] === '--text-base') { baseTokenPx = px; bodyAt = `${at} (--text-base)`; }
      }
    }
    // Declarações por seletor (CSS escrito à mão).
    const fs = line.match(/font-size:\s*([^;}]+)[;}]/);
    if (fs && sel) {
      const px = fsPx(fs[1]);
      if (px) {
        for (const s of sel.split(',').map(x => x.trim())) elem(s, at).px = px;
        if (px > displayMaxPx) { displayMaxPx = px; displayAt = `${at} (${sel})`; }
        // Corpo = o `p`/`body` nu, nunca uma variante (`p.lg`, `p.mono`).
        if (/^(body|p|html)$/.test(sel) && (bodySelPx === null || sel === 'p')) { bodySelPx = px; bodyAt = `${at} (${sel})`; }
      }
    }
    // Só line-height sem unidade. `line-height: 1.5rem` exige saber o font-size do próprio
    // elemento para virar rácio — sem isso seria palpite, e palpite aqui trava entrega.
    const lh = line.match(/^\s*line-height:\s*([\d.]+)\s*;/);
    if (lh && sel) { const v = num(lh[1]); if (v !== null) for (const s of sel.split(',').map(x => x.trim())) elem(s, at).lh = v; }
    const fw = line.match(/^\s*font-weight:\s*(\d+)/);
    if (fw && sel) for (const s of sel.split(',').map(x => x.trim())) elem(s, at).peso = +fw[1];

    // C3 — hex fora de token
    // Isenções (calibração 2026-07-15 contra projetos reais): fallback de token
    // `var(--x, #hex)` e atributos de SVG inline (stroke=/fill=) são prática legítima.
    const hexes = line.match(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b(?![0-9a-fA-F])/g) || [];
    const isVarFallback = /var\(--[\w-]+\s*,\s*#/.test(line);
    const isSvgAttr = /(stroke|fill|stop-color)\s*=\s*["']#/.test(line);
    if (hexes.length && !isTokenFile && !inRoot && !isVarFallback && !isSvgAttr
        && !/--[\w-]+\s*:/.test(line) && !/^\s*(\/\/|\/\*|\*|<!--)/.test(line.trimStart()))
      add('C3 hex-fora-de-token', 'FAIL', hexes.join(' '), at);

    // C2 — gradiente multi-matiz (ΔH > 60°)
    if (/(linear|radial|conic)-gradient/.test(line)) {
      const hues = hexes.map(hexToHue).filter(h => h !== null);
      for (let a = 0; a < hues.length; a++) for (let b = a + 1; b < hues.length; b++)
        if (deltaHue(hues[a], hues[b]) > 60) { add('C2 gradiente-multi-matiz', 'FAIL', `ΔH ${Math.round(deltaHue(hues[a], hues[b]))}°`, at); return; }
    }

    // T3 — texto em gradiente
    if (/background-clip:\s*text|-webkit-background-clip:\s*text/.test(line))
      add('T3 texto-em-gradiente', 'FAIL', 'exige exceção de luminância pura documentada', at);

    // M6 — transition: all
    if (/transition:\s*all\b|transition-property:\s*all\b/.test(line))
      add('M6 transition-all', 'FAIL', line.trim().slice(0, 70), at);

    // M2 — coleta easings
    (line.match(/cubic-bezier\([^)]+\)/g) || []).forEach(e => easings.add(e.replace(/\s/g, '')));

    // M11 — loop infinito fora de spinner/skeleton/scroll-indicator
    // (calibração: scroll-indicator é affordance, não decoração; shimmer NÃO é isento — em CTA é violação)
    if (/animation[^;]*\binfinite\b/.test(line) && !/spin(?!ner-cta)|skeleton|loader|loading|marquee|scroll-(dot|indicator|hint)/i.test(line + lines[i - 1]))
      add('M11 loop-infinito', 'WARN', 'ok só em spinner/skeleton/marquee/scroll-indicator — confirmar', at);

    // C4 — blur decorativo acima do teto
    const blur = line.match(/blur\((\d+)px\)/);
    if (blur && +blur[1] > 80 && !/backdrop-filter/.test(line))
      add('C4 glow-blur>80px', 'FAIL', `blur(${blur[1]}px)`, at);

    // LAZY-FANTASMA — bug que custou 3 iteracoes de "o site esta fraco":
    // loading="lazy" numa imagem acima da 2a dobra => nunca carrega no screenshot
    // => a seccao parece VAZIA => toda a gente julga o design e o problema era o atributo.
    if (/loading=["']lazy["']/.test(line) && i < 120)
      add('IMG lazy-fantasma', 'WARN', 'lazy no topo do documento — pode aparecer vazio no QA/1o ecra', at);

    // T8 — peso achatado por força bruta. `font-weight:400!important` sobre .font-semibold
    // apaga a hierarquia inteira: tudo fica regular e a página perde a voz. É o oposto de
    // uma opinião tipográfica — é o template a ser calado à martelada.
    if (/font-weight:\s*[^;]*!important/.test(line))
      add('T8 peso-achatado', 'FAIL', `${(sel || '').slice(0, 40)} ${line.trim().slice(0, 40)}`.trim(), at);

    // M3 / T1 — coletas
    if (/prefers-reduced-motion/.test(line)) hasReducedMotion = true;
    const ff = (line.match(/font-family:\s*([^;}]+)/) || [null, ''])[1];
    if (ff) {
      const partes = ff.split(',').map(x => x.trim().replace(/["']/g, ''));
      const nome = partes[0];
      if (nome && !/var\(|inherit|sans-serif|^serif$|monospace|system-ui/.test(nome)) {
        fontFamilies.add(nome);
        // T10 — guardar o genérico declarado no fim da pilha, se houver.
        fontDecls.push({ nome, generico: partes.slice(1).find(p => /^(serif|sans-serif|monospace|cursive)$/.test(p)) || '' });
      }
    }

    depth += nAbre - nFecha;
    if (depth <= 0) { depth = 0; sel = ''; }
  });
}

// --- T9 / T11 / T7: display via classes Tailwind ---------------------------
// Num projeto Tailwind o CSS só tem `.text-7xl { font-size: var(--text-7xl) }` — o tamanho, o
// leading e o peso do h1 só existem juntos na string de className. É onde vive a verdade.
const displays = [];   // { px, lh, peso, at, origem }
for (const [sel, e] of elementos)
  if (e.px !== null && e.px >= DISPLAY_MIN) displays.push({ ...e, origem: sel });

for (const f of files) {
  if (!/\.(tsx|jsx|html|vue|svelte|astro)$/.test(f)) continue;
  const rel = f.slice(ROOT.length + 1) || f;
  readFileSync(f, 'utf8').split('\n').forEach((line, i) => {
    for (const m of line.matchAll(/class(?:Name)?=["']([^"']+)["']/g)) {
      const classes = m[1].split(/\s+/).filter(Boolean)
        .filter(c => !TW_PREFIXO_INATIVO.test(c))       // 2xl:/dark:/hover: não valem a 1440px
        .map(c => c.replace(TW_PREFIXO_ATIVO, ''));     // md:text-9xl -> text-9xl (aplica-se)
      let px = null;
      for (const c of classes) {
        const t = c.match(/^text-((?:\d)?x?[sml]|[2-9]?xl|base)$/);
        if (t && textTokens.has(`--text-${t[1]}`)) px = Math.max(px ?? 0, textTokens.get(`--text-${t[1]}`));
        const arb = c.match(/^text-\[([^\]]+)\]$/);
        if (arb) { const v = toPx(arb[1]); if (v) px = Math.max(px ?? 0, v); }
      }
      if (px === null || px < DISPLAY_MIN) continue;
      let lh = null, peso = null;
      for (const c of classes) {
        const la = c.match(/^leading-\[([\d.]+)\]$/); if (la) lh = num(la[1]);
        const ln = c.match(/^leading-(none|tight|snug|normal|relaxed|loose)$/); if (ln) lh = TW_LEADING[ln[1]];
        const p = c.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/); if (p) peso = TW_PESO[p[1]];
      }
      displays.push({ px, lh, peso, at: `${rel}:${i + 1}`, origem: m[1].slice(0, 34) });
      if (px > displayMaxPx) { displayMaxPx = px; displayAt = `${rel}:${i + 1}`; }
    }
  });
}

// T9 / T11 — só reprova o que CONSEGUE medir. lh/peso não declarado = herdado = desconhecido;
// inventar um default aqui seria reprovar a referência por aquilo que ela não escreveu.
const t9Vistos = new Set(), t11Vistos = new Set();
for (const d of displays) {
  if (d.lh !== null && d.lh > T9_LH_MAX && !t9Vistos.has(d.at)) {
    t9Vistos.add(d.at);
    add('T9 lh-display', 'FAIL', `display ${Math.round(d.px)}px com line-height ${d.lh} (máx. ${T9_LH_MAX}) — leading de corpo num display: o bloco não vira massa gráfica`, d.at);
  }
  if (d.peso !== null && d.peso < T11_PESO_MIN && !t11Vistos.has(d.at)) {
    t11Vistos.add(d.at);
    add('T11 peso-display', 'FAIL', `display ${Math.round(d.px)}px com font-weight ${d.peso} (mín. ${T11_PESO_MIN}) — display sem peso não tem voz`, d.at);
  }
}

// T7 — rácio display:corpo. É a medida de presença tipográfica: sem salto, tudo parece o mesmo.
const corpoPx = baseTokenPx ?? bodySelPx;
if (displayMaxPx && corpoPx) {
  const ratio = displayMaxPx / corpoPx;
  if (ratio < T7_RATIO_MIN)
    add('T7 ratio-display', T7_NIVEL, `${ratio.toFixed(1)}× (mín. ${T7_RATIO_MIN}×) — display ${Math.round(displayMaxPx)}px vs corpo ${corpoPx.toFixed(1)}px @${VW_REF}px [${displayAt}] · mede o MAIOR display, não o h1: o h1 real pode ser mais achatado`, bodyAt || '(projeto)');
}
// T12 — corpo minúsculo. Público local, muitas vezes idoso, a ler texto de telemóvel no desktop.
if (corpoPx && corpoPx < T12_CORPO_MIN)
  add('T12 corpo-minusculo', 'FAIL', `corpo ${corpoPx.toFixed(1)}px @${VW_REF}px (mín. ${T12_CORPO_MIN}px)`, bodyAt || '(projeto)');

// T10 — contraste de género. 2+ famílias e nenhuma com voz (serif/display) = duas sans que
// ninguém distingue: o custo de 2 fontes sem o benefício de contraste nenhum.
if (fontFamilies.size >= 2) {
  const comVoz = fontDecls.filter(d => SERIF_DISPLAY.test(d.nome) || d.generico === 'serif');
  if (!comVoz.length)
    add('T10 contraste-genero', 'WARN', `${fontFamilies.size} famílias, nenhuma serif/display: ${[...fontFamilies].join(', ')} — heurística por nome, confirmar no ecrã`, '(projeto)');
}

// --- Varredura larga: E6 / E7 / E8 / COPY1 ---------------------------------
const codeFiles = existsSync(ROOT) ? walkCode(ROOT) : [];
let langAchado = null, langAt = '';
let ptSinais = 0;
const e6Vistos = new Set(), e8Vistos = new Set();

for (const f of codeFiles) {
  const rel = f.slice(ROOT.length + 1) || f;
  const text = readFileSync(f, 'utf8');
  if (PT_SINAL.test(text)) ptSinais++;

  const ehCopy = COPY_FILE.test(basename(f)) || COPY_DIR.test(f);
  text.split('\n').forEach((line, i) => {
    const at = `${rel}:${i + 1}`;

    // E6 — sobra do template de origem. 1 achado por ficheiro+termo: o que interessa é
    // o ficheiro a limpar, não as 40 linhas onde o nome aparece.
    const lo = line.match(LEFTOVER);
    if (lo && !e6Vistos.has(rel + lo[0].toLowerCase())) {
      e6Vistos.add(rel + lo[0].toLowerCase());
      add('E6 leftover-template', 'FAIL', `"${lo[0]}" — sobra do template/scaffold`, at);
    }

    // E8 — fonte por CDN externo. Ver isenção documentada no topo (api.fontshare.com).
    if (FONT_CDN.test(line) && !FONT_CDN_ISENTO.test(line) && !e8Vistos.has(rel)) {
      e8Vistos.add(rel);
      add('E8 fonte-cdn', 'FAIL', `${(line.match(FONT_CDN) || [''])[0]} — self-host (next/font/@font-face) é o canon §8`, at);
    }

    // E7 — recolha do <html lang>.
    const lg = line.match(/<html[^>]*\blang=["']([^"']+)["']/);
    if (lg && !langAchado) { langAchado = lg[1]; langAt = at; }

    // COPY1 — travessão e emoji na copy. Ambos são a assinatura de texto gerado por IA,
    // e vendemos exatamente o contrário. Travessão → vírgula.
    if (ehCopy) {
      if (line.includes('—')) add('COPY1 travessao', 'FAIL', `travessão (—) na copy: ${line.trim().slice(0, 50)}`, at);
      const em = line.match(EMOJI);
      if (em) add('COPY1 emoji', 'FAIL', `emoji "${em[0]}" na copy — usar SVG de linha`, at);
    }
  });
}

// E7 — idioma. Com brief, compara com `brief.lang`; sem brief, só reprova o caso indefensável:
// `lang="en"` num site com copy portuguesa. Um site PT que se anuncia como inglês perde o
// leitor de ecrã, o Google e a pronúncia — e é sobra do template, não decisão.
if (langAchado === null && files.some(f => /\.html$/.test(f)))
  add('E7 lang', 'FAIL', '<html lang> ausente', '(projeto)');
else if (langAchado) {
  const esperado = brief?.lang;
  if (esperado && langAchado.split('-')[0] !== esperado.split('-')[0])
    add('E7 lang', 'FAIL', `<html lang="${langAchado}"> mas o brief diz "${esperado}"`, langAt);
  else if (!esperado && /^en\b/i.test(langAchado) && ptSinais >= 2)
    add('E7 lang', 'FAIL', `<html lang="${langAchado}"> num site com copy PT (${ptSinais} ficheiros com sinais PT)`, langAt);
}

// C8 — acento difuso. Do brief (`tokens.brand`) ou, sem brief, a cor não-neutra mais frequente.
// Acento em todo o lado = acento em lado nenhum: sem escassez não há signature moment (Lei C6/C8).
const acento = brief?.tokens?.brand?.match(/#[0-9a-fA-F]{3,8}/)?.[0];
if (acento) {
  const alvo = acento.toLowerCase();
  const textos = files.map(f => [f.slice(ROOT.length + 1) || f, readFileSync(f, 'utf8').split('\n')]);
  // Passagem 1 — que tokens SÃO o acento (e que aliases apontam para eles). Tem de vir antes
  // da contagem: no Tailwind o `:root` está na linha 8760 e os usos na 3000.
  const tokensDoAcento = new Set();
  for (const [, lines] of textos) for (const line of lines) {
    const t = line.match(/^\s*(--[\w-]+)\s*:\s*(.+?);/);
    if (!t) continue;
    if (t[2].toLowerCase().includes(alvo)) tokensDoAcento.add(t[1]);
    else for (const j of [...tokensDoAcento]) if (t[2].includes(`var(${j})`)) tokensDoAcento.add(t[1]);
  }
  // Passagem 2 — contar hex literal + cada `var(--token-do-acento)`.
  let usos = 0, primeiro = '';
  for (const [rel, lines] of textos) lines.forEach((line, i) => {
    let n = line.toLowerCase().includes(alvo) ? 1 : 0;
    for (const t of tokensDoAcento) n += (line.split(`var(${t})`).length - 1);
    if (n) { usos += n; primeiro ||= `${rel}:${i + 1}`; }
  });
  if (usos > 3)
    add('C8 acento-difuso', 'WARN', `acento ${acento} em ${usos} usos (>3) via ${[...tokensDoAcento].join(', ') || 'hex literal'} — confirmar no ecrã se passa dos 10% de pixéis (Lei C6)`, primeiro || '(projeto)');
}

// M2 — easings distintos
if (easings.size > 2) add('M2 easings', 'FAIL', `${easings.size} curvas distintas (máx. 2): ${[...easings].slice(0, 4).join(' ')}`, '(projeto)');
// T1 — famílias
if (fontFamilies.size > 3) add('T1 fontes', 'FAIL', `${fontFamilies.size} famílias (máx. 2+1 mono): ${[...fontFamilies].join(', ')}`, '(projeto)');
// M3 — reduced motion
if (!hasReducedMotion && files.length) add('M3 prefers-reduced-motion', 'FAIL', 'ausente no projeto inteiro', '(projeto)');
// S1 — libs banidas
const pkgPath = join(ROOT, 'package.json');
if (existsSync(pkgPath)) {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  for (const lib of BANNED_LIBS) if (Object.keys(deps || {}).some(d => d.includes(lib)))
    add('S1 lib-banida', 'FAIL', lib, 'package.json');
}

// Relatório
const fails = findings.filter(f => f.level === 'FAIL');
const warns = findings.filter(f => f.level === 'WARN');
console.log(`\nGate da Lei de Estética — ${files.length} arquivos varridos em ${ROOT} (tipografia resolvida a ${VW_REF}px)\n`);
// Agrupar por regra e limitar POR REGRA. Um corte global nos 60 escondia as regras de projeto
// (T7/T12/M2/M3) atrás de 25 hex repetidos — o gate reprovava e não dizia porquê.
const porRegra = new Map();
for (const f of findings) { if (!porRegra.has(f.rule)) porRegra.set(f.rule, []); porRegra.get(f.rule).push(f); }
const ordem = [...porRegra.entries()].sort((a, b) => (a[1][0].level === 'FAIL' ? 0 : 1) - (b[1][0].level === 'FAIL' ? 0 : 1));
for (const [rule, fs] of ordem) {
  console.log(`  ${fs[0].level === 'FAIL' ? '🔴' : '🟡'} [${rule}] ×${fs.length}`);
  for (const f of fs.slice(0, 4)) console.log(`      ${f.msg}  — ${f.at}`);
  if (fs.length > 4) console.log(`      … +${fs.length - 4} ocorrências`);
}
console.log(`\n${fails.length ? `❌ ${fails.length} FAIL` : '✅ 0 FAIL'} · ${warns.length} WARN`);
console.log('Lembrete: este gate cobre só a camada grep-ável. Rode também o passe visual (screenshot 375px+1440px vs Lei §10) e axe-core.\n');
process.exit(fails.length ? 1 : 0);
