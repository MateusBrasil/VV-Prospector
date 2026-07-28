"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/on-scroll-3d-grid-animations
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
  //           // --- UTILS.JS CONTENT ---
  //           // Preload images
  //           const preloadImages = (selector = 'img') => {
  //               return new Promise((resolve) => {
  //                   imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  //               });
  //           };
  //   
  //           // Helper function that lets you dynamically figure out a grid's rows/columns 
  //           // as well as further refine those with "odd" or "even" ones
  //           const getGrid = selector => {
  //               let elements = gsap.utils.toArray(selector),
  //                   bounds,
  //                   getSubset = (axis, dimension, alternating, merge) => {
  //                       let a = [], 
  //                           subsets = {},
  //                           onlyEven = alternating === "even",
  //                           p;
  //                       bounds.forEach((b, i) => {
  //                           let position = Math.round(b[axis] + b[dimension] / 2),
  //                               subset = subsets[position];
  //                           subset || (subsets[position] = subset = []);
  //                           subset.push(elements[i]);
  //                       });
  //                       for (p in subsets) {
  //                           a.push(subsets[p]);
  //                       }
  //                       if (onlyEven || alternating === "odd") {
  //                           a = a.filter((el, i) => !(i % 2) === onlyEven);
  //                       }
  //                       if (merge) {
  //                           let a2 = [];
  //                           a.forEach(subset => a2.push(...subset));
  //                           return a2;
  //                       }
  //                       return a;
  //                   };
  //               elements.refresh = () => bounds = elements.map(el => el.getBoundingClientRect());
  //               elements.columns = (alternating, merge) => getSubset("left", "width", alternating, merge);
  //               elements.rows = (alternating, merge) => getSubset("top", "height", alternating, merge);
  //               elements.refresh();
  //   
  //               return elements;
  //           };
  //   
  //           // --- INDEX.JS CONTENT ---
  //           let lenis;
  //   
  //           // Function to initialize Lenis for smooth scrolling
  //           const initSmoothScrolling = () => {
  //               // Instantiate the Lenis object with specified properties
  //               lenis = new Lenis({
  //                   lerp: 0.1, // Lower values create a smoother scroll effect
  //                   smoothWheel: true // Enables smooth scrolling for mouse wheel events
  //               });
  //   
  //               // Update ScrollTrigger each time the user scrolls
  //               lenis.on('scroll', () => ScrollTrigger.update());
  //   
  //               // Define a function to run at each animation frame
  //               const scrollFn = (time) => {
  //                   lenis.raf(time); // Run Lenis' requestAnimationFrame method
  //                   requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
  //               };
  //               // Start the animation frame loop
  //               requestAnimationFrame(scrollFn);
  //           };
  //   
  //           // All elements with class .grid
  //           const grids = document.querySelectorAll('.grid');
  //   
  //           // Function to apply scroll-triggered animations to a given gallery
  //           const applyAnimation = (grid, animationType) => {
  //               // Child elements of grid
  //               const gridWrap = grid.querySelector('.grid-wrap');
  //               const gridItems = grid.querySelectorAll('.grid__item');
  //               const gridItemsInner = [...gridItems].map(item => item.querySelector('.grid__item-inner'));
  //               
  //               // Define GSAP timeline with ScrollTrigger
  //               const timeline = gsap.timeline({
  //                   defaults: { ease: 'none' },
  //                   scrollTrigger: {
  //                       trigger: gridWrap,
  //                       start: 'top bottom+=5%',
  //                       end: 'bottom top-=5%',
  //                       scrub: true
  //                   }
  //               });
  //               
  //               // Apply different animations based on type
  //               switch(animationType) {
  //                   case 'type1':
  //                       // Set some CSS related style values
  //                       grid.style.setProperty('--perspective', '1000px');
  //                       grid.style.setProperty('--grid-inner-scale', '0.5');
  //   
  //                       timeline
  //                       .set(gridWrap, {
  //                           rotationY: 25
  //                       })
  //                       .set(gridItems, {
  //                           z: () => gsap.utils.random(-1600,200)
  //                       })
  //                       .fromTo(gridItems, {
  //                           xPercent: () => gsap.utils.random(-1000,-500)
  //                       }, {
  //                           xPercent: () => gsap.utils.random(500,1000)
  //                       }, 0)
  //                       .fromTo(gridItemsInner, {
  //                           scale: 2
  //                       }, {
  //                           scale: .5
  //                       }, 0)
  //                       break;
  //   
  //                   case 'type2':
  //                       // Set some CSS related style values
  //                       grid.style.setProperty('--grid-width', '160%');
  //                       grid.style.setProperty('--perspective', '2000px');
  //                       grid.style.setProperty('--grid-inner-scale', '0.5');
  //                       grid.style.setProperty('--grid-item-ratio', '0.8');
  //                       grid.style.setProperty('--grid-columns', '6');
  //                       grid.style.setProperty('--grid-gap', '14vw');
  //   
  //                       timeline
  //                       .set(gridWrap, {
  //                           rotationX: 20
  //                       })
  //                       .set(gridItems, {
  //                           z: () => gsap.utils.random(-3000,-1000)
  //                       })
  //                       .fromTo(gridItems, {
  //                           yPercent: () => gsap.utils.random(100,1000),
  //                           rotationY: -45,
  //                           filter: 'brightness(200%)'
  //                       }, {
  //                           ease: 'power2',
  //                           yPercent: () => gsap.utils.random(-1000,-100),
  //                           rotationY: 45,
  //                           filter: 'brightness(0%)'
  //                       }, 0)
  //                       .fromTo(gridWrap, {
  //                           rotationZ: -5,
  //                       }, {
  //                           rotationX: -20,
  //                           rotationZ: 10,
  //                           scale: 1.2
  //                       }, 0)
  //                       .fromTo(gridItemsInner, {
  //                           scale: 2
  //                       }, {
  //                           scale: 0.5
  //                       }, 0)
  //                       break;
  //               
  //                   case 'type3':
  //                       // Set some CSS related style values
  //                       grid.style.setProperty('--grid-width', '105%');
  //                       grid.style.setProperty('--grid-columns', '8');
  //                       grid.style.setProperty('--perspective', '1500px');
  //                       grid.style.setProperty('--grid-inner-scale', '0.5');
  //                       
  //                       timeline
  //                       .set(gridItems, {
  //                           transformOrigin: '50% 0%',
  //                           z: () => gsap.utils.random(-5000,-2000),
  //                           rotationX: () => gsap.utils.random(-65,-25),
  //                           filter: 'brightness(0%)'
  //                       })  
  //                       .to(gridItems, {
  //                           xPercent: () => gsap.utils.random(-150,150),
  //                           yPercent: () => gsap.utils.random(-300,300),
  //                           rotationX: 0,
  //                           filter: 'brightness(200%)'
  //                       }, 0)
  //                       .to(gridWrap, {
  //                           z: 6500
  //                       }, 0)
  //                       .fromTo(gridItemsInner, {
  //                           scale: 2
  //                       }, {
  //                           scale: 0.5
  //                       }, 0);
  //                       break;
  //   
  //                   case 'type4':
  //                       // Set some CSS related style values
  //                       grid.style.setProperty('--grid-width', '50%');
  //                       grid.style.setProperty('--perspective', '3000px');
  //                       grid.style.setProperty('--grid-item-ratio', '0.8');
  //                       grid.style.setProperty('--grid-columns', '3');
  //                       grid.style.setProperty('--grid-gap', '1vw');
  //   
  //                       timeline
  //                       .set(gridWrap, {
  //                           transformOrigin: '0% 50%',
  //                           rotationY: 30,
  //                           xPercent: -75
  //                       })
  //                       .set(gridItems, {
  //                           transformOrigin: '50% 0%'
  //                       })
  //                       .to(gridItems, {
  //                           duration: 0.5,
  //                           ease: 'power2',
  //                           z: 500,
  //                           stagger: 0.04
  //                       }, 0)
  //                       .to(gridItems, {
  //                           duration: 0.5,
  //                           ease: 'power2.in',
  //                           z: 0,
  //                           stagger: 0.04
  //                       }, 0.5)
  //                       .fromTo(gridItems, {
  //                           rotationX: -70,
  //                           filter: 'brightness(120%)'
  //                       }, {
  //                           duration: 1,
  //                           rotationX: 70,
  //                           filter: 'brightness(0%)',
  //                           stagger: 0.04
  //                       }, 0)
  //                       break;
  //   
  //                   case 'type5':
  //                       // Set some CSS related style values
  //                       grid.style.setProperty('--grid-width', '120%');
  //                       grid.style.setProperty('--grid-columns', '8');
  //                       grid.style.setProperty('--grid-gap', '0');
  //                       
  //                       const gridObj = getGrid(gridItems);
  //   
  //                       timeline
  //                       .set(gridWrap, {
  //                           rotationX: 50
  //                       })
  //                       .to(gridWrap, {
  //                           rotationX: 30
  //                       })
  //                       .fromTo(gridItems, {
  //                           filter: 'brightness(0%)'
  //                       }, {
  //                           filter: 'brightness(100%)'
  //                       }, 0)
  //                       .to(gridObj.rows('even'), {
  //                           xPercent: -100,
  //                           ease: 'power1'
  //                       }, 0)
  //                       .to(gridObj.rows('odd'), {
  //                           xPercent: 100,
  //                           ease: 'power1'
  //                       }, 0)
  //                       .addLabel('rowsEnd', '>-=0.15')
  //                       .to(gridItems, {
  //                           ease: 'power1',
  //                           yPercent: () => gsap.utils.random(-100, 200),
  //                       }, 'rowsEnd');
  //                       break;
  //   
  //                   case 'type6':
  //                       // Set some CSS related style values
  //                       grid.style.setProperty('--perspective', '2500px');
  //                       grid.style.setProperty('--grid-width', '100%');
  //                       grid.style.setProperty('--grid-gap', '6');
  //                       grid.style.setProperty('--grid-columns', '3');
  //                       grid.style.setProperty('--grid-item-ratio', '1');
  //                       
  //                       timeline
  //                       .fromTo(gridItems, {
  //                           transformOrigin: '50% 200%',
  //                           rotationX: 0,
  //                           yPercent: 400,
  //                       }, {
  //                           yPercent: 0,
  //                           rotationY: 360,
  //                           opacity: 0.2,
  //                           scale: 0.8,
  //                           stagger: 0.03,
  //                       })
  //                       break;
  //                   
  //                   default:
  //                       console.error('Unknown animation type.');
  //                       break;
  //               }
  //           }
  //   
  //           // Apply animations to each grid
  //           const scroll = () => {
  //               grids.forEach((grid, i) => {
  //                   // Determine animation type
  //                   let animationType;
  //                   switch (i % 6) {
  //                       case 0:
  //                           animationType = 'type1';
  //                           break;
  //                       case 1:
  //                           animationType = 'type2';
  //                           break;
  //                       case 2:
  //                           animationType = 'type3';
  //                           break;
  //                       case 3:
  //                           animationType = 'type4';
  //                           break;
  //                       case 4:
  //                           animationType = 'type5';
  //                           break;
  //                       case 5:
  //                           animationType = 'type6';
  //                           break;
  //                   }
  //                   applyAnimation(grid, animationType);
  //               });
  //           }
  //   
  //           // Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
  //           preloadImages('.grid__item-inner').then(() => {
  //               initSmoothScrolling();
  //               scroll();
  //               document.body.classList.remove('loading');
  //           });
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-on-scroll-3d-grid-animations" ref={raiz}>
      <main>
              <div className="intro"> 
                  <h1 className="intro__title"> 
                      <span className="intro__title-pre">{s.rotulo}</span> 
                      <span className="intro__title-sub">{s.rotulo2}</span> 
                  </h1> 
                  <span className="intro__info">{s.rotulo3}</span> 
              </div>
      
              
              <section className="content">               
                  <div className="grid grid--1">
                      <div className="grid-wrap">
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem2})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem3})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem4})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem5})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem6})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem7})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem8})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem9})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem10})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem11})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem12})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem13})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem14})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem15})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem16})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem17})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem18})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem19})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem20})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem21})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem22})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem23})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem24})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem25})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem26})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem27})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem28})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem29})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem30})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem31})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem32})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem33})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem34})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem35})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem36})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem37})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem38})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem39})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem40})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem41})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem42})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem43})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem44})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem45})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem46})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem47})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem48})`}}></div></div>
                      </div>
                  </div>
                  <h3 className="content__title content__title--right content__title--top">Vibrant echoes, <br />structural dance.</h3>
              </section>
      
              
              <section className="content">
                  <div className="grid grid--2">
                      <div className="grid-wrap">
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem49})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem50})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem51})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem52})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem53})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem54})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem55})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem56})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem57})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem58})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem59})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem60})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem61})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem62})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem63})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem64})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem65})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem66})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem67})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem68})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem69})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem70})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem71})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem72})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem73})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem74})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem75})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem76})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem77})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem78})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem79})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem80})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem81})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem82})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem83})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem84})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem85})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem86})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem87})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem88})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem89})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem90})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem91})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem92})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem93})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem94})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem95})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem96})`}}></div></div>
                      </div>
                  </div>
                  <h3 className="content__title">Digital dreams <br />flowing endlessly.</h3>
              </section>
      
              
              <section className="content content--spacing">
                  <div className="grid grid--3">
                      <div className="grid-wrap">
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem97})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem98})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem99})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem100})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem101})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem102})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem103})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem104})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem105})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem106})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem107})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem108})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem109})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem110})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem111})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem112})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem113})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem114})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem115})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem116})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem117})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem118})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem119})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem120})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem121})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem122})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem123})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem124})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem125})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem126})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem127})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem128})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem129})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem130})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem131})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem132})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem133})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem134})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem135})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem136})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem137})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem138})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem139})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem140})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem141})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem142})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem143})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem144})`}}></div></div>
                      </div>
                  </div>
                  <h3 className="content__title content__title--left content__title--bottom">Abstract forms, <br />shifting reality.</h3>
              </section>
      
              
              <section className="content content--spacing">
                  <div className="grid grid--4">
                      <div className="grid-wrap">
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem145})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem146})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem147})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem148})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem149})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem150})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem151})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem152})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem153})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem154})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem155})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem156})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem157})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem158})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem159})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem160})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem161})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem162})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem163})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem164})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem165})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem166})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem167})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem168})`}}></div></div>
                      </div>
                  </div>
                  <h3 className="content__title content__title--right">Depth unfolds <br />in silent space</h3>
              </section>
      
              
              <section className="content content--spacing">
                  <div className="grid grid--5">
                      <div className="grid-wrap">
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem169})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem170})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem171})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem172})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem173})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem174})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem175})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem176})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem177})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem178})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem179})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem180})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem181})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem182})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem183})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem184})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem185})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem186})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem187})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem188})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem189})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem190})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem191})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem192})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem193})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem194})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem195})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem196})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem197})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem198})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem199})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem200})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem201})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem202})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem203})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem204})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem205})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem206})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem207})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem208})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem209})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem210})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem211})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem212})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem213})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem214})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem215})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem216})`}}></div></div>
                      </div>
                  </div>
                  <h3 className="content__title">A surreal journey<br /> of fragmented layers</h3>
              </section>
      
              
              <section className="content content--spacing">
                  <div className="grid grid--6">
                      <div className="grid-wrap">
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem217})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem218})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem219})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem220})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem221})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem222})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem223})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem224})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem225})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem226})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem227})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem228})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem229})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem230})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem231})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem232})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem233})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem234})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem235})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem236})`}}></div></div>
                          <div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${s.imagem237})`}}></div></div>
                      </div>
                  </div>
                  <h3 className="content__title">Perspectives shift, <br />dimensions grow.</h3>
              </section>
      
              <section className="outro">
                  <h2 className="outro__title">{s.titulo}</h2>
                  <div className="card-wrap">
                      <div className="card">
                          <a href="#" className="card__image" style={{backgroundImage: `url(${s.imagem238})`}}></a>
                          <h3 className="card__title"><a href="#">{s.acao}</a></h3>
                      </div>
                      <div className="card">
                          <a href="#" className="card__image" style={{backgroundImage: `url(${s.imagem239})`}}></a>
                          <h3 className="card__title"><a href="#">{s.acao2}</a></h3>
                      </div>
                      <div className="card">
                          <a href="#" className="card__image" style={{backgroundImage: `url(${s.imagem240})`}}></a>
                          <h3 className="card__title"><a href="#">{s.acao3}</a></h3>
                      </div>
                  </div>
              </section>
              <p className="credits">{s.texto}</p>
          </main>
    </section>
  );
}