$(document).ready(function () {
  // Activa tooltips de Bootstrap
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Ejemplo de acción con botón
  $('#btnCorreo').click(function () {
    alert("Receta enviada a tu correo");
  });
});
