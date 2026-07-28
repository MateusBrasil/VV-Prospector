"use client";

/* Saiu daqui: o array CARDS inteiro (título, descrição e foto de cada ficha).
 * Se blocos.stickyCards não vier preenchido, a secção inteira desaparece. */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { blocos, tem } from "@/theme/content";

import "./StickyCards.css";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 1000;

const StickyCards = () => {
  const CARDS = blocos.stickyCards ?? [];
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    // GUARDA QUE FALTAVA (mesmo defeito do Testimonials, achado num cliente real sem
    // `blocos.stickyCards`): sem isto, `section` é `null` quando a secção é omitida, e
    // `section.querySelectorAll` dentro de `buildScrollAnimation` rebenta a hidratação
    // da página inteira, não só desta secção.
    if (!section) return;
    let ctx;

    const buildScrollAnimation = () => {
      if (ctx) ctx.revert();

      const cardElements = section.querySelectorAll(".sticky-card");
      cardElements.forEach((card) => gsap.set(card, { clearProps: "all" }));

      if (window.innerWidth < MOBILE_BREAKPOINT) {
        section.classList.add("sticky-cards-mobile");
        return;
      }

      section.classList.remove("sticky-cards-mobile");

      requestAnimationFrame(() => {
        ctx = gsap.context(() => {
          const cards = gsap.utils.toArray(".sticky-card");
          const totalCards = cards.length;

          const lastLeftColumnIndex =
            totalCards % 2 === 0 ? totalCards - 2 : totalCards - 1;
          const lastRightColumnIndex =
            totalCards % 2 === 0 ? totalCards - 1 : totalCards - 2;

          cards.forEach((card, index) => {
            const isLastInColumn =
              index === lastLeftColumnIndex || index === lastRightColumnIndex;
            if (isLastInColumn) return;

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: card,
                  start: "bottom top",
                  end: "+=100%",
                  scrub: true,
                },
              })
              .to(card, {
                yPercent: -100,
                ease: "none",
              });
          });

          ScrollTrigger.refresh();
        }, sectionRef);
      });
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

  if (!tem("blocos.stickyCards")) return null;

  return (
    <div className="sticky-cards" ref={sectionRef}>
      {CARDS.map((card, index) => (
        <div className="sticky-card" key={index}>
          <div className="sticky-card-img">
            <img src={card.imagem} alt={card.titulo} />
          </div>
          <h3>{card.titulo}</h3>
          <p>{card.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
