// app.js
import { registrarDestino, mostrarItinerario } from "./modules/viajes.js";

const formulario = document.getElementById("formularioViaje");
const listaViajes = document.getElementById("listaViajes");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const destino = document.getElementById("destino").value;
  const fecha = document.getElementById("fecha").value;
  const transporte = document.getElementById("transporte").value;
  const personas = parseInt(document.getElementById("personas").value);

  registrarDestino(destino, fecha, transporte, personas);
  actualizarItinerario();
  formulario.reset();
});

const actualizarItinerario = () => {
  const viajes = mostrarItinerario();

  listaViajes.innerHTML = "";

  viajes.forEach((viaje, index) => {
    const div = document.createElement("div");
    div.classList.add("viaje");
    div.innerHTML = `
      <strong>#${index + 1}</strong><br>
      Destino: ${viaje.destino}<br>
      Fecha: ${viaje.fecha}<br>
      Transporte: ${viaje.transporte}<br>
      Personas: ${viaje.personas}<br>
      Costo Total: $${viaje.costo.toFixed(2)}
    `;
    listaViajes.appendChild(div);
  });
};
