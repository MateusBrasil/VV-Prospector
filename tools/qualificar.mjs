#!/usr/bin/env node
/**
 * Qualificador de lead — Prospector Premium
 * Uso:
 *   node qualificar.mjs <url-do-site>              → audita 1 site
 *   node qualificar.mjs --lote leads.json          → audita todos e devolve JSON
 *   node qualificar.mjs <url> --json               → só o JSON (para encadear)
 *
 * POR QUE ISTO EXISTE (é o coração do produto)
 * O valor do sistema não é gerar site — é ACHAR quem precisa e provar porquê.
 * O plugin original mandava o LLM "abrir o site e avaliar pelos critérios" — subjetivo,
 * caro (browser + tokens por lead) e não reprodutível. Aqui é HTTP + regex: audita ~50
 * leads em segundos, sem browser, e cada defeito vem com EVIDÊNCIA citável.
 *
 * A regra que isto protege: o defeito citado no email tem de ser verificável em 10s pelo
 * dono do negócio (Ctrl+U). Se não for provável, é opinião — e opinião refuta-se, mata a venda.
 * Ex real: NÃO dizer "não é responsivo" a um site com Bootstrap 4 (tem media queries).
 *          DIZER "o vosso site ainda carrega código para o Internet Explorer 8, de 2009".
 *
 * DIFERENÇA vs. o plugin original: ele DESCARTA quem não tem site. Nós marcamos
 * `sem_site` → é o melhor lead que existe (não há o que comparar, e a dor é maior).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve4, resolve6, lookup } from 'node:dns/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const ANO = new Date().getFullYear();

const MAX_REDIRECIONAMENTOS = 5;
const CURL_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36';

function ipv4ParaNumero(host) {
  const partes = host.split('.');
  if (partes.length !== 4 || partes.some(p => !/^\d+$/.test(p))) return null;
  const octetos = partes.map(Number);
  if (octetos.some(p => p < 0 || p > 255)) return null;
  return octetos.reduce((n, octeto) => (n * 256) + octeto, 0);
}

function ipv4Bloqueado(host) {
  const ip = ipv4ParaNumero(host);
  if (ip === null) return false;
  const em = (rede, bits) => Math.floor(ip / 2 ** (32 - bits)) === Math.floor(rede / 2 ** (32 - bits));
  return em(0x00000000, 8) || em(0x0a000000, 8) || em(0x64400000, 10)
    || em(0x7f000000, 8) || em(0xa9fe0000, 16) || em(0xac100000, 12)
    // IANA special-use: "documentation" também não deve ser um alvo de rede.
    || em(0xc0000000, 24) || em(0xc0000200, 24) || em(0xc0586300, 24)
    || em(0xc0a80000, 16) || em(0xc6120000, 15) || em(0xc6336400, 24)
    || em(0xcb007100, 24) || em(0xe0000000, 4);
}

function ipv6Bloqueado(host) {
  const semColchetes = host.replace(/^\[|\]$/g, '').toLowerCase();
  if (!semColchetes.includes(':')) return false;
  const [esquerda, direita = ''] = semColchetes.split('::');
  if (semColchetes.split('::').length > 2) return true;
  const inicio = esquerda ? esquerda.split(':') : [];
  const fim = direita ? direita.split(':') : [];
  if ([...inicio, ...fim].some(parte => !/^[0-9a-f]{1,4}$/i.test(parte))) return true;
  const grupos = [...inicio, ...Array(Math.max(0, 8 - inicio.length - fim.length)).fill('0'), ...fim];
  if (grupos.length !== 8) return true;
  const valor = grupos.reduce((n, grupo) => (n << 16n) + BigInt(`0x${grupo}`), 0n);
  const prefixo = (bits) => valor >> BigInt(128 - bits);
  const mappedV4 = (valor >> 32n) === 0xffffn;
  const compativelV4 = (valor >> 32n) === 0n;
  const v4NoMapeado = Number(valor & 0xffffffffn);
  const v4EmbutidoBloqueado = (mappedV4 || compativelV4) && ipv4Bloqueado([
    (v4NoMapeado >>> 24) & 255, (v4NoMapeado >>> 16) & 255,
    (v4NoMapeado >>> 8) & 255, v4NoMapeado & 255,
  ].join('.'));
  return valor === 0n || valor === 1n || prefixo(7) === 0b1111110n
    || prefixo(10) === 0b1111111010n || prefixo(8) === 0xffn
    || prefixo(32) === 0x20010db8n || v4EmbutidoBloqueado;
}

function hostnameValido(host) {
  if (host.includes(':')) return /^\[[0-9a-f:.]+\]$/i.test(host);
  // URL já converte IDN para punycode; aceitamos apenas labels DNS convencionais.
  return host.length <= 253 && host.split('.').every(label =>
    /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label));
}

function portaPermitida(url) {
  // A prospecção só precisa do HTTP(S) público convencional. Permitir portas
  // arbitrárias transforma o qualificador num scanner de serviços internos.
  const porta = url.port ? Number(url.port) : (url.protocol === 'https:' ? 443 : 80);
  return porta === 80 || porta === 443 ? porta : null;
}

/** Valida destinos antes de qualquer chamada de rede, sem depender de DNS. */
export function validarUrlDestino(valor) {
  if (typeof valor !== 'string' || !valor.trim()) return { ok: false, erro: 'URL ausente' };
  let url;
  try { url = new URL(valor.trim()); } catch { return { ok: false, erro: 'URL malformada' }; }
  if (!['http:', 'https:'].includes(url.protocol)) return { ok: false, erro: 'apenas HTTP/HTTPS são permitidos' };
  if (!url.hostname) return { ok: false, erro: 'hostname ausente' };
  const host = url.hostname.toLowerCase().replace(/\.$/, '');
  if (!hostnameValido(host)) return { ok: false, erro: 'hostname inválido' };
  if (host === 'localhost' || host.endsWith('.localhost') || host === 'local' || host.endsWith('.local')
    || host === 'localhost.localdomain') return { ok: false, erro: 'hostname local não é permitido' };
  const porta = portaPermitida(url);
  if (!porta) return { ok: false, erro: 'apenas as portas HTTP(S) 80 e 443 são permitidas' };
  if (ipv4Bloqueado(host) || ipv6Bloqueado(host)) return { ok: false, erro: 'endereço privado, local ou reservado não é permitido' };
  return { ok: true, url: url.href, host, porta, literalIp: ipv4ParaNumero(host) !== null || host.includes(':') };
}

