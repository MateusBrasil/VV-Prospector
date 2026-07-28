"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-7
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
  //   function initializeAnimations() {
  //   	// links
  //   	gsap.to('.link a', {
  //   		y: 0,
  //   		duration: 1,
  //   		stagger: 0.1,
  //   		ease: 'power4.out',
  //   		delay: 1,
  //   	})
  //   
  //   	// hero title
  //   	if (document.querySelector('.hero h1')) {
  //   		const heroText = new SplitType('.hero h1', { types: 'chars' })
  //   
  //   		gsap.set(heroText.chars, { y: 400 })
  //   
  //   		gsap.to(heroText.chars, {
  //   			y: 0,
  //   			duration: 1,
  //   			stagger: 0.075,
  //   			ease: 'power4.out',
  //   			delay: 1,
  //   		})
  //   	}
  //   
  //   	// info text
  //   	if (document.querySelector('.info p')) {
  //   		// clean previous splits (important for page transitions)
  //   		document.querySelectorAll('.info p .line').forEach(line => {
  //   			line.replaceWith(document.createTextNode(line.textContent))
  //   		})
  //   
  //   		const text = new SplitType('.info p', {
  //   			types: 'lines',
  //   			tagName: 'div',
  //   			lineClass: 'line',
  //   		})
  //   
  //   		text.lines.forEach(line => {
  //   			line.innerHTML = `<span>${line.innerHTML}</span>`
  //   		})
  //   
  //   		gsap.set('.info p .line span', {
  //   			y: 400,
  //   			display: 'block',
  //   		})
  //   
  //   		gsap.to('.info p .line span', {
  //   			y: 0,
  //   			duration: 2,
  //   			stagger: 0.075,
  //   			ease: 'power4.out',
  //   			delay: 0.25,
  //   		})
  //   	}
  //   }
  //   
  //   // initial load
  //   document.addEventListener('DOMContentLoaded', () => {
  //   	initializeAnimations()
  //   })
  //   
  //   // view transitions (same logic, just без Lenis)
  //   if (navigation?.addEventListener) {
  //   	navigation.addEventListener('navigate', event => {
  //   		if (
  //   			!event.destination.url.includes(location.origin) ||
  //   			!event.destination.url.endsWith('.html')
  //   		)
  //   			return
  //   
  //   		event.intercept({
  //   			handler: async () => {
  //   				const response = await fetch(event.destination.url)
  //   				const text = await response.text()
  //   
  //   				const transition = document.startViewTransition(() => {
  //   					const body = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
  //   					document.body.innerHTML = body
  //   
  //   					const title = text.match(/<title[^>]*>(.*?)<\/title>/i)[1]
  //   					document.title = title
  //   				})
  //   
  //   				transition.ready.then(() => {
  //   					window.scrollTo(0, 0)
  //   					initializeAnimations()
  //   				})
  //   			},
  //   			scroll: 'manual',
  //   		})
  //   	})
  //   }
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-7" ref={raiz}>
      <div className="wrapper">
      			<main className="page">
      				<div  className="index">
      					<nav>
      						<div className="logo">
      							<div className="link">
      								<a href="index.html">{s.acao}</a>
      							</div>
      						</div>
      						<div className="links">
      							<div className="link">
      								<a href="work.html">{s.acao2}</a>
      							</div>
      							<div className="link">
      								<a href="about.html">{s.acao3}</a>
      							</div>
      						</div>
      					</nav>
      					<div className="container">
      						<div className="hero">
      							<h1>{s.titulo}</h1>
      						</div>
      					</div>
      					
      				</div>
      			</main>
      		</div>
    </section>
  );
}