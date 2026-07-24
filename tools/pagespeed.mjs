#!/usr/bin/env node
/**
 * Velocidade real do site do lead — Prospector Premium
 * Uso:
 *   node pagespeed.mjs <url>            → mede e mostra (humano)
 *   node pagespeed.mjs <url> --json     → só o JSON (para encadear no run.mjs)
 *
 * POR QUE ISTO EXISTE
 * O qualificar.mjs prova defeitos por Ctrl+U (HTML). Falta-lhe a prova que o dono do negócio
 * NÃO consegue refutar nem esconder: o número do Google. "Parece lento" é opinião e opinião
 * mata a venda; "34/100 de velocidade, medido pelo Google" é um facto que ele pode confirmar
 * no próprio telemóvel em dez segundos. Este script vai buscar esse número à PageSpeed Insights,
 * a mesma engine (Lighthouse) que alimenta os Core Web Vitals que decidem o ranking dele.
 *
 * A API v5 é GRÁTIS e SEM CARTÃO. Sem chave funciona (rate limit mais baixo, chega para uso
 * manual); se existir a env PAGESPEED_KEY, usa-a (limite maior). Estratégia = mobile de propósito:
 * é no telemóvel que se perde o cliente, e é o telemóvel que o Google usa para indexar.
 *
 * A regra que isto protege (a mesma do qualificar): só vira "defeito citável" o número MAU.
 * Número bom não entra no email — senão estaríamos a inventar um problema onde não há.
 * Limiares: score < 50, LCP > 4s, CLS > 0,25 (os patamares "mau" do próprio Lighthouse).
 *
 * Nunca rebenta: falha de rede, timeout ou API em baixo devolvem {ok:false, erro} e seguem.
 */
import { pathToFileURL } from 'node:url';

const ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const TIMEOUT_MS = 60_000; // a API corre um Lighthouse real no servidor deles: 20-40s é normal.

// PT-PT: vírgula decimal. 8.2 → "8,2". Nunca ponto (é como o cliente lê o número no email).
const num = (n, casas = 0) => Number(n).toFixed(casas).replace('.', ',');

/**
 * Mede um site na PageSpeed Insights (mobile) e devolve os números + os defeitos já citáveis.
 * Assíncrona e à prova de falha: qualquer erro sai como {ok:false, erro} e não lança.
 */
