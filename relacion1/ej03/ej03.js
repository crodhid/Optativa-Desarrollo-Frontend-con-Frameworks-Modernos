"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let punto1 = [
    110, 20
];
const rutaTransporte = [
    [40.41, -3.70],
    [40.42, -3.69],
    [40.43, -3.68],
    [40.44, -3.67],
];
//creo un objeto de tipo ruta en el cual se le meten varios puntos como si fueran arrays.
let entrega1 = [
    1,
    punto1,
    true
];
/**
 * Funcion a la cual le llegan 2 puntos, accedemos a ellos por el valor de las tuplas, es como si fuera un array
 * @param p1
 * @param p2
 * @returns
 */
function distanciaAproximada(p1, p2) {
    return Math.sqrt((Math.pow((p2[0] - p1[0]), 2)) + Math.pow((p2[1] - p1[1]), 2));
}
/**
 * Función en la cual voy sumando la distancia de 2 puntos consecutivos, tengo quee comprobar que los puntos no son nulos.
 */
function distanciaTotal(ruta) {
    let resultado = 0;
    for (let i = 0; i < ruta.length - 1; i++) {
        const a = ruta[i];
        const b = ruta[i + 1];
        if (a && b) {
            resultado += distanciaAproximada(a, b);
        }
    }
    return resultado;
}
console.log(entrega1);
//# sourceMappingURL=ej03.js.map