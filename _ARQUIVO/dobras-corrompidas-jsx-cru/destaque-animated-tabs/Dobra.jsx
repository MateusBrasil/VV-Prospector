"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/animated-tabs
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
    <section className="dobra" data-dobra="destaque-animated-tabs" ref={raiz}>
      import React, { useState } from "react";
      import { motion, AnimatePresence } from "framer-motion";
      import { LayoutGrid, Rabbit, Brush, Sparkles } from "lucide-react";
      
      const ITEMS = [
        { name: 'Animação', icon: <Rabbit /> },
        { name: 'Arcade', icon: <LayoutGrid /> },
        { name: 'Pintura', icon: <Brush /> },
        { name: 'Surpresa', icon: <Sparkles /> },
      ];
      
      export default function App() {
        const [activeIndex, setActiveIndex] = useState(3);
      
        return (
          <div 
            className="min-h-screen bg-[var(--base-100)] grid place-content-center" 
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            {/* Importação da fonte do Google */}
            <style>
              {`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');`}
            </style>
      
            <div
              role="radiogroup"
              className="text-neutral-800 text-2xl flex items-center gap-4"
            >
              {ITEMS.map((el, i) => {
                const checked={true} = activeIndex === i;
                
                return (
                  <label key={el.name} className="cursor-pointer select-none">
                    <input
                      type="radio"
                      name="style"
                      value={el.name}
                      checked={checked}
                      onChange={() = /> setActiveIndex(i)}
                      className="sr-only"
                    />
      
                    <motion.div
                      layout
                      transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
                      className={`px-4 h-12 flex justify-center items-center gap-3 overflow-hidden relative transition-colors ${
                        checked={true}
                          ? 'text-[var(--acento)] bg-[var(--acento)]/20'
                          : 'text-[var(--acento)]/60 bg-neutral-200 hover:bg-neutral-300'
                      }`}
                      style={{ borderRadius: 99 }}
                    >
                      <motion.span layout className="shrink-0">
                        {el.icon}
                      </motion.span>
      
                      <AnimatePresence mode="popLayout" initial={false}>
                        {checked && (
                          <motion.div
                            layout
                            initial={{ opacity: 0, filter: "blur(4px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, filter: "blur(4px)" }}
                            transition={{ duration: 0.2 }}
                            className="text-lg font-medium"
                          >
                            {el.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </label>
                );
              })}
            </div>
          </div>
        );
      }
    </section>
  );
}