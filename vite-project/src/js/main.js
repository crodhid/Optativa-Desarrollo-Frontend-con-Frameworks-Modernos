const h11 = document.getElementById("h11");

//Esto extrae mi variable creada de .env, meta es de metadatos
h11.innerHTML = import.meta.VITE_URL;