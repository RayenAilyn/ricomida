document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario-contacto');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación básica
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando fetch o AJAX

    // Mostrar mensaje de éxito
    alert('Gracias por contactarnos, ' + nombre + '. Te responderemos pronto.');

    // Resetear el formulario
    formulario.reset();
  });
});
