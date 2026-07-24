/**
 * Sobras de template de origem — fonte ÚNICA da verdade.
 *
 * POR QUE ISTO EXISTE COMO MÓDULO
 * A mesma lista precisa de servir dois consumidores que veem coisas diferentes:
 *   - `gate.mjs` faz grep ao CÓDIGO-FONTE (apanha o que está escrito no ficheiro)
 *   - `verificar.mjs` lê o DOM RENDERIZADO (apanha o que o JS montou depois)
 * Duas listas separadas divergem em duas semanas e o gate passa a aprovar o que o
 * outro reprova. Uma lista só, importada pelos dois.
 *
 * PORQUE É LISTA CURADA E NÃO HEURÍSTICA
 * Tentar adivinhar "isto parece nome de marca" por regex genérico dá falso positivo em
 * todo site (o nome do próprio cliente parece nome de marca). A lista cresce a cada caso
 * real encontrado — é barata de manter e não tem falso positivo. Cada entrada abaixo
 * corresponde a um vazamento MEDIDO, não a uma suposição.
 */

/* Marcas de templates de origem. Auditoria dev-squad 2026-07-22: as três primeiras
 * chegaram ao HTML publicado do Restaurante Virtudes (menu/navegacao-menu-20). */
const MARCAS = [
  'Curology', 'Yourspace', 'Lumin',
  'Advisora', 'Pipely', 'upmind', 'coverly',       // sites/vst-motor: "advisora" ×26, "Pipely" ×10
  'Nova Motion', 'Astral Aesthetics',              // hero-14, hero-11
  'ÉLAN STUDIO', 'ELAN STUDIO',                    // animacoes-de-rolagem/animacao-rolagem-3
  'nullspace',                                     // menu/navegacao-menu-19
  'Rhythmic Sound', 'Echo Beats',                  // menu/navegacao-menu-17
  'Wanderlust Destinations',                       // cards/card-grid-hover-effect
  'salle-blanche',                                 // package.json do template do Kasablanca
  'Le Cercle',                                     // template do santaluzia-v3
];

/* Pessoas fictícias com cargo, dos blocos de "equipa". Num site PT-PT de negócio local
 * nenhuma destas aparece legitimamente, por isso o risco de falso positivo é nulo. */
const PESSOAS = [
  'Lennox Montgomery',                                                   // grid-12
  'Zaire Dorwart', 'Alfonso Lubin', 'Hanna Siphron',                     // secao-172
  'Ashlynn Curtis', 'Martin Dorwart', 'Nolan Bergson',                   // secao-172
  'Sarah Jenkins', 'David Chen', 'Emily Davis', 'Tyler Matthews',        // secao-162
  'Michael Scott', 'Jessica Lee', 'Robert Wilson', 'Olivia Martinez',    // secao-162
  'John Doe', 'Alex Reed', 'Mia Park', 'Emily Chen', 'Sofia Diaz',       // secao-163
  'Amara Okafor', 'Jakob George', 'Leila Khatami', 'Nolan Kenter',       // secao-169
  'Ananya Iyer', 'Talan Culhane',                                        // secao-169
  'William Parker', 'John Spencer', 'Christopher Reed',                  // secao-183
];

/* Moradas e contactos de origem. */
const LUGARES = [
  'Route du Jura', 'Fribourg',                     // menu-20 (morada suíça)
  'Ocean City', 'Vice City',                       // menu-17
  '456 Business Ave',                              // secao-90
  'marbella',                                      // template do santaluzia-v3
];
const CONTACTOS = [
  'Consulting@gmail\\.com',                        // secao-90
  '\\+1 \\(123\\) 456-7890',                       // secao-90
  '\\+1 437 555 0199',                             // menu-19
  'hello@nullspace\\.studio',                      // menu-19
];

/* Créditos do autor original do template. Se isto aparece no site do cliente, o cliente
 * está a pagar-nos por um trabalho assinado por outra pessoa. */
const CREDITOS = [
  'Codegrid', 'MWT by', 'codrops', 'tympanus',
  'temlis\\.com',                                  // secao-163, secao-169
  'Uiverse', 'Nawsome',                            // ui-effects/writte-machine
];

/* Scaffold e placeholder. */
const SCAFFOLD = ['lorem ipsum', 'create-next-app', 'Book a Call'];

/* Hosts de terceiros que servem imagem. Um site vendido que hotlinka isto parte-se quando
 * o dono do CDN mexer, e nós não somos avisados. 13 blocos de blocks-ce/ dependiam destes. */
export const HOSTS_PROIBIDOS = [
  'd173woph5zl366.cloudfront.net',
  'cloudfront.net',
  'images.unsplash.com',
  'tympanus.net',
];

/* Hosts externos aceites (fonte de marca). Tudo o resto que sirva asset é suspeito. */
export const HOSTS_PERMITIDOS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'fonts.cdnfonts.com',
  'api.fontshare.com',
  'use.typekit.net',
];

const escapar = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/* Os arrays com regex já escapado (CONTACTOS, CREDITOS com \\.) passam tal e qual;
 * os literais são escapados. `\b` só onde a palavra é curta e comum o bastante para
 * casar dentro de outra ("Lumin" casaria em "Luminária"). */
const CURTAS = new Set(['Lumin', 'AGENCY', 'Pipely', 'upmind', 'coverly', 'nullspace', 'Uiverse', 'Nawsome']);
const termo = t => (/\\/.test(t) ? t : CURTAS.has(t) ? `\\b${escapar(t)}\\b` : escapar(t));

const TODOS = [...MARCAS, 'AGENCY', ...PESSOAS, ...LUGARES, ...CONTACTOS, ...CREDITOS, ...SCAFFOLD];

/** A regex que o gate.mjs e o verificar.mjs usam. Case-insensitive. */
export const LEFTOVER = new RegExp(TODOS.map(termo).join('|'), 'i');

/** Todas as ocorrências distintas num texto (para o relatório dizer o que achou, não só que achou). */
export function acharLeftovers(texto) {
  const re = new RegExp(LEFTOVER.source, 'gi');
  const vistos = new Map();
  for (const m of String(texto ?? '').matchAll(re)) {
    const chave = m[0].toLowerCase();
    if (!vistos.has(chave)) vistos.set(chave, { termo: m[0], indice: m.index });
  }
  return [...vistos.values()];
}

/** Um host externo é aceitável? Usado pelo verificar.mjs (V5) e pelo purity.mjs. */
export function hostSuspeito(host) {
  if (!host) return false;
  if (HOSTS_PERMITIDOS.some(h => host === h || host.endsWith('.' + h))) return false;
  return HOSTS_PROIBIDOS.some(h => host === h || host.endsWith('.' + h));
}

export const _listas = { MARCAS, PESSOAS, LUGARES, CONTACTOS, CREDITOS, SCAFFOLD };
