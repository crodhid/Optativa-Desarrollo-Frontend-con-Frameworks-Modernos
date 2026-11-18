import "./ComponenteHijo.css";
import { useState } from "react";

//Recibimos las variables entre llaves porque son nombres de js
//el children lo que hace es que todo el código que pongo en
//app dentro de las llaves de componentehijo este lo guarda y
//lo renderiza
export function ComponenteHijo({nombre, edad, comentario, enviarDatos, children}) {

    //Variable reactiva inicializada a lo que recibe del padre
    const [comentarioHijo, setComentarioHijo] = useState(comentario);

    //funcion asignada a una variable en la cual esta variable se está actualizando
    //en el text area cada vez que cambia, al pulsar en el boton se 
    //actualizan los datos 
    const handleClick = ()=>{
        enviarDatos(comentarioHijo)
    }
    return(
        <div className="claseCard">
            <div className="claseHeader">
                {children}
            </div>
            <div className="claseBody">
                <p><strong>Nombre </strong>{nombre}</p>
                <p><strong>Edad </strong>{edad}</p>
            <label htmlFor="">Comentario:</label>
            </div>
            <textarea cols="25" rows="10" defaultValue={comentarioHijo} onChange={(e) =>setComentarioHijo(e.target.value)}></textarea>
            <button onClick={handleClick}>Enviar datos</button>
        </div>
    );
}