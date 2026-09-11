// Identificar el botón de registro, como en el ejemplo de la Clase 6.
const botonRegistro = document.getElementById("btn-registro")

// Identificar el campo de nombre.
const inputNombre = document.getElementById("input-nombre")

// Comprobar el nombre cuando se hace clic en el botón.
botonRegistro.addEventListener("click", function() {
    const nombre = inputNombre.value

    if (nombre === "") {
        alert("Debe ingresar su nombre.")
        return
    }

    alert("Demostración de Sonido Vivo: el nombre está completado. Las demás validaciones están pendientes y no se creó una cuenta.")
})
