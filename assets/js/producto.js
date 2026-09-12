import { PRODUCTOS } from "./contenido.js";
const formatoPrecio = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
});

const parametros = new URLSearchParams(window.location.search);
const idProducto = parametros.get("id");

const producto = PRODUCTOS.find((item) => item.id === idProducto);

const detalleProducto = document.querySelector("#detalle-producto");

if (producto) {
    detalleProducto.innerHTML = `
    <article class="detalle-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.categoria}</p>
        <p>${producto.descripcion}</p>
        <p>${formatoPrecio.format(producto.precio)}</p>
        <p>Stock disponible: ${producto.stock}</p>
        <a class="boton-principal" href="catalogo.html">Volver al catálogo</a>
    </article>
`;
} else {
    detalleProducto.innerHTML = `
        <p>No se encontró el producto solicitado.</p>
        <a href="catalogo.html">Volver al catálogo</a>
    `;
}