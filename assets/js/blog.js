import { ARTICULOS } from "./contenido.js";
import "./site.js";

const lista = document.querySelector("#post-list");
lista?.replaceChildren(...ARTICULOS.map((articulo) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "blog-card";
  tarjeta.innerHTML = `<img src="${articulo.imagen}" alt=""><div><p class="eyebrow">Consejos</p><h2>${articulo.titulo}</h2><p>${articulo.resumen}</p><a class="button secondary" href="blog-detalle.html?id=${articulo.id}">Leer artículo</a></div>`;
  return tarjeta;
}));
