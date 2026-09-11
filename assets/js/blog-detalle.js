import { ARTICULOS } from "./contenido.js";
import "./site.js";

const contenedor = document.querySelector("#article-detail");
const id = new URLSearchParams(window.location.search).get("id");
const articulo = ARTICULOS.find((item) => item.id === id);

if (!articulo) {
  document.title = "Artículo no encontrado | Sonido Vivo";
  contenedor.innerHTML = `<p class="eyebrow">Error 404</p><h1>Artículo no encontrado</h1><p>El contenido solicitado no está disponible.</p><a class="button" href="blog.html">Ver artículos</a>`;
} else {
  document.title = `${articulo.titulo} | Sonido Vivo`;
  const fragmento = document.createDocumentFragment();
  const imagen = document.createElement("img"); imagen.src = articulo.imagen; imagen.alt = "";
  const cabecera = document.createElement("header"); cabecera.innerHTML = `<p class="eyebrow">Consejos</p><h1>${articulo.titulo}</h1><p class="lead">${articulo.resumen}</p>`;
  fragmento.append(imagen, cabecera);
  articulo.contenido.forEach((texto) => { const parrafo = document.createElement("p"); parrafo.textContent = texto; fragmento.append(parrafo); });
  contenedor.replaceChildren(fragmento);
}
