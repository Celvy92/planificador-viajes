const viajes = [];

const costosTransporte = {
  avion: 500,
  autobus: 200,
  coche: 100,
};

export const registrarDestino = (destino, fecha, transporte, personas) => {
  const costo = calcularCosto(destino, transporte, personas);
  viajes.push({ destino, fecha, transporte, personas, costo });
};

export const calcularCosto = (destino, transporte, personas) => {
  const baseDestino = destino.length * 10;
  const transporteCosto = costosTransporte[transporte] || 0;
  const subtotal = (baseDestino + transporteCosto) * personas;

  const descuento = personas >= 4 ? 0.15 : 0; // 15% de descuento
  const total = subtotal - subtotal * descuento;

  return total;
};

export const obtenerViajes = () => viajes;
