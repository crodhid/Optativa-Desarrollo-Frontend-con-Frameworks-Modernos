export class Personaje {
    //Protected para poder heredarlas
    protected nombre: string;
    protected ataque: number;
    protected defensa: number;
    protected vida: number;



    constructor(_nombre: string, _ataque: number, _defensa: number, _vida: number) {
        this.nombre = _nombre;
        this.ataque = _ataque;
        this.defensa = _defensa;
        this.vida = _vida;
    }

    /**
     *Método para obtener el nombre de mi personaje 
     * @returns 
     */
    get Nombre(): string {
        return `Bienvenido al juego, ${this.nombre}`;
    }


    /**
     * Set para cambia el nombre
     */
    set Nombre(nombre:string){
        this.nombre = nombre;
    }
}

