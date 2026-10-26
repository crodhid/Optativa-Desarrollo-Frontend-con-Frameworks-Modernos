export class Personaje {
    //Protected para poder heredarlas
    protected nombre: string;
    protected ataque: number;
    protected defensa: number;
    //Esto hace que en js también sea privado.
    #vida: number;



    constructor(_nombre: string, _ataque: number, _defensa: number, _vida: number) {
        this.nombre = _nombre;
        this.ataque = _ataque;
        this.defensa = _defensa;
        this.#vida = _vida;
    }

    /**
     *Método para obtener el nombre de mi personaje 
     * @returns 
     */
    get Nombre(): string {
        return `${this.nombre}`;
    }


    /**
     * Set para cambia el nombre
     */
    set Nombre(nombre:string){
        this.nombre = nombre;
    }
    /**
     *Método para obtener el nombre de mi personaje 
     * @returns 
     */
    get Ataque(): number {
        return this.ataque;
    }


    /**
     * Set para cambia el nombre
     */
    set Ataque(ataque:number){
        this.ataque = ataque;
    }

    get Defensa(): number {
        return this.defensa;
    }


    /**
     * Set para cambia el nombre
     */
    set Defensa(defensa:number){
        this.defensa = defensa;
    }

    get Vida(): number {
        return this.#vida;
    }


    /**
     * Set para cambia el nombre
     */
    set Vida(vida:number){
        this.#vida = vida;
    }

    saluda (){
        return `Bienvenido al juego ${this.nombre}`;
    }

    //Método estático
    static info(p:Personaje){
        return `${p.nombre} tiene un ataque de ${p.ataque}, defensa de ${p.defensa}, y vida de ${p.#vida}`;
    }

    
    vivo(){
        return this.#vida >0;
    }

    //Método estático para atacarse entre personajes
    static atacar(atq:Personaje , def:Personaje){
        let critico = Math.random();
        let daño = atq.ataque - def.defensa;
        if (daño < 0) {
            daño = atq.ataque;
        }
        if (critico < 0.1)  { //ataque critico
            daño *= 2;
            console.log(`Ataque crítico de ${atq.nombre} a ${def.nombre}`)
        }
        def.#vida -= daño;
        if (def.#vida < 0) {
            def.#vida = 0;
        }
    }
}

