#!/usr/bin/env node
/**
 * CATALOGO-LOCK — garante que a fábrica produz o MESMO resultado noutra máquina.
 *
 * PORQUE ISTO EXISTE
 * O `bank/` (854 MB, 11.343 ficheiros) é uma biblioteca comercial licenciada por assinatura.
 * Ela não viaja dentro do repositório: quem clona traz a sua própria cópia autorizada. Isso
 * cria um risco novo e silencioso — o banco do outro pode estar incompleto, desatualizado ou
 * diferente, e a fábrica escolheria outras dobras sem ninguém dar por nada. O resultado
 * seria "a ferramenta é pior no PC dele", quando na verdade é o material que difere.
 *
 * Este ficheiro fecha essa porta. Grava a impressão digital do catálogo (quantos componentes,
 * por categoria, e um hash do conjunto) e verifica-a no arranque. Se não bater, PARA com uma
 * mensagem que diz exatamente o que falta. Nunca produz um site pior em silêncio.
 *
 * A regra que isto respeita é a mesma da esteira: falhar alto e cedo custa segundos,
 * descobrir no site entregue ao cliente custa a relação.
 *
 * Uso:
 *   node tools/catalogo-lock.mjs --gravar     grava o lock a partir do banco atual
 *   node tools/catalogo-lock.mjs              verifica o banco contra o lock
 */
import { readdirSync, existsSync, statSync, writeFileSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BANCO = join(ROOT, 'bank', '_componentes');
const LOCK = join(ROOT, 'catalogo.lock.json');

/**
 * A impressão digital é o NOME de cada componente, não o conteúdo dos ficheiros.
 * Deliberado: hash de conteúdo mudaria a cada correção nossa dentro do banco e daria falsos
 * alarmes constantes. O que interessa garantir é que o outro tem AS MESMAS PEÇAS
 * disponíveis para escolher, que é o que determina a composição do site.
 */
export function impressaoDoBanco(base = BANCO) {
  if (!existsSync(base)) return null;
  const categorias = {};
  const nomes = [];
  for (const cat of readdirSync(base)) {
    const dir = join(base, cat);
    if (!statSync(dir).isDirectory()) continue;
    const comps = readdirSync(dir).filter(c => statSync(join(dir, c)).isDirectory());
    categorias[cat] = comps.length;
    for (const c of comps) nomes.push(`${cat}/${c}`);
  }
  nomes.sort();
  return {
    total: nomes.length,
    categorias,
    hash: createHash('sha256').update(nomes.join('\n')).digest('hex').slice(0, 16),
  };
}

export function lerLock() {
  return existsSync(LOCK) ? JSON.parse(readFileSync(LOCK, 'utf8')) : null;
}

/**
 * Compara e devolve um diagnóstico ACIONÁVEL. Dizer "o catálogo não bate" não ajuda
 * ninguém; dizer que faltam 43 componentes na categoria `secoes` diz onde ir buscar.
 */
export function verificar({ lock = lerLock(), atual = impressaoDoBanco() } = {}) {
  if (!lock) return { estado: 'sem-lock', mensagem: 'não existe catalogo.lock.json. Corre `node tools/catalogo-lock.mjs --gravar` na máquina de referência.' };
  if (!atual) {
    return {
      estado: 'sem-banco',
      mensagem: `a pasta bank/_componentes não existe nesta máquina.\n`
        + `  O banco é uma biblioteca comercial e NÃO viaja dentro do repositório.\n`
        + `  Precisas da tua própria cópia autorizada, com ${lock.total} componentes.\n`
        + `  As dobras já promovidas em themes/base/dobras continuam a funcionar sem ele;\n`
        + `  o banco só é preciso para trazer componentes NOVOS pela esteira.`,
    };
  }
  if (atual.hash === lock.hash) return { estado: 'ok', mensagem: `catálogo confere: ${atual.total} componentes` };

  const faltam = [], sobram = [];
  for (const [cat, n] of Object.entries(lock.categorias)) {
    const tem = atual.categorias[cat] ?? 0;
    if (tem < n) faltam.push(`${cat}: tem ${tem} de ${n}`);
  }
  for (const [cat, n] of Object.entries(atual.categorias)) {
    if (!(cat in lock.categorias)) sobram.push(`${cat}: ${n} componente(s) que a referência não tem`);
  }
  return {
    estado: 'divergente',
    faltam, sobram,
    mensagem: `o catálogo desta máquina NÃO é o mesmo da referência.\n`
      + `  referência: ${lock.total} componentes (hash ${lock.hash})\n`
      + `  esta máquina: ${atual.total} componentes (hash ${atual.hash})\n`
      + (faltam.length ? `  em falta:\n${faltam.map(f => '    ' + f).join('\n')}\n` : '')
      + (sobram.length ? `  a mais:\n${sobram.map(s => '    ' + s).join('\n')}\n` : '')
      + `  Com um catálogo diferente, a fábrica escolhe outras dobras e o site sai diferente.`,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (process.argv.includes('--gravar')) {
    const imp = impressaoDoBanco();
    if (!imp) { console.error('✗ bank/_componentes não existe; não há o que gravar'); process.exit(1); }
    writeFileSync(LOCK, JSON.stringify({
      _porque: 'Impressão digital do catálogo de origem. O banco é licença comercial e não viaja no Git; isto garante que outra máquina tem as MESMAS peças disponíveis, senão a fábrica produziria um site diferente em silêncio.',
      ...imp,
    }, null, 2) + '\n', 'utf8');
    console.log(`✓ gravado catalogo.lock.json — ${imp.total} componentes, hash ${imp.hash}`);
    process.exit(0);
  }
  const r = verificar();
  if (r.estado === 'ok') { console.log(`✓ ${r.mensagem}`); process.exit(0); }
  console.error(`✗ ${r.mensagem}`);
  // `sem-banco` não é erro fatal: dá para trabalhar com as dobras já promovidas.
  process.exit(r.estado === 'sem-banco' ? 0 : 1);
}
