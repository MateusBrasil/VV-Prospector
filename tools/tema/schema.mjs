/**
 * Contrato do `cliente.json` — campos, obrigatoriedade e o que acontece quando falta.
 *
 * POR QUE VALIDADOR PRÓPRIO E NÃO JSON SCHEMA + AJV
 * O que interessa aqui não é "o tipo está certo", é a POLÍTICA DE AUSÊNCIA, e essa é a
 * decisão de produto mais importante do motor:
 *
 *   FATAL     não builda. Sem isto o site não é do cliente, é de ninguém.
 *   DERIVADO  preenche-se a partir de outro campo. Nunca se pede duas vezes a mesma coisa.
 *   OMITIDO   a secção inteira desaparece do site.
 *
 * A terceira é a regra que separa este motor do anterior. O motor antigo, quando faltava
 * conteúdo, ficava com o do template — e foi assim que "Zaire Dorwart, CEO" e os logos da
 * Curology foram entregues a um restaurante em Guimarães. Aqui, ausência produz ausência.
 * Nunca placeholder, nunca invenção, nunca sobra de origem.
 */

const eString = v => typeof v === 'string' && v.trim().length > 0;
const eArray = v => Array.isArray(v) && v.length > 0;

/** Caminho tipo `identidade.nome` num objeto. */
export const ler = (obj, caminho) =>
  caminho.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

const escrever = (obj, caminho, valor) => {
  const partes = caminho.split('.');
  const ultima = partes.pop();
  let alvo = obj;
  for (const p of partes) alvo = (alvo[p] ??= {});
  alvo[ultima] = valor;
};

/* ------------------------------------------------------------------ *
 * FATAL — sem isto o site não existe.
 * ------------------------------------------------------------------ */
export const FATAIS = [
  ['slug', eString, 'identificador do cliente (pasta, projeto Vercel, chave no CRM)'],
  ['tema', eString, 'ex. "restaurante-noir@1". Fixa a versão do kit/tema que gerou este site.'],
  ['locale', eString, 'ex. "pt-PT". Vai para <html lang> — o leitor de ecrã e o Google leem isto.'],
  ['identidade.nome', eString, 'o nome do negócio'],
  ['identidade.tagline', eString, 'a frase curta que diz o que o negócio é. Aparece em 4 sítios.'],
  ['identidade.localidadeCurta', eString, 'ex. "Guimarães, PT"'],
  ['contactos.telefone', eString, 'sem isto não há como reservar, e o site não vende nada'],
  ['morada.linhas', eArray, '1 a 3 linhas de morada'],
  ['morada.cidade', eString, 'usada no marquee e no rodapé'],
  ['seo.title', eString, 'sem isto o separador do browser fica com o nome do template'],
  ['seo.description', eString, 'idem, e é o que aparece no Google'],
  ['imagens.hero', eString, 'a primeira imagem que o visitante vê. Sem foto real não há site.'],
  ['paginas.home.sobre.titulo', eString, 'o parágrafo editorial da home'],

  // ACHADO AO VIVO (Vaninha Fashion, 2026-07-23): nenhum dos dois tinha regra nenhuma —
  // nem FATAL, nem DERIVADO, nem OMISSIVEL. O `cliente.json` não os dava, o build passava
  // na mesma, e o botão do rodapé saía publicado com um <span> vazio: um retângulo sem
  // texto nenhum, impossível de saber que era clicável. É a última chamada pra ação do
  // site inteiro — não pode sair muda.
  ['blocos.footer.titulo', eString, 'o convite final do rodapé, antes do botão'],
  ['blocos.footer.botao', eString, 'o texto do botão do rodapé — sem isto ele sai sem nenhuma palavra'],
];

/* ------------------------------------------------------------------ *
 * DERIVADO — preenche-se sozinho a partir de outro campo já dado.
 * Cada entrada é [destino, origem(cliente) => valor, explicação].
 * ------------------------------------------------------------------ */
