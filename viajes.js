// modules/viajes.js

const destinos = [];

export const registrarDestino = (destino, fecha, transporte, personas) => {
  const costo = calcularCosto(destino, transporte, personas);
  const nuevoViaje = { destino, fecha, transporte, personas, costo };
  destinos.push(nuevoViaje);
};

const calcularCosto = (destino, transporte, personas) => {
  let costoBase = 0;

  switch (destino) {
    case "Paris":
      costoBase = 500;
      break;
    case "Londres":
      costoBase = 400;
      break;
    case "New York":
      costoBase = 600;
      break;
  }

  switch (transporte) {
    case "Avión":
      costoBase += 200;
      break;
    case "Tren":
      costoBase += 100;
      break;
  }

  let total = costoBase * personas;

  // Descuento por grupo grande
  if (personas >= 4) {
    total *= 0.9; // 10% de descuento
  }

  return total;
};

export const mostrarItinerario = () => destinos;
