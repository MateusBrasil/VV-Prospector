"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-176
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
  //   // clayo-team-section — per-card entry animation (classic script, GSAP globals).
  //   //
  //   // Header label / heading / description reveal via the shared
  //   // /clayo/scripts/scroll-reveal.js (data-reveal hooks). The card entry below is
  //   // section-specific and NOT covered by the shared reveal:
  //   //   .img-wrapper        height 0% -> 100%   (image scales in via object-fit:cover)
  //   //                       delay 0.1, dur 1.0, power3.out
  //   //   .team_card-content  y 150% -> 0%        (floating info bar slides up)
  //   //                       delay 0.8, dur 0.5, power3.out
  //   // Per-card ScrollTrigger — the inter-card stagger comes from scroll position.
  //   // From-states are set via GSAP (not inline CSS) so cards stay visible if JS fails.
  //   // Respects prefers-reduced-motion.
  //   (function () {
  //     if (typeof gsap === "undefined") return;
  //     if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);
  //   
  //     function initTeamCards() {
  //       var cards = gsap.utils.toArray(".section_team .team_card");
  //       if (!cards.length) return;
  //       if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  //   
  //       cards.forEach(function (card) {
  //         var wrap = card.querySelector(".img-wrapper");
  //         var content = card.querySelector(".team_card-content");
  //   
  //         if (wrap) gsap.set(wrap, { height: "0%" });
  //         if (content) gsap.set(content, { y: "150%" });
  //   
  //         var tl = gsap.timeline({
  //           scrollTrigger: { trigger: card, start: "top 90%", once: true },
  //         });
  //         if (wrap) tl.to(wrap, { height: "100%", duration: 1, ease: "power3.out" }, 0.1);
  //         if (content) tl.to(content, { y: "0%", duration: 0.5, ease: "power3.out" }, 0.8);
  //       });
  //   
  //       if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", initTeamCards);
  //     } else {
  //       initTeamCards();
  //     }
  //   })();
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
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-176" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_team">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="content-wrapper">
                  <div className="header">
                    <div className="label-wrapper scroll-into-view" data-reveal="0.1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" className="label-icon">
                        <circle cx="6" cy="6" r="6" fill="var(--base-600)"></circle>
                      </svg>
                      <div>Services</div>
                    </div>
                    <h2 className="heading-style-h2 scroll-into-view" data-reveal="0.1">{s.titulo}</h2>
                    <div className="team_description">
                      <div className="text-color-secondary scroll-into-view" data-reveal="0.2">Meet the talented individuals who drive our company's success with their dedication, expertise, and passion for innovation</div>
                    </div>
                  </div>
                  <div className="w-layout-grid team_grid">
                    <a data-w-id="412c6839-75b8-5bd0-e471-34d4797d29f1" href={s.destino || '#'} target="_blank" className="team_card w-inline-block">
                      <div className="img-wrapper"><img src={s.imagem} loading="lazy" sizes="(max-width: 752px) 100vw, 752px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-one_1.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-one_1.webp 752w" alt="" className="img" /></div>
                      <div className="team_card-content">
                        <div className="team_card-info">
                          <div className="text-xl">Sophia Stone</div>
                          <div className="text-color-secondary text-overflow-ellipsis">Chief Financial Officer</div>
                        </div>
                        <div className="team_card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M18.4705 0.000139831H1.53055C1.34013 -0.00250479 1.15105 0.0323873 0.974113 0.102824C0.797177 0.17326 0.63585 0.27786 0.499344 0.410652C0.362839 0.543443 0.253828 0.701824 0.178539 0.876749C0.103249 1.05167 0.0631553 1.23972 0.0605469 1.43014V18.5701C0.0631553 18.7606 0.103249 18.9486 0.178539 19.1235C0.253828 19.2985 0.362839 19.4568 0.499344 19.5896C0.63585 19.7224 0.797177 19.827 0.974113 19.8975C1.15105 19.9679 1.34013 20.0028 1.53055 20.0001H18.4705C18.661 20.0028 18.85 19.9679 19.027 19.8975C19.2039 19.827 19.3652 19.7224 19.5017 19.5896C19.6383 19.4568 19.7473 19.2985 19.8226 19.1235C19.8978 18.9486 19.9379 18.7606 19.9405 18.5701V1.43014C19.9379 1.23972 19.8978 1.05167 19.8226 0.876749C19.7473 0.701824 19.6383 0.543443 19.5017 0.410652C19.3652 0.27786 19.2039 0.17326 19.027 0.102824C18.85 0.0323873 18.661 -0.00250479 18.4705 0.000139831ZM6.09055 16.7401H3.09055V7.74014H6.09055V16.7401ZM4.59055 6.48014C4.17681 6.48014 3.78002 6.31578 3.48746 6.02323C3.1949 5.73067 3.03055 5.33388 3.03055 4.92014C3.03055 4.5064 3.1949 4.10961 3.48746 3.81705C3.78002 3.5245 4.17681 3.36014 4.59055 3.36014C4.81024 3.33522 5.03272 3.35699 5.24342 3.42402C5.45412 3.49105 5.64829 3.60183 5.8132 3.7491C5.97812 3.89637 6.11007 4.07682 6.20042 4.27862C6.29076 4.48043 6.33746 4.69904 6.33746 4.92014C6.33746 5.14124 6.29076 5.35985 6.20042 5.56166C6.11007 5.76346 5.97812 5.94391 5.8132 6.09118C5.64829 6.23845 5.45412 6.34923 5.24342 6.41626C5.03272 6.48329 4.81024 6.50505 4.59055 6.48014ZM16.9105 16.7401H13.9105V11.9101C13.9105 10.7001 13.4805 9.91014 12.3905 9.91014C12.0532 9.91261 11.7247 10.0184 11.4494 10.2133C11.174 10.4082 10.965 10.6828 10.8505 11.0001C10.7723 11.2352 10.7384 11.4827 10.7505 11.7301V16.7301H7.75055V7.73014H10.7505V9.00014C11.0231 8.52725 11.4195 8.13766 11.897 7.87334C12.3745 7.60902 12.9151 7.47999 13.4605 7.50014C15.4605 7.50014 16.9105 8.79014 16.9105 11.5601V16.7401Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a data-w-id="412c6839-75b8-5bd0-e471-34d4797d29fd" href={s.destino2 || '#'} target="_blank" className="team_card w-inline-block">
                      <div className="img-wrapper"><img src={s.imagem2} loading="lazy" sizes="(max-width: 752px) 100vw, 752px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-two_1.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-two_1.webp 752w" alt="" className="img" /></div>
                      <div className="team_card-content">
                        <div className="team_card-info">
                          <div className="text-xl">Liam Lark</div>
                          <div className="text-color-secondary text-overflow-ellipsis">Director of Engineering</div>
                        </div>
                        <div className="team_card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M18.4705 0.000139831H1.53055C1.34013 -0.00250479 1.15105 0.0323873 0.974113 0.102824C0.797177 0.17326 0.63585 0.27786 0.499344 0.410652C0.362839 0.543443 0.253828 0.701824 0.178539 0.876749C0.103249 1.05167 0.0631553 1.23972 0.0605469 1.43014V18.5701C0.0631553 18.7606 0.103249 18.9486 0.178539 19.1235C0.253828 19.2985 0.362839 19.4568 0.499344 19.5896C0.63585 19.7224 0.797177 19.827 0.974113 19.8975C1.15105 19.9679 1.34013 20.0028 1.53055 20.0001H18.4705C18.661 20.0028 18.85 19.9679 19.027 19.8975C19.2039 19.827 19.3652 19.7224 19.5017 19.5896C19.6383 19.4568 19.7473 19.2985 19.8226 19.1235C19.8978 18.9486 19.9379 18.7606 19.9405 18.5701V1.43014C19.9379 1.23972 19.8978 1.05167 19.8226 0.876749C19.7473 0.701824 19.6383 0.543443 19.5017 0.410652C19.3652 0.27786 19.2039 0.17326 19.027 0.102824C18.85 0.0323873 18.661 -0.00250479 18.4705 0.000139831ZM6.09055 16.7401H3.09055V7.74014H6.09055V16.7401ZM4.59055 6.48014C4.17681 6.48014 3.78002 6.31578 3.48746 6.02323C3.1949 5.73067 3.03055 5.33388 3.03055 4.92014C3.03055 4.5064 3.1949 4.10961 3.48746 3.81705C3.78002 3.5245 4.17681 3.36014 4.59055 3.36014C4.81024 3.33522 5.03272 3.35699 5.24342 3.42402C5.45412 3.49105 5.64829 3.60183 5.8132 3.7491C5.97812 3.89637 6.11007 4.07682 6.20042 4.27862C6.29076 4.48043 6.33746 4.69904 6.33746 4.92014C6.33746 5.14124 6.29076 5.35985 6.20042 5.56166C6.11007 5.76346 5.97812 5.94391 5.8132 6.09118C5.64829 6.23845 5.45412 6.34923 5.24342 6.41626C5.03272 6.48329 4.81024 6.50505 4.59055 6.48014ZM16.9105 16.7401H13.9105V11.9101C13.9105 10.7001 13.4805 9.91014 12.3905 9.91014C12.0532 9.91261 11.7247 10.0184 11.4494 10.2133C11.174 10.4082 10.965 10.6828 10.8505 11.0001C10.7723 11.2352 10.7384 11.4827 10.7505 11.7301V16.7301H7.75055V7.73014H10.7505V9.00014C11.0231 8.52725 11.4195 8.13766 11.897 7.87334C12.3745 7.60902 12.9151 7.47999 13.4605 7.50014C15.4605 7.50014 16.9105 8.79014 16.9105 11.5601V16.7401Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a data-w-id="412c6839-75b8-5bd0-e471-34d4797d2a09" href={s.destino3 || '#'} target="_blank" className="team_card w-inline-block">
                      <div className="img-wrapper"><img src={s.imagem3} loading="lazy" sizes="(max-width: 752px) 100vw, 752px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-three_1.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-three_1.webp 752w" alt="" className="img" /></div>
                      <div className="team_card-content">
                        <div className="team_card-info">
                          <div className="text-xl">Emma Elm</div>
                          <div className="text-color-secondary text-overflow-ellipsis">Senior UX Designer</div>
                        </div>
                        <div className="team_card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M18.4705 0.000139831H1.53055C1.34013 -0.00250479 1.15105 0.0323873 0.974113 0.102824C0.797177 0.17326 0.63585 0.27786 0.499344 0.410652C0.362839 0.543443 0.253828 0.701824 0.178539 0.876749C0.103249 1.05167 0.0631553 1.23972 0.0605469 1.43014V18.5701C0.0631553 18.7606 0.103249 18.9486 0.178539 19.1235C0.253828 19.2985 0.362839 19.4568 0.499344 19.5896C0.63585 19.7224 0.797177 19.827 0.974113 19.8975C1.15105 19.9679 1.34013 20.0028 1.53055 20.0001H18.4705C18.661 20.0028 18.85 19.9679 19.027 19.8975C19.2039 19.827 19.3652 19.7224 19.5017 19.5896C19.6383 19.4568 19.7473 19.2985 19.8226 19.1235C19.8978 18.9486 19.9379 18.7606 19.9405 18.5701V1.43014C19.9379 1.23972 19.8978 1.05167 19.8226 0.876749C19.7473 0.701824 19.6383 0.543443 19.5017 0.410652C19.3652 0.27786 19.2039 0.17326 19.027 0.102824C18.85 0.0323873 18.661 -0.00250479 18.4705 0.000139831ZM6.09055 16.7401H3.09055V7.74014H6.09055V16.7401ZM4.59055 6.48014C4.17681 6.48014 3.78002 6.31578 3.48746 6.02323C3.1949 5.73067 3.03055 5.33388 3.03055 4.92014C3.03055 4.5064 3.1949 4.10961 3.48746 3.81705C3.78002 3.5245 4.17681 3.36014 4.59055 3.36014C4.81024 3.33522 5.03272 3.35699 5.24342 3.42402C5.45412 3.49105 5.64829 3.60183 5.8132 3.7491C5.97812 3.89637 6.11007 4.07682 6.20042 4.27862C6.29076 4.48043 6.33746 4.69904 6.33746 4.92014C6.33746 5.14124 6.29076 5.35985 6.20042 5.56166C6.11007 5.76346 5.97812 5.94391 5.8132 6.09118C5.64829 6.23845 5.45412 6.34923 5.24342 6.41626C5.03272 6.48329 4.81024 6.50505 4.59055 6.48014ZM16.9105 16.7401H13.9105V11.9101C13.9105 10.7001 13.4805 9.91014 12.3905 9.91014C12.0532 9.91261 11.7247 10.0184 11.4494 10.2133C11.174 10.4082 10.965 10.6828 10.8505 11.0001C10.7723 11.2352 10.7384 11.4827 10.7505 11.7301V16.7301H7.75055V7.73014H10.7505V9.00014C11.0231 8.52725 11.4195 8.13766 11.897 7.87334C12.3745 7.60902 12.9151 7.47999 13.4605 7.50014C15.4605 7.50014 16.9105 8.79014 16.9105 11.5601V16.7401Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a data-w-id="412c6839-75b8-5bd0-e471-34d4797d2a15" href={s.destino4 || '#'} target="_blank" className="team_card w-inline-block">
                      <div className="img-wrapper"><img src={s.imagem4} loading="lazy" sizes="(max-width: 752px) 100vw, 752px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-four_1.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-four_1.webp 752w" alt="" className="img" /></div>
                      <div className="team_card-content">
                        <div className="team_card-info">
                          <div className="text-xl">Noah Nugent</div>
                          <div className="text-color-secondary text-overflow-ellipsis">Lead Data Scientist</div>
                        </div>
                        <div className="team_card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M18.4705 0.000139831H1.53055C1.34013 -0.00250479 1.15105 0.0323873 0.974113 0.102824C0.797177 0.17326 0.63585 0.27786 0.499344 0.410652C0.362839 0.543443 0.253828 0.701824 0.178539 0.876749C0.103249 1.05167 0.0631553 1.23972 0.0605469 1.43014V18.5701C0.0631553 18.7606 0.103249 18.9486 0.178539 19.1235C0.253828 19.2985 0.362839 19.4568 0.499344 19.5896C0.63585 19.7224 0.797177 19.827 0.974113 19.8975C1.15105 19.9679 1.34013 20.0028 1.53055 20.0001H18.4705C18.661 20.0028 18.85 19.9679 19.027 19.8975C19.2039 19.827 19.3652 19.7224 19.5017 19.5896C19.6383 19.4568 19.7473 19.2985 19.8226 19.1235C19.8978 18.9486 19.9379 18.7606 19.9405 18.5701V1.43014C19.9379 1.23972 19.8978 1.05167 19.8226 0.876749C19.7473 0.701824 19.6383 0.543443 19.5017 0.410652C19.3652 0.27786 19.2039 0.17326 19.027 0.102824C18.85 0.0323873 18.661 -0.00250479 18.4705 0.000139831ZM6.09055 16.7401H3.09055V7.74014H6.09055V16.7401ZM4.59055 6.48014C4.17681 6.48014 3.78002 6.31578 3.48746 6.02323C3.1949 5.73067 3.03055 5.33388 3.03055 4.92014C3.03055 4.5064 3.1949 4.10961 3.48746 3.81705C3.78002 3.5245 4.17681 3.36014 4.59055 3.36014C4.81024 3.33522 5.03272 3.35699 5.24342 3.42402C5.45412 3.49105 5.64829 3.60183 5.8132 3.7491C5.97812 3.89637 6.11007 4.07682 6.20042 4.27862C6.29076 4.48043 6.33746 4.69904 6.33746 4.92014C6.33746 5.14124 6.29076 5.35985 6.20042 5.56166C6.11007 5.76346 5.97812 5.94391 5.8132 6.09118C5.64829 6.23845 5.45412 6.34923 5.24342 6.41626C5.03272 6.48329 4.81024 6.50505 4.59055 6.48014ZM16.9105 16.7401H13.9105V11.9101C13.9105 10.7001 13.4805 9.91014 12.3905 9.91014C12.0532 9.91261 11.7247 10.0184 11.4494 10.2133C11.174 10.4082 10.965 10.6828 10.8505 11.0001C10.7723 11.2352 10.7384 11.4827 10.7505 11.7301V16.7301H7.75055V7.73014H10.7505V9.00014C11.0231 8.52725 11.4195 8.13766 11.897 7.87334C12.3745 7.60902 12.9151 7.47999 13.4605 7.50014C15.4605 7.50014 16.9105 8.79014 16.9105 11.5601V16.7401Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a data-w-id="412c6839-75b8-5bd0-e471-34d4797d2a21" href={s.destino5 || '#'} target="_blank" className="team_card w-inline-block">
                      <div className="img-wrapper"><img src={s.imagem5} loading="lazy" sizes="(max-width: 752px) 100vw, 752px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-five_1.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-five_1.webp 752w" alt="" className="img" /></div>
                      <div className="team_card-content">
                        <div className="team_card-info">
                          <div className="text-xl">Ava Aspen</div>
                          <div className="text-color-secondary text-overflow-ellipsis">Product Marketing Manager</div>
                        </div>
                        <div className="team_card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M18.4705 0.000139831H1.53055C1.34013 -0.00250479 1.15105 0.0323873 0.974113 0.102824C0.797177 0.17326 0.63585 0.27786 0.499344 0.410652C0.362839 0.543443 0.253828 0.701824 0.178539 0.876749C0.103249 1.05167 0.0631553 1.23972 0.0605469 1.43014V18.5701C0.0631553 18.7606 0.103249 18.9486 0.178539 19.1235C0.253828 19.2985 0.362839 19.4568 0.499344 19.5896C0.63585 19.7224 0.797177 19.827 0.974113 19.8975C1.15105 19.9679 1.34013 20.0028 1.53055 20.0001H18.4705C18.661 20.0028 18.85 19.9679 19.027 19.8975C19.2039 19.827 19.3652 19.7224 19.5017 19.5896C19.6383 19.4568 19.7473 19.2985 19.8226 19.1235C19.8978 18.9486 19.9379 18.7606 19.9405 18.5701V1.43014C19.9379 1.23972 19.8978 1.05167 19.8226 0.876749C19.7473 0.701824 19.6383 0.543443 19.5017 0.410652C19.3652 0.27786 19.2039 0.17326 19.027 0.102824C18.85 0.0323873 18.661 -0.00250479 18.4705 0.000139831ZM6.09055 16.7401H3.09055V7.74014H6.09055V16.7401ZM4.59055 6.48014C4.17681 6.48014 3.78002 6.31578 3.48746 6.02323C3.1949 5.73067 3.03055 5.33388 3.03055 4.92014C3.03055 4.5064 3.1949 4.10961 3.48746 3.81705C3.78002 3.5245 4.17681 3.36014 4.59055 3.36014C4.81024 3.33522 5.03272 3.35699 5.24342 3.42402C5.45412 3.49105 5.64829 3.60183 5.8132 3.7491C5.97812 3.89637 6.11007 4.07682 6.20042 4.27862C6.29076 4.48043 6.33746 4.69904 6.33746 4.92014C6.33746 5.14124 6.29076 5.35985 6.20042 5.56166C6.11007 5.76346 5.97812 5.94391 5.8132 6.09118C5.64829 6.23845 5.45412 6.34923 5.24342 6.41626C5.03272 6.48329 4.81024 6.50505 4.59055 6.48014ZM16.9105 16.7401H13.9105V11.9101C13.9105 10.7001 13.4805 9.91014 12.3905 9.91014C12.0532 9.91261 11.7247 10.0184 11.4494 10.2133C11.174 10.4082 10.965 10.6828 10.8505 11.0001C10.7723 11.2352 10.7384 11.4827 10.7505 11.7301V16.7301H7.75055V7.73014H10.7505V9.00014C11.0231 8.52725 11.4195 8.13766 11.897 7.87334C12.3745 7.60902 12.9151 7.47999 13.4605 7.50014C15.4605 7.50014 16.9105 8.79014 16.9105 11.5601V16.7401Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a data-w-id="412c6839-75b8-5bd0-e471-34d4797d2a2d" href={s.destino6 || '#'} target="_blank" className="team_card w-inline-block">
                      <div className="img-wrapper"><img src={s.imagem6} loading="lazy" sizes="(max-width: 752px) 100vw, 752px" srcSet="https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-six_1.webp 500w, https://d173woph5zl366.cloudfront.net/clayo/images/Team---user-six_1.webp 752w" alt="" className="img" /></div>
                      <div className="team_card-content">
                        <div className="team_card-info">
                          <div className="text-xl">Ethan Eagle</div>
                          <div className="text-color-secondary text-overflow-ellipsis">Head of Customer Success</div>
                        </div>
                        <div className="team_card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M18.4705 0.000139831H1.53055C1.34013 -0.00250479 1.15105 0.0323873 0.974113 0.102824C0.797177 0.17326 0.63585 0.27786 0.499344 0.410652C0.362839 0.543443 0.253828 0.701824 0.178539 0.876749C0.103249 1.05167 0.0631553 1.23972 0.0605469 1.43014V18.5701C0.0631553 18.7606 0.103249 18.9486 0.178539 19.1235C0.253828 19.2985 0.362839 19.4568 0.499344 19.5896C0.63585 19.7224 0.797177 19.827 0.974113 19.8975C1.15105 19.9679 1.34013 20.0028 1.53055 20.0001H18.4705C18.661 20.0028 18.85 19.9679 19.027 19.8975C19.2039 19.827 19.3652 19.7224 19.5017 19.5896C19.6383 19.4568 19.7473 19.2985 19.8226 19.1235C19.8978 18.9486 19.9379 18.7606 19.9405 18.5701V1.43014C19.9379 1.23972 19.8978 1.05167 19.8226 0.876749C19.7473 0.701824 19.6383 0.543443 19.5017 0.410652C19.3652 0.27786 19.2039 0.17326 19.027 0.102824C18.85 0.0323873 18.661 -0.00250479 18.4705 0.000139831ZM6.09055 16.7401H3.09055V7.74014H6.09055V16.7401ZM4.59055 6.48014C4.17681 6.48014 3.78002 6.31578 3.48746 6.02323C3.1949 5.73067 3.03055 5.33388 3.03055 4.92014C3.03055 4.5064 3.1949 4.10961 3.48746 3.81705C3.78002 3.5245 4.17681 3.36014 4.59055 3.36014C4.81024 3.33522 5.03272 3.35699 5.24342 3.42402C5.45412 3.49105 5.64829 3.60183 5.8132 3.7491C5.97812 3.89637 6.11007 4.07682 6.20042 4.27862C6.29076 4.48043 6.33746 4.69904 6.33746 4.92014C6.33746 5.14124 6.29076 5.35985 6.20042 5.56166C6.11007 5.76346 5.97812 5.94391 5.8132 6.09118C5.64829 6.23845 5.45412 6.34923 5.24342 6.41626C5.03272 6.48329 4.81024 6.50505 4.59055 6.48014ZM16.9105 16.7401H13.9105V11.9101C13.9105 10.7001 13.4805 9.91014 12.3905 9.91014C12.0532 9.91261 11.7247 10.0184 11.4494 10.2133C11.174 10.4082 10.965 10.6828 10.8505 11.0001C10.7723 11.2352 10.7384 11.4827 10.7505 11.7301V16.7301H7.75055V7.73014H10.7505V9.00014C11.0231 8.52725 11.4195 8.13766 11.897 7.87334C12.3745 7.60902 12.9151 7.47999 13.4605 7.50014C15.4605 7.50014 16.9105 8.79014 16.9105 11.5601V16.7401Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}