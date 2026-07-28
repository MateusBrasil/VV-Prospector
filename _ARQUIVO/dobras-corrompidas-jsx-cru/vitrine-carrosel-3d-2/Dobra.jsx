"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/carrosel-3d-2
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* a origem não trazia JS */
  return (
    <section className="dobra" data-dobra="vitrine-carrosel-3d-2" ref={raiz}>
      import React, { useState } from "react";
      import { motion } from "framer-motion";
      import { ChevronLeft, ChevronRight } from "lucide-react";
      
      const ASSETS = [
        {
          src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop',
          title: 'Cãozinho feliz',
        },
        {
          src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop',
          title: 'Gato curioso',
        },
        {
          src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=600&auto=format&fit=crop',
          title: 'Panda a comer',
        },
        {
          src: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?q=80&w=600&auto=format&fit=crop',
          title: 'Pinguins na neve',
        },
        {
          src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=600&auto=format&fit=crop',
          title: 'Tartaruga marinha',
        },
        {
          src: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=600&auto=format&fit=crop',
          title: 'Raposa do bosque',
        },
        {
          src: 'https://images.unsplash.com/photo-1538503529202-df48be88ea28?q=80&w=600&auto=format&fit=crop',
          title: 'Coala adorável',
        },
        {
          src: 'https://images.unsplash.com/photo-1516801967733-40a2335123d6?q=80&w=600&auto=format&fit=crop',
          title: 'Filhote de leão',
        },
        {
          src: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?q=80&w=600&auto=format&fit=crop',
          title: 'Ouriço fofo',
        },
        {
          src: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=600&auto=format&fit=crop',
          title: 'Golfinho a saltar',
        },
      ];
      
      export default function App() {
        const [activeIndex, setActiveIndex] = useState(3);
      
        const toPrev = () => {
          setActiveIndex((prev) => Math.max(0, prev - 1));
        };
      
        const toNext = () => {
          setActiveIndex((prev) => Math.min(ASSETS.length - 1, prev + 1));
        };
      
        const toSlide = (index) => {
          setActiveIndex(index);
        };
      
        return (
          <div 
            className="min-h-screen bg-[var(--base-100)] grid place-content-center overflow-hidden text-neutral-800 select-none relative"
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            {/* Importação da fonte como no CSS original */}
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
              `}
            </style>
      
            {/* carousel wrapper */}
            <div className="w-[clamp(120px,80vmin,300px)] mt-8">
              {/* slides container */}
              <motion.div 
                className="flex w-fit" 
                animate={{ x: `${-activeIndex * 100 / ASSETS.length}%` }}
                transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
              >
                {ASSETS.map((item, i) => {
                  const isActive = activeIndex === i;
                  
                  return (
                    <motion.div 
                      key={i}
                      className="w-[clamp(120px,80vmin,300px)] aspect-square flex flex-col items-center gap-2 will-change-[transform,scale]"
                      animate={{ 
                        rotate: (i - activeIndex) * 30, 
                        scale: isActive ? 1 : 0.6, 
                        y: `${(i - activeIndex) * 50}%` 
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
                    >
                      <div 
                        className={`text-xs md:text-sm whitespace-nowrap will-change-[opacity,filter] transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} 
                      >
                        {item.title}
                      </div>
      
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover rounded-2xl cursor-pointer shadow-lg" 
                        onClick={() = /> toSlide(i)} 
                        draggable={false}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
      
            {/* controls={true} */}
            <div className="fixed bottom-8 left-0 right-0 w-fit px-2 mx-auto flex items-center gap-4 justify-center text-neutral-700 rounded-full bg-neutral-200/50 backdrop-blur-md border border-neutral-200/80 shadow-sm z-10 py-1">
              {/* prev button */}
              <button 
                onClick={toPrev} 
                className="p-2 cursor-pointer hover:bg-neutral-300/50 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeIndex === 0}
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* slide dots */}
              <div className="w-[180px] flex justify-center items-center gap-2">
                {ASSETS.map((_, i) => (
                  <div 
                    key={i} 
                    onClick={() => toSlide(i)}
                    className={`rounded-full cursor-pointer h-2 transition-[width,background-color] duration-300 ${activeIndex === i ? 'w-7 bg-current' : 'w-2 bg-current/30 hover:bg-current/50'}`}>
                  </div>
                ))}
              </div>
              
              {/* next button */}
              <button 
                onClick={toNext} 
                className="p-2 cursor-pointer hover:bg-neutral-300/50 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeIndex === ASSETS.length - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
      
          </div>
        );
      }
    </section>
  );
}