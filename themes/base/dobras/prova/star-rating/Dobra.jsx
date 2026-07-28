"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/star-rating
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   
  //           window.addEventListener("DOMContentLoaded", () => {
  //               const starRating = new StarRating("form");
  //           });
  //   
  //           class StarRating {
  //               constructor(qs) {
  //                   this.ratings = [
  //                       { id: 1, name: "Terrible" },
  //                       { id: 2, name: "Bad" },
  //                       { id: 3, name: "OK" },
  //                       { id: 4, name: "Good" },
  //                       { id: 5, name: "Excellent" }
  //                   ];
  //                   this.rating = null;
  //                   this.el = document.querySelector(qs);
  //   
  //                   this.init();
  //               }
  //   
  //               init() {
  //                   this.el?.addEventListener("change", this.updateRating.bind(this));
  //   
  //                   // stop Firefox from preserving form data between refreshes
  //                   try {
  //                       this.el?.reset();
  //                   } catch (err) {
  //                       console.error("Element isn’t a form.");
  //                   }
  //               }
  //   
  //               updateRating(e) {
  //                   // clear animation delays
  //                   Array.from(this.el.querySelectorAll(`[for*="rating"]`)).forEach(el => {
  //                       el.className = "rating__label";
  //                   });
  //   
  //                   const ratingObject = this.ratings.find(r => r.id === +e.target.value);
  //                   const prevRatingID = this.rating?.id || 0;
  //   
  //                   let delay = 0;
  //                   this.rating = ratingObject;
  //                   
  //                   this.ratings.forEach(rating => {
  //                       const { id } = rating;
  //   
  //                       // add the delays
  //                       const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);
  //   
  //                       if (id > prevRatingID + 1 && id <= this.rating.id) {
  //                           ++delay;
  //                           ratingLabel.classList.add(`rating__label--delay${delay}`);
  //                       }
  //   
  //                       // hide ratings to not read, show the one to read
  //                       const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);
  //   
  //                       if (this.rating.id !== id) {
  //                           ratingTextEl.setAttribute("hidden", true);
  //                       } else {
  //                           ratingTextEl.removeAttribute("hidden");
  //                       }
  //                   });
  //               }
  //           }
  //       
  // }, []);
  return (
    <section className="dobra" data-dobra="prova-star-rating" ref={raiz}>
      <form className="rating">
              <div className="rating__stars">
                  <input id="rating-1" className="rating__input rating__input-1" type="radio" name="rating" value="1" />
                  <input id="rating-2" className="rating__input rating__input-2" type="radio" name="rating" value="2" />
                  <input id="rating-3" className="rating__input rating__input-3" type="radio" name="rating" value="3" />
                  <input id="rating-4" className="rating__input rating__input-4" type="radio" name="rating" value="4" />
                  <input id="rating-5" className="rating__input rating__input-5" type="radio" name="rating" value="5" />
                  
                  <label className="rating__label" htmlFor="rating-1">
                      <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <g transform="translate(16,16)">
                              <circle className="rating__star-ring" fill="none" stroke="var(--base-600)" strokeWidth="16" r="8" transform="scale(0)" />
                          </g>
                          <g stroke="var(--base-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <g transform="translate(16,16) rotate(180)">
                                  <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                  <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="var(--base-600)" />
                              </g>
                              <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
                                  <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                              </g>
                          </g>
                      </svg>
                      <span className="rating__sr">{s.rotulo}</span>
                  </label>
                  <label className="rating__label" htmlFor="rating-2">
                      <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <g transform="translate(16,16)">
                              <circle className="rating__star-ring" fill="none" stroke="var(--base-600)" strokeWidth="16" r="8" transform="scale(0)" />
                          </g>
                          <g stroke="var(--base-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <g transform="translate(16,16) rotate(180)">
                                  <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                  <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="var(--base-600)" />
                              </g>
                              <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
                                  <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                              </g>
                          </g>
                      </svg>
                      <span className="rating__sr">{s.rotulo2}</span>
                  </label>
                  <label className="rating__label" htmlFor="rating-3">
                      <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <g transform="translate(16,16)">
                              <circle className="rating__star-ring" fill="none" stroke="var(--base-600)" strokeWidth="16" r="8" transform="scale(0)" />
                          </g>
                          <g stroke="var(--base-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <g transform="translate(16,16) rotate(180)">
                                  <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                  <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="var(--base-600)" />
                              </g>
                              <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
                                  <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                              </g>
                          </g>
                      </svg>
                      <span className="rating__sr">{s.rotulo3}</span>
                  </label>
                  <label className="rating__label" htmlFor="rating-4">
                      <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <g transform="translate(16,16)">
                              <circle className="rating__star-ring" fill="none" stroke="var(--base-600)" strokeWidth="16" r="8" transform="scale(0)" />
                          </g>
                          <g stroke="var(--base-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <g transform="translate(16,16) rotate(180)">
                                  <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                  <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="var(--base-600)" />
                              </g>
                              <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
                                  <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                              </g>
                          </g>
                      </svg>
                      <span className="rating__sr">{s.rotulo4}</span>
                  </label>
                  <label className="rating__label" htmlFor="rating-5">
                      <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <g transform="translate(16,16)">
                              <circle className="rating__star-ring" fill="none" stroke="var(--base-600)" strokeWidth="16" r="8" transform="scale(0)" />
                          </g>
                          <g stroke="var(--base-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <g transform="translate(16,16) rotate(180)">
                                  <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                  <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="var(--base-600)" />
                              </g>
                              <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
                                  <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                  <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                              </g>
                          </g>
                      </svg>
                      <span className="rating__sr">{s.rotulo5}</span>
                  </label>
                  <p className="rating__display" data-rating="1" hidden={true}>{s.texto}</p>
                  <p className="rating__display" data-rating="2" hidden={true}>{s.texto2}</p>
                  <p className="rating__display" data-rating="3" hidden={true}>{s.texto3}</p>
                  <p className="rating__display" data-rating="4" hidden={true}>{s.texto4}</p>
                  <p className="rating__display" data-rating="5" hidden={true}>{s.texto5}</p>
              </div>
          </form>
    </section>
  );
}