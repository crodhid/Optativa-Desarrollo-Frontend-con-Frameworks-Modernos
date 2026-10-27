"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Punto 1: valores de origen desconocido. Con unknown guardan cualquier cosa
//pero no me dejan usarlos sin comprobar antes de qué tipo son (any sí dejaría)
let campo1 = "  Cristian  ";
let campo2 = 25;
let campo3 = "30";
let campo4 = true;
let campo5 = null;
/**
 * Función normalizarNombre que recibe un valor desconocido.
 * Solo si es un texto lo devuelve sin espacios al principio y al final y en mayúsculas.
 * En otro caso devuelve "NOMBRE INVÁLIDO"
 * @param valor valor de origen desconocido
 * @returns el nombre normalizado o "NOMBRE INVÁLIDO"
 */
function normalizarNombre(valor) {
    if (typeof valor === "string") {
        return valor.trim().toUpperCase();
    }
    return "NOMBRE INVÁLIDO";
}
/**
 * Función leerEdad que recibe un valor desconocido.
 * Si es un número lo devuelve, si es un texto que representa un número (ej: "25")
 * lo convierte y lo devuelve. En otro caso devuelve null
 * @param valor valor de origen desconocido
 * @returns la edad como número o null
 */
function leerEdad(valor) {
    if (typeof valor === "number") {
        // NaN también es de tipo number, pero no es una edad válida
        if (Number.isNaN(valor)) {
            return null;
        }
        return valor;
    }
    if (typeof valor === "string") {
        // Number("") da 0, así que primero compruebo que el texto no esté vacío
        if (valor.trim() === "") {
            return null;
        }
        const convertido = Number(valor);
        if (Number.isNaN(convertido)) {
            return null;
        }
        return convertido;
    }
    return null;
}
//Objeto completo que devuelve la librería (de origen desconocido)
let objetoRecibido = { usuario: "cristian", email: "cristian@correo.com" };
//Conversión (aserción de tipo) a la forma Formulario
const datos = objetoRecibido;
console.log(datos.usuario); // ahora tengo autocompletado
console.log(datos.email);
/*
 * Punto 5: ¿por qué la conversión del punto 4 es más arriesgada?
 *
 * En los puntos 2 y 3 uso typeof, que COMPRUEBA en tiempo de ejecución
 * el tipo real del valor. Si no es lo que espero, lo detecto y devuelvo
 * "NOMBRE INVÁLIDO" o null, así que el programa nunca falla.
 *
 * En el punto 4 uso "as Formulario", que NO comprueba nada: solo le dice
 * a TypeScript "confía en mí, esto tiene esa forma". Además, los tipos
 * desaparecen al compilar a JavaScript, así que en ejecución no hay ninguna
 * verificación. Si la librería devuelve un objeto sin email, o con email
 * numérico, TypeScript no avisa y el error aparece más tarde (por ejemplo,
 * datos.email.toUpperCase() fallaría con undefined). Es una promesa mía
 * al compilador, no una garantía.
 */
console.log(normalizarNombre(campo1)); // "CRISTIAN"
console.log(normalizarNombre(campo2)); // "NOMBRE INVÁLIDO"
console.log(leerEdad(campo2)); // 25
console.log(leerEdad(campo3)); // 30
console.log(leerEdad(campo4)); // null
console.log(leerEdad(campo5)); // null
console.log(leerEdad("abc")); // null
console.log(leerEdad("")); // null
//# sourceMappingURL=ej08.js.map