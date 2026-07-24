/**
 * Dobras que um tema materializa dentro de cada obra.
 *
 * A fonte é sempre `themes/base/dobras`. A cópia para `obra/src/dobras` é
 * deliberadamente um artefacto de build: o Next/Turbopack não pode importar
 * código fora da raiz materializada da obra.
 */
import { cpSync, existsSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { podeUsarDobra } from './dobras.mjs';

const NOME_SEGURO = /^[a-z0-9][a-z0-9-]*$/;

function dentroDe(base, alvo) {
  const rel = relative(base, alvo);
  return rel && !rel.startsWith('..') && !rel.includes(':');
}

export function lerManifestDobras(dirTema) {
  const ficheiro = join(dirTema, 'dobras.manifest.json');
  if (!existsSync(ficheiro)) return [];
  const bruto = JSON.parse(readFileSync(ficheiro, 'utf8'));
  if (!Array.isArray(bruto.dobras)) throw new Error(`manifest inválido: themes/${bruto.nome || 'tema'}/dobras.manifest.json precisa de "dobras"`);
  return bruto.dobras;
}

/** Valida e materializa exclusivamente dobras explicitamente promovidas. */
export function materializarDobras({ root, dirTema, obra }) {
  const base = resolve(root, 'themes', 'base', 'dobras');
  const destinoRaiz = resolve(obra, 'src', 'dobras');
  const dobras = lerManifestDobras(dirTema);

  for (const entrada of dobras) {
    const { slot, nome } = entrada || {};
    if (!NOME_SEGURO.test(slot || '') || !NOME_SEGURO.test(nome || '')) {
      throw new Error('manifest de dobras contém slot ou nome inválido');
    }
    const origem = resolve(base, slot, nome);
    const destino = resolve(destinoRaiz, slot, nome);
    if (!dentroDe(base, origem) || !dentroDe(destinoRaiz, destino)) throw new Error('manifest de dobras fora da raiz permitida');
    const variantePath = join(origem, 'variant.json');
    if (!existsSync(variantePath)) throw new Error(`dobra não existe: ${slot}/${nome}`);
    const variante = JSON.parse(readFileSync(variantePath, 'utf8'));

    // O manifesto declara a expectativa para tornar a decisão auditável; a
    // fonte também precisa estar promovida, portanto não há aprovação implícita.
    if (!['aprovada', 'em-producao'].includes(entrada.estado)) {
      throw new Error(`manifest: ${slot}/${nome} precisa declarar estado aprovada ou em-producao`);
    }
    if (variante.estado !== entrada.estado || !podeUsarDobra(variante, 'producao')) {
      throw new Error(`dobra ${slot}/${nome} não está promovida para produção (manifest=${entrada.estado}, fonte=${variante.estado || 'sem estado'})`);
    }
    cpSync(origem, destino, { recursive: true });
  }
  return dobras.length;
}
