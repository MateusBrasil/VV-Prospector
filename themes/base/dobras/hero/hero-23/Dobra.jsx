"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-23
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
  //   window.addEventListener("DOMContentLoaded", function () {
  //     gsap.set("nav", { y: -100 });
  //     gsap.set(".letter-wrapper", { y: 400 });
  //     gsap.set(".item-copy-wrapper p", { y: 50 });
  //   
  //     gsap.defaults({ duration: 1, ease: "power3.out" });
  //     const tl = gsap.timeline({ paused: true, delay: 0.5 });
  //   
  //     tl.to(".letter-wrapper", {
  //       y: 0,
  //       stagger: 0.1,
  //     })
  //       .to(".header-item-1", {
  //         left: "12vw",
  //       })
  //       .to(
  //         ".header-item-2",
  //         {
  //           right: "8vw",
  //         },
  //         "<"
  //       )
  //       .to(
  //         ".item-main .item-img img",
  //         {
  //           clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  //         },
  //         "<"
  //       )
  //       .to(".header-item-1", {
  //         left: 0,
  //         scale: 1,
  //       })
  //       .to(
  //         ".header-item-2",
  //         {
  //           right: 0,
  //           scale: 1,
  //         },
  //         "<"
  //       )
  //       .to(
  //         ".item-main .item-img img",
  //         {
  //           scale: 1,
  //         },
  //         "<"
  //       )
  //       .to(
  //         ".item-side .item-img",
  //         {
  //           clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  //           stagger: 0.1,
  //         },
  //         "<"
  //       )
  //       .to(
  //         ".header",
  //         {
  //           bottom: "0",
  //         },
  //         "<"
  //       )
  //       .to(
  //         ".item-copy-wrapper p",
  //         {
  //           y: 0,
  //           stagger: 0.05,
  //         },
  //         "<"
  //       )
  //       .to(
  //         "nav",
  //         {
  //           y: 0,
  //         },
  //         "<"
  //       );
  //   
  //     tl.play();
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-23" ref={raiz}>
      <nav>
            <div className="logo">
              <a href="#">{s.acao}</a>
            </div>
            <div className="nav-items">
              <a href="#">{s.acao2}</a>
              <a href="#">{s.acao3}</a>
              <a href="#">{s.acao4}</a>
              <a href="#">{s.acao5}</a>
            </div>
            <div className="contact">
              <a href="#">{s.acao6}</a>
            </div>
          </nav>
      
          <div className="container">
            <div className="items">
              <div className="items-col">
                <div className="item item-side">
                  <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>{s.texto}</p>
                    </div>
                    <div className="item-copy-wrapper">
                      <p>{s.texto2}</p>
                    </div>
                  </div>
                  <div className="item-img">
                    <img src={s.imagem} alt="" />
                  </div>
                </div>
                <div className="item item-side">
                  <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>{s.texto3}</p>
                    </div>
                    <div className="item-copy-wrapper">
                      <p>{s.texto4}</p>
                    </div>
                  </div>
                  <div className="item-img">
                    <img src={s.imagem2} alt="" />
                  </div>
                </div>
                <div className="item item-side">
                  <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>{s.texto5}</p>
                    </div>
                    <div className="item-copy-wrapper">
                      <p>{s.texto6}</p>
                    </div>
                  </div>
                  <div className="item-img">
                    <img src={s.imagem3} alt="" />
                  </div>
                </div>
              </div>
              <div className="items-col">
                <div className="item-main">
                  <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>{s.texto7}</p>
                    </div>
                    <div className="item-copy-wrapper">
                      <p>{s.texto8}</p>
                    </div>
                  </div>
                  <div className="item-img">
                    <img src={s.imagem4} alt="" />
                  </div>
                </div>
              </div>
              <div className="items-col">
                <div className="item item-side">
                  <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>{s.texto9}</p>
                    </div>
                    <div className="item-copy-wrapper">
                      <p>{s.texto10}</p>
                    </div>
                  </div>
                  <div className="item-img">
                    <img src={s.imagem5} alt="" />
                  </div>
                </div>
                <div className="item item-side">
                  <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>{s.texto11}</p>
                    </div>
                    <div className="item-copy-wrapper">
                      <p>{s.texto12}</p>
                    </div>
                  </div>
                  <div className="item-img">
                    <img src={s.imagem6} alt="" />
                  </div>
                </div>
                <div className="item item-side">
                  <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>{s.texto13}</p>
                    </div>
                    <div className="item-copy-wrapper">
                      <p>{s.texto14}</p>
                    </div>
                  </div>
                  <div className="item-img">
                    <img src={s.imagem7} alt="" />
                  </div>
                </div>
              </div>
            </div>
      
            <div className="header">
              <div className="header-item header-item-1">
                <div className="letter"><div className="letter-wrapper">N</div></div>
                <div className="letter"><div className="letter-wrapper">O</div></div>
                <div className="letter"><div className="letter-wrapper">R</div></div>
                <div className="letter"><div className="letter-wrapper">K</div></div>
              </div>
              <div className="header-item header-item-2">
                <div className="letter"><div className="letter-wrapper">W</div></div>
                <div className="letter"><div className="letter-wrapper">O</div></div>
                <div className="letter"><div className="letter-wrapper">O</div></div>
                <div className="letter"><div className="letter-wrapper">D</div></div>
              </div>
            </div>
          </div>
    </section>
  );
}