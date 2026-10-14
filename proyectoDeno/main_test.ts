// assertEquals compara dos valores: si son distintos, la prueba falla.
import { assertEquals } from "@std/assert";

// Importamos la función del servidor para probarla
import { handler } from "./main.ts";

// Deno.test crea una prueba: un nombre y el código que se ejecuta
Deno.test("POST crea una tarea y GET la devuelve", async () => {
  // Paso 1: simulamos que el navegador añade la tarea "Estudiar Deno"
  const crear = await handler(
    new Request("http://localhost/api/tareas", {
      method: "POST",
      body: JSON.stringify({ texto: "Estudiar Deno" }),
    }),
  );

  // Comprobamos que el servidor respondió 201 (creado)
  assertEquals(crear.status, 201);

  // Paso 2: pedimos la lista de tareas (GET)
  const respuesta = await handler(new Request("http://localhost/api/tareas"));
  const lista = await respuesta.json();

  // Comprobamos que la primera tarea de la lista es la que añadimos
  assertEquals(lista[0], "Estudiar Deno");
});