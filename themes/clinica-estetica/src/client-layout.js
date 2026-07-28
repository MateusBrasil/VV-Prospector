"use client";

/* Envelope de cliente do tema: Nav, conteúdo, Footer.
 *
 * O QUE ESTE TEMA NÃO TEM, E PORQUÊ
 *
 *  - SEM PRELOADER e sem ecrã de "clicar para entrar". Regra dura do motor: a pessoa
 *    entra no domínio e vê o site completo. Seis dobras de hero do banco foram descartadas
 *    por isto durante a escolha (hero-5, hero-15, hero-16, hero-20, hero-21 e hero-1-2),
 *    e várias delas estavam no topo da lista do seletor por terem custo de porte baixo:
 *    a classificação de `registo` mede quanto uma peça se mexe, e um preloader quase não
 *    se mexe. Ler o `Dobra.jsx` de cada candidata é o que apanha isto, a ordenação não.
 *  - SEM LENIS. Scroll suave é movimento imposto ao visitante. O registo deste nicho é
 *    editorial, não cinematográfico: `direcoes.json` nega por escrito "animação de
 *    espetáculo disparada por scroll", porque em estética movimento a mais lê-se como
 *    clínica barata.
 *  - SEM GSAP. Nenhuma das cinco dobras portadas depende dele depois do porte, por isso a
 *    dependência não entrou no `package.json`. Todo o movimento deste tema é CSS, o que o
 *    coloca automaticamente debaixo do `prefers-reduced-motion` do sistema, declarado em
 *    `themes/base/sistema/estrutura.css`.
 *
 * Fica o `ViewTransitions`, que é transição entre rotas do próprio browser e o sistema já
 * a neutraliza em `estrutura.css`.
 */

import { ViewTransitions } from "next-view-transitions";

import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export default function ClientLayout({ children }) {
  return (
    <ViewTransitions>
      <Nav />
      <main className="page">{children}</main>
      <Footer />
    </ViewTransitions>
  );
}
