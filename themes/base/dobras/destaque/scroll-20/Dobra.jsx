"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-20
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
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   // repeat first three items by cloning them and appending them to the .grid
  //   const repeatItems = (parentEl, total = 0) => {
  //       const items = [...parentEl.children];
  //       for (let i = 0; i <= total-1; ++i) {
  //           var cln = items[i].cloneNode(true);
  //           parentEl.appendChild(cln);
  //       }
  //   };
  //   
  //   const lenis = new Lenis({
  //       smooth: true,
  //       infinite: true
  //   });
  //   
  //   lenis.on('scroll',()=>{
  //     ScrollTrigger.update()
  //   })
  //   
  //   function raf(time) {
  //       lenis.raf(time);
  //       requestAnimationFrame(raf);
  //   }
  //   
  //   imagesLoaded( document.querySelectorAll('.grid__item'), { background: true }, () => {
  //   
  //       document.body.classList.remove('loading');
  //   
  //       repeatItems(document.querySelector('.grid'), 1);
  //   
  //       const items = [...document.querySelectorAll('.grid__item')];
  //   
  //       // first item
  //       const firtsItem = items[0];
  //       gsap.set(firtsItem, {transformOrigin: '50% 100%'})
  //       gsap.to(firtsItem, {
  //           ease: 'none',
  //           startAt: {scaleY: 1},
  //           scaleY: 0,
  //           scrollTrigger: {
  //               trigger: firtsItem,
  //               start: 'center center',
  //               end: 'bottom top',
  //               scrub: true,
  //               fastScrollEnd: true,
  //               onLeave: () => {
  //                   gsap.set(firtsItem, {scaleY: 1,})
  //               },
  //           }
  //       });
  //   
  //       // last item  
  //       const lastItem = items[2];
  //       gsap.set(lastItem, {transformOrigin: '50% 0%', scaleY: 0})
  //       gsap.to(lastItem, {
  //           ease: 'none',
  //           startAt: {scaleY: 0},
  //           scaleY: 1,
  //           scrollTrigger: {
  //               trigger: lastItem,
  //               start: 'top bottom',
  //               end: 'bottom top',
  //               scrub: true,
  //               fastScrollEnd: true,
  //               onLeaveBack: () => {
  //                   gsap.set(lastItem, {scaleY: 1})
  //               }
  //           }
  //       });
  //       
  //       // in between
  //       let ft;
  //       let st;
  //       const middleItem = items[1];
  //           
  //       ft = gsap.timeline()
  //       .to(middleItem, {
  //           ease: 'none',
  //           onStart: () => {
  //               if (st) st.kill()
  //           },
  //           startAt: {scale: 0},
  //           scale: 1,
  //           scrollTrigger: {
  //               trigger: middleItem,
  //               start: 'top bottom',
  //               end: 'center center',
  //               scrub: true,
  //               onEnter: () => gsap.set(middleItem, {transformOrigin: '50% 0%'}),
  //               onEnterBack: () => gsap.set(middleItem, {transformOrigin: '50% 0%'}),
  //               onLeave: () => gsap.set(middleItem, {transformOrigin: '50% 100%'}),
  //               onLeaveBack: () => gsap.set(middleItem, {transformOrigin: '50% 100%'}),
  //           },
  //       });
  //   
  //       st = gsap.timeline()
  //       .to(middleItem, {
  //           ease: 'none',
  //           onStart: () => {
  //               if (ft) ft.kill()
  //           },
  //           startAt: {scale: 1},
  //           scale: 0,
  //           scrollTrigger: {
  //               trigger: middleItem,
  //               start: 'center center',
  //               end: 'bottom top',
  //               scrub: true,
  //               onEnter: () => gsap.set(middleItem, {transformOrigin: '50% 100%'}),
  //               onEnterBack: () => gsap.set(middleItem, {transformOrigin: '50% 100%'}),
  //               onLeave: () => gsap.set(middleItem, {transformOrigin: '50% 0%'}),
  //               onLeaveBack: () => gsap.set(middleItem, {transformOrigin: '50% 0%'}),
  //           },
  //       });
  //       
  //       requestAnimationFrame(raf);
  //       
  //       const refresh = () => {
  //           ScrollTrigger.clearScrollMemory();
  //           window.history.scrollRestoration = 'manual';
  //           ScrollTrigger.refresh(true);
  //       }
  //   
  //       refresh();
  //       window.addEventListener('resize', refresh);
  //   
  //   });
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-20" ref={raiz}>
      <main>
      			<div className="frame">
      				<div className="frame__title"> 
      					<h1 className="frame__title-main">{s.titulo}</h1> 
      					<a aria-label="Back to the article" className="frame__title-back" href={s.destino || '#'}> 
      						<span className="oh__inner">{s.rotulo}</span> 
      						<svg width="18px" height="18px" viewBox="0 0 24 24"><path vectorEffect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
      						</svg>
      					</a>
      				</div>
      				<a className="frame__prev" href={s.destino2 || '#'}>{s.acao}</a>
      			</div>
      			<div className="grid">
      				<div className="grid__item grid__item--stack">
      					<svg className="grid__item-logo" width="100%" height="100%" viewBox="0 0 503 277" preserveAspectRatio="none">
      					<path d="M56.3 232.3 56.3 193.8C56.3 177.4 54.7 174.1 48.5 165.9 35.4 148.8 17.6 133 8.5 120.8.7 110.3.1 103.7.1 85.6L.1 45.2C.1 14.9 13.5.5 41 .5 68.8.5 79.1 15.3 79.1 45.2L79.1 94.5 56.9 94.5 56.9 48.5C56.9 35 53.5 25.8 40.7 25.8 29.8 25.8 24.1 32.4 24.1 45.2L24.1 85.3C24.1 96.8 25.1 100.1 29.8 106.3 41 121.8 59.1 137.6 68.8 150.4 77.2 161.6 80 169.8 80 193.5L80 232.3C80 260.9 68.8 277 40.4 277 12.3 277 .1 261.5.1 232.3L.1 174.7 22.9 174.7 22.9 228.7C22.9 243.1 26.9 252.3 40.1 252.3 51.6 252.3 56.3 245.1 56.3 232.3ZM176.5 277 101.5 277 101.5.5 127.1.5 127.1 251.8 176.5 251.8 176.5 277ZM290 277 264.5 277 258.4 230.6 217.1 230.6 211 277 186.2 277 224.1.5 254.1.5 290 277ZM218.1 207.1 253.4 207.1C247.7 159.7 241.6 114 236.3 65.3 230.5 114 224.5 159.7 218.1 207.1ZM399.6 277 374 277 326.3 75.1C326.6 117.1 326.6 155.7 326.6 197.7L326.6 277 304.5 277 304.5.5 335 .5 377.4 203.1C377 165.1 377 129.2 377 91.2L377 .5 399.6.5 399.6 277ZM471.5 277 446.3 277 446.3 26.3 415.3 26.3 415.3.5 502.4.5 502.4 26.3 471.5 26.3 471.5 277Z" id="SLANT" fill="var(--base-100)"></path>
      					</svg>
      					<p className="grid__item-text credits">An infinite scrolling demo based on <a href={s.destino3 || '#'}>{s.acao2}</a></p>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-inner">
      						<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem})`}}></div>
      						<p className="grid__item-text"><a href="#">{s.acao3}</a></p>
      					</div>
      				</div>
      			</div>
      		</main>
    </section>
  );
}