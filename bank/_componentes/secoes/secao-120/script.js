/* Luzen — About Hero
   Sin lógica local. Toda la entrada on-load corre desde /luzen/scripts/animations.js:
   - [hero="heading"] entra con SplitText (word-stagger) — requiere el plugin SplitText por CDN
   - [hero="button"] entra con stagger de entrada
   - .img-appear (la imagen del hero) hace su máscara de aparición + .img-parallax al scroll
   El marquee de partners se anima por CSS (ver style.css), no por GSAP. */

/* ===== TEMLIS-INLINED-NAVBAR: luzen-navbar behavior ===== */
// El toggle del hamburger mobile (data-navigation-status en <html>), el cierre
// por backdrop/Escape/click-en-link y el sticky hide-on-scroll-down sobre
// [data-navbar] los cablea el script compartido /luzen/scripts/navbar.js, que
// se auto-inicializa en DOM ready. Este stub existe para respetar la convención
// de archivos de las secciones del catálogo.
