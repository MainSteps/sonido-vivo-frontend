// Identificar el botón de contacto, como en el ejemplo de la Clase 6.
const botonContacto = document.getElementById("btn-contacto")

// Identificar el campo de nombre.
const inputNombreContacto = document.getElementById("input-nombre-contacto")

// Identificar el campo de correo electrónico.
const inputEmailContacto = document.getElementById("input-email-contacto")

// Identificar el campo de comentario.
const inputComentario = document.getElementById("input-comentario")

// Comprobar los campos cuando se hace clic en el botón.
botonContacto.addEventListener("click", function() {
    const nombre = inputNombreContacto.value
    const email = inputEmailContacto.value
    const comentario = inputComentario.value

    if (nombre === "") {
        alert("Debe ingresar su nombre.")
        return
    }

    if (email === "") {
        alert("Debe ingresar su correo electrónico.")
        return
    }

    if (comentario === "") {
        alert("Debe ingresar un comentario.")
        return
    }

    alert("Demostración de Sonido Vivo: los campos están completados, pero no se envió una consulta real.")
})
