import { registrarDestino, obtenerViajes } from './viajes.js';

const tablaBody = document.querySelector('#tabla-itinerario tbody');

document.getElementById('agregar').addEventListener('click', () => {
  const destino = document.getElementById('destino').value;
  const fecha = document.getElementById('fecha').value;
  const transporte = document.getElementById('transporte').value;
  const personas = parseInt(document.getElementById('personas').value);

  if (!destino || !fecha || !transporte || !personas || personas < 1) {
    alert("Por favor completa todos los campos correctamente.");
    return;
  }

  registrarDestino(destino, fecha, transporte, personas);
  actualizarItinerario();

  document.getElementById('destino').value = '';
  document.getElementById('fecha').value = '';
  document.getElementById('personas').value = '';
});

function actualizarItinerario() {
  const viajes = obtenerViajes();
  tablaBody.innerHTML = '';

  viajes.forEach((viaje, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${viaje.destino}</td>
      <td>${viaje.fecha}</td>
      <td>${viaje.transporte}</td>
      <td>${viaje.personas}</td>
      <td>$${viaje.costo.toFixed(2)}</td>
    `;
    tablaBody.appendChild(row);
  });
}
