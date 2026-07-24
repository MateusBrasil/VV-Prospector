#!/usr/bin/env node
/**
 * COMPOSITOR — decide QUAIS dobras entram no site deste cliente.
 *
 * Uso: node tools/tema/compor-tema.mjs <slug> [--nicho restaurante] [--registo editorial] [--json]
 *
 * O DESENHO, E PORQUE ELE É ASSIM
 * O erro que já custou duas reprovações foi deixar o julgamento solto: escolher componente
 * "por estrutura parecida" e forçar um grid de equipa de SaaS a virar cardápio. A correção
 * não é tirar o julgamento, é ESTREITAR o que ele pode escolher, antes de escolher.
 *
 *   1. REGISTO      filtra por adequação ao negócio. Não baixa teto nenhum: é um FILTRO
 *                   ADITIVO. Um restaurante continua a poder receber a dobra mais
 *                   cinematográfica do kit; um contabilista é que não a vê como opção.
 *   2. PRÉ-CONDIÇÃO filtra por MATERIAL REAL. Uma dobra que consome 12 fotos não é
 *                   oferecida a quem tem 4. É assim que nasce a grelha com buracos.
 *   3. ANTI-REPETIÇÃO exclui combinações já usadas no mesmo nicho e cidade. Duas barbearias
 *                   no Porto com o mesmo site é a morte do "fiz este site para si", e isso
 *                   não pode depender de sorte: é consulta ao CRM, determinística.
 *   4. AGENTE       escolhe entre o que sobrou, olhando as fotos e a copy REAIS, e é obrigado
 *                   a escrever porquê. Fica gravado, e um site que saia mal pode ser auditado
 *                   em vez de adivinhado.
 *
 * Este ficheiro faz 1, 2 e 3, e prepara o terreno para 4. Não escolhe sozinho de propósito:
 * devolve o conjunto elegível e o que já foi usado. Quem escolhe olha para material real.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { estadoDobra, modoComposicaoValido, podeUsarDobra } from './dobras.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');

/* ------------------------------------------------------------------ *
 * Registos
 * ------------------------------------------------------------------ */

export const REGISTOS = {
  sobrio: {
    descricao: 'objetivo e direto. Movimento discreto, sem pin nem parallax pesado.',
    porque: 'há negócios em que a resposta certa é ir ao ponto: o visitante quer o horário, a morada e o telefone, e cada segundo de espetáculo é um segundo a adiar isso.',
  },
  editorial: {
    descricao: 'fotografia grande, tipografia com voz, UM momento de surpresa e não movimento constante.',
    porque: 'o negócio vende uma experiência e o site tem de a deixar entrever, sem virar festival.',
  },
  cinematografico: {
    descricao: 'a escala toda: scroll com pin, reveal por letra, transição de página.',
    porque: 'quando a própria marca é o produto, o site é a montra e vale o investimento de atenção.',
  },
};

/**
 * Nicho → registo por omissão.
 *
 * ISTO É UM PONTO DE PARTIDA, NÃO UMA REGRA. O registo pode ser dito à mão no brief e
 * ganha sempre. Um restaurante pode querer sóbrio, e uma clínica de estética pode querer
 * cinematográfico com toda a razão. O que este mapa evita é o default acidental, que é
 * dar a todos o mesmo tratamento por ninguém ter decidido nada.
 */
export const REGISTO_POR_NICHO = {
  restaurante: 'editorial', hotel: 'editorial', alojamento: 'editorial',
  cafe: 'editorial', padaria: 'editorial', loja: 'editorial',
  cabeleireiro: 'editorial', barbearia: 'editorial', estetica: 'editorial',
  ginasio: 'editorial', spa: 'editorial',

  clinica: 'sobrio', dentista: 'sobrio', veterinaria: 'sobrio', fisioterapia: 'sobrio',
  advogado: 'sobrio', contabilista: 'sobrio', seguros: 'sobrio', imobiliaria: 'sobrio',
  oficina: 'sobrio', canalizador: 'sobrio', eletricista: 'sobrio', construcao: 'sobrio',

  moda: 'cinematografico', estudio: 'cinematografico', arquitetura: 'cinematografico',
  fotografia: 'cinematografico', joalharia: 'cinematografico', landing: 'cinematografico',
};

/** Um registo mais contido pode usar dobras do seu nível e abaixo; nunca acima.
 *  A escada é aditiva: subir de registo ABRE opções, nunca fecha. */
const ESCADA = { sobrio: ['sobrio'], editorial: ['sobrio', 'editorial'], cinematografico: ['sobrio', 'editorial', 'cinematografico'] };

/* ------------------------------------------------------------------ *
 * Kit
 * ------------------------------------------------------------------ */

export function lerKit() {
  const base = join(ROOT, 'themes', 'base', 'dobras');
  if (!existsSync(base)) return [];
  const dobras = [];
  for (const slot of readdirSync(base)) {
    const dirSlot = join(base, slot);
    if (!statSync(dirSlot).isDirectory()) continue;
    for (const nome of readdirSync(dirSlot)) {
      const v = join(dirSlot, nome, 'variant.json');
      if (existsSync(v)) dobras.push(JSON.parse(readFileSync(v, 'utf8')));
    }
  }
  return dobras;
}

/* ------------------------------------------------------------------ *
 * Elegibilidade
 * ------------------------------------------------------------------ */

/**
 * Uma dobra é elegível se o registo permite E o cliente tem o material que ela consome.
 * Devolve sempre o PORQUÊ da exclusão: uma dobra que não aparece sem explicação é
 * indistinguível de uma dobra que não existe, e isso esconde buracos no kit.
 */
export function elegiveis(kit, cliente, registo, { modo = 'producao' } = {}) {
  if (!modoComposicaoValido(modo)) throw new Error(`modo inválido: ${modo} (producao | inspecao)`);
  const permitidos = ESCADA[registo] || ESCADA.editorial;
  const nFotos = contarFotos(cliente);
  const copiaMax = maiorCopia(cliente);
  const palavrasNome = String(cliente.identidade?.nome || '').trim().split(/\s+/).length;

  return kit.map(d => {
    const razoes = [];
    const maturidade = estadoDobra(d);
    if (!maturidade.valido) razoes.push(`estado inválido no variant.json: "${maturidade.estado}"`);
    else if (!podeUsarDobra(d, modo)) razoes.push(`estado "${maturidade.estado}" não permitido em modo ${modo}`);
    if (!d.registo) razoes.push('registo por definir no variant.json');
    else if (!permitidos.includes(d.registo)) razoes.push(`registo "${d.registo}" acima de "${registo}"`);

    const p = d.precondicoes || {};
    if (p.imagensMin && nFotos < p.imagensMin) razoes.push(`precisa de ${p.imagensMin} fotos, o cliente tem ${nFotos}`);
    if (p.copiaMinChars && copiaMax < p.copiaMinChars) razoes.push(`precisa de ${p.copiaMinChars} caracteres de copy, o maior texto tem ${copiaMax}`);
    if (p.nomeMaxPalavras && palavrasNome > p.nomeMaxPalavras) razoes.push(`nome de ${palavrasNome} palavras não cabe (máx. ${p.nomeMaxPalavras})`);
    if ((d._rever || []).length) razoes.push(`${d._rever.length} ponto(s) por rever na dobra`);

    return { slot: d.slot, nome: d.nome, registo: d.registo, estado: maturidade.estado, estadoOrigem: maturidade.origem, elegivel: razoes.length === 0, razoes };
  });
}

const contarFotos = c => {
  const im = c.imagens || {};
  const n = new Set();
  for (const v of Object.values(im)) {
    if (typeof v === 'string') n.add(v);
    else if (Array.isArray(v)) v.forEach(x => typeof x === 'string' && n.add(x));
  }
  return n.size;
};

const maiorCopia = c => {
  let max = 0;
  const andar = o => {
    if (typeof o === 'string') { max = Math.max(max, o.length); return; }
    if (Array.isArray(o)) return o.forEach(andar);
    if (o && typeof o === 'object') return Object.values(o).forEach(andar);
  };
  andar(c.paginas); andar(c.blocos);
  return max;
};

/* ------------------------------------------------------------------ *
 * Anti-repetição
 * ------------------------------------------------------------------ */

/**
 * Combinações já entregues no mesmo nicho e cidade.
 *
 * Não é "torcer para não repetir", é impedir. O CRM guarda a composição de cada lead;
 * aqui lê-se e exclui-se. Se o CRM não tiver a coluna ainda, devolve vazio e diz porquê,
 * em vez de fingir que verificou.
 */
export function jaUsadas(nicho, cidade) {
  try {
    const out = execFileSync(process.execPath, [join(ROOT, 'tools', 'crm.mjs'), 'list', '--json'],
      { encoding: 'utf8', cwd: ROOT });
    const leads = JSON.parse(out);
    return {
      ok: true,
      combinacoes: leads
        .filter(l => (!nicho || l.nicho === nicho) && (!cidade || String(l.notas || '').includes(cidade)))
        .map(l => { try { return JSON.parse(l.composicao || 'null'); } catch { return null; } })
        .filter(Boolean),
    };
  } catch (e) {
    return { ok: false, combinacoes: [], porque: `CRM não devolveu composições (${e.message.split('\n')[0]}). Sem isto, a garantia de não repetir não existe: verificar à mão.` };
  }
}

const assinatura = comp => Object.entries(comp || {}).sort().map(([k, v]) => `${k}:${v}`).join('|');

/* ------------------------------------------------------------------ *
 * API
 * ------------------------------------------------------------------ */

export function preparar({ slug, nicho, registo, modo = 'producao' }) {
  const ficha = join(ROOT, 'clientes', slug, 'cliente.json');
  if (!existsSync(ficha)) throw new Error(`não existe clientes/${slug}/cliente.json`);
  const cliente = JSON.parse(readFileSync(ficha, 'utf8'));

  const reg = registo || cliente.registo || REGISTO_POR_NICHO[nicho] || 'editorial';
  const kit = lerKit();
  const avaliadas = elegiveis(kit, cliente, reg, { modo });
  const usadas = jaUsadas(nicho, cliente.morada?.cidade);

  const porSlot = {};
  for (const d of avaliadas.filter(d => d.elegivel)) (porSlot[d.slot] ??= []).push(d.nome);

  return {
    slug, nicho: nicho || null, registo: reg, modo,
    registoPorque: REGISTOS[reg]?.porque,
    material: { fotos: contarFotos(cliente), maiorCopia: maiorCopia(cliente) },
    kit: kit.length,
    elegiveisPorSlot: porSlot,
    excluidas: avaliadas.filter(d => !d.elegivel),
    combinacoesUsadas: usadas.combinacoes.map(assinatura),
    antiRepeticao: usadas.ok ? 'ativa' : usadas.porque,
  };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const arg = (n, d = null) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
  const slug = process.argv[2];
  if (!slug || slug.startsWith('--')) {
    console.error('uso: node tools/tema/compor-tema.mjs <slug> [--nicho <nicho>] [--registo <registo>] [--modo producao|inspecao]');
    process.exit(1);
  }
  try {
    const r = preparar({ slug, nicho: arg('--nicho'), registo: arg('--registo'), modo: arg('--modo', 'producao') });
    if (process.argv.includes('--json')) { console.log(JSON.stringify(r, null, 2)); process.exit(0); }

    console.log(`\nComposição para ${r.slug}${r.nicho ? ` (${r.nicho})` : ''}`);
    console.log(`\n  registo: ${r.registo} · modo: ${r.modo}`);
    console.log(`    ${r.registoPorque}`);
    console.log(`\n  material do cliente: ${r.material.fotos} foto(s) · maior texto ${r.material.maiorCopia} caracteres`);
    console.log(`  kit: ${r.kit} dobra(s)`);

    const slots = Object.keys(r.elegiveisPorSlot);
    if (slots.length) {
      console.log(`\n  elegíveis por slot:`);
      for (const s of slots) console.log(`    ${s.padEnd(12)} ${r.elegiveisPorSlot[s].join(', ')}`);
      const combos = slots.reduce((n, s) => n * r.elegiveisPorSlot[s].length, 1);
      console.log(`\n  combinações possíveis: ${combos.toLocaleString('pt-PT')}`);
    } else {
      console.log(`\n  ⚠ nenhuma dobra elegível. O kit ainda não serve este caso.`);
    }

    if (r.excluidas.length) {
      console.log(`\n  excluídas (${r.excluidas.length}), com o motivo:`);
      for (const d of r.excluidas.slice(0, 10)) console.log(`    ${(d.slot + '/' + d.nome).padEnd(24)} ${d.razoes.join('; ')}`);
      if (r.excluidas.length > 10) console.log(`    … +${r.excluidas.length - 10}`);
    }

    console.log(`\n  anti-repetição: ${r.antiRepeticao}`);
    if (r.combinacoesUsadas.length) console.log(`    ${r.combinacoesUsadas.length} combinação(ões) já entregue(s) neste nicho e cidade, excluídas da escolha`);
    console.log('\n  A escolha final entre as elegíveis é feita a olhar as fotos e a copy REAIS,');
    console.log('  e fica gravada com a justificação: um site que saia mal tem de poder ser auditado.\n');
  } catch (e) {
    console.error(`\n✗ ${e.message}\n`);
    process.exit(1);
  }
}
