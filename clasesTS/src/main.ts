import { Personaje } from "./Personaje";
const info = document.getElementById("info");

//En typescript para acceder al elemento hay que comprobar que existe, entonces comprobamos
//que sea nulo y si es nulo salta el error si no sigue la app funcionando
if (!info) {
  throw Error("No existe info");
}

info.innerHTML = "Hello vite + TS";

//Creamos nuestro primer personaje
var Personaje1 = new Personaje("Louian",150,300,3500);
info.innerHTML = Personaje1.Nombre;