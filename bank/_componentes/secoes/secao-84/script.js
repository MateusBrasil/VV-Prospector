/* Aurae — Contact Section.
   Animation + behavior live in the shared classic script loaded before this file:
     /aurae/scripts/contact-hero-intro.js → page-load entrance:
       background reverse-zoom (scale 1.1 → 1), SplitText per-character heading,
       eyebrow / description / info-item / form-card stagger, fonts.ready gating,
       a finally{} that always reveals the layout, and a prefers-reduced-motion guard.
   The animation="..." attributes are inert reveal hooks the shared script reads.

   FORM: the contact form is a VISUAL STUB. action="#" so it never submits or
   leaves the page; the buyer wires a real handler (e.g. Resend) during
   customization. Have that handler return 2xx on success / non-2xx on error to
   toggle .w-form-done / .w-form-fail. Nothing to boot here. */
