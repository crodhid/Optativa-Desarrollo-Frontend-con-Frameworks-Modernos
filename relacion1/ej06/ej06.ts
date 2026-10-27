//Creo mi interfaz de usuario diciendo que correo puede o no estar, y que la fecha no se puede modificar una vez creado el objeto
interface Usuario{
    numeroCarne:number,
    nombre:string,
    correo?:string,
    readonly fecha: Date
}

//Creo la interfaz de socio la cual hereda de usuario, e implementa un metodo saludar.
interface Socio extends Usuario{
    titulos:string[],
    saludar():string
}

//Creo la interfaz Bibliotecario la cual hereda de usuario y turno solo puede ser mañana o tarde
interface Bibliotecario extends Usuario{
    turno:"Mañana"|"Tarde",
    permisos:string[]
}

/**
 * Función en la cual comprueba si mi usuario tiene mas de 3 libros para poder seguir alquilando libros
 * @param socio 
 * @returns 
 */
function puedePrestar(socio:Socio):boolean {
    if (socio.titulos.length >=2) {
        return false;
    }
    return true;
}

/**
 * Función a la cual le llega cualquier tipo de usuario y devuelve su correo, si no tiene devuelve q no hay correo
 * @param usuario 
 * @returns 
 */
function contacto(usuario:Usuario):string{
    if (usuario.correo) {
        return usuario.correo
    }else{
        return "No hay correo";
    }
}