/** Resolve A e AAAA. Separar isto do curl permite testar a política sem rede. */
export async function resolverPadrao(host) {
  const respostas = await Promise.allSettled([resolve4(host), resolve6(host)]);
  let ips = respostas.flatMap(resultado => resultado.status === 'fulfilled' ? resultado.value : []);
  // Alguns ambientes bloqueiam consultas DNS diretas (resolve4/resolve6) mas o resolvedor
  // do sistema continua funcional. Sem este fallback, sites acessíveis por curl viravam
  // VERIFICAR_MANUALMENTE em massa.
  if (!ips.length) {
    try { ips = (await lookup(host, { all: true, verbatim: true })).map(r => r.address); }
    catch { /* mantém o erro acionável abaixo */ }
  }
  if (!ips.length) throw new Error('DNS não devolveu endereços A/AAAA');
  return ips;
}

/**
 * Resolve e valida todos os IPs antes da chamada HTTP. Não basta verificar o
 * hostname: uma resposta DNS com um único IP privado também é bloqueada. O
 * curl recebe --resolve com estes IPs, fechando a janela de DNS rebinding.
 */
export async function resolverDestino(destino, resolver = resolverPadrao) {
  if (destino.literalIp) return { ok: true, ips: [destino.host] };
  let ips;
  try { ips = await resolver(destino.host); }
  catch { return { ok: false, erro: 'DNS sem endereços públicos seguros' }; }
  if (!Array.isArray(ips) || !ips.length || ips.some(ip => typeof ip !== 'string' || ipv4Bloqueado(ip) || ipv6Bloqueado(ip))) {
    return { ok: false, erro: 'DNS devolveu endereço privado, reservado ou inválido' };
  }
  return { ok: true, ips: [...new Set(ips.map(ip => ip.toLowerCase()))] };
}

