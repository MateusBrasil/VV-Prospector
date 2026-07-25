"use client";

/* Saiu daqui: a carta (agora lida de @/theme/content, `diningMenu-data.js` foi apagado),
 * o título "A Carta" (blocos.diningMenu.titulo) e a assinatura no fundo do cartão de
 * pré-visualização (identidade.nome, em vez do nome do cliente escrito à mão). */

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HiOutlineArrowUp,
  HiOutlineArrowDown,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";

import Copy from "@/components/Copy/Copy";
import { blocos, identidade, imagens, menu as diningMenu } from "@/theme/content";

import "./DiningMenu.css";

gsap.registerPlugin(ScrollTrigger);

const DiningMenu = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMenu = diningMenu[activeIndex];
  // Uma foto explícita no contrato serve também para fixtures locais; clientes
  // existentes mantêm os assets históricos por categoria sem alteração visual.
  const imagemMenu = imagens.diningMenu || null;

  /* navegacao circular: nunca fica sem saida numa das pontas */
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + diningMenu.length) % diningMenu.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % diningMenu.length);
  };

  /* entrance animations on scroll */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const navButtons = section.querySelectorAll(".dining-nav-button-wrapper");
    const previewCard = section.querySelector(".dining-preview-card");
    const minimapItems = section.querySelectorAll(".dining-minimap-item");

    gsap.set(navButtons, { scale: 0 });
    gsap.set(previewCard, { autoAlpha: 0, y: 50 });
    gsap.set(minimapItems, { autoAlpha: 0, y: 30 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 30%",
      once: true,
      onEnter: () => {
        gsap.to(navButtons, {
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
        });

        gsap.to(previewCard, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.to(minimapItems, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
        });
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  return (
    <section className="dining-menu" ref={sectionRef}>
      <div className="dining-menu-bg">
        <img src={imagemMenu || "/dining-menu/dining-menu.jpg"} alt="" />
      </div>

      <div className="container">
        <div className="dining-menu-header">
          <Copy type="words" animateOnScroll>
            <h3>{blocos.diningMenu.titulo}</h3>
          </Copy>
        </div>

        <div className="dining-menu-content">
          <div className="dining-nav">
            <div className="dining-nav-button-wrapper">
              <button
                className="dining-nav-button dining-nav-prev"
                onClick={handlePrev}
                aria-label="Categoria anterior"
              >
                <HiOutlineArrowUp className="nav-icon-v" />
                <HiOutlineArrowLeft className="nav-icon-h" />
              </button>
            </div>

            <div className="dining-nav-button-wrapper">
              <button
                className="dining-nav-button dining-nav-next"
                onClick={handleNext}
                aria-label="Categoria seguinte"
              >
                <HiOutlineArrowDown className="nav-icon-v" />
                <HiOutlineArrowRight className="nav-icon-h" />
              </button>
            </div>
          </div>

          <div className="dining-preview">
            <div className="dining-preview-card">
              <h6>{activeMenu.categoria}</h6>

              {activeMenu.itens &&
                activeMenu.itens.map((item, index) => (
                  <div key={index} className="dining-preview-item">
                    <div className="dining-preview-item-row">
                      <p>
                        {item.nome} {item.peso}
                      </p>
                      <p>{item.preco}</p>
                    </div>
                    {item.descricao && (
                      <p className="dining-preview-item-description">
                        {item.descricao}
                      </p>
                    )}
                  </div>
                ))}

              {activeMenu.grupos &&
                activeMenu.grupos.map((group, groupIndex) => (
                  <div key={groupIndex} className="dining-preview-group">
                    <div className="dining-preview-group-header">
                      <span></span>
                      <p className="mono">{group.titulo}</p>
                      <span></span>
                    </div>

                    {group.itens.map((item, itemIndex) => (
                      <div key={itemIndex} className="dining-preview-item-row">
                        <p>
                          {item.nome} {item.tamanho || ""}
                        </p>
                        <p>{item.preco}</p>
                      </div>
                    ))}
                  </div>
                ))}

              <div className="dining-preview-footer">
                <p>{identidade.nome}</p>
              </div>
            </div>
          </div>

          <div className="dining-minimap">
            {diningMenu.map((menu, index) => (
              <div
                key={index}
                className={`dining-minimap-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="dining-minimap-img">
                  <img
                    src={imagemMenu || `/dining-menu/dining-menu-${menu.categoria
                      .toLowerCase()
                      .replaceAll(" ", "-")}.jpg`}
                    alt={menu.categoria}
                  />
                </div>
                <p>{menu.categoria}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningMenu;
