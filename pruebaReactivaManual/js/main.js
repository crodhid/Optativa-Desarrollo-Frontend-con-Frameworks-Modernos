// var botonContador = document.getElementById("botonContador");
// var numItemsCarrito = document.getElementById("numItemsCarrito");

// //variable global para ver si el dato cambia posteriormente
// var itemsCarrito = 0;

// //eswtamos llamando a la funcion de abajo para poner la linea de texto en el boton
// actualizaBoton();


// //metodo que ejecuta lo que escribamos dentro por cada tiempo que nosotros le digamos
// //aqui estamos comparando si el valor inicial esta cambiando lo cambiamos nosotros
// setInterval(() => {
//     if (itemsCarrito != numItemsCarrito.value) {
//         actualizaBoton();
//     }
// }, 100);

// /**** FUNCIONES ****/
// function actualizaBoton() {
//     itemsCarrito = numItemsCarrito.value
//     //De esta forma estamos sacando el valor numerico del input para mostrarlo en la cadena
//     botonContador.innerText = "Número de elementos en el carrito: " + itemsCarrito;
// }


//Prueba codigo nodejs

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

console.log("Elige una opcion del menu");
console.log("0- Sumar");
console.log("1- Restar");
console.log("1- Multiplicar");
console.log("1- Dividir");
console.log("Elige opcion 5 para salir del programa");