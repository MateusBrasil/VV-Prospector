#!/usr/bin/env node
/**
 * Gate determinístico e sem build para os invariantes mínimos de acessibilidade do tema.
 * Não substitui teste em browser/axe; impede regressões óbvias antes desse custo.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const TEMAS = join(ROOT, 'themes');
const EXTENSOES_UI = new Set(['.js', '.jsx', '.ts', '.tsx']);

function extensao(nome) { return nome.slice(nome.lastIndexOf('.')); }

function lerRecursivo(dir, aceitar) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const nome of readdirSync(dir)) {
    if (['node_modules', '.next', '.obras'].includes(nome)) continue;
    const ficheiro = join(dir, nome);
    if (statSync(ficheiro).isDirectory()) out.push(...lerRecursivo(ficheiro, aceitar));
    else if (aceitar(ficheiro)) out.push({ ficheiro, texto: readFileSync(ficheiro, 'utf8') });
  }
  return out;
}

/** API pura para testes e para um futuro gate de obra hidratada. */
export function validarFontesTema({ nome, ui, css }) {
  const erros = [];
  const unido = ui.map(f => f.texto).join('\n');
  const layout = ui.find(f => /[\\/]app[\\/]layout\.[^.]+$/.test(f.ficheiro));

  if (!layout || !/<html\b[^>]*\blang\s*=/i.test(layout.texto))
    erros.push('falta <html lang={...}> no app/layout');
  for (const landmark of ['main', 'nav', 'footer'])
    if (!new RegExp(`<${landmark}\\b`, 'i').test(unido)) erros.push(`falta landmark <${landmark}>`);

  for (const f of ui) {
    // Comentários de engenharia podem citar `<img ...>`; removê-los evita reportar código
    // não executável como se fosse DOM. O gate não tenta interpretar JSX inteiro.
    const semComentarios = f.texto.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, '');
    const imagens = semComentarios.match(/<img\b[\s\S]*?>/gi) || [];
    for (const imagem of imagens)
      if (!/\balt\s*=/i.test(imagem)) erros.push(`${relative(ROOT, f.ficheiro)}: <img> sem alt`);
  }
  if (!/:focus-visible\b/i.test(css.map(f => f.texto).join('\n')))
    erros.push('falta estilo :focus-visible no sistema do tema');

  return { nome, ok: erros.length === 0, erros };
}

export function validarTemas(base = TEMAS) {
  const resultados = [];
  for (const nome of readdirSync(base)) {
    const dir = join(base, nome);
    if (!statSync(dir).isDirectory() || !existsSync(join(dir, 'package.json'))) continue;
    const fontes = lerRecursivo(join(dir, 'src'), f => EXTENSOES_UI.has(extensao(f)));
    // A estrutura é deliberadamente compartilhada; CSS específico do tema pode complementá-la.
    const css = [
      ...lerRecursivo(join(dir, 'src'), f => extensao(f) === '.css'),
      ...lerRecursivo(join(base, 'base', 'sistema'), f => extensao(f) === '.css'),
    ];
    resultados.push(validarFontesTema({ nome, ui: fontes, css }));
  }
  return { ok: resultados.every(r => r.ok), resultados };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const r = validarTemas();
  for (const tema of r.resultados) {
    if (tema.ok) console.log(`✓ a11y estática: ${tema.nome}`);
    else for (const erro of tema.erros) console.error(`✗ ${tema.nome}: ${erro}`);
  }
  if (!r.ok) process.exitCode = 1;
}
