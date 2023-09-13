const api = 'https://apisimpsons.fly.dev/api/personajes';

// Solicitud fetch
fetch(api)
  .then((response) => response.json())
  .then((listado) => {
    console.log(listado);

    const personajes = document.getElementById("personajes");

    // Iterar entre los distintos personajes que se encuentran en el listado
    for (const personaje of listado.docs) {
      // Extraer los datos que quieres mostrar de cada personaje    
      const personajeHTML = `
      <div class="columna">
        <p class="nombre">${personaje.Nombre}</p>
        <p>${personaje.Ocupacion}</p>
        <p><img src="${personaje.Imagen}" alt="${personaje.Nombre}"></p>
        <p>Estado: ${personaje.Estado}</p>
      `;

      // Agregar cada personaje al HTML 
      personajes.innerHTML += personajeHTML;
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });







