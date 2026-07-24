"use client";

/* Saiu daqui: a carta inteira (agora `menu`, cada categoria já traz a sua própria
 * tagline, em vez do antigo mapa CATEGORY_TAGLINES por nome), o título do hero e as
 * etiquetas do rodapé (paginas.menu + identidade.tagline, partilhada com o Nav). */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Copy from "@/components/Copy/Copy";
import Testimonials from "@/components/Testimonials/Testimonials";
import { identidade, menu, paginas } from "@/theme/content";

import "./menu.css";

gsap.registerPlugin(ScrollTrigger);

function flattenCategoryItems(category) {
  if (category.itens) return category.itens;
  if (category.grupos) {
    return category.grupos.flatMap((group) =>
      group.itens.map((item) => ({ ...item, grupo: group.titulo })),
    );
  }
  return [];
}

export default function Menu() {
  const menuListRef = useRef(null);

  /* stagger-reveal menu cards as each grid enters the viewport */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".menu-grid").forEach((grid) => {
        const cards = grid.querySelectorAll(".menu-grid-card");

        gsap.set(cards, { opacity: 0, y: 30, scale: 0.75 });

        ScrollTrigger.create({
          trigger: grid,
          start: "top 70%",
          once: true,
          onEnter: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.08,
            });
          },
        });
      });
    }, menuListRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="menu-hero">
        <div className="container">
          <Copy type="words" animateOnScroll={false} delay={0.85}>
            <h2>{paginas.menu.titulo}</h2>
          </Copy>
        </div>

        <div className="section-footer">
          <Copy type="lines" animateOnScroll={false} delay={1.1}>
            <p className="sm">{paginas.menu.etiqueta}</p>
          </Copy>
          <Copy type="lines" animateOnScroll={false} delay={1.2}>
            <p className="sm">{identidade.tagline}</p>
          </Copy>
        </div>
      </section>

      <section className="menu-list" ref={menuListRef}>
        <div className="container">
          {menu.map((category, categoryIndex) => {
            const items = flattenCategoryItems(category);
            const tagline = category.tagline;

            return (
              <div className="menu-category" key={categoryIndex}>
                <div className="menu-category-header">
                  <Copy type="words" animateOnScroll>
                    <h3>{category.categoria}</h3>
                  </Copy>
                  {tagline && (
                    <Copy type="lines" animateOnScroll>
                      <p className="md">{tagline}</p>
                    </Copy>
                  )}
                </div>

                <div className="menu-grid">
                  {items.map((item, itemIndex) => (
                    <div
                      className={`menu-grid-card ${itemIndex % 2 !== 0 ? "alt" : ""}`}
                      key={itemIndex}
                    >
                      <div className="menu-grid-card-top">
                        <h6>{item.nome}</h6>
                        {item.peso && <p className="mono">{item.peso}</p>}
                      </div>

                      {(item.descricao || item.tamanho) && (
                        <p>{item.descricao || item.tamanho}</p>
                      )}

                      <p className="menu-grid-card-price">{item.preco}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Testimonials />
    </>
  );
}
