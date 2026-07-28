"use client";

/* Hero da Home — reescrito 2026-07-24.
 *
 * A versão anterior (a dobra `hero/grade`, uma grelha 3D decorativa herdada de
 * bank/_componentes/hero-section/hero-14) era o "intro" de um template de portfólio, não
 * um hero de landing page: o Mateus mostrou 4 referências reais (Spylt, DaviXavier, Solene
 * e a galeria do próprio banco Code Eagle) e nenhuma delas é uma grelha muda com um selo no
 * meio — todas têm navbar com hierarquia visível, título grande de verdade, subtítulo em
 * parágrafo e botões de ação. Não dava para remendar a dobra até ela virar isto; trocada
 * pela estrutura certa.
 *
 * Todo o conteúdo já existia no cliente.json (nada de copy nova inventada aqui, ver a regra
 * em feedback_copy_sempre_com_squad): `identidade.tagline` + `morada.cidade` formam o
 * título, `paginas.home.sobre.titulo` (o parágrafo da bio real do Instagram, já FATAL) vira
 * o subtítulo — por isso a secção "intro" separada que existia logo abaixo do Hero saiu de
 * `app/page.js`: era o MESMO texto, duas vezes na mesma página. `prova.nota`/`numAvaliacoes`
 * (Google) é o selo de confiança, como nas referências. */

import { useLenis } from "lenis/react";

import Copy from "@/components/Copy/Copy";
import BotaoVidro from "@/components/Botoes/Vidro";
import BotaoBrilho from "@/components/Botoes/Brilho";
import { useViewTransition } from "@/hooks/useViewTransition";
import { identidade, imagens, morada, paginas, prova, tem } from "@/theme/content";

import "./Hero.css";

export default function Hero() {
  const lenis = useLenis();
  const { navigateWithTransition } = useViewTransition();

  /* Precisa do Lenis explicitamente: um `<a href="#vitrine">` puro, com o scroll suave do
   * Lenis a interceptar o gesto normal, ou não anda nada ou salta sem a animação do resto
   * do site (o mesmo achado documentado no botão do rodapé, ver Footer.jsx). */
  function irParaVitrine(e) {
    e.preventDefault();
    const alvo = document.getElementById("vitrine");
    if (!alvo) return;
    if (lenis) lenis.scrollTo(alvo, { duration: 1.4 });
    else alvo.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero">
      <div className="hero-content">
        {tem("prova") && (
          <Copy type="lines" animateOnScroll={false} delay={0.9}>
            <p className="hero-prova mono">
              <svg className="hero-prova-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="12 2 14.9 8.6 22 9.3 16.7 14.1 18.2 21 12 17.4 5.8 21 7.3 14.1 2 9.3 9.1 8.6" />
              </svg>
              {prova.nota} · {prova.numAvaliacoes} avaliações no Google
            </p>
          </Copy>
        )}

        <Copy type="lines" animateOnScroll={false} delay={1}>
          <h1 className="hero-titulo">
            <span>{identidade.tagline}</span>
            <span>em {morada.cidade}</span>
          </h1>
        </Copy>

        <Copy type="lines" animateOnScroll={false} delay={1.2}>
          <p className="hero-subtitulo">{paginas.home.sobre.titulo}</p>
        </Copy>

        <div className="hero-botoes">
          {/* "Ver na Loja" reaproveita a MESMA ação já usada nos 4 cartões da Vitrine
              (blocos.produtos[].acao, no cliente.json). Botões PREMIUM do banco Code
              Eagle (categoria Botões, via tools/tema/esteira.mjs) em vez de CSS
              improvisado à mão — pedido explícito do Mateus. */}
          {tem("produtos") && (
            <BotaoVidro rotulo="Ver na Loja" href="#vitrine" onClick={irParaVitrine} />
          )}
          <BotaoBrilho
            rotulo="Contactar"
            href="/contacto"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition("/contacto");
            }}
          />
        </div>
      </div>

      <div className="hero-imagem">
        <img src={imagens.hero} alt={identidade.nome} />
      </div>
    </section>
  );
}