export async function pagespeed(url) {
  if (!url || !/^https?:\/\//i.test(url))
    return { ok: false, url, erro: 'url inválida — tem de começar por http:// ou https://' };

  const key = process.env.PAGESPEED_KEY;
  const qs = new URLSearchParams({ url, strategy: 'mobile', category: 'performance' });
  if (key) qs.set('key', key);

  // Timeout à mão: o fetch nativo não desiste sozinho, e um lead com o servidor a pendurar
  // não pode segurar o ciclo inteiro. AbortController corta a ligação ao fim de TIMEOUT_MS.
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  let data;
  try {
    const res = await fetch(`${ENDPOINT}?${qs}`, { signal: ctrl.signal, headers: { accept: 'application/json' } });
    data = await res.json().catch(() => null);
    if (!res.ok) {
      const msg = data?.error?.message || `HTTP ${res.status}`;
      return { ok: false, url, erro: msg.split('\n')[0].slice(0, 160) };
    }
  } catch (e) {
    const erro = e.name === 'AbortError'
      ? `sem resposta em ${TIMEOUT_MS / 1000}s (a API ou o site não responderam)`
      : (e.message || 'falha de rede').split('\n')[0];
    return { ok: false, url, erro: erro.slice(0, 160) };
  } finally {
    clearTimeout(timer);
  }

  if (!data || data.error)
    return { ok: false, url, erro: (data?.error?.message || 'resposta sem dados').split('\n')[0].slice(0, 160) };

  const lh = data.lighthouseResult || {};
  const score100 = lh.categories?.performance?.score != null
    ? Math.round(lh.categories.performance.score * 100) : null;
  const lcpMs = lh.audits?.['largest-contentful-paint']?.numericValue ?? null;
  const clsVal = lh.audits?.['cumulative-layout-shift']?.numericValue ?? null;
  const lcpS = lcpMs != null ? lcpMs / 1000 : null;

  // Só o número MAU vira defeito citável. Cada texto é uma frase pronta para o email, PT-PT,
  // que o cliente confirma no telemóvel dele em dez segundos.
  const defeitos_citaveis = [];
  if (score100 != null && score100 < 50)
    defeitos_citaveis.push(`o vosso site tem nota ${score100}/100 de velocidade no telemóvel (medido pelo Google)`);
  if (lcpS != null && lcpS > 4)
    defeitos_citaveis.push(`no telemóvel, a página demora ${num(lcpS, 1)}s a mostrar o conteúdo principal`);
  if (clsVal != null && clsVal > 0.25)
    defeitos_citaveis.push(`no telemóvel, os elementos saltam enquanto a página carrega (o Google mede um deslocamento de ${num(clsVal, 2)})`);

  return {
    ok: true,
    url: lh.finalUrl || data.id || url,
    estrategia: 'mobile',
    com_chave: !!key,
    score: score100,
    lcp_s: lcpS != null ? +lcpS.toFixed(1) : null,
    cls: clsVal != null ? +clsVal.toFixed(3) : null,
    defeitos_citaveis,
  };
}

/* ---------- CLI (só quando corrido diretamente, nunca em import) ---------- */
// Guarda de main-module: sem isto, importar este ficheiro dispararia a medição. Com isto,
// o run.mjs pode importá-lo à vontade (embora, por uniformidade, o corra por subprocesso).
//
// NUNCA process.exit() aqui: no Windows, matar o processo à força enquanto o fetch nativo
// (undici) ainda está a fechar as ligações keep-alive rebenta com uma assertion do libuv
// (UV_HANDLE_CLOSING). Definimos process.exitCode e deixamos o event loop drenar sozinho —
// o código de saída é o mesmo, mas sem crash e com status limpo para o correTool do run.mjs.
async function main() {
  const args = process.argv.slice(2);
  const soJson = args.includes('--json');
  const url = args.find(a => !a.startsWith('--'));

  if (!url) {
    console.log(`
Velocidade do site do lead — o número do Google que não se refuta

  node pagespeed.mjs https://exemplo.pt          mede e mostra (mobile)
  node pagespeed.mjs https://exemplo.pt --json   JSON para encadear

Sem chave funciona (rate limit menor). Para o limite maior: export PAGESPEED_KEY=<a-tua-chave>.
Só o número MAU vira defeito citável (score < 50 · LCP > 4s · CLS > 0,25). Número bom não entra.
`);
    process.exitCode = soJson ? 1 : 0;
    return;
  }

  const r = await pagespeed(url);

  if (soJson) {
    console.log(JSON.stringify(r, null, 2));
    process.exitCode = r.ok ? 0 : 1;
    return;
  }

  if (!r.ok) {
    console.log(`\n╭─ ${url}`);
    console.log(`│  não deu para medir: ${r.erro}`);
    console.log(`╰─\n`);
    process.exitCode = 1;
    return;
  }

  const rotulo = r.score == null ? '—' : r.score >= 90 ? 'bom' : r.score >= 50 ? 'médio' : 'mau';
  console.log(`\n╭─ ${r.url}`);
  console.log(`│  PageSpeed Insights · telemóvel${r.com_chave ? ' · com chave' : ' · anónimo'}`);
  console.log(`│`);
  console.log(`├─ VELOCIDADE`);
  console.log(`│    nota ....... ${r.score == null ? '—' : `${r.score}/100`} (${rotulo})`);
  console.log(`│    LCP ........ ${r.lcp_s == null ? '—' : `${num(r.lcp_s, 1)}s`}  (tempo até mostrar o conteúdo principal)`);
  console.log(`│    CLS ........ ${r.cls == null ? '—' : num(r.cls, 2)}  (o quanto a página salta enquanto carrega)`);
  if (r.defeitos_citaveis.length) {
    console.log(`│\n├─ DEFEITOS CITÁVEIS (prontos para o email)`);
    r.defeitos_citaveis.forEach(d => console.log(`│    "${d}"`));
  } else {
    console.log(`│\n├─ sem defeitos citáveis de velocidade — os números estão bons, não se inventa problema`);
  }
  console.log(`╰─\n`);
}

if (import.meta.url === pathToFileURL(process.argv[1] || '').href) {
  await main();
}
