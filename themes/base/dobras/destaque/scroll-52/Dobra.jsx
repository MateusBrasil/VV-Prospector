"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-52
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
    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.create({
      trigger: ".ws",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const galleryWrapper = raiz.current.querySelector(".gallery-wrapper");
        const sideCols = raiz.current.querySelectorAll(".col:not(.main)");
        const mainImg = raiz.current.querySelector(".img.main img");
    
        const screenWidth = window.innerWidth;
        const maxScale = screenWidth < 900 ? 4 : 2.65;
    
        const scale = 1 + self.progress * maxScale;
        const yTranslate = self.progress * 300;
        const mainImgScale = 2 - self.progress * 0.85;
    
        galleryWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
    
        sideCols.forEach((col) => {
          col.style.transform = `translateY(${yTranslate}px)`;
        });
    
        mainImg.style.transform = `scale(${mainImgScale})`;
      },
    });
    
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-52" ref={raiz}>
      <section className="sticky">
            <div className="gallery-wrapper">
              <div className="col side-1">
                <div className="img"><img src={s.imagem} alt="" /></div>
                <div className="img"><img src={s.imagem2} alt="" /></div>
                <div className="img"><img src={s.imagem3} alt="" /></div>
              </div>
      
              <div className="col side-2">
                <div className="img"><img src={s.imagem4} alt="" /></div>
                <div className="img"><img src={s.imagem5} alt="" /></div>
                <div className="img"><img src={s.imagem6} alt="" /></div>
              </div>
      
              <div className="col main">
                <div className="img"><img src={s.imagem7} alt="" /></div>
                <div className="img main"><img src={s.imagem8} alt="" /></div>
                <div className="img"><img src={s.imagem9} alt="" /></div>
              </div>
      
              <div className="col side-3">
                <div className="img"><img src={s.imagem10} alt="" /></div>
                <div className="img"><img src={s.imagem11} alt="" /></div>
                <div className="img"><img src={s.imagem12} alt="" /></div>
              </div>
      
              <div className="col side-4">
                <div className="img"><img src={s.imagem13} alt="" /></div>
                <div className="img"><img src={s.imagem14} alt="" /></div>
                <div className="img"><img src={s.imagem15} alt="" /></div>
              </div>
            </div>
          </section>
      
          <div className="container">
            <section className="hero">
              <div className="hero-img">
                <img src={s.imagem16} alt="" />
              </div>
              <div className="header">
                <h1>{s.titulo}</h1>
                <h1>{s.titulo2}</h1>
              </div>
            </section>
      
            <section className="intro">
              <div className="tagline">
                <p>{s.texto}</p>
              </div>
              <div className="divider"></div>
              <div className="intro-header">
                <h1>{s.titulo3}</h1>
                <h1>{s.titulo4}</h1>
              </div>
            </section>
      
            <section className="ws"></section>
      
            <section className="outro">
              <h1>{s.titulo5}</h1>
              <h1>{s.titulo6}</h1>
            </section>
      
            <section className="footer">
              <div className="footer-bg">
                <img src={s.imagem17} alt="" />
              </div>
            </section>
          </div>
    </section>
  );
}