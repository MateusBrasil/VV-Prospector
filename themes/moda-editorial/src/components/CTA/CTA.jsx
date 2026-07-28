"use client";

/* Saiu daqui: o kicker, o título, a morada e os horários (agora morada/horarios,
 * partilhados com o resto do tema), o label do botão e a imagem/alt. Bloco inteiro
 * desaparece se blocos.cta faltar. */

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Copy from "@/components/Copy/Copy";
import { blocos, contactos, horarios, identidade, imagens, morada, tem } from "@/theme/content";

import "./CTA.css";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const circleButtonRef = useRef(null);
  const circlePathRef = useRef(null);

  /* svg circle stroke reveal + image entrance on scroll */
  useEffect(() => {
    const section = sectionRef.current;
    const circlePath = circlePathRef.current;
    if (!section || !circlePath) return;

    const pathLength = circlePath.getTotalLength();
    const image = section.querySelector(".cta-image");

    gsap.set(circlePath, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      rotation: -90,
      transformOrigin: "center center",
    });

    gsap.set(image, { autoAlpha: 0, scale: 0.75 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(circlePath, {
          strokeDashoffset: 0,
          duration: 1.2,
          delay: 0.6,
          ease: "power2.inOut",
        });

        gsap.to(image, {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        });
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  /* svg circle stroke hover animation */
  useEffect(() => {
    const button = circleButtonRef.current;
    const circlePath = circlePathRef.current;
    if (!button || !circlePath) return;

    const pathLength = circlePath.getTotalLength();
    let hoverTimeline = null;

    const handleMouseEnter = () => {
      if (hoverTimeline) hoverTimeline.kill();

      hoverTimeline = gsap.timeline();
      hoverTimeline
        .set(circlePath, {
          strokeDashoffset: 0,
          strokeDasharray: pathLength,
          scale: 1,
        })
        .to(circlePath, {
          strokeDashoffset: -pathLength,
          duration: 0.75,
          ease: "power2.inOut",
        })
        .set(circlePath, {
          strokeDashoffset: pathLength,
        })
        .to(circlePath, {
          strokeDashoffset: 0,
          duration: 0.75,
          ease: "power2.inOut",
        });
    };

    button.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      if (hoverTimeline) hoverTimeline.kill();
    };
  }, []);

  if (!tem("blocos.cta")) return null;

  return (
    <section className="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta-content">
          <Copy type="lines" animateOnScroll trigger=".cta" start="top 80%">
            <h6>{blocos.cta.kicker}</h6>
          </Copy>

          <Copy type="lines" animateOnScroll trigger=".cta" start="top 80%">
            <h5>{blocos.cta.titulo}</h5>
          </Copy>

          <div className="cta-details">
            <div className="cta-address">
              <Copy
                type="lines"
                animateOnScroll
                trigger=".cta"
                start="top 80%"
                delay={0.3}
              >
                {morada.linhas.map((linha) => (
                  <p className="mono" key={linha}>
                    {linha}
                  </p>
                ))}
              </Copy>
            </div>
            {tem("horarios") && (
              <div className="cta-hours">
                <Copy
                  type="lines"
                  animateOnScroll
                  trigger=".cta"
                  start="top 80%"
                  delay={0.3}
                >
                  {horarios.linhas.map((linha) => (
                    <p className="mono" key={linha}>
                      {linha}
                    </p>
                  ))}
                </Copy>
              </div>
            )}
          </div>

          <div className="cta-circle-button" ref={circleButtonRef}>
            {/* DEFEITO CORRIGIDO: isto era `href="#"` no template de origem, e assim seguiu
                para produção no site aprovado. Num restaurante, é o botão de reserva a não
                levar a lado nenhum, repetido em todas as páginas. Foi o passe visual que o
                apanhou (V12 link-morto); a olho, ninguém clica no próprio site que fez.
                `reservaUrl` é derivado pelo schema: WhatsApp se existir, senão o telefone. */}
            <a href={blocos.cta?.href || contactos.reservaUrl} className="cta-button">
              <svg
                className="cta-button-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path
                  ref={circlePathRef}
                  d="M50,10 A40,40 0 1,1 49.9999,10"
                  stroke="currentColor"
                  strokeWidth="0.75"
                  fill="none"
                />
              </svg>
              <Copy
                type="lines"
                animateOnScroll
                trigger=".cta"
                start="top 80%"
                delay={0.5}
              >
                <span>{blocos.cta.botao}</span>
              </Copy>
            </a>
          </div>
        </div>

        <div className="cta-image">
          {/* "Sala do X" era vocabulário de restaurante cravado num componente partilhado
              entre nichos: numa loja de roupa, "Sala do Vaninha Fashion" não faz sentido. */}
          <img src={imagens.ctaImagem} alt={identidade.nome} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
