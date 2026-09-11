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
  let carrito = [];
  try {
    const guardado = JSON.parse(localStorage.getItem("sonidoVivoCarrito") || "[]");
    carrito = Array.isArray(guardado) ? guardado : [];
  } catch {
    localStorage.removeItem("sonidoVivoCarrito");
  }

  const cantidad = carrito.reduce((total, item) => total + (Number(item.cantidad) || 0), 0);
  document.querySelectorAll(".cart-count").forEach((contador) => { contador.textContent = cantidad; });
  document.querySelectorAll(".cart-link").forEach((enlace) => {
    enlace.setAttribute("aria-label", `Ver carrito, ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`);
  });
}

iniciarSitio();
