const API =
  "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=42b9397ae64394c36b0c8c432c3671ff&hash=25612e66458fba89caa5bb0397bd0937";
let container = document.getElementById("container");
let apariciones = document.getElementById("apariciones");
let html = "";
let personaje = "";
const obtenerDatos = (url) => {
  return (
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        for (const comics of json.data.results) {
          for (const precios of comics.prices) {
            console.log(comics.characters.items);
            html += `<p>titulo : ${comics.title}</p>`;
            html += `<p>series : ${comics.series.name}</p>`;
            html += `<p>precio : ${precios.price}</p>`;
            html += `<p>descripcion : ${comics.description}</p>`;
            html += `<img src="${comics.thumbnail.path}.${comics.thumbnail.extension}" alt="">`;

            container.innerHTML = html;
          }
          personaje = comics.characters.items;
          console.log(personaje);
          pintar(personaje);
        }
      })
      //el error
      .catch((error) => {
        console.log("Error", error);
      })
  );
};


const pintar = (personaje) => {
    html += `</p>Personajes Aparecen en el comic : 
    </p>`
    personaje.forEach((personajes) => {
      
      html += `<p>${personajes.name}</p>`
      apariciones.innerHTML = html;
       
    });
  };
  
obtenerDatos(API);
