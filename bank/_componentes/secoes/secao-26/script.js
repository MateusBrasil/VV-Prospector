/* Luzen — FAQ
   Sin lógica local. Todo corre desde /luzen/scripts/animations.js:
   - reveals [data-reveal] vía GSAP + ScrollTrigger (+ SplitText para headings)
   - aparición de la imagen .img-appear / .img-parallax con su máscara .img-wrap
   - parallax de .img-parallax ligado al scroll
   - acordeón nativo details.accordion: el motor engancha el click del <summary>,
     anima .accordion_bottom (height 0↔auto, 400ms power3.out) y .line-vertical
     (scale 1↔0, "+" colapsa a "−"), y aplica exclusividad por grupo (.faq_list).
   No agregar JS aquí salvo algo que el motor compartido NO cubra. */
