"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/liquid-glass-apple
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   
  //           document.addEventListener("DOMContentLoaded", () => {
  //               const navButtons = document.querySelectorAll(".nav-btn");
  //               const activePill = document.getElementById("active-pill");
  //               const themeBtn = document.getElementById("theme-btn");
  //               const nav = document.getElementById("nav");
  //               const glare = document.getElementById("glare");
  //   
  //               // Die Funktion, die den Apple Slider berechnet
  //               function updatePill(btn, smooth = true) {
  //                   if (!btn) return;
  //                   
  //                   // Transition an/aus für Resize & Initiales Laden
  //                   if (!smooth) {
  //                       activePill.style.transition = 'none';
  //                   } else {
  //                       activePill.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), width 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), background 0.5s ease, box-shadow 0.5s ease';
  //                   }
  //                   
  //                   activePill.style.width = `${btn.offsetWidth}px`;
  //                   activePill.style.transform = `translateX(${btn.offsetLeft}px)`;
  //               }
  //   
  //               // Beim ersten Laden Position ohne Ruckeln setzen
  //               const initialActive = document.querySelector(".nav-btn.active");
  //               if (initialActive) {
  //                   setTimeout(() => {
  //                       updatePill(initialActive, false);
  //                       // Force CSS Reflow
  //                       void activePill.offsetWidth; 
  //                   }, 50);
  //               }
  //   
  //               // Klick auf die Navigation
  //               navButtons.forEach(btn => {
  //                   btn.addEventListener("click", () => {
  //                       navButtons.forEach(b => b.classList.remove("active"));
  //                       btn.classList.add("active");
  //                       updatePill(btn);
  //                   });
  //               });
  //   
  //               // Dark / Light Mode Switch Logik
  //               themeBtn.addEventListener("click", () => {
  //                   const root = document.documentElement;
  //                   const isDark = root.getAttribute("data-theme") === "dark";
  //                   root.setAttribute("data-theme", isDark ? "light" : "dark");
  //                   
  //                   // Kurz warten, falls sich Schriftbreiten (font-weight) leicht ändern
  //                   setTimeout(() => {
  //                       const active = document.querySelector(".nav-btn.active");
  //                       if (active) updatePill(active);
  //                   }, 100);
  //               });
  //   
  //               // Position sofort anpassen, wenn das Fenster gedreht/skaliert wird
  //               window.addEventListener("resize", () => {
  //                   const active = document.querySelector(".nav-btn.active");
  //                   if (active) updatePill(active, false);
  //               });
  //   
  //               // Interaktiver Liquid Glare (Der weiße Lichtkegel im Glas)
  //               nav.addEventListener("mousemove", (e) => {
  //                   const rect = nav.getBoundingClientRect();
  //                   const x = e.clientX - rect.left;
  //                   const y = e.clientY - rect.top;
  //                   
  //                   // CSS Variablen füttern, performanter als Style-Strings in JS
  //                   glare.style.setProperty("--x", `${x}px`);
  //                   glare.style.setProperty("--y", `${y}px`);
  //               });
  //           });
  //       
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-liquid-glass-apple" ref={raiz}>
      <div className="bg-mesh">
              <div className="blob blob-1"></div>
              <div className="blob blob-2"></div>
              <div className="blob blob-3"></div>
          </div>
      
          <nav className="liquid-nav" id="nav">
              <div className="liquid-glare-container">
                  <div className="liquid-glare" id="glare"></div>
              </div>
      
              <div className="nav-items">
                  <div className="active-pill" id="active-pill"></div>
      
                  <button className="nav-btn active" onClick={s.onClick}>
                      <div className="btn-content">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                          <span>{s.rotulo}</span>
                      </div>
                  </button>
      
                  <button className="nav-btn" onClick={s.onClick}>
                      <div className="btn-content">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          <span>{s.rotulo2}</span>
                      </div>
                  </button>
      
                  <button className="nav-btn" onClick={s.onClick}>
                      <div className="btn-content">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="8" y1="6" x2="21" y2="6"></line>
                              <line x1="8" y1="12" x2="21" y2="12"></line>
                              <line x1="8" y1="18" x2="21" y2="18"></line>
                              <line x1="3" y1="6" x2="3.01" y2="6"></line>
                              <line x1="3" y1="12" x2="3.01" y2="12"></line>
                              <line x1="3" y1="18" x2="3.01" y2="18"></line>
                          </svg>
                          <span>{s.rotulo3}</span>
                      </div>
                  </button>
              </div>
      
              <div className="divider"></div>
      
              <button className="theme-btn" id="theme-btn" aria-label="Dark Mode Toggle" onClick={s.onClick}>
                  <div className="theme-icon-wrapper">
                      <svg className="sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="5"></circle>
                          <line x1="12" y1="1" x2="12" y2="3"></line>
                          <line x1="12" y1="21" x2="12" y2="23"></line>
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                          <line x1="1" y1="12" x2="3" y2="12"></line>
                          <line x1="21" y1="12" x2="23" y2="12"></line>
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                      <svg className="moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                  </div>
              </button>
          </nav>
    </section>
  );
}