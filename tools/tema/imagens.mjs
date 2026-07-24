#!/usr/bin/env node
/**
 * IMAGENS — avalia as fotos colhidas do negócio e distribui-as pelas dobras.
 *
 * Uso:
 *   node tools/tema/imagens.mjs <pasta-de-fotos> [--slug <cliente>] [--json]
 *   node tools/tema/imagens.mjs clientes/virtudes/assets/fotos --slug virtudes
 *
 * PORQUE ISTO EXISTE
 * As fotos vêm do negócio real (Google Maps, redes, site antigo, montra), e é isso que faz
 * o site ser DELE. Mas colher não chega: uma foto pode ser real e continuar a não servir.
 *
 * A LIÇÃO QUE ESTÁ NA ORIGEM DISTO, e que já custou caro no projeto:
 * um site servia `dsc_6467.jpg` num herói de largura inteira. A foto era real, era do cliente,
 * e tinha **255x170 pixéis**. A 1440 de largura, são 5,6× de ampliação. Nenhum `object-fit`,
 * nenhum `image-rendering`, nenhum CSS do mundo inventa pixéis que não existem. Foram gastas
 * iterações a discutir o design quando o problema era a fonte.
 * Por isso a primeira coisa que esta ferramenta faz é MEDIR, lendo o cabeçalho do ficheiro.
 * O `<img>` grande no HTML do site antigo não prova resolução nenhuma.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, extname, basename, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');

/* ================================================================== *
 * Medir de verdade: ler o cabeçalho, sem biblioteca de imagem
 * ================================================================== */

