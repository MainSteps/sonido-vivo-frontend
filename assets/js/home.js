import { ARTICULOS, PRODUCTOS } from "./contenido.js";
import "./site.js";

const formatearPrecio = (precio) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(precio);
const productos = document.querySelector("#featured-products");
const articulos = document.querySelector("#featured-posts");

productos?.replaceChildren(...PRODUCTOS.slice(0, 4).map((producto) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "product-card";
  tarjeta.innerHTML = `<img src="${producto.imagen}" alt=""><div><p class="eyebrow">${producto.categoria}</p><h3>${producto.nombre}</h3><p class="price">${formatearPrecio(producto.precio)}</p><a href="producto.html?id=${producto.id}">Ver producto</a></div>`;
  return tarjeta;
}));

articulos?.replaceChildren(...ARTICULOS.map((articulo) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "blog-card";
  tarjeta.innerHTML = `<img src="${articulo.imagen}" alt=""><div><h3>${articulo.titulo}</h3><p>${articulo.resumen}</p><a href="blog-detalle.html?id=${articulo.id}">Leer artículo →</a></div>`;
  return tarjeta;
}));
