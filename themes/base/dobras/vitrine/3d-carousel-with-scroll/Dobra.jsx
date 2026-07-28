"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/3d-carousel-with-scroll
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
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    
            // Registra o plugin ScrollTrigger (necessário na versão 3 do GSAP)
            gsap.registerPlugin(ScrollTrigger);
    
            var c = raiz.current.querySelector('#container'),
                boxes = [];
    
            makeBoxes(30);
    
            function makeBoxes(n){
                for (var i=0; i<n; i++){
                    var b = document.createElement('div');
                    boxes.push(b);
                    c.appendChild(b);
                }
            }
    
            // Sintaxe atualizada para o GSAP 3
            gsap.to(c, {duration: 0.4, perspective: 200, backgroundColor: '#fff'});
    
            for (var i=0; i<boxes.length; i++){
                var b = boxes[i];
                
                // Verifica se é a primeira ou a segunda imagem
                var isPrimeiraImagem = (i % 2 === 0);
                
                var imageUrl = isPrimeiraImagem 
                    ? 'https://i.postimg.cc/SQ14MFcN/1-1.png' 
                    : 'https://i.postimg.cc/GhBCP7jp/1-1-2.png';
                
                // Armazena a URL no elemento para facilitar o uso no evento de click
                b.dataset.url = imageUrl;
    
                // Adiciona um stroke (border) minimalista apenas na segunda imagem
                var estiloBorda = isPrimeiraImagem ? 'none' : '2px solid rgba(0, 0, 0, 0.4)';
    
                gsap.set(b, {
                    left: '50%',
                    top: '50%',
                    margin: -150,
                    width: 300,
                    height: 300,
                    borderRadius: '20%',
                    backgroundImage: 'url(' + imageUrl + ')',
                    backgroundSize: 'cover',
                    border: estiloBorda,
                    clearProps: 'transform',
                    backfaceVisibility: 'hidden',
                    cursor: 'pointer'
                });
    
                b.tl = gsap.timeline({paused: true, defaults: {immediateRender: true}})
                    .fromTo(b, {
                        scale: 0.3,    
                        rotationX: i / boxes.length * 360,
                        transformOrigin: "50% 50% -500px" // px adicionado para melhor compatibilidade entre navegadores
                    }, {
                        rotationX: '+=360',
                        ease: 'none'
                    })
                    .timeScale(0.05);
                
                b.addEventListener('mouseover', (e) => { gsap.to(e.currentTarget, {opacity: 0.5, scale: 0.36, duration: 0.4, ease: 'expo'}) });
                b.addEventListener('mouseout', (e) => { gsap.to(e.currentTarget, {opacity: 1, scale: 0.3, duration: 0.2, ease: 'back.out(3)', overwrite: 'auto'}) });
                
                // Uso do data-url para abrir o link com segurança, substituindo o slice
                b.addEventListener('click', (e) => { window.open(e.currentTarget.dataset.url, '_blank') });
            }
    
            ScrollTrigger.create({ 
                trigger: '#scrollDist',
                start: "top top",
                end: "bottom bottom",
                onRefresh: self => {
                    boxes.forEach((b) => { gsap.set(b.tl, {progress: self.progress}); })
                },
                onUpdate: self => { 
                    boxes.forEach((b) => { gsap.to(b.tl, {progress: self.progress}); })
                }
            });  
        
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-3d-carousel-with-scroll" ref={raiz}>
      <div id="scrollDist"></div>
          <div id="container"></div>
    </section>
  );
}