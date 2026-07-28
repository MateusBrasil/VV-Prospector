"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-1
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
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const sections = gsap.utils.toArray('.double');
  //   
  //     sections.forEach((section) => {
  //       const firstImage = section.querySelector('.image-container:first-child');
  //       const secondImage = section.querySelector('.image-container:last-child');
  //       const reversed = section.dataset.reversed === 'true';
  //   
  //       let rafId = null;
  //       let xPercent = reversed ? 100 : 0;
  //       let currentXPercent = reversed ? 100 : 0;
  //       const speed = 0.15;
  //   
  //       const animateWidths = () => {
  //         const delta = xPercent - currentXPercent;
  //         currentXPercent = currentXPercent + delta * speed;
  //   
  //         const firstWidth = 66.66 - currentXPercent * 0.33;
  //         const secondWidth = 33.33 + currentXPercent * 0.33;
  //   
  //         firstImage.style.width = `${firstWidth}%`;
  //         secondImage.style.width = `${secondWidth}%`;
  //   
  //         if (Math.round(currentXPercent) === Math.round(xPercent)) {
  //           cancelAnimationFrame(rafId);
  //           rafId = null;
  //         } else {
  //           rafId = requestAnimationFrame(animateWidths);
  //         }
  //       };
  //   
  //       section.addEventListener('mousemove', (event) => {
  //         const clientX = event.clientX;
  //         xPercent = (clientX / window.innerWidth) * 100;
  //   
  //         if (!rafId) {
  //           rafId = requestAnimationFrame(animateWidths);
  //         }
  //       });
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-1" ref={raiz}>
      <main className="main">
          <h1>{s.titulo}</h1>
      
          <div className="gallery">
            <section className="double" data-reversed="false">
              <article className="image-container">
                <div className="stretchy-wrapper">
                  <img src={s.imagem} alt="Google Pixel Creator Labs" />
                </div>
                <div className="body">
                  <h3>{s.subtitulo}</h3>
                  <p>{s.texto}</p>
                  <p>2023</p>
                </div>
              </article>
      
              <article className="image-container">
                <div className="stretchy-wrapper">
                  <img src={s.imagem2} alt="Decimal" />
                </div>
                <div className="body">
                  <h3>{s.subtitulo2}</h3>
                  <p>{s.texto2}</p>
                  <p>2023</p>
                </div>
              </article>
            </section>
      
            <section className="double" data-reversed="true">
              <article className="image-container">
                <div className="stretchy-wrapper">
                  <img src={s.imagem3} alt="MAVEN 11" />
                </div>
                <div className="body">
                  <h3>{s.subtitulo3}</h3>
                  <p>{s.texto3}</p>
                  <p>2022</p>
                </div>
              </article>
      
              <article className="image-container">
                <div className="stretchy-wrapper">
                  <img src={s.imagem4} alt="Wix Playground Homepage" />
                </div>
                <div className="body">
                  <h3>{s.subtitulo4}</h3>
                  <p>{s.texto4}</p>
                  <p>2022</p>
                </div>
              </article>
            </section>
      
            <section className="double" data-reversed="false">
              <article className="image-container">
                <div className="stretchy-wrapper">
                  <img src={s.imagem5} alt="POWELL—STUDIO" />
                </div>
                <div className="body">
                  <h3>{s.subtitulo5}</h3>
                  <p>{s.texto5}</p>
                  <p>2023</p>
                </div>
              </article>
      
              <article className="image-container">
                <div className="stretchy-wrapper">
                  <img src={s.imagem6} alt="ROCKETPANDA" />
                </div>
                <div className="body">
                  <h3>{s.subtitulo6}</h3>
                  <p>{s.texto6}</p>
                  <p>2022</p>
                </div>
              </article>
            </section>
      
            <section className="double" data-reversed="true">
              <article className="image-container">
                <div className="stretchy-wrapper">
                  <img src={s.imagem7} alt="C2 Montreal" />
                </div>
                <div className="body">
                  <h3>{s.subtitulo7}</h3>
                  <p>{s.texto7}</p>
                  <p>2021</p>
                </div>
              </article>
      
              <article className="image-container">
                <div className="stretchy-wrapper">
                  <img src={s.imagem8} alt="Design Is Funny" />
                </div>
                <div className="body">
                  <h3>{s.subtitulo8}</h3>
                  <p>{s.texto8}</p>
                  <p>2020</p>
                </div>
              </article>
            </section>
          </div>
        </main>
    </section>
  );
}