"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-77
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
  //   // clayo-about-section — no section-specific behavior.
  //   // Scroll reveals (heading, copy, image-zoom cells, stat cards) are wired by the
  //   // shared /clayo/scripts/scroll-reveal.js, which reads the data-reveal hooks
  //   // (data-reveal, data-reveal-img, data-reveal-y) and self-initializes on DOM ready.
  //   
  //   // Scroll-reveal — Phase 5 Stage B, source-faithful (v3, data-driven).
  //   //
  //   // The shared Webflow "View" reveal preset is identical everywhere:
  //   //   initial : opacity 0, translate3d(0, 15%, 0)   (15% = percent of element HEIGHT)
  //   //   to      : opacity 1, y 0
  //   //   duration: 700 ms, easing outQuart -> power3.out
  //   //   trigger : SCROLL_INTO_VIEW at 10% in-view -> ScrollTrigger start "top 90%", once
  //   // Presets differ ONLY by transition delay (0.1 / 0.2 / 0.3 / 0.4 s).
  //   //
  //   // Opt-in per element via data attributes:
  //   //   data-reveal            -> reveal with default 0.1s delay
  //   //   data-reveal="0.2"      -> reveal with explicit delay (seconds)
  //   //   data-reveal-y="30"     -> override the rise distance (yPercent; default 15)
  //   //   data-reveal-start="top 100%" -> override ScrollTrigger start
  //   //
  //   // Images do NOT animate in the source (except .footer_logo, which is tagged).
  //   // Respects prefers-reduced-motion. gsap and ScrollTrigger are globals (loaded via CDN).
  //   
  //   (function () {
  //     gsap.registerPlugin(ScrollTrigger);
  //   
  //     function init() {
  //       const els = gsap.utils.toArray("[data-reveal]");
  //       if (!els.length) return;
  //   
  //       const mm = gsap.matchMedia();
  //   
  //       mm.add("(prefers-reduced-motion: no-preference)", () => {
  //         els.forEach((el) => {
  //           const delayAttr = el.getAttribute("data-reveal");
  //           const delay = delayAttr && delayAttr.trim() !== "" ? parseFloat(delayAttr) : 0.1;
  //           const start = el.getAttribute("data-reveal-start") || "top 90%";
  //           const trigger = { trigger: el, start, once: true };
  //           const dur = 0.7;
  //           const ease = "power3.out";
  //           const d = Number.isFinite(delay) ? delay : 0.1;
  //   
  //           if (el.hasAttribute("data-reveal-img")) {
  //             // Image mode = Webflow "Image zoom out" preset (actionList a-78): scale 1.5→1
  //             // + de-blur 5px→0, NO opacity, NO move. delay 0, duration 1200ms, power3.out.
  //             gsap.set(el, { scale: 1.5, filter: "blur(5px)" });
  //             gsap.to(el, { scale: 1, filter: "blur(0px)", duration: 1.2, delay: 0, ease, scrollTrigger: trigger });
  //             return;
  //           }
  //   
  //           // Standard mode: opacity + rise. data-reveal-y="0" → opacity-only.
  //           const yAttr = el.getAttribute("data-reveal-y");
  //           const yFrom = yAttr && yAttr.trim() !== "" ? parseFloat(yAttr) : 15;
  //           gsap.set(el, { opacity: 0, yPercent: Number.isFinite(yFrom) ? yFrom : 15 });
  //           gsap.to(el, {
  //             opacity: 1,
  //             yPercent: 0,
  //             duration: dur,
  //             delay: d,
  //             ease,
  //             scrollTrigger: trigger,
  //           });
  //         });
  //   
  //         ScrollTrigger.refresh();
  //   
  //         return () => {
  //           // reduced-motion toggle cleanup: clear any inline props we set
  //           gsap.set(els, { clearProps: "opacity,transform,filter" });
  //         };
  //       });
  //   
  //       // Reduced-motion: no reveal animation. Clear any inline FOUC from-states.
  //       mm.add("(prefers-reduced-motion: reduce)", () => {
  //         gsap.set(els, { clearProps: "opacity,transform,filter" });
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
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-77" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_about">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="content-wrap">
                  <div className="header-content">
                    <h2 data-w-id="ef8f07be-b0ec-e67c-4c3b-2cc0ea1bccfd" className="text-6xl" data-reveal="0.1">{s.titulo}</h2>
                    <div className="max-width-medium">
                      <div data-w-id="ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd00" className="text-base text-color-secondary" data-reveal="0.1">Our platform managing personal finances or growing your investment portfolio, our system integrates the latest technology to help you make smarter financial decisions with ease.</div>
                    </div>
                  </div>
                  <div className="about_grid">
                    <div id="w-node-ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd03-88febfb7" data-w-id="ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd03" className="about_img">
                      <div className="img-wrapper" data-reveal="0.1" data-reveal-img=""><img sizes="(max-width: 1140px) 100vw, 1140px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Frame-2147226953_1Frame-2147226953.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Frame-2147226953_1Frame-2147226953.webp 800w, https://d173woph5zl366.cloudfront.net/clayo/images/Frame-2147226953_1Frame-2147226953.webp 1080w, https://d173woph5zl366.cloudfront.net/clayo/images/Frame-2147226953_1Frame-2147226953.webp 1140w" alt="" src={s.imagem} loading="lazy" className="img" /></div>
                    </div>
                    <div id="w-node-ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd06-88febfb7" data-w-id="ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd06" className="visual_card-top bg-tertiary" data-reveal="0.1" data-reveal-y="0">
                      <div className="text-5xl">10+</div>
                      <div className="text-sm text-color-alternate">Years of innovation and valuable insights, empowering businesses to thrive in a competitive market.</div>
                    </div>
                    <div id="w-node-ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd0b-88febfb7" data-w-id="ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd0b" className="about_img is-box">
                      <div className="img-wrapper" data-reveal="0.1" data-reveal-img=""><img sizes="(max-width: 554px) 100vw, 554px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Finance-image-three_1Finance-image-three.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Finance-image-three_1.webp 554w" alt="" src={s.imagem2} loading="lazy" className="img" /></div>
                    </div>
                    <div id="w-node-ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd0e-88febfb7" data-w-id="ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd0e" className="visual_card-bottom bg-alternate" data-reveal="0.1" data-reveal-y="0"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 50 50" fill="none" className="icon-1x1-large">
                        <path d="M0 24.7273C0 11.0708 11.0708 0 24.7273 0C38.3838 0 49.4545 11.0708 49.4545 24.7273C49.4545 38.3838 38.3838 49.4545 24.7273 49.4545C11.0708 49.4545 0 38.3838 0 24.7273Z" fill="white" fillOpacity="0.1"></path>
                        <path d="M34.1764 26.3672V27.3672C34.1764 27.6372 33.9664 27.8572 33.6864 27.8672H32.2264C31.6964 27.8672 31.2164 27.4772 31.1764 26.9572C31.1464 26.6472 31.2664 26.3572 31.4664 26.1572C31.6464 25.9672 31.8964 25.8672 32.1664 25.8672H33.6764C33.9664 25.8772 34.1764 26.0972 34.1764 26.3672Z" fill="white"></path>
                        <path d="M30.7158 25.4172C30.2158 25.9072 29.9758 26.6372 30.1758 27.3972C30.4358 28.3272 31.3458 28.9172 32.3058 28.9172H33.1758C33.7258 28.9172 34.1758 29.3672 34.1758 29.9172V30.1072C34.1758 32.1772 32.4858 33.8672 30.4158 33.8672H18.9358C16.8658 33.8672 15.1758 32.1772 15.1758 30.1072V23.3772C15.1758 22.1472 15.7658 21.0572 16.6758 20.3772C17.3058 19.8972 18.0858 19.6172 18.9358 19.6172H30.4158C32.4858 19.6172 34.1758 21.3072 34.1758 23.3772V23.8172C34.1758 24.3672 33.7258 24.8172 33.1758 24.8172H32.1558C31.5958 24.8172 31.0858 25.0372 30.7158 25.4172Z" fill="white"></path>
                        <path d="M28.9256 17.5466C29.1956 17.8166 28.9656 18.2366 28.5856 18.2366L20.9056 18.2266C20.4656 18.2266 20.2356 17.6866 20.5556 17.3766L22.1756 15.7466C23.5456 14.3866 25.7656 14.3866 27.1356 15.7466L28.8856 17.5166C28.8956 17.5266 28.9156 17.5366 28.9256 17.5466Z" fill="white"></path>
                      </svg>
                      <div className="card_wrap">
                        <div className="text-5xl">95%</div>
                        <div className="text-sm text-color-soft-white">Complete customer satisfaction achieved through personalized solutions, proactive support, and a dedication to meeting the unique needs of every client. Our focus on excellence ensures your success at every step.</div>
                      </div>
                    </div>
                    <div id="w-node-ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd18-88febfb7" data-w-id="ef8f07be-b0ec-e67c-4c3b-2cc0ea1bcd18" className="about_img is-box">
                      <div className="img-wrapper" data-reveal="0.1" data-reveal-img=""><img sizes="(max-width: 554px) 100vw, 554px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Frame-2147226954_1Frame-2147226954.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Frame-2147226954_1Frame-2147226954.webp 554w" alt="" src={s.imagem3} loading="lazy" className="img" /></div>
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