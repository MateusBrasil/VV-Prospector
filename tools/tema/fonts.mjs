/**
 * Gera `src/theme/fontes.generated.js` — as fontes locais do cliente.
 *
 * O PROBLEMA QUE ISTO RESOLVE
 * Uma obra precisa de compilar em QA isolado, sem rede. `next/font/google` faz fetch durante
 * `next build`; por isso uma fonte Google declarada na direção de arte é uma INTENÇÃO
 * tipográfica, não uma dependência de runtime. O gerador mapeia-a para uma pilha de sistema
 * compatível. Para a família exata, o cliente deve fornecer ficheiros licenciados com
 * `origem: "local"`, que `next/font/local` self-hosta sem chamadas externas.
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
  // Entrou em 2026-07-28 para o nicho `clinica-estetica`: `direcoes.json` fixa Jost como
  // fonte de corpo desse nicho (geométrica limpa, SIL OFL), e sem estar aqui o gerador
  // rebentava o build com "Unknown font". Adição, não troca: nada existente muda.
  'Jost': { importName: 'Jost', pesos: null },
  'Geist': { importName: 'Geist', pesos: null },
  'Geist Mono': { importName: 'Geist_Mono', pesos: null },
  'JetBrains Mono': { importName: 'JetBrains_Mono', pesos: null },
};

/** Fallbacks locais por classe tipográfica. Mantêm a hierarquia do nicho quando a obra é
 * gerada sem rede: serifas editoriais continuam serifas; grotescas continuam sans; mono
 * continua mono. Nunca substituímos silenciosamente por uma CDN. */
const FALLBACKS_OFFLINE = {
  'Fraunces': { familia: 'Georgia', fallback: 'serif' },
  'Instrument Serif': { familia: 'Georgia', fallback: 'serif' },
  'Newsreader': { familia: 'Georgia', fallback: 'serif' },
  'Lora': { familia: 'Georgia', fallback: 'serif' },
  'Playfair Display': { familia: 'Georgia', fallback: 'serif' },
  'Cormorant Garamond': { familia: 'Georgia', fallback: 'serif' },
  'Host Grotesk': { familia: 'Arial', fallback: 'sans-serif' },
  'Inter': { familia: 'Arial', fallback: 'sans-serif' },
  'Jost': { familia: 'Arial', fallback: 'sans-serif' },
  'Geist': { familia: 'Arial', fallback: 'sans-serif' },
  'DM Mono': { familia: 'Courier New', fallback: 'monospace' },
  'Geist Mono': { familia: 'Courier New', fallback: 'monospace' },
  'JetBrains Mono': { familia: 'Courier New', fallback: 'monospace' },
};

const varDe = familia => '--fonte-' + familia.toLowerCase().replace(/\s+/g, '-');

/* Defaults = as fontes do Kasablanca. Ver tokens.mjs para o porquê de os defaults serem
 * exatamente o site aprovado: é o que mantém o teste de regressão honesto. */
const PADRAO = {
  // Sem CDN por omissão: a obra tem de renderizar também em QA isolado e offline.
  // Um cliente pode declarar uma fonte local em assets/fonts quando direção de arte exigir.
  display: { origem: 'system', familia: 'Georgia', fallback: 'serif' },
  corpo: { origem: 'system', familia: 'Arial', fallback: 'sans-serif' },
  mono: { origem: 'system', familia: 'Courier New', fallback: 'monospace' },
};

/**
 * @returns {{ js:string, cssImports:string[], valores:{display,corpo,mono} }}
 *   js          conteúdo de `src/theme/fontes.generated.js`
 *   cssImports  @import a colar no topo do globals.css (fontes por URL)
 *   valores     o que `tokens.mjs` põe em `--fonte-*`
 */
export function gerarFontes(fontes = {}) {
  const f = { ...PADRAO, ...fontes };
  const imports = new Map();     // fonte local -> { local, variavel }
  const cssImports = [];
  const valores = {};
  const erros = [];

  for (const papel of ['display', 'corpo', 'mono']) {
    const d = f[papel];
    if (!d) { erros.push(`design.fontes.${papel} em falta`); continue; }
    const generico = papel === 'mono' ? 'monospace' : (d.fallback || 'sans-serif');

    if (d.origem === 'google') {
      if (!PERMITIDAS[d.familia]) {
        erros.push(
          `fonte "${d.familia}" (${papel}) não está na allowlist do tema.\n` +
          `  Permitidas: ${Object.keys(PERMITIDAS).join(', ')}\n` +
          `  Uma família nova entra por alteração do TEMA, não do cliente: é preciso ver como ` +
          `ela se comporta na escala do sistema antes de a deixar entrar.`);
        continue;
      }
      // `mono` é um papel semântico: mesmo que uma fixture o tenha declarado com uma
      // sans Google, o fallback offline não pode transformar código/telemetria em sans.
      const fallbackOffline = papel === 'mono'
        ? { familia: 'Courier New', fallback: 'monospace' }
        : FALLBACKS_OFFLINE[d.familia];
      // A allowlist e o campo `familia` continuam a validar a direção de arte. O build,
      // porém, nunca importa `next/font/google`: só uma fonte `local` pode exigir ficheiros.
      valores[papel] = `"${d.fallback || fallbackOffline.familia}", ${d.fallbackGenerico || fallbackOffline.fallback || generico}`;

    } else if (d.origem === 'system') {
      valores[papel] = `"${d.familia || 'serif'}", ${generico}`;

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
      erros.push(`design.fontes.${papel}.origem inválida: "${d.origem}" (google | system | url | local)`);
    }
  }

  if (erros.length) {
    const e = new Error('fontes inválidas:\n  ' + erros.join('\n  '));
    e.code = 'FONTES_INVALIDAS';
    throw e;
  }

  const linhasLocal = [...imports.entries()].filter(([k]) => k.startsWith('__local_'));

  const js = [
    '/* GERADO por tools/tema/fonts.mjs — não editar à mão.',
    '   Só fontes locais entram aqui. Fontes Google da direção de arte viram fallbacks de',
    '   sistema para que o build e o QA funcionem sem rede. Fonte: cliente.json → design.fontes. */',
    linhasLocal.length ? 'import localFont from "next/font/local";' : '',
    '',
    ...linhasLocal.map(([chave, o]) =>
      `const ${chave.replace('__local_', 'local_')} = localFont({ src: ${JSON.stringify(o.local)}, variable: "${o.variavel}", display: "swap" });`),
    '',
    '/* vai para a className do <body>: é lá que o next/font publica as custom properties,',
    '   e é por isso que os tokens de fonte também têm de ser declarados no body. */',
    `export const classesDeFonte = ${
      linhasLocal.length
        ? linhasLocal.map(([n]) => `${n.replace('__local_', 'local_')}.variable`).join(' + " " + ')
        : '""'
    };`,
    '',
  ].filter(l => l !== '').join('\n');

  return { js, cssImports, valores };
}
