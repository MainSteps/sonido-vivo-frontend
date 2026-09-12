// Identificar el botón de contacto, como en el ejemplo de la Clase 6.
const botonContacto = document.getElementById("btn-contacto")

// Identificar el campo de nombre.
const inputNombreContacto = document.getElementById("input-nombre-contacto")

// Identificar el campo de correo electrónico.
const inputEmailContacto = document.getElementById("input-email-contacto")

// Comprobar los campos cuando se hace clic en el botón.
botonContacto.addEventListener("click", function() {
    const nombre = inputNombreContacto.value
    const email = inputEmailContacto.value

    if (nombre === "") {
        alert("Debe ingresar su nombre.")
        return
    }

    if (email === "") {
        alert("Debe ingresar su correo electrónico.")
        return
    }

    alert("Demostración de Sonido Vivo: nombre y correo están completados. Las demás validaciones están pendientes y no se envió la consulta.")
})
