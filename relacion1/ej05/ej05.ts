enum Prioridad{
    Baja, Media, Alta, Critica
}

//Tengo que tener esto dentro de un tipo string, asi que tengo que utilizar el type de concatenar y no el enum
type estadoIncidencia = "ABIERTA"|"EN_CURSO"|"RESUELTA";

//Modelo a seguir de todos mis objetos de tipo Incidencia
interface Incidencia{
    id:number,
    titulo:string,
    empleado:string,
    prioridad:Prioridad,
    estado:estadoIncidencia
    fecha : Date
}

let incidencia1: Incidencia = {
    id: 1,
    titulo: "No funciona el ratón del puesto 5",
    empleado: "Ana López",
    prioridad: Prioridad.Baja,
    estado: "ABIERTA",
    fecha: new Date(2026, 9, 20)
};

let incidencia2: Incidencia = {
    id: 2,
    titulo: "Sin acceso a la red interna",
    empleado: "Carlos Ruiz",
    prioridad: Prioridad.Alta,
    estado: "EN_CURSO",
    fecha: new Date(2026, 9, 22)
};

let incidencia3: Incidencia = {
    id: 3,
    titulo: "El servidor de correo no responde",
    empleado: "Marta Gómez",
    prioridad: Prioridad.Critica,
    estado: "EN_CURSO",
    fecha: new Date(2026, 9, 25)
};

let incidencia4: Incidencia = {
    id: 4,
    titulo: "Cambiar la contraseña del usuario de contabilidad",
    empleado: "Luis Fernández",
    prioridad: Prioridad.Media,
    estado: "RESUELTA",
    fecha: new Date(2026, 9, 26)
};


//Meto dentro de un array todas mis incidencias
let incidencias: Incidencia[] = [incidencia1, incidencia2, incidencia3, incidencia4];

/**
 * Función en la que devuelvo false si el estado dado no es ninguno de los ya predefinidos, si no devuelvo mi array con las incidencias
 * @param incidencias 
 * @param estado 
 * @returns 
 */
function filtrarPorEstado(incidencias:Incidencia[], estado:string):Incidencia[] | boolean{
    //Creo un array de tipo incidencia
    let incidenciasPorEstado:Incidencia[] = [];
    if ((estado != "ABIERTA") && (estado != "EN_CURSO") && (estado != "RESUELTA")) {
        return false;
    }

    for (const elem of incidencias) {
        if (estado == elem.estado) {
            incidenciasPorEstado.push(elem);
        }
    }
    return incidenciasPorEstado;


}

function filtrarPorUrgentes(incidencias:Incidencia[]):Incidencia[] | boolean{
    //Creo un array de tipo incidencia
    let incidenciasPorPrioridad:Incidencia[] = [];
    for (const elem of incidencias) {
        if ((elem.prioridad == Prioridad.Alta) || (elem.prioridad == Prioridad.Critica)) {
            incidenciasPorPrioridad.push(elem);
        }
    }
    return incidenciasPorPrioridad;


}

/**
 * Cambia el estado de la incidencia con el id dado.
 * Devuelve true si se ha cambiado, false si no existe el id o el estado no es válido.
 */
function cambiarEstado(incidencias: Incidencia[], id: number, nuevoEstado: string): boolean {
    if (nuevoEstado !== "ABIERTA" && nuevoEstado !== "EN_CURSO" && nuevoEstado !== "RESUELTA") {
        return false;
    }

    for (const elem of incidencias) {
        if (elem.id === id) {
            elem.estado = nuevoEstado;
            return true;
        }
    }
    return false;
}

console.log(cambiarEstado(incidencias, 1, "EN_CURSO")); // true
const primera = incidencias[0];
if (primera) {
    console.log(primera.estado); // "EN_CURSO"
}
console.log(cambiarEstado(incidencias, 99, "RESUELTA")); // false (no existe el id)
console.log(cambiarEstado(incidencias, 2, "CERRADA"));   // false (estado no válido)