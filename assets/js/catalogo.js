import { PRODUCTOS } from "./contenido.js";

const listaProductos = document.querySelector("#lista-productos");

PRODUCTOS.forEach((producto) => {
    const tarjeta = document.createElement("article");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.categoria}</p>
        <p>$${producto.precio}</p>
        <a href="producto.html?id=${producto.id}">Ver detalle</a>
    `;

    listaProductos.appendChild(tarjeta);
});