function resultadoUrlInvalida(url, erro, ms) {
  return { ok: false, invalida: true, erro, ms, url };
}

function resolveCurl(host, porta, ip) {
  // curl exige IPv6 entre [] nesta forma de --resolve.
  return `${host}:${porta}:${ip.includes(':') && !ip.startsWith('[') ? `[${ip}]` : ip}`;
}

/** curl com timeout — devolve {status, headers, html, ms, redirect} */
async function buscar(url, { resolver = resolverPadrao, executarCurl = execFileSync } = {}) {
  const t0 = Date.now();
  let atual = validarUrlDestino(url);
  if (!atual.ok) return resultadoUrlInvalida(url, atual.erro, Date.now() - t0);

  // Seguimos redirects manualmente para validar cada destino antes de qualquer request.
  for (let tentativa = 0; tentativa <= MAX_REDIRECIONAMENTOS; tentativa++) {
    const dns = await resolverDestino(atual, resolver);
    if (!dns.ok) return resultadoUrlInvalida(url, dns.erro, Date.now() - t0);
    try {
      const resolveArgs = atual.literalIp ? [] : dns.ips.flatMap(ip => ['--resolve', resolveCurl(atual.host, atual.porta, ip)]);
      const out = executarCurl('curl', [
        '-sS', '--max-time', '25', '--max-redirs', '0', '--proto', '=http,https', '--proto-redir', '=http,https',
        '--noproxy', '*', ...resolveArgs,
        '-A', CURL_USER_AGENT,
        '-w', '\n---META---\n%{http_code}|%{size_download}|%{url_effective}|%{content_type}|%{redirect_url}', atual.url,
      ], { encoding: 'utf8', maxBuffer: 24 * 1024 * 1024, stdio: ['pipe', 'pipe', 'pipe'], shell: false });
      const [html, meta = ''] = out.split('\n---META---\n');
      const [status, size, finalUrl, ctype, redirectUrl] = meta.trim().split('|');
      const codigo = +status;
      if ([301, 302, 303, 307, 308].includes(codigo) && redirectUrl) {
        if (tentativa === MAX_REDIRECIONAMENTOS) return { ok: false, erro: 'demasiados redirecionamentos', ms: Date.now() - t0 };
        let proximo;
        try { proximo = new URL(redirectUrl, atual.url).href; }
        catch { return resultadoUrlInvalida(url, 'redirecionamento com URL inválida', Date.now() - t0); }
        atual = validarUrlDestino(proximo);
        if (!atual.ok) return resultadoUrlInvalida(url, `redirecionamento bloqueado: ${atual.erro}`, Date.now() - t0);
        continue;
      }
      return { ok: true, status: codigo, size: +size, finalUrl, ctype, html, ms: Date.now() - t0 };
    } catch (e) {
      return { ok: false, erro: (e.message || '').split('\n')[0].slice(0, 80), ms: Date.now() - t0 };
    }
  }
  return { ok: false, erro: 'falha ao seguir redirecionamento', ms: Date.now() - t0 };
}

/**
 * Audita um site. Cada defeito tem: chave, texto citável ao cliente, e a evidência.
 * Só entra defeito PROVÁVEL — nada de "parece antigo".
 */
