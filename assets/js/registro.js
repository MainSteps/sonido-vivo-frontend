// Identificar el botón de registro, como en el ejemplo de la Clase 6.
const botonRegistro = document.getElementById("btn-registro")

// Identificar el campo de nombre.
const inputNombre = document.getElementById("input-nombre")

// Identificar el campo de apellidos.
const inputApellidos = document.getElementById("input-apellidos")

// Comprobar nombre y apellidos cuando se hace clic en el botón.
botonRegistro.addEventListener("click", function() {
    const nombre = inputNombre.value
    const apellidos = inputApellidos.value

    if (nombre === "") {
        alert("Debe ingresar su nombre.")
        return
    }

    if (apellidos === "") {
        alert("Debe ingresar sus apellidos.")
        return
    }

    alert("Demostración de Sonido Vivo: nombre y apellidos están completados. Las demás validaciones están pendientes y no se creó una cuenta.")
})
