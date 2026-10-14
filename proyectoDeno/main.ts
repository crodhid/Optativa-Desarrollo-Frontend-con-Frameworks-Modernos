// Importamos serveDir: una función que entrega los archivos de una carpeta
// (index.html, main.js, styles.css) al navegador.
import { serveDir } from "@std/http/file-server";

// Lista donde guardamos las tareas. Cada tarea es un texto.
// Está en memoria: al reiniciar el servidor, se vacía.
const tareas: string[] = [];

// Esta función atiende cada petición que llega al servidor.
// Se exporta para poder usarla en main_test.ts.
export async function handler(req: Request): Promise<Response> {
  // Sacamos la ruta que pide el navegador (por ejemplo "/api/tareas")
  const url = new URL(req.url);

  // Si piden la lista (método GET), la devolvemos en formato JSON
  if (url.pathname === "/api/tareas" && req.method === "GET") {
    return Response.json(tareas);
  }

  // Si quieren añadir una tarea (método POST)
  if (url.pathname === "/api/tareas" && req.method === "POST") {
    // Leemos los datos que envía el navegador: { "texto": "..." }
    const datos = await req.json();

    // Guardamos el texto en la lista
    tareas.push(datos.texto);

    // Respondemos con el código 201, que significa "creado"
    return new Response("Tarea creada", { status: 201 });
  }

  // Para cualquier otra ruta, entregamos la página desde la carpeta "static"
  return serveDir(req, { fsRoot: "static" });
}

// Esto arranca el servidor solo cuando ejecutamos este archivo directamente
// (no cuando lo importa main_test.ts).
if (import.meta.main) {
  Deno.serve(handler);
}