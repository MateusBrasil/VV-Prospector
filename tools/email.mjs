#!/usr/bin/env node
/**
 * Rascunho da proposta por email — Prospector Premium
 * Uso: node email.mjs <brief.json> --capa <url> [--config prospector-config.json] [--out dir]
 *
 * POR QUE ISTO EXISTE
 * O email não vende — ele prova trabalho feito e desperta curiosidade. Quem vende é a capa.
 * E um email que cheira a vendedor morre no spam antes de ser lido: por isso o checklist
 * anti-spam do plugin original (que era uma lista em Markdown, i.e. uma sugestão que o LLM
 * podia ignorar) está aqui implementado em CÓDIGO e é BLOQUEANTE — falhou, exit 1.
 *
 * PORTUGAL, não Brasil: tratamento por "você"/nome, telefone +351, canal = email + telefone.
 * Nada de wa.me/55. Este script NUNCA envia nada — só escreve o rascunho para revisão humana.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/* ---------- args ---------- */
const argv = process.argv.slice(2);
const flag = n => { const i = argv.indexOf(`--${n}`); return i > -1 ? argv[i + 1] : undefined; };

const briefPath = argv[0];
if (!briefPath || briefPath.startsWith('--')) {
  console.error('uso: node email.mjs <brief.json> --capa <url> [--config prospector-config.json] [--out dir]');
  process.exit(1);
}
const brief = JSON.parse(readFileSync(briefPath, 'utf8'));
const capa = flag('capa');
if (!capa) { console.error('erro: --capa <url> é obrigatório (é o ÚNICO link do email).'); process.exit(1); }
if (!/^https:\/\//i.test(capa)) { console.error(`erro: a capa tem de ser https:// (recebido: ${capa}). Link http de desconhecido = golpe.`); process.exit(1); }

const cfgPath = flag('config') || 'prospector-config.json';
if (!existsSync(cfgPath)) { console.error(`erro: falta ${cfgPath}. Copia o prospector-config.exemplo.json e preenche a assinatura.`); process.exit(1); }
const cfg = JSON.parse(readFileSync(cfgPath, 'utf8'));
const eu = cfg.assinatura || {};
if (!eu.nome || !eu.email) { console.error('erro: assinatura.nome e assinatura.email são obrigatórios no config (assinatura completa reduz suspeita).'); process.exit(1); }

const c = brief.cliente || {};
const empresa = c.nome || brief.slug;
const outDir = flag('out') || join('sites', brief.slug);

/* ---------- defeitos: vêm do brief, NUNCA inventados aqui ---------- */
// Regra herdada do brief ("zero inventado"): a crítica ao site atual tem de ser observação
// verificada, não suposição do gerador. Sem isto, o email mente — e o lead percebe.
// Exceção: brief.semSite (ver commands/criar-do-zero.md) — não há site atual para observar
// defeito nenhum, então não faz sentido exigi-los. O ângulo do email muda (ver "obs" abaixo).
const semSite = brief.semSite === true;
const defeitos = brief.defeitos || [];
if (!semSite && (!Array.isArray(defeitos) || defeitos.length < 1)) {
  console.error(`erro: o brief não tem "defeitos": ["...", "..."] — 1 a 2 observações OBJETIVAS e verificadas do site atual.
Sem elas o parágrafo 2 seria inventado. Verifica o site do cliente e acrescenta ao ${briefPath} (ou marca "semSite": true se não houver site).`);
  process.exit(1);
}

/* ---------- nome curto (para caber no assunto) ---------- */
const nomeCurto = c.nomeCurto || empresa.replace(/^(cl[íi]nica|centro|consult[óo]rio|hospital)\s+(veterin[áa]ri[oa]|m[ée]dic[oa]|dent[áa]ri[oa])?\s*/i, '').trim() || empresa;
const pessoa = flag('nome') || c.responsavel || c.contacto || '';

/* ---------- assunto: pergunta pessoal, ≤60 chars ---------- */
const candidatos = [
  pessoa ? `${pessoa}, posso mostrar-lhe uma coisa sobre o site?` : null,
  `Posso mostrar-lhe uma coisa sobre o site da ${nomeCurto}?`,
  `Posso mostrar-lhe uma coisa sobre o site da ${nomeCurto}?`.length > 60 ? `Posso mostrar-lhe uma coisa sobre o vosso site?` : null,
].filter(Boolean);
// brief.email.assunto ganha: é a copy aprovada (ex.: do copy-elite), que entra pelo brief.
// Ainda assim passa pelo checklist anti-spam lá em baixo — nada entra sem validação.
const assunto = brief.email?.assunto || candidatos.find(a => a.length <= 60) || 'Posso mostrar-lhe uma coisa sobre o vosso site?';

/* ---------- corpo ---------- */
// "Boa tarde" num email aberto às 8h lê-se a automático. Saudação sem hora do dia.
const saudacao = pessoa ? `Olá, ${pessoa}.` : 'Olá,';
const elogio = c.nota
  ? `Encontrei a ${empresa} e fui ver as avaliações: ${c.nota} no Google${c.avaliacoes ? `, com ${c.avaliacoes} avaliações` : ''}. Isso não se compra.`
  : `Encontrei a ${empresa} e fiquei com boa impressão do trabalho que fazem.`;
// semSite: não há site para observar defeito nenhum — o ângulo vira "notei que ainda não têm
// site" em vez de "notei um problema no site" (ver commands/criar-do-zero.md).
const obs = semSite
  ? `Depois procurei e não encontrei um site próprio, só a vossa página no Google e nas redes.`
  : defeitos.length === 1
    ? `Depois fui ao site e notei uma coisa: ${defeitos[0]}.`
    : `Depois fui ao site e notei duas coisas: ${defeitos[0]}; e ${defeitos[1]}.`;
// Corpo: o do brief (copy aprovada, ex. copy-elite) ganha ao automático. O corpo do brief usa
// o marcador [LINK-CAPA] onde entra o link real, e [ASSINATURA] onde entra o contacto do config.
// Assim a copy de mestre vive no brief e o motor só costura o link e a assinatura verdadeiros.
const assinaturaTxt = [eu.nome, eu.apresentacao, eu.telefone, eu.email].filter(Boolean).join('\n');
const paragrafos = Array.isArray(brief.email?.corpo) && brief.email.corpo.length
  ? brief.email.corpo
      .join('\n\n')
      .replace(/\[LINK-CAPA\]/g, capa)
      .replace(/\[ASSINATURA\]/g, assinaturaTxt)
      .split('\n\n')
  : [
      saudacao,
      elogio,
      semSite
        ? `${obs} Com a nota que têm, isso é dinheiro a ficar por conta de quem procura online e não vos encontra.`
        : `${obs} Nada de grave, mas no telemóvel decide-se em segundos.`,
      semSite
        ? `Por iniciativa própria, preparei uma proposta de site e deixei-a no ar: ${capa}`
        : `Em vez de lhe escrever a explicar, preparei uma nova versão e deixei-a no ar: ${capa}`,
      `São os vossos textos e as vossas fotos. Sem preços nem formulários, é só trabalho feito, para ver se gosta.`,
      `Se fizer sentido, responda e marcamos uma conversa de dez minutos.`,
      `Com os melhores cumprimentos,`,
      assinaturaTxt,
    ];

const texto = paragrafos.join('\n\n');

const escH = s => String(s).replace(/[<>&]/g, x => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[x]));
// Corpo HTML minimalista: só <p> e a âncora. Zero cores, botões, imagens ou anexos.
// A âncora existe porque o Gmail embrulha todo link num redirect ao guardar — em texto puro
// esse embrulho fica VISÍVEL e parece golpe. Como âncora, o texto visível é a URL limpa.
const html = paragrafos.map(p => {
  const comLink = escH(p).replace(capa, `<a href="${capa}">${capa}</a>`);
  return `<p>${comLink.replace(/\n/g, '<br>')}</p>`;
}).join('\n');

