"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/animacao-texto-6
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
  //   import {preloadFonts} from './utils';
  //   import Lenis from '@studio-freight/lenis'
  //   import { gsap } from 'gsap';
  //   import { ScrollTrigger } from 'gsap/ScrollTrigger';
  //   gsap.registerPlugin(ScrollTrigger);
  //   import "splitting/dist/splitting.css";
  //   import "splitting/dist/splitting-cells.css";
  //   import Splitting from "splitting";
  //   
  //   const wrapElements = (elems, wrapType, wrapClass) => {
  //       elems.forEach(char => {
  //           const wrapEl = document.createElement(wrapType);
  //           wrapEl.classList = wrapClass;
  //           char.parentNode.appendChild(wrapEl);
  //           wrapEl.appendChild(char);
  //       });
  //   }
  //   
  //   Splitting();
  //   
  //   const fx1Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect1]')];
  //   const fx2Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect2]')];
  //   const fx3Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')];
  //   const fx4Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect4]')];
  //   const fx5Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect5]')];
  //   const fx6Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect6]')];
  //   const fx7Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect7]')];
  //   const fx8Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect8]')];
  //   const fx9Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect9]')];
  //   const fx10Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect10]')];
  //   const fx11Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect11]')];
  //   const fx12Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect12]')];
  //   const fx13Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect13]')];
  //   const fx14Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect14]')];
  //   const fx15Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect15]')];
  //   
  //   // Lenis smooth scrolling
  //   let lenis;
  //   
  //   // Initialize Lenis smooth scrolling
  //   const initSmoothScrolling = () => {
  //   	
  //       lenis = new Lenis({
  //   		lerp: 0.2,
  //   		smooth: true
  //   	});
  //   
  //       lenis.on('scroll', () => ScrollTrigger.update());
  //   
  //   	const scrollFn = (time) => {
  //   		lenis.raf(time);
  //   		requestAnimationFrame(scrollFn);
  //   	};
  //   	
  //       requestAnimationFrame(scrollFn);
  //   
  //   };
  //   
  //   // GSAP Scroll Triggers
  //   const scroll = () => {
  //       
  //       fx1Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //   
  //           gsap.fromTo(chars, { 
  //               'will-change': 'opacity, transform', 
  //               opacity: 0, 
  //               scale: 0.6,
  //               rotationZ: () => gsap.utils.random(-20,20)
  //           },
  //           {
  //               ease: 'power4',
  //               opacity: 1,
  //               scale: 1,
  //               rotation: 0,
  //               stagger: 0.4,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'center+=20% bottom',
  //                   end: '+=50%',
  //                   scrub: true
  //               },
  //           });
  //   
  //       });
  //       
  //       fx2Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //   
  //           gsap.fromTo(chars, { 
  //               'will-change': 'opacity, transform', 
  //               opacity: 0, 
  //               yPercent: 120, 
  //               scaleY: 2.3, 
  //               scaleX: 0.7, 
  //               transformOrigin: '50% 0%' 
  //           }, 
  //           {
  //               duration: 1,
  //               ease: 'back.inOut(2)',
  //               opacity: 1,
  //               yPercent: 0,
  //               scaleY: 1,
  //               scaleX: 1,
  //               stagger: 0.03,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'center bottom+=50%',
  //                   end: 'bottom top+=40%',
  //                   scrub: true
  //               }
  //           });
  //   
  //       });
  //   
  //       fx3Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //   
  //           gsap.fromTo(chars,  { 
  //               'will-change': 'transform', 
  //               transformOrigin: '50% 0%', 
  //               scaleY: 0
  //           },
  //           {
  //               ease: 'back',
  //               opacity: 1,
  //               scaleY: 1,
  //               yPercent: 0,
  //               stagger: 0.03,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'center bottom-=5%',
  //                   end: 'top top-=20%',
  //                   scrub: true
  //               }
  //           });
  //   
  //       });
  //   
  //       fx4Titles.forEach(title => {
  //           
  //           const words = title.querySelectorAll('.word');
  //           
  //           for (const word of words) {
  //               
  //               const chars = word.querySelectorAll('.char');
  //   
  //               gsap.fromTo(chars,  { 
  //                   'will-change': 'opacity, transform', 
  //                   x: (position,_,arr) => 150*(position-arr.length/2) 
  //               },
  //               {
  //                   ease: 'power1.inOut',
  //                   x: 0,
  //                   stagger: {
  //                       grid: 'auto',
  //                       from: 'center'
  //                   },
  //                   scrollTrigger: {
  //                       trigger: word,
  //                       start: 'center bottom+=30%',
  //                       end: 'top top+=15%',
  //                       scrub: true,
  //                   }
  //               });
  //   
  //           };
  //   
  //       });
  //   
  //       fx5Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //   
  //           gsap.fromTo(chars, { 
  //               'will-change': 'opacity, transform', 
  //               opacity: 0, 
  //               xPercent: () => gsap.utils.random(-200,200), 
  //               yPercent: () => gsap.utils.random(-150,150) 
  //           },
  //           {
  //               ease: 'power1.inOut',
  //               opacity: 1,
  //               xPercent: 0,
  //               yPercent: 0,
  //               stagger: { each: 0.05, grid: 'auto', from: 'random'},
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'center bottom+=10%',
  //                   end: 'bottom center',
  //                   scrub: 0.9
  //               }
  //           });
  //   
  //       });
  //   
  //       fx6Titles.forEach(title => {
  //           
  //           const words = title.querySelectorAll('.word');
  //           
  //           for (const word of words) {
  //   
  //               const chars = word.querySelectorAll('.char');
  //   
  //               chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 
  //   
  //               gsap.fromTo(chars, { 
  //                   'will-change': 'opacity, transform', 
  //                   opacity: 0, 
  //                   rotationX: -90,
  //                   yPercent: 50
  //               },
  //               {
  //                   ease: 'power1.inOut',
  //                   opacity: 1,
  //                   rotationX: 0,
  //                   yPercent: 0,
  //                   stagger: {
  //                       each: 0.03,
  //                       from: 0
  //                   },
  //                   scrollTrigger: {
  //                       trigger: word,
  //                       start: 'center bottom+=40%',
  //                       end: 'bottom center-=30%',
  //                       scrub: 0.9
  //                   }
  //               });
  //   
  //           }
  //   
  //       });
  //   
  //       fx7Titles.forEach(title => {
  //           
  //           const words = title.querySelectorAll('.word');
  //   
  //           for (const word of words) {
  //   
  //               const chars = word.querySelectorAll('.char');
  //   
  //               chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 
  //   
  //               gsap.fromTo(chars, { 
  //                   'will-change': 'opacity, transform', 
  //                   transformOrigin: '100% 50%',
  //                   opacity: 0, 
  //                   rotationY: -90,
  //                   z: -300
  //               },
  //               {
  //                   ease: 'expo',
  //                   opacity: 1,
  //                   rotationY: 0,
  //                   z: 0,
  //                   stagger: { each: 0.06, from: 'end'},
  //                   scrollTrigger: {
  //                       trigger: word,
  //                       start: 'bottom bottom+=20%',
  //                       end: 'bottom top',
  //                       scrub: 1
  //                   }
  //               });
  //   
  //           }
  //   
  //       });
  //   
  //       const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
  //       fx8Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //   
  //           chars.forEach((char, position) => {
  //               let initialHTML = char.innerHTML;
  //               
  //               gsap.fromTo(char, {
  //                   opacity: 0
  //               },
  //               {
  //                   duration: 0.03,
  //                   innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
  //                   repeat: 1,
  //                   repeatRefresh: true,
  //                   opacity: 1,
  //                   repeatDelay: 0.03,
  //                   delay: (position+1)*0.18,
  //                   onComplete: () => gsap.set(char, {innerHTML: initialHTML, delay: 0.03}),
  //                   scrollTrigger: {
  //                       trigger: title,
  //                       start: 'top bottom',
  //                       end: 'bottom center',
  //                       toggleActions: "play resume resume reset",
  //                       onEnter: () => gsap.set(char, {opacity: 0})
  //                   }
  //               });
  //   
  //           });
  //           
  //       });
  //   
  //       fx9Titles.forEach(title => {
  //   
  //           const words = title.querySelectorAll('.word');
  //   
  //           for (const word of words) {
  //   
  //               const chars = word.querySelectorAll('.char');
  //   
  //               gsap.fromTo(chars,  { 
  //                   'will-change': 'transform', 
  //                   scaleX: 0,
  //                   x: (_, target) => window.innerWidth/2 - target.offsetLeft - target.offsetWidth/2
  //               },
  //               {
  //                   ease: 'power1.inOut',
  //                   scaleX: 1,
  //                   x: 0,
  //                   scrollTrigger: {
  //                       trigger: word,
  //                       start: 'top bottom',
  //                       end: 'top top',
  //                       scrub: true
  //                   }
  //               });
  //   
  //           }
  //   
  //       });
  //   
  //       fx10Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //   
  //           gsap.fromTo(chars, { 
  //               'will-change': 'opacity', 
  //               opacity: 0,
  //               filter: 'blur(20px)'
  //           },
  //           {
  //               duration: 0.25,
  //               ease: 'power1.inOut',
  //               opacity: 1,
  //               filter: 'blur(0px)',
  //               stagger: { each: 0.05, from: 'random'},
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'top bottom',
  //                   end: 'center center',
  //                   toggleActions: "play resume resume reset"
  //               }
  //           });
  //   
  //       });
  //   
  //       fx11Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //           wrapElements(chars, 'span', 'char-wrap');
  //   
  //           gsap.fromTo(chars, { 
  //               'will-change': 'transform', 
  //               transformOrigin: '0% 50%',
  //               xPercent: 105,
  //           }, 
  //           {
  //               duration: 1,
  //               ease: 'expo',
  //               xPercent: 0,
  //               stagger: 0.042,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'top bottom',
  //                   end: 'top top+=10%',
  //                   toggleActions: "play resume resume reset",
  //               }
  //           });
  //   
  //       });
  //   
  //       fx12Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //           wrapElements(chars, 'span', 'char-wrap');
  //       
  //           gsap.fromTo(chars, { 
  //               'will-change': 'transform', 
  //               xPercent: -250,
  //               rotationZ: 45,
  //               scaleX: 6,
  //               transformOrigin: '100% 50%'
  //           },
  //           {
  //               duration: 1,
  //               ease: 'power2',
  //               xPercent: 0,
  //               rotationZ: 0,
  //               scaleX: 1,
  //               stagger: -0.06,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'top bottom+=10%',
  //                   end: 'bottom top+=10%',
  //                   scrub: true
  //               }
  //           });
  //       
  //       });
  //   
  //       fx13Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //           
  //           chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 
  //   
  //           gsap.fromTo(chars, { 
  //               'will-change': 'opacity, transform', 
  //               opacity: 0, 
  //               rotationY: 180,
  //               xPercent: -40,
  //               yPercent: 100
  //           },
  //           {
  //               ease: 'power4.inOut()',
  //               opacity: 1,
  //               rotationY: 0,
  //               xPercent: 0,
  //               yPercent: 0,
  //               stagger: {
  //                   each: -0.03,
  //                   from: 0
  //               },
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'center bottom',
  //                   end: 'bottom center-=30%',
  //                   scrub: 0.9
  //               }
  //           });
  //   
  //       });
  //   
  //       fx14Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //           
  //           gsap.timeline()
  //           .fromTo(title, {
  //               'will-change': 'transform', 
  //               xPercent: 100
  //           }, {
  //               ease: 'none',
  //               xPercent: 0,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   scrub: true,
  //                   start: 'center center',
  //                   end: '+=100%',
  //                   pin: title.parentNode,
  //               }
  //           })
  //           .fromTo(chars, { 
  //               'will-change': 'transform', 
  //               scale: 3,
  //               yPercent: -900
  //           },
  //           {
  //               ease: 'back(2)',
  //               scale: 1,
  //               yPercent: 0,
  //               stagger: 0.05,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'center center',
  //                   end: '+=100%',
  //                   scrub: 1.9,
  //               }
  //           }, 0);
  //           
  //       });
  //   
  //       fx15Titles.forEach(title => {
  //           
  //           const chars = title.querySelectorAll('.char');
  //           
  //           chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 
  //           
  //           gsap.timeline()
  //           .fromTo(title, {
  //               'will-change': 'transform', 
  //               xPercent: -80
  //           }, {
  //               ease: 'none',
  //               xPercent: 0,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   scrub: true,
  //                   start: 'center center',
  //                   end: '+=100%',
  //                   pin: title.parentNode,
  //               }
  //           })
  //           .fromTo(chars, { 
  //               'will-change': 'opacity, transform', 
  //               transformOrigin: '50% 50% -200px',
  //               rotationX: 380,
  //               opacity: 0,
  //           },
  //           {
  //               ease: 'expo.inOut',
  //               rotationX: 0,
  //               z: 0,
  //               opacity: 1,
  //               stagger: -0.03,
  //               scrollTrigger: {
  //                   trigger: title,
  //                   start: 'center center',
  //                   end: '+=140%',
  //                   scrub: 1.2,
  //               }
  //           }, 0);
  //   
  //       });
  //   
  //   };
  //   
  //   // Preload images and fonts
  //   preloadFonts('cvn8slu').then(() => {
  //       // Remove loader (loading class)
  //       document.body.classList.remove('loading');
  //       // Lenis (smooth scrolling)
  //       initSmoothScrolling();
  //       // GSAP Scroll Triggers
  //       scroll();
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-txt-animacao-texto-6" ref={raiz}>
      <main>
              <div className="frame">
                  <div className="frame__title">
                      <a aria-label="Back to the article" className="frame__title-back" href={s.destino || '#'}>
                          <span>{s.rotulo}</span>
                          <svg width="18px" height="18px" viewBox="0 0 24 24">
                              <path vectorEffect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
                          </svg>
                      </a>
                  </div>
                  <a className="frame__prev" href={s.destino2 || '#'}>{s.acao}</a>
                  <nav className="frame__demos">
                      <span>{s.rotulo2}</span>
                      <a href="index2.html">{s.acao2}</a>
                  </nav>
              </div>
              <div className="intro">
                  <h1 className="intro__title">
                      <span className="intro__title-pre">{s.rotulo3}</span>
                      <span className="intro__title-sub">{s.rotulo4}</span>
                  </h1>
                  <span className="intro__info">{s.rotulo5}</span>
              </div>
              <div className="content content--highlight">
                  <p>My legacy &#x2014;<br />
                      What will it be?<br />
                      Flowers in spring,<br />
                      The cuckoo in summer,<br />
                      And the crimson maples<br />
                      Of autumn...</p>
              </div>
              <div className="content">
                  <h2 className="content__title content__title--small" data-splitting data-effect1><span>{s.rotulo6}</span><span className="font-6">{s.rotulo7}</span></h2>
                  <p>{s.texto}</p>
                  <p>{s.texto2}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect2><span className="font-2">{s.rotulo8}</span><span className="font-4">{s.rotulo9}</span></h2>
              </div>
              <div className="content">
                  <p>I watch people in the world<br />
                      Throw away their lives lusting after things,<br />
                      Never able to satisfy their desires,<br />
                      Falling into deeper despair<br />
                      And torturing themselves.<br />
                      Even if they get what they want<br />
                      How long will they be able to enjoy it?<br />
                      For one heavenly pleasure<br />
                      They suffer ten torments of hell,<br />
                      Binding themselves more firmly to the grindstone.<br />
                      Such people are like monkeys<br />
                      Frantically grasping for the moon in the water<br />
                      And then falling into a whirlpool.<br />
                      How endlessly those caught up in the floating world suffer.<br />
                      Despite myself, I fret over them all night<br />
                      And cannot staunch my flow of tears.</p>
              </div>
              <div className="content">
                  <h2 className="content__title content__title--sides" data-splitting data-effect3><span className="font-7">{s.rotulo10}</span><span className="font-1">{s.rotulo11}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto3}</p>
                  <p>{s.texto4}</p>
              </div>
              <div className="content content--full">
                  <h2 className="content__title" data-splitting data-effect4><span className="font-larger">{s.rotulo12}</span><span className="font-upper font-sub font-7">{s.rotulo13}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto5}</p>
                  <p>{s.texto6}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect5><span className="font-7">{s.rotulo14}</span><span className="font-6">{s.rotulo15}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto7}</p>
              </div>
              <div className="content">
                  <h2 className="content__title content__title--small" data-splitting data-effect6><span className="font-3">{s.rotulo16}</span><span className="font-6">{s.rotulo17}</span></h2>
                  <p>{s.texto8}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect7><span className="font-3">{s.rotulo18}</span><span className="font-4">{s.rotulo19}</span><span className="font-7">{s.rotulo20}</span></h2>
              </div>
              <div className="content">
                  <p>An old grave hidden={true} away at the foot of a deserted hill,
                  Overrun with rank weeds growing unchecked year after year;
                  There is no one left to tend the tomb,
                  And only an occasional woodcutter passes by.
                  Once I was his pupil, a youth with shaggy hair,
                  Learning deeply from him by the Narrow River.</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect8><span className="font-8">{s.rotulo21}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto9}</p>
              </div>
              <div className="content content--full">
                  <h2 className="content__title" data-splitting data-effect9><span className="font-larger font-12">{s.rotulo22}</span><span className="font-upper font-sub font-1">{s.rotulo23}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto10}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect10><span className="font-7">{s.rotulo24}</span><span className="font-4">{s.rotulo25}</span><span className="font-medium font-1">{s.rotulo26}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto11}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect11><span className="font-3 font-height">{s.rotulo27}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto12}</p>
                  <p>{s.texto13}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect12><span className="font-9 font-height">{s.rotulo28}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto14}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect13><span className="font-5">{s.rotulo29}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto15}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect14><span className="font-11">{s.rotulo30}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto16}</p>
              </div>
              <div className="content">
                  <h2 className="content__title" data-splitting data-effect15><span className="font-10">{s.rotulo31}</span></h2>
              </div>
              <div className="content">
                  <p>{s.texto17}</p>
              </div>
              <div className="intro"><p><a className="line" href="index2.html">{s.acao3}</a></p></div>
          </main>
    </section>
  );
}