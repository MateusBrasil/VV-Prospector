"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-184
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
  //   // Upmind — About Testimonials Section
  //   // No boot logic needed here. The shared classic script loaded in index.html does
  //   // the work:
  //   //   /upmind/scripts/about-swiper.js → inits the [data-about-swiper] slider
  //   //       (.slider.is-three): 1-up, fade/crossFade, loop, spaceBetween 80,
  //   //       speed 1000, arrows wired to [data-prev] / [data-next].
  //   // It self-initializes on DOM ready, so this file is an intentional empty stub.
  //   
  //   // About-page testimonial slider (section_testimonial, .slider.is-three).
  //   // Re-implements the source Webflow w-slider with Swiper 11, mirroring the
  //   // testimonials-swiper pattern. Source data attrs: data-infinite="true" (loop),
  //   // data-autoplay="false" (no autoplay), 1-up. .slide-item.is-three margin-right was
  //   // 5rem (80px) -> mapped to spaceBetween. Arrows wired to the source
  //   // .w-slider-arrow-left/right (data-prev / data-next).
  //   (function () {
  //     function init() {
  //       document.querySelectorAll('[data-about-swiper]').forEach((el) => {
  //         new Swiper(el, {
  //           effect: 'fade',
  //           fadeEffect: { crossFade: true },
  //           slidesPerView: 1,
  //           spaceBetween: 80,
  //           loop: true,
  //           speed: 1000,
  //           navigation: {
  //             nextEl: el.querySelector('[data-next]'),
  //             prevEl: el.querySelector('[data-prev]'),
  //           },
  //         });
  //       });
  //     }
  //     if (document.readyState === 'loading') {
  //       document.addEventListener('DOMContentLoaded', init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-184" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_testimonial">
            <div className="padding-section-medium"></div>
            <div className="padding-global">
              <div className="container-large">
                <div data-delay="4000" data-animation="outin" className="slider is-three swiper w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="1000" data-infinite="true" data-about-swiper="">
                  <div className="slider-mask is-three swiper-wrapper w-slider-mask">
                    <div className="slide-item is-three swiper-slide w-slide">
                      <div className="testimonial_item">
                        <div className="testimonial_left">
                          <div>
                            <div data-wf--section-title--variant="base" className="section_title">
                              <div className="title-dot bg-neon"></div>
                              <div>Partnerships</div>
                            </div>
                            <div className="spacer-medium"></div>
                            <h3 className="h4 text-color-neon">{s.subtitulo}</h3>
                          </div>
                          <div>
                            <div className="text-color-on-primary">Rated 4.9/5 by 4.900+ clients</div>
                            <div className="spacer-xsmall"></div>
                            <div className="stars_wrapper"><img src={s.imagem} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem2} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem3} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem4} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem5} loading="lazy" alt="" className="testimonial_star" /></div>
                          </div>
                        </div>
                        <div className="testimonial_right">
                          <div className="h6 text-color-black">"They brought clarity to complex problems, breaking down barriers and delivering innovative solutions. I was truly impressed by how quickly their strategies turned into real, tangible outcomes, driving measurable growth and success for our business."</div>
                          <div className="testimonial_data"><img src={s.imagem6} loading="lazy" alt="Portrait of a young man with curly hair wearing a brown jacket against a dark background." className="testimonial_picture" />
                            <div>
                              <div className="text-xl">John Doe</div>
                              <div className="spacer-xxsmall"></div>
                              <div className="text-color-secondary">CEO, Tech Innovations</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item is-three swiper-slide w-slide">
                      <div className="testimonial_item">
                        <div className="testimonial_left">
                          <div>
                            <div data-wf--section-title--variant="base" className="section_title">
                              <div className="title-dot bg-neon"></div>
                              <div>Partnerships</div>
                            </div>
                            <div className="spacer-medium"></div>
                            <h3 className="h4 text-color-neon">{s.subtitulo2}</h3>
                          </div>
                          <div>
                            <div className="text-color-on-primary">Rated 4.9/5 by 4.900+ clients</div>
                            <div className="spacer-xsmall"></div>
                            <div className="stars_wrapper"><img src={s.imagem7} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem8} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem9} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem10} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem11} loading="lazy" alt="" className="testimonial_star" /></div>
                          </div>
                        </div>
                        <div className="testimonial_right">
                          <div className="h6 text-color-black">They transformed complex challenges into clear, actionable strategies, removing obstacles and delivering smart, effective solutions. I was genuinely impressed by how fast their ideas became real results, generating measurable impact and growth for our business.</div>
                          <div className="testimonial_data"><img src={s.imagem12} loading="lazy" alt="Smiling woman with long blonde hair and a black top against a dark background." className="testimonial_picture" />
                            <div>
                              <div className="text-xl">Josephine</div>
                              <div className="spacer-xxsmall"></div>
                              <div className="text-color-secondary">CHIEF, Visual</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item is-three swiper-slide w-slide">
                      <div className="testimonial_item">
                        <div className="testimonial_left">
                          <div>
                            <div data-wf--section-title--variant="base" className="section_title">
                              <div className="title-dot bg-neon"></div>
                              <div>Partnerships</div>
                            </div>
                            <div className="spacer-medium"></div>
                            <h3 className="h4 text-color-neon">{s.subtitulo3}</h3>
                          </div>
                          <div>
                            <div className="text-color-on-primary">Rated 4.9/5 by 4.900+ clients</div>
                            <div className="spacer-xsmall"></div>
                            <div className="stars_wrapper"><img src={s.imagem13} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem14} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem15} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem16} loading="lazy" alt="" className="testimonial_star" /><img src={s.imagem17} loading="lazy" alt="" className="testimonial_star" /></div>
                          </div>
                        </div>
                        <div className="testimonial_right">
                          <div className="h6 text-color-black">"They simplified highly complex challenges, providing clear direction and thoughtful solutions. What stood out most was how efficiently their approach translated into real-world results, creating measurable progress and lasting value for our company."</div>
                          <div className="testimonial_data"><img src={s.imagem18} loading="lazy" alt="Close-up portrait of a young man with dark skin and short hair wearing a black shirt." className="testimonial_picture" />
                            <div>
                              <div className="text-xl">Xavier Dano</div>
                              <div className="spacer-xxsmall"></div>
                              <div className="text-color-secondary">Doctor, Tech Innovations</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arrow is-three w-slider-arrow-left" data-prev=""><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-main">
                      <path d="M10.5 19.5L11.5575 18.4425L5.8725 12.75H21V11.25H5.8725L11.5575 5.5575L10.5 4.5L3 12L10.5 19.5Z" fill="currentColor"></path>
                    </svg></div>
                  <div className="arrow is-right is-three w-slider-arrow-right" data-next=""><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-main">
                      <path d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z" fill="currentColor"></path>
                    </svg></div>
                  <div className="hide w-slider-nav w-round"></div>
                </div>
              </div>
            </div>
            <div className="padding-section-medium"></div>
          </section>
        </div>
    </section>
  );
}