/**
 * A ÚNICA porta de entrada do conteúdo do cliente dentro do tema.
 *
 * REGRA DURA DO TEMA: nenhum ficheiro em `src/` pode conter um literal de negócio.
 * Nem nome, nem morada, nem telefone, nem copy, nem caminho de foto. Tudo entra por aqui.
 * É isso que torna verificável por grep a promessa "este tema não sabe de que cliente é",
 * e é o que impede a repetição do defeito que entregou o nome e o cargo de uma pessoa da
 * origem do template, e os logos de outra marca dela, a um restaurante em Guimarães.
 *
 * PORQUÊ IMPORT ESTÁTICO DE JSON
 * Resolve no bundler, não em runtime, logo funciona dentro de `"use client"` com GSAP sem
 * precisar de converter nenhum componente em fronteira de servidor.
 *
 * O `cliente.json` que este módulo lê é o RESOLVIDO (derivados já preenchidos, secções sem
 * conteúdo já removidas), escrito pelo hydrate em `<obra>/content/`. O ficheiro que o operador
 * escreve à mão vive noutro sítio (`clientes/<slug>/cliente.json`) e nunca é lido diretamente:
 * assim, depurar é abrir um ficheiro e ver exatamente o que a página vai renderizar.
 *
 * ESTE FICHEIRO É IDÊNTICO AO DO restaurante-noir, MENOS UM CAMPO: `produtos`, a lista
 * lida pela dobra de vitrine (ver src/components/Vitrine/Vitrine.jsx). `menu` e
 * `depoimentos` continuam aqui porque `depoimentos` serve os Testimonials (reusado tal
 * e qual); `menu` fica por compatibilidade de leitura mas este tema não tem rota /menu.
 */
import cliente from "@content/cliente.json";

export const C = cliente;

export const identidade = cliente.identidade;
export const contactos = cliente.contactos;
export const morada = cliente.morada;
export const horarios = cliente.horarios ?? null;
export const sociais = cliente.sociais ?? [];
export const prova = cliente.prova ?? null;
export const seo = cliente.seo;
export const imagens = cliente.imagens;
export const blocos = cliente.blocos ?? {};
export const paginas = cliente.paginas ?? {};
export const depoimentos = cliente.depoimentos ?? null;

/** A lista de produtos que a Vitrine (dobra vitrine/grelha-hover) mostra na Home.
 *  Fixa em 4 cartões no motor da dobra: ver a limitação documentada em Vitrine.jsx. */
export const produtos = cliente.produtos ?? [];

/**
 * `tem("blocos.cta")`, a secção foi preenchida?
 *
 * Os componentes usam isto para devolver `null` em vez de renderizar uma casca vazia.
 * A regra do motor é: AUSÊNCIA PRODUZ AUSÊNCIA. Nunca placeholder, nunca "Lorem", nunca
 * o texto que veio do template. Um site com menos secções continua a ser um site do cliente;
 * um site com a morada de outra pessoa, não.
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
 * Repete uma lista de imagens até `n`, sem nunca repetir duas adjacentes.
 *
 * O cliente típico não tem 35 fotos boas para a grelha do hero, tem 6 ou 8. A alternativa
 * seria stock, que está proibido, ou uma grelha com buracos. Aqui o conteúdo manda: se há
 * 35 células e 8 fotos, saem 35 células a repetir as 8 fotos em ciclo. Nunca o contrário,
 * nunca se inventa uma foto para dar uso a uma célula.
 */
export function ciclar(lista, n) {
  const l = (lista ?? []).filter(Boolean);
  if (!l.length) return [];
  if (l.length >= n) return l.slice(0, n);
  const out = [];
  for (let i = 0; i < n; i++) {
    let escolha = l[i % l.length];
    if (out.length && escolha === out[out.length - 1] && l.length > 1) escolha = l[(i + 1) % l.length];
    out.push(escolha);
  }
  return out;
}
