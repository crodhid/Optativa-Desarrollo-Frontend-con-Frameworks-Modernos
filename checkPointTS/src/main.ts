// Conjunto cerrado de constantes con nombre, guardadas como texto
enum TipoHabitacion {
    Individual = "INDIVIDUAL",
    Doble = "DOBLE",
    Suite = "SUITE",
}


interface Habitacion {

    readonly numero: number,
    tipoHabitacion: TipoHabitacion,
    precioHabitacion: number
}

//Creo mis 3 habitaciones
const habitacion101 = {
    numero: 101,
    tipoHabitacion: TipoHabitacion.Individual,
    precioHabitacion: 55
}

const habitacion102 = {
    numero: 102,
    tipoHabitacion: TipoHabitacion.Doble,
    precioHabitacion: 80
}

const habitacion301 = {
    numero: 101,
    tipoHabitacion: TipoHabitacion.Suite,
    precioHabitacion: 160
}

// Tupla: siempre [fecha de entrada, número de noches], en este orden
type Estancia = [entrada: string, noches: number];

//tipo para mi estado de la reserva
type estadoReserva = "confirmada" | "cancelada" | "finalizada";

interface Reserva {
    readonly id: number,
    nombreHuesped: string,
    correo?: string,
    habitacion: number,
    estancia: Estancia,
    estadoreserva: estadoReserva
}

const reserva1 = {
    id: 1,
    nombreHuesped: "Ana López",
    correo: "ana@mail.com",
    habitacion: 102,
    estancia: ["2026-11-03", 3],
    estadoreserva: "confirmada"
}

console.log(reserva1);

const reserva2 = {
    id: 2,
    nombreHuesped: "Luis Pérez",
    habitacion: 301,
    estancia: ["2026-11-05", 2],
    estadoreserva: "confirmada"
}

const reserva3 = {
    id: 3,
    nombreHuesped: "Marta Ruiz",
    correo: "marta@mail.com",
    habitacion: 101,
    estancia: ["2026-10-28", 4],
    estadoreserva: "finalizada"
}

const reserva4 = {
    id: 4,
    nombreHuesped: "Pablo Gil",
    habitacion: 102,
    estancia: ["2026-11-10", 5],
    estadoreserva: "cancelada"
}



//creo mis arrays para meter mis habitaciones y reservas
const arrayHabitaciones: Habitacion[] = [habitacion101, habitacion102, habitacion301];
const arrayReservas: Reserva[] = [
    { id: 1, nombreHuesped: "Ana López", correo: "ana@mail.com", habitacion: 102, estancia: ["2026-11-03", 3], estadoreserva: "confirmada" },
    { id: 2, nombreHuesped: "Luis Pérez", habitacion: 301, estancia: ["2026-11-05", 2], estadoreserva: "confirmada" },
    { id: 3, nombreHuesped: "Marta Ruiz", correo: "marta@mail.com", habitacion: 101, estancia: ["2026-10-28", 4], estadoreserva: "finalizada" },
    { id: 4, nombreHuesped: "Pablo Gil", habitacion: 102, estancia: ["2026-11-10", 5], estadoreserva: "cancelada" },
];

/**
 * Función a la cual le llega el número de la habitación y devuelve la habitacion si la encuentra
 * si no devuelve undefined
 * @param numeroHabitacion 
 * @returns 
 */
function buscarHabitacion(numeroHabitacion: number): Habitacion | undefined {
    let habitacionMetodo = undefined;
    for (const elem of arrayHabitaciones) {
        if (elem.numero == numeroHabitacion) {
            habitacionMetodo = elem;
        }
    }
    if (habitacionMetodo != undefined) {
        return habitacionMetodo;
    } else {
        return undefined;
    }
}

// ---------- 3. IMPORTE ----------

function calcularImporte(reserva: Reserva): number {
    let resultado:number = 0;
    if (reserva.estadoreserva === "cancelada") {
        return 0;
    }

    const habitacion = buscarHabitacion(reserva.habitacion);
    if (habitacion === undefined) {
        return 0;
    }


    let numNoches = reserva.estancia[1];
    resultado = numNoches * habitacion.precioHabitacion;
    if (numNoches >= 4) {
        resultado = resultado * 0.9;
    }
    return resultado;
}

/**
 * Función formato en la cual me devuelve el número con 2 decimales y el string
 * @param importe 
 * @param moneda 
 * @returns 
 */
function formato(importe: number, moneda: string = "€"): string {
    return `${importe.toFixed(2)} ${moneda}`;
}

/**
 * Función en la que dependiendo del estado me devuelve una cosa u otra
 * @param estado 
 * @returns 
 */
function mensajeEstado(estado: estadoReserva): string {
    switch (estado) {
        case "confirmada":
            return "Reserva confirmada.";
        case "cancelada":
            return "Reserva cancelada.";
        case "finalizada":
            return "Estancia finalizada.";
        default: {
            return "No esta ese estado dentro.";
        }
    }
}

//Generico para que 
interface ObjetoOcupacion {
    tipoHabitacion: TipoHabitacion,
    numTipo: number
}

/**
 * Función para calcular mi ocupación
 * @returns 
 */
function calcularOcupacion(): Record<TipoHabitacion, number> {
  const ocupacion: Record<TipoHabitacion, number> = {
    [TipoHabitacion.Individual]: 0,
    [TipoHabitacion.Doble]: 0,
    [TipoHabitacion.Suite]: 0,
  };

  for (const reserva of arrayReservas) {
    if (reserva.estadoreserva !== "confirmada") {
      continue;
    }
    const habitacion = buscarHabitacion(reserva.habitacion);
    if (habitacion !== undefined) {
      ocupacion[habitacion.tipoHabitacion]++;
    }
  }

  return ocupacion;
}


/**
 * Función que me calcula el total de todas mis reservas
 * @returns 
 */
function totalFacturado():number{
    let resultado:number = 0;
    for (const elem of arrayReservas) {
        resultado += calcularImporte(elem);
    }

    return resultado;
}


let totalFacturadoP = document.getElementById("total-facturado");
let ocupacionId = document.getElementById("ocupacion");
let tablareservas = document.getElementById("tabla-reservas");
if (totalFacturadoP) {
    totalFacturadoP.innerHTML = "" + totalFacturado();
}

if (tablareservas) {
    for (const elem of arrayReservas) {
        tablareservas.innerHTML += `<tr><td>${elem.id}</td><td>${elem.nombreHuesped}</td><td>${elem.habitacion}</td><td>${elem.estancia[0]}</td><td>${elem.estancia[1]}</td><td>${elem.estadoreserva}</td><td class="num"></td></tr>`
    }
}
