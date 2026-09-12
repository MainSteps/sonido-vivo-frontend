// Identificar el botón de registro, como en el ejemplo de la Clase 6.
const botonRegistro = document.getElementById("btn-registro")

// Identificar el campo RUN.
const inputRun = document.getElementById("input-run")

// Identificar el espacio para el mensaje del RUN.
const mensajeRun = document.getElementById("mensaje-run")

// Identificar el campo de nombre.
const inputNombre = document.getElementById("input-nombre")

// Identificar el espacio para el mensaje del nombre.
const mensajeNombre = document.getElementById("mensaje-nombre")

// Identificar el campo de apellidos.
const inputApellidos = document.getElementById("input-apellidos")

// Identificar el espacio para el mensaje de los apellidos.
const mensajeApellidos = document.getElementById("mensaje-apellidos")

// Identificar el campo de correo electrónico.
const inputEmail = document.getElementById("input-email")

// Identificar el campo de contraseña.
const inputPassword = document.getElementById("input-password")

// Identificar los selectores de región y comuna.
const inputRegion = document.getElementById("input-region")
const inputComuna = document.getElementById("input-comuna")

// Identificar el campo de dirección.
const inputDireccion = document.getElementById("input-direccion")

// Cargar las regiones disponibles en el primer selector.
for (let posicion = 0; posicion < regionesComunas.length; posicion++) {
    inputRegion.innerHTML = inputRegion.innerHTML + '<option value="' + posicion + '">' + regionesComunas[posicion].nombre + '</option>'
}

// Cambiar las comunas cuando la persona selecciona otra región.
inputRegion.addEventListener("change", function() {
    inputComuna.innerHTML = '<option value="">Seleccione una comuna</option>'

    if (inputRegion.value === "") {
        inputComuna.innerHTML = '<option value="">Seleccione primero una región</option>'
        return
    }

    const regionSeleccionada = regionesComunas[Number(inputRegion.value)]

    for (let posicion = 0; posicion < regionSeleccionada.comunas.length; posicion++) {
        const comuna = regionSeleccionada.comunas[posicion]
        inputComuna.innerHTML = inputComuna.innerHTML + '<option value="' + comuna + '">' + comuna + '</option>'
    }
})

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
    const region = inputRegion.value
    const comuna = inputComuna.value
    const direccion = inputDireccion.value
    mensajeRun.innerHTML = ""
    mensajeNombre.innerHTML = ""
    mensajeApellidos.innerHTML = ""

    if (run === "") {
        mensajeRun.innerHTML = "Debe ingresar su RUN."
        alert("Debe ingresar su RUN.")
        return
    }

    if (!validarRun(run)) {
        mensajeRun.innerHTML = "Escriba un RUN válido, sin puntos ni guion."
        alert("El RUN debe tener entre 7 y 9 caracteres, escribirse sin puntos ni guion y tener un dígito verificador válido.")
        return
    }

    if (nombre === "") {
        mensajeNombre.innerHTML = "Debe ingresar su nombre."
        alert("Debe ingresar su nombre.")
        return
    }

    if (nombre.length > 50) {
        mensajeNombre.innerHTML = "El nombre no puede superar los 50 caracteres."
        alert("El nombre no puede superar los 50 caracteres.")
        return
    }

    if (apellidos === "") {
        mensajeApellidos.innerHTML = "Debe ingresar sus apellidos."
        alert("Debe ingresar sus apellidos.")
        return
    }

    if (apellidos.length > 100) {
        mensajeApellidos.innerHTML = "Los apellidos no pueden superar los 100 caracteres."
        alert("Los apellidos no pueden superar los 100 caracteres.")
        return
    }

    if (email === "") {
        alert("Debe ingresar su correo electrónico.")
        return
    }

    if (email.length > 100) {
        alert("El correo electrónico no puede superar los 100 caracteres.")
        return
    }

    if (!email.endsWith("@duoc.cl") && !email.endsWith("@profesor.duoc.cl") && !email.endsWith("@gmail.com")) {
        alert("El correo debe pertenecer a los dominios @duoc.cl, @profesor.duoc.cl o @gmail.com.")
        return
    }

    if (password === "") {
        alert("Debe ingresar una contraseña.")
        return
    }

    if (region === "") {
        alert("Debe seleccionar una región.")
        return
    }

    if (comuna === "") {
        alert("Debe seleccionar una comuna.")
        return
    }

    if (direccion === "") {
        alert("Debe ingresar su dirección.")
        return
    }

    alert("Demostración de Sonido Vivo: los campos revisados están completados. Las demás validaciones están pendientes y no se creó una cuenta.")
})
