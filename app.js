// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte, personas) => {
    const costoBase = calcularCosto(destino, transporte, personas);
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        costo: costoBase
    };

    destinos.push(nuevoViaje);
    mostrarItinerario();
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, personas) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") costoBase = 500;
    else if (destino === "Londres") costoBase = 400;
    else if (destino === "New York") costoBase = 600;

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") costoBase += 200;
    else if (transporte === "Tren") costoBase += 100;

    // Aplicar descuento por número de personas
    if (personas > 4) costoBase *= 0.9; // 10% de descuento

    return costoBase * personas;
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    const viajesLista = document.getElementById("viajes-lista");
    viajesLista.innerHTML = '';

    destinos.forEach(viaje => {
        const viajeItem = document.createElement('div');
        viajeItem.classList.add('viaje-item');
        viajeItem.innerHTML = `
            <h3>${viaje.destino}</h3>
            <p>Fecha: ${viaje.fecha}</p>
            <p>Transporte: ${viaje.transporte}</p>
            <p>Personas: ${viaje.personas}</p>
            <p><strong>Costo Total: $${viaje.costo}</strong></p>
        `;
        viajesLista.appendChild(viajeItem);
    });
};

// Función para manejar el envío del formulario
const handleSubmit = (event) => {
    event.preventDefault();
    
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const transporte = document.getElementById('transporte').value;
    const personas = parseInt(document.getElementById('personas').value, 10);

    if (!destino || !fecha || !transporte || isNaN(personas)) {
        alert("Por favor completa todos los campos.");
        return;
    }

    registrarDestino(destino, fecha, transporte, personas);
    event.target.reset();
};

// Agregar el evento de submit al formulario
document.getElementById('form-viaje').addEventListener('submit', handleSubmit);

// Iniciar la aplicación
const iniciarApp = () => {
    // Cualquier inicialización si fuera necesario
};

iniciarApp();
