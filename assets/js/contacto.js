// Identificar el botón de contacto, como en el ejemplo de la Clase 6.
const botonContacto = document.getElementById("btn-contacto")

// Identificar el campo de nombre.
const inputNombreContacto = document.getElementById("input-nombre-contacto")

// Identificar el espacio para el mensaje del nombre.
const mensajeNombreContacto = document.getElementById("mensaje-nombre-contacto")

// Identificar el campo de correo electrónico opcional.
const inputEmailContacto = document.getElementById("input-email-contacto")

// Identificar el espacio para el mensaje del correo.
const mensajeEmailContacto = document.getElementById("mensaje-email-contacto")

// Identificar el campo de comentario.
const inputComentario = document.getElementById("input-comentario")

// Identificar el espacio para el mensaje del comentario.
const mensajeComentario = document.getElementById("mensaje-comentario")

// Comprobar los campos cuando se hace clic en el botón.
botonContacto.addEventListener("click", function() {
    const nombre = inputNombreContacto.value
    const email = inputEmailContacto.value
    const comentario = inputComentario.value
    mensajeNombreContacto.innerHTML = ""
    mensajeEmailContacto.innerHTML = ""
    mensajeComentario.innerHTML = ""

    if (nombre === "") {
        mensajeNombreContacto.innerHTML = "Debe ingresar su nombre."
        alert("Debe ingresar su nombre.")
        return
    }

    if (nombre.length > 100) {
        mensajeNombreContacto.innerHTML = "El nombre no puede superar los 100 caracteres."
        alert("El nombre no puede superar los 100 caracteres.")
        return
    }

    if (email.length > 100) {
        mensajeEmailContacto.innerHTML = "El correo electrónico no puede superar los 100 caracteres."
        alert("El correo electrónico no puede superar los 100 caracteres.")
        return
    }

    if (email !== "" && !email.endsWith("@duoc.cl") && !email.endsWith("@profesor.duoc.cl") && !email.endsWith("@gmail.com")) {
        mensajeEmailContacto.innerHTML = "Use un correo @duoc.cl, @profesor.duoc.cl o @gmail.com."
        alert("El correo debe pertenecer a los dominios @duoc.cl, @profesor.duoc.cl o @gmail.com.")
        return
    }

    if (comentario === "") {
        mensajeComentario.innerHTML = "Debe ingresar un comentario."
        alert("Debe ingresar un comentario.")
        return
    }

    if (comentario.length > 500) {
        mensajeComentario.innerHTML = "El comentario no puede superar los 500 caracteres."
        alert("El comentario no puede superar los 500 caracteres.")
        return
    }

    alert("Demostración de Sonido Vivo: la consulta está completa, pero no se envió información real.")
})
