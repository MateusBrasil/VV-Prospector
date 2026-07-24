/** Transformações puras de CSS usadas pela esteira. */
const cortarComentarios = s => s.replace(/\/\*[\s\S]*?\*\//g, '');

export function mapearCores(css) {
  // Ordem longa→curta evita corromper #ffffffaa ao substituir #ffffff.
  const hexes = [...new Set((css.match(/#[0-9a-fA-F]{3,8}\b/g) || []).map(h => h.toLowerCase()))]
    .sort((a, b) => b.length - a.length);
  if (!hexes.length) return { css, mapeadas: 0, acento: null };

  const info = hexes.map(h => {
    let s = h.replace('#', '');
    if (s.length === 3) s = [...s].map(c => c + c).join('');
    if (s.length === 8) s = s.slice(0, 6);
    if (s.length !== 6) return null;
    const [r, g, b] = [0, 2, 4].map(i => parseInt(s.slice(i, i + 2), 16));
    const lin = v => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return { hex: h, L, sat: max === 0 ? 0 : (max - min) / max };
  }).filter(Boolean);
  const acento = [...info].sort((a, b) => b.sat - a.sat)[0];
  const ehAcento = acento && acento.sat > 0.35 ? acento.hex : null;
  const degraus = [
    { token: '--base-100', L: 0.78 }, { token: '--base-200', L: 0.42 },
    { token: '--base-300', L: 0.18 }, { token: '--base-400', L: 0.08 },
    { token: '--base-500', L: 0.03 }, { token: '--base-600', L: 0.012 },
  ];
  let mapeadas = 0;
  for (const cor of info) {
    const re = new RegExp(cor.hex, 'gi');
    if (cor.hex === ehAcento) css = css.replace(re, 'var(--acento)');
    else {
      const alvo = degraus.reduce((a, d) => (Math.abs(d.L - cor.L) < Math.abs(a.L - cor.L) ? d : a));
      css = css.replace(re, `var(${alvo.token})`);
    }
    mapeadas++;
  }
  return { css: css.replace(/#[0-9a-fA-F]{3,8}\b/g, 'var(--base-300)'), mapeadas, acento: ehAcento };
}

export function escoparCss(css, prefixo) {
  const fecharBloco = (s, abre) => {
    let d = 0;
    for (let i = abre; i < s.length; i++) {
      if (s[i] === '{') d++;
      else if (s[i] === '}' && --d === 0) return i;
    }
    return s.length - 1;
  };
  const out = [];
  let i = 0;
  while (i < css.length) {
    const abre = css.indexOf('{', i);
    if (abre === -1) { out.push(css.slice(i)); break; }
    const cabeca = css.slice(i, abre).trim();
    const fecho = fecharBloco(css, abre);
    const corpo = css.slice(abre + 1, fecho);
    if (cabeca.startsWith('@')) {
      out.push(/^@(media|supports|container|layer)/i.test(cabeca)
        ? `${cabeca}{${escoparCss(corpo, prefixo)}}` : `${cabeca}{${corpo}}`);
    } else {
      const seletores = cabeca.split(',').map(s => s.trim()).filter(Boolean).map(s => {
        if (/^(html|:root|body)$/i.test(s)) return prefixo;
        return /^\*$/.test(s) ? `${prefixo} *` : `${prefixo} ${s}`;
      });
      out.push(`${seletores.join(',')}{${corpo}}`);
    }
    i = fecho + 1;
  }
  return out.join('\n');
}

export function tokenizarCss(cssBruto, scope, { mapearCor = true } = {}) {
  let css = cortarComentarios(cssBruto);
  const relatorio = { fontesTrocadas: 0, pesosTrocados: 0, hexEncontrados: [], importantsRemovidos: 0, coresMapeadas: 0, acentoOrigem: null };
  css = css.replace(/font-family\s*:\s*([^;}]+)([;}])/gi, (m, valor, fim) => {
    if (/var\(--fonte-/.test(valor)) return m;
    relatorio.fontesTrocadas++;
    return `font-family: var(${/mono|courier|consol/i.test(valor) ? '--fonte-mono' : '--fonte-corpo'})${fim}`;
  });
  css = css.replace(/\s*!important/gi, () => { relatorio.importantsRemovidos++; return ''; });
  for (const m of css.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) if (!relatorio.hexEncontrados.includes(m[0])) relatorio.hexEncontrados.push(m[0]);
  if (mapearCor) {
    const r = mapearCores(css);
    css = r.css; relatorio.coresMapeadas = r.mapeadas; relatorio.acentoOrigem = r.acento;
  }
  return { css: escoparCss(css, `[data-dobra="${scope}"]`), relatorio };
}
