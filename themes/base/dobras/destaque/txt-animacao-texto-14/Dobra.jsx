"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/animacao-texto-14
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
  //   	gsap.registerPlugin(ScrollTrigger, SplitText, Observer)
  //   
  //   	
  //   	let targetVelocity = 0
  //   
  //   	Observer.create({
  //   		target: window,
  //   		type: 'wheel,touch,scroll',
  //   		onChange: self => {
  //   			targetVelocity = Math.abs(self.deltaY) * 0.002
  //   		},
  //   	})
  //   
  //   	// --------- SplitText ----------
  //   	const textBlocks = gsap.utils.toArray('.copy-block p')
  //   	const splitInstances = textBlocks.map(block =>
  //   		SplitText.create(block, { type: 'words', mask: 'words' }),
  //   	)
  //   
  //   	gsap.set(splitInstances[1].words, { yPercent: 100 })
  //   	gsap.set(splitInstances[2].words, { yPercent: 100 })
  //   
  //   	const overlapCount = 3
  //   
  //   	const getWordProgress = (phaseProgress, wordIndex, totalWords) => {
  //   		const totalLength = 1 + overlapCount / totalWords
  //   		const scale =
  //   			1 /
  //   			Math.min(
  //   				totalLength,
  //   				1 + (totalWords - 1) / totalWords + overlapCount / totalWords,
  //   			)
  //   
  //   		const startTime = (wordIndex / totalWords) * scale
  //   		const endTime = startTime + (overlapCount / totalWords) * scale
  //   		const duration = endTime - startTime
  //   
  //   		if (phaseProgress <= startTime) return 0
  //   		if (phaseProgress >= endTime) return 1
  //   		return (phaseProgress - startTime) / duration
  //   	}
  //   
  //   	const animateBlock = (outBlock, inBlock, phaseProgress) => {
  //   		outBlock.words.forEach((word, i) => {
  //   			const p = getWordProgress(phaseProgress, i, outBlock.words.length)
  //   			gsap.set(word, { yPercent: p * 100 })
  //   		})
  //   
  //   		inBlock.words.forEach((word, i) => {
  //   			const p = getWordProgress(phaseProgress, i, inBlock.words.length)
  //   			gsap.set(word, { yPercent: 100 - p * 100 })
  //   		})
  //   	}
  //   
  //   	// --------- marquee ----------
  //   	const indicator = document.querySelector('.scroll-indicator')
  //   	const marqueeTrack = document.querySelector('.marquee-track')
  //   	const items = gsap.utils.toArray('.marquee-item')
  //   
  //   	items.forEach(item => marqueeTrack.appendChild(item.cloneNode(true)))
  //   
  //   	let marqueePosition = 0
  //   	let smoothVelocity = 0
  //   
  //   	gsap.ticker.add(() => {
  //   		// smoothing як у тебе
  //   		smoothVelocity += (targetVelocity - smoothVelocity) * 0.5
  //   
  //   		const baseSpeed = 0.45
  //   		const speed = baseSpeed + smoothVelocity * 9
  //   
  //   		marqueePosition -= speed
  //   
  //   		const trackWidth = marqueeTrack.scrollWidth / 2
  //   		if (marqueePosition <= -trackWidth) marqueePosition = 0
  //   
  //   		gsap.set(marqueeTrack, { x: marqueePosition })
  //   
  //   		
  //   		targetVelocity *= 0.9
  //   	})
  //   
  //   	// --------- ScrollTrigger ----------
  //   	ScrollTrigger.create({
  //   		trigger: '.container',
  //   		start: 'top top',
  //   		end: 'bottom bottom',
  //   		onUpdate: self => {
  //   			const scrollProgress = self.progress
  //   
  //   			gsap.set(indicator, { '--progress': scrollProgress })
  //   
  //   			if (scrollProgress <= 0.5) {
  //   				const phase1 = scrollProgress / 0.5
  //   				animateBlock(splitInstances[0], splitInstances[1], phase1)
  //   			} else {
  //   				const phase2 = (scrollProgress - 0.5) / 0.5
  //   				gsap.set(splitInstances[0].words, { yPercent: 100 })
  //   				animateBlock(splitInstances[1], splitInstances[2], phase2)
  //   			}
  //   		},
  //   	})
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-txt-animacao-texto-14" ref={raiz}>
      <div className="container">
            <section className="hero">
               <div className="about-copy">
                  <div className="copy-block">
                     <p>{s.texto}</p>
                  </div>
                  <div className="copy-block">
                     <p>{s.texto2}</p>
                  </div>
                  <div className="copy-block">
                     <p>{s.texto3}</p>
                  </div>
               </div>
      
               <div className="marquee">
                  <div className="marquee-track">
                     <div className="marquee-item"><img src={s.imagem} /></div>
                     <div className="marquee-item"><img src={s.imagem2} /></div>
                     <div className="marquee-item"><img src={s.imagem3} /></div>
                     <div className="marquee-item"><img src={s.imagem4} /></div>
                     <div className="marquee-item"><img src={s.imagem5} /></div>
                     <div className="marquee-item"><img src={s.imagem6} /></div>
                     <div className="marquee-item"><img src={s.imagem7} /></div>
                     <div className="marquee-item"><img src={s.imagem8} /></div>
                     <div className="marquee-item"><img src={s.imagem9} /></div>
                     <div className="marquee-item"><img src={s.imagem10} /></div>
                  </div>
               </div>
      
               <div className="scroll-indicator"></div>
            </section>
         </div>
    </section>
  );
}