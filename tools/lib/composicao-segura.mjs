/** Sanitização contextual do compositor legado. */
const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const escaparHtml = valor => String(valor ?? '').replace(/[&<>"']/g, c => ESCAPES[c]);

export function urlSegura(valor, { atributo = 'href' } = {}) {
  const bruto = String(valor ?? '').trim();
  if (!bruto) return atributo === 'href' ? '#' : '';
  if (bruto.startsWith('#') || bruto.startsWith('/') || bruto.startsWith('./') || bruto.startsWith('../')) return bruto;
  if (atributo === 'src' && /^data:image\/(?:png|gif|jpe?g|webp|svg\+xml);/i.test(bruto)) return bruto;
  try {
    const url = new URL(bruto);
    if (['http:', 'https:'].includes(url.protocol)) return url.href;
    if (atributo === 'href' && ['mailto:', 'tel:'].includes(url.protocol)) return url.href;
  } catch { /* URL relativa sem prefixo não é permitida em atributos externos */ }
  return atributo === 'href' ? '#' : '';
}

/** Preserva markup declarado/legado, mas remove execução e destinos perigosos. */
export function sanitizarMarkup(valor) {
  let html = String(valor ?? '');
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  html = html.replace(/<(script|style|iframe|object|embed|base|meta|link|form)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '');
  html = html.replace(/<(script|style|iframe|object|embed|base|meta|link|form)\b[^>]*\/?\s*>/gi, '');
  html = html.replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
  html = html.replace(/\s+style\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
  return html.replace(/\s+(href|src|xlink:href)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/gi,
    (m, atributo, completo, comAspasDuplas, comAspasSimples, semAspas) => {
      const valorUrl = comAspasDuplas ?? comAspasSimples ?? semAspas ?? '';
      const seguro = urlSegura(valorUrl, { atributo: atributo.toLowerCase().includes('href') ? 'href' : 'src' });
      return ` ${atributo}="${escaparHtml(seguro)}"`;
    });
}

function contextoAtributo(html, indice) {
  const antes = html.slice(Math.max(0, indice - 300), indice);
  const pedaco = antes.slice(antes.lastIndexOf('>') + 1);
  const match = pedaco.match(/\b(href|src|action|poster|xlink:href)\s*=\s*["']?[^"']*$/i);
  return match?.[1]?.toLowerCase() || null;
}

/** Aplica slots como texto por omissão; markup só é permitido de forma sanitizada. */
export function aplicarSlotsSeguro(html, slots = {}, { markup = {} } = {}) {
  const avisos = [];
  let resultado = String(html ?? '');
  for (const [de, bruto] of Object.entries(slots || {})) {
    if (!de) { avisos.push('slot vazio ignorado'); continue; }
    const partes = resultado.split(de);
    if (partes.length === 1) { avisos.push(`SLOT NÃO ENCONTRADO: "${de.slice(0, 60)}${de.length > 60 ? '…' : ''}"`); continue; }
    let cursor = 0;
    resultado = partes.map((parte, indice) => {
      if (indice === partes.length - 1) return parte;
      const inicio = cursor + parte.length;
      const atributo = contextoAtributo(resultado, inicio);
      cursor = inicio + de.length;
      const objetoMarkup = bruto && typeof bruto === 'object' && typeof bruto.html === 'string';
      const querMarkup = objetoMarkup || markup?.[de] === true || (typeof bruto === 'string' && /<\/?[a-z][^>]*>/i.test(bruto));
      const valor = objetoMarkup ? bruto.html : bruto;
      if (atributo) {
        const url = urlSegura(valor, { atributo: atributo.includes('href') || atributo === 'action' ? 'href' : 'src' });
        if (url !== String(valor ?? '').trim()) avisos.push(`URL bloqueada no slot "${de.slice(0, 40)}" (${atributo})`);
        return `${parte}${escaparHtml(url)}`;
      }
      return `${parte}${querMarkup ? sanitizarMarkup(valor) : escaparHtml(valor)}`;
    }).join('');
  }
  return { html: resultado, avisos };
}

export function cssVarsSeguras(vars = {}) {
  const seguros = {};
  const avisos = [];
  for (const [nome, valor] of Object.entries(vars || {})) {
    const texto = String(valor ?? '').trim();
    if (!/^--[a-z0-9-]+$/i.test(nome) || /[;{}<>]|@import|expression\s*\(|url\s*\(/i.test(texto)) {
      avisos.push(`var CSS bloqueada: ${nome}`); continue;
    }
    seguros[nome] = texto;
  }
  return { vars: seguros, avisos };
}

export function cssExtraSeguro(css) {
  const texto = String(css ?? '');
  if (/<\/style|@import|expression\s*\(|javascript\s*:/i.test(texto)) return { css: '', erro: 'estilo extra bloqueado por conter CSS inseguro' };
  return { css: texto, erro: null };
}
