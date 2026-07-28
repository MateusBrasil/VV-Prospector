"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-svg/animacoes-svg-7
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
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    
    gsap.registerPlugin(SplitText)
    
    const cardContainers = raiz.current.querySelectorAll('.card-container')
    
    cardContainers.forEach(cardContainer => {
    	const cardPaths = cardContainer.querySelectorAll('.svg-stroke path')
    	const cardTitle = cardContainer.querySelector('.card-title h3')
    
    	if (!cardTitle) return
    
    	const split = SplitText.create(cardTitle, {
    		type: 'words',
    		mask: 'words',
    		wordsClass: 'word',
    	})
    
    	gsap.set(split.words, { yPercent: 100 })
    
    	cardPaths.forEach(path => {
    		const length = path.getTotalLength()
    		path.style.strokeDasharray = length
    		path.style.strokeDashoffset = length
    	})
    
    	let tl = null
    
    	const onEnter = () => {
    		tl?.kill()
    		tl = gsap.timeline()
    
    		cardPaths.forEach(path => {
    			tl.to(
    				path,
    				{
    					strokeDashoffset: 0,
    					attr: { 'stroke-width': 700 },
    					duration: 1.5,
    					ease: 'power2.out',
    				},
    				0,
    			)
    		})
    
    		tl.to(
    			split.words,
    			{
    				yPercent: 0,
    				duration: 0.75,
    				ease: 'power3.out',
    				stagger: 0.075,
    			},
    			0.35,
    		)
    	}
    
    	const onLeave = () => {
    		tl?.kill()
    		tl = gsap.timeline()
    
    		cardPaths.forEach(path => {
    			const length = path.getTotalLength()
    			tl.to(
    				path,
    				{
    					strokeDashoffset: length,
    					attr: { 'stroke-width': 200 },
    					duration: 1,
    					ease: 'power2.out',
    				},
    				0,
    			)
    		})
    
    		tl.to(
    			split.words,
    			{
    				yPercent: 100,
    				duration: 0.5,
    				ease: 'power3.out',
    				stagger: { each: 0.05, from: 'end' },
    			},
    			0,
    		)
    	}
    
    	cardContainer.addEventListener('mouseenter', onEnter)
    	cardContainer.addEventListener('mouseleave', onLeave)
    
    	// cleanup (корисно для Vite HMR / SPA)
    	window.addEventListener(
    		'beforeunload',
    		() => {
    			tl?.kill()
    			split.revert()
    		},
    		{ once: true },
    	)
    })
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-animacoes-svg-7" ref={raiz}>
      <header>
            <h1>{s.titulo}</h1>
         </header>
      
         <div className="row">
            <div className="card-container" id="card-1">
               <div className="card-img">
                  <img src={s.imagem} alt="" />
               </div>
               <div className="svg-stroke svg-stroke-1">
                  <svg width="2453" height="2273" viewBox="0 0 2453 2273" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
                        stroke="var(--acento)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="svg-stroke svg-stroke-2">
                  <svg width="2250" height="2535" viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
                        stroke="var(--base-300)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="card-title">
                  <h3>{s.subtitulo}</h3>
               </div>
            </div>
            <div className="card-container" id="card-2">
               <div className="card-img">
                  <img src={s.imagem2} alt="" />
               </div>
               <div className="svg-stroke svg-stroke-1">
                  <svg width="2453" height="2273" viewBox="0 0 2453 2273" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
                        stroke="var(--acento)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="svg-stroke svg-stroke-2">
                  <svg width="2250" height="2535" viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
                        stroke="var(--base-300)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="card-title">
                  <h3>{s.subtitulo2}</h3>
               </div>
            </div>
         </div>
      
         <div className="row">
            <div className="card-container" id="card-3">
               <div className="card-img">
                  <img src={s.imagem3} alt="" />
               </div>
               <div className="svg-stroke svg-stroke-1">
                  <svg width="2453" height="2273" viewBox="0 0 2453 2273" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
                        stroke="var(--acento)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="svg-stroke svg-stroke-2">
                  <svg width="2250" height="2535" viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
                        stroke="var(--base-300)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="card-title">
                  <h3>{s.subtitulo3}</h3>
               </div>
            </div>
            <div className="card-container" id="card-4">
               <div className="card-img">
                  <img src={s.imagem4} alt="" />
               </div>
               <div className="svg-stroke svg-stroke-1">
                  <svg width="2453" height="2273" viewBox="0 0 2453 2273" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
                        stroke="var(--acento)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="svg-stroke svg-stroke-2">
                  <svg width="2250" height="2535" viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
                        stroke="var(--base-300)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="card-title">
                  <h3>{s.subtitulo4}</h3>
               </div>
            </div>
         </div>
      
         <div className="row">
            <div className="card-container" id="card-5">
               <div className="card-img">
                  <img src={s.imagem5} alt="" />
               </div>
               <div className="svg-stroke svg-stroke-1">
                  <svg width="2453" height="2273" viewBox="0 0 2453 2273" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
                        stroke="var(--acento)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="svg-stroke svg-stroke-2">
                  <svg width="2250" height="2535" viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
                        stroke="var(--base-300)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="card-title">
                  <h3>{s.subtitulo5}</h3>
               </div>
            </div>
            <div className="card-container" id="card-6">
               <div className="card-img">
                  <img src={s.imagem6} alt="" />
               </div>
               <div className="svg-stroke svg-stroke-1">
                  <svg width="2453" height="2273" viewBox="0 0 2453 2273" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
                        stroke="var(--acento)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="svg-stroke svg-stroke-2">
                  <svg width="2250" height="2535" viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
                        stroke="var(--base-300)" strokeWidth="200" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="card-title">
                  <h3>{s.subtitulo6}</h3>
               </div>
            </div>
         </div>
      
         <footer>
            <h1>{s.titulo2}</h1>
         </footer>
    </section>
  );
}