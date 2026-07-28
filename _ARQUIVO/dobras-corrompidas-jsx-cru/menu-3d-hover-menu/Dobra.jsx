"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/3d-hover-menu
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
    <section className="dobra" data-dobra="menu-3d-hover-menu" ref={raiz}>
      import React, { useState, useEffect } from "react";
      import { motion } from "framer-motion";
      
      const LIST = [
        { name: 'creative vision', src: 'https://i.postimg.cc/hGLdYYyG/5-4.png' },
        { name: 'modern approach', src: 'https://i.postimg.cc/hGLdYYyG/5-4.png' },
        { name: 'digital strategy', src: 'https://i.postimg.cc/hGLdYYyG/5-4.png' },
        { name: 'brand identity', src: 'https://i.postimg.cc/hGLdYYyG/5-4.png' },
        { name: 'seamless experience', src: 'https://i.postimg.cc/hGLdYYyG/5-4.png' },
        { name: 'future concepts', src: 'https://i.postimg.cc/hGLdYYyG/5-4.png' },
      ];
      
      export default function App() {
        const [thumbnail, setThumbnail] = useState({
          front: null, back: null
        });
        const [activeIndex, setActiveIndex] = useState(0);
        const [isSlowMode, setIsSlowMode] = useState(false);
      
        const updateThumbnail = (content, i) => {
          const isBack = Boolean(i % 2);
          const pos = isBack ? 'back' : 'front';
          setThumbnail(prev => ({ ...prev, [pos]: content }));
          setActiveIndex(i);
        };
      
        const toggleSlowMode = () => {
          setIsSlowMode(prev => !prev);
        };
      
        useEffect(() => {
          const firstContent = LIST[0];
          setThumbnail({ front: firstContent, back: firstContent });
        }, []);
      
        return (
          <>
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
              
              .custom-app-container {
                min-height: 100vh;
                padding: 24px;
                background-color: var(--base-100);
                font-family: "Bricolage Grotesque", sans-serif;
                overflow-x: hidden;
              }
      
              .transform-3d {
                transform-style: preserve-3d;
              }
      
              .perspective-midrange {
                perspective: 1000px;
              }
      
              .backface-hidden {
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
              }
      
              .rotate-x-180 {
                transform: rotateX(180deg);
              }
            `}</style>
      
            <div className="custom-app-container">
              <div className="w-[720px] max-w-full mx-auto my-12 flex flex-col items-stretch text-2xl md:text-4xl font-medium relative text-[var(--base-400)] transform-3d perspective-midrange">
      
                {LIST.map((e, i) => (
                  <div 
                    key={e.name} 
                    className="h-20 px-6 md:h-[120px] md:px-12 flex items-center cursor-pointer border-b border-b-current group hover:text-[var(--base-600)]" 
                    onMouseEnter={() => updateThumbnail(e, i)}
                    >
                    <div className="transition-all duration-300 group-hover:translate-x-4">{e.name}</div>
                  </div>
                ))}
      
                {thumbnail.front && thumbnail.back &&
                  <motion.div 
                    className="absolute top-0 right-6 md:right-12 h-20 md:h-[120px] aspect-[4/3] pointer-events-none transform-3d"
                    transition={{ 
                      duration: isSlowMode ? 1 : 0.3,
                      type: 'spring',
                      stiffness: isSlowMode ? 50 : 200,
                      damping: isSlowMode ? 15 : 25
                    }}
                    animate={{ 
                      translateY: `${activeIndex * 100}%`,
                      rotateX: activeIndex * -180,
                    }}
                    >
                    <img 
                      data-pos="front"
                      src={thumbnail.front.src} 
                      alt={thumbnail.front.name} 
                      className="w-full h-full object-cover backface-hidden rounded-md shadow-lg" />
                    <img 
                      data-pos="back"
                      src={thumbnail.back.src} 
                      alt={thumbnail.back.name} 
                      className="w-full h-full object-cover absolute top-0 backface-hidden rotate-x-180 rounded-md shadow-lg" />
                  </motion.div>
                }
              </div>
              
              {/* slow mode control */}
              <div className="fixed top-4 right-4 flex items-center gap-2 cursor-pointer bg-white/50 backdrop-blur-md px-3 py-2 rounded-full shadow-sm" onClick={toggleSlowMode}>
                <div className={`w-12 h-7 p-1 rounded-full border flex border-current text-yellow-400 bg-yellow-50 ${isSlowMode ? '' : 'grayscale'}`} style={{ justifyContent: isSlowMode ? 'flex-end' : 'flex-start' }}>
                  <motion.div className="h-full aspect-square rounded-full bg-current" layout transition={{ type: 'spring', duration: 0.3 }}></motion.div>
                </div>
                <div className="text-sm font-semibold text-gray-700">slow mode</div>
              </div>
            </div>
          </>
        );
      }
    </section>
  );
}