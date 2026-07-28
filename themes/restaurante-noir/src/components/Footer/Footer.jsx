"use client";

/* Saiu daqui: as fotos dos postais (blocos.footer.postais, cicladas para as 5 posições
 * de design fixas: rotação e deslocamento continuam no tema, não são conteúdo do
 * cliente), o heading, o label do botão, e o copyright/assinatura, que são DERIVADOS
 * (©ano nome / nome, cidade) e por isso nem aparecem no cliente.json. */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "@/components/Button/Button";
import Copy from "@/components/Copy/Copy";
import { blocos, ciclar, identidade, tem } from "@/theme/content";

import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 1000;

const POSICOES_POSTAIS = [
  { rotation: -8, x: "-25%" },
  { rotation: 6, x: "20%" },
  { rotation: -4, x: "-15%" },
  { rotation: 10, x: "25%" },
  { rotation: -12, x: "-10%" },
];

const POSTCARDS = ciclar(blocos.footer?.postais, POSICOES_POSTAIS.length).map(
  (image, index) => ({ image, ...POSICOES_POSTAIS[index] }),
);

const Footer = () => {
  const pathname = usePathname();
  const sectionRef = useRef(null);
  const visitButtonRef = useRef(null);
  const visitButtonContainerRef = useRef(null);

  /* button scroll-triggered entrance, re-runs on route change */
  useEffect(() => {
    const heading = sectionRef.current?.querySelector(".footer-heading");
    const buttonContainer = visitButtonContainerRef.current;
    if (!heading || !buttonContainer) return;

    gsap.set(buttonContainer, { autoAlpha: 0, y: 40 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: heading,
      start: "top 50%",
      once: true,
      onEnter: () => {
        gsap.to(buttonContainer, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      },
    });

    return () => scrollTrigger.kill();
  }, [pathname]);

  /* postcard hover effect (desktop only) */
  useEffect(() => {
    const section = sectionRef.current;
    const button = visitButtonRef.current;
    if (!section || !button) return;

    const cards = gsap.utils.toArray(".footer-postcard");
    const postcardsContainer = section.querySelector(".footer-postcards");
    if (!cards.length || !postcardsContainer) return;

    const postcardTimeline = gsap.timeline({ paused: true });

    cards.forEach((card, index) => {
      const cardData = POSTCARDS[index];
      postcardTimeline.fromTo(
        card,
        { yPercent: 250, xPercent: 0, rotation: 0 },
        {
          yPercent: 55,
          xPercent: parseFloat(cardData.x),
          rotation: cardData.rotation,
          duration: 0.8,
          ease: "power3.out",
        },
        index * 0.07,
      );
    });

    const handleMouseEnter = () => postcardTimeline.play();
    const handleMouseLeave = () => postcardTimeline.reverse();

    let isHoverActive = false;

    const enableHover = () => {
      if (isHoverActive) return;
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      postcardsContainer.style.display = "";
      isHoverActive = true;
    };

    const disableHover = () => {
      if (!isHoverActive) return;
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      postcardTimeline.pause(0);
      postcardsContainer.style.display = "none";
      isHoverActive = false;
    };

    const handleResize = () => {
      window.innerWidth < MOBILE_BREAKPOINT ? disableHover() : enableHover();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      disableHover();
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <footer className="footer" ref={sectionRef}>
      <div className="footer-content">
        <div className="footer-heading">
          <Copy key={`heading-${pathname}`} type="lines" animateOnScroll>
            <h2>{blocos.footer.titulo}</h2>
          </Copy>
        </div>

        <div className="footer-button-container" ref={visitButtonContainerRef}>
          <Button href="/reservation" ref={visitButtonRef}>
            {blocos.footer.botao}
          </Button>
        </div>
      </div>

      {tem("blocos.footer.postais") && (
        <div className="footer-postcards">
          {POSTCARDS.map((card, index) => (
            <div className="footer-postcard" key={index}>
              <img src={card.image} alt={identidade.nome} />
            </div>
          ))}
        </div>
      )}

      <div className="footer-bar">
        <div className="footer-bar-left">
          <Copy
            key={`left-${pathname}`}
            type="lines"
            trigger=".footer-heading"
            animateOnScroll
          >
            <p className="sm">{blocos.footer.copyright}</p>
          </Copy>
        </div>
        <div className="footer-bar-right">
          <Copy
            key={`right-${pathname}`}
            type="lines"
            trigger=".footer-heading"
            animateOnScroll
          >
            <p className="sm">{blocos.footer.assinatura}</p>
          </Copy>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
