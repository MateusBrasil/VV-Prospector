/**
 * Servidor estático mínimo para medir/verificar uma pasta de site — fonte única.
 *
 * POR QUE NÃO `file://`
 * Mata ES modules (origin `null` reprova o CORS), quebra `fetch()` de JSON, e faz
 * `location.host === ''` — o que arrebentaria a própria checagem de hotlink, que compara
 * o host do recurso com o host da página. Medir em `file://` mede outra coisa.
 *
 * Extraído de `ce-dna.mjs:34-40`, com quatro acréscimos que o original não tinha e sem os
 * quais o verificador dá resultado errado:
 *   1. log de pedidos — para distinguir 404 NOSSO (CSS que falta, é falha) de 404 externo
 *   2. guarda de path traversal — sem ela, `../../briefs/x.json` é servível e vai parar a um screenshot
 *   3. fallback `/rota` → `/rota.html` — é como o Next `output:'export'` serve as rotas
 *   4. `Cache-Control: no-store` — sem isto a 2ª corrida vê o estado da 1ª
 */
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, resolve, sep } from 'node:path';

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.webp': 'image/webp', '.avif': 'image/avif', '.mp4': 'video/mp4', '.webm': 'video/webm',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf',
  '.glb': 'model/gltf-binary', '.gltf': 'model/gltf+json',
};

/**
 * Sobe um servidor na pasta. Porta 0 = o SO escolhe uma livre, o que permite servir
 * vários sites em paralelo num lote sem colidir.
 * @returns {{url:string, porta:number, pedidos:Array<{url:string,status:number}>, fechar:()=>void}}
 */
export async function servir(dir) {
  const RAIZ = resolve(dir);
  if (!existsSync(RAIZ)) throw new Error(`pasta não existe: ${RAIZ}`);
  const pedidos = [];

  const srv = createServer((req, res) => {
    let url;
    try { url = decodeURIComponent(req.url.split('?')[0]); }
    catch { res.writeHead(400).end('URL inválida'); return; }

    let p = join(RAIZ, url);

    // (2) traversal
    const abs = resolve(p);
    if (abs !== RAIZ && !abs.startsWith(RAIZ + sep)) {
      pedidos.push({ url, status: 403 });
      res.writeHead(403, { 'Content-Type': 'text/plain' }).end('403');
      return;
    }

    // (3) A ORDEM AQUI IMPORTA e custou um diagnóstico.
    // No export estático do Next, o nome de uma rota colide com o da pasta de assets dela:
    // `/about` existe como PASTA (as fotos: about-hero.jpg, sticky-card-1.jpg...) e a página
    // é `about.html`. Tratar a pasta como índice primeiro leva a procurar `about/index.html`,
    // que não existe, e a devolver 404 para uma rota que está perfeitamente lá.
    // Ficheiro exato → irmão .html → índice da pasta.
    const ehFicheiro = existsSync(p) && statSync(p).isFile();
    if (!ehFicheiro) {
      if (existsSync(p + '.html')) p += '.html';
      else if (existsSync(p) && statSync(p).isDirectory() && existsSync(join(p, 'index.html'))) p = join(p, 'index.html');
    }

    if (!existsSync(p) || statSync(p).isDirectory()) {
      pedidos.push({ url, status: 404 });
      res.writeHead(404, { 'Content-Type': 'text/plain' }).end('404');
      return;
    }

    pedidos.push({ url, status: 200 });
    res.writeHead(200, {
      'Content-Type': MIME[extname(p).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',   // (4)
    });
    res.end(readFileSync(p));
  });

  await new Promise((ok, erro) => {
    srv.once('error', erro);
    srv.listen(0, '127.0.0.1', ok);
  });

  const porta = srv.address().port;
  return {
    url: `http://127.0.0.1:${porta}/`,
    porta,
    pedidos,                                     // (1)
    naoEncontrados: () => pedidos.filter(p => p.status === 404),
    fechar: () => new Promise(r => srv.close(r)),
  };
}
