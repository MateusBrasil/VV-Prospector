"use client";

import Dobra from "@/dobras/vitrine/grelha-hover/Dobra";
import { produtos, tem } from "@/theme/content";

const CAMPOS = [
  { imagem: "imagem", titulo: "titulo2", texto: "texto2", acao: "acao" },
  { imagem: "imagem2", titulo: "titulo3", texto: "texto3", acao: "acao2" },
  { imagem: "imagem3", titulo: "titulo4", texto: "texto4", acao: "acao3" },
  { imagem: "imagem4", titulo: "titulo5", texto: "texto5", acao: "acao4" },
];

/** Traduz o modelo semântico do cliente para os slots da dobra reutilizável. */
export default function Vitrine({ titulo, texto }) {
  if (!tem("produtos")) return null;

  const lista = produtos.slice(0, 4);
  while (lista.length > 0 && lista.length < 4) lista.push(lista[lista.length - 1]);

  const slots = { titulo, texto };
  lista.forEach((produto, index) => {
    const campo = CAMPOS[index];
    slots[campo.imagem] = produto.imagem;
    slots[campo.titulo] = produto.titulo;
    slots[campo.texto] = produto.texto;
    slots[campo.acao] = produto.acao || "";
  });

  return <Dobra slots={slots} id="vitrine" quantidade={lista.length} />;
}
