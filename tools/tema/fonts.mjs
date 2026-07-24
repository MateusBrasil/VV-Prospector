/**
 * Gera `src/theme/fontes.generated.js` — os imports de `next/font` do cliente.
 *
 * O PROBLEMA QUE ISTO RESOLVE
 * `next/font/google` exige o identificador ESTÁTICO: `import { Fraunces } from "next/font/google"`.
 * Não aceita `next/font/google[familia]`. As três saídas óbvias são todas más:
 *   - declarar todas as famílias do allowlist e escolher por string → o next/font BAIXA e emite
 *     preload de TODAS, usadas ou não. Com 15 famílias, 15 fontes por build.
 *   - <link> para o Google Fonts → perde o self-host e junta um pedido a terceiro, que é
 *     exatamente o vício do CDN que já queimou nos 13 blocos de blocks-ce.
 *   - @font-face à mão → funciona, mas obriga a gerir ficheiros e unicode-range manualmente.
 * A saída boa é GERAR o ficheiro com os imports literais só das famílias daquele cliente.
 * O código gerado é estático para o bundler; o que é dinâmico é quem o escreve.
 */

/** Famílias Google permitidas. Entrar aqui é decisão do tema, não do cliente: uma família
 *  nova exige olhar como ela se comporta na escala do sistema. Sem allowlist, um typo no
 *  cliente.json rebenta o `next build` com "Unknown font" no meio de um lote. */
export const PERMITIDAS = {
  'Host Grotesk': { importName: 'Host_Grotesk', pesos: null },
  'DM Mono': { importName: 'DM_Mono', pesos: ['300', '400', '500'] },
  'Fraunces': { importName: 'Fraunces', pesos: ['400', '500', '600', '700'] },
  'Instrument Serif': { importName: 'Instrument_Serif', pesos: ['400'] },
  'Newsreader': { importName: 'Newsreader', pesos: null },
  'Lora': { importName: 'Lora', pesos: null },
  'Playfair Display': { importName: 'Playfair_Display', pesos: null },
  'Cormorant Garamond': { importName: 'Cormorant_Garamond', pesos: ['300', '400', '500', '600', '700'] },
  'Inter': { importName: 'Inter', pesos: null },
  'Geist': { importName: 'Geist', pesos: null },
  'Geist Mono': { importName: 'Geist_Mono', pesos: null },
  'JetBrains Mono': { importName: 'JetBrains_Mono', pesos: null },
};

const varDe = familia => '--fonte-' + familia.toLowerCase().replace(/\s+/g, '-');

/* Defaults = as fontes do Kasablanca. Ver tokens.mjs para o porquê de os defaults serem
 * exatamente o site aprovado: é o que mantém o teste de regressão honesto. */
const PADRAO = {
  display: { origem: 'url', familia: 'Roslindale Variable',
             url: 'https://fonts.cdnfonts.com/css/roslindale', fallback: 'sans-serif' },
  corpo: { origem: 'google', familia: 'Host Grotesk' },
  mono: { origem: 'google', familia: 'DM Mono' },
};

/**
 * @returns {{ js:string, cssImports:string[], valores:{display,corpo,mono} }}
 *   js          conteúdo de `src/theme/fontes.generated.js`
 *   cssImports  @import a colar no topo do globals.css (fontes por URL)
 *   valores     o que `tokens.mjs` põe em `--fonte-*`
 */
export function gerarFontes(fontes = {}) {
  const f = { ...PADRAO, ...fontes };
  const imports = new Map();     // importName -> { pesos, variavel }
  const cssImports = [];
  const valores = {};
  const erros = [];

  for (const papel of ['display', 'corpo', 'mono']) {
    const d = f[papel];
    if (!d) { erros.push(`design.fontes.${papel} em falta`); continue; }
    const generico = papel === 'mono' ? 'monospace' : (d.fallback || 'sans-serif');

    if (d.origem === 'google') {
      const meta = PERMITIDAS[d.familia];
      if (!meta) {
        erros.push(
          `fonte "${d.familia}" (${papel}) não está na allowlist do tema.\n` +
          `  Permitidas: ${Object.keys(PERMITIDAS).join(', ')}\n` +
          `  Uma família nova entra por alteração do TEMA, não do cliente: é preciso ver como ` +
          `ela se comporta na escala do sistema antes de a deixar entrar.`);
        continue;
      }
      const variavel = varDe(d.familia);
      imports.set(meta.importName, {
        pesos: d.pesos || meta.pesos, variavel,
        subsets: d.subsets || ['latin'],
      });
      valores[papel] = `var(${variavel}), ${generico}`;

    } else if (d.origem === 'url') {
      if (!d.url) { erros.push(`design.fontes.${papel}.url em falta (origem "url")`); continue; }
      cssImports.push(`@import url("${d.url}");`);
      valores[papel] = `"${d.familia}", ${generico}`;

    } else if (d.origem === 'local') {
      // ficheiros do cliente em clientes/<slug>/assets/fonts/, copiados pelo hydrate
      if (!Array.isArray(d.ficheiros) || !d.ficheiros.length) {
        erros.push(`design.fontes.${papel}.ficheiros em falta (origem "local")`); continue;
      }
      const variavel = varDe(d.familia);
      imports.set(`__local_${papel}`, { local: d.ficheiros, variavel });
      valores[papel] = `var(${variavel}), ${generico}`;

    } else {
      erros.push(`design.fontes.${papel}.origem inválida: "${d.origem}" (google | url | local)`);
    }
  }

  if (erros.length) {
    const e = new Error('fontes inválidas:\n  ' + erros.join('\n  '));
    e.code = 'FONTES_INVALIDAS';
    throw e;
  }

  const linhasGoogle = [...imports.entries()].filter(([k]) => !k.startsWith('__local_'));
  const linhasLocal = [...imports.entries()].filter(([k]) => k.startsWith('__local_'));

  const js = [
    '/* GERADO por tools/tema/fonts.mjs — não editar à mão.',
    '   Só as famílias deste cliente entram aqui: o next/font baixa e faz preload de tudo o que',
    '   for declarado, por isso declarar o catálogo inteiro custaria uma fonte por família em',
    '   cada build. Fonte: cliente.json → design.fontes. */',
    linhasGoogle.length ? `import { ${linhasGoogle.map(([n]) => n).join(', ')} } from "next/font/google";` : '',
    linhasLocal.length ? 'import localFont from "next/font/local";' : '',
    '',
    ...linhasGoogle.map(([nome, o]) =>
      `const ${nome.toLowerCase()} = ${nome}({ subsets: ${JSON.stringify(o.subsets)}` +
      (o.pesos ? `, weight: ${JSON.stringify(o.pesos)}` : '') +
      `, variable: "${o.variavel}", display: "swap" });`),
    ...linhasLocal.map(([chave, o]) =>
      `const ${chave.replace('__local_', 'local_')} = localFont({ src: ${JSON.stringify(o.local)}, variable: "${o.variavel}", display: "swap" });`),
    '',
    '/* vai para a className do <body>: é lá que o next/font publica as custom properties,',
    '   e é por isso que os tokens de fonte também têm de ser declarados no body. */',
    `export const classesDeFonte = ${
      [...imports.keys()].length
        ? [...imports.keys()].map(n => `${n.startsWith('__local_') ? n.replace('__local_', 'local_') : n.toLowerCase()}.variable`).join(' + " " + ')
        : '""'
    };`,
    '',
  ].filter(l => l !== '').join('\n');

  return { js, cssImports, valores };
}
