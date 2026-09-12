// Identificar el botón de contacto, como en el ejemplo de la Clase 6.
const botonContacto = document.getElementById("btn-contacto")

// Identificar el campo de nombre.
const inputNombreContacto = document.getElementById("input-nombre-contacto")

// Comprobar el nombre cuando se hace clic en el botón.
botonContacto.addEventListener("click", function() {
    const nombre = inputNombreContacto.value

    if (nombre === "") {
        alert("Debe ingresar su nombre.")
        return
    }

    alert("Demostración de Sonido Vivo: el nombre está completado. Las demás validaciones están pendientes y no se envió la consulta.")
})
