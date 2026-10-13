import { serveDir } from "@std/http/file-server";

// Estructura de una tarea
interface Tarea {
  id: number;
  texto: string;
  hecha: boolean;
}

// "Base de datos" en memoria (se pierde al reiniciar el servidor)
let tareas: Tarea[] = [];
let siguienteId = 1;

export async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  // GET /api/tareas -> lista todas las tareas
  if (url.pathname === "/api/tareas" && req.method === "GET") {
    return Response.json(tareas);
  }

  // POST /api/tareas -> crea una tarea nueva
  if (url.pathname === "/api/tareas" && req.method === "POST") {
    const { texto } = await req.json();
    const nueva: Tarea = { id: siguienteId++, texto, hecha: false };
    tareas.push(nueva);
    return Response.json(nueva, { status: 201 });
  }

  // PUT y DELETE /api/tareas/:id -> modifican una tarea concreta
  const coincidencia = url.pathname.match(/^\/api\/tareas\/(\d+)$/);
  if (coincidencia) {
    const id = Number(coincidencia[1]);

    if (req.method === "PUT") {
      const tarea = tareas.find((t) => t.id === id);
      if (!tarea) return new Response("No encontrada", { status: 404 });
      tarea.hecha = !tarea.hecha; // alterna completada / pendiente
      return Response.json(tarea);
    }

    if (req.method === "DELETE") {
      tareas = tareas.filter((t) => t.id !== id);
      return new Response(null, { status: 204 });
    }
  }

  // Cualquier otra ruta: sirve los archivos de la carpeta static/
  return serveDir(req, { fsRoot: "static" });
}

// Solo arranca el servidor si se ejecuta este archivo directamente
if (import.meta.main) {
  Deno.serve(handler);
}
