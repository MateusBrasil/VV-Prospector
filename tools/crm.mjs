#!/usr/bin/env node
/**
 * CRM local — Prospector Premium
 * Uso: node crm.mjs init
 *      node crm.mjs add <brief.json>
 *      node crm.mjs status <slug> <novo-status>
 *      node crm.mjs set <slug> <campo> <valor>
 *      node crm.mjs list [--status <s>] [--json]
 *
 * POR QUE ISTO EXISTE
 * O motor gera sites; sem isto, o funil vive na cabeça do operador — e lead esquecido é lead
 * perdido. O original tinha um dashboard Python com servidor HTTP; aqui a fonte da verdade é
 * um ficheiro só (prospector.db) que os outros tools escrevem sozinhos (deploy.mjs marca
 * "publicado"). CLI > servidor: não há porta para esquecer aberta nem processo para morrer.
 *
 * BACKEND: node:sqlite (nativo desde o Node 22). Verificado neste ambiente — Node v24.16.0,
 * require('node:sqlite') OK. Se um dia faltar (Node <22), cai sozinho para prospector.json
 * com a MESMA API — nenhum comando muda. O fallback é testado com PROSPECTOR_FORCE_JSON=1.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DB_SQLITE = join(RAIZ, 'prospector.db');
const DB_JSON = join(RAIZ, 'prospector.json');

const CAMPOS = ['slug', 'nome', 'nicho', 'site_antigo', 'url_nova', 'url_capa', 'email',
  'telefone', 'nota', 'avaliacoes', 'status', 'valor', 'data_proposta', 'notas'];

const STATUS = ['novo', 'redesenhado', 'publicado', 'proposta_enviada', 'respondeu', 'fechado', 'descartado'];

/* ---------- backend ---------- */
let sqlite = null;
if (!process.env.PROSPECTOR_FORCE_JSON) {
  try { sqlite = await import('node:sqlite'); } catch { sqlite = null; }
}
const MODO = sqlite ? 'sqlite' : 'json';

const agora = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

function abrir() {
  if (sqlite) {
    const db = new sqlite.DatabaseSync(DB_SQLITE);
    db.exec(`CREATE TABLE IF NOT EXISTS leads(
      slug TEXT PRIMARY KEY, nome TEXT, nicho TEXT, site_antigo TEXT, url_nova TEXT,
      url_capa TEXT, email TEXT, telefone TEXT, nota TEXT, avaliacoes TEXT,
      status TEXT DEFAULT 'novo', valor REAL, data_proposta TEXT, notas TEXT,
      atualizado TEXT)`);
    return db;
  }
  return { linhas: existsSync(DB_JSON) ? JSON.parse(readFileSync(DB_JSON, 'utf8')) : [] };
}
function guardar(h) { if (!sqlite) writeFileSync(DB_JSON, JSON.stringify(h.linhas, null, 2), 'utf8'); }
function fechar(h) { if (sqlite) h.close(); }

function todos(h) {
  if (sqlite) return h.prepare('SELECT * FROM leads ORDER BY atualizado DESC').all();
  return [...h.linhas].sort((a, b) => String(b.atualizado).localeCompare(String(a.atualizado)));
}
function achar(h, slug) {
  if (sqlite) return h.prepare('SELECT * FROM leads WHERE slug = ?').get(slug);
  return h.linhas.find(l => l.slug === slug);
}
function gravar(h, lead) {
  lead.atualizado = agora();
  if (sqlite) {
    const cols = [...CAMPOS, 'atualizado'];
    h.prepare(`INSERT OR REPLACE INTO leads (${cols.join(',')}) VALUES (${cols.map(() => '?').join(',')})`)
      .run(...cols.map(k => lead[k] ?? null));
  } else {
    const i = h.linhas.findIndex(l => l.slug === lead.slug);
    if (i > -1) h.linhas[i] = lead; else h.linhas.push(lead);
  }
}

/* ---------- comandos ---------- */
const [cmd, ...args] = process.argv.slice(2);
const temFlag = n => process.argv.includes(`--${n}`);
const valFlag = n => { const i = process.argv.indexOf(`--${n}`); return i > -1 ? process.argv[i + 1] : undefined; };

function uso() {
  console.error(`uso:
  node crm.mjs init
  node crm.mjs add <brief.json>
  node crm.mjs status <slug> <${STATUS.join('|')}>
  node crm.mjs set <slug> <campo> <valor>     campos: ${CAMPOS.join(', ')}
  node crm.mjs list [--status <s>] [--json]
  node crm.mjs followup [dias] [--json]        leads com proposta há N+ dias (padrão 3) sem follow-up`);
  process.exit(1);
}

const h = abrir();

