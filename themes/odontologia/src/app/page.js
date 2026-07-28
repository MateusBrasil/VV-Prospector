"use client";

/* Home.
 *
 * A ORDEM É A DA RECEITA, não gosto meu: `receitas.json → odontologia.ordem` manda
 * hero → servicos → passos → equipa → prova → faq → precos → cta → contacto. Os slots
 * que este cliente não preenche simplesmente não aparecem (ausência produz ausência), e
 * os que o acervo ainda não cobre para este nicho ficam de fora desta versão do tema.
 *
 * As cinco secções são DOBRAS DO BANCO, portadas e promovidas a `aprovada`:
 *   hero      → hero/hero-9
 *   servicos  → servicos/arcos   (era destaque/scroll-29; slot corrigido no porte)
 *   equipa    → equipa/secao-162
 *   faq       → faq/secao-21
 *   contacto  → contacto/secao-83
 * Só o Nav e o Footer são escritos à mão, porque o slot `rodape` tem zero dobras no
 * acervo e o `receitas.json` classifica ambos como sistema do tema.
 */

import Hero from "@/dobras/hero/hero-9/Dobra";
import Servicos from "@/dobras/servicos/arcos/Dobra";
import Equipa from "@/dobras/equipa/secao-162/Dobra";
import Faq from "@/dobras/faq/secao-21/Dobra";
import Contacto from "@/dobras/contacto/secao-83/Dobra";

import Lead from "@/components/Lead/Lead";
import { slotsHero, slotsServicos, slotsEquipa, slotsFaq, slotsContacto } from "@/theme/secoes";
import { tem } from "@/theme/content";

export default function Home() {
  return (
    <>
      <Hero slots={slotsHero} />
      <Lead />
      {tem("blocos.servicos.itens") && <Servicos slots={slotsServicos} id="servicos" />}
      {tem("blocos.equipa.membros") && <Equipa slots={slotsEquipa} id="equipa" />}
      {tem("blocos.faq.itens") && <Faq slots={slotsFaq} id="faq" />}
      <Contacto slots={slotsContacto} id="contacto" />
    </>
  );
}
