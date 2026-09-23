var botonContador = document.getElementById("botonContador");
var numItemsCarrito = document.getElementById("numItemsCarrito");

//variable global para ver si el dato cambia posteriormente
var itemsCarrito = 0;

//eswtamos llamando a la funcion de abajo para poner la linea de texto en el boton
actualizaBoton();


//metodo que ejecuta lo que escribamos dentro por cada tiempo que nosotros le digamos
//aqui estamos comparando si el valor inicial esta cambiando lo cambiamos nosotros
setInterval(() => {
    if (itemsCarrito != numItemsCarrito.value) {
        actualizaBoton();
    }
}, 100);

/**** FUNCIONES ****/
function actualizaBoton() {
    itemsCarrito = numItemsCarrito.value
    //De esta forma estamos sacando el valor numerico del input para mostrarlo en la cadena
    botonContador.innerText = "Número de elementos en el carrito: " + itemsCarrito;
}