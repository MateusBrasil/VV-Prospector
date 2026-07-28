/* Congra — Contact
   Lógica portada del inline <script> de ContactSection.astro (JS clásico, sin módulos).
   Front-end demo: no hay backend cableado. Muestra el mensaje de success al hacer submit.
   Las animaciones de entrada (.slide_down) corren desde /congra/scripts/animations.js. */

var form = document.querySelector('[data-contact-form]');
var success = document.querySelector('[data-form-success]');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
      form.style.display = 'none';
      if (success) success.style.display = 'block';
      form.reset();
    } else {
      form.reportValidity();
    }
  });
}
