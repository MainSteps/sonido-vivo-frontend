import { PRODUCTOS } from "./contenido.js";
const formatoPrecio = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
});

const listaProductos = document.querySelector("#lista-productos");

PRODUCTOS.forEach((producto) => {
    const tarjeta = document.createElement("article");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.categoria}</p>
        <p>${formatoPrecio.format(producto.precio)}</p>
        <a class="boton-principal" href="producto.html?id=${producto.id}">Ver detalle</a>
    `;

    listaProductos.appendChild(tarjeta);
});