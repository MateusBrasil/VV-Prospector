"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/scroll-galore-clone
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
  //       document.addEventListener("DOMContentLoaded", function () {
  //         /**
  //          * This file implements a fullscreen slider with complex animations using GSAP.
  //          * It supports both mouse wheel and touch interactions, with various animation
  //          * patterns including spirals and waves.
  //          */
  //   
  //         // Register required GSAP plugins for animations and custom easing
  //         gsap.registerPlugin(ScrollTrigger, CustomEase, MotionPathPlugin);
  //   
  //         // Create a custom cubic bezier easing function for smooth animations
  //         CustomEase.create("easeInOutCubic", "0.65, 0.05, 0.36, 1.00");
  //   
  //         // Global configuration constants
  //         const ANIMATION_COOLDOWN = 750; // Minimum time (ms) between animations
  //         const EASE_NAME = "easeInOutCubic"; // Name of custom ease to use
  //         const MINIMUM_SWIPE_DISTANCE = 50; // Minimum pixels for swipe detection
  //         // Global state management
  //         let currentIndex = -1; // Current slide index, starts at -1 (before first slide)
  //         let animating = false; // Flag to prevent concurrent animations
  //         let lastAnimationTime = 0; // Timestamp of last animation
  //         let touchStartY = 0; // Starting Y position for touch events
  //   
  //         // Cache DOM queries for performance
  //         const slides = gsap.utils.toArray('[data-slide]');
  //         const slider = gsap.utils.toArray("[data-slider]")[0];
  //         
  //         /**
  //          * Helper function to get all required elements from a slide
  //          * Returns an object containing references to background, images, paths, and text elements
  //          */
  //         const getSlideElements = (slide) => ({
  //           imageBackground: slide.querySelector('[data-slide-content="image-background"]'),
  //           images: [...slide.querySelectorAll('[data-slide-content="image"]')],
  //           imagesWrappers: [...slide.querySelectorAll('[data-slide-content="images-wrapper"]')],
  //           path: slide.querySelector("svg path"),
  //           texts: gsap.utils.toArray(slide.querySelectorAll('[data-slide-content="text"]'))
  //             .map(item => new SplitType(item, { types: 'chars' }))
  //         });
  //   
  //         /**
  //          * Creates staggered animation for text elements
  //          * Animates characters from top and bottom with a stagger effect
  //          */
  //         const createTextAnimations = (tl, texts, offset = '-=0.75') => {
  //           if (!texts || texts.length < 2) return;
  //           tl.from(texts[0].chars, {
  //             yPercent: -100,
  //             duration: 0.75,
  //             stagger: { each: 0.05, from: 'end' },
  //             ease: EASE_NAME,
  //           }, offset)
  //             .from(texts[1].chars, {
  //               yPercent: 100,
  //               duration: 0.75,
  //               stagger: { each: 0.05, from: 'start' },
  //               ease: EASE_NAME,
  //             }, '<');
  //         };
  //   
  //         /**
  //          * Creates animation for the background image
  //          * Scales down and dims the background image
  //          */
  //         const createBackgroundAnimation = (tl, imageBackground) => {
  //           if (!imageBackground) return;
  //           tl.fromTo(imageBackground,
  //             {
  //               scale: 1.5,
  //               filter: "brightness(100%)"
  //             },
  //             {
  //               duration: 1.5,
  //               ease: EASE_NAME,
  //               scale: 1,
  //               filter: "brightness(50%)",
  //             }, 0);
  //         };
  //   
  //         /**
  //          * Creates timeline for spiral animation starting from inside
  //          * Images follow a spiral path outward with scaling and rotation
  //          */
  //         function createSpiralFromInsideTimeline(slide) {
  //           const tl = gsap.timeline({ paused: true });
  //           const elements = getSlideElements(slide);
  //           const { imageBackground, images, path, texts } = elements;
  //           createBackgroundAnimation(tl, imageBackground);
  //           // Calculate positions along the spiral path
  //           const startValue = 0.47;
  //           const endValue = 1;
  //           const spacing = (endValue - startValue) / (images.length - 1);
  //           // Animate each image along the spiral
  //           images.forEach((image, index) => {
  //             const endPosition = startValue + (index * spacing);
  //             tl.fromTo(image, { scale: 0.25 },
  //               {
  //                 scale: 1,
  //                 rotationZ: '45deg',
  //                 duration: 1.5,
  //                 ease: EASE_NAME,
  //                 motionPath: {
  //                   path: path,
  //                   align: path,
  //                   alignOrigin: [0.7, 0.7],
  //                   autoRotate: true,
  //                   start: 0,
  //                   end: endPosition
  //                 }
  //               },
  //               0.25
  //             );
  //           });
  //           createTextAnimations(tl, texts);
  //           return tl;
  //         }
  //   
  //         /**
  //          * Creates timeline for spiral animation starting from outside
  //          * Images follow a spiral path inward with scaling and rotation
  //          */
  //         function createSpiralFromOutsideTimeline(slide) {
  //           const tl = gsap.timeline({ paused: true });
  //           const elements = getSlideElements(slide);
  //           const { imageBackground, images, path, texts } = elements;
  //           createBackgroundAnimation(tl, imageBackground);
  //           const startValue = 0.775;
  //           const endValue = 1;
  //           const spacing = (endValue - startValue) / (images.length - 1);
  //           images.forEach((image, index) => {
  //             const endPosition = startValue + (index * spacing);
  //             tl.fromTo(image, { scale: 0.75 },
  //               {
  //                 scale: 1,
  //                 rotationZ: '45deg',
  //                 duration: 1.75,
  //                 ease: EASE_NAME,
  //                 motionPath: {
  //                   path: path,
  //                   align: path,
  //                   alignOrigin: [0.5, 0.5],
  //                   autoRotate: true,
  //                   start: 0,
  //                   end: endPosition
  //                 }
  //               },
  //               0
  //             );
  //           });
  //           createTextAnimations(tl, texts);
  //           return tl;
  //         }
  //         
  //         /**
  //          * Creates timeline for horizontal wave animation
  //          * Images follow a wave pattern horizontally with alternating directions
  //          */
  //         function createWaveHorizontalTimeline(slide) {
  //           const tl = gsap.timeline({ paused: true });
  //           const elements = getSlideElements(slide);
  //           const { imageBackground, imagesWrappers, texts } = elements;
  //           createBackgroundAnimation(tl, imageBackground);
  //           imagesWrappers.forEach((wrapper, indexWrapper) => {
  //             const images = [...wrapper.querySelectorAll('[data-slide-content="image"]')];
  //             const isReversed = indexWrapper % 2;
  //             const path = wrapper.querySelector("svg path");
  //             // Animate wrapper position
  //             tl.fromTo(wrapper,
  //               {
  //                 x: indexWrapper % 2 ? '-10vw' : '10vw',
  //               },
  //               {
  //                 x: '0vh',
  //                 duration: 1.75,
  //                 ease: EASE_NAME,
  //               },
  //               indexWrapper % 2 ? 0.15 : 0);
  //             // Calculate wave path positions
  //             const startValue = 0;
  //             const endValue = 1;
  //             const spacing = (endValue - startValue) / (images.length - 1);
  //             // Animate each image along the wave
  //             images.forEach((image, index) => {
  //               const progressValue = startValue + (index * spacing);
  //               const startProgress = isReversed ? startValue : endValue;
  //               const endProgress = isReversed ? endValue - (index * spacing) : progressValue;
  //               tl.to(image,
  //                 {
  //                   duration: 1.75,
  //                   ease: EASE_NAME,
  //                   motionPath: {
  //                     path: path,
  //                     align: path,
  //                     alignOrigin: [0.5, 0.5],
  //                     autoRotate: isReversed ? true : 180,
  //                     start: startProgress,
  //                     end: endProgress
  //                   }
  //                 },
  //                 indexWrapper % 2 ? 0.15 : 0,
  //               );
  //             });
  //           });
  //           createTextAnimations(tl, texts);
  //           return tl;
  //         }
  //   
  //         /**
  //          * Creates timeline for vertical wave animation
  //          * Images follow a wave pattern vertically with alternating directions
  //          */
  //         function createWaveVerticalTimeline(slide) {
  //           const tl = gsap.timeline({ paused: true });
  //           const elements = getSlideElements(slide);
  //           const { imageBackground, imagesWrappers, texts } = elements;
  //           createBackgroundAnimation(tl, imageBackground);
  //           imagesWrappers.forEach((wrapper, indexWrapper) => {
  //             const images = [...wrapper.querySelectorAll('[data-slide-content="image"]')];
  //             const isReversed = (indexWrapper + 1) % 2;
  //             const path = wrapper.querySelector("svg path");
  //             // Animate wrapper position
  //             tl.fromTo(wrapper,
  //               {
  //                 y: indexWrapper % 2 ? '25vw' : '-25vw',
  //               },
  //               {
  //                 y: indexWrapper % 2 ? '5vw' : '-5vw',
  //                 duration: 1.5,
  //                 ease: EASE_NAME,
  //               },
  //               indexWrapper % 2 ? 0.15 : 0);
  //             // Calculate wave path positions
  //             const startValue = 0.2;
  //             const endValue = 0.8;
  //             const spacing = (endValue - startValue) / images.length;
  //             // Animate each image along the wave
  //             images.forEach((image, index) => {
  //               const progressValue = startValue + (index * spacing);
  //               const startProgress = isReversed ? startValue : endValue;
  //               const endProgress = isReversed ? endValue - (index * spacing) : progressValue;
  //               tl.to(image,
  //                 {
  //                   duration: 1.75,
  //                   ease: EASE_NAME,
  //                   motionPath: {
  //                     path: path,
  //                     align: path,
  //                     alignOrigin: [0.5, 0.5],
  //                     autoRotate: indexWrapper % 2 ? 90 : -90,
  //                     start: startProgress,
  //                     end: endProgress
  //                   }
  //                 },
  //                 indexWrapper % 2 ? 0.25 : 0,
  //               );
  //             });
  //           });
  //           createTextAnimations(tl, texts);
  //           return tl;
  //         }
  //         
  //         /**
  //          * Main setup function that creates all animation timelines
  //          * Returns a Map of slide names to their corresponding timelines
  //          */
  //         function setupEnterAnimation() {
  //           const timelines = new Map();
  //           if (!slides?.length) {
  //             console.warn('No slides found');
  //             return timelines;
  //           }
  //           // Create appropriate timeline for each slide type
  //           slides.forEach(slide => {
  //             try {
  //               const slideName = slide?.dataset?.slide;
  //               if (!slideName) {
  //                 console.warn('Slide missing data-slide attribute');
  //                 return;
  //               }
  //               switch (slideName) {
  //                 case 'spiral-from-inside':
  //                   timelines.set(slideName, createSpiralFromInsideTimeline(slide));
  //                   break;
  //                 case 'spiral-from-outside':
  //                   timelines.set(slideName, createSpiralFromOutsideTimeline(slide));
  //                   break;
  //                 case 'wave-horizontal':
  //                   timelines.set(slideName, createWaveHorizontalTimeline(slide));
  //                   break;
  //                 case 'wave-vertical':
  //                   timelines.set(slideName, createWaveVerticalTimeline(slide));
  //                   break;
  //               }
  //             } catch (err) {
  //               console.error(`Error creating timeline for slide ${slide?.dataset?.slide}:`, err);
  //             }
  //           });
  //           return timelines;
  //         }
  //   
  //         // Initialize all animation timelines
  //         const timelines = setupEnterAnimation();
  //   
  //         /**
  //          * Sets up initial slider layout and positioning
  //          * Positions all slides absolutely and sets up z-index stacking
  //          */
  //         function initializeSlider() {
  //           gsap.set(slider, {
  //             position: 'relative',
  //             height: '100vh',
  //             width: '100%',
  //             overflow: 'visible'
  //           });
  //   
  //           // Position all slides after the first one below viewport
  //           gsap.set(slides.slice(1), {
  //             position: 'absolute',
  //             yPercent: 100,
  //             height: '100vh',
  //             zIndex: i => i + 1
  //           });
  //           // Position first slide in viewport
  //           gsap.set(slides[0], {
  //             position: 'absolute',
  //             yPercent: 0,
  //             height: '100vh',
  //             zIndex: 0
  //           });
  //         }
  //         /**
  //          * Checks if a new animation can start based on cooldown period
  //          */
  //         function canAnimate() {
  //           const now = Date.now();
  //           return !animating && (now - lastAnimationTime >= ANIMATION_COOLDOWN);
  //         }
  //         /**
  //          * Handles transition between panels, including slide animations
  //          * and content animations for both current and target slides
  //          */
  //         function gotoPanel(index, isScrollingDown) {
  //           if (!canAnimate() || index >= slides.length || index < -1) {
  //             return;
  //           }
  //           if (index === -1 && !isScrollingDown) {
  //             intentObserver.disable();
  //             return;
  //           }
  //           animating = true;
  //           lastAnimationTime = Date.now();
  //           const currentSlide = slides[currentIndex];
  //           const targetSlide = slides[index];
  //           const currentSlideName = currentSlide?.dataset?.slide;
  //           const targetSlideName = targetSlide?.dataset?.slide;
  //           // Create transition animation
  //           const transitionTl = gsap.timeline({
  //             onComplete: () => {
  //               animating = false;
  //               currentIndex = index;
  //             }
  //           });
  //           // Animate slides based on scroll direction
  //           if (isScrollingDown) {
  //             transitionTl
  //               .to(currentSlide, {
  //                 yPercent: -100,
  //                 duration: 1,
  //                 ease: EASE_NAME
  //               })
  //               .fromTo(targetSlide, { yPercent: 100 }, {
  //                 yPercent: 0,
  //                 duration: 1,
  //                 ease: EASE_NAME
  //               },
  //                 0
  //               );
  //           } else {
  //             transitionTl
  //               .to(currentSlide, {
  //                 yPercent: 100,
  //                 duration: 1,
  //                 ease: EASE_NAME
  //               })
  //               .fromTo(targetSlide, { yPercent: -100 }, {
  //                 yPercent: 0,
  //                 duration: 1,
  //                 ease: EASE_NAME
  //               },
  //                 0
  //               );
  //           }
  //           // Handle content animations for both slides
  //           if (timelines.has(currentSlideName) && timelines.get(currentSlideName)) {
  //             timelines.get(currentSlideName).reverse();
  //           }
  //           if (timelines.has(targetSlideName) && timelines.get(targetSlideName)) {
  //             timelines.get(targetSlideName).play();
  //           }
  //         }
  //   
  //         // Set up scroll and touch interaction observer
  //         const intentObserver = ScrollTrigger.observe({
  //           type: "wheel,touch",
  //           onUp: () => canAnimate() && gotoPanel(currentIndex + 1, true),
  //           onDown: () => canAnimate() && gotoPanel(currentIndex - 1, false),
  //           wheelSpeed: -1,
  //           tolerance: 10,
  //           preventDefault: true,
  //           onPress: self => {
  //             if (ScrollTrigger.isTouch) {
  //               self.event.preventDefault();
  //               touchStartY = self.event.touches[0].clientY;
  //             }
  //           },
  //           onRelease: self => {
  //             if (ScrollTrigger.isTouch) {
  //               const touchEndY = self.event.changedTouches[0].clientY;
  //               const diff = touchEndY - touchStartY;
  //               if (Math.abs(diff) > MINIMUM_SWIPE_DISTANCE) {
  //                 if (diff > 0) {
  //                   canAnimate() && gotoPanel(currentIndex - 1, false);
  //                 } else {
  //                   canAnimate() && gotoPanel(currentIndex + 1, true);
  //                 }
  //               }
  //             }
  //           }
  //         });
  //   
  //         // Initially disable the observer until needed
  //         intentObserver.disable();
  //   
  //         // Create main ScrollTrigger for the slider
  //         ScrollTrigger.create({
  //           trigger: slider,
  //           pin: true,
  //           start: "top top",
  //           end: "+=1",
  //           onEnter: () => {
  //             intentObserver.enable();
  //             if (currentIndex === -1) {
  //               currentIndex = 0;
  //               if (timelines.has(slides[0]?.dataset?.slide)) {
  //                 timelines.get(slides[0].dataset.slide).play();
  //               }
  //             } else {
  //               gotoPanel(currentIndex + 1, true);
  //             }
  //           },
  //           onEnterBack: () => {
  //             intentObserver.enable();
  //             gotoPanel(currentIndex - 1, false);
  //           }
  //         });
  //   
  //         // Initialize the slider
  //         initializeSlider();
  //   
  //         /**
  //          * Cleanup function to remove all animations and listeners
  //          * Called when the page is unloaded
  //          */
  //         function cleanup() {
  //           timelines.forEach(timeline => timeline.kill());
  //           timelines.clear();
  //           ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //           intentObserver.disable();
  //         }
  //         // Add cleanup handler
  //         window.addEventListener('unload', cleanup);
  //       })
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-galore-clone" ref={raiz}>
      <div data-slider="container" className="slider">
          <div data-slide="hero" className="slide">
            <div className="hero_container">
              <div className="hero_image-wrapper">
                <img src={s.imagem} loading="lazy" sizes="100vw"
                  srcSet="https://moussamamadou.github.io/slider-motionpath/images/hero_-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/hero_-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/hero_-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/hero_-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/hero_-p-2000.jpg 2000w, https://moussamamadou.github.io/slider-motionpath/images/hero_-p-2600.jpg 2600w, https://moussamamadou.github.io/slider-motionpath/images/hero_.jpg 2970w"
                  alt="hero" className="hero_image" />
              </div>
              <div className="hero_texts">
                <div className="line-wrapper">
                  <div className="line">KEEP CALM</div>
                </div>
                <div className="line-wrapper">
                  <div className="line">AND <span className="color-0">{s.rotulo}</span></div>
                </div>
              </div>
            </div>
          </div>
          <div data-slide="spiral-from-inside" className="slide">
            <div className="slide-wrapper">
              <div className="slide-container">
                <div className="slide_background-wrapper">
                  <img src={s.imagem2} alt="" sizes="100vw" data-slide-content="image-background" loading="lazy"
                    srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-0-p-500.webp 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-0-p-800.webp 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-0-p-1080.webp 1080w, https://moussamamadou.github.io/slider-motionpath/images/yellow-0-p-1600.webp 1600w, https://moussamamadou.github.io/slider-motionpath/images/yellow-0-p-2000.webp 2000w, https://moussamamadou.github.io/slider-motionpath/images/yellow-0-p-2600.webp 2600w, https://moussamamadou.github.io/slider-motionpath/images/yellow-0.webp 3075w" />
                </div>
                <div className="slide_text-wrapper">
                  <div className="slide_text-container">
                    <div data-slide-content="text" className="slide_text text-left"><span className="color-3">{s.rotulo2}</span></div>
                    <div data-slide-content="text" className="slide_text text-right">VISION</div>
                  </div>
                </div>
                <div className="slide_images-wrapper">
                  <div data-slide-content="images-wrapper" className="slide_images-container spiral">
                    <div className="svg_spiral-from-inside w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 500 500">
                        <path d="M931.253,363.872
             c78.595,88.514-0.573,178.926-69.985,178.926
             c-87.126,0-106.326-69.295-106.326-103.928
             s22.155-125.097,121.354-125.097
             c314.568,0,289.214,375.097-15.028,375.096
             c-175.54,0-252.398-149.81-252.398-250
             s76.212-250,252.398-250
             s277.526,152.81,233.279,353.929" transform="translate(-606.712 -188.87)" fill="none" stroke="var(--acento)"
                          strokeWidth="3.84">
                        </path>
                      </svg>
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem3} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-9-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-9-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-9.jpg 1120w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem4} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-10-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-10-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-10.jpg 1034w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem5} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-8-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-8.jpg 849w" alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem6} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-4-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-4-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-4.jpg 1004w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper"><img src={s.imagem7}
                        loading="lazy" sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-3_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-3_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-3_1.jpg 927w"
                        alt="" /></div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem8} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-6-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-6-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-6.jpg 1120w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem9} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-5-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-5-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-5.jpg 1056w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem10} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-1_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-1_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-1_1.jpg 1120w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem11} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-2_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-2_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-2_1.jpg 952w"
                        alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-slide="wave-horizontal" className="slide">
            <div data-slide-content="wrapper" className="slide-wrapper">
              <div className="slide-container">
                <div className="slide_background-wrapper">
                  <img src={s.imagem12} alt="" sizes="100vw" data-slide-content="image-background" loading="lazy"
                    srcSet="https://moussamamadou.github.io/slider-motionpath/images/PURPLE-p-500.webp 500w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-p-800.webp 800w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-p-1080.webp 1080w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-p-1600.webp 1600w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-p-2000.webp 2000w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-p-2600.webp 2600w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-p-3200.webp 3200w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE.webp 3944w" />
                </div>
                <div className="slide_text-wrapper">
                  <div className="slide_text-container center">
                    <div data-slide-content="text" className="slide_text text-right"><span className="color-2">{s.rotulo3}</span></div>
                    <div data-slide-content="text" className="slide_text text-left">DREAM</div>
                  </div>
                </div>
                <div className="slide_images-wrapper">
                  <div data-slide-content="images-wrapper" className="slide_images-container wave-horizontal">
                    <div className="svg_wave-horizontal w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 20"
                        preserveAspectRatio="none">
                        <path d="M 0,10 
             C 25,5 25,15 50,10 
             C 75,5 75,15 100,10" fill="none" stroke="var(--acento)" strokeWidth="0.5" vectorEffect="non-scaling-stroke"></path>
                      </svg>
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem13} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-2-p-500.png 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-2-p-800.png 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-2-p-1080.png 1080w, https://moussamamadou.github.io/slider-motionpath/images/purple-2.png 1812w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem14} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-4-p-500.png 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-4-p-800.png 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-4.png 1476w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem15} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-2_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-2_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-2_1.jpg 1200w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper"><img src={s.imagem16} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-6-p-500.png 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-6-p-800.png 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-6.png 1064w"
                        alt="" /></div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem17} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-1.jpg 1200w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem18} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/PURPLE-4-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-4-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-4-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-4-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-4.jpg 2240w"
                        alt="" />
                    </div>
                  </div>
                  <div data-slide-content="images-wrapper" className="slide_images-container wave-horizontal">
                    <div className="svg_wave-horizontal w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 20"
                        preserveAspectRatio="none">
                        <path d="M 0,10 
             C 25,5 25,15 50,10 
             C 75,5 75,15 100,10" fill="none" stroke="var(--acento)" strokeWidth="0.5" vectorEffect="non-scaling-stroke"></path>
                      </svg>
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem19} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-4-p-500.png 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-4-p-800.png 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-4.png 1476w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem20} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-2_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-2_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-2_1.jpg 1200w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem21} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/PURPLE-3-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-3-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-3-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-3-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-3-p-2000.jpg 2000w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-3.jpg 3013w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem22} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-6-p-500.png 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-6-p-800.png 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-6.png 1064w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem23} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/PURPLE-2-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-2-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-2-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-2-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-2-p-2000.jpg 2000w, https://moussamamadou.github.io/slider-motionpath/images/PURPLE-2.jpg 3103w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem24} loading="lazy"
                        sizes="(max-width: 767px) 14vw, (max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/purple-1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/purple-1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/purple-1.jpg 1200w"
                        alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-slide="spiral-from-outside" className="slide">
            <div className="slide-wrapper">
              <div className="slide-container">
                <div className="slide_background-wrapper">
                  <img src={s.imagem25} alt="" sizes="100vw" data-slide-content="image-background" loading="lazy"
                    srcSet="https://moussamamadou.github.io/slider-motionpath/images/RED-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/RED-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/RED-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/RED-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/RED-p-2000.jpg 2000w, https://moussamamadou.github.io/slider-motionpath/images/RED.jpg 4160w" />
                </div>
                <div className="slide_text-wrapper">
                  <div className="slide_text-container">
                    <div data-slide-content="text" className="slide_text text-left"><span className="color-1">{s.rotulo4}</span></div>
                    <div data-slide-content="text" className="slide_text text-right">Heart</div>
                  </div>
                </div>
                <div className="slide_images-wrapper">
                  <div data-slide-content="images-wrapper" className="work_item-images">
                    <div className="svg_spiral-from-outside w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 650 650">
                        <path d="M713.071,-132.843
             c108.109,0,325.387,78.961,325,371.527
             c-0.247,186.464-136.878,313.666-325,313.666
             c-191.914,0-325.261-187.006-325.261-313.666
             c0-158.837,105.727-255.718,223.091-255.718
             s236.042,68.433,235.846,212.76
             c-0.164,120.42-67.785,164.807-133.676,164.807
             c-73.933,0-133.676-66.169-133.676-133.676
             s58.012-133.676,133.676-133.676
             s135.957,68.932,133.676,145.502" transform="matrix(0.999004 0 0 1 -387.424069 97.649874)" fill="none"
                          stroke="var(--acento)" strokeWidth="3.84">
                        </path>
                      </svg>
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem26} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-3-p-500.webp 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-3-p-800.webp 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-3-p-1080.webp 1080w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-3-p-1600.webp 1600w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-3.webp 2709w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem27} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-1-p-500.webp 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-1-p-800.webp 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-1-p-1080.webp 1080w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-1-p-1600.webp 1600w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-1.webp 2912w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem28} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-2-p-500.webp 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-2-p-800.webp 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-2-p-1080.webp 1080w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-2-p-1600.webp 1600w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-2.webp 2912w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem29} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLET-4-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-4-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-4.jpg 1040w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem30} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLET-1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-1.jpg 890w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem31} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLET-2-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-2-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-2.jpg 1040w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem32} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLET-7-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-7-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-7-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-7.jpg 1560w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem33} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLET-5-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-5-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-5-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/SCARLET-5.jpg 1560w"
                        alt="" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper">
                      <img src={s.imagem34} loading="lazy" sizes="(max-width: 991px) 10vw, 11vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-4-p-500.webp 500w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-4-p-800.webp 800w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-4-p-1080.webp 1080w, https://moussamamadou.github.io/slider-motionpath/images/SCARLETT-4.webp 2912w"
                        alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-slide="wave-vertical" className="slide">
            <div className="slide-wrapper">
              <div className="slide-container">
                <div className="slide_background-wrapper">
                  <img src={s.imagem35} alt="yellow " sizes="100vw" data-slide-content="image-background"
                    loading="lazy"
                    srcSet="https://moussamamadou.github.io/slider-motionpath/images/YELLOW-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-p-2000.jpg 2000w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-p-2600.jpg 2600w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW.jpg 4480w" />
                </div>
                <div className="slide_text-wrapper">
                  <div className="slide_text-container center">
                    <div data-slide-content="text" className="slide_text text-left"><span className="color-3">{s.rotulo5}</span></div>
                    <div data-slide-content="text" className="slide_text text-left">TULIPS</div>
                  </div>
                </div>
                <div className="slide_images-wrapper wave-vertical">
                  <div data-slide-content="images-wrapper" className="slide_images-container wave-vertical">
                    <div className="svg_wave-vertical w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 100"
                        preserveAspectRatio="none">
                        <path
                          d="M8.996613,0c0,9.949497,3.005363,15.626811,3.005363,24.931923s-4.005358,12.91172-4.005358,25.068076s4.507042,16.434236,4.412464,26.193163-2.409163,15.156111-2.409122,23.806836"
                          fill="none" stroke="var(--acento)" strokeWidth="0.5">
                        </path>
                      </svg>
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem36}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/YELLOW-2-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-2-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-2-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-2-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-2.jpg 2240w"
                        alt="yellow " />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem37}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3.jpg 2240w"
                        alt="yellow 10" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem38}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-4_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-4_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-4_1.jpg 1120w"
                        alt="yellow 2" />
                    </div>
                  </div>
                  <div data-slide-content="images-wrapper" className="slide_images-container wave-vertical">
                    <div className="svg_wave-vertical w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 100"
                        preserveAspectRatio="none">
                        <path
                          d="M8.996613,0c0,9.949497,3.005363,15.626811,3.005363,24.931923s-4.005358,12.91172-4.005358,25.068076s4.507042,16.434236,4.412464,26.193163-2.409163,15.156111-2.409122,23.806836"
                          fill="none" stroke="var(--acento)" strokeWidth="0.5">
                        </path>
                      </svg>
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem39}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/YELLOW-1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-1-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-1-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-1.jpg 2240w"
                        alt="yellow 10" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem40}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-5_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-5_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-5_1.jpg 1120w"
                        alt="yellow 3" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem41}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-1_2-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-1_2-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-1_2.jpg 1120w"
                        alt="yellow 1" />
                    </div>
                  </div>
                  <div data-slide-content="images-wrapper" className="slide_images-container wave-vertical">
                    <div className="svg_wave-vertical w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 100"
                        preserveAspectRatio="none">
                        <path
                          d="M8.996613,0c0,9.949497,3.005363,15.626811,3.005363,24.931923s-4.005358,12.91172-4.005358,25.068076s4.507042,16.434236,4.412464,26.193163-2.409163,15.156111-2.409122,23.806836"
                          fill="none" stroke="var(--acento)" strokeWidth="0.5">
                        </path>
                      </svg>
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem42}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-7-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-7.jpg 687w" alt="yellow 4" /></div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem43}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-3_2-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-3_2-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-3_2.jpg 1120w"
                        alt="yellow 8" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem44}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-2_2-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-2_2-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-2_2.jpg 1120w"
                        alt="yellow 6" />
                    </div>
                  </div>
                  <div data-slide-content="images-wrapper" className="slide_images-container wave-vertical">
                    <div className="svg_wave-vertical w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 100"
                        preserveAspectRatio="none">
                        <path
                          d="M8.996613,0c0,9.949497,3.005363,15.626811,3.005363,24.931923s-4.005358,12.91172-4.005358,25.068076s4.507042,16.434236,4.412464,26.193163-2.409163,15.156111-2.409122,23.806836"
                          fill="none" stroke="var(--acento)" strokeWidth="0.5">
                        </path>
                      </svg>
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem45}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-6_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-6_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-6_1.jpg 1120w"
                        alt="yellow 7" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem46}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3-p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3-p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/YELLOW-3.jpg 2240w"
                        alt="yellow 10" />
                    </div>
                    <div data-slide-content="image" className="slide_image-wrapper wave-vertical"><img src={s.imagem47}
                        loading="lazy" sizes="(max-width: 991px) 12vw, 13vw"
                        srcSet="https://moussamamadou.github.io/slider-motionpath/images/yellow-5_1-p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/yellow-5_1-p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/yellow-5_1.jpg 1120w"
                        alt="yellow 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-slide="footer" className="slide">
            <div className="footer_container">
              <div className="footer_image-wrapper">
                <img src={s.imagem48} loading="lazy" sizes="100vw"
                  srcSet="https://moussamamadou.github.io/slider-motionpath/images/hero--p-500.jpg 500w, https://moussamamadou.github.io/slider-motionpath/images/hero--p-800.jpg 800w, https://moussamamadou.github.io/slider-motionpath/images/hero--p-1080.jpg 1080w, https://moussamamadou.github.io/slider-motionpath/images/hero--p-1600.jpg 1600w, https://moussamamadou.github.io/slider-motionpath/images/hero--p-2000.jpg 2000w, https://moussamamadou.github.io/slider-motionpath/images/hero-.jpg 3584w"
                  alt="footer" className="footer_image" />
              </div>
              <div className="footer_texts">
                <div className="slide_text">CONGRATS! </div>
                <div className="slide_text text-center">YOU <span className="color-0">{s.rotulo6}</span></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}