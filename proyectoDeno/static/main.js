// Guardamos una referencia al <ul id="lista"> del HTML,
// que es donde se dibujarán las tareas.
const lista = document.getElementById("lista");

// Pide las tareas al servidor y las dibuja en la página.
// Es async porque dentro usamos await para esperar al servidor.
//Async lo que hace es una funcion que puede esperar a algo que tarda
async function cargar() {
  // fetch hace una petición GET a /api/tareas (el método por defecto).
  // El primer await obtiene la respuesta; el segundo, .json(), lee su contenido
  // y lo convierte en un array de JavaScript.
  const tareas = await (await fetch("/api/tareas")).json();

  // Vaciamos la lista para no duplicar las tareas que ya estaban dibujadas
  lista.innerHTML = "";

  // Recorremos las tareas; "t" es cada una: { id, texto, hecha }
  for (const t of tareas) {
    // Creamos un elemento <li> nuevo (todavía no está en la página)
    const li = document.createElement("li");

    // Ponemos el texto de la tarea dentro del <li>
    li.textContent = t.texto;

    // Si la tarea está hecha, le damos la clase "hecha" (que la tacha en styles.css).
    // Si no, la clase queda vacía.
    li.className = t.hecha ? "hecha" : "";

    // Clic: alterna completada / pendiente.
    // Envía un PUT a /api/tareas/ID. Usamos t.id, el id de ESTA tarea concreta.
    li.onclick = async () => {
      await fetch(`/api/tareas/${t.id}`, { method: "PUT" });
      cargar(); // volvemos a pedir la lista para ver el cambio
    };

    // Doble clic: borra la tarea.
    // Envía un DELETE a /api/tareas/ID.
    li.ondblclick = async () => {
      await fetch(`/api/tareas/${t.id}`, { method: "DELETE" });
      cargar(); // volvemos a pedir la lista sin la tarea borrada
    };

    // Añadimos el <li> a la lista: aquí es cuando aparece en la página
    lista.append(li);
  }
}

// Se ejecuta al pulsar "Añadir" (o Enter) en el formulario.
document.getElementById("formulario").onsubmit = async (e) => {
  // Evita el comportamiento normal del formulario, que recargaría la página
  e.preventDefault();

  // Leemos lo que el usuario escribió en el input
  const texto = document.getElementById("texto").value;

  // Enviamos un POST con el texto en formato JSON.
  // La cabecera content-type avisa al servidor de que el cuerpo es JSON.
  // JSON.stringify convierte el objeto { texto } en texto: {"texto":"..."}
  await fetch("/api/tareas", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ texto }),
  });

  // Vaciamos el input para escribir otra tarea
  e.target.reset();

  // Volvemos a pedir la lista para que aparezca la tarea nueva
  cargar();
};

// Al abrir la página, cargamos las tareas que ya haya en el servidor
cargar();

// para comprobar todos los datos que voy guardando es asi
// console.table(await (await fetch("/api/tareas")).json());