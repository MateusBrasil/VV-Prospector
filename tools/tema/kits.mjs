#!/usr/bin/env node
/** Registry declarativo de kits por nicho. Só lê metadados: não move nem promove dobras. */
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { podeUsarDobra } from './dobras.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const ESTADOS_KIT = new Set(['mvp-pronto', 'em-curadoria']);
const NOME_SEGURO = /^[a-z0-9][a-z0-9-]*$/;

export function lerRegistry(caminho = join(ROOT, 'themes', 'base', 'kits.json')) {
  return JSON.parse(readFileSync(caminho, 'utf8'));
}

function validarReferencia(root, entrada, papel) {
  const erros = [];
  if (!NOME_SEGURO.test(entrada?.slot || '') || !NOME_SEGURO.test(entrada?.nome || '')) {
    return ['referência de dobra com slot ou nome inválido'];
  }
  const caminho = join(root, 'themes', 'base', 'dobras', entrada.slot, entrada.nome, 'variant.json');
  if (!existsSync(caminho)) return [`dobra inexistente: ${entrada.slot}/${entrada.nome}`];
  const variante = JSON.parse(readFileSync(caminho, 'utf8'));
  if (variante.estado !== entrada.estado) erros.push(`estado divergente em ${entrada.slot}/${entrada.nome}: registry=${entrada.estado}, fonte=${variante.estado || 'sem estado'}`);
  if (papel === 'aprovado') {
    if (!podeUsarDobra(variante, 'producao')) erros.push(`dobra aprovada não está elegível para produção: ${entrada.slot}/${entrada.nome}`);
    if (typeof variante.origem !== 'string' || !variante.origem.startsWith('bank/_componentes/')) {
      erros.push(`dobra aprovada sem origem rastreável no banco Code Eagle: ${entrada.slot}/${entrada.nome}`);
    }
    if (!Array.isArray(variante.slots) || !variante.slots.length) {
      erros.push(`dobra aprovada sem contrato de conteúdo (slots): ${entrada.slot}/${entrada.nome}`);
    }
  }
  if (papel === 'aprovado') {
    const fidelidade = variante.fidelidade;
    if (fidelidade?.modo !== 'porte-fiel'
      || !Array.isArray(fidelidade?.mecanicasPreservadas) || !fidelidade.mecanicasPreservadas.length
      || !Array.isArray(fidelidade?.adaptacoesPermitidas)
      || !Array.isArray(fidelidade?.materialObrigatorio)) {
      erros.push(`dobra aprovada sem contrato de fidelidade visual: ${entrada.slot}/${entrada.nome}`);
    }
  }
  if (papel === 'candidato' && entrada.estado !== 'revisar') erros.push(`candidato deve permanecer em estado revisar: ${entrada.slot}/${entrada.nome}`);
  return erros;
}

function validarMaterializacaoDoTema(root, kit) {
  if (kit?.estado !== 'mvp-pronto') return [];
  const caminho = join(root, 'themes', kit.tema, 'dobras.manifest.json');
  if (!existsSync(caminho)) return [`manifesto de dobras ausente para o tema ${kit.tema}`];
  let manifesto;
  try {
    manifesto = JSON.parse(readFileSync(caminho, 'utf8'));
  } catch {
    return [`manifesto de dobras inválido para o tema ${kit.tema}`];
  }
  if (!Array.isArray(manifesto.dobras)) return [`manifesto de dobras sem lista para o tema ${kit.tema}`];
  return (kit.componentesAprovados || [])
    .filter(item => !manifesto.dobras.some(dobra =>
      dobra?.slot === item.slot && dobra?.nome === item.nome && dobra?.estado === item.estado))
    .map(item => `dobra aprovada não materializada no tema ${kit.tema}: ${item.slot}/${item.nome}`);
}

