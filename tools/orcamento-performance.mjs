#!/usr/bin/env node
/**
 * Gate local de orçamento de performance para a FONTE de cada tema.
 * Não mede bundle final nem depende de rede: impede que assets ou fontes de
 * runtime cresçam sem revisão antes de chegar ao Next build.
 */
import { existsSync, lstatSync, readdirSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const IGNORAR = new Set(['node_modules', '.next', '.obras']);
export const PADRAO = Object.freeze({
  codigoBytes: 1 * 1024 * 1024,
  publicBytes: 100 * 1024 * 1024,
  maiorAssetBytes: 25 * 1024 * 1024,
  ficheiros: 2500,
});

function percorrer(base, raizTema) {
  const ficheiros = [];
  // Também não aceitar src/public como junction: `existsSync` segue o destino, lstat não.
  if (!existsSync(base) || lstatSync(base).isSymbolicLink()) return ficheiros;
  const pilha = [base];
  while (pilha.length) {
    const atual = pilha.pop();
    for (const entrada of readdirSync(atual, { withFileTypes: true })) {
      if (IGNORAR.has(entrada.name)) continue;
      const caminho = join(atual, entrada.name);
      const stat = lstatSync(caminho);
      // Nunca seguir links/junctions: obras e dependências podem apontar para árvores enormes.
      if (stat.isSymbolicLink()) continue;
      if (stat.isDirectory()) pilha.push(caminho);
      else if (stat.isFile()) ficheiros.push({ caminho, bytes: stat.size, relativo: relative(raizTema, caminho) });
    }
  }
  return ficheiros;
}

export function analisarTema(dirTema, limites = PADRAO) {
  const tema = resolve(dirTema);
  const src = join(tema, 'src');
  const pub = join(tema, 'public');
  const codigo = existsSync(src) ? percorrer(src, tema) : [];
  const assets = existsSync(pub) ? percorrer(pub, tema) : [];
  const soma = lista => lista.reduce((total, f) => total + f.bytes, 0);
  const maior = assets.reduce((atual, f) => !atual || f.bytes > atual.bytes ? f : atual, null);
  const metricas = { codigoBytes: soma(codigo), publicBytes: soma(assets), ficheiros: codigo.length + assets.length, maiorAssetBytes: maior?.bytes || 0, maiorAsset: maior?.relativo || null };
  const falhas = [];
  if (metricas.codigoBytes > limites.codigoBytes) falhas.push(`src ${metricas.codigoBytes} B excede ${limites.codigoBytes} B`);
  if (metricas.publicBytes > limites.publicBytes) falhas.push(`public ${metricas.publicBytes} B excede ${limites.publicBytes} B`);
  if (metricas.maiorAssetBytes > limites.maiorAssetBytes) falhas.push(`asset ${metricas.maiorAsset} (${metricas.maiorAssetBytes} B) excede ${limites.maiorAssetBytes} B`);
  if (metricas.ficheiros > limites.ficheiros) falhas.push(`${metricas.ficheiros} ficheiros excedem ${limites.ficheiros}`);
  return { ok: falhas.length === 0, metricas, falhas };
}

function bytes(n) { return `${(n / 1024 / 1024).toFixed(2)} MB`; }
function temasDisponiveis() {
  return readdirSync(join(ROOT, 'themes'), { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== 'base' && existsSync(join(ROOT, 'themes', d.name, 'package.json')))
    .map(d => d.name);
}
function main() {
  const temasArg = process.argv.slice(2).filter(a => !a.startsWith('--'));
  const disponiveis = temasDisponiveis();
  const desconhecidos = temasArg.filter(nome => !disponiveis.includes(nome));
  if (desconhecidos.length) {
    console.error(`tema(s) desconhecido(s): ${desconhecidos.join(', ')}`);
    process.exit(2);
  }
  const temas = temasArg.length ? temasArg : disponiveis;
  let falhou = false;
  for (const nome of temas) {
    const r = analisarTema(join(ROOT, 'themes', nome));
    console.log(`${r.ok ? '✓' : '✗'} orçamento: ${nome} — src ${bytes(r.metricas.codigoBytes)}, public ${bytes(r.metricas.publicBytes)}, maior ${r.metricas.maiorAsset ? `${r.metricas.maiorAsset} (${bytes(r.metricas.maiorAssetBytes)})` : '—'}, ${r.metricas.ficheiros} ficheiros`);
    for (const falha of r.falhas) console.error(`  ${falha}`);
    falhou ||= !r.ok;
  }
  if (falhou) process.exit(1);
}

if (process.argv[1] && import.meta.url === new URL(`file:///${process.argv[1].replace(/\\/g, '/')}`).href) main();