export async function auditar(url, opcoes) {
  const r = await buscar(url, opcoes);
  const d = [];               // defeitos com evidência
  const add = (k, txt, ev) => d.push({ k, txt, evidencia: ev });

  if (r.invalida) {
    return { url, tem_site: null, tipo: 'url_invalida', status: 0, erro: r.erro,
      veredito: 'VERIFICAR_MANUALMENTE', porque: `a URL foi bloqueada antes da auditoria (${r.erro})`,
      defeitos: [], nota_oferta: 'Corrigir ou confirmar a URL antes de qualificar este lead.' };
  }

  // ── Bloqueio anti-bot (403/406/429) — NÃO é o mesmo que "fora do ar" ─────
  // Apanhado a correr isto a sério: curl com User-Agent de Chrome ainda assim leva 403
  // em sites atrás de Cloudflare/WAF, porque o bloqueio é por fingerprint de TLS/IP de
  // datacenter, não pelo header. Um 403 aqui não prova que o site não existe — prova só
  // que o curl foi barrado. Classificar isto como QUALIFICA_SEM_SITE é o erro que manda
  // "você não tem site" para quem tem um site bom: já aconteceu em teste real.
  if (r.ok && [403, 406, 429].includes(r.status)) {
    return {
      url, tem_site: null, tipo: 'bloqueado_anti_bot', status: r.status,
      veredito: 'VERIFICAR_MANUALMENTE',
      porque: `o site devolveu HTTP ${r.status} — típico de proteção anti-bot (Cloudflare/WAF), não prova que o site esteja fora do ar`,
      defeitos: [], nota_oferta: 'Abrir no navegador antes de qualificar — este resultado não é confiável para decidir "sem site".',
    };
  }

  // ── Sem site / fora do ar ────────────────────────────────────────────────
  if (!r.ok || !r.status || r.status >= 400) {
    return {
      url, tem_site: false, tipo: r.ok ? 'fora_do_ar' : 'inacessivel',
      status: r.status || 0, erro: r.erro,
      veredito: 'QUALIFICA_SEM_SITE',
      porque: r.ok ? `o site devolve HTTP ${r.status}` : `o site não responde (${r.erro})`,
      defeitos: [], nota_oferta: 'Criar site do zero — não há versão antiga para comparar.',
    };
  }

  const html = r.html || '';
  const low = html.toLowerCase();
  // Metadados podem vir depois de CSS/JS inline muito grandes. Procurar o <head> inteiro
  // evita vender um falso "sem viewport/description" para um site que os declara.
  const head = (html.match(/<head\b[^>]*>([\s\S]*?)<\/head\s*>/i) || [null, html])[1];

  // ── É site próprio ou diretório/rede social? ─────────────────────────────
  const host = (r.finalUrl || url).replace(/^https?:\/\//, '').split('/')[0].toLowerCase();
  const alheio = ['facebook.com', 'instagram.com', 'linktr.ee', 'wixsite.com', 'business.site',
    'negocio.site', 'pai.pt', 'paginasamarelas.pt', 'sites.google.com', 'blogspot.', 'wordpress.com', 'webnode.'];
  const donoAlheio = alheio.find(a => host.includes(a));
  if (donoAlheio) {
    return {
      url, tem_site: false, tipo: 'plataforma_alheia', host,
      veredito: 'QUALIFICA_SEM_SITE',
      porque: `não é site próprio — é uma página em ${donoAlheio}`,
      defeitos: [], nota_oferta: 'Criar site próprio com domínio — hoje a presença deles vive numa plataforma de terceiros.',
    };
  }

  // ── Defeitos objetivos (cada um provável por Ctrl+U) ─────────────────────

  // 1. HTTPS
  if ((r.finalUrl || url).startsWith('http://'))
    add('sem_https', 'o site não tem HTTPS — o navegador mostra "Não seguro" a quem visita',
      `url final: ${r.finalUrl}`);

  // 2. Mobile
  if (!/<meta[^>]+name=["']viewport["']/i.test(head))
    add('sem_viewport', 'falta a meta viewport — o site não se adapta ao telemóvel',
      'nenhuma <meta name="viewport"> no <head>');

  // 3. Código para browser morto
  const ie = html.match(/<!--\[if\s+(lt\s+)?IE[^\]]*\]>/i);
  if (ie) add('ie_legacy', 'o site ainda carrega código para o Internet Explorer (descontinuado em 2022)',
    `encontrado: ${ie[0].slice(0, 40)}`);

  // 4. Copyright velho
  const anos = [...html.matchAll(/(?:©|&copy;|copyright)[^\d]{0,20}(19|20)(\d{2})/gi)]
    .map(m => +(m[1] + m[2])).filter(a => a > 1995 && a <= ANO);
  if (anos.length) {
    const ult = Math.max(...anos);
    if (ANO - ult >= 2) add('copyright_velho', `o rodapé ainda diz © ${ult} — ${ANO - ult} anos desatualizado`,
      `© ${ult} no rodapé`);
  }

  // 5. Libs fósseis (versão exata = prova)
  const libs = [
    [/jquery[.-](\d+)\.(\d+)\.(\d+)/i, 'jQuery', v => +v[1] < 3],
    [/bootstrap[.-]?v?(\d+)\.(\d+)\.(\d+)/i, 'Bootstrap', v => +v[1] < 5],
    [/modernizr[.-](\d+)\.(\d+)/i, 'Modernizr', () => true],
  ];
  for (const [re, nome, velho] of libs) {
    const m = html.match(re);
    if (m && velho(m.slice(1))) {
      const ver = m.slice(1).filter(Boolean).join('.');
      add('lib_fossil', `usa ${nome} ${ver}, uma versão que já não recebe atualizações de segurança`,
        `${nome} ${ver} no código-fonte`);
      break; // um exemplo basta — o email não é auditoria
    }
  }

  // 6. Peso (o defeito que custa dinheiro em 4G)
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  if (r.size > 900_000)
    add('pagina_pesada', `a página inicial pesa ${(r.size / 1024 / 1024).toFixed(1)} MB — demora a abrir em dados móveis`,
      `${(r.size / 1024).toFixed(0)} KB de HTML`);

  // 7. Contacto por plataforma grátis
  const gmail = html.match(/[\w.+-]+@(gmail|hotmail|sapo|outlook|live|yahoo)\.[a-z.]+/i);
  if (gmail) add('email_gratuito', `o contacto oficial é um ${gmail[1]} — apesar de terem domínio próprio`,
    gmail[0]);

  // 8. Sem CTA de contacto na página
  const temTel = /href=["']tel:\+?\d[\d\s()-]{6,}/i.test(html);
  const temWa = /wa\.me\/\d|api\.whatsapp\.com/i.test(html);
  const temForm = /<form/i.test(html);
  if (!temTel && !temWa && !temForm)
    add('sem_cta', 'não há forma de contactar sem procurar — nenhum telefone clicável nem formulário',
      'zero href="tel:", zero form');
  else if (!temTel && (temWa || temForm))
    add('tel_nao_clicavel', 'o telefone não é clicável no telemóvel — quem quer ligar tem de copiar o número',
      'nenhum href="tel:" válido');

  // 9. SEO básico
  const title = (html.match(/<title[^>]*>([^<]*)/i) || [])[1]?.trim();
  const desc = (head.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i) || [])[1];
  if (!title || title.length < 10) add('sem_title', 'a página não tem título descritivo — prejudica quem procura no Google', `<title>: ${title || '(vazio)'}`);
  if (!desc) add('sem_description', 'falta a meta description — o Google inventa o texto que aparece na pesquisa', 'nenhuma <meta name="description">');

  // 10. Sem prova social (o defeito que mais vende)
  const prova = /google|avalia|opini|review|estrela|★|testemunh/i.test(html);
  if (!prova) add('sem_prova_social', 'o site não mostra nenhuma avaliação — a reputação do Google não aparece a quem visita',
    'zero menção a avaliações/Google no HTML');

  // ── Veredito ─────────────────────────────────────────────────────────────
  // Regra do produto: 2+ defeitos objetivos = qualifica.
  const graves = d.filter(x => ['sem_https', 'sem_viewport', 'ie_legacy', 'sem_cta', 'lib_fossil'].includes(x.k));
  const veredito = d.length >= 2 ? 'QUALIFICA' : (d.length === 1 ? 'FRACO' : 'DESCARTA_SITE_BOM');

  return {
    url, tem_site: true, status: r.status, host,
    peso_kb: +(r.size / 1024).toFixed(0), ms: r.ms,
    title, imagens: imgs.length,
    defeitos: d, n_defeitos: d.length, n_graves: graves.length,
    veredito,
    porque: d.length ? d.slice(0, 2).map(x => x.txt).join(' · ') : 'o site está em bom estado',
    // Os 2 melhores defeitos para o email — os mais concretos e menos refutáveis
    para_o_email: d.filter(x => x.k !== 'sem_prova_social').slice(0, 2).map(x => ({ diz: x.txt, prova: x.evidencia })),
    gancho: d.find(x => x.k === 'sem_prova_social')
      ? 'A prova social é a arma deles e o site esconde-a — é o melhor ângulo de abordagem.'
      : null,
  };
}

/* ── CLI ──────────────────────────────────────────────────────────────────── */
const executadoDiretamente = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;

if (executadoDiretamente) {
const args = process.argv.slice(2);
const soJson = args.includes('--json');
const loteIdx = args.indexOf('--lote');

if (loteIdx > -1) {
  const leads = JSON.parse(readFileSync(args[loteIdx + 1], 'utf8'));
  const res = [];
  for (const l of (Array.isArray(leads) ? leads : leads.leads || [])) {
    const url = typeof l === 'string' ? l : (l.site || l.url);
    if (!url) { res.push({ ...l, veredito: 'QUALIFICA_SEM_SITE', porque: 'nenhum site registado' }); continue; }
    const a = await auditar(url);
    res.push({ ...(typeof l === 'object' ? l : {}), ...a });
    if (!soJson) console.log(`  ${a.veredito.padEnd(20)} ${String(a.n_defeitos).padStart(2)} defeitos  ${url.slice(0, 46)}`);
  }
  const out = 'leads-auditados.json';
  writeFileSync(out, JSON.stringify(res, null, 2), 'utf8');
  if (soJson) console.log(JSON.stringify(res, null, 2));
  else {
    const q = res.filter(r => r.veredito.startsWith('QUALIFICA')).length;
    console.log(`\n  ${q}/${res.length} qualificam · gravado em ${out}\n`);
  }
} else if (args[0] && !args[0].startsWith('--')) {
  const a = await auditar(args[0]);
  if (soJson) { console.log(JSON.stringify(a, null, 2)); process.exit(0); }
  console.log(`\n╭─ ${a.url}`);
  console.log(`│  ${a.tem_site ? `HTTP ${a.status} · ${a.peso_kb} KB · ${a.ms}ms · ${a.imagens} imagens` : a.tipo}`);
  console.log(`│\n├─ VEREDITO: ${a.veredito}`);
  console.log(`│  ${a.porque}`);
  if (a.defeitos?.length) {
    console.log(`│\n├─ DEFEITOS (${a.n_defeitos}, ${a.n_graves} graves) — cada um provável por Ctrl+U`);
    a.defeitos.forEach(x => console.log(`│    • ${x.txt}\n│      └ ${x.evidencia}`));
    console.log(`│\n├─ PARA O EMAIL (os 2 menos refutáveis)`);
    a.para_o_email.forEach(x => console.log(`│    "${x.diz}"`));
  }
  if (a.gancho) console.log(`│\n├─ GANCHO: ${a.gancho}`);
  if (a.nota_oferta) console.log(`│\n├─ OFERTA: ${a.nota_oferta}`);
  console.log(`╰─\n`);
} else {
  console.log(`
Qualificador de lead — audita o site e prova PORQUÊ

  node qualificar.mjs https://exemplo.pt          audita 1
  node qualificar.mjs --lote leads.json           audita N (segundos, sem browser)
  node qualificar.mjs https://exemplo.pt --json   JSON para encadear

Vereditos: QUALIFICA · QUALIFICA_SEM_SITE (o melhor lead) · FRACO · DESCARTA_SITE_BOM
Cada defeito vem com evidência citável. Opinião não entra — opinião refuta-se e mata a venda.
`);
}
}
