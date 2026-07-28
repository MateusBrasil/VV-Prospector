// upmind-join-section — no component-specific boot needed.
//
// All behavior is supplied by the shared classic scripts loaded in index.html:
//   /upmind/scripts/scroll-reveal.js  — reveals the .scroll-into-view blocks,
//     the [data-reveal-rotate] join card, and the [animation="join-user-list"]
//     social-proof avatars + count (self-initializes on DOM ready).
//   /upmind/scripts/button-hover.js   — per-letter slide + press on the
//     "Book a Call" .button_component (self-initializes on DOM ready).
//
// Hidden start-states live in /upmind/styles.css, gated on `html.reveal-on`,
// so if JS fails the content stays fully visible.
