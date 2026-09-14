import { PRODUCTOS } from "./contenido.js";
import { agregarProducto } from "./carrito-store.js";
import "./site.js";
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
        <button class="boton-secundario agregar-carrito" type="button" data-id="${producto.id}">Agregar al carrito</button>
    `;

    listaProductos.appendChild(tarjeta);
});

const estadoCatalogo = document.querySelector("#estado-catalogo");

listaProductos.addEventListener("click", (evento) => {
    const boton = evento.target.closest(".agregar-carrito");
    if (!boton) return;

    const producto = PRODUCTOS.find((item) => item.id === boton.dataset.id);
    const linea = agregarProducto(producto.id);
    estadoCatalogo.textContent = `${producto.nombre} agregado. Cantidad en el carrito: ${linea.cantidad}.`;
});
