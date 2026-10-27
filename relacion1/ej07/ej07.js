"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creo mi objeto vacio, indicando lo que tiene que tener dentro
let stock = {};
//clave y cantidad de objeto
stock["TORN-01"] = 100;
stock["MART-02"] = 15;
stock["LLAV-03"] = 3;
/**
 * Función a la que le llega el codigo y la cantidad
 * si no existe el codigo se le pone esa cantidad creandolo, si existe se le suma la cantidad
 * @param codigo código del producto
 * @param cantidad unidades a añadir
 */
function reponer(codigo, cantidad) {
    const actual = stock[codigo];
    if (actual !== undefined) {
        stock[codigo] = actual + cantidad;
    }
    else {
        stock[codigo] = cantidad;
    }
}
/**
 * Función vender a la que le llega el codigo y la cantidad.
 * Si el codigo no existe devuelve false, si hay menos unidades que las pedidas devuelve false
 * y no toca el stock. Si hay suficientes, las resta y devuelve true
 * @param codigo código del producto
 * @param cantidad unidades a vender
 * @returns true si se ha podido vender, false si no
 */
function vender(codigo, cantidad) {
    const actual = stock[codigo];
    if (actual !== undefined) {
        if (actual < cantidad) {
            return false;
        }
        else {
            stock[codigo] = actual - cantidad;
            return true;
        }
    }
    return false;
}
/**
 * Función informe que recibe el stock y un mínimo opcional (por defecto 5).
 * Recorre el objeto y guarda en un array los códigos cuyas unidades están por debajo del mínimo
 * @param stock objeto con las existencias
 * @param minimo unidades mínimas (5 si no se indica)
 * @returns array con los códigos de los productos por debajo del mínimo
 */
function informe(stock, minimo = 5) {
    let bajos = [];
    for (const codigo in stock) {
        const unidades = stock[codigo];
        if (unidades !== undefined) {
            if (unidades < minimo) {
                bajos.push(codigo);
            }
        }
    }
    return bajos;
}
/**
 * Función buscarUnidades que recibe un código y devuelve sus unidades si existe,
 * o el texto "No existe" si no existe
 * @param codigo código del producto
 * @returns número de unidades o "No existe"
 */
function buscarUnidades(codigo) {
    const unidades = stock[codigo];
    if (unidades !== undefined) {
        return unidades;
    }
    return "No existe";
}
reponer("TORN-01", 20); // TORN-01 pasa a 120
reponer("CLAV-04", 50); // crea CLAV-04 con 50
console.log(vender("MART-02", 20)); // false (solo hay 15)
console.log(vender("MART-02", 10)); // true  (quedan 5)
console.log(informe(stock)); // ["LLAV-03"]
console.log(informe(stock, 10)); // ["MART-02", "LLAV-03"]
console.log(buscarUnidades("TORN-01")); // 120
console.log(buscarUnidades("XXXX")); // "No existe"
//# sourceMappingURL=ej07.js.map