// assertEquals compara dos valores: si son distintos, la prueba falla.
// "@std/assert" está definido en la sección "imports" de deno.json.
import { assertEquals } from "@std/assert";

// Importamos handler, la función del servidor, para probarla directamente
// sin necesidad de arrancar el servidor ni abrir ningún puerto.
import { handler } from "./main.ts";

// Deno.test define una prueba: primero su nombre (aparece en la terminal)
// y después la función con el código a comprobar.
// Es async porque dentro usamos await.
Deno.test("POST crea una tarea y GET la devuelve", async () => {
  // ---------- Paso 1: crear una tarea ----------
  // Construimos a mano la misma petición que haría el navegador al pulsar "Añadir"
  // y se la pasamos a handler. La URL solo necesita la ruta correcta.
  const crear = await handler(
    new Request("http://localhost/api/tareas", {
      method: "POST", // método HTTP para crear
      body: JSON.stringify({ texto: "Estudiar Deno" }), // cuerpo en formato JSON
    }),
  );

  // Comprobamos que el servidor respondió 201 ("creado").
  // Si devolviera otro código, la prueba fallaría aquí.
  assertEquals(crear.status, 201);

  // ---------- Paso 2: comprobar que la tarea aparece en la lista ----------
  // Pedimos la lista con una petición GET (el método por defecto de Request).
  // El primer await obtiene la respuesta; el segundo, .json(), lee su contenido.
  const lista = await (
    await handler(new Request("http://localhost/api/tareas"))
  ).json();

  // La lista empieza vacía, así que la tarea creada está en la posición 0.
  // Comprobamos que su texto es el que enviamos.
  assertEquals(lista[0].texto, "Estudiar");
});