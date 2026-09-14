import "./site.js";
import {
  cambiarCantidad,
  eliminarProducto,
  obtenerResumen,
  vaciarCarrito
} from "./carrito-store.js";

const formatoPrecio = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});

const contenido = document.querySelector("#carrito-contenido");
const estado = document.querySelector("#carrito-estado");

function anunciar(mensaje) {
  estado.textContent = mensaje;
}

function renderizarCarrito() {
  const resumen = obtenerResumen();

  if (resumen.items.length === 0) {
    contenido.innerHTML = `
      <section class="carrito-vacio">
        <p class="eyebrow">Tu selección</p>
        <h2>El carrito está vacío</h2>
        <p>Explora el catálogo y agrega un instrumento para comenzar.</p>
        <a class="button" href="catalogo.html">Ir al catálogo</a>
      </section>
    `;
    return;
  }

  const filas = resumen.items.map(({ producto, cantidad, subtotal }) => `
    <article class="carrito-item" data-id="${producto.id}">
      <img src="${producto.imagen}" alt="">
      <div class="carrito-item-info">
        <p class="eyebrow">${producto.categoria}</p>
        <h2>${producto.nombre}</h2>
        <p>${formatoPrecio.format(producto.precio)} por unidad</p>
      </div>
      <label class="campo-cantidad">
        <span>Cantidad</span>
        <input class="cantidad-carrito" type="number" min="1" max="${producto.stock}" value="${cantidad}" inputmode="numeric">
      </label>
      <button class="button secondary actualizar-cantidad" type="button">Actualizar</button>
      <p class="subtotal"><span>Subtotal</span>${formatoPrecio.format(subtotal)}</p>
      <button class="button secondary eliminar-producto" type="button">Eliminar</button>
    </article>
  `).join("");

  contenido.innerHTML = `
    <div class="carrito-layout">
      <section class="carrito-lista" aria-label="Productos del carrito">${filas}</section>
      <aside class="resumen-carrito" aria-labelledby="resumen-titulo">
        <p class="eyebrow">Resumen</p>
        <h2 id="resumen-titulo">Total de la compra</h2>
        <p><span>Productos</span><strong>${resumen.cantidad}</strong></p>
        <p class="resumen-total"><span>Total</span><strong>${formatoPrecio.format(resumen.total)}</strong></p>
        <p class="nota-simulacion">Compra simulada: no se procesan pagos ni datos personales.</p>
        <a class="button" href="catalogo.html">Seguir comprando</a>
        <button id="vaciar-carrito" class="button secondary" type="button">Vaciar carrito</button>
      </aside>
    </div>
  `;
}

contenido.addEventListener("click", (evento) => {
  const botonActualizar = evento.target.closest(".actualizar-cantidad");
  if (botonActualizar) {
    const item = botonActualizar.closest(".carrito-item");
    const input = item.querySelector(".cantidad-carrito");
    cambiarCantidad(item.dataset.id, input.value);
    renderizarCarrito();
    anunciar("Cantidad actualizada.");
    return;
  }

  const botonEliminar = evento.target.closest(".eliminar-producto");
  if (botonEliminar) {
    const item = botonEliminar.closest(".carrito-item");
    eliminarProducto(item.dataset.id);
    renderizarCarrito();
    anunciar("Producto eliminado del carrito.");
    return;
  }

  if (evento.target.closest("#vaciar-carrito")) {
    vaciarCarrito();
    renderizarCarrito();
    anunciar("Carrito vaciado.");
  }
});

renderizarCarrito();
