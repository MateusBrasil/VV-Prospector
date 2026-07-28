/* Genovas — Contact Form Section
 *
 * No component-specific JS. All motion is driven by the shared
 * /genovas/scripts/scroll-reveal.js classic script, which auto-reveals
 * (fade + blur 30 -> 0, expo.out) the heading (.text-2xl), the description
 * (.text-base) and the submit button wrapper (.button-wrap). It self-
 * initializes on DOM ready and sets the hidden start state itself, so the
 * form and copy stay visible if GSAP fails to load.
 *
 * The data-w-id attributes are kept as inert reveal hooks from the original
 * Webflow IX2 markup.
 *
 * BACKEND NOTE: the form posts to /api/contact (relative). No endpoint ships
 * with the template — wire your own handler and have it return 2xx on success
 * / non-2xx on error to toggle .w-form-done / .w-form-fail.
 */
