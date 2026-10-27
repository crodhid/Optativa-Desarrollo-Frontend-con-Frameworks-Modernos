"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Función en la cual comprueba si mi usuario tiene mas de 3 libros para poder seguir alquilando libros
 * @param socio
 * @returns
 */
function puedePrestar(socio) {
    if (socio.titulos.length >= 2) {
        return false;
    }
    return true;
}
/**
 * Función a la cual le llega cualquier tipo de usuario y devuelve su correo, si no tiene devuelve q no hay correo
 * @param usuario
 * @returns
 */
function contacto(usuario) {
    if (usuario.correo) {
        return usuario.correo;
    }
    else {
        return "No hay correo";
    }
}
//# sourceMappingURL=ej06.js.map