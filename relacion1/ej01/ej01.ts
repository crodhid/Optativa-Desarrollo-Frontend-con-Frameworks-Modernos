let nombre: string = "Cristian";
let curso: string = "2DAW";
let notas: number[] = [4, 6, 7.8, 10];


/**
 * Función a la cual le llega un array de notas y esta devuelve la media de esas notas
 * @param notas 
 * @returns 
 */
function calcularMedia(notas: number[]): number {
    let resultado: number = 0;
    let contador: number = 0;
    for (const elem of notas) {
        resultado += elem;
        contador++;
    }

    return resultado = resultado / contador;

}

/**
 * Función la cual calcula la nota final de un alumno, esta tiene un parametro que le puede llegar o no
 * @param notas 
 * @param suma 
 * @returns 
 */
function notaFinal(notas: number[], suma: number = 0): number {
    let resultado: number = calcularMedia(notas);

    if ((resultado + suma) > 10) {
        resultado = 10
    } else {
        resultado += suma;
    }

    return resultado;
}


/**
 * Función la cual muestra por consola los resultados finales.
 */
function mostrarBoletin(){
    console.log(`Nombre: ${nombre}. Curso: ${curso}. Nota final: ${notaFinal(notas,3)}`);
}

//Llamo a la función para comprobarlo
mostrarBoletin();