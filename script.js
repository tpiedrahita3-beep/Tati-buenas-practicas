document.getElementById('formulario-cita').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const profesional = document.getElementById('profesional').value;

  const mensaje = `
    ¡Cita reservada exitosamente! Recuerde llegar 20 minutos antes de la cita.<br><br>
    <strong>Fecha:</strong> ${fecha}<br>
    <strong>Hora:</strong> ${hora}<br>
    <strong>Paciente:</strong> ${nombre}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Usted será atendido por:</strong> ${profesional}
  `;

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = mensaje;
  resultado.style.display = 'block';

  // Limpia el formulario
  this.reset();
});