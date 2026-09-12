import { PRODUCTOS } from "./contenido.js";

const parametros = new URLSearchParams(window.location.search);
const idProducto = parametros.get("id");

const producto = PRODUCTOS.find((item) => item.id === idProducto);

const detalleProducto = document.querySelector("#detalle-producto");

if (producto) {
    detalleProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.categoria}</p>
        <p>${producto.descripcion}</p>
        <p>$${producto.precio}</p>
        <p>Stock disponible: ${producto.stock}</p>
        <a href="catalogo.html">Volver al catálogo</a>
    `;
} else {
    detalleProducto.innerHTML = `
        <p>No se encontró el producto solicitado.</p>
        <a href="catalogo.html">Volver al catálogo</a>
    `;
}