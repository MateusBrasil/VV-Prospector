/**
 * Gera `tokens.generated.css` a partir de `cliente.json → design`.
 *
 * POR QUE OS DEFAULTS SÃO OS DO KASABLANCA
 * Não é preguiça nem homenagem: é o contrato do teste de regressão. Um `cliente.json` que
 * não declare nada de design tem de produzir, byte a byte, o CSS computado do site que o
 * Mateus aprovou. Se os defaults derivarem, o teste acusa — e é isso que os mantém honestos.
 *
 * O cliente sobrepõe só o que quer. O Virtudes, por exemplo, muda paleta, família de display
 * e desliga a caixa alta; herda todo o resto (ritmo, tracking, escala compacta).
 */

/* Régua medida no Kasablanca em produção, 1440px, via getComputedStyle:
 * h1 172.8px peso 900 lh 0.85 · corpo 16px · ratio display:corpo 10.8× */
export const PADRAO = {
  cores: {
    base100: '#e0ded1', base200: '#a6a49a', base300: '#615558',
    base400: '#40373a', base500: '#231f20', base600: '#171415',
    fundo: '#000',
    // Acento do Kasablanca: o terracota da pílula do Marquee. Fixo aqui, e não calculado,
    // pelo mesmo motivo dos `base1xx`: um cliente sem `design.cores.acento` tem de reproduzir
    // byte a byte o site aprovado. Ver TOKENS_EXIGIDOS.
    acento: '#c0472b',
  },
  // `texto`, `textoSuave` e `textoTenue` apontam para tokens da paleta, não para hex.
  // Trocar a paleta arrasta o texto junto, que é o que impede o cinzento órfão.
  papeis: { texto: 'base100', textoSuave: 'base200', textoTenue: 'base300' },
  display: {
    peso: 900,
    lh: '0.85',
    lhMultilinha: '1.02',      // correção PT, ver estrutura.css
    caixa: 'uppercase',
    escala: {
      h1: 'clamp(4rem, 12vw, 20rem)',
      h2: 'clamp(3rem, 8vw, 13rem)',
      h3: 'clamp(2rem, 5vw, 8rem)',
      h4: 'clamp(1.75rem, 3.5vw, 5.25rem)',
      h5: 'clamp(1.5rem, 3vw, 4.5rem)',
      h6: 'clamp(1.25rem, 2vw, 4rem)',
    },
  },
  corpo: {
    tamanho: '1.15rem', peso: 450, lh: '1.15', tracking: '-0.025rem',
    sm: '1rem',
    md: '1.45rem', mdTracking: '-0.035rem',
    lg: '1.75rem', lgTracking: '-0.045rem',
    compacto: { tamanho: '1rem', sm: '0.9rem', md: '1.35rem', lg: '1.5rem' },
  },
  mono: { tamanho: '0.85rem', peso: 500, lh: '1.35', caixa: 'uppercase' },
  ritmo: { larguraMax: '2000px', respiro: '2.5rem', respiroCompacto: '1.5rem' },
};

/**
 * `base100` → `base-100`, `larguraMax` → `largura-max`.
 *
 * UMA função, usada em TODOS os sítios que constroem nome de token. A primeira versão disto
 * tinha duas regex diferentes para a mesma conversão (uma na emissão da paleta, outra nas
 * referências) e elas divergiram: a paleta declarava `--base-1-0-0` e os papéis apontavam
 * para `--base100`. Resultado: o site inteiro ficou preto com Times New Roman. Duas fontes
 * de verdade para a mesma regra é o bug, não o regex.
 */
const kebab = s => s.replace(/([A-Z])/g, '-$1').replace(/(\d+)/g, '-$1').toLowerCase();

/**
 * Tokens que os CSS dos componentes JÁ consomem hoje (19 usos de --base-100, 17 de --base-500,
 * etc.). Não é convenção nossa, é contrato existente: mudar qualquer um destes nomes parte
 * todos os componentes de uma vez, em silêncio. O gerador verifica no fim que os emitiu.
 */
export const TOKENS_EXIGIDOS = [
  '--base-100', '--base-200', '--base-300', '--base-400', '--base-500', '--base-600', '--acento',
];

const fundir = (base, sobre) => {
  if (!sobre || typeof sobre !== 'object' || Array.isArray(sobre)) return sobre ?? base;
  const out = { ...base };
  for (const [k, v] of Object.entries(sobre)) {
    out[k] = (base?.[k] && typeof base[k] === 'object' && !Array.isArray(base[k]))
      ? fundir(base[k], v) : v;
  }
  return out;
};

/**
 * @param design  o objeto `design` do cliente.json (pode ser parcial ou ausente)
 * @param fontes  { display, corpo, mono } — já resolvidos por fonts.mjs para o valor
 *                CSS final (nome literal ou `var(--font-x)` do next/font)
 */
