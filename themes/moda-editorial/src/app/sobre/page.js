"use client";

/* Rota opcional: só existe conteúdo de verdade se `paginas.sobre` vier preenchido
 * (ver OMISSIVEIS em tools/tema/schema.mjs e o link que já desaparece do Nav).
 * Sem ele, a página devolve `notFound()` em vez de rebentar o build ou mostrar casca vazia.
 *
 * Saiu daqui: as 3 linhas do H1 (2 vêm de identidade.wordmark, a 3ª é
 * paginas.sobre.heroLinha3), o kicker e os 3 parágrafos editoriais, e a nota de
 * avaliações (prova.nota/numAvaliacoes), que some da frase se `prova` faltar.
 * A história da marca é contada pelo StickyCards (blocos.stickyCards). */

import { useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Copy from "@/components/Copy/Copy";
import StickyCards from "@/components/StickyCards/StickyCards";
import { identidade, imagens, paginas, prova, tem } from "@/theme/content";

import "./sobre.css";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 1000;

export default function Sobre() {
  const heroSectionRef = useRef(null);

  /* fade in the hero image on mount */
  useEffect(() => {
    if (!tem("paginas.sobre")) return;
    const heroImage = heroSectionRef.current?.querySelector(".hero-image");
    if (!heroImage) return;

    gsap.fromTo(
      heroImage,
      { autoAlpha: 0, scale: 0.75, y: 50 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 1, delay: 1.25, ease: "power3.out" },
    );
  }, []);

  /* scroll-driven parallax for hero header and image */
  useEffect(() => {
    if (!tem("paginas.sobre")) return;
    let ctx;

    const buildScrollAnimation = () => {
      if (ctx) ctx.revert();

      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      const headerOffsetY = isMobile ? "200vh" : "175vh";
      const headerOffsetX = isMobile ? -100 : -150;

      ctx = gsap.context(() => {
        const heroParallaxTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".sobre-hero",
            start: "top top",
            end: "bottom +=1200%",
            scrub: true,
          },
        });

        heroParallaxTimeline
          .to(
            [".hero-heading .heading-line-1", ".hero-heading .heading-line-3"],
            { scale: 2, y: headerOffsetY, xPercent: headerOffsetX },
            "scroll",
          )
          .to(
            ".hero-heading .heading-line-2",
            { scale: 2, y: headerOffsetY, xPercent: -headerOffsetX },
            "scroll",
          )
          .to(".hero-image", { scaleY: 2.5, yPercent: 300 }, "scroll")
          .to(".hero-image img", { scaleX: 2.5 }, "scroll");
      }, heroSectionRef);
    };

    let wasMobile = window.innerWidth < MOBILE_BREAKPOINT;
    buildScrollAnimation();

    const handleResize = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      if (isMobile !== wasMobile) {
        wasMobile = isMobile;
        buildScrollAnimation();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (ctx) ctx.revert();
    };
  }, []);

  if (!tem("paginas.sobre")) notFound();

  return (
    <>
      <section className="sobre-hero" ref={heroSectionRef}>
        <div className="sobre-hero-pin">
          <div className="hero-heading">
            <Copy animateOnScroll={false} delay={0.85}>
              <h1 className="heading-line-1">{identidade.wordmark[0]}</h1>
              {identidade.wordmark.length > 1 && (
                <h1 className="heading-line-2">{identidade.wordmark[1]}</h1>
              )}
              <h1 className="heading-line-3">{paginas.sobre.heroLinha3}</h1>
            </Copy>
          </div>

          <div className="hero-image">
            <img src={imagens.aboutHero} alt={identidade.nome} />
          </div>
        </div>
      </section>

      <section className="sobre-info">
        <div className="container">
          <Copy>
            <p className="mono">{paginas.sobre.kicker}</p>
            <h3>{paginas.sobre.paragrafos[0]}</h3>
            <h3>
              {paginas.sobre.paragrafos[1]}
              {tem("prova") &&
                ` ${prova.numAvaliacoes} avaliações no Google, com média de ${prova.nota} em 5.`}
            </h3>
            <h3>{paginas.sobre.paragrafos[2]}</h3>
          </Copy>
        </div>
      </section>

      <StickyCards />
    </>
  );
}
