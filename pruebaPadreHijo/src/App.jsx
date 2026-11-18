import { useState } from 'react'
import './App.css'
import { ComponenteHijo } from './components/ComponenteHijo/ComponenteHijo'

function App() {

  let edad = 30;
  const[comentario,setComentario] = useState("Hola desde el padre");

  return (
    <main>
      <p>Comentario del hijo {comentario}</p>
      <ComponenteHijo nombre={"Antonio"} edad={edad} comentario={comentario} enviarDatos={setComentario}>
        <h2>Título del componente Hijo 1</h2>
      </ComponenteHijo>
    </main>
  )
}

export default App