export function gerarTokens(design = {}, fontes = {}) {
  const d = fundir(PADRAO, design);
  const cor = n => `var(--${kebab(n)})`;

  const linhas = [
    '/* GERADO por tools/tema/tokens.mjs — não editar à mão.',
    '   Fonte: direção de arte + sobreposição de design do cliente. Editar aqui é trabalho que o próximo build apaga. */',
    ':root {',
    '  /* paleta */',
    ...Object.entries(d.cores).map(([k, v]) => `  --${kebab(k)}: ${v};`),
    '',
    '  /* papéis de texto (apontam para a paleta, nunca para hex) */',
    `  --cor-texto: ${cor(d.papeis.texto)};`,
    `  --cor-texto-suave: ${cor(d.papeis.textoSuave)};`,
    `  --cor-texto-tenue: ${cor(d.papeis.textoTenue)};`,
    '  --cor-fundo: var(--fundo);',
    '',
    '  /* display */',
    `  --display-peso: ${d.display.peso};`,
    `  --display-lh: ${d.display.lh};`,
    `  --display-lh-multilinha: ${d.display.lhMultilinha};`,
    `  --display-caixa: ${d.display.caixa};`,
    // ACRESCENTADO 2026-07-27: o sistema emitia `--corpo-tracking` mas NUNCA um tracking de
    // display, e nenhuma das três direções de nicho o declarava. A um h1 de 5 a 7rem, o
    // tracking por omissão fica solto, e isso é um dos sinais de tipografia não pensada que
    // o passe visual apanha como "cara de IA" (2 avisos IA1 no tema odontologia foram o que
    // revelou o buraco). A unidade é `em` e não `rem` de propósito: tem de escalar com o
    // `clamp()` do tamanho, senão um h1 responsivo fica bem a 1440 e apertado a 375.
    `  --display-tracking: ${d.display.tracking ?? '0'};`,
    ...Object.entries(d.display.escala).map(([k, v]) => `  --${k}: ${v};`),
    '',
    '  /* corpo */',
    `  --corpo-tamanho: ${d.corpo.tamanho};`,
    `  --corpo-peso: ${d.corpo.peso};`,
    `  --corpo-lh: ${d.corpo.lh};`,
    `  --corpo-tracking: ${d.corpo.tracking};`,
    `  --corpo-sm: ${d.corpo.sm};`,
    `  --corpo-md: ${d.corpo.md};`,
    `  --corpo-md-tracking: ${d.corpo.mdTracking};`,
    `  --corpo-lg: ${d.corpo.lg};`,
    `  --corpo-lg-tracking: ${d.corpo.lgTracking};`,
    `  --corpo-tamanho-compacto: ${d.corpo.compacto.tamanho};`,
    `  --corpo-sm-compacto: ${d.corpo.compacto.sm};`,
    `  --corpo-md-compacto: ${d.corpo.compacto.md};`,
    `  --corpo-lg-compacto: ${d.corpo.compacto.lg};`,
    '',
    '  /* mono */',
    `  --mono-tamanho: ${d.mono.tamanho};`,
    `  --mono-peso: ${d.mono.peso};`,
    `  --mono-lh: ${d.mono.lh};`,
    `  --mono-caixa: ${d.mono.caixa};`,
    '',
    '  /* ritmo */',
    `  --largura-max: ${d.ritmo.larguraMax};`,
    `  --respiro: ${d.ritmo.respiro};`,
    `  --respiro-compacto: ${d.ritmo.respiroCompacto};`,
    '}',
    '',
    '/* AS FONTES VÃO NO `body`, NÃO NO `:root` — e isto não é estilo, é obrigatório.',
    '   O `next/font` expõe as famílias como custom properties na className que o layout.js',
    '   aplica ao <body>. Declarar `--fonte-corpo: var(--font-host-grotesk)` no `:root` faz o',
    '   var() interno resolver num escopo onde ele ainda não existe: o valor fica inválido e a',
    '   página inteira cai para Times New Roman. Custom properties herdam, por isso declarar no',
    '   body serve todo o documento. Custou 15 divergências na regressão até se ver isto. */',
    'body {',
    `  --fonte-display: ${fontes.display || '"Georgia", serif'};`,
    `  --fonte-corpo: ${fontes.corpo || 'system-ui, sans-serif'};`,
    `  --fonte-mono: ${fontes.mono || 'ui-monospace, monospace'};`,
    '}',
  ];

  const css = linhas.join('\n') + '\n';

  // Guarda: se um token que os componentes consomem não foi emitido, o site fica preto e sem
  // fonte, e o sintoma não aponta para a causa. Falhar aqui, alto e cedo, custa segundos;
  // descobrir no screenshot custa uma tarde.
  const emFalta = TOKENS_EXIGIDOS.filter(t => !css.includes(`${t}:`));
  if (emFalta.length) {
    throw new Error(
      `tokens.mjs não emitiu tokens que os CSS dos componentes consomem: ${emFalta.join(', ')}\n` +
      'Ver TOKENS_EXIGIDOS neste ficheiro.'
    );
  }
  return css;
}
