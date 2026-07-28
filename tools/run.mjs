#!/usr/bin/env node
/**
 * O ciclo inteiro num comando — Prospector Premium
 * Uso: node run.mjs <brief.json> [--deploy] [--prod] [--remix] [--sem-visual]
 *      node run.mjs --lote briefs/*.json [--deploy]
 *
 * POR QUE ISTO EXISTE
 * As ferramentas deste repo funcionam — mas só uma a uma, e cada uma tem os seus argumentos,
 * a sua ordem e as suas armadilhas (o gate tem de correr ANTES do editor, senão varre a camada
 * de edição e reprova o que é nosso; a capa, desde que passou a iframar por caminho relativo,
 * já não depende do deploy, mas o passe visual TEM de correr antes de qualquer publicação).
 * Guardar essa coreografia na cabeça do operador é o mesmo que não a ter: ao quinto lead ele
 * salta um passo. Aqui a ordem é código. Um comando, N passos, cada um cronometrado e com
 * veredicto — porque a promessa é "15-30 min por site" e promessa sem cronómetro é conversa.
 *
 * REGRAS DURAS
 * · Passo que falha PARA o ciclo. Nunca se publica lixo nem se finge sucesso (exit ≠ 0).
 * · Sem --deploy nada é publicado: o passo do deploy corre em --seco (valida CLI e pasta).
 * · O passe visual (verificar.mjs) bloqueia com --deploy: FAIL (exit 1) ou "não consegui medir"
 *   (exit 2) impedem a publicação, a não ser que --sem-visual seja passado explicitamente (e
 *   isso fica gravado no CRM, nunca em silêncio).
 * · O email é sempre rascunho. Este script NUNCA envia nada.
 * · Em ensaio (sem --deploy) não existe URL real. Em vez de inventar uma, usamos um placeholder
 *   evidente, escrevemos o email para ensaio/<slug>/ (nunca por cima do rascunho bom) e o CRM
 *   fica em "redesenhado" — o CRM só recebe URL quando a URL existe e responde 200.
 * · "Semear defeitos" corre em paralelo com o resto do ciclo (não bloqueia montagem, gate,
 *   editor, passe visual, capa, deploy nem comparador): só é esperada mesmo antes do Email,
 *   que é o único passo que lê o resultado.
 */
