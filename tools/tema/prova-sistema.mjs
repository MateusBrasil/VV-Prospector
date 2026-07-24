#!/usr/bin/env node
/**
 * Prova que `sistema/estrutura.css` + `tokens.generated.css` reproduzem o `globals.css`
 * do Kasablanca sem perder um único valor computado.
 *
 * Uso: node tools/tema/prova-sistema.mjs
 *
 * Faz uma cópia de trabalho do kasablanca-site (o original NUNCA é tocado), troca só o
 * globals.css, e deixa a comparação para o regress.mjs. É o primeiro degrau: se o sistema
 * não reproduz o site aprovado, não faz sentido extrair conteúdo nenhum ainda.
 */
import { cpSync, writeFileSync, readFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gerarTokens } from './tokens.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');
const FONTE = 'C:/Users/mateu/Documents/Projetos/kasablanca-site';
const OBRA = join(ROOT, 'build', '_prova-sistema');

/* As fontes do Kasablanca, tal como o layout.js as expõe hoje. Quando o fonts.mjs existir,
 * isto passa a vir dele; por agora é literal para isolar a variável em teste (os tokens). */
const FONTES_KASABLANCA = {
  display: '"Roslindale Variable", sans-serif',
  corpo: 'var(--font-host-grotesk), sans-serif',
  mono: 'var(--font-dm-mono), monospace',
};

console.log('1. copiando kasablanca-site para build/_prova-sistema (o original não é tocado)');
if (existsSync(OBRA)) rmSync(OBRA, { recursive: true, force: true });
mkdirSync(OBRA, { recursive: true });
for (const item of ['src', 'public', 'package.json', 'next.config.mjs', 'jsconfig.json']) {
  const de = join(FONTE, item);
  if (existsSync(de)) cpSync(de, join(OBRA, item), { recursive: true });
}

console.log('2. ligando node_modules por junction (evita 500 MB e um npm install)');
const nm = join(OBRA, 'node_modules');
if (!existsSync(nm)) {
  const { execSync } = await import('node:child_process');
  try {
    execSync(`mklink /J "${nm}" "${join(FONTE, 'node_modules')}"`, { shell: 'cmd.exe', stdio: 'ignore' });
  } catch {
    console.log('   junction falhou, a copiar (lento)');
    cpSync(join(FONTE, 'node_modules'), nm, { recursive: true });
  }
}

console.log('3. gerando tokens.generated.css a partir dos defaults (= design do Kasablanca)');
const tokens = gerarTokens({}, FONTES_KASABLANCA);
writeFileSync(join(OBRA, 'src', 'app', 'tokens.generated.css'), tokens, 'utf8');

console.log('4. trocando globals.css por: @import tokens + @import sistema');
/* O @import da Roslindale tem de ficar em primeiro: a regra do CSS é que @import só vale
 * antes de qualquer outra declaração. É por isso que ele fica aqui e não no estrutura.css. */
const estrutura = readFileSync(join(ROOT, 'themes', 'base', 'sistema', 'estrutura.css'), 'utf8');
writeFileSync(join(OBRA, 'src', 'app', 'globals.css'),
  '@import url("https://fonts.cdnfonts.com/css/roslindale");\n' +
  '@import "./tokens.generated.css";\n\n' + estrutura, 'utf8');

console.log('\n✓ obra pronta em build/_prova-sistema');
console.log('  seguinte: npx next build && npx next start -p 3312, depois');
console.log('  node tools/tema/regress.mjs --capturar http://127.0.0.1:3312 --saida build/_prova-sistema/_capt --rotas "/,/about,/menu,/reservation"');
console.log('  node tools/tema/regress.mjs --comparar --a baseline/kasablanca --b build/_prova-sistema/_capt');