export function validarRegistry({ root = ROOT, registry }) {
  const erros = [];
  const avisos = [];
  if (!registry || registry.versao !== 1 || !Array.isArray(registry.kits)) return { ok: false, erros: ['registry precisa de versao 1 e array kits'], avisos };
  const nichos = new Set();
  for (const kit of registry.kits) {
    const prefixo = `kit ${kit?.nicho || '(sem nicho)'}`;
    if (!NOME_SEGURO.test(kit?.nicho || '') || nichos.has(kit.nicho)) erros.push(`${prefixo}: nicho ausente, inválido ou duplicado`);
    nichos.add(kit?.nicho);
    if (!ESTADOS_KIT.has(kit?.estado)) erros.push(`${prefixo}: estado inválido`);
    if (!Array.isArray(kit?.estrutura) || !kit.estrutura.length) erros.push(`${prefixo}: estrutura de página ausente`);
    if (!Array.isArray(kit?.componentesAprovados) || !Array.isArray(kit?.candidatosRevisar)) erros.push(`${prefixo}: faltam listas de aprovados ou candidatos`);
    if (!Array.isArray(kit?.riscos) || !kit.riscos.length || !Array.isArray(kit?.criteriosPromocao) || !kit.criteriosPromocao.length) erros.push(`${prefixo}: riscos e critérios de promoção são obrigatórios`);
    if (kit?.estado === 'mvp-pronto' && !NOME_SEGURO.test(kit.tema || '')) erros.push(`${prefixo}: mvp-pronto exige tema explícito`);
    if (kit?.estado === 'em-curadoria' && kit.tema != null) erros.push(`${prefixo}: em-curadoria não declara tema de produção`);
    for (const item of kit?.componentesAprovados || []) {
      for (const erro of validarReferencia(root, item, 'aprovado')) erros.push(`${prefixo}: ${erro}`);
    }
    for (const item of kit?.candidatosRevisar || []) {
      for (const erro of validarReferencia(root, item, 'candidato')) erros.push(`${prefixo}: ${erro}`);
    }
    for (const item of kit?.estrutura || []) {
      if (item?.fonte !== 'dobra') continue;
      const declarada = (kit.componentesAprovados || []).some(d => d.slot === item.slot && d.nome === item.componente);
      if (!declarada) erros.push(`${prefixo}: estrutura declara dobra não aprovada: ${item.slot}/${item.componente}`);
    }
    for (const erro of validarMaterializacaoDoTema(root, kit)) erros.push(`${prefixo}: ${erro}`);
    if (kit?.estado === 'mvp-pronto' && (kit.componentesAprovados || []).some(x => x.estado === 'revisar')) erros.push(`${prefixo}: mvp-pronto não pode referenciar dobra revisar como aprovada`);
    if (kit?.estado === 'em-curadoria') avisos.push(`${prefixo}: não é kit de produção`);
  }
  return { ok: erros.length === 0, erros, avisos };
}

export function carregarEValidar({ root = ROOT, caminho, nicho } = {}) {
  const registry = lerRegistry(caminho || join(root, 'themes', 'base', 'kits.json'));
  const validacao = validarRegistry({ root, registry });
  const kits = nicho ? registry.kits.filter(k => k.nicho === nicho) : registry.kits;
  if (nicho && !kits.length) validacao.erros.push(`kit inexistente: ${nicho}`);
  validacao.ok = validacao.erros.length === 0;
  return { ...validacao, kits };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const i = process.argv.indexOf('--nicho');
  const nicho = i > -1 ? process.argv[i + 1] : null;
  const r = carregarEValidar({ nicho });
  if (process.argv.includes('--json')) console.log(JSON.stringify(r, null, 2));
  else for (const kit of r.kits) console.log(`${kit.nicho}: ${kit.estado} · tema ${kit.tema || '—'} · ${kit.estrutura.length} slot(s) prontos · ${kit.componentesAprovados.length} dobra(s) aprovada(s) · ${kit.candidatosRevisar.length} candidata(s) revisar`);
  for (const aviso of r.avisos) console.log(`⚠ ${aviso}`);
  for (const erro of r.erros) console.error(`✗ ${erro}`);
  process.exit(r.ok ? 0 : 1);
}
