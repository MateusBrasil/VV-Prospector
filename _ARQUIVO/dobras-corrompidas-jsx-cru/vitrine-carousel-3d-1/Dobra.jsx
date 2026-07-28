"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/carousel-3d-1
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
    <section className="dobra" data-dobra="vitrine-carousel-3d-1" ref={raiz}>
      import React, { useState } from "react";
      import { motion } from "framer-motion";
      import { ChevronLeft, ChevronRight } from "lucide-react";
      
      const ASSETS = [
        {
          src: 'https://picsum.photos/id/10/500/700',
          title: 'Floresta Verde',
        },
        {
          src: 'https://picsum.photos/id/11/500/700',
          title: 'Paisagem Natural',
        },
        {
          src: 'https://picsum.photos/id/12/500/700',
          title: 'Praia Tranquila',
        },
        {
          src: 'https://picsum.photos/id/13/500/700',
          title: 'Costa e Mar',
        },
        {
          src: 'https://picsum.photos/id/14/500/700',
          title: 'Oceano Pacífico',
        },
        {
          src: 'https://picsum.photos/id/15/500/700',
          title: 'Cachoeira Escondida',
        },
        {
          src: 'https://picsum.photos/id/16/500/700',
          title: 'Vista Litorânea',
        },
        {
          src: 'https://picsum.photos/id/17/500/700',
          title: 'Caminho na Natureza',
        },
        {
          src: 'https://picsum.photos/id/28/500/700',
          title: 'Árvores da Floresta',
        },
        {
          src: 'https://picsum.photos/id/29/500/700',
          title: 'Montanhas Nevadas',
        },
      ]
      
      export default function App() {
        const [activeIndex, setActiveIndex] = useState(3)
      
        const toPrev = () => {
          setActiveIndex(prev => Math.max(0, prev - 1))
        }
      
        const toNext = () => {
          setActiveIndex(prev => Math.min(ASSETS.length - 1, prev + 1))
        }
      
        const toSlide = (index) => {
          setActiveIndex(index)
        }
      
        return (
          <div 
            className="min-h-screen w-full bg-[var(--base-100)] flex items-center justify-center overflow-hidden"
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            {/* Importação da fonte como no seu CSS original */}
            <style>
              {`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');`}
            </style>
      
            <div className="p-2 text-neutral-800 select-none">
              {/* carousel wrapper */}
              <div className="w-[120px] md:w-[200px] relative">
                {/* slides container */}
                <motion.div 
                  className="flex w-fit" 
                  animate={{ x: `${-activeIndex * 100 / ASSETS.length}%` }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
                >
                  {ASSETS.map((item, i) => {
                    const isActive = activeIndex === i
                    {/* slide */}
                    return (
                      <div className="[perspective:1000px]" key={i}>
                        <motion.div 
                          className="w-[120px] md:w-[200px] aspect-[3/4] flex flex-col items-center gap-2 will-change-[transform,scale]"
                          animate={{ rotateY: (activeIndex - i) * 60, scale: isActive ? 1 : 0.85  }}
                          transition={{ type: 'spring', bounce: 0.1, duration: 1 }}
                        >
                          <img 
                            src={item.src} 
                            alt={item.title} 
                            className="w-full h-full object-cover rounded-lg cursor-pointer shadow-md" 
                            onClick={() = /> toSlide(i)} 
                          />
      
                          <motion.div 
                            className="text-xs md:text-sm whitespace-nowrap will-change-[opacity,filter] font-medium mt-1" 
                            animate={{ filter: isActive ? 'blur(0)' : 'blur(2px)', opacity: isActive ? 1 : 0 }}
                          >
                            {item.title}
                          </motion.div>
                        </motion.div>
                      </div>
                    )
                  })}
                </motion.div>
              </div>
      
              {/* controls={true} */}
              <div className="fixed bottom-24 left-0 right-0 w-fit px-2 mx-auto flex items-center gap-4 justify-center text-neutral-700 rounded-full bg-neutral-200/50 backdrop-blur-md border border-neutral-300/80 shadow-sm z-50">
                {/* prev button */}
                <button 
                  onClick={toPrev} 
                  className="p-2 cursor-pointer hover:bg-neutral-300/50 rounded-full transition-colors disabled:opacity-30"
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
                      className={`rounded-full cursor-pointer h-2 transition-[width,background-color] duration-300 ${
                        activeIndex === i ? 'w-7 bg-neutral-800' : 'w-2 bg-neutral-800/30 hover:bg-neutral-800/50'
                      }`}
                    >
                    </div>
                  ))}
                </div>
      
                {/* next button */}
                <button 
                  onClick={toNext} 
                  className="p-2 cursor-pointer hover:bg-neutral-300/50 rounded-full transition-colors disabled:opacity-30"
                  disabled={activeIndex === ASSETS.length - 1}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )
      }
    </section>
  );
}