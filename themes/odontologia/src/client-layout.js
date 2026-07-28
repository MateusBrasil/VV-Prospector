"use client";

/* Envelope de cliente do tema: Nav, conteúdo, Footer.
 *
 * O QUE ESTE TEMA NÃO TEM, E PORQUÊ
 *
 *  - SEM PRELOADER e sem ecrã de "clicar para entrar". Regra dura do motor: a pessoa
 *    entra no domínio e vê o site completo. Duas das dobras de hero do banco eram
 *    exatamente isso e foram descartadas por causa desta regra.
 *  - SEM LENIS. Scroll suave é movimento imposto ao visitante, e o registo deste nicho é
 *    sóbrio: em saúde, movimento a mais lê-se como pouco sério. O moda-editorial usa
 *    Lenis porque lá o registo é editorial; copiá-lo para aqui seria copiar a decisão
 *    errada com a estrutura certa.
 *  - SEM GSAP. Nenhuma das cinco dobras portadas depende dele depois do porte, por isso
 *    a dependência saiu do `package.json`. Todo o movimento deste tema é CSS, o que o
 *    coloca automaticamente debaixo do `prefers-reduced-motion` do sistema: não é preciso
 *    o `gsap.globalTimeline.timeScale()` que o moda-editorial teve de montar à mão.
 *
 * Fica o `ViewTransitions`, que é transição entre rotas do próprio browser e o sistema já
 * a neutraliza em `estrutura.css`.
 */

import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Nav />
      <main className="page">{children}</main>
      <Footer />
    </>
  );
}
