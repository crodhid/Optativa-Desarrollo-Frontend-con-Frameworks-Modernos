"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Me creo un objeto de tipo producto
let pelotas = {
    id: 1,
    nombre: "Pelota de tenis",
    precio: 20,
    descuento: 10
};
//me creo un producto de tipo LineaCarrito
let lineaPelotas = {
    producto: pelotas,
    cantidadUnidades: 5
};
//Me creo un objeto de tipo producto
let botellas = {
    id: 2,
    nombre: "Botella de agua",
    precio: 4,
};
//me creo un producto de tipo LineaCarrito
let lineaBotella = {
    producto: botellas,
    cantidadUnidades: 5
};
//creo un array de tipo lineaCarrito
let arrayCarrito = [lineaBotella, lineaPelotas];
/**
 * Funcion en la cual le llega un producto, si este tiene descuento devuelve el precio del producto con descuento, si no tiene lo devuelve tal cual
 */
function precioFinal(p) {
    if (p.descuento) {
        return p.precio * ((100 - p.descuento) / 100);
    }
    return p.precio;
}
/**
 * Función a la cual le llega un array de las lineas de carritos, lo recorro calculando el precio unitario de la unidad de mi producto
 * viendo si tiene descuento o no y este se multiplica por el numero de unidades que hay
 * @param lineas
 */
function totalCarrito(lineas) {
    let resultado = 0;
    for (const elem of lineas) {
        resultado += precioFinal(elem.producto) * elem.cantidadUnidades;
    }
    return resultado;
}
console.log(totalCarrito(arrayCarrito));
//# sourceMappingURL=ej02.js.map