import { PRODUCTOS } from "./contenido.js";
import { agregarProducto } from "./carrito-store.js";
import "./site.js";
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
        <label class="selector-cantidad">Cantidad
            <input id="cantidad-producto" type="number" min="1" max="${producto.stock}" value="1" inputmode="numeric">
        </label>
        <button id="agregar-producto" class="boton-secundario" type="button">Agregar al carrito</button>
        <a class="boton-principal" href="catalogo.html">Volver al catálogo</a>
    </article>
    `;

    document.querySelector("#agregar-producto").addEventListener("click", () => {
        const cantidad = document.querySelector("#cantidad-producto").value;
        const linea = agregarProducto(producto.id, cantidad);
        document.querySelector("#estado-producto").textContent = `${producto.nombre} agregado. Cantidad en el carrito: ${linea.cantidad}.`;
    });
} else {
    detalleProducto.innerHTML = `
        <p>No se encontró el producto solicitado.</p>
        <a href="catalogo.html">Volver al catálogo</a>
    `;
}
