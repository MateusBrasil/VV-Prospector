"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-40
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
  //   document.addEventListener('DOMContentLoaded', () => {
  //   	gsap.registerPlugin(ScrollTrigger)
  //   
  //   	const cardContainer = document.querySelector('.card-container')
  //   	const stickyHeader = document.querySelector('.sticky-header h1')
  //   
  //   	let isGapAnimationCompleted = false
  //   	let isFlipAnimationCompleted = false
  //   
  //   	function initAnimations() {
  //   		// прибиваємо старі тригери
  //   		ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  //   
  //   		const mm = gsap.matchMedia()
  //   
  //   		mm.add('(max-width: 999px)', () => {
  //   			document
  //   				.querySelectorAll('.card, .card-container, .sticky-header h1')
  //   				.forEach(el => (el.style = ''))
  //   			return {}
  //   		})
  //   
  //   	
  //   		mm.add('(min-width: 1000px)', () => {
  //   			ScrollTrigger.create({
  //   				trigger: '.sticky',
  //   				start: 'top top',
  //   				end: `+=${window.innerHeight * 4}px`,
  //   				scrub: 1,
  //   				pin: true,
  //   				pinSpacing: true,
  //   
  //   				onUpdate: self => {
  //   					const progress = self.progress
  //   
  //   		
  //   					if (progress >= 0.1 && progress <= 0.25) {
  //   						const headerProgress = gsap.utils.mapRange(
  //   							0.1,
  //   							0.25,
  //   							0,
  //   							1,
  //   							progress,
  //   						)
  //   
  //   						gsap.set(stickyHeader, {
  //   							y: gsap.utils.mapRange(0, 1, 40, 0, headerProgress),
  //   							opacity: gsap.utils.mapRange(0, 1, 0, 1, headerProgress),
  //   						})
  //   					} else if (progress < 0.1) {
  //   						gsap.set(stickyHeader, { y: 40, opacity: 0 })
  //   					} else if (progress > 0.25) {
  //   						gsap.set(stickyHeader, { y: 0, opacity: 1 })
  //   					}
  //   
  //   	
  //   					if (progress <= 0.25) {
  //   						gsap.set(cardContainer, {
  //   							width: `${gsap.utils.mapRange(0, 0.25, 75, 60, progress)}%`,
  //   						})
  //   					} else {
  //   						gsap.set(cardContainer, { width: '60%' })
  //   					}
  //   
  //   			
  //   					if (progress >= 0.35 && !isGapAnimationCompleted) {
  //   						gsap.to(cardContainer, {
  //   							gap: '20px',
  //   							duration: 0.5,
  //   							ease: 'power3.out',
  //   						})
  //   
  //   						gsap.to(['#card-1', '#card-2', '#card-3'], {
  //   							borderRadius: '20px',
  //   							duration: 0.5,
  //   							ease: 'power3.out',
  //   						})
  //   
  //   						isGapAnimationCompleted = true
  //   					} else if (progress < 0.35 && isGapAnimationCompleted) {
  //   						gsap.to(cardContainer, {
  //   							gap: '0px',
  //   							duration: 0.5,
  //   							ease: 'power3.out',
  //   						})
  //   
  //   						gsap.to('#card-1', {
  //   							borderRadius: '20px 0 0 20px',
  //   							duration: 0.5,
  //   							ease: 'power3.out',
  //   						})
  //   
  //   						gsap.to('#card-2', {
  //   							borderRadius: '0px',
  //   							duration: 0.5,
  //   							ease: 'power3.out',
  //   						})
  //   
  //   						gsap.to('#card-3', {
  //   							borderRadius: '0 20px 20px 0',
  //   							duration: 0.5,
  //   							ease: 'power3.out',
  //   						})
  //   
  //   						isGapAnimationCompleted = false
  //   					}
  //   
  //   					// ----- Flip animation -----
  //   					if (progress >= 0.7 && !isFlipAnimationCompleted) {
  //   						gsap.to('.card', {
  //   							rotationY: 180,
  //   							duration: 0.75,
  //   							ease: 'power3.inOut',
  //   							stagger: 0.1,
  //   						})
  //   
  //   						gsap.to(['#card-1', '#card-3'], {
  //   							y: 30,
  //   							rotationZ: i => [-15, 15][i],
  //   							duration: 0.75,
  //   							ease: 'power3.inOut',
  //   						})
  //   
  //   						isFlipAnimationCompleted = true
  //   					} else if (progress < 0.7 && isFlipAnimationCompleted) {
  //   						gsap.to('.card', {
  //   							rotationY: 0,
  //   							duration: 0.75,
  //   							ease: 'power3.inOut',
  //   							stagger: -0.1,
  //   						})
  //   
  //   						gsap.to(['#card-1', '#card-3'], {
  //   							y: 0,
  //   							rotationZ: 0,
  //   							duration: 0.75,
  //   							ease: 'power3.inOut',
  //   						})
  //   
  //   						isFlipAnimationCompleted = false
  //   					}
  //   				},
  //   			})
  //   
  //   			return () => {}
  //   		})
  //   	}
  //   
  //   	initAnimations()
  //   
  //   
  //   	let resizeTimer
  //   	window.addEventListener('resize', () => {
  //   		clearTimeout(resizeTimer)
  //   		resizeTimer = setTimeout(() => {
  //   			initAnimations()
  //   			ScrollTrigger.refresh()
  //   		}, 250)
  //   	})
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-40" ref={raiz}>
      <section className="intro">
            <h1>{s.titulo}</h1>
         </section>
      
         <section className="sticky">
            <div className="sticky-header">
               <h1>{s.titulo2}</h1>
            </div>
      
            <div className="card-container">
               <div className="card" id="card-1">
                  <div className="card-front">
                     <img src={s.imagem} alt="" />
                  </div>
                  <div className="card-back">
                     <span>{s.rotulo}</span>
                     <p>{s.texto}</p>
                  </div>
               </div>
      
               <div className="card" id="card-2">
                  <div className="card-front">
                     <img src={s.imagem2} alt="" />
                  </div>
                  <div className="card-back">
                     <span>{s.rotulo2}</span>
                     <p>{s.texto2}</p>
                  </div>
               </div>
      
               <div className="card" id="card-3">
                  <div className="card-front">
                     <img src={s.imagem3} alt="" />
                  </div>
                  <div className="card-back">
                     <span>{s.rotulo3}</span>
                     <p>{s.texto3}</p>
                  </div>
               </div>
            </div>
         </section>
      
         <section className="outro">
            <h1>{s.titulo3}</h1>
         </section>
    </section>
  );
}