try {
  if (cmd === 'init') {
    guardar(h);
    console.log(`✓ CRM pronto · backend ${MODO} · ${sqlite ? DB_SQLITE : DB_JSON}`);
    console.log(`  estados: ${STATUS.join(' → ')}`);

  } else if (cmd === 'add') {
    const p = args[0];
    if (!p) uso();
    const brief = JSON.parse(readFileSync(p, 'utf8'));
    const c = brief.cliente || {};
    const existente = achar(h, brief.slug);
    if (existente) { console.log(`· ${brief.slug} já existe (status ${existente.status}) — nada mudou. Usa "set" para editar.`); }
    else {
      gravar(h, {
        slug: brief.slug, nome: c.nome || brief.slug, nicho: brief.nicho || brief.arquetipo || null,
        site_antigo: brief.siteAntigo || brief.schema?.url || null, url_nova: null, url_capa: null,
        email: c.email || null, telefone: c.telefoneRaw || c.telefone || null,
        nota: c.nota || null, avaliacoes: c.avaliacoes || null,
        status: 'novo', valor: null, data_proposta: null, notas: null,
      });
      guardar(h);
      console.log(`✓ ${brief.slug} adicionado · status novo`);
    }

  } else if (cmd === 'status') {
    const [slug, novo] = args;
    if (!slug || !novo) uso();
    if (!STATUS.includes(novo)) { console.error(`erro: status "${novo}" inválido. Válidos: ${STATUS.join(', ')}`); process.exit(1); }
    const lead = achar(h, slug);
    if (!lead) { console.error(`erro: lead "${slug}" não existe. Corre "node crm.mjs add <brief.json>" primeiro.`); process.exit(1); }
    const antes = lead.status;
    lead.status = novo;
    // data_proposta preenche-se sozinha: é o campo que o operador esquece sempre.
    if (novo === 'proposta_enviada' && !lead.data_proposta) lead.data_proposta = agora().slice(0, 10);
    gravar(h, lead); guardar(h);
    console.log(`✓ ${slug}: ${antes} → ${novo}${lead.data_proposta && novo === 'proposta_enviada' ? ` · data_proposta ${lead.data_proposta}` : ''}`);

  } else if (cmd === 'set') {
    const [slug, campo, ...resto] = args;
    const valor = resto.join(' ');
    if (!slug || !campo || !resto.length) uso();
    if (!CAMPOS.includes(campo)) { console.error(`erro: campo "${campo}" inválido. Válidos: ${CAMPOS.join(', ')}`); process.exit(1); }
    if (campo === 'status') { console.error('erro: usa "node crm.mjs status <slug> <novo>" (valida o estado).'); process.exit(1); }
    const lead = achar(h, slug);
    if (!lead) { console.error(`erro: lead "${slug}" não existe.`); process.exit(1); }
    lead[campo] = campo === 'valor' ? Number(valor) : valor;
    gravar(h, lead); guardar(h);
    console.log(`✓ ${slug}.${campo} = ${lead[campo]}`);

  } else if (cmd === 'list') {
    let linhas = todos(h);
    const f = valFlag('status');
    if (f) linhas = linhas.filter(l => l.status === f);
    if (temFlag('json')) { console.log(JSON.stringify(linhas, null, 2)); }
    else if (!linhas.length) { console.log('(sem leads)'); }
    else {
      const col = (s, n) => String(s ?? '—').slice(0, n).padEnd(n);
      console.log(col('SLUG', 18) + col('NOME', 34) + col('STATUS', 18) + col('NOTA', 6) + 'PROPOSTA');
      console.log('─'.repeat(90));
      for (const l of linhas) console.log(col(l.slug, 18) + col(l.nome, 34) + col(l.status, 18) + col(l.nota, 6) + (l.data_proposta || '—'));
      console.log(`${linhas.length} lead(s) · backend ${MODO}`);
    }

  } else if (cmd === 'followup') {
    // Os leads que já receberam proposta e estão parados há N+ dias, sem follow-up ainda.
    // POR QUE ISTO EXISTE: a data_proposta era gravada mas NADA a lia — o lead esquecido é
    // dinheiro na mesa (a maioria não fecha na 1ª, fecha no 2º toque). Isto é a lista de quem
    // merece o toque, já filtrada: nem cedo demais, nem quem já foi tocado.
    const dias = Number(args[0]) > 0 ? Number(args[0]) : 3;
    const hoje = new Date();
    const diasDe = d => {
      if (!d) return Infinity;
      const t = Date.parse(String(d).slice(0, 10));
      return Number.isNaN(t) ? Infinity : Math.floor((hoje - t) / 86400000);
    };
    // "follow-up" nas notas = já foi tocado uma vez (regra: 1 follow-up por lead, nunca repete).
    const jaTocado = l => /follow-?up/i.test(String(l.notas || ''));
    const elegiveis = todos(h)
      .filter(l => l.status === 'proposta_enviada' && !jaTocado(l))
      .map(l => ({ ...l, _dias: diasDe(l.data_proposta) }))
      .filter(l => l._dias >= dias && l._dias !== Infinity)
      .sort((a, b) => b._dias - a._dias);

    if (temFlag('json')) { console.log(JSON.stringify(elegiveis, null, 2)); }
    else if (!elegiveis.length) {
      console.log(`(nenhum lead em proposta_enviada parado há ${dias}+ dias sem follow-up)`);
    } else {
      const col = (s, n) => String(s ?? '—').slice(0, n).padEnd(n);
      console.log(`Follow-up elegível (proposta há ${dias}+ dias, sem toque ainda) — ${elegiveis.length} lead(s)\n`);
      console.log(col('SLUG', 18) + col('NOME', 30) + col('PROPOSTA', 12) + 'DIAS');
      console.log('─'.repeat(66));
      for (const l of elegiveis) console.log(col(l.slug, 18) + col(l.nome, 30) + col(l.data_proposta, 12) + l._dias);
      console.log(`\nPróximo: /followup escreve o rascunho (1 por lead). Depois: node crm.mjs set <slug> notas "Follow-up enviado em ${agora().slice(0, 10)}"`);
    }

  } else uso();
} finally { fechar(h); }