export const DERIVADOS = [
  ['identidade.wordmark',
    c => partirNome(c.identidade.nome),
    'o nome partido em 2 para o H1 do hero (ex. "Kasa"/"blanca")'],

  ['identidade.logoAlt',
    c => c.identidade.nome,
    'alt do logo'],

  ['contactos.telefoneLink',
    c => 'tel:' + String(c.contactos.telefone).replace(/[^\d+]/g, ''),
    'o href do telefone, limpo de espaços e parênteses'],

  ['contactos.reservaUrl',
    c => c.contactos.whatsapp || c.contactos.reservaUrl || ('tel:' + String(c.contactos.telefone).replace(/[^\d+]/g, '')),
    'para onde aponta o botão de reserva. Em Portugal, telefone por omissão: WhatsApp aqui não é o canal.'],

  ['blocos.footer.copyright',
    c => `©${new Date().getFullYear()} ${c.identidade.nome}. Todos os direitos reservados.`,
    'rodapé'],

  ['blocos.footer.assinatura',
    c => `${c.identidade.nome}, ${c.morada.cidade}`,
    'rodapé, lado direito'],

  ['blocos.marquee.titulo',
    c => c.morada.cidade,
    'o marquee grita o nome da cidade'],

  ['blocos.nav.rodape',
    c => [c.identidade.tagline, c.identidade.localidadeCurta],
    'as duas linhas no fundo do menu aberto'],

  // Chrome do TEMA, não conteúdo do CLIENTE — nenhuma loja tem uma versão própria de
  // "Menu"/"Fechar". Sem isto no schema, o `cliente.json` que não pensasse em declarar
  // isto à mão publicava o hamburger com dois <p> vazios: um quadrado sem nenhuma letra,
  // achado ao vivo na Vaninha Fashion (2026-07-23).
  ['blocos.nav.toggleAbrir', () => 'Menu', 'rótulo do hamburger fechado'],
  ['blocos.nav.toggleFechar', () => 'Fechar', 'rótulo do hamburger aberto'],

  ['imagens.aboutImageBanner',
    c => c.imagens.imageBanner || c.imagens.hero,
    'reaproveita o banner ou, em último caso, o hero'],

  ['imagens.ctaImagem',
    c => c.imagens.hero,
    'a foto do bloco de reserva'],

  ['imagens.imageBanner',
    c => c.imagens.hero,
    'a foto do banner de página inteira'],

  ['imagens.aboutHero',
    c => c.imagens.hero,
    'a foto do topo da página Sobre'],
];

/* ------------------------------------------------------------------ *
 * OMITIDO — se falta, a secção não é renderizada. Nunca placeholder.
 * ------------------------------------------------------------------ */
export const OMISSIVEIS = [
  ['menu', 'a carta desaparece, e a rota /menu não é gerada'],
  ['depoimentos', 'o bloco de prova social desaparece'],
  ['blocos.stickyCards', 'as fichas com scroll desaparecem'],
  ['blocos.cta', 'o bloco de reserva desaparece'],
  ['blocos.marquee', 'a faixa em movimento desaparece'],
  ['blocos.imageBanner', 'o banner de página inteira desaparece'],
  ['horarios', 'os horários somem do bloco de reserva e do CTA'],
  ['sociais', 'os links sociais somem do menu'],
  ['prova', 'a nota e o número de avaliações somem da copy'],
  ['paginas.sobre', 'a rota /about não é gerada e o link some do menu'],
  ['paginas.menu', 'a rota /menu não é gerada e o link some do menu'],
  ['paginas.reserva', 'a rota /reservation não é gerada e o link some do menu'],
  // Os temas MVP são fechados por nicho; não use este contrato para inventar um quarto tema
  // sem antes criar e promover seu kit em themes/base/kits.json.
  ['produtos', 'a vitrine de produtos desaparece da Home'],
  ['imagens.galeria', 'o hero de grelha usa a foto do herói repetida'],
];

