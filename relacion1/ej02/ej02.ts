//Interfaz en la que definimos como crear un producto, una vez introducida esa id no se puede cambiar y descuento puede o no llegar
interface Producto{
    readonly id:number,
    nombre:string,
    precio:number,
    descuento?:number
}


//creamos ahora la lineaCarrito
interface LineaCarrito{
    producto:Producto,
    cantidadUnidades:number
}


//Me creo un objeto de tipo producto
let pelotas:Producto={
    id:1,
    nombre:"Pelota de tenis",
    precio: 20,
    descuento: 10
}

//me creo un producto de tipo LineaCarrito
let lineaPelotas:LineaCarrito = {
    producto:pelotas,
    cantidadUnidades:5
}


//Me creo un objeto de tipo producto
let botellas:Producto={
    id:2,
    nombre:"Botella de agua",
    precio: 4,
}

//me creo un producto de tipo LineaCarrito
let lineaBotella:LineaCarrito = {
    producto:botellas,
    cantidadUnidades:5
}


//creo un array de tipo lineaCarrito
let arrayCarrito:LineaCarrito[] = [lineaBotella, lineaPelotas];


/**
 * Funcion en la cual le llega un producto, si este tiene descuento devuelve el precio del producto con descuento, si no tiene lo devuelve tal cual
 */
function precioFinal(p:Producto):number {
    if (p.descuento) {
        return p.precio *((100- p.descuento)/100);
    }
    return p.precio;
}


/**
 * Función a la cual le llega un array de las lineas de carritos, lo recorro calculando el precio unitario de la unidad de mi producto
 * viendo si tiene descuento o no y este se multiplica por el numero de unidades que hay
 * @param lineas 
 */
function totalCarrito(lineas:LineaCarrito[]):number {
    let resultado:number = 0;
    for (const elem of lineas) {
        resultado += precioFinal(elem.producto) * elem.cantidadUnidades;
    }
    return resultado;
}

console.log(totalCarrito(arrayCarrito));