/* ---------- CHECKLIST ANTI-SPAM — BLOQUEANTE ---------- */
const semAcento = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const GATILHOS = ['gratis', 'promocao', 'desconto', 'clique aqui', 'urgente', 'imperdivel', 'oferta', 'garantido', '100%'];
const ENCURTADORES = /\b(bit\.ly|tinyurl\.com|goo\.gl|t\.co|encurtador|ow\.ly|is\.gd|cutt\.ly|rebrand\.ly)\b/i;
const EMOJI = /\p{Extended_Pictographic}/u;

function validar({ assunto, texto }) {
  const falhas = [];
  const links = texto.match(/https?:\/\/[^\s<>")]+/gi) || [];

  if (links.length > 2) falhas.push(`${links.length} links (máximo 2 — a capa e, no limite, o site atual)`);
  if (links.length === 0) falhas.push('nenhum link — o email tem de levar à capa');
  if (ENCURTADORES.test(texto)) falhas.push('encurtador de URL detetado (= spam na certa)');
  const alvo = semAcento(`${assunto} ${texto}`);
  for (const g of GATILHOS) if (new RegExp(`(^|\\W)${g.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\W|$)`).test(alvo)) falhas.push(`palavra-gatilho de spam: "${g}"`);
  if (assunto.length > 60) falhas.push(`assunto com ${assunto.length} caracteres (máximo 60)`);
  if (/[A-ZÀ-Ý]{4,}/.test(assunto)) falhas.push('CAIXA ALTA no assunto');
  if (/!!|!\s*!/.test(assunto + texto)) falhas.push('"!!" no assunto ou corpo');
  if (EMOJI.test(assunto)) falhas.push('emoji no assunto');
  if (EMOJI.test(texto)) falhas.push('emoji no corpo');

  const palavras = texto.split(/\s+/).filter(Boolean).length;
  if (palavras < 120) falhas.push(`${palavras} palavras (mínimo 120)`);
  if (palavras > 180) falhas.push(`${palavras} palavras (máximo 180 — profissional ocupado não lê email longo de desconhecido). Causa habitual: os "defeitos" do brief estão compridos; encurta-os.`);

  // Domínio apresentável: subdomínio técnico cheio de números parece golpe e mata a capa.
  const host = new URL(capa).hostname;
  if (/\d{6,}/.test(host)) falhas.push(`domínio técnico/temporário no link (${host}) — usa domínio próprio antes de enviar`);

  return { falhas, palavras, links };
}

const { falhas, palavras, links } = validar({ assunto, texto });
if (falhas.length) {
  console.error('CHECKLIST ANTI-SPAM: REPROVADO\n' + falhas.map(f => `  · ${f}`).join('\n'));
  process.exit(1);
}

/* ---------- saída (rascunho — NUNCA envia) ---------- */
const bloco = `PARA: ${c.email || '(sem email no brief — confirmar antes de enviar)'}
ASSUNTO: ${assunto}

--- CORPO (texto) ---
${texto}

--- CORPO (HTML) ---
${html}

--- VERIFICAÇÃO ---
Checklist anti-spam: PASSOU · ${palavras} palavras · ${links.length} link(s) · assunto ${assunto.length}/60 chars
Este é um RASCUNHO. Rever e enviar à mão, 1 a 1, da conta pessoal (SPF/DKIM do Google). Nunca em massa.`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'email.txt'), bloco, 'utf8');
writeFileSync(join(outDir, 'email.json'), JSON.stringify({ para: c.email || '', assunto, texto, html }, null, 2), 'utf8');
console.log(bloco);
console.log(`\n✓ ${join(outDir, 'email.txt')} · ${join(outDir, 'email.json')}`);
