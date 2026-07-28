/* Luzen — Home Hero
   Sin lógica local. Toda la entrada on-load corre desde /luzen/scripts/animations.js:
   - [hero="heading"] entra con SplitText (word-stagger) — requiere el plugin SplitText por CDN
   - [hero="description"], [hero="button"] y [hero="stats"] > * con stagger de entrada
   - [animation="zoom"] (el bloque de texto centrado) entra con y + scale
   - el fondo .home_one-bg hace focus-in on-load (scale 1.5→1 + blur 100px→0), one-shot
   El navbar NO está acá; se inlinará después con add-navbar.mjs. */

/* ===== TEMLIS-INLINED-NAVBAR: luzen-navbar behavior ===== */
// luzen-navbar — no component-specific boot needed.
// El toggle del hamburger mobile (data-navigation-status en <html>), el cierre
// por backdrop/Escape/click-en-link y el sticky hide-on-scroll-down sobre
// [data-navbar] los cablea el script compartido /luzen/scripts/navbar.js, que
// se auto-inicializa en DOM ready. Este stub existe para respetar la convención
// de archivos de las secciones del catálogo.
