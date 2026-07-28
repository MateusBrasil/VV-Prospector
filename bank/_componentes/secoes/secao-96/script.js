// hirely-blog-detail — no local logic. El cuerpo del artículo (.scroll-animation
// que envuelve el .text-rich-text) revela vía /hirely/scripts/scroll-reveal.js
// (GSAP + ScrollTrigger). El header del post (título + descripción + imagen) es
// markup estático del template; sus atributos `bounce-enter` son hooks del motor de
// hero (hero-enter.js), que esta sección NO carga por ser tipo Plain/reveal, así que
// el header renderiza visible de inmediato (fail-safe, sin opacity:0 inline). Stub
// mantenido para la convención de 4 archivos. Global, sin `export`.
