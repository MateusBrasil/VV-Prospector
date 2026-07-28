import assert from 'node:assert/strict';
import test from 'node:test';
import { auditar, resolverDestino, validarUrlDestino } from '../tools/qualificar.mjs';

const IP_PUBLICO = '93.184.216.34';
const resolverPublico = async () => [IP_PUBLICO];

test('aceita destinos HTTP(S) públicos convencionais', () => {
  assert.equal(validarUrlDestino('https://example.com/pagina?origem=teste').ok, true);
  assert.equal(validarUrlDestino('http://8.8.8.8/').ok, true);
  assert.equal(validarUrlDestino('https://example.com:443/').ok, true);
});

test('bloqueia protocolos, hostnames locais, portas não-web e IPs privados/reservados', () => {
  const casos = [
    'file:///etc/passwd', 'ftp://example.com', 'http://localhost:3000',
    'http://sub.localhost', 'http://printer.local', 'http://localhost.localdomain',
    'http://example.com:8080/', 'https://example.com:8443/',
    'http://127.0.0.1', 'http://127.1', 'http://10.0.0.1', 'http://169.254.169.254',
    'http://172.16.0.1', 'http://192.168.1.1', 'http://0.0.0.0', 'http://[::1]/',
    'http://[::]/', 'http://[fe80::1]/', 'http://[fc00::1]/',
    'http://[::ffff:127.0.0.1]/', 'http://[::127.0.0.1]/', 'http://[2001:db8::1]/',
    'http://192.0.2.1', 'http://198.51.100.1', 'http://203.0.113.1', 'http://224.0.0.1',
    'http://example.com;whoami',
  ];
  for (const caso of casos) assert.equal(validarUrlDestino(caso).ok, false, caso);
});

test('rejeita resposta DNS sem IP público seguro, inclusive resposta mista', async () => {
  const destino = validarUrlDestino('https://empresa.example/');
  assert.equal((await resolverDestino(destino, async () => ['127.0.0.1'])).ok, false);
  assert.equal((await resolverDestino(destino, async () => [IP_PUBLICO, '10.0.0.1'])).ok, false);
  assert.equal((await resolverDestino(destino, async () => [])).ok, false);
  assert.equal((await resolverDestino(destino, async () => { throw new Error('NXDOMAIN'); })).ok, false);
});

test('pina cada ligação curl aos IPs DNS aprovados para impedir DNS rebinding', async () => {
  let chamada;
  const resultado = await auditar('https://empresa.example/', {
    resolver: resolverPublico,
    executarCurl: (_bin, args) => {
      chamada = args;
      return '<html><head><title>Empresa Exemplo</title><meta name="viewport"><meta name="description" content="x"></head><body><a href="tel:+351211234567">Ligar</a></body></html>\n---META---\n200|123|https://empresa.example/|text/html|';
    },
  });
  assert.equal(resultado.tem_site, true);
  assert.equal(chamada.includes('--noproxy'), true);
  assert.equal(chamada.includes('*'), true);
  const indice = chamada.indexOf('--resolve');
  assert.notEqual(indice, -1);
  assert.equal(chamada[indice + 1], `empresa.example:443:${IP_PUBLICO}`);
});

test('valida redirects antes de nova chamada HTTP', async () => {
  let chamadas = 0;
  const resultado = await auditar('https://empresa.example/', {
    resolver: resolverPublico,
    executarCurl: () => {
      chamadas += 1;
      return '\n---META---\n302|0|https://empresa.example/|text/html|http://127.0.0.1/';
    },
  });
  assert.equal(chamadas, 1);
  assert.equal(resultado.tipo, 'url_invalida');
  assert.match(resultado.erro, /redirecionamento bloqueado/);
});

test('URL bloqueada não é tratada como lead sem site nem executa curl', async () => {
  let chamada = false;
  const resultado = await auditar('http://127.0.0.1;whoami', {
    executarCurl: () => { chamada = true; throw new Error('não devia executar'); },
  });
  assert.equal(resultado.tipo, 'url_invalida');
  assert.equal(resultado.veredito, 'VERIFICAR_MANUALMENTE');
  assert.equal(resultado.tem_site, null);
  assert.equal(chamada, false);
});

test('lê viewport e description no head inteiro, mesmo depois de CSS inline longo', async () => {
  const html = `<html><head><style>${'x'.repeat(5000)}</style><meta name="viewport" content="width=device-width"><meta name="description" content="descrição real"><title>Empresa Exemplo</title></head><body><a href="tel:+351211234567">Ligar</a></body></html>`;
  const r = await auditar('https://empresa.example/', {
    resolver: resolverPublico,
    executarCurl: () => `${html}\n---META---\n200|123|https://empresa.example/|text/html|`,
  });
  assert.equal(r.defeitos.some(d => d.k === 'sem_viewport'), false);
  assert.equal(r.defeitos.some(d => d.k === 'sem_description'), false);
});

test('Webnode é tratado como plataforma de terceiro, não como site próprio', async () => {
  const r = await auditar('https://marisqueira.webnode.pt/', {
    resolver: resolverPublico,
    executarCurl: () => '<html><head><title>Primavera</title></head><body></body></html>\n---META---\n200|10|https://marisqueira.webnode.pt/|text/html|',
  });
  assert.equal(r.veredito, 'QUALIFICA_SEM_SITE');
  assert.equal(r.tipo, 'plataforma_alheia');
});
