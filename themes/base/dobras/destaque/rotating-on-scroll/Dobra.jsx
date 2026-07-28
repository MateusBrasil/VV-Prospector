"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/rotating-on-scroll
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
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    
            // 1. Initialize Lenis (Smooth Scroll)
            const lenis = new Lenis({
                lerp: 0.08, 
                smoothWheel: true,
            });
    
            // Integrate Lenis with GSAP ScrollTrigger
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time)=>{
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
    
            // Register GSAP Plugin
            gsap.registerPlugin(ScrollTrigger);
    
            // 2. Initial Load Animation
            const tl = gsap.timeline();
            tl.from('.hero__title', {
                y: 100,
                rotationX: -45,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                transformOrigin: "center bottom",
                delay: 0.2
            })
            .from('.hero__subtitle', {
                y: 30,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=1.0");
    
            // 3. Setup Rotating On-Scroll Animations for Gallery items
            const galleryItems = raiz.current.querySelectorAll('.gallery__item');
    
            galleryItems.forEach((item, index) => {
                const inner = item.querySelector('.gallery__item-inner');
                const img = item.querySelector('.gallery__item-img');
                const caption = item.querySelector('.gallery__item-caption');
                
                // Alternate rotation direction based on column (odd vs even)
                const isEven = index % 2 !== 0; 
                const direction = isEven ? 1 : -1;
    
                // THE SOLUTION: Create a single timeline for the item's entire lifecycle on screen
                const itemTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom", // Starts when item top enters from bottom
                        end: "bottom top",   // Ends when item bottom leaves through top
                        scrub: 1.5,          // Extra smoothness on scrub
                    }
                });
    
                // -- Phase 1: Enter (0% to 50% of timeline) -> Comes from deep and focuses in center
                itemTl.fromTo(inner, {
                    rotationX: 55,
                    rotationY: 30 * direction,
                    rotationZ: 15 * direction,
                    z: -800, 
                    y: 250,
                    opacity: 0
                }, {
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    z: 0,
                    y: 0,
                    opacity: 1,
                    ease: "none", // Let scroll dictate speed
                })
                // -- Phase 2: Exit (50% to 100% of timeline) -> Flees to the top
                .to(inner, {
                    rotationX: -55,
                    rotationY: -30 * direction,
                    rotationZ: -15 * direction,
                    z: -800,
                    y: -250,
                    opacity: 0,
                    ease: "none",
                });
    
                // -- Image Scale Parallax
                gsap.fromTo(img, {
                    scale: 1.4
                }, {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
    
                // -- Reveal Caption only in the center of the screen
                gsap.fromTo(caption, {
                    y: 30,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 60%",
                        end: "bottom 40%",
                        toggleActions: "play reverse play reverse", 
                    }
                });
            });
        
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-rotating-on-scroll" ref={raiz}>
      <div className="noise"></div>
      
          
          <main>
              <header className="hero">
                  <h1 className="hero__title">Rotating<br />On-Scroll</h1>
                  <p className="hero__subtitle">{s.texto}</p>
              </header>
      
              <section className="gallery-container">
                  <div className="gallery">
                      
                      <figure className="gallery__item">
                          <div className="gallery__item-inner">
                              <img className="gallery__item-img" src={s.imagem} alt="Fashion model" />
                          </div>
                          <figcaption className="gallery__item-caption">Haruto Saito</figcaption>
                      </figure>
                      
                      
                      <figure className="gallery__item">
                          <div className="gallery__item-inner">
                              <img className="gallery__item-img" src={s.imagem2} alt="Portrait" />
                          </div>
                          <figcaption className="gallery__item-caption">Yuna Mori</figcaption>
                      </figure>
      
                      
                      <figure className="gallery__item">
                          <div className="gallery__item-inner">
                              <img className="gallery__item-img" src={s.imagem3} alt="Fashion photography" />
                          </div>
                          <figcaption className="gallery__item-caption">Itsuki Hayashi</figcaption>
                      </figure>
      
                      
                      <figure className="gallery__item">
                          <div className="gallery__item-inner">
                              <img className="gallery__item-img" src={s.imagem4} alt="Creative portrait" />
                          </div>
                          <figcaption className="gallery__item-caption">Akari Shimizu</figcaption>
                      </figure>
      
                      
                      <figure className="gallery__item">
                          <div className="gallery__item-inner">
                              <img className="gallery__item-img" src={s.imagem5} alt="Studio portrait" />
                          </div>
                          <figcaption className="gallery__item-caption">Sota Okada</figcaption>
                      </figure>
      
                      
                      <figure className="gallery__item">
                          <div className="gallery__item-inner">
                              <img className="gallery__item-img" src={s.imagem6} alt="Outdoor fashion" />
                          </div>
                          <figcaption className="gallery__item-caption">Rin Kagawa</figcaption>
                      </figure>
                  </div>
              </section>
      
              <footer className="footer">
                  <p>{s.texto2}</p>
              </footer>
          </main>
    </section>
  );
}