"use client";

import Dobra from "@/dobras/botao/brilho/Dobra";

/** Adapter do tema: mantém a API sem duplicar estrutura ou CSS da dobra base. */
export default function BotaoBrilho({ rotulo, href, onClick }) {
  return <Dobra slots={{ rotulo, href, onClick }} />;
}
