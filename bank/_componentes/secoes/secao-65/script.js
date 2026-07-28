// Upmind — About Section (boot stub).
//
// This section is fully driven by the shared template scripts loaded as classic
// <script> tags in index.html:
//   - /upmind/scripts/scroll-reveal.js  -> reveals the two .scroll-into-view text
//        clusters + the performance card (slideInUp; IntersectionObserver). The
//        hidden start-state lives in /upmind/styles.css, gated on `html.reveal-on`
//        (added in <head> before paint), so content stays visible if JS fails.
//   - /upmind/scripts/button-hover.js   -> per-letter slide + press on the
//        "Learn More" .button_component.
//
// The two performance-card tag marquees are pure CSS keyframes (see style.css) —
// no JS. Nothing further to initialize here.
