import { useState } from "react";
import "./bombilla.css";

export function Bombilla() {

    /**
     * Esta es mi propiedad reactiva
     */
    const [encender, setEncender] = useState({
        estado: false, // false apagada , true encendida
        parr: "La luz está apagada",
        btn: "Encender",
        estilo: "apagada"
    });

    /**
     * Función la cual mira si la luz está encendida o no y cambia los valores con setEncender
     */
    function handleBombilla() {
        if (!encender.estado) { //la luz esta apagada
            setEncender({
                estado: true, // false apagada , true encendida
                parr: "La luz está encendida",
                btn: "Apagar",
                estilo: "encendida"
            })
        } else { //la luz esta encendida
            setEncender({
                estado: false, // false apagada , true encendida
                parr: "La luz está apagada",
                btn: "Encender",
                estilo: "apagada"
            })
        }
    }

    return (
        <>
            <div className="general">
                <p>{encender.parr}</p>
                <div className={encender.estilo}></div>
                <button onClick={handleBombilla}>{encender.btn}</button>
            </div>
        </>
    )
}