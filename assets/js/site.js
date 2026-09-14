export function iniciarSitio() {
  const botonMenu = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#main-menu");

  botonMenu?.addEventListener("click", () => {
    const abierto = botonMenu.getAttribute("aria-expanded") === "true";
    botonMenu.setAttribute("aria-expanded", String(!abierto));
    menu?.classList.toggle("is-open", !abierto);
  });

  actualizarContadorCarrito();
}

export function actualizarContadorCarrito() {
  let cantidad = 0;
  try {
    const carrito = JSON.parse(localStorage.getItem("sonidoVivoCarrito") || "[]");
    cantidad = Array.isArray(carrito)
      ? carrito.reduce((total, item) => total + (Number(item.cantidad) || 0), 0)
      : 0;
  } catch {
    localStorage.removeItem("sonidoVivoCarrito");
  }
  document.querySelectorAll(".cart-count").forEach((contador) => { contador.textContent = cantidad; });
  document.querySelectorAll(".cart-link").forEach((enlace) => {
    enlace.setAttribute("aria-label", `Ver carrito, ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`);
  });
}

window.addEventListener("carrito:actualizado", actualizarContadorCarrito);
iniciarSitio();
