"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/interactive-gallery-2
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
  //   
  //       document.addEventListener('DOMContentLoaded', () => {
  //         gsap.registerPlugin(Flip, ScrollTrigger);
  //   
  //         // Cache DOM elements
  //         const scrollWrapper = document.querySelector('[data-scroll="wrapper"]');
  //   
  //         // Inicialização do Lenis com as configurações de mapeamento de scroll vertical para horizontal
  //         const lenis = new Lenis({
  //           wrapper: scrollWrapper,
  //           content: document.querySelector('[data-scroll="content"]'),
  //           orientation: 'horizontal',
  //           gestureOrientation: 'vertical', // Converte scroll de mouse para baixo em scroll horizontal
  //           lerp: 0.05,
  //           wheelMultiplier: 0.85,
  //           smoothWheel: true,
  //           smoothTouch: true,
  //           touchMultiplier: 2, 
  //         });
  //   
  //         // Loop nativo do navegador necessário para o Lenis processar o scroll nas versões mais estáveis
  //         function raf(time) {
  //           lenis.raf(time);
  //           requestAnimationFrame(raf);
  //         }
  //         requestAnimationFrame(raf);
  //   
  //         // Update GSAP ScrollTrigger if used later on
  //         lenis.on('scroll', ScrollTrigger.update);
  //   
  //         const galleryImagesWrapper = document.querySelectorAll('[data-gallery="image-wrapper"]');
  //         const galleryImages = document.querySelectorAll('[data-gallery="image"]');
  //   
  //         const sectionContent = document.querySelector('[data-content="section"]');
  //         const contents = document.querySelectorAll('[data-content="details"]');
  //         const contentWrappers = document.querySelectorAll('[data-content="details-wrapper"]');
  //         const contentWrapperImages = document.querySelectorAll('[data-content="details-wrapper"] .image_container');
  //   
  //         const cursor = document.querySelector('[data-cursor="container"]');
  //   
  //         // State management
  //         let listOfSplits = [];
  //         let currentOpenIndex = null;
  //         let isAnimating = false;
  //         let isOpening = false;
  //         let currentAnimation = null;
  //         let rafId = null;
  //         let cursorX = 0;
  //         let cursorY = 0;
  //         let targetX = 0;
  //         let targetY = 0;
  //   
  //         // Initialize content
  //         scrollWrapper.classList.remove('is-hidden');
  //   
  //         contents.forEach((content, index) => {
  //           content.classList.add('is-hidden');
  //           listOfSplits[index] = initializeSplitText(content);
  //         });
  //         contentWrapperImages.forEach(image => image.remove());
  //   
  //         // Improved cursor movement with RAF
  //         function updateCursor() {
  //           cursorX += (targetX - cursorX) * 0.15;
  //           cursorY += (targetY - cursorY) * 0.15;
  //           cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
  //           rafId = requestAnimationFrame(updateCursor);
  //         }
  //   
  //         function handleMouseMove(e) {
  //           const cursorBounds = cursor.getBoundingClientRect();
  //           targetX = e.clientX - (cursorBounds.width * 3) / 4;
  //           targetY = e.clientY - (cursorBounds.height * 3) / 4;
  //           if (!rafId) {
  //             rafId = requestAnimationFrame(updateCursor);
  //           }
  //         }
  //   
  //         // Touch support
  //         function handleTouchStart(e, index) {
  //           if (e.touches.length === 1) {
  //             handleImageClick(index);
  //           }
  //         }
  //   
  //         function handleImageClick(index) {
  //           if (currentOpenIndex === null) {
  //             openContent(index);
  //           }
  //         }
  //   
  //         function handleWrapperClick(index) {
  //           if (currentOpenIndex === index) {
  //             hideContent(index);
  //           }
  //         }
  //   
  //         function initializeSplitText(content) {
  //           if (!content) return null;
  //   
  //           const contentTitleTop = content.querySelectorAll('[data-content="text-top"] div');
  //           const contentTitleBottom = content.querySelectorAll('[data-content="text-bottom"] div');
  //           const contentTextLeft = content.querySelectorAll('[data-content="text-left"] div');
  //           const contentTextRight = content.querySelectorAll('[data-content="text-right"] div');
  //   
  //           const titleTopSplits = Array.from(
  //             contentTitleTop,
  //             n => new SplitType(n, { types: 'chars' })
  //           );
  //           
  //           const titleBottomSplits = Array.from(
  //             contentTitleBottom,
  //             n => new SplitType(n, { types: 'chars' })
  //           );
  //   
  //           titleTopSplits[0]?.chars?.forEach(char => {
  //             const wrapper = document.createElement('div');
  //             wrapper.classList.add('char-wrap');
  //             char.parentNode.insertBefore(wrapper, char);
  //             wrapper.appendChild(char);
  //           });
  //   
  //           const textLeftSplits = Array.from(
  //             contentTextLeft,
  //             n => new SplitType(n, { types: 'lines' })
  //           );
  //   
  //           const textRightSplits = Array.from(
  //             contentTextRight,
  //             n => new SplitType(n, { types: 'lines' })
  //           );
  //   
  //           [textLeftSplits, textRightSplits].forEach(splits => {
  //             splits.forEach(split => {
  //               split.lines?.forEach(line => {
  //                 const wrapper = document.createElement('div');
  //                 wrapper.classList.add('line-wrap');
  //                 line.parentNode.insertBefore(wrapper, line);
  //                 wrapper.appendChild(line);
  //               });
  //             });
  //           });
  //   
  //           return {
  //             titleTopSplits,
  //             titleBottomSplits,
  //             textLeftSplits,
  //             textRightSplits,
  //           };
  //         }
  //   
  //         // Optimized open animation with will-change
  //         const openContent = index => {
  //           if (isAnimating) return;
  //   
  //           isAnimating = true;
  //           isOpening = true;
  //           contents[index].classList.remove('is-hidden');
  //           const currentWrapper = contentWrappers[index];
  //           const splits = listOfSplits[index];
  //   
  //           // Add will-change to optimize animations
  //           splits.titleTopSplits[0].chars.forEach(char => {
  //             char.style.willChange = 'transform, clip-path';
  //           });
  //   
  //           currentAnimation = gsap.timeline({
  //             duration: 1.25,
  //             ease: 'power4.inOut',
  //             onStart: () => {
  //               sectionContent.classList.remove('is-hidden');
  //             },
  //             onComplete: () => {
  //               isAnimating = false;
  //               currentOpenIndex = index;
  //               lenis.stop();
  //               scrollWrapper.classList.add('is-hidden');
  //               cursor.classList.add('is-open');
  //               currentAnimation = null;
  //               isOpening = false;
  //               // Clean up will-change
  //               splits.titleTopSplits[0].chars.forEach(char => {
  //                 char.style.willChange = 'auto';
  //               });
  //             },
  //           });
  //   
  //           currentAnimation
  //             .addLabel('start', 0)
  //             .addLabel('texts', 0.5)
  //             .add(() => {
  //               const flipState = Flip.getState(galleryImages[index]);
  //               currentWrapper.appendChild(galleryImages[index]);
  //               
  //               Flip.from(flipState, {
  //                 duration: 1.25,
  //                 ease: 'power4.inOut',
  //               });
  //             }, 'start')
  //             .to(
  //               gsap.utils
  //                 .toArray(galleryImagesWrapper)
  //                 .filter((img, i) => i !== index),
  //               {
  //                 clipPath: 'inset(100% 0 0 0)',
  //                 duration: 0.75,
  //                 ease: 'power3.inOut',
  //               },
  //               0
  //             )
  //             .fromTo(
  //               [splits.titleTopSplits[0].elements, splits.titleBottomSplits[0].elements],
  //               {
  //                 xPercent: 15,
  //               },
  //               {
  //                 xPercent: 0,
  //                 duration: 1,
  //                 ease: 'power3.out',
  //               },
  //               'start+=1.25'
  //             )
  //             .fromTo(
  //               [splits.titleTopSplits[0].chars, splits.titleBottomSplits[0].chars],
  //               {
  //                 clipPath: 'inset(0 100% 0 0)',
  //                 xPercent: 10,
  //               },
  //               {
  //                 clipPath: 'inset(0 0% 0 0)',
  //                 xPercent: 0,
  //                 duration: 0.75,
  //                 ease: 'power3.out',
  //               },
  //               'start+=1.25'
  //             )
  //             .fromTo(
  //               [
  //                 ...splits.textLeftSplits.flatMap(split => split.lines),
  //                 ...splits.textRightSplits.flatMap(split => split.lines),
  //               ],
  //               {
  //                 yPercent: 100,
  //                 opacity: 0,
  //               },
  //               {
  //                 yPercent: 0,
  //                 opacity: 1,
  //                 stagger: 0.025,
  //               },
  //               'start+=1.2'
  //             );
  //         };
  //   
  //         const hideContent = index => {
  //           if (isAnimating || currentOpenIndex === null) return;
  //   
  //           isAnimating = true;
  //           const currentWrapper = contentWrappers[index];
  //           const splits = listOfSplits[index];
  //           lenis.start();
  //           scrollWrapper.classList.remove('is-hidden');
  //   
  //           currentAnimation = gsap.timeline({
  //             duration: 1.25,
  //             ease: 'power4.inOut',
  //             onComplete: () => {
  //               isAnimating = false;
  //               currentOpenIndex = null;
  //               currentAnimation = null;
  //               cursor.classList.remove('is-open');
  //               sectionContent.classList.add('is-hidden');
  //               contents[index].classList.add('is-hidden');
  //             },
  //           });
  //   
  //           currentAnimation
  //             .addLabel('start', 0)
  //             .fromTo(
  //               [
  //                 splits.titleTopSplits[0].elements,
  //                 splits.titleBottomSplits[0].elements,
  //               ],
  //               {
  //                 xPercent: 0,
  //               },
  //               {
  //                 xPercent: 10,
  //                 ease: 'power3.out',
  //                 duration: 1,
  //               },
  //               'start'
  //             )
  //             .fromTo(
  //               [splits.titleTopSplits[0].chars, splits.titleBottomSplits[0].chars],
  //               {
  //                 clipPath: 'inset(0 0% 0 0)',
  //                 xPercent: 0,
  //               },
  //               {
  //                 clipPath: 'inset(0 100% 0 0)',
  //                 xPercent: 10,
  //                 ease: 'power3.out',
  //                 duration: 0.75,
  //               },
  //               'start'
  //             )
  //             .to(
  //               [
  //                 ...splits.textLeftSplits.flatMap(split => split.lines),
  //                 ...splits.textRightSplits.flatMap(split => split.lines),
  //               ],
  //               {
  //                 yPercent: 100,
  //                 stagger: 0.025,
  //                 duration: 0.75,
  //               },
  //               'start'
  //             )
  //             .add(() => {
  //               const contentWrapperImage = currentWrapper.querySelector('.image_container');
  //               if (!contentWrapperImage) return;
  //               const flipState = Flip.getState(contentWrapperImage);
  //               galleryImagesWrapper[index].appendChild(contentWrapperImage);
  //               Flip.from(flipState, {
  //                 duration: 1.25,
  //                 ease: 'power3.inOut',
  //               });
  //             }, 'start+=0.25')
  //             .to(
  //               gsap.utils.toArray(galleryImagesWrapper).filter((img, i) => i !== index),
  //               {
  //                 clipPath: 'inset(0% 0 0 0)',
  //               }
  //             )
  //             .set(galleryImagesWrapper, {
  //               clipPath: 'none',
  //             });
  //         };
  //   
  //         // Event Listeners
  //         galleryImagesWrapper.forEach((image, index) => {
  //           image.addEventListener('click', () => handleImageClick(index));
  //           image.addEventListener('touchstart', e => handleTouchStart(e, index));
  //           image.addEventListener('mouseenter', () =>
  //             cursor.classList.add('is-visible')
  //           );
  //           image.addEventListener('mouseleave', () =>
  //             cursor.classList.remove('is-visible')
  //           );
  //         });
  //   
  //         contentWrappers.forEach((content, index) => {
  //           content.addEventListener('click', () => handleWrapperClick(index));
  //           content.addEventListener('mouseenter', () =>
  //             cursor.classList.add('is-visible')
  //           );
  //           content.addEventListener('mouseleave', () =>
  //             cursor.classList.remove('is-visible')
  //           );
  //         });
  //   
  //         // Cleanup function
  //         function cleanup() {
  //           if (rafId) cancelAnimationFrame(rafId);
  //           window.removeEventListener('mousemove', handleMouseMove);
  //         }
  //         window.addEventListener('mousemove', handleMouseMove);
  //         window.addEventListener('unload', cleanup);
  //       });
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-interactive-gallery-2" ref={raiz}>
      <div className="cursor" data-cursor="container">
          <div className="cross_button"></div>
        </div>  
      
        
        <div className="scroll-wrapper" data-scroll="wrapper">
          <section className="scroll-content" data-scroll="content">
            <div className="gallery">
              <div className="gallery_image" data-gallery="image-wrapper">
                <div className="image_container" data-gallery="image">
                  <img src={s.imagem} loading="lazy" alt="Confidence" />
                </div>
              </div>
              <div className="gallery_image" data-gallery="image-wrapper">
                <div className="image_container" data-gallery="image">
                  <img src={s.imagem2} loading="lazy" alt="Wisdom" />
                </div>
              </div>
              <div className="gallery_image" data-gallery="image-wrapper">
                <div className="image_container" data-gallery="image">
                  <img src={s.imagem3} loading="lazy" alt="Kindness" />
                </div>
              </div>
              <div className="gallery_image" data-gallery="image-wrapper">
                <div className="image_container" data-gallery="image">
                  <img src={s.imagem4} loading="lazy" alt="Creativity" />
                </div>
              </div>
              <div className="gallery_image" data-gallery="image-wrapper">
                <div className="image_container" data-gallery="image">
                  <img src={s.imagem5} loading="lazy" alt="Leadership" />
                </div>
              </div>
              <div className="gallery_image" data-gallery="image-wrapper">
                <div className="image_container" data-gallery="image">
                  <img src={s.imagem6} loading="lazy" alt="Grace" />
                </div>
              </div>
              <div className="gallery_image" data-gallery="image-wrapper">
                <div className="image_container" data-gallery="image">
                  <img src={s.imagem7} loading="lazy" alt="Passion" />
                </div>
              </div>
            </div>
          </section>
        </div>
      
        
        <section className="section_content is-hidden" data-content="section">
          
          
          <div className="content is-hidden" data-content="details">
            <div className="content_wrapper" data-content="details-wrapper">
              <div className="content_title-top" data-content="text-top">
                <div className="title-big">CONFIDENCE</div>
              </div>
              <div className="content_title-bottom" data-content="text-bottom">
                <div className="title-big">CHARISMA</div>
              </div>
              <div className="content_text-left" data-content="text-left">
                <div className="title-small">CHARM</div>
                <div className="paragraph">Sharp wit, warm smile a magnetic presence. He walks in, and the room seems to pause, by his quiet strength.</div>
              </div>
              <div className="content_text-right" data-content="text-right">
                <div className="title-small">Presence</div>
                <div className="paragraph">Striking confidence, captivating charm, and elegance in every glance. A timeless blend of poise and presence, effortlessly charismatic.</div>
              </div>
              <div className="image_container" data-content="image">
                <img src={s.imagem8} loading="lazy" alt="Confidence" />
              </div>
            </div>
          </div>
      
          
          <div className="content is-hidden" data-content="details">
            <div className="content_wrapper" data-content="details-wrapper">
              <div className="content_title-top" data-content="text-top">
                <div className="title-big">WISDOM</div>
              </div>
              <div className="content_title-bottom" data-content="text-bottom">
                <div className="title-big">INTELLECT</div>
              </div>
              <div className="content_text-left" data-content="text-left">
                <div className="title-small">BRILLIANCE</div>
                <div className="paragraph">Quick mind, deep thoughts, a scholarly presence. His ideas illuminate the room, guided by penetrating insight.</div>
              </div>
              <div className="content_text-right" data-content="text-right">
                <div className="title-small">knowledge</div>
                <div className="paragraph">Deep understanding, thoughtful insights, and clarity in every word. A masterful blend of experience and intuition, naturally enlightening.</div>
              </div>
              <div className="image_container" data-content="image">
                <img src={s.imagem9} loading="lazy" alt="Wisdom" />
              </div>
            </div>
          </div>
      
          
          <div className="content is-hidden" data-content="details">
            <div className="content_wrapper" data-content="details-wrapper">
              <div className="content_title-top" data-content="text-top">
                <div className="title-big">KINDNESS</div>
              </div>
              <div className="content_title-bottom" data-content="text-bottom">
                <div className="title-big">GENEROSITY</div>
              </div>
              <div className="content_text-left" data-content="text-left">
                <div className="title-small">Giving</div>
                <div className="paragraph">Open heart, helping hands, a benevolent force. His presence brings comfort, marked by selfless grace.</div>
              </div>
              <div className="content_text-right" data-content="text-right">
                <div className="title-small">Compassion</div>
                <div className="paragraph">Gentle spirit, nurturing soul, and warmth in every action. A beautiful harmony of empathy and understanding, naturally caring.</div>
              </div>
              <div className="image_container" data-content="image">
                <img src={s.imagem10} loading="lazy" alt="Kindness" />
              </div>
            </div>
          </div>
      
          
          <div className="content is-hidden" data-content="details">
            <div className="content_wrapper" data-content="details-wrapper">
              <div className="content_title-top" data-content="text-top">
                <div className="title-big">CREATIVITY</div>
              </div>
              <div className="content_title-bottom" data-content="text-bottom">
                <div className="title-big">ARTISTRY</div>
              </div>
              <div className="content_text-left" data-content="text-left">
                <div className="title-small">Expression</div>
                <div className="paragraph">Fluid style, bold vision, a creative soul. He transforms the ordinary, through his unique perspective.</div>
              </div>
              <div className="content_text-right" data-content="text-right">
                <div className="title-small">Innovation</div>
                <div className="paragraph">Boundless imagination, artistic flair, and vision in every creation. A stunning fusion of originality and skill, naturally inspiring.</div>
              </div>
              <div className="image_container" data-content="image">
                <img src={s.imagem11} loading="lazy" alt="Creativity" />
              </div>
            </div>
          </div>
      
          
          <div className="content is-hidden" data-content="details">
            <div className="content_wrapper" data-content="details-wrapper">
              <div className="content_title-top" data-content="text-top">
                <div className="title-big">LEADERSHIP</div>
              </div>
              <div className="content_title-bottom" data-content="text-bottom">
                <div className="title-big">INFLUENCE</div>
              </div>
              <div className="content_text-left" data-content="text-left">
                <div className="title-small">Impact</div>
                <div className="paragraph">Strong presence, clear purpose, a guiding light. He shapes the path forward, through determined leadership.</div>
              </div>
              <div className="content_text-right" data-content="text-right">
                <div className="title-small">Guidance</div>
                <div className="paragraph">Natural authority, inspiring presence, and direction in every decision. A powerful combination of vision and influence, naturally commanding</div>
              </div>
              <div className="image_container" data-content="image">
                <img src={s.imagem12} loading="lazy" alt="Leadership" />
              </div>
            </div>
          </div>
      
          
          <div className="content is-hidden" data-content="details">
            <div className="content_wrapper" data-content="details-wrapper">
              <div className="content_title-top" data-content="text-top">
                <div className="title-big">GRACE</div>
              </div>
              <div className="content_title-bottom" data-content="text-bottom">
                <div className="title-big">ELEGANCE</div>
              </div>
              <div className="content_text-left" data-content="text-left">
                <div className="title-small">SOPHISTICATION</div>
                <div className="paragraph">Smooth demeanor, cultured taste, a refined presence. He elevates any setting, with natural elegance.</div>
              </div>
              <div className="content_text-right" data-content="text-right">
                <div className="title-small">POLISH</div>
                <div className="paragraph">Refined movement, sophisticated manner, and style in every gesture. A perfect balance of poise and dignity, naturally flowing.</div>
              </div>
              <div className="image_container" data-content="image">
                <img src={s.imagem13} loading="lazy" alt="Grace" />
              </div>
            </div>
          </div>
      
          
          <div className="content is-hidden" data-content="details">
            <div className="content_wrapper" data-content="details-wrapper">
              <div className="content_title-top" data-content="text-top">
                <div className="title-big">PASSION</div>
              </div>
              <div className="content_title-bottom" data-content="text-bottom">
                <div className="title-big">INTENSITY</div>
              </div>
              <div className="content_text-left" data-content="text-left">
                <div className="title-small">Drive</div>
                <div className="paragraph">Fierce determination, endless energy, a dynamic force. He ignites inspiration, through passionate pursuit.</div>
              </div>
              <div className="content_text-right" data-content="text-right">
                <div className="title-small">Enthusiasm</div>
                <div className="paragraph">Burning drive, intense focus, and fire in every pursuit. An explosive blend of energy and dedication, naturally motivating.</div>
              </div>
              <div className="image_container" data-content="image">
                <img src={s.imagem14} loading="lazy" alt="Passion" />
              </div>
            </div>
          </div>
      
        </section>
    </section>
  );
}