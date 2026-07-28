"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-20/cinematic-loader-entrance/dist
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    ﻿gsap.from(".clip-top, .clip-bottom", 2, { delay: 1, height: "50vh", ease: "power4.inOut", }); gsap.to(".marquee", 3.5, { delay: 0.75, top: "50%", ease: "power4.inOut", }); gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, { delay: 1, left: "100%", ease: "power3.inOut", }); gsap.from(".clip-center .marquee", 4.5, { delay: 1, opacity: 0.9, left: "-100%", ease: "power3.inOut", }); gsap.to(".clip-top", 2, { delay: 6, clipPath: "inset(0 0 100% 0)", ease: "power4.inOut", }); gsap.to(".clip-bottom", 2, { delay: 6, clipPath: "inset(100% 0 0 0)", ease: "power4.inOut", }); gsap.to( ".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", 1, { backgroundColor: "transparent", delay: 6, opacity: 0, ease: "power2.inOut", } ); gsap.to( ".loader ", 1, { backgroundColor: "transparent", delay: 7, opacity: 0, ease: "power2.inOut", } ); gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", 1, { backgroundColor: "transparent", delay: 7, opacity: 0, ease: "power2.inOut", onComplete: function() { raiz.current.querySelector(".loader").style.display = "none"; } });
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-20" ref={raiz}>
      <link href={s.destino || '#'} rel="stylesheet" />
      
      <div className="wrapper">
        <div className="loader">
          <div className="loader-clip clip-top">
            <div className="marquee">
              <div className="marquee-container">
                <span>{s.rotulo}</span><span>{s.rotulo2}</span><span>{s.rotulo3}</span>
                <span>{s.rotulo4}</span><span>{s.rotulo5}</span><span>{s.rotulo6}</span>
                <span>{s.rotulo7}</span><span>{s.rotulo8}</span><span>{s.rotulo9}</span>
              </div>
            </div>
          </div>
      
          <div className="loader-clip clip-bottom">
            <div className="marquee">
              <div className="marquee-container">
                <span>{s.rotulo10}</span><span>{s.rotulo11}</span><span>{s.rotulo12}</span>
                <span>{s.rotulo13}</span><span>{s.rotulo14}</span><span>{s.rotulo15}</span>
                <span>{s.rotulo16}</span><span>{s.rotulo17}</span><span>{s.rotulo18}</span>
              </div>
            </div>
          </div>
      
          <div className="clip-center">
            <div className="marquee">
              <div className="marquee-container">
                <span>{s.rotulo19}</span><span>{s.rotulo20}</span><span>{s.rotulo21}</span>
                <span>{s.rotulo22}</span><span>{s.rotulo23}</span><span>{s.rotulo24}</span>
                <span>{s.rotulo25}</span><span>{s.rotulo26}</span><span>{s.rotulo27}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div  className="text">EAGLE</div>
    </section>
  );
}