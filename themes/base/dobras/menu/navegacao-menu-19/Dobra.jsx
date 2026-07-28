"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-19
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
  //   
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   	gsap.registerPlugin(CustomEase, SplitText)
  //   	CustomEase.create('hop', '.87,0,.13,1')
  //   
  //   	// --- helper: lock/unlock scroll (без Lenis) ---
  //   	const lockScroll = lock => {
  //   		document.documentElement.classList.toggle('no-scroll', lock)
  //   		document.body.classList.toggle('no-scroll', lock)
  //   	}
  //   
  //   	// --- SplitText setup ---
  //   	const textContainers = document.querySelectorAll('.menu-col')
  //   	const splitTextByContainer = []
  //   
  //   	textContainers.forEach(container => {
  //   		const textElements = container.querySelectorAll('a, p')
  //   		const containerSplits = []
  //   
  //   		textElements.forEach(el => {
  //   			const split = SplitText.create(el, {
  //   				type: 'lines',
  //   				mask: 'lines',
  //   				linesClass: 'line',
  //   			})
  //   
  //   			containerSplits.push(split)
  //   			gsap.set(split.lines, { y: '-110%' })
  //   		})
  //   
  //   		splitTextByContainer.push(containerSplits)
  //   	})
  //   
  //   	// --- DOM refs ---
  //   	const container = document.querySelector('.container')
  //   	const menuToggleBtn = document.querySelector('.menu-toggle-btn')
  //   	const menuOverlay = document.querySelector('.menu-overlay')
  //   	const menuOverlayContainer = document.querySelector('.menu-overlay-content')
  //   	const menuMediaWrapper = document.querySelector('.menu-media-wrapper')
  //   	const copyContainers = document.querySelectorAll('.menu-col')
  //   	const menuToggleLabel = document.querySelector('.menu-toggle-label p')
  //   	const hamburgerIcon = document.querySelector('.menu-hamburger-icon')
  //   
  //   	let isMenuOpen = false
  //   	let isAnimating = false
  //   
  //   	menuToggleBtn.addEventListener('click', () => {
  //   		if (isAnimating) return
  //   
  //   		if (!isMenuOpen) {
  //   			isAnimating = true
  //   			lockScroll(true)
  //   
  //   			const tl = gsap.timeline()
  //   
  //   			tl.to(menuToggleLabel, { y: '-110%', duration: 1, ease: 'hop' }, '<')
  //   				.to(container, { y: '100svh', duration: 1, ease: 'hop' }, '<')
  //   				.to(
  //   					menuOverlay,
  //   					{
  //   						clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  //   						duration: 1,
  //   						ease: 'hop',
  //   					},
  //   					'<',
  //   				)
  //   				.to(
  //   					menuOverlayContainer,
  //   					{ yPercent: 0, duration: 1, ease: 'hop' },
  //   					'<',
  //   				)
  //   				.to(
  //   					menuMediaWrapper,
  //   					{ opacity: 1, duration: 0.75, ease: 'power2.out', delay: 0.5 },
  //   					'<',
  //   				)
  //   
  //   			splitTextByContainer.forEach(containerSplits => {
  //   				const lines = containerSplits.flatMap(s => s.lines)
  //   				tl.to(
  //   					lines,
  //   					{ y: '0%', duration: 2, ease: 'hop', stagger: -0.075 },
  //   					-0.15,
  //   				)
  //   			})
  //   
  //   			hamburgerIcon?.classList.add('active')
  //   
  //   			tl.call(() => {
  //   				isAnimating = false
  //   			})
  //   
  //   			isMenuOpen = true
  //   		} else {
  //   			isAnimating = true
  //   
  //   			hamburgerIcon?.classList.remove('active')
  //   
  //   			const tl = gsap.timeline()
  //   
  //   			tl.to(container, { y: '0svh', duration: 1, ease: 'hop' })
  //   				.to(
  //   					menuOverlay,
  //   					{
  //   						clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  //   						duration: 1,
  //   						ease: 'hop',
  //   					},
  //   					'<',
  //   				)
  //   				.to(
  //   					menuOverlayContainer,
  //   					{ yPercent: -50, duration: 1, ease: 'hop' },
  //   					'<',
  //   				)
  //   				.to(menuToggleLabel, { y: '0%', duration: 1, ease: 'hop' }, '<')
  //   				.to(copyContainers, { opacity: 0.25, duration: 1, ease: 'hop' }, '<')
  //   
  //   			tl.call(() => {
  //   				// reset lines
  //   				splitTextByContainer.forEach(containerSplits => {
  //   					const lines = containerSplits.flatMap(s => s.lines)
  //   					gsap.set(lines, { y: '-110%' })
  //   				})
  //   
  //   				gsap.set(copyContainers, { opacity: 1 })
  //   				gsap.set(menuMediaWrapper, { opacity: 0 })
  //   
  //   				lockScroll(false)
  //   				isAnimating = false
  //   			})
  //   
  //   			isMenuOpen = false
  //   		}
  //   	})
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-19" ref={raiz}>
      <nav>
            <div className="menu-bar">
               <div className="menu-logo">
                  <a href="#"><img src={s.imagem} alt="" /></a>
               </div>
               <div className="menu-toggle-btn">
                  <div className="menu-toggle-label">
                     <p>{s.texto}</p>
                  </div>
                  <div className="menu-hamburger-icon">
                     <span></span>
                     <span></span>
                  </div>
               </div>
            </div>
            <div className="menu-overlay">
               <div className="menu-overlay-content">
                  <div className="menu-media-wrapper">
                     <img src={s.imagem2} alt="" />
                  </div>
                  <div className="menu-content-wrapper">
                     <div className="menu-content-main">
                        <div className="menu-col">
                           <div className="menu-link"><a href="#">{s.acao}</a></div>
                           <div className="menu-link"><a href="#">{s.acao2}</a></div>
                           <div className="menu-link"><a href="#">{s.acao3}</a></div>
                           <div className="menu-link"><a href="#">{s.acao4}</a></div>
                           <div className="menu-link"><a href="#">{s.acao5}</a></div>
                        </div>
      
                        <div className="menu-col">
                           <div className="menu-tag"><a href="#">{s.acao6}</a></div>
                           <div className="menu-tag"><a href="#">{s.acao7}</a></div>
                           <div className="menu-tag"><a href="#">{s.acao8}</a></div>
                        </div>
                     </div>
                     <div className="menu-footer">
                        <div className="menu-col">
                           <p>{s.texto2}</p>
                        </div>
                        <div className="menu-col">
                           <p>{s.texto3}</p>
                           <p>{s.texto4}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      
         <div className="container">
            <section className="hero">
               <h1>{s.titulo}</h1>
            </section>
         </div>
    </section>
  );
}