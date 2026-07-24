"use client";

import Dobra from "@/dobras/botao/vidro/Dobra";

/** Adapter do tema: mantém a API sem duplicar estrutura ou CSS da dobra base. */
export default function BotaoVidro({ rotulo, href, onClick }) {
  return <Dobra slots={{ rotulo, href, onClick }} />;
}
