/**
 * Contrato de maturidade das dobras.
 *
 * `variant.json` é a fonte de verdade operacional: a esteira só prepara uma
 * dobra; a revisão humana promove o seu estado. Não inferimos "aprovada" de
 * ausência de avisos, pois uma dobra antiga sem estado também precisa passar
 * pelo registry antes de poder chegar a um cliente.
 */
export const ESTADOS_DOBRA = Object.freeze([
  'experimental',
  'revisar',
  'aprovada',
  'em-producao',
]);

export const MODOS_COMPOSICAO = Object.freeze(['producao', 'inspecao']);

const ESTADOS_DE_PRODUCAO = new Set(['aprovada', 'em-producao']);

/**
 * Resolve também variantes antigas que ainda não trazem `estado`.
 *
 * A compatibilidade é deliberadamente conservadora: variantes legadas seguem
 * disponíveis em modo de inspeção, mas não ganham aprovação implícita.
 */
export function estadoDobra(variante = {}) {
  if (variante.estado != null) {
    return {
      estado: variante.estado,
      valido: ESTADOS_DOBRA.includes(variante.estado),
      origem: 'declarado',
    };
  }

  return {
    estado: Array.isArray(variante._rever) && variante._rever.length ? 'revisar' : 'experimental',
    valido: true,
    origem: 'inferido-legado',
  };
}

export function modoComposicaoValido(modo) {
  return MODOS_COMPOSICAO.includes(modo);
}

/** Produção aceita só dobras explicitamente prontas; inspeção vê todo o kit válido. */
export function podeUsarDobra(variante, modo = 'producao') {
  const resolvido = estadoDobra(variante);
  if (!resolvido.valido || !modoComposicaoValido(modo)) return false;
  return modo === 'inspecao' || ESTADOS_DE_PRODUCAO.has(resolvido.estado);
}

/** Estado com que uma nova execução da esteira deve sair. */
export function estadoInicialDobra(pontosRever = []) {
  return pontosRever.length ? 'revisar' : 'experimental';
}
