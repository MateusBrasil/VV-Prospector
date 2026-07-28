"use client";

/* Saiu daqui: MARQUEE_TEXT (texto do rolo), o "Guimarães" do h1 (agora morada.cidade,
 * derivado) e o "A noite continua" do h3 (blocos.marquee.subtitulo). */

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { blocos, morada, tem } from "@/theme/content";

import "./Marquee.css";

const MARQUEE_REPEAT_COUNT = 12;

const Marquee = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    // GUARDA QUE FALTAVA. Este componente nunca teve a marcação `if (!tem(...)) return null`
    // que os outros blocos opcionais já tinham (CTA, Testimonials, StickyCards, ImageBanner):
    // sem ela, `blocos.marquee.subtitulo` rebentava a render se `blocos.marquee` faltasse.
    // Achado ao construir um segundo tema (moda-editorial) que, corretamente, não preenche
    // esta secção. Nenhum tema hoje deixa de fornecer `blocos.marquee`, mas era questão de
    // tempo até um deixar, e o defeito era do tipo que derruba a página inteira.
    if (!tem("blocos.marquee")) return;
    const items = track.querySelectorAll(".marquee-item");
    if (!items.length) return;

    const itemWidth = items[0].offsetWidth;
    const halfLoopWidth = itemWidth * (MARQUEE_REPEAT_COUNT / 2);

    const scrollTween = gsap.to(track, {
      x: -halfLoopWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfLoopWidth),
      },
    });

    const pill = track.parentElement;

    const handleMouseEnter = () =>
      gsap.to(scrollTween, { timeScale: 0, duration: 0.5 });
    const handleMouseLeave = () =>
      gsap.to(scrollTween, { timeScale: 1, duration: 0.5 });

    pill.addEventListener("mouseenter", handleMouseEnter);
    pill.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      pill.removeEventListener("mouseenter", handleMouseEnter);
      pill.removeEventListener("mouseleave", handleMouseLeave);
      scrollTween.kill();
    };
  }, []);

  // A guarda de RENDER vem depois dos hooks e nunca antes: hooks têm de correr sempre na
  // mesma ordem em todo render, então "return null cedo" tem de vir depois de todos eles,
  // nunca entre eles. É a mesma regra que os outros blocos opcionais já seguiam.
  if (!tem("blocos.marquee")) return null;

  return (
    <section className="marquee">
      <div className="container">
        <div className="marquee-content">
          <h1>{morada.cidade}</h1>
          <h3>{blocos.marquee.subtitulo}</h3>
        </div>

        <div className="marquee-pill">
          <div className="marquee-track" ref={trackRef}>
            {Array.from({ length: MARQUEE_REPEAT_COUNT }, (_, index) => (
              <span className="marquee-item" key={index}>
                {blocos.marquee.texto}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
