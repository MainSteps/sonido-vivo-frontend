// Identificar el botón de contacto, como en el ejemplo de la Clase 6.
const botonContacto = document.getElementById("btn-contacto")

// Identificar el campo de nombre.
const inputNombreContacto = document.getElementById("input-nombre-contacto")

// Identificar el campo de comentario.
const inputComentario = document.getElementById("input-comentario")

// Comprobar los campos cuando se hace clic en el botón.
botonContacto.addEventListener("click", function() {
    const nombre = inputNombreContacto.value
    const comentario = inputComentario.value

    if (nombre === "") {
        alert("Debe ingresar su nombre.")
        return
    }

    if (comentario === "") {
        alert("Debe ingresar un comentario.")
        return
    }

    alert("Demostración de Sonido Vivo: la consulta está completa, pero no se envió información real.")
})
