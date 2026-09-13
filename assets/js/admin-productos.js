import { PRODUCTOS } from "./contenido.js";

const formularioProducto = document.querySelector("#formulario-producto");
const listaAdminProductos = document.querySelector("#lista-admin-productos");

const campoCodigo = document.querySelector("#codigo");
const campoNombre = document.querySelector("#nombre");
const campoPrecio = document.querySelector("#precio");
const campoStock = document.querySelector("#stock");
const campoCategoria = document.querySelector("#categoria");

const botonGuardar = formularioProducto.querySelector(
    'button[type="submit"]'
);

const botonCancelarEdicion = document.querySelector(
    "#cancelar-edicion"
);

let idProductoEnEdicion = null;


const formatoPrecio = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
});

function crearCelda(valor) {
    const celda = document.createElement("td");
    celda.textContent = valor;

    return celda;
}

function crearBoton(texto, clase, idProducto) {
    const boton = document.createElement("button");

    boton.type = "button";
    boton.textContent = texto;
    boton.classList.add(clase);
    boton.dataset.id = idProducto;

    return boton;
}

function iniciarEdicion(idProducto) {
    const producto = PRODUCTOS.find(
        (item) => item.id === idProducto
    );

    if (!producto) {
        return;
    }

    campoCodigo.value = producto.id;
    campoNombre.value = producto.nombre;
    campoPrecio.value = producto.precio;
    campoStock.value = producto.stock;
    campoCategoria.value = producto.categoria;

    idProductoEnEdicion = producto.id;

    botonGuardar.textContent = "Actualizar producto";
    botonCancelarEdicion.hidden = false;
}

function cancelarEdicion() {
    formularioProducto.reset();

    idProductoEnEdicion = null;

    botonGuardar.textContent = "Guardar producto";
    botonCancelarEdicion.hidden = true;
}


function renderizarProductos() {
    listaAdminProductos.innerHTML = "";

    PRODUCTOS.forEach((producto) => {
        const fila = document.createElement("tr");

        const celdaAcciones = document.createElement("td");

        const botonEditar = crearBoton(
            "Editar",
            "boton-editar",
            producto.id
        );

        botonEditar.addEventListener("click", () => {
            iniciarEdicion(producto.id);
        });



        const botonEliminar = crearBoton(
            "Eliminar",
            "boton-eliminar",
            producto.id
        );

        celdaAcciones.append(botonEditar, botonEliminar);


        fila.append(
            crearCelda(producto.id),
            crearCelda(producto.nombre),
            crearCelda(producto.categoria),
            crearCelda(formatoPrecio.format(producto.precio)),
            crearCelda(producto.stock),
            celdaAcciones
        );

        listaAdminProductos.appendChild(fila);
    });
}

botonCancelarEdicion.addEventListener(
    "click",
    cancelarEdicion
);


renderizarProductos();
