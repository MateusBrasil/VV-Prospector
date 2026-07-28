"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/animacao-texto-13
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import gsap from "gsap";
  //   import { ScrollTrigger } from "gsap/ScrollTrigger";
  //   import Lenis from "lenis";
  //   
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   const lenis = new Lenis({ infinite: true });
  //   lenis.on("scroll", ScrollTrigger.update);
  //   gsap.ticker.add((time) => lenis.raf(time * 1000));
  //   gsap.ticker.lagSmoothing(0);
  //   
  //   const contactInfo = document.querySelector(".contact-info");
  //   const contactRowMaxGap = window.innerWidth < 1000 ? 5 : 10;
  //   
  //   for (let i = 0; i < 10; i++) {
  //     const clone = contactInfo.cloneNode(true);
  //     contactInfo.parentElement.appendChild(clone);
  //   }
  //   
  //   const contactVisual = document.querySelector(".contact-visual");
  //   const contactRows = document.querySelectorAll(".contact-info-row");
  //   
  //   function getVisualCenter() {
  //     return contactVisual.offsetTop + contactVisual.offsetHeight / 2;
  //   }
  //   
  //   contactRows.forEach((row) => {
  //     ScrollTrigger.create({
  //       trigger: row,
  //       start: () => `top+=${getVisualCenter() - 550} center`,
  //       end: () => `top+=${getVisualCenter() - 450} center`,
  //       scrub: true,
  //       onUpdate: (self) => {
  //         const gap = 1 + (contactRowMaxGap - 1) * self.progress;
  //         row.style.gap = `${gap}rem`;
  //       },
  //     });
  //   
  //     ScrollTrigger.create({
  //       trigger: row,
  //       start: () => `top+=${getVisualCenter() - 400} center`,
  //       end: () => `top+=${getVisualCenter() - 300} center`,
  //       scrub: true,
  //       onUpdate: (self) => {
  //         const gap = contactRowMaxGap - (contactRowMaxGap - 1) * self.progress;
  //         row.style.gap = `${gap}rem`;
  //       },
  //     });
  //   });
  //   
  //   const contactIcon = document.querySelector(".contact-icon img");
  //   
  //   let currentIconIndex = 1;
  //   let lastCenteredRow = null;
  //   
  //   lenis.on("scroll", () => {
  //     const viewportCenter = window.innerHeight / 2;
  //   
  //     let closestRow = null;
  //     let minDistance = Infinity;
  //   
  //     contactRows.forEach((row) => {
  //       const rect = row.getBoundingClientRect();
  //       const rowCenter = rect.top + rect.height / 2;
  //       const distance = Math.abs(rowCenter - viewportCenter);
  //   
  //       if (distance < minDistance && distance < 25) {
  //         minDistance = distance;
  //         closestRow = row;
  //       }
  //     });
  //   
  //     if (closestRow && closestRow !== lastCenteredRow) {
  //       lastCenteredRow = closestRow;
  //       currentIconIndex = (currentIconIndex % 7) + 1;
  //       contactIcon.src = `/icon_${currentIconIndex}.png`;
  //     }
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-txt-animacao-texto-13" ref={raiz}>
      <section className="contact-visual">
            <div className="contact-icon">
              <img src={s.imagem} alt="" />
            </div>
          </section>
          <section className="contact-info">
            <div className="contact-info-row">
              <p>{s.texto}</p>
              <p>{s.texto2}</p>
            </div>
            <div className="contact-info-row">
              <p>{s.texto3}</p>
              <p>{s.texto4}</p>
            </div>
            <div className="contact-info-row">
              <p>{s.texto5}</p>
              <p>{s.texto6}</p>
            </div>
            <div className="contact-info-row">
              <p>{s.texto7}</p>
              <p>{s.texto8}</p>
            </div>
            <div className="contact-info-row">
              <p>{s.texto9}</p>
              <p>{s.texto10}</p>
            </div>
            <div className="contact-info-row">
              <p>{s.texto11}</p>
              <p>{s.texto12}</p>
            </div>
            <div className="contact-info-row">
              <p>{s.texto13}</p>
              <p>{s.texto14}</p>
            </div>
            <div className="contact-info-row">
              <p>{s.texto15}</p>
              <p>{s.texto16}</p>
            </div>
          </section>
    </section>
  );
}