/** @returns {{w:number,h:number,formato:string}|null} */
export function medirImagem(caminho) {
  let b;
  try { b = readFileSync(caminho); } catch { return null; }

  // PNG: assinatura + IHDR nos bytes 16..23
  if (b.length > 24 && b.toString('hex', 0, 8) === '89504e470d0a1a0a')
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20), formato: 'png' };

  // GIF
  if (b.length > 10 && (b.toString('ascii', 0, 6) === 'GIF87a' || b.toString('ascii', 0, 6) === 'GIF89a'))
    return { w: b.readUInt16LE(6), h: b.readUInt16LE(8), formato: 'gif' };

  // WebP (VP8 / VP8L / VP8X)
  if (b.length > 30 && b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const t = b.toString('ascii', 12, 16);
    if (t === 'VP8X') return { w: (b.readUIntLE(24, 3) & 0xffffff) + 1, h: (b.readUIntLE(27, 3) & 0xffffff) + 1, formato: 'webp' };
    if (t === 'VP8 ') return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff, formato: 'webp' };
    if (t === 'VP8L') {
      const n = b.readUInt32LE(21);
      return { w: (n & 0x3fff) + 1, h: ((n >> 14) & 0x3fff) + 1, formato: 'webp' };
    }
  }

  // JPEG: percorrer marcadores até um SOF. É o caso que mais interessa, porque é o formato
  // em que os sites antigos servem as miniaturas que parecem grandes no HTML.
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length - 9) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
        return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7), formato: 'jpeg' };
      i += 2 + b.readUInt16BE(i + 2);
    }
  }

  // SVG: vetorial, escala sem perder. width/height só informam a proporção.
  if (/\.svg$/i.test(caminho)) {
    const t = b.toString('utf8', 0, 800);
    const w = +(t.match(/\bwidth=["']?([\d.]+)/) || [])[1] || 0;
    const h = +(t.match(/\bheight=["']?([\d.]+)/) || [])[1] || 0;
    const vb = (t.match(/viewBox=["']\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)/) || []);
    return { w: w || +vb[1] || 0, h: h || +vb[2] || 0, formato: 'svg', vetorial: true };
  }
  return null;
}

/* ================================================================== *
 * Requisitos por slot
 * ================================================================== */

/**
 * O que cada tipo de slot EXIGE de uma foto.
 *
 * `larguraMin` é o número que impede o defeito de origem. Uma foto de herói é servida a
 * largura inteira: num ecrã de 1440 com densidade 2×, precisa de ~2400px para não ficar
 * mole. Ampliar não é opção, e reduzir a foto no ecrã para a esconder é desistir da dobra.
 */
export const REQUISITOS = {
  hero:      { larguraMin: 1800, proporcao: 'larga',    n: 1,  porque: 'ocupa o ecrã inteiro, é a primeira coisa que se vê' },
  banner:    { larguraMin: 1600, proporcao: 'larga',    n: 1,  porque: 'faixa de largura inteira' },
  galeria:   { larguraMin: 1000, proporcao: 'qualquer', n: 6,  porque: 'aparecem em grelha, cada uma ocupa parte do ecrã' },
  ficha:     { larguraMin: 900,  proporcao: 'alta',     n: 6,  porque: 'cartões verticais que passam no scroll' },
  postal:    { larguraMin: 700,  proporcao: 'alta',     n: 5,  porque: 'pequenas e inclinadas no rodapé' },
  retrato:   { larguraMin: 600,  proporcao: 'quadrada', n: 1,  porque: 'foto de pessoa, recortada em círculo ou quadrado' },
  cta:       { larguraMin: 1200, proporcao: 'alta',     n: 1,  porque: 'meia página ao lado do bloco de reserva' },
  logotipo:  { larguraMin: 200,  proporcao: 'qualquer', n: 1,  porque: 'vetorial de preferência; em bitmap, o dobro do tamanho de exibição' },
};

const proporcaoDe = ({ w, h }) => {
  if (!w || !h) return 'desconhecida';
  const r = w / h;
  if (r >= 1.35) return 'larga';
  if (r <= 0.8) return 'alta';
  return 'quadrada';
};

const serve = (foto, req) => {
  if (foto.vetorial) return true;
  if (foto.w < req.larguraMin) return false;
  if (req.proporcao === 'qualquer') return true;
  // uma foto larga cortada em alta perde metade; uma alta cortada em larga perde o topo e o pé.
  // Aceita-se o corte quando sobra resolução de sobra para ele.
  if (foto.proporcao === req.proporcao) return true;
  return foto.w >= req.larguraMin * 1.5;
};

/* ================================================================== *
 * Avaliar e distribuir
 * ================================================================== */

export function avaliar(pasta) {
  const dir = resolve(ROOT, pasta);
  if (!existsSync(dir)) throw new Error(`pasta não existe: ${pasta}`);
  const fotos = [];
  const ignoradas = [];

  const andar = (d) => {
    for (const nome of readdirSync(d)) {
      const p = join(d, nome);
      if (statSync(p).isDirectory()) { andar(p); continue; }
      if (!/\.(jpe?g|png|webp|gif|svg|avif)$/i.test(nome)) continue;
      const m = medirImagem(p);
      const tamanho = statSync(p).size;
      if (!m || (!m.w && !m.vetorial)) { ignoradas.push({ ficheiro: nome, porque: 'não foi possível ler as dimensões' }); continue; }
      fotos.push({
        ficheiro: nome, caminho: p.slice(ROOT.length + 1).replace(/\\/g, '/'),
        w: m.w, h: m.h, formato: m.formato, vetorial: !!m.vetorial,
        proporcao: m.vetorial ? 'qualquer' : proporcaoDe(m),
        kb: Math.round(tamanho / 1024),
        megapixel: m.vetorial ? null : +((m.w * m.h) / 1e6).toFixed(2),
      });
    }
  };
  andar(dir);
  return { fotos, ignoradas };
}

export function distribuir(fotos, slots = Object.keys(REQUISITOS)) {
  /* Ordem de atribuição: do slot mais EXIGENTE para o menos. Servir primeiro o herói e só
   * depois a galeria evita o caso em que a única foto grande foi gasta num postal de rodapé
   * e o herói fica sem candidato nenhum. */
  const ordem = [...slots].sort((a, b) => (REQUISITOS[b]?.larguraMin || 0) - (REQUISITOS[a]?.larguraMin || 0));
  const usadas = new Set();
  const plano = {};
  const faltas = [];

  for (const slot of ordem) {
    const req = REQUISITOS[slot];
    if (!req) continue;
    const candidatas = fotos
      .filter(f => !usadas.has(f.caminho) && serve(f, req))
      .sort((a, b) => (b.megapixel || 99) - (a.megapixel || 99));

    const escolhidas = candidatas.slice(0, req.n);
    escolhidas.forEach(f => usadas.add(f.caminho));
    plano[slot] = escolhidas.map(f => f.caminho);

    if (escolhidas.length < req.n) {
      // reserva de emergência: sem material, o motor CICLA as que há em vez de inventar
      const emFalta = req.n - escolhidas.length;
      const reserva = fotos.filter(f => serve(f, req));
      faltas.push({
        slot, pedia: req.n, tem: escolhidas.length, faltam: emFalta,
        porque: req.porque,
        saida: reserva.length
          ? `o motor cicla as ${reserva.length} que servem (nunca repete duas seguidas)`
          : `NENHUMA foto serve este slot: ou se colhem mais, ou a dobra sai do site`,
      });
    }
  }

  const sobra = fotos.filter(f => !usadas.has(f.caminho));
  return { plano, faltas, sobra };
}

/* ================================================================== *
 * CLI
 * ================================================================== */

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const arg = (n, d = null) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
  const pasta = process.argv[2];
  if (!pasta || pasta.startsWith('--')) {
    console.error('uso: node tools/tema/imagens.mjs <pasta-de-fotos> [--slug <cliente>] [--json]');
    process.exit(1);
  }
  try {
    const { fotos, ignoradas } = avaliar(pasta);
    const { plano, faltas, sobra } = distribuir(fotos);

    if (process.argv.includes('--json')) {
      console.log(JSON.stringify({ fotos, ignoradas, plano, faltas, sobra: sobra.map(f => f.caminho) }, null, 2));
      process.exit(faltas.some(f => /NENHUMA/.test(f.saida)) ? 1 : 0);
    }

    console.log(`\nFotos colhidas do negócio — ${pasta}\n`);
    if (!fotos.length) { console.log('  nenhuma foto encontrada.\n'); process.exit(1); }

    const pequenas = fotos.filter(f => !f.vetorial && f.w < 1000);
    console.log(`  ${fotos.length} foto(s) medidas no cabeçalho do ficheiro:`);
    for (const f of [...fotos].sort((a, b) => (b.megapixel || 0) - (a.megapixel || 0)).slice(0, 12))
      console.log(`    ${String(f.w + '×' + f.h).padEnd(11)} ${String(f.proporcao).padEnd(10)} ${String(f.kb + 'KB').padEnd(8)} ${f.ficheiro}`);
    if (fotos.length > 12) console.log(`    … +${fotos.length - 12}`);

    if (pequenas.length) {
      console.log(`\n  ⚠ ${pequenas.length} foto(s) abaixo de 1000px de largura.`);
      console.log(`    Isto não se corrige com CSS: ampliar não inventa pixéis. Já custou iterações`);
      console.log(`    a este projeto discutir design quando o problema era uma foto de 255×170.`);
      console.log(`    Se o site antigo servia miniaturas, procurar os originais (em WordPress,`);
      console.log(`    tirar /cache/ do URL e o sufixo -LARGURAxALTURA costuma devolver o original).`);
    }
    if (ignoradas.length) console.log(`\n  ${ignoradas.length} ficheiro(s) ilegíveis: ${ignoradas.slice(0, 3).map(i => i.ficheiro).join(', ')}`);

    console.log(`\n  distribuição pelas dobras (do slot mais exigente para o menos):`);
    for (const [slot, lista] of Object.entries(plano)) {
      const req = REQUISITOS[slot];
      const marca = lista.length >= req.n ? '✓' : lista.length ? '·' : '✗';
      console.log(`    ${marca} ${slot.padEnd(9)} ${String(lista.length + '/' + req.n).padEnd(6)} ${req.larguraMin}px+ ${req.proporcao}`);
    }

    if (faltas.length) {
      console.log(`\n  ${faltas.length} slot(s) sem material suficiente:`);
      for (const f of faltas) {
        console.log(`    ${f.slot}: tem ${f.tem} de ${f.pedia} (${f.porque})`);
        console.log(`      → ${f.saida}`);
      }
      console.log(`\n    Regra do motor: o CONTEÚDO manda sobre a imagem. Nunca se inventa uma`);
      console.log(`    dobra para dar uso a uma foto, nem se usa stock para tapar um buraco.`);
    }
    if (sobra.length) console.log(`\n  ${sobra.length} foto(s) por usar: material para variar noutra composição.`);
    console.log('');
    process.exit(faltas.some(f => /NENHUMA/.test(f.saida)) ? 1 : 0);
  } catch (e) {
    console.error(`\n✗ ${e.message}\n`);
    process.exit(1);
  }
}
