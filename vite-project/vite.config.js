import {defineConfig} from 'vite'
export default defineConfig({
    server: {
        port: 3000,         //Puerto del servidor de desarrollo
        open : true,        //abre el navegador al arrancar
    },
    build: {
        outDir: 'dist',     //carpeta de salida de npm run build
    },
})