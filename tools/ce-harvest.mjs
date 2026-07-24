#!/usr/bin/env node
/**
 * Colheita do Code Eagle — Prospector Premium
 * Uso:
 *   node ce-harvest.mjs list                    → mostra o catálogo local
 *   node ce-harvest.mjs pull <nome|todos>       → baixa e extrai para bank/_raw/
 *   node ce-harvest.mjs scan <nome>             → analisa um template já baixado
 *
 * POR QUE ISTO EXISTE
 * O Code Eagle é a assinatura do Mateus (licença comercial p/ projeto de cliente).
 * As páginas são ZIPs de HTML/CSS/JS puro (Vite ou estático) — formato compatível
 * com os nossos blocos, ao contrário de 21st.dev/MagicUI (React/TSX, não plugam).
 *
 * REGRA DE USO (importante):
 * Isto NÃO copia template inteiro para o site do cliente. Serve para (a) estudar a
 * TÉCNICA (ex: o motor de scroll-reveal com GSAP do "vetic"), e (b) extrair peças
 * pontuais que são então ADAPTADAS aos nossos tokens e à Lei de Estética.
 * Template copiado cru = todo cliente igual = o problema que viemos resolver.
 *
 * Nota de proveniência: o HOW_TO_USE.md de alguns pacotes revela que são
 * "GetLayers templates" redistribuídos. Registado para o Mateus saber a origem.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const BANK = join(ROOT, 'bank');
const RAW = join(BANK, '_raw');
const CAT = join(BANK, 'catalogo.json');
const BASE = 'https://eynifdmidipyhvdwmfes.supabase.co/storage/v1/object/public/wrepo-zips/';

const cmd = process.argv[2];
const arg = process.argv[3];

const catalogo = existsSync(CAT) ? JSON.parse(readFileSync(CAT, 'utf8')) : { secoes: [] };
const nomeDe = z => (z.split('-')[1] || z).replace(/\.zip$/, '');

/** O catálogo contém nomes de ficheiro, não URLs nem caminhos locais. */
export function urlDoZip(zip) {
  if (typeof zip !== 'string' || !/^[a-z0-9][a-z0-9._-]*\.zip$/i.test(zip))
    throw new Error(`nome de pacote inválido: ${zip}`);
  return new URL(encodeURIComponent(zip), BASE).href;
}

export function pull(zip, { executar = execFileSync } = {}) {
  const url = urlDoZip(zip);
  const nome = nomeDe(zip);
  const dir = join(RAW, nome);
  if (existsSync(dir)) return { nome, cache: true };
  mkdirSync(dir, { recursive: true });
  const tmp = join(RAW, `${nome}.zip`);
  try {
    // Sem shell: nome, destino e URL entram como argumentos separados tanto no Windows quanto
    // no POSIX. Isto elimina metacaracteres de cmd.exe/bash da superfície de execução.
    executar('curl', ['-sL', '--max-time', '90', '-o', tmp, url], { stdio: 'pipe' });
    executar('unzip', ['-qo', tmp, '-d', dir], { stdio: 'pipe' });
    return { nome, cache: false };
  } finally {
    // `rm` não existe por omissão no Windows; a API do Node é portátil e não invoca shell.
    rmSync(tmp, { force: true });
  }
}

function scan(nome) {
  const dir = join(RAW, nome);
  if (!existsSync(dir)) return { nome, erro: 'não baixado — corre "pull" primeiro' };
  const files = [];
  (function walk(d) {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      if (statSync(p).isDirectory()) walk(p);
      else files.push({ p, rel: p.slice(dir.length + 1), kb: +(statSync(p).size / 1024).toFixed(1) });
    }
  })(dir);
  const html = files.filter(f => f.rel.endsWith('.html'));
  const src = html.map(f => readFileSync(f.p, 'utf8')).join('\n');
  const libs = [...new Set((src.match(/gsap|lenis|three|anime|tailwind|swiper|splitting|barba|locomotive|react|vue/gi) || [])
    .map(s => s.toLowerCase()))];
  const secoes = [...new Set((src.match(/<section[^>]*class="([^"]+)"/g) || [])
    .map(s => (s.match(/class="([^"]+)"/) || [])[1]).filter(Boolean))];
  return {
    nome,
    peso_total_kb: +files.reduce((a, f) => a + f.kb, 0).toFixed(1),
    ficheiros: files.length,
    html: html.map(f => `${f.rel} (${f.kb}kb)`),
    libs,
    react: libs.includes('react') || libs.includes('vue'),
    secoes: secoes.slice(0, 12),
  };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href && cmd === 'list') {
  console.log(`\nCatálogo local — ${catalogo.secoes.length} peças\n`);
  const baixados = existsSync(RAW) ? readdirSync(RAW) : [];
  catalogo.secoes.forEach((z, i) => {
    const n = nomeDe(z);
    console.log(`  ${String(i + 1).padStart(3)}. ${n.padEnd(24)} ${baixados.includes(n) ? '✓ local' : ''}`);
  });
  console.log(`\n  ${baixados.length} baixado(s) em bank/_raw/\n`);
} else if (import.meta.url === pathToFileURL(process.argv[1]).href && cmd === 'pull') {
  if (!arg) { console.error('uso: node ce-harvest.mjs pull <nome|todos>'); process.exit(1); }
  mkdirSync(RAW, { recursive: true });
  const alvos = arg === 'todos' ? catalogo.secoes : catalogo.secoes.filter(z => nomeDe(z).includes(arg));
  if (!alvos.length) { console.error(`nada encontrado para "${arg}"`); process.exit(1); }
  console.log(`\nA baixar ${alvos.length} pacote(s)...\n`);
  for (const z of alvos) {
    try {
      const r = pull(z);
      const s = scan(r.nome);
      console.log(`  ✓ ${r.nome.padEnd(22)} ${String(s.peso_total_kb).padStart(7)} kb  ${s.libs.join(',') || '—'}${r.cache ? '  (cache)' : ''}`);
    } catch (e) { console.log(`  ✗ ${nomeDe(z)} — ${e.message.split('\n')[0]}`); }
  }
  console.log('');
} else if (import.meta.url === pathToFileURL(process.argv[1]).href && cmd === 'scan') {
  console.log(JSON.stringify(scan(arg), null, 2));
} else if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(`
Colheita do Code Eagle

  node ce-harvest.mjs list              catálogo local (${catalogo.secoes.length} peças)
  node ce-harvest.mjs pull vetic        baixa+extrai (filtro por nome)
  node ce-harvest.mjs pull todos        baixa tudo (pesado — ~100 pacotes)
  node ce-harvest.mjs scan vetic        analisa peso, libs e seções

Depois de colher: adapte a peça aos nossos tokens e grave em blocks/<tipo>/<variante>.html.
NUNCA copie o template cru para o cliente — a Lei manda 1 signature moment, não 1 template repetido.
`);
}