/**
 * "Restaurante Virtudes" → ["Restaurante","Virtudes"].
 *
 * Nome de UMA palavra devolve uma linha só, de propósito. O Kasablanca parte-se em
 * "Kasa"/"blanca", mas isso é decisão de direção de arte de quem desenhou a marca, não
 * uma regra derivável: partir ao meio daria "Kasab"/"lanca", que é feio e errado. Quando
 * o corte importa, `identidade.wordmark` diz-se à mão — e aí esta derivação não corre.
 * Máquina nenhuma adivinha onde uma marca respira.
 */
function partirNome(nome) {
  const palavras = String(nome).trim().split(/\s+/);
  return palavras.length > 1 ? [palavras[0], palavras.slice(1).join(' ')] : [nome];
}

/**
 * Valida e devolve o cliente RESOLVIDO (derivados preenchidos, omitidos marcados).
 * @returns {{ ok:boolean, cliente:object, fatais:string[], derivados:string[], omitidos:string[] }}
 */
export function resolver(bruto) {
  const c = structuredClone(bruto);
  const fatais = [];
  const derivados = [];
  const omitidos = [];

  for (const [caminho, valida, porque] of FATAIS) {
    if (!valida(ler(c, caminho))) fatais.push(`${caminho} — ${porque}`);
  }
  // Sem os fatais não vale a pena derivar: as derivações leem-nos e rebentariam com
  // um erro de runtime que esconde o erro real, que é "faltou preencher o brief".
  if (fatais.length) return { ok: false, cliente: c, fatais, derivados, omitidos };

  // A OMISSÃO OLHA PARA O BRUTO, NÃO PARA O RESOLVIDO — e a ordem aqui é o que importa.
  // Algumas derivações escrevem DENTRO de uma secção omissível (`blocos.marquee.titulo`
  // cria `blocos.marquee`). Se a omissão corresse depois, uma secção que o operador nunca
  // preencheu apareceria "presente" só porque a sua própria derivação a ressuscitou — e o
  // site sairia com um marquee a gritar o nome da cidade que ninguém pediu.
  // A pergunta certa é sobre o INPUT: "o operador deu isto?".
  for (const [caminho, efeito] of OMISSIVEIS) {
    const v = ler(bruto, caminho);
    const vazio = v == null || (Array.isArray(v) && !v.length) ||
      (typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length);
    if (vazio) omitidos.push(`${caminho} — ${efeito}`);
  }
  const omitido = new Set(omitidos.map(o => o.split(' — ')[0]));

  for (const [destino, calcular, porque] of DERIVADOS) {
    // não derivar para dentro de secção que já foi dada como omitida
    if ([...omitido].some(o => destino === o || destino.startsWith(o + '.'))) continue;
    const atual = ler(c, destino);
    if (atual == null || atual === '' || (Array.isArray(atual) && !atual.length)) {
      try {
        const v = calcular(c);
        if (v != null) { escrever(c, destino, v); derivados.push(`${destino} ← ${porque}`); }
      } catch { /* origem em falta: fica por preencher, e o omitido trata */ }
    }
  }

  return { ok: true, cliente: c, fatais, derivados, omitidos, omitido };
}

/** Relatório humano da resolução. É o que o operador lê antes de aprovar um site. */
export function relatorio({ ok, fatais, derivados, omitidos }) {
  const l = [];
  if (!ok) {
    l.push(`\n❌ ${fatais.length} campo(s) obrigatório(s) em falta — não é possível construir:`);
    fatais.forEach(f => l.push(`   ✗ ${f}`));
    l.push('\nEstes não têm default de propósito: um site sem eles não é do cliente.');
    return l.join('\n');
  }
  if (derivados.length) {
    l.push(`\n· ${derivados.length} campo(s) derivado(s) automaticamente:`);
    derivados.forEach(d => l.push(`   · ${d}`));
  }
  if (omitidos.length) {
    l.push(`\n⚠ ${omitidos.length} secção(ões) omitida(s) por falta de conteúdo real:`);
    omitidos.forEach(o => l.push(`   ⚠ ${o}`));
    l.push('   (ausência produz ausência: nunca se preenche com texto de template)');
  }
  l.push('\n✓ cliente resolvido');
  return l.join('\n');
}
