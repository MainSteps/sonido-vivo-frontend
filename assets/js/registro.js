// Identificar el botón de registro, como en el ejemplo de la Clase 6.
const botonRegistro = document.getElementById("btn-registro")

// Identificar el campo RUN.
const inputRun = document.getElementById("input-run")

// Identificar el campo de nombre.
const inputNombre = document.getElementById("input-nombre")

// Identificar el campo de apellidos.
const inputApellidos = document.getElementById("input-apellidos")

// Identificar el campo de correo electrónico.
const inputEmail = document.getElementById("input-email")

// Identificar el campo de contraseña.
const inputPassword = document.getElementById("input-password")

// Identificar el campo de dirección.
const inputDireccion = document.getElementById("input-direccion")

// Comprobar el formato y el dígito verificador de un RUN chileno.
function validarRun(run) {
    if (run.length < 7 || run.length > 9 || run.includes(".") || run.includes("-")) {
        return false
    }

    const cuerpo = run.slice(0, -1)
    const digitoIngresado = run.slice(-1).toUpperCase()

    if (isNaN(cuerpo) || (isNaN(digitoIngresado) && digitoIngresado !== "K")) {
        return false
    }

    let suma = 0
    let multiplicador = 2

    for (let posicion = cuerpo.length - 1; posicion >= 0; posicion--) {
        suma = suma + Number(cuerpo[posicion]) * multiplicador
        multiplicador = multiplicador + 1

        if (multiplicador === 8) {
            multiplicador = 2
        }
    }

    const resultado = 11 - (suma % 11)
    let digitoEsperado = String(resultado)

    if (resultado === 11) {
        digitoEsperado = "0"
    }

    if (resultado === 10) {
        digitoEsperado = "K"
    }

    return digitoIngresado === digitoEsperado
}

// Comprobar los campos cuando se hace clic en el botón.
botonRegistro.addEventListener("click", function() {
    const run = inputRun.value
    const nombre = inputNombre.value
    const apellidos = inputApellidos.value
    const email = inputEmail.value
    const password = inputPassword.value
    const direccion = inputDireccion.value

    if (run === "") {
        alert("Debe ingresar su RUN.")
        return
    }

    if (!validarRun(run)) {
        alert("El RUN debe tener entre 7 y 9 caracteres, escribirse sin puntos ni guion y tener un dígito verificador válido.")
        return
    }

    if (nombre === "") {
        alert("Debe ingresar su nombre.")
        return
    }

    if (apellidos === "") {
        alert("Debe ingresar sus apellidos.")
        return
    }

    if (email === "") {
        alert("Debe ingresar su correo electrónico.")
        return
    }

    if (password === "") {
        alert("Debe ingresar una contraseña.")
        return
    }

    if (direccion === "") {
        alert("Debe ingresar su dirección.")
        return
    }

    alert("Demostración de Sonido Vivo: los campos revisados están completados. Las demás validaciones están pendientes y no se creó una cuenta.")
})
