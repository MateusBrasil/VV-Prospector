"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-31
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
  //   import { ScrollSmoother, ScrollTrigger } from "gsap/all";
  //   import { DualWaveAnimation } from "./dual-wave/DualWaveAnimation.js";
  //   import { preloadImages } from "./utils.js";
  //   
  //   // Register GSAP plugins globally
  //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  //   
  //   // Initialize smooth scroll
  //   ScrollSmoother.create({
  //     smooth: 1.5,
  //     normalizeScroll: true,
  //   });
  //   
  //   // Initialize dual wave animation
  //   const wrapper = document.querySelector(".dual-wave-wrapper");
  //   if (wrapper) {
  //     const animation = new DualWaveAnimation(wrapper);
  //     // Wait for all images to preload before initializing layout and scroll effects
  //     preloadImages(".dual-wave-wrapper").then(() => {
  //       document.body.classList.remove("loading");
  //       animation.init();
  //     });
  //   }
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-31" ref={raiz}>
      <main id="smooth-wrapper" className="container">
            <div id="smooth-content">
              <div className="spacer"></div>
              <div
                className="dual-wave-wrapper"
                data-animation="dual-wave"
                data-wave-number="12"
                data-wave-speed="1"
              >
                <div className="wave-column wave-column-left">
                  <div className="animated-text" data-image="tesla.webp">Volt R2</div>
                  
                  <div className="animated-text" data-image="chanel.webp">Éclat</div>
                  
                  <div className="animated-text" data-image="apple.webp">Project Ion</div>
                  
                  <div className="animated-text" data-image="BMW.webp">AeroLine</div>
                  
                  <div className="animated-text" data-image="YSL.webp">Série Noir</div>
                  
                  <div className="animated-text" data-image="nike.webp">UltraRun</div>
                  
                  <div className="animated-text" data-image="hermes.webp">Atelier 03</div>
                  
                  <div className="animated-text" data-image="adidas.webp">Pulse One</div>
                  
                  <div className="animated-text" data-image="prada.webp">Linea 24</div>
                  
                  <div className="animated-text" data-image="google.webp">
                    Echo Series
                  </div>
                  
                  <div className="animated-text" data-image="polestar.webp">Zero</div>
                  
                  <div className="animated-text" data-image="balenciaga.webp">
                    Shift/Black
                  </div>
                  
                  <div className="animated-text" data-image="audi.webp">Solar Drift</div>
                  
                  <div className="animated-text" data-image="valentino.webp">Nº 27</div>
                  
                  <div className="animated-text" data-image="samsung.webp">Mode/3</div>
                  
                  <div className="animated-text" data-image="bottega.webp">Pure Form</div>
                  
                  <div className="animated-text" data-image="sony.webp">Edge</div>
                  
                  <div className="animated-text" data-image="aesop.webp">Stillwater</div>
                  
                  <div className="animated-text" data-image="dior.webp">Parfum Nº8</div>
                  
                  <div className="animated-text" data-image="porsche.webp">Vantage</div>
                  
                  <div className="animated-text" data-image="microsoft.webp">Core</div>
                  
                  <div className="animated-text" data-image="lexus.webp">
                    Archive Green
                  </div>
                  
                  <div className="animated-text" data-image="mercedes.webp">
                    Rosso Linea
                  </div>
                  
                  <div className="animated-text" data-image="huawei.webp">A-17</div>
                  
                  <div className="animated-text" data-image="tesla.webp">Volt R2</div>
                  
                  <div className="animated-text" data-image="chanel.webp">Éclat</div>
                  
                  <div className="animated-text" data-image="apple.webp">Project Ion</div>
                  
                  <div className="animated-text" data-image="BMW.webp">AeroLine</div>
                  
                  <div className="animated-text" data-image="YSL.webp">Série Noir</div>
                  
                  <div className="animated-text" data-image="nike.webp">UltraRun</div>
                  
                  <div className="animated-text" data-image="hermes.webp">Atelier 03</div>
                  
                  <div className="animated-text" data-image="adidas.webp">Pulse One</div>
                  
                  <div className="animated-text" data-image="prada.webp">Linea 24</div>
                  
                  <div className="animated-text" data-image="google.webp">
                    Echo Series
                  </div>
                  
                  <div className="animated-text" data-image="polestar.webp">Zero</div>
                  
                  <div className="animated-text" data-image="balenciaga.webp">
                    Shift/Black
                  </div>
                  
                  <div className="animated-text" data-image="audi.webp">Solar Drift</div>
                  
                  <div className="animated-text" data-image="valentino.webp">Nº 27</div>
                  
                  <div className="animated-text" data-image="samsung.webp">Mode/3</div>
                  
                  <div className="animated-text" data-image="bottega.webp">Pure Form</div>
                  
                  <div className="animated-text" data-image="sony.webp">Edge</div>
                  
                  <div className="animated-text" data-image="aesop.webp">Stillwater</div>
                  
                  <div className="animated-text" data-image="dior.webp">Parfum Nº8</div>
                  
                  <div className="animated-text" data-image="porsche.webp">Vantage</div>
                  
                  <div className="animated-text" data-image="microsoft.webp">Core</div>
                  
                  <div className="animated-text" data-image="lexus.webp">
                    Archive Green
                  </div>
                  
                  <div className="animated-text" data-image="mercedes.webp">
                    Rosso Linea
                  </div>
                  
                  <div className="animated-text" data-image="huawei.webp">A-17</div>
                  
                </div>
                <div className="image-thumbnail-wrapper">
                  <img src={s.imagem} alt="Campaign Image" className="image-thumbnail" />
                </div>
                <div className="wave-column wave-column-right">
                  <div className="animated-text">Tesla</div>
                  <div className="animated-text">Chanel</div>
                  <div className="animated-text">Apple</div>
                  <div className="animated-text">BMW</div>
                  <div className="animated-text">Saint Laurent</div>
                  <div className="animated-text">Nike</div>
                  <div className="animated-text">Hermès</div>
                  <div className="animated-text">Adidas</div>
                  <div className="animated-text">Prada</div>
                  <div className="animated-text">Google</div>
                  <div className="animated-text">Polestar</div>
                  <div className="animated-text">Balenciaga</div>
                  <div className="animated-text">Audi</div>
                  <div className="animated-text">Valentino</div>
                  <div className="animated-text">Samsung</div>
                  <div className="animated-text">Bottega Veneta</div>
                  <div className="animated-text">Sony</div>
                  <div className="animated-text">Aesop</div>
                  <div className="animated-text">Dior</div>
                  <div className="animated-text">Porsche</div>
                  <div className="animated-text">Microsoft</div>
                  <div className="animated-text">Lexus</div>
                  <div className="animated-text">Mercedes-Benz</div>
                  <div className="animated-text">Huawei</div>
                  <div className="animated-text">Tesla</div>
                  <div className="animated-text">Chanel</div>
                  <div className="animated-text">Apple</div>
                  <div className="animated-text">BMW</div>
                  <div className="animated-text">Saint Laurent</div>
                  <div className="animated-text">Nike</div>
                  <div className="animated-text">Hermès</div>
                  <div className="animated-text">Adidas</div>
                  <div className="animated-text">Prada</div>
                  <div className="animated-text">Google</div>
                  <div className="animated-text">Polestar</div>
                  <div className="animated-text">Balenciaga</div>
                  <div className="animated-text">Audi</div>
                  <div className="animated-text">Valentino</div>
                  <div className="animated-text">Samsung</div>
                  <div className="animated-text">Bottega Veneta</div>
                  <div className="animated-text">Sony</div>
                  <div className="animated-text">Aesop</div>
                  <div className="animated-text">Dior</div>
                  <div className="animated-text">Porsche</div>
                  <div className="animated-text">Microsoft</div>
                  <div className="animated-text">Lexus</div>
                  <div className="animated-text">Mercedes-Benz</div>
                  <div className="animated-text">Huawei</div>
                </div>
              </div>
              <div className="spacer-bottom"></div>
            </div>
          </main>
    </section>
  );
}