"use client";

/* Home.
 *
 * A ORDEM É A DA RECEITA, não gosto meu: `receitas.json → odontologia.ordem` manda
 * hero → servicos → passos → equipa → prova → faq → precos → cta → contacto. Os slots
 * que este cliente não preenche simplesmente não aparecem (ausência produz ausência), e
 * os que o acervo ainda não cobre para este nicho ficam de fora desta versão do tema.
 *
 * As secções principais são DOBRAS DO BANCO, portadas e promovidas a `aprovada`:
 *   hero      → hero/mesa-revelada (galeria e reveal GSAP)
 *   servicos  → servicos/cartoes (pilha visual com fotografia por tratamento)
 *   equipa    → equipa/secao-162
 *   prova     → prova/secao-192
 *   faq       → faq/secao-21
 *   contacto  → contacto/secao-83
 * Só o Nav e o Footer são escritos à mão, porque o slot `rodape` tem zero dobras no
 * acervo e o `receitas.json` classifica ambos como sistema do tema.
 */

import Hero from "@/dobras/hero/mesa-revelada/Dobra";
import TratamentosComplementares from "@/dobras/servicos/cartoes/Dobra";
import Vitrine from "@/dobras/vitrine/antes-depois/Dobra";
import Equipa from "@/dobras/equipa/secao-162/Dobra";
import Prova from "@/dobras/prova/secao-192/Dobra";
import Faq from "@/dobras/faq/secao-21/Dobra";
import Contacto from "@/dobras/contacto/secao-83/Dobra";

import Lead from "@/components/Lead/Lead";
import { slotsHero, slotsServicos, slotsVitrine, slotsEquipa, slotsProva, slotsFaq, slotsContacto } from "@/theme/secoes";
import { tem } from "@/theme/content";

export default function Home() {
  return (
    <>
      <Hero slots={slotsHero} />
      <Lead />
      {tem("blocos.servicos.itens") && <TratamentosComplementares slots={slotsServicos} id="servicos" />}
      {tem("blocos.vitrine.itens") && <Vitrine slots={slotsVitrine} id="resultados" />}
      {tem("blocos.equipa.membros") && <Equipa slots={slotsEquipa} id="equipa" />}
      {tem("blocos.prova.itens") && <Prova slots={slotsProva} id="testemunhos" />}
      {tem("blocos.faq.itens") && <Faq slots={slotsFaq} id="faq" />}
      <Contacto slots={slotsContacto} id="contacto" />
    </>
  );
}