import { readFileSync, existsSync, rmSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { spawnSync, spawn } from 'node:child_process';
import { join, dirname, resolve, basename, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { eSmokeRestaurante, validarExecucaoSmoke, validarRelatorioSmokeQa } from './run-smoke.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const tool = n => join(HERE, n);

/* ---------- args ---------- */
const argv = process.argv.slice(2);
const tem = f => argv.includes(`--${f}`);
const DEPLOY = tem('deploy');
const PROD = tem('prod');
const FORCAR_REMIX = tem('remix');
// Escotilha explícita: publica mesmo que o passe visual não tenha conseguido MEDIR (exit 2 do
// verificar.mjs). Nunca some em silêncio, o CRM fica com o rasto ("notas") de que este site saiu
// sem a rede de proteção — sem esse rasto, uma escotilha vira hábito em duas semanas.
const SEM_VISUAL = tem('sem-visual');

// Glob à mão: o cmd.exe não expande "briefs/*.json" e um lote que silenciosamente processa
// zero briefs é pior que um erro. Se a shell já expandiu, isto não mexe em nada.
function expandir(padrao) {
  if (!padrao.includes('*')) return [padrao];
  const dir = dirname(padrao) || '.';
  const re = new RegExp('^' + basename(padrao).replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$');
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter(f => re.test(f)).sort().map(f => join(dir, f));
}

const posicionais = argv.filter(a => !a.startsWith('--'));
const iLote = argv.indexOf('--lote');
const briefs = (iLote > -1 ? argv.slice(iLote + 1).filter(a => !a.startsWith('--')) : posicionais.slice(0, 1))
  .flatMap(expandir);

if (!briefs.length) {
  console.error(`uso: node run.mjs <brief.json> [--deploy] [--prod] [--remix] [--sem-visual]
     node run.mjs --lote briefs/*.json [--deploy]

  --deploy      publica mesmo na Vercel (preview). Sem isto, o passo corre em --seco.
  --prod        com --deploy, publica em produção em vez de preview.
  --remix       força o modo remix quando o brief tem "blocos" e "remix" (por omissão ganha o assemble).
  --sem-visual  publica mesmo que o passe visual não consiga medir (exit 2). Grava no CRM.

  O ciclo: CRM → montar → gate → editor → passe visual → capa → deploy → comparador → email → CRM.
  O email fica SEMPRE em rascunho. Este comando nunca envia nada.`);
  process.exit(1);
}

/* ---------- utilitários ---------- */
const t = () => Date.now();
const seg = ms => `${(ms / 1000).toFixed(1)}s`;
const OK = '✓', NAO = '✗';

/** Corre um tool nosso e devolve {ok, out, err, ms}. stdout/stderr capturados: o relatório é nosso. */
function correTool(script, args, opts = {}) {
  const t0 = t();
  const r = spawnSync(process.execPath, [tool(script), ...args], {
    cwd: ROOT, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, ...opts,
  });
  const out = (r.stdout || '').trim(), err = (r.stderr || '').trim();
  return { ok: r.status === 0, status: r.status, out, err, ms: t() - t0 };
}

/**
 * Versão assíncrona de correTool, só para o passo "Semear defeitos". POR QUE PRECISA DE EXISTIR:
 * spawnSync bloqueia a THREAD inteira do Node até o subprocesso acabar. Uma função async sem
 * nenhum "await" lá dentro corre do princípio ao fim de uma assentada só, mesmo chamada sem
 * await por fora, precisamente porque não há ponto nenhum onde ela devolva o controlo ao event
 * loop. Ou seja: se semearDefeitos usasse correTool (spawnSync) aqui, tirar o "await" lá em
 * baixo seria cosmético, o processo já teria gasto os 5-85s do qualificar+pagespeed ANTES de a
 * montagem sequer começar. spawn (assíncrono) devolve o controlo de imediato: o subprocesso
 * corre à parte no sistema operativo enquanto o resto do ciclo (montar, gate, editor, passe
 * visual, capa, deploy, comparador, todos via spawnSync de propósito) segue em primeiro plano.
 * É esta troca pontual, e só aqui, que torna "em paralelo" verdade e não um nome bonito no
 * relatório. Não mexe em mais nada: os outros nove passos continuam em spawnSync (correTool),
 * exatamente como a regra do projeto pede.
 */
function correToolAsync(script, args) {
  return new Promise(resolveu => {
    const t0 = t();
    const child = spawn(process.execPath, [tool(script), ...args], { cwd: ROOT });
    let out = '', err = '';
    child.stdout.on('data', d => { out += d; });
    child.stderr.on('data', d => { err += d; });
    child.on('close', code => resolveu({ ok: code === 0, status: code, out: out.trim(), err: err.trim(), ms: t() - t0 }));
    child.on('error', e => resolveu({ ok: false, status: null, out: '', err: e.message, ms: t() - t0 }));
  });
}

/** Só as linhas que interessam ao relatório (as ferramentas já falam por "✓" e "·"). */
const linhasUteis = (txt, max = 6) => txt.split('\n').map(l => l.trim())
  .filter(l => /^[✓·⚠🔴🟡❌✅]/.test(l) || /^Gate |FAIL/.test(l)).slice(0, max);

/**
 * A razão da falha, em linguagem humana. Um stack trace de Node em cima da mesa numa reunião não
 * diz nada a ninguém — o que interessa é a frase que a ferramenta escreveu de propósito ("bloco
 * inexistente: hero/x", "CHECKLIST ANTI-SPAM: REPROVADO"). Filtramos as molduras da stack e
 * ficamos com a mensagem.
 */
function razaoDe(err = '', out = '') {
  const linhas = `${err}\n${out}`.split('\n').map(l => l.trim()).filter(Boolean)
    .filter(l => !/^at\s/.test(l) && !/^file:\/\/\//.test(l) && !/^\^+$/.test(l)
      && !/^Node\.js v/.test(l) && !/^\.\.\.\s\d+\slines/.test(l));
  // "original" = a linha tal como saiu; "forte" = a mesma sem o prefixo de Error. Guardamos as duas
  // para não repetir a mesma frase duas vezes no relatório (com e sem prefixo).
  // Ordem de preferência: veredicto ("❌ 4 FAIL") > exceção > violação solta. O veredicto primeiro
  // porque numa reunião o que interessa é "reprovou e porquê", não a primeira linha por acaso.
  const original = linhas.find(l => /^(❌|CHECKLIST)/.test(l))
    || linhas.find(l => /^(Error|TypeError|SyntaxError):/.test(l))
    || linhas.find(l => /^(erro:|🔴)/.test(l));
  const forte = original?.replace(/^\w*Error:\s*/, '');
  // O resto = as violações concretas. Fora o cabeçalho, os WARN (não bloqueiam) e eco de código.
  const resto = linhas.filter(l => l !== original
    && !/^(throw|const|let|\}|\{)/.test(l)
    && !/^Gate da Lei|^Lembrete:|^🟡|^✅|^·\s|^\+\d+ ocorrências/.test(l)).slice(0, 2);
  return [forte, ...resto].filter(Boolean).join('\n');
}

/* ---------- semear defeitos: liga o qualificar (+ pagespeed) ao ciclo ----------
 * POR QUE ISTO EXISTE
 * O email.mjs recusa-se a correr sem "defeitos": ["...", "..."] no brief, e com razão (a crítica
 * ao site tem de ser observação verificada, não invenção). Até hoje o operador copiava esses
 * defeitos à MÃO do qualificar.mjs — passo esquecível, e "à mão" é onde nasce o defeito inventado.
 * Aqui o motor semeia-os sozinho: quando faltam defeitos mas há site antigo, audita esse site e
 * escreve os 2 menos refutáveis de volta no brief, marcados como auto-semeados.
 *
 * DECISÃO (subprocesso, não import): o qualificar.mjs corre CLI no topo do módulo sem guarda de
 * main — importá-lo dispararia uma auditoria falsa ao PATH do brief. Por isso corremo-lo por
 * subprocesso com --json (o mesmo correTool que o ciclo já usa para tudo): isolado, sem efeitos
 * colaterais, e não obriga a tocar num ficheiro que não é para tocar.
 *
 * REGRA PRESERVADA: sem "siteAntigo" nem "defeitos", não inventamos nada — o email.mjs falha a
 * pedir defeitos (erro de propósito, não escondido). O manual também ganha sempre ao automático:
 * um brief que já traz "defeitos" verificados à mão não é tocado.
 */
const semTravessao = s => String(s).replace(/\s*[—–]\s*/g, ', ').trim();

async function semearDefeitos(brief, abs) {
  // 1. Já tem defeitos (verificados à mão)? Não se mexe.
  if (Array.isArray(brief.defeitos) && brief.defeitos.length)
    return { saltado: true, nota: `brief já traz ${brief.defeitos.length} defeito(s) — não semeio` };

  // 2. Sem site antigo não há o que auditar nem o que provar. O email.mjs falha a seguir, de propósito.
  if (!brief.siteAntigo)
    return { saltado: true, nota: 'sem "siteAntigo" nem "defeitos" — o email vai pedir defeitos (de propósito)' };

  const url = brief.siteAntigo;

  // 3. qualificar.mjs (--json) — o que o dono do site vê por Ctrl+U. para_o_email = os 2 menos refutáveis.
  //    correToolAsync (não correTool): ver a razão de ser mesmo em cima da função, é o que
  //    permite este passo correr a sério em paralelo com o resto do ciclo.
  const visiveis = [];
  const q = await correToolAsync('qualificar.mjs', [url, '--json']);
  try {
    const a = JSON.parse(q.out || '{}');
    for (const x of (a.para_o_email || [])) if (x?.diz) visiveis.push(x.diz);
  } catch { /* auditoria ilegível: seguimos com o que houver */ }

  // 4. pagespeed.mjs (--json) — o número do Google, o defeito menos refutável de todos. OPCIONAL:
  //    se a API falhar (quota/rede), o pagespeed devolve {ok:false} e seguimos só com o qualificar.
  const numeros = [];
  const ps = await correToolAsync('pagespeed.mjs', [url, '--json']);
  try {
    const p = JSON.parse(ps.out || '{}');
    if (p.ok) for (const d of (p.defeitos_citaveis || [])) numeros.push(d);
  } catch { /* idem */ }

  // 5. O par mais forte: um número do Google + um defeito visível. Máx. 2 (o email só usa 2, e o
  //    checklist anti-spam corta emails longos). Sem travessão — regra dura do projeto.
  const ordenado = [];
  if (numeros[0]) ordenado.push({ txt: numeros[0], fonte: 'pagespeed' });
  for (const v of visiveis) ordenado.push({ txt: v, fonte: 'qualificar' });
  for (const n of numeros.slice(1)) ordenado.push({ txt: n, fonte: 'pagespeed' });

  const escolhidos = [];
  const vistos = new Set();
  for (const it of ordenado) {
    const t = semTravessao(it.txt);
    if (!t || vistos.has(t) || escolhidos.length >= 2) continue;
    vistos.add(t);
    escolhidos.push({ txt: t, fonte: it.fonte });
  }

  if (!escolhidos.length)
    return { saltado: true, nota: 'a auditoria não achou defeito citável — o email vai pedir defeitos (de propósito)' };

  // 6. Escrever de volta no brief.json, marcado (rasto honesto). Só chegamos aqui quando FALTAVAM
  //    defeitos, logo o ficheiro é sempre enriquecido, nunca sobrescrito à toa.
  const fontes = [...new Set(escolhidos.map(e => e.fonte))];
  brief.defeitos = escolhidos.map(e => e.txt);
  brief._defeitos_fonte = `auto (${fontes.join('+')}) · gerado pelo run.mjs a partir de ${url}`;
  try {
    writeFileSync(abs, JSON.stringify(brief, null, 2) + '\n', 'utf8');
  } catch (e) {
    return { ok: false, err: `não consegui escrever os defeitos em ${abs}: ${e.message}`, out: '' };
  }
  return {
    ok: true,
    out: `✓ ${escolhidos.length} defeito(s) semeado(s) · fonte ${fontes.join('+')}\n`
      + escolhidos.map(e => `· ${e.txt}`).join('\n'),
  };
}

/* ---------- o ciclo, para UM brief ---------- */
async function ciclo(briefPath) {
  const abs = resolve(ROOT, briefPath);
  if (!existsSync(abs)) return { slug: briefPath, ok: false, passos: [], razao: `brief não existe: ${briefPath}`, ms: 0 };

  let brief;
  try { brief = JSON.parse(readFileSync(abs, 'utf8')); }
  catch (e) { return { slug: briefPath, ok: false, passos: [], razao: `brief ilegível: ${e.message}`, ms: 0 }; }

  const slug = brief.slug;
  if (!slug) return { slug: briefPath, ok: false, passos: [], razao: 'brief sem "slug"', ms: 0 };
  const smoke = eSmokeRestaurante({ root: ROOT, briefPath: abs, brief });
  // Exceções do smoke servem somente para provar a fábrica local. Um deploy dessa fixture seria
  // uma publicação de conteúdo falso, por isso falha ANTES de CRM, build ou qualquer escrita.
  const permissaoSmoke = validarExecucaoSmoke({ smoke, deploy: DEPLOY });
  if (!permissaoSmoke.ok) {
    return { slug, ok: false, passos: [], razao: permissaoSmoke.err, ms: 0 };
  }

  // `let` e não `const`: o motor de TEMAS produz a pasta publicável dentro do próprio tema
  // (`themes/<tema>/.obras/<slug>/out`), e reaponta estas duas no passo de montagem. Todos os
  // passos seguintes (gate, passe visual, capa, deploy, comparador) leem daqui, e é por isso
  // que nenhum deles precisa de saber que motor montou o site: recebem sempre uma pasta.
  let outDir = join('sites', slug);                   // relativo: os tools correm com cwd=ROOT
  let outAbs = join(ROOT, outDir);
  const t0 = t();
  const passos = [];
  const artefactos = {};
  let parou = null;
  let publicadoSemPasseVisual = false;   // marca a escotilha usada de verdade, para o passo 10 gravar no CRM

  console.log(`\n╭─ ${brief.cliente?.nome || slug}  ·  ${briefPath}`);
  console.log(`│  ${smoke ? 'SMOKE estrito (sem publicar, email saltado, QA obrigatório)' : DEPLOY ? (PROD ? 'DEPLOY REAL — PRODUÇÃO' : 'DEPLOY REAL — preview') : 'ensaio (sem publicar)'}`);

  /** Executa um passo, cronometra, imprime e trava o ciclo se falhar. */
  const passo = async (nome, fn) => {
    if (parou) { passos.push({ nome, estado: 'saltado', ms: 0 }); return null; }
    const t1 = t();
    let r;
    try { r = await fn(); }
    catch (e) { r = { ok: false, err: e.message, out: '' }; }
    const ms = r.ms ?? (t() - t1);

    if (r.saltado) {
      passos.push({ nome, estado: 'saltado', ms, nota: r.nota });
      console.log(`│  ${'—'} ${nome.padEnd(22)} ${'saltado'.padStart(7)}   ${r.nota || ''}`);
      return r;
    }
    passos.push({ nome, estado: r.ok ? 'ok' : 'falhou', ms, err: r.err });
    console.log(`│  ${r.ok ? OK : NAO} ${nome.padEnd(22)} ${seg(ms).padStart(7)}`);
    for (const l of linhasUteis(r.out || '')) console.log(`│      ${l}`);
    if (!r.ok) {
      const razao = razaoDe(r.err, r.out) || 'sem detalhe';
      parou = { passo: nome, razao };
      razao.split('\n').forEach((l, i) => console.log(`│      ${i ? '       ' : 'RAZÃO: '}${l}`));
    }
    return r;
  };

  /* 1. CRM — o lead entra no funil antes de existir ficheiro nenhum. Lead fora do CRM é lead perdido. */
  await passo('CRM add', () => correTool('crm.mjs', ['add', briefPath]));

  /* 1b. Semear defeitos — DISPARADA aqui, mas fora do caminho crítico. Custa 5 a 85s (curl +
   *     API do PageSpeed) e o resultado só alimenta o email.mjs (passo 9) e a capa (nem isso,
   *     na verdade: só o email lê "defeitos"). Nada entre aqui e o passo 9 depende do resultado,
   *     logo bloquear o ciclo por isto era pagar 85s por nada. Sem "await": a promessa corre
   *     em paralelo com montar/gate/editor/comparador/deploy/capa, e só é esperada mesmo antes
   *     do passo do Email, que é quem precisa do resultado.
   *     O ".catch" tem de estar aqui, IMEDIATO, e não só no "await" mais abaixo: no Node 22 uma
   *     promessa que rejeita sem ninguém a "escutar" ainda derruba o processo (unhandled
   *     rejection), mesmo que mais tarde alguém lhe desse await. Sem o catch aqui, qualquer falha
   *     de rede no meio do deploy mata o ciclo inteiro por causa de um passo que nem bloqueia. */
  const t0Defeitos = t();
  const promessaDefeitos = semearDefeitos(brief, abs).catch(e => ({ ok: false, err: e.message, out: '' }));

  /* 2. Montar. "plano" ganha de tudo — é o motor dos 613 componentes reais (blocks-ce/ via
   *    compor.mjs), o único que produz nível Awwwards de verdade. O brief continua a existir
   *    para os passos que não são de montagem (CRM, defeitos, capa, email, comparador); só
   *    a montagem em si delega para o plano.json quando ele existe. Sem "plano", cai para o
   *    assemble (blocos manuais em blocks/) e por fim o remix (--remix inverte de propósito). */
  /* "tema" ganha a tudo o resto e é o caminho principal desde 2026-07-23.
   *
   * Um brief com `"tema": true` (ou com `clientes/<slug>/cliente.json` em disco) delega a
   * montagem ao motor de temas: o conteúdo todo vive num ficheiro só, o `hydrate.mjs`
   * materializa a obra dentro do tema e o `next build` produz uma pasta `out/` estática,
   * igual em natureza a qualquer `sites/<slug>/`. É por isso que o resto do ciclo (gate,
   * passe visual, capa, deploy) não precisa de saber que motor montou: recebe uma pasta.
   *
   * Fica ANTES do compor de propósito. O compor monta a partir dos componentes do banco, que
   * vêm de sistemas de design diferentes e por isso brigam entre si; o tema tem um sistema só.
   * Quando os dois estão disponíveis para o mesmo lead, o tema é sempre a melhor entrega. */
  const fichaTema = join(ROOT, 'clientes', brief.slug || '', 'cliente.json');
  const temTema = brief.tema === true || (brief.tema && typeof brief.tema === 'string') || existsSync(fichaTema);

  const modo = temTema ? 'tema'
    : brief.plano ? 'compor'
    : (brief.blocos?.length && !FORCAR_REMIX) ? 'assemble' : 'remix';
  await passo(`Montar (${modo})`, () => {
    // Limpar artefactos DERIVADOS antes de montar. Não é higiene: o index-editor.html e o
    // proposta.html de uma corrida anterior ficam na pasta que o gate varre a seguir — e a camada
    // do editor tem hex à mão (é chrome nosso, não é o site). Sem isto, a 2ª corrida reprova
    // o trabalho da 1ª. O index.html é reescrito pelo próprio montador.
    for (const f of ['index-editor.html', 'proposta.html', 'email.txt', 'email.json'])
      rmSync(join(outAbs, f), { force: true });

    if (modo === 'tema') {
      const h = correTool('tema/hydrate.mjs', [brief.slug]);
      if (!h.ok) return h;
      // A obra é buildada onde ela vive (dentro do tema, para herdar node_modules por
      // resolução de diretório: um junction para fora é recusado pelo Turbopack e copiar
      // custa 378 MB por cliente). Depois só a pasta `out/` é publicada.
      const nomeTema = (typeof brief.tema === 'string' ? brief.tema : 'restaurante-noir').split('@')[0];
      const obra = join(ROOT, 'themes', nomeTema, '.obras', brief.slug);
      const b = spawnSync('npx', ['next', 'build'], { cwd: obra, encoding: 'utf8', shell: true, maxBuffer: 32 * 1024 * 1024 });
      if (b.status !== 0) return { ok: false, err: 'next build falhou na obra do tema', out: (b.stdout || '') + (b.stderr || '') };
      const saida = join(obra, 'out');
      if (!existsSync(saida)) return { ok: false, err: `o build não produziu ${saida} (falta output:"export" no next.config.mjs do tema?)`, out: b.stdout || '' };
      // o resto do ciclo trabalha sobre esta pasta, como faria com qualquer site estático
      outDir = relative(ROOT, saida).replace(/\\/g, '/');
      outAbs = saida;
      return { ok: true, out: `obra em themes/${nomeTema}/.obras/${brief.slug}, publicável em out/` };
    }

    if (modo === 'compor') {
      // compor.mjs não limpa a própria saída — cada bloco copia assets/libs por nome de scope,
      // então uma 2ª corrida com blocos diferentes do plano acumula lixo de assets antigos.
      rmSync(join(outAbs, 'blocos'), { recursive: true, force: true });
      rmSync(join(outAbs, 'libs'), { recursive: true, force: true });
      return correTool('compor.mjs', [resolve(ROOT, brief.plano), '--out', outDir]);
    }
    if (modo === 'assemble') return correTool('assemble.mjs', [briefPath, '--out', outDir]);
    const tpl = brief.remix?.template;
    if (!tpl) return { ok: false, err: 'brief sem "plano", "blocos" nem "remix.template" — não há o que montar.', out: '' };
    return correTool('remix.mjs', ['skin', tpl, briefPath, '--out', outDir]);
  });

  /* 3. Gate — a fronteira. Daqui não passa lixo.
   *    O brief vai atrás: dá ao gate o idioma (E7) e a cor de marca (C8), que ele não consegue
   *    adivinhar da pasta. Sem ele o gate corre na mesma, só que às cegas nessas duas. */
  /* O gate audita a FONTE; o passe visual audita o RESULTADO. Não é arrumação, é o que os
   * torna úteis: apontar o gate ao build fá-lo ler `404.html`, chunks minificados e o CSS da
   * tela de erro do Next, tudo código de framework que nós não escrevemos. E ao ignorar esses,
   * deixa de ver o CSS compilado e passa a acusar como "ausente" o que lá está.
   * No motor de temas, a fonte é a obra (o `src/` já com tokens e globals gerados para ESTE
   * cliente); os `out`, `.next` e `node_modules` já estão em SKIP_DIRS do gate. */
  const gateDir = modo === 'tema' ? relative(ROOT, dirname(outAbs)).replace(/\\/g, '/') : outDir;
  await passo('Gate da Lei', () => correTool('gate.mjs', [gateDir, briefPath]));

  /* 4. Editor — camada de edição por script (o original mandava o LLM reescrever a página: 2x o custo). */
  await passo('Editor', () => correTool('editor.mjs', [join(outDir, 'index.html')]));

  /* 5. Passe visual — bloqueante. O gate.mjs só lê código; isto abre um browser a sério e apanha
   *    o que só existe depois do JS montar o DOM (é onde viveram os "Advisora" ×26, a secção
   *    vazia que passou no build, o site inteiro em Times New Roman). Corre ANTES da capa, do
   *    deploy e do email de propósito: publicar antes de verificar é exactamente o que este
   *    passo existe para impedir.
   *    Códigos do verificar.mjs: 0 limpo, 1 reprovou (FAIL de verdade), 2 não conseguiu MEDIR
   *    (ex.: Playwright não arrancou). Sem --deploy (ensaio), o 2 é só aviso ruidoso — o ciclo
   *    segue, porque não há nada a publicar de qualquer forma. Com --deploy, o 2 bloqueia como
   *    se fosse 1: publicar sem ter conseguido verificar viola a mesma regra que publicar
   *    sabendo que reprovou. --sem-visual é a única forma de saltar isso, e fica sempre com
   *    rasto no CRM (ver mais abaixo). */
  await passo('Passe visual', () => {
    // Sem --json de propósito: a saída humana do verificar.mjs já tem "❌ N FAIL"/"🔴"/"🟡" —
    // exactamente o formato que razaoDe() e linhasUteis() sabem ler para o relatório do ciclo.
    const r = correTool('verificar.mjs', [outDir]);
    if (r.status === 0) {
      if (!smoke) return r;
      const qa = validarRelatorioSmokeQa(outAbs);
      if (!qa.ok) return { ...r, ok: false, err: qa.err };
      return { ...r, out: `${r.out}\n· QA smoke confirmado: ${relative(ROOT, qa.caminho)}` };
    }
    if (r.status === 2) {
      if (smoke) return { ...r, ok: false, err: 'passe visual smoke não conseguiu medir (exit 2) — a fixture exige QA real' };
      if (!DEPLOY) return { ...r, ok: true, out: `${r.out}\n⚠ não consegui medir (exit 2) — aviso, ensaio continua` };
      if (SEM_VISUAL) {
        publicadoSemPasseVisual = true;
        return { ...r, ok: true, out: `${r.out}\n⚠ não consegui medir (exit 2) — a publicar mesmo assim por --sem-visual` };
      }
      return { ...r, ok: false, err: 'passe visual não conseguiu medir (exit 2) — com --deploy isto bloqueia (publicar sem verificar viola a regra do projeto). Usa --sem-visual para saltar de propósito.' };
    }
    // status 1 = mediu e reprovou. FAIL de verdade: bloqueia sempre, com ou sem --deploy,
    // porque o operador tem de VER o relatório antes de decidir seguir (ou corrigir o defeito).
    return r;
  });

  /* 6. Capa — a peça que vende. Nunca se manda link cru a um desconhecido.
   *    Vem ANTES do deploy: desde que capa.mjs passou a iframar o "depois" por caminho relativo
   *    (./index.html, ver capa.mjs), a capa deixou de precisar da URL publicada para nascer —
   *    e isso elimina o motivo que obrigava a DOIS deploys da mesma pasta.
   *    brief.semSite (ver commands/criar-do-zero.md): não há "antes", e capa.mjs já sabe
   *    montar o modo apresentação única sozinho quando --antes não é passado. */
  await passo('Capa da proposta', () => {
    const antes = brief.siteAntigo || brief.schema?.url;
    if (!antes && !brief.semSite)
      return { ok: false, err: 'brief sem "siteAntigo" — a capa precisa do site atual para comparar (ou marca "semSite": true).', out: '' };
    const r = correTool('capa.mjs', [briefPath, ...(antes ? ['--antes', antes] : []), '--out', join(outDir, 'proposta.html')]);
    if (r.ok) artefactos.capa = join(ROOT, outDir, 'proposta.html');
    return r;
  });

  /* 7. Deploy — UM só, desta vez com o índice E a proposta já dentro da pasta (o passo 6 escreveu
   *    proposta.html antes deste passo correr). Sem --deploy corre em --seco — valida CLI, pasta
   *    e .vercelignore, sem tocar em rede. */
  await passo('Deploy', () => {
    const r = correTool('deploy.mjs', [outDir, '--nome', slug, ...(PROD ? ['--prod'] : []), ...(DEPLOY ? [] : ['--seco'])]);
    if (!r.ok) return r;
    if (DEPLOY) {
      const url = (r.out.match(/https:\/\/[^\s]+/g) || []).pop();
      if (!url) return { ...r, ok: false, err: 'deploy correu mas não devolveu URL.' };
      artefactos.urlSite = url;
      artefactos.urlCapa = `${url.replace(/\/$/, '')}/proposta.html`;
    } else {
      // Placeholder explícito. Não inventamos uma URL plausível: quem lê tem de perceber à
      // primeira que isto é ensaio, e o domínio .invalid não existe nem pode existir (RFC 2606).
      artefactos.urlSite = `https://ensaio-nao-publicado.invalid/${slug}/`;
      artefactos.urlCapa = `${artefactos.urlSite}proposta.html`;
    }
    return r;
  });

  /* 8. Comparador — o antes/depois de todos os clientes, na raiz. Corre DEPOIS do deploy de
   *    propósito: "depois" tem de ser a URL publicada, nunca o ficheiro local. Antes desta
   *    mudança o comparador corria antes do deploy e "depois" caía sempre no ficheiro local
   *    (o `artefactos.urlSite` ainda não existia) — bug latente que se corrige de graça ao
   *    mover o passo para aqui. */
  await passo('Comparador', () => {
    const lista = [{
      slug, nome: brief.cliente?.nome || slug, nota: brief.cliente?.nota, avaliacoes: brief.cliente?.avaliacoes,
      antes: brief.siteAntigo || brief.schema?.url || '',
      depois: artefactos.urlSite || `${outDir.replace(/\\/g, '/')}/index.html`,
      editor: `${outDir.replace(/\\/g, '/')}/index-editor.html`,
    }];
    // Ficheiro de passagem: vive no temp, não suja o repo nem arrisca ir para a web.
    const tmp = join(tmpdir(), `pp-comparador-${slug}-${process.pid}.json`);
    writeFileSync(tmp, JSON.stringify(lista, null, 2), 'utf8');
    const r = correTool('comparador.mjs', [tmp, '--out', 'comparar.html']);
    rmSync(tmp, { force: true });
    artefactos.comparador = join(ROOT, 'comparar.html');
    return r;
  });

  /* 8b. Só agora esperamos a "Semear defeitos" disparada lá atrás no passo 1b — o email.mjs
   *      (a seguir) é o primeiro passo que de facto lê "defeitos" do brief. O "ms" reporta o
   *      tempo REAL desde que a promessa foi disparada (não desde agora): senão o cronómetro
   *      escondia os 5-85s reais atrás de um número quase zero, e a promessa do relatório é
   *      medir a verdade, não fazer o passo parecer grátis. O nome carrega "(em paralelo)"
   *      de propósito — é o único jeito do relatório final não mentir sobre a coreografia. */
  await passo('Semear defeitos (em paralelo)', async () => {
    const r = await promessaDefeitos;
    return { ...r, ms: t() - t0Defeitos };
  });

  /* 9. Email — rascunho, com o checklist anti-spam bloqueante. NÃO envia. */
  await passo('Email (rascunho)', () => {
    if (smoke) return { saltado: true, nota: 'fixture sintética: email não é gerado nem enviado' };
    // Em ensaio o link é falso: escrever para sites/<slug>/email.txt poria um link morto por cima
    // do rascunho bom — e um rascunho pronto a enviar com link morto é o pior artefacto do repo.
    const dir = DEPLOY ? outDir : join('ensaio', slug);
    const r = correTool('email.mjs', [briefPath, '--capa', artefactos.urlCapa, '--out', dir]);
    if (r.ok) artefactos.email = join(ROOT, dir, 'email.txt');
    return r;
  });

  /* 10. CRM — estado final. Só grava URL que existe: o deploy.mjs já confirmou 200 antes de gravar. */
  await passo('CRM estado', () => {
    if (!DEPLOY) return correTool('crm.mjs', ['status', slug, 'redesenhado']);
    // url_nova e status "publicado" já foram escritos pelo deploy.mjs (depois do 200 OK).
    const r = correTool('crm.mjs', ['set', slug, 'url_capa', artefactos.urlCapa]);
    // Rasto obrigatório da escotilha: --sem-visual sem marca no CRM é escotilha que vira hábito
    // sem ninguém perceber, em duas semanas. Corre mesmo que a linha de cima já tenha corrido.
    if (r.ok && publicadoSemPasseVisual) return correTool('crm.mjs', ['set', slug, 'notas', 'publicado sem passe visual']);
    return r;
  });

  const ms = t() - t0;
  const ok = !parou;
  console.log(`│`);
  console.log(`├─ ${ok ? `${OK} ciclo completo` : `${NAO} PAROU em "${parou.passo}"`}  ·  ${seg(ms)}`);
  if (parou) console.log(`│  ${parou.razao.split('\n')[0]}`);
  else {
    console.log(`│  site .......... ${join(outDir, 'index.html')}`);
    console.log(`│  editor ........ ${join(outDir, 'index-editor.html')}`);
    console.log(`│  capa .......... ${artefactos.capa ? join(outDir, 'proposta.html') : '—'}`);
    console.log(`│  comparador .... comparar.html`);
    console.log(`│  email ......... ${artefactos.email ? artefactos.email.replace(ROOT + '\\', '').replace(ROOT + '/', '') : '—'}  (rascunho — não enviado)`);
    console.log(`│  URL do site ... ${artefactos.urlSite}${DEPLOY ? '' : '   ← ensaio, não existe'}`);
    console.log(`│  URL da capa ... ${artefactos.urlCapa}${DEPLOY ? '' : '   ← ensaio, não existe'}`);
  }
  console.log(`╰─${'─'.repeat(40)}`);

  return { slug, ok, passos, razao: parou, ms, artefactos };
}

/* ---------- corre tudo ---------- */
const T0 = t();
console.log(`\nPROSPECTOR PREMIUM — ciclo completo`);
console.log(`${briefs.length} brief(s) · ${DEPLOY ? 'com deploy' : 'ensaio (--seco)'} · email sempre em rascunho`);

const resultados = [];
for (const b of briefs) resultados.push(await ciclo(b));   // sequencial de propósito: o deploy e o
                                                           // CRM não gostam de corridas paralelas.

/* ---------- relatório ---------- */
const bons = resultados.filter(r => r.ok), maus = resultados.filter(r => !r.ok);
const TOTAL = t() - T0;

console.log(`\n${'═'.repeat(62)}`);
console.log(`RELATÓRIO — ${resultados.length} lead(s) · ${bons.length} ok · ${maus.length} falhou(aram) · ${seg(TOTAL)} total`);
console.log('═'.repeat(62));

for (const r of resultados) {
  console.log(`\n${r.ok ? OK : NAO} ${r.slug}  ${seg(r.ms)}`);
  for (const p of r.passos) {
    const marca = p.estado === 'ok' ? OK : p.estado === 'saltado' ? '—' : NAO;
    console.log(`   ${marca} ${p.nome.padEnd(22)} ${(p.estado === 'saltado' ? '—' : seg(p.ms)).padStart(7)}`);
  }
  if (r.razao) {
    const txt = typeof r.razao === 'string' ? r.razao : `${r.razao.passo} — ${r.razao.razao}`;
    txt.split('\n').forEach((l, i) => console.log(`   ${i ? '       ' : 'RAZÃO: '}${l}`));
  }
}

if (resultados.length > 1) {
  const media = resultados.reduce((a, r) => a + r.ms, 0) / resultados.length;
  console.log(`\nMédia por lead: ${seg(media)} · orçamento do Mateus: 15-30 min/site`);
}
if (!DEPLOY) console.log(`\nEnsaio: nada foi publicado e nenhum email foi enviado. Para publicar: --deploy`);
if (maus.length) console.log(`\n${maus.length} lead(s) por resolver: ${maus.map(r => r.slug).join(', ')}`);
console.log('');

process.exit(maus.length ? 1 : 0);
