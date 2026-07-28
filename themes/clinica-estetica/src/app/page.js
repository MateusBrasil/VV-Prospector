"use client";

/* Home.
 *
 * A ORDEM É A DA RECEITA, não gosto meu: `receitas.json → clinica-estetica.ordem` manda
 * hero → servicos → vitrine → passos → prova → equipa → precos → faq → cta → contacto.
 * Os slots que este cliente não preenche simplesmente não aparecem (ausência produz
 * ausência), e os que o acervo ainda não cobre para este nicho ficam de fora desta versão
 * do tema.
 *
 * As cinco secções são DOBRAS DO BANCO, portadas e promovidas a `aprovada`:
 *   hero      → hero/hero-1
 *   servicos  → servicos/cartoes        (era diferenciais/cartoes; slot corrigido no porte)
 *   vitrine   → vitrine/antes-depois    (era destaque/image-compare-slider-3d)
 *   prova     → prova/secao-192
 *   contacto  → contacto/secao-89
 * Só o Nav e o Footer são escritos à mão, porque o slot `rodape` tem zero dobras no
 * acervo e o `receitas.json` classifica ambos como sistema do tema. O `Lead` também, e
 * pela mesma razão do tema odontologia: é o parágrafo de `paginas.home.sobre.titulo`, um
 * campo FATAL do schema que não tem slot nenhum a que corresponda.
 *
 * A VITRINE É OBRIGATÓRIA NESTE NICHO e é o antes/depois. Não é decoração: é a oferta.
 */

import Hero from "@/dobras/hero/hero-1/Dobra";
import Servicos from "@/dobras/servicos/cartoes/Dobra";
import Vitrine from "@/dobras/vitrine/antes-depois/Dobra";
import Prova from "@/dobras/prova/secao-192/Dobra";
import Contacto from "@/dobras/contacto/secao-89/Dobra";

import Lead from "@/components/Lead/Lead";
import {
  slotsHero,
  slotsServicos,
  slotsVitrine,
  slotsProva,
  slotsContacto,
} from "@/theme/secoes";
import { tem } from "@/theme/content";

export default function Home() {
  return (
    <>
      <Hero slots={slotsHero} />
      <Lead />
      {tem("blocos.servicos.itens") && <Servicos slots={slotsServicos} id="tratamentos" />}
      {tem("blocos.vitrine.itens") && <Vitrine slots={slotsVitrine} id="resultados" />}
      {tem("blocos.prova.itens") && <Prova slots={slotsProva} id="testemunhos" />}
      <Contacto slots={slotsContacto} id="contacto" />
    </>
  );
}
