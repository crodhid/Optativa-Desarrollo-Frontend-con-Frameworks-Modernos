// Guardamos la lista (<ul>) de la página para poder añadirle tareas
const lista = document.getElementById("lista");

// Pide las tareas al servidor y las muestra en la página
async function cargar() {
  // Pedimos la lista al servidor y esperamos la respuesta
  const respuesta = await fetch("/api/tareas");
  const tareas = await respuesta.json();

  // Vaciamos la lista para no repetir tareas
  lista.innerHTML = "";

  // Por cada tarea, creamos un <li> y lo metemos en la lista
  for (const texto of tareas) {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.append(li);
  }
}

// Se ejecuta cuando pulsamos el botón "Añadir"
document.getElementById("formulario").onsubmit = async (e) => {
  // Evita que la página se recargue al enviar el formulario
  e.preventDefault();

  // Leemos lo que hemos escrito en el input
  const texto = document.getElementById("texto").value;

  // Enviamos el texto al servidor
  await fetch("/api/tareas", {
    method: "POST",
    body: JSON.stringify({ texto: texto }),
  });

  // Vaciamos el input
  e.target.reset();

  // Volvemos a pedir la lista para ver la tarea nueva
  cargar();
};

// Al abrir la página, mostramos las tareas que ya existan
cargar();