# Lista de tareas con Deno

Miniproyecto de ejemplo para el manual introductorio de Deno. Es una lista de tareas sencilla: escribes una tarea, pulsas **Añadir** y aparece en la lista.

## Requisitos

- [Deno](https://docs.deno.com/runtime/) instalado.

### Instalar Deno en Windows (PowerShell)

Abre PowerShell y ejecuta:

```powershell
irm https://deno.land/install.ps1 | iex
```

Después **cierra la terminal y abre una nueva** para que reconozca el comando.

### Comprobar que está instalado

```powershell
deno --version
```

Si aparece la versión de Deno, ya puedes continuar.

## Cómo ejecutarlo

1. Descarga o clona este repositorio y entra en la carpeta del proyecto:

```bash
cd ejemplo
```

2. Arranca el servidor:

```bash
deno task dev
```

3. Abre el navegador en [http://localhost:8000](http://localhost:8000).

4. Escribe una tarea y pulsa **Añadir**.

Para parar el servidor, pulsa `Ctrl + C` en la terminal.

## Cómo ejecutar las pruebas

```bash
deno test
```

Si todo va bien, verás `ok | 1 passed | 0 failed`.

## Archivos del proyecto

| Archivo | Para qué sirve |
|---|---|
| `main.ts` | Servidor: guarda las tareas y las devuelve |
| `main_test.ts` | Prueba automática del servidor |
| `deno.json` | Configuración y dependencias |
| `static/index.html` | Estructura de la página |
| `static/main.js` | Código de la página: pide y envía las tareas |
| `static/styles.css` | Estilos de la página |

## Notas

- Las tareas se guardan en memoria, así que se borran al reiniciar el servidor.
- Autor: Cristian Rodríguez Hidalgo
