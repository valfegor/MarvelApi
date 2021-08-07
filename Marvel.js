const API =
  "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=42b9397ae64394c36b0c8c432c3671ff&hash=25612e66458fba89caa5bb0397bd0937";
let container = document.getElementById("container");
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
            html+=`<div class="container">`
            html+=`<div class="card">`
            html+=`<img src="${comics.thumbnail.path}.${comics.thumbnail.extension}" alt="">`
            html+=`<span class="tag">Nombre de la serie : ${comics.series.name}</span>`
            html+=`<span class="tag">Precio : ${precios.price}</span>`
            html+=`<div class="name">${comics.title}</div>`
            html+=`<p>${comics.description}</p>`
            html+=`</div>`
            html+=`</div>`
            
          }
          personaje = comics.characters.items;
          container.innerHTML = html;
        }
      })
      //el error
      .catch((error) => {
        console.log("Error", error);
      })
  );
};


  
obtenerDatos(API);
