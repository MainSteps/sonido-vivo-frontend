export function iniciarSitio() {
  const botonMenu = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#main-menu");

  botonMenu?.addEventListener("click", () => {
    const abierto = botonMenu.getAttribute("aria-expanded") === "true";
    botonMenu.setAttribute("aria-expanded", String(!abierto));
    menu?.classList.toggle("is-open", !abierto);
  });

  agregarEnlacesCuenta();
  actualizarContadorCarrito();
}

export function actualizarContadorCarrito() {
  let cantidad = 0;

  try {
    const carrito = JSON.parse(
      localStorage.getItem("sonidoVivoCarrito") || "[]"
    );

    cantidad = Array.isArray(carrito)
      ? carrito.reduce(
          (total, item) => total + (Number(item.cantidad) || 0),
          0
        )
      : 0;
  } catch {
    localStorage.removeItem("sonidoVivoCarrito");
  }

  document.querySelectorAll(".cart-count").forEach((contador) => {
    contador.textContent = cantidad;
  });

  document.querySelectorAll(".cart-link").forEach((enlace) => {
    enlace.setAttribute(
      "aria-label",
      `Ver carrito, ${cantidad} ${
        cantidad === 1 ? "producto" : "productos"
      }`
    );
  });
}

window.addEventListener(
  "carrito:actualizado",
  actualizarContadorCarrito
);

function agregarEnlacesCuenta() {
  document.querySelectorAll(".main-nav").forEach((menu) => {
    const tieneInicioSesion = menu.querySelector(
      '[href="inicio-sesion.html"]'
    );

    const tieneRegistro = menu.querySelector(
      '[href="registro.html"]'
    );

    const tieneAdministracion = menu.querySelector(
      '[href="admin/productos.html"]'
    );

    if (!tieneInicioSesion) {
      const enlaceInicioSesion = document.createElement("a");
      enlaceInicioSesion.href = "inicio-sesion.html";
      enlaceInicioSesion.textContent = "Iniciar sesión";

      menu.append(enlaceInicioSesion);
    }

    if (!tieneRegistro) {
      const enlaceRegistro = document.createElement("a");
      enlaceRegistro.href = "registro.html";
      enlaceRegistro.textContent = "Registrarse";

      menu.append(enlaceRegistro);
    }

    if (!tieneAdministracion) {
      const enlaceAdministracion = document.createElement("a");
      enlaceAdministracion.href = "admin/productos.html";
      enlaceAdministracion.textContent = "Administración";

      menu.append(enlaceAdministracion);
    }
  });
}

iniciarSitio();