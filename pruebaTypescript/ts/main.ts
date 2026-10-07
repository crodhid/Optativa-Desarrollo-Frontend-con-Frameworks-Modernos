// Obtiene del HTML el elemento con id "h11" (puede ser null si no existe)
const h11 = document.getElementById("h11");

// Variable de tipo string con el valor "Ford"
// (no se usa más abajo en el código)
var marca: string = "Ford";

// Si fuera: var myArray: any[] = new Array(); permitiría meter cualquier tipo.
// Al no tipar el array, TypeScript lo trata como any[] implícito
// (con "noImplicitAny" activado daría error o lo inferiría de los push).
// var myArray: any[] = new Array();
var myArray = new Array();

// Añade dos booleanos al final del array
myArray.push(true);
myArray.push(false);

// Recorre el array con for...of (itera sobre los VALORES, no los índices)
// Imprime en consola: true y luego false
for (let elem of myArray) {
    console.log(elem);
}

/**
 * Forma de definir objetos con un "type" (alias de tipo).
 * Car describe la forma que debe tener un objeto coche.
 * "readonly" en color significa que, una vez creado el objeto,
 * no se puede modificar esa propiedad.
 */
type Car = {
    matricula : string,     // texto
    modelo : string,        // texto
    itv_pasada : boolean,   // verdadero o falso
    readonly color : string // solo lectura: no se puede reasignar
}

// Se crea un objeto que cumple el tipo Car.
// Si faltara una propiedad o tuviera un tipo incorrecto, daría error.
var car1 : Car = {
    matricula:"1234hed",
    modelo:"Mustang",
    itv_pasada : true,
    color : "Azul"
}
// car1.color = "Rojo";  // ERROR: color es readonly

// Muestra el objeto en consola de forma desplegable/inspeccionable
console.dir(car1);

// "interface" es otra forma de definir la estructura de un objeto.
// Es muy parecida a "type"; las interfaces se usan sobre todo
// para objetos/clases y se pueden extender y ampliar fácilmente.
interface Person {
    name: string,
    age: number,
    readonly mail: string // no se puede modificar tras crear el objeto
}

// Objeto que cumple la interfaz Person
var person1: Person = {
    name: "Pepe",
    age: 45,
    mail: "pepe@mail.com"
}

console.dir(person1);

// Nombre, Apellido, edad, activo
// Esto es una TUPLA: un array con longitud fija donde cada posición
// tiene un tipo concreto y el orden importa:
// [string, string, number, boolean]
var Alumn : [string, string, number, boolean]= ["Ana","Pérez", 19, true];

// "unknown" es un tipo seguro para valores de tipo desconocido.
// Se puede asignar cualquier valor, pero antes de usarlo como un tipo
// concreto hay que comprobar su tipo (a diferencia de "any").
var desconocido : unknown;
desconocido = 5;
console.log(desconocido); // Imprime 5

// Comprueba que h11 existe en el HTML (no es null/undefined).
// Nota: getElementById devuelve null, no undefined, así que
// "!= undefined" funciona porque != compara con null y undefined a la vez
// (con !== no funcionaría). Lo más habitual sería: if (h11 !== null)
if (h11 != undefined) {
    // Escribe dentro del elemento: "Pepe mail: pepe@mail.com"
    h11.innerHTML = person1.name + " mail: " + person1.mail;
}

// En JavaScript/TypeScript dividir entre 0 NO da error:
// devuelve Infinity (infinito)
console.log(10 / 0); // Imprime Infinity