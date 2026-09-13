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

const confirmacionEliminacion = document.querySelector(
    "#confirmacion-eliminacion"
);

const mensajeConfirmacion = document.querySelector(
    "#mensaje-confirmacion"
);

const botonConfirmarEliminacion = document.querySelector(
    "#confirmar-eliminacion"
);

const botonCancelarEliminacion = document.querySelector(
    "#cancelar-eliminacion"
);


let idProductoEnEdicion = null;

let idProductoParaEliminar = null;


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

function solicitarEliminacion(idProducto) {
    const producto = PRODUCTOS.find(
        (item) => item.id === idProducto
    );

    if (!producto) {
        return;
    }

    idProductoParaEliminar = producto.id;

    mensajeConfirmacion.textContent =
        `¿Deseas eliminar "${producto.nombre}"?`;

    confirmacionEliminacion.hidden = false;
}

function cancelarEliminacion() {
    idProductoParaEliminar = null;

    mensajeConfirmacion.textContent = "";

    confirmacionEliminacion.hidden = true;
}


function confirmarEliminacion() {
    const indice = PRODUCTOS.findIndex(
        (item) => item.id === idProductoParaEliminar
    );

    if (indice === -1) {
        cancelarEliminacion();
        return;
    }

    PRODUCTOS.splice(indice, 1);

    renderizarProductos();
    cancelarEliminacion();
}




function validarFormulario() {
    const errores = {};

    const codigo = campoCodigo.value.trim();
    const nombre = campoNombre.value.trim();
    const precio = Number(campoPrecio.value);
    const stock = Number(campoStock.value);
    const categoria = campoCategoria.value;

    if (codigo.length < 3) {
        errores.codigo = "El código debe tener al menos 3 caracteres.";
    }

    if (nombre.length === 0 || nombre.length > 100) {
        errores.nombre = "El nombre es obligatorio y debe tener máximo 100 caracteres.";
    }

    if (
        campoPrecio.value === "" ||
        Number.isNaN(precio) ||
        precio < 0
    ) {
        errores.precio = "El precio debe ser un número mayor o igual a 0.";
    }

    if (
        campoStock.value === "" ||
        !Number.isInteger(stock) ||
        stock < 0
    ) {
        errores.stock = "El stock debe ser un entero mayor o igual a 0.";
    }

    if (categoria === "") {
        errores.categoria = "Debes seleccionar una categoría.";
    }

    return errores;
}

function mostrarErrores(errores) {
    document.querySelector("#error-codigo").textContent =
        errores.codigo || "";

    document.querySelector("#error-nombre").textContent =
        errores.nombre || "";

    document.querySelector("#error-precio").textContent =
        errores.precio || "";

    document.querySelector("#error-stock").textContent =
        errores.stock || "";

    document.querySelector("#error-categoria").textContent =
        errores.categoria || "";

    return Object.keys(errores).length === 0;
}

function obtenerProductoFormulario() {
    return {
        id: campoCodigo.value.trim(),
        nombre: campoNombre.value.trim(),
        precio: Number(campoPrecio.value),
        stock: Number(campoStock.value),
        categoria: campoCategoria.value,
        imagen: "assets/images/hero-sonido-vivo.svg",
        descripcion: "Producto simulado registrado desde el mantenedor."
    };
}


function guardarProducto(productoFormulario) {
    if (idProductoEnEdicion) {
        const indice = PRODUCTOS.findIndex(
            (item) => item.id === idProductoEnEdicion
        );

        if (indice !== -1) {
            PRODUCTOS[indice] = {
                ...PRODUCTOS[indice],
                ...productoFormulario
            };
        }
    } else {
        PRODUCTOS.push(productoFormulario);
    }

    renderizarProductos();
    cancelarEdicion();
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

        botonEliminar.addEventListener("click", () => {
            solicitarEliminacion(producto.id);
        });


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

botonCancelarEliminacion.addEventListener(
    "click",
    cancelarEliminacion
);

botonConfirmarEliminacion.addEventListener(
    "click",
    confirmarEliminacion
);


formularioProducto.addEventListener("submit", (event) => {
    event.preventDefault();

    const errores = validarFormulario();
    const formularioValido = mostrarErrores(errores);

    if (!formularioValido) {
        return;
    }

    const productoFormulario = obtenerProductoFormulario();

    guardarProducto(productoFormulario);

    });



renderizarProductos();
