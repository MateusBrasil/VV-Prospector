"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-98
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
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   // Blog post article — no component-specific boot logic needed.
  //   // The shared /advisora/scripts/scroll-reveal.js reads the [data-reveal]
  //   // attributes and drives the entrance animations via GSAP + ScrollTrigger.
  //   
  //   // Advisora scroll-reveal — CDN-friendly global (gsap + ScrollTrigger from CDN).
  //   // Self-initializes on DOM ready. Ported from src/scripts/scroll-reveal.ts.
  //   // No top-level export (would be a parse-time SyntaxError as a classic <script>).
  //   (function () {
  //     function init() {
  //       if (typeof gsap === "undefined") return;
  //       if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);
  //   
  //       var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       if (prefersReduced || typeof ScrollTrigger === "undefined") {
  //         document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //           el.style.opacity = "1";
  //           el.style.transform = "none";
  //           el.style.filter = "none";
  //         });
  //         return;
  //       }
  //   
  //       document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //         var direction = el.dataset.reveal || "up";
  //         var delayAttr = el.dataset.revealDelay;
  //         var delay = delayAttr ? parseFloat(delayAttr) / 1000 : 0.1;
  //   
  //         var from, to;
  //   
  //         if (direction === "zoom-blur") {
  //           from = { opacity: 0, scale: 1.15, filter: "blur(8px)" };
  //           to = { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out", delay: delay };
  //         } else {
  //           from = { opacity: 0 };
  //           if (direction === "up") from.y = 15;
  //           else if (direction === "down") from.y = -15;
  //           else if (direction === "left") from.x = -15;
  //           else if (direction === "right") from.x = 15;
  //   
  //           to = { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power3.out", delay: delay };
  //         }
  //   
  //         gsap.set(el, from);
  //         ScrollTrigger.create({
  //           trigger: el,
  //           start: "top 90%",
  //           onEnter: function () { gsap.to(el, to); },
  //           once: true,
  //         });
  //       });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="precos-secao-98" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_article">
            <div className="padding-global padding-section-large">
              <div className="content-wrap">
                <div className="container-large">
                  <div className="article_header">
                    <h1 className="text-6xl text-style-pretty" data-reveal="up">{s.titulo}</h1>
                    <div className="article_description" data-reveal="up" data-reveal-delay="150">
                      <div className="text-base">Master the art of budgeting with our comprehensive guide. Learn how to create a budget that works for you, optimize your spending, and achieve your financial goals this year.</div>
                    </div>
                    <div className="article_header-bottom" data-reveal="up" data-reveal-delay="250">
                      <div className="text-base">January 21, 2025</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 4" fill="none" className="article_dot">
                        <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                      </svg>
                      <div className="text-base">Jackson Danian</div>
                    </div>
                  </div>
                </div>
      
                <div className="article_content">
                  <div className="article_visual" data-reveal="zoom-blur" data-reveal-delay="200">
                    <div className="img-wrapper">
                      <img src={s.imagem} loading="eager" fetchpriority="high" decoding="async" alt="The Ultimate Guide to Budgeting in 2024" className="img" />
                    </div>
                  </div>
                  <div className="container-small" data-reveal="up" data-reveal-delay="150">
                    <div className="text-rich-text w-richtext">
                      <p>{s.texto}</p>
      
                      <h3>{s.subtitulo}</h3>
                      <p>{s.texto2}</p>
      
                      <h3>{s.subtitulo2}</h3>
                      <p>{s.texto3}</p>
                      <ul role="list">
                        <li>{s.item}</li>
                        <li>{s.item2}</li>
                        <li>{s.item3}</li>
                      </ul>
      
                      <h3>{s.subtitulo3}</h3>
                      <p>{s.texto4}</p>
      
                      <blockquote>A budget isn't about restricting your life. It's about deciding where your money goes before the month decides for you.</blockquote>
      
                      <h3>{s.subtitulo4}</h3>
                      <p>{s.texto5}</p>
      
                      <p>{s.texto6}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}