import { useState } from 'react'
import './App.css'
import { ButtonOK } from './components/ButtonOK/ButtonOK';

function App() {
  var año = "2026";
  return (
    //para devolver varias etiquetas utilizamos las de apertura y de cierre vacias
    // <>
    <main>
      <h1>Hello Vite + React en {año}</h1>
      <h2>Adios</h2>
      <ButtonOK/>
    </main>
    // </>
  )
}

export default App

/********************************** */
function sumar(params) {

}