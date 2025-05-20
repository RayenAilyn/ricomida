$(document).ready(function () {
  // 1. Activar tooltips
  $('[data-bs-toggle="tooltip"]').tooltip();

  // 2. Alerta al hacer clic en "Enviar por correo"
  $('#enviarCorreo').click(function () {
    alert("El correo fue enviado correctamente...");
  });

  // 3. Alerta de newsletter
  $('#startBtn').on('click', function () {
    alert("¡Gracias por suscribirte a Ricomida!");
  });

  // 4. Doble clic sobre títulos "Ingredientes" y "Preparación"
  $('h5').on('dblclick', function () {
    $(this).css('color', 'red');
  });

  // 5. Toggle en cards al hacer clic en sus títulos
  $('.card-title').on('click', function () {
    $(this).siblings('.card-text').toggle();
  });
});
