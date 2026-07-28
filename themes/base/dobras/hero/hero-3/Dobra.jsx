"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-3
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   const INTRO_IMAGES_COUNT = 6;
  //   const INTRO_END_DELAY_SEC = 0.35 + (INTRO_IMAGES_COUNT - 1) * 0.25 + 1 + 1;
  //   
  //   function splitWords(element) {
  //     const raw = element.textContent.trim();
  //     element.textContent = "";
  //     const words = raw.split(/\s+/);
  //     const nodes = [];
  //   
  //     words.forEach((word, index) => {
  //       const mask = document.createElement("span");
  //       mask.className = "word-mask";
  //   
  //       const inner = document.createElement("span");
  //       inner.className = "word";
  //       inner.textContent = word;
  //   
  //       mask.appendChild(inner);
  //       element.appendChild(mask);
  //       nodes.push(inner);
  //   
  //       if (index < words.length - 1) {
  //         const space = document.createElement("span");
  //         space.className = "word-space";
  //         element.appendChild(space);
  //       }
  //     });
  //   
  //     return nodes;
  //   }
  //   
  //   document.addEventListener("DOMContentLoaded", () => {
  //     const images = gsap.utils.toArray(".intro-image");
  //     const frame = document.getElementById("js-frame");
  //     const radial = document.getElementById("js-radial");
  //     const logo = document.getElementById("js-logo");
  //     const hero = document.getElementById("js-hero");
  //   
  //     const logoWords = splitWords(logo);
  //     const heroWords = splitWords(hero);
  //   
  //     gsap.set(logo, { opacity: 1 });
  //     gsap.set(hero, { opacity: 1 });
  //     gsap.set(logoWords, { yPercent: 110, opacity: 0 });
  //     gsap.set(heroWords, { yPercent: 110, opacity: 0 });
  //     gsap.set(images, { clipPath: "inset(0% 0% 100% 0%)" });
  //   
  //     const introTl = gsap.timeline();
  //   
  //     introTl.to(images, {
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       duration: 1,
  //       delay: 0.35,
  //       stagger: { each: 0.25, ease: "power1.out" }
  //     });
  //   
  //     introTl.to(frame, {
  //       width: "100%",
  //       height: "100dvh",
  //       maxWidth: "none",
  //       aspectRatio: "unset",
  //       margin: 0,
  //       duration: 1,
  //       ease: "power3.inOut"
  //     });
  //   
  //     introTl.to(
  //       radial,
  //       {
  //         opacity: 1,
  //         duration: 0.85,
  //         ease: "power2.out"
  //       },
  //       ">"
  //     );
  //   
  //     gsap.to(logoWords, {
  //       yPercent: 0,
  //       opacity: 1,
  //       duration: 0.75,
  //       ease: "power3.out",
  //       stagger: 0.05,
  //       delay: 0.6
  //     });
  //   
  //     gsap.to(heroWords, {
  //       yPercent: 0,
  //       opacity: 1,
  //       duration: 0.95,
  //       ease: "power3.out",
  //       stagger: 0.075,
  //       delay: INTRO_END_DELAY_SEC
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-3" ref={raiz}>
      <main className="page">
          <section className="intro">
            <div className="intro-frame" id="js-frame">
              <img src={s.imagem} alt="" className="intro-image" />
              <img src={s.imagem2} alt="" className="intro-image" />
              <img src={s.imagem3} alt="" className="intro-image" />
              <img src={s.imagem4} alt="" className="intro-image" />
              <img src={s.imagem5} alt="" className="intro-image" />
              <img src={s.imagem6} alt="" className="intro-image" />
              <div className="intro-radial" id="js-radial" aria-hidden="true"></div>
            </div>
          </section>
      
          <div className="logo">
            <p id="js-logo">{s.texto}</p>
          </div>
      
          <div className="hero-copy">
            <h1 id="js-hero">{s.titulo}</h1>
          </div>
        </main>
    </section>
  );
}