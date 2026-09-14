import { PRODUCTOS } from "./contenido.js";

export const CLAVE_CARRITO = "sonidoVivoCarrito";

function buscarProducto(id) {
  return PRODUCTOS.find((producto) => producto.id === id);
}

function normalizarCantidad(valor, stock) {
  const cantidad = Number.parseInt(valor, 10);
  if (!Number.isFinite(cantidad) || cantidad < 1) return 1;
  return Math.min(cantidad, stock);
}

function normalizarCarrito(datos) {
  if (!Array.isArray(datos)) return [];

  return datos.reduce((carrito, item) => {
    const producto = buscarProducto(item?.id);
    if (!producto || producto.stock < 1) return carrito;

    const existente = carrito.find((linea) => linea.id === producto.id);
    const cantidad = normalizarCantidad(item.cantidad, producto.stock);

    if (existente) {
      existente.cantidad = Math.min(existente.cantidad + cantidad, producto.stock);
    } else {
      carrito.push({ id: producto.id, cantidad });
    }

    return carrito;
  }, []);
}

function guardar(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
  window.dispatchEvent(new CustomEvent("carrito:actualizado"));
  return carrito;
}

export function obtenerCarrito() {
  try {
    return normalizarCarrito(JSON.parse(localStorage.getItem(CLAVE_CARRITO) || "[]"));
  } catch {
    localStorage.removeItem(CLAVE_CARRITO);
    return [];
  }
}

export function agregarProducto(id, cantidadSolicitada = 1) {
  const producto = buscarProducto(id);
  if (!producto) throw new Error("El producto solicitado no existe.");

  const carrito = obtenerCarrito();
  const linea = carrito.find((item) => item.id === id);
  const cantidad = normalizarCantidad(cantidadSolicitada, producto.stock);

  if (linea) {
    linea.cantidad = Math.min(linea.cantidad + cantidad, producto.stock);
  } else {
    carrito.push({ id, cantidad });
  }

  guardar(carrito);
  return carrito.find((item) => item.id === id);
}

export function cambiarCantidad(id, cantidadSolicitada) {
  const producto = buscarProducto(id);
  if (!producto) return obtenerCarrito();

  const carrito = obtenerCarrito();
  const linea = carrito.find((item) => item.id === id);
  if (!linea) return carrito;

  linea.cantidad = normalizarCantidad(cantidadSolicitada, producto.stock);
  return guardar(carrito);
}

export function eliminarProducto(id) {
  return guardar(obtenerCarrito().filter((item) => item.id !== id));
}

export function vaciarCarrito() {
  return guardar([]);
}

export function obtenerResumen() {
  const items = obtenerCarrito().map((linea) => {
    const producto = buscarProducto(linea.id);
    return {
      ...linea,
      producto,
      subtotal: producto.precio * linea.cantidad
    };
  });

  return {
    items,
    cantidad: items.reduce((total, item) => total + item.cantidad, 0),
    total: items.reduce((total, item) => total + item.subtotal, 0)
  };
}
