/**
 * A ÚNICA porta de entrada do conteúdo do cliente dentro do tema.
 *
 * REGRA DURA DO TEMA: nenhum ficheiro em `src/` pode conter um literal de negócio.
 * Nem nome, nem morada, nem telefone, nem copy, nem caminho de foto. Tudo entra por aqui.
 * É isso que torna verificável por grep a promessa "este tema não sabe de que cliente é",
 * e é o que impede a repetição do defeito que entregou o nome e o cargo de uma pessoa da
 * origem do template, e os logos de outra marca dela, a um restaurante em Guimarães.
 *
 * O `cliente.json` que este módulo lê é o RESOLVIDO (derivados já preenchidos, secções sem
 * conteúdo já removidas), escrito pelo hydrate em `<obra>/content/`. O ficheiro que o
 * operador escreve à mão vive noutro sítio (`clientes/<slug>/cliente.json`) e nunca é lido
 * diretamente.
 *
 * Este ficheiro é o mesmo do tema odontologia: as secções deste nicho leem `blocos.*` como
 * as outras. A vitrine deste nicho NÃO é vitrine de produtos, é o antes/depois, e por isso
 * também ela entra por `blocos.vitrine` e não por um campo próprio de catálogo.
 */
import cliente from "@content/cliente.json";

export const C = cliente;

export const identidade = cliente.identidade;
export const contactos = cliente.contactos;
export const morada = cliente.morada;
export const horarios = cliente.horarios ?? [];
export const sociais = cliente.sociais ?? [];
export const prova = cliente.prova ?? null;
export const seo = cliente.seo;
export const imagens = cliente.imagens;
export const blocos = cliente.blocos ?? {};
export const paginas = cliente.paginas ?? {};

/**
 * `tem("blocos.faq")`, a secção foi preenchida?
 *
 * Os componentes usam isto para devolver `null` em vez de renderizar uma casca vazia.
 * A regra do motor é: AUSÊNCIA PRODUZ AUSÊNCIA. Nunca placeholder, nunca "Lorem", nunca
 * o texto que veio do template. Um site com menos secções continua a ser um site do
 * cliente; um site com a morada de outra pessoa, não.
 */
export function tem(caminho) {
  const v = caminho.split(".").reduce((o, k) => (o == null ? undefined : o[k]), cliente);
  if (v == null) return false;
  if (Array.isArray(v)) return v.length > 0;
  if (typeof v === "object") return Object.keys(v).length > 0;
  if (typeof v === "string") return v.trim().length > 0;
  return true;
}

/**
 * As ligações do menu, já com destino real.
 *
 * PORQUÊ CALCULADO E NÃO ESCRITO NO CLIENTE
 * As rotas deste tema são fixas (o tema é que as gera); o que varia é se a rota existe
 * para aquele cliente. `/sobre` só entra se `paginas.sobre` foi preenchido, senão o link
 * levava a um 404. Um item de menu que não leva a lado nenhum é a mesma falha que um
 * botão sem destino, e essa já foi reprovada ao vivo.
 */
export const navegacao = [
  { rotulo: blocos.nav?.inicio, href: "/" },
  ...(tem("paginas.sobre") ? [{ rotulo: blocos.nav?.sobre, href: "/sobre/" }] : []),
  { rotulo: blocos.nav?.contacto, href: "/contacto/" },
].filter(l => l.rotulo);
