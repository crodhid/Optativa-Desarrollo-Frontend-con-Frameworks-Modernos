import { Personaje } from "./Personaje";
const info = document.getElementById("info");
const atacarA = document.getElementById("atacarA");
const atacarB = document.getElementById("atacarB");

//En typescript para acceder al elemento hay que comprobar que existe, entonces comprobamos
//que sea nulo y si es nulo salta el error si no sigue la app funcionando
if (!info) {
  throw Error("No existe info");
}

if (!atacarA) {
  throw Error("No existe ataqueA");
}
if (!atacarB) {
  throw Error("No existe ataqueB");
}

// info.innerHTML = "Hello vite + TS";

//Creamos nuestro primer personaje
var Personaje1 = new Personaje("Conan",20,30,100);
var Personaje2 = new Personaje("Hulk",50,60,200);
// info.innerHTML = Personaje1.Nombre;

info.innerHTML = Personaje.info(Personaje1);
atacarA.innerHTML = `${Personaje1.Nombre} ataca a ${Personaje2.Nombre}`;
atacarB.innerHTML = `${Personaje2.Nombre} ataca a ${Personaje1.Nombre}`;


/**************************************************************** */
atacarA.onclick = () => {
  Personaje.atacar(Personaje1, Personaje2);
  info.innerHTML += "<br> " + `${Personaje1.Nombre} ataca a ${Personaje2.Nombre} le queda ${Personaje2.Vida}` ;
}