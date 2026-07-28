#!/usr/bin/env node
/**
 * SELECIONAR — escolhe o lote mínimo de dobras a portar para os kits de nicho ficarem
 * montáveis, respeitando a exclusividade entre nichos.
 *
 * PORQUE ISTO EXISTE
 * O acervo tem 552 dobras e nenhuma elegível. Portar tudo é meses; portar ao acaso dá um
 * kit com peças que não combinam com o nicho. O que interessa é o LOTE MÍNIMO: 2 dobras
 * prontas por slot por nicho, escolhidas pelo custo real de as pôr a funcionar.
 *
 * O custo de porte não é uniforme e está medido em `variant.json`:
 *   sem-js       nada a fazer no JS
 *   dom-simples  a esteira já escopou, só falta confirmar no ecrã
 *   global-duro  assume ser dono da página, precisa de reescrita
 *   modulo-es    traz import/export, precisa virar módulo
 *   webgl        canvas Three.js, arrasta peso e ciclo de vida
 *
 * A exclusividade é respeitada por RESERVA: uma dobra atribuída a um nicho sai do lote dos
 * outros. Sem isso o seletor daria a mesma "melhor" dobra aos três e entregaria o mesmo
 * site com cores trocadas, que é exatamente o que o Mateus pediu para evitar.
 */
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

/** Custo de porte, do mais barato ao mais caro. Menor é melhor. */
const CUSTO_JS = { 'sem-js': 0, 'dom-simples': 1, 'global-duro': 4, 'modulo-es': 5, webgl: 8 };

/** Cada pendência que não é de JS custa aproximadamente isto a resolver. */
const CUSTO_POR_PENDENCIA = 1;

export function custoDePorte(v) {
  const js = CUSTO_JS[v.js?.categoria] ?? 4;
  // as pendências de JS já estão contadas em `js`; não somar duas vezes
  const outras = (v._rever || []).filter(r => !r.startsWith('JS de origem')).length;
  return js + outras * CUSTO_POR_PENDENCIA;
}

/**
 * DOBRAS BANIDAS — o que nenhum kit pode usar, independentemente do custo ou do registo.
 *
 * ACHADO REAL (agente que construiu o tema `odontologia`, 2026-07-27): este seletor
 * recomendou `hero/hero-5` e `hero/hero-16` como os dois melhores heroes sóbrios para o
 * nicho. **O primeiro é literalmente um preloader e o segundo é um ecrã de "Enter".** São
 * exatamente o que o cliente proibiu, textualmente: "quero que a pessoa já entre no domínio
 * e já abra o site, sem essas frescuras".
 *
 * A classificação de `registo` mede QUANTO a peça se mexe, e um preloader quase não se
 * mexe, por isso saiu `sobrio` e subiu ao topo da lista por custo baixo. A régua estava
 * certa a medir o que media; o que faltava era esta, que mede o que é PROIBIDO. São eixos
 * diferentes e nenhum substitui o outro.
 */
const PADROES_BANIDOS = [
  { re: /preloader|pre-loader|splash-?screen/i, porque: 'ecrã de carregamento' },
  // A primeira versão desta regra exigia `enter-btn`/`enter-screen` e DEIXOU PASSAR o
  // `hero/hero-16`, que usa `className="enter"` com os filhos `enter__bg` e `enter__text`
  // em BEM. Apanhar o `enter` puro obriga a ancorá-lo ao atributo de classe ou ao separador
  // BEM, senão casa com "center", "entered" e afins.
  { re: /click\s*to\s*enter|clique\s*para\s*entrar/i, porque: 'ecrã de "clicar para entrar"' },
  { re: /className="enter[\s"]|className="[^"]*\benter__|\[data-dobra[^\]]*\]\s+\.enter[\s{.:]/i, porque: 'bloco de entrada ("enter") a cobrir o conteúdo' },
  { re: /loading-?(screen|overlay|counter|percent)/i, porque: 'contador ou overlay de carregamento' },
  // TERCEIRA ITERAÇÃO, e a mais importante: um ecrã de abertura não precisa de se chamar
  // "preloader" nem "enter". O `hero/hero-21` esconde tudo, remove `.header` do DOM ao fim
  // de 3 s e só revela o conteúdo ao segundo 4. Funcionalmente é a mesma coisa que o
  // Mateus reprovou, com outro nome. O que define o padrão é a MECÂNICA: conteúdo retido
  // atrás de uma espera longa. Meio segundo de fade é entrada; quatro segundos é portão.
  { re: /delay:\s*(?:[3-9]|\d{2,})(?:\.\d+)?\b/, porque: 'conteúdo só aparece após 3 s ou mais' },
  { re: /querySelector\([^)]*\)\s*\.remove\(\)|\.remove\(\)[\s\S]{0,40}delay/i, porque: 'remove um elemento do DOM depois de uma espera (portão de entrada)' },
];

/** Lê o código da dobra e diz se ela cai numa regra dura do projeto. */
export function estaBanida(slot, nome, base = join(ROOT, 'themes', 'base', 'dobras')) {
  for (const ficheiro of ['Dobra.jsx', 'Dobra.css']) {
    const p = join(base, slot, nome, ficheiro);
    if (!existsSync(p)) continue;
    const codigo = readFileSync(p, 'utf8');
    for (const { re, porque } of PADROES_BANIDOS) {
      // Ignorar comentários que apenas DOCUMENTAM a ausência ("sem preloader"), que é o
      // padrão que os temas usam para registar a regra.
      const semComentarios = codigo.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
      if (re.test(semComentarios)) return { banida: true, porque };
    }
  }
  return { banida: false };
}

export function inventario(base = join(ROOT, 'themes', 'base', 'dobras')) {
  const porSlot = {};
  for (const slot of readdirSync(base)) {
    let entradas;
    try { entradas = readdirSync(join(base, slot)); } catch { continue; }
    for (const nome of entradas) {
      const vp = join(base, slot, nome, 'variant.json');
      if (!existsSync(vp)) continue;
      const v = JSON.parse(readFileSync(vp, 'utf8'));
      const banimento = estaBanida(slot, nome, base);
      (porSlot[slot] ||= []).push({
        nome, slot, registo: v.registo, estado: v.estado,
        js: v.js?.categoria || '?', custo: custoDePorte(v),
        pendencias: (v._rever || []).length,
        banida: banimento.banida, porqueBanida: banimento.porque,
      });
    }
  }
  for (const l of Object.values(porSlot)) l.sort((a, b) => a.custo - b.custo || a.pendencias - b.pendencias);
  return porSlot;
}

/** O registo do nicho é um TETO: um nicho sóbrio não aceita dobra cinematográfica. */
const ESCADA = { sobrio: ['sobrio'], editorial: ['sobrio', 'editorial'], cinematografico: ['sobrio', 'editorial', 'cinematografico'] };

export function selecionar({ receitas, inventario: inv, porNicho = 2 }) {
  const politica = receitas._exclusividade || {};
  const partilhaveis = new Set(politica.partilhaveis || []);
  const nichos = Object.entries(receitas)
    .filter(([k, v]) => !k.startsWith('_') && v.prioridade === 1);

  const reservado = new Set();          // `${slot}/${nome}` já atribuído a algum nicho
  const plano = {};
  const buracos = [];

  for (const [chave, receita] of nichos) {
    const permitidos = ESCADA[receita.registoBase] || ESCADA.editorial;
    plano[chave] = { nome: receita.nome, registoBase: receita.registoBase, escolhas: {} };

    // ORÇAMENTO DE MOVIMENTO (decisão do design-system-squad, 2026-07-27): sobriedade não é
    // uniformidade. Um site onde nada se mexe lê como barato, não como sério. A Lei de
    // Estética do projeto já manda "1 signature moment", por isso o registo do nicho passa
    // a ser um orçamento: base no `registoBase`, mais N peças de um degrau acima. Sem isto,
    // a odontologia ficava sem `contacto` porque a única dobra sóbria estava reservada.
    const orcamento = { ...(receita.orcamentoDeMovimento || {}) };
    delete orcamento._porque;
    const acimaDoTeto = Object.keys(orcamento);
    const gastos = {};

    for (const slot of receita.obrigatorios) {
      const disponiveis = (inv[slot] || [])
        // Regra dura antes de tudo o resto: uma dobra banida nunca entra, custe o que custar
        // e seja qual for o registo. Ver PADROES_BANIDOS.
        .filter(d => !d.banida)
        .filter(d => partilhaveis.has(slot) || !reservado.has(`${slot}/${d.nome}`));

      // Primeiro o que cabe no registo base; só se faltar é que se gasta do orçamento.
      const noTeto = disponiveis.filter(d => permitidos.includes(d.registo));
      const escolhidas = noTeto.slice(0, porNicho);

      for (const nivel of acimaDoTeto) {
        while (escolhidas.length < porNicho && (gastos[nivel] || 0) < orcamento[nivel]) {
          const extra = disponiveis.find(d => d.registo === nivel && !escolhidas.includes(d));
          if (!extra) break;
          extra.orcamento = nivel;
          escolhidas.push(extra);
          gastos[nivel] = (gastos[nivel] || 0) + 1;
        }
      }
      for (const d of escolhidas) if (!partilhaveis.has(slot)) reservado.add(`${slot}/${d.nome}`);
      plano[chave].escolhas[slot] = escolhidas;

      if (escolhidas.length < porNicho) {
        buracos.push({ nicho: chave, slot, tem: escolhidas.length, precisa: porNicho,
          motivo: (inv[slot] || []).length === 0 ? 'slot vazio no acervo'
            : (inv[slot] || []).filter(d => permitidos.includes(d.registo)).length < porNicho
              ? `só ${(inv[slot] || []).filter(d => permitidos.includes(d.registo)).length} dobra(s) no registo "${receita.registoBase}" ou abaixo`
              : 'as restantes já foram reservadas por outro nicho' });
      }
    }
  }
  return { plano, buracos, reservado: [...reservado] };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const receitas = JSON.parse(readFileSync(join(ROOT, 'themes', 'base', 'receitas.json'), 'utf8'));
  const inv = inventario();
  const { plano, buracos } = selecionar({ receitas, inventario: inv });

  let total = 0, custoTotal = 0;
  console.log('\nLOTE MÍNIMO A PORTAR — 2 dobras por slot obrigatório, exclusivas por nicho\n');
  for (const [chave, p] of Object.entries(plano)) {
    console.log(`${p.nome}  [registo até ${p.registoBase}]`);
    for (const [slot, l] of Object.entries(p.escolhas)) {
      if (!l.length) { console.log(`   ${slot.padEnd(10)} SEM CANDIDATO`); continue; }
      for (const d of l) {
        total++; custoTotal += d.custo;
        console.log(`   ${slot.padEnd(10)} ${d.nome.padEnd(26)} ${String(d.registo).padEnd(16)} js:${d.js.padEnd(12)} custo ${d.custo}${d.orcamento ? '  <- gasta o orcamento de movimento' : ''}`);
      }
    }
    console.log('');
  }
  console.log(`${total} dobras selecionadas · custo somado ${custoTotal}\n`);
  if (buracos.length) {
    console.log('BURACOS (o acervo não dá para o lote mínimo):');
    for (const b of buracos) console.log(`  ${b.nicho}/${b.slot}: tem ${b.tem} de ${b.precisa} — ${b.motivo}`);
    console.log('');
  }
}
