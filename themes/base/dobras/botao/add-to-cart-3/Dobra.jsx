"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/add-to-cart-3
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useEffect, useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useEffect(() => {
    
            const button = raiz.current.querySelector("#add-to-cart-btn");
            let timer;
            let timer2;
            // The audio might be blocked by some browsers due to autoplay/interaction policies or CORS, 
            // but it should work directly upon a user click event.
            const audio = new Audio("https://lasonotheque.org/UPLOAD/mp3/1417.mp3");
    
            button.addEventListener("click", function () {
                if (!this.classList.contains("added")) {
                    clearTimeout(timer);
                    clearTimeout(timer2);
                }
    
                if (
                    this.classList.contains("tapis-roulant") &&
                    !this.classList.contains("added")
                ) {
                    raiz.current.querySelector(
                        ".tapis-roulant>div:nth-child(4)>div"
                    ).style.animationPlayState = "paused";
                    raiz.current.querySelector(
                        ".tapis-roulant>div:nth-child(2)>div"
                    ).style.animationPlayState = "paused";
                    this.style.pointerEvents = "none";
                    this.classList.add("canceled");
                    
                    setTimeout(() => {
                        this.style.pointerEvents = "initial";
                        this.classList.remove("tapis-roulant");
                        this.classList.remove("canceled");
                    }, 1000);
                }
    
                if (!this.classList.contains("tapis-roulant")) {
                    this.classList.add("tapis-roulant");
                    
                    // Allow elements to render the new class before accessing styles
                    requestAnimationFrame(() => {
                        const objAnim = raiz.current.querySelector(".tapis-roulant>div:nth-child(4)>div");
                        const beltAnim = raiz.current.querySelector(".tapis-roulant>div:nth-child(2)>div");
                        
                        if(objAnim) objAnim.style.animationPlayState = "running";
                        if(beltAnim) beltAnim.style.animationPlayState = "running";
                    });
    
                    timer = setTimeout(() => {
                        this.classList.add("added");
                        // Catch potential play() errors (e.g., if user hasn't interacted enough or file fails)
                        audio.play().catch(e => console.warn("Audio play blocked or failed", e));
                        
                        this.style.pointerEvents = "none";
                        timer2 = setTimeout(() => {
                            this.classList.remove("added");
                            this.classList.remove("tapis-roulant");
                            this.style.pointerEvents = "initial";
                        }, 1600);
                    }, 1400);
                }
            });
        
  }, []);
  return (
    <section className="dobra" data-dobra="botao-add-to-cart-3" ref={raiz}>
      <div className="container">
              <button id="add-to-cart-btn" onClick={s.onClick}>
                  <span>
                      <div className="caddie">
                          <div className="caddie__top-support"></div>
                          <div className="caddie__top"></div>
                          <div className="caddie__body"></div>
                          <div className="caddie__trou"></div>
                          <div className="caddie__trou2"></div>
                          <div className="caddie__body-left"></div>
                          <div className="caddie__roue"></div>
                          <div className="caddie__roue2"></div>
                          <div className="caddie__trou3"></div>
                      </div>Add to cart
                  </span>
                  <div>
                      <div>
                          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                      </div>
                  </div>
                  <div>
                      <div></div>
                      <div></div>
                  </div>
                  
                  <div>
                      <div>
                          <div></div>
                          <div></div>
                      </div>
                  </div>
                  
                  <div>
                      <div>$9.99</div>
                  </div>
                  
                  <div>
                      <div>Canceled</div>
                  </div>
              </button>
          </div>
    </section>
  );
}