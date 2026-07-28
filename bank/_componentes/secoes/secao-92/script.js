/* hirekit-contact: restringe el campo Phone a caracteres de telefono (de contact.astro). */
const phone = document.getElementById('Phone-Number');
if (phone) {
  const ALLOWED = /[^0-9+\-()#*\s]/g;
  phone.addEventListener('input', () => {
    const cleaned = phone.value.replace(ALLOWED, '');
    if (cleaned !== phone.value) {
      const pos = phone.selectionStart ?? cleaned.length;
      const removed = phone.value.length - cleaned.length;
      phone.value = cleaned;
      const caret = Math.max(0, pos - removed);
      phone.setSelectionRange(caret, caret);
    }
  });
}
