const inputCrearRun = document.getElementById("crear-run")
const inputCrearNombre = document.getElementById("crear-nombre")
const inputCrearApellidos = document.getElementById("crear-apellidos")
const inputCrearEmail = document.getElementById("crear-email")
const inputCrearPassword = document.getElementById("crear-password")
const inputCrearRol = document.getElementById("crear-rol")
const inputCrearRegion = document.getElementById("crear-region")
const inputCrearComuna = document.getElementById("crear-comuna")
const inputCrearDireccion = document.getElementById("crear-direccion")
const botonCrearUsuario = document.getElementById("btn-crear-usuario")

for (let posicion = 0; posicion < regionesComunas.length; posicion++) {
    inputCrearRegion.innerHTML = inputCrearRegion.innerHTML + '<option value="' + posicion + '">' + regionesComunas[posicion].nombre + '</option>'
}

inputCrearRegion.addEventListener("change", function() {
    inputCrearComuna.innerHTML = '<option value="">Seleccione una comuna</option>'

    if (inputCrearRegion.value === "") {
        return
    }

    const regionSeleccionada = regionesComunas[Number(inputCrearRegion.value)]

    for (let posicion = 0; posicion < regionSeleccionada.comunas.length; posicion++) {
        const comuna = regionSeleccionada.comunas[posicion]
        inputCrearComuna.innerHTML = inputCrearComuna.innerHTML + '<option value="' + comuna + '">' + comuna + '</option>'
    }
})

function validarRunUsuario(run) {
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

botonCrearUsuario.addEventListener("click", function() {
    if (inputCrearRun.value === "" || inputCrearNombre.value === "" || inputCrearApellidos.value === "" || inputCrearEmail.value === "" || inputCrearPassword.value === "" || inputCrearRol.value === "" || inputCrearRegion.value === "" || inputCrearComuna.value === "" || inputCrearDireccion.value === "") {
        alert("Debe completar todos los campos obligatorios del usuario.")
        return
    }

    if (!validarRunUsuario(inputCrearRun.value)) {
        alert("El RUN debe escribirse sin puntos ni guion y tener un dígito verificador válido.")
        return
    }

    if (inputCrearNombre.value.length > 50 || inputCrearApellidos.value.length > 100 || inputCrearDireccion.value.length > 300) {
        alert("Revise los límites de nombre, apellidos y dirección.")
        return
    }

    const email = inputCrearEmail.value

    if (email.length > 100 || (!email.endsWith("@duoc.cl") && !email.endsWith("@profesor.duoc.cl") && !email.endsWith("@gmail.com"))) {
        alert("Ingrese un correo válido de los dominios permitidos.")
        return
    }

    if (inputCrearPassword.value.length < 4 || inputCrearPassword.value.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.")
        return
    }

    alert("Demostración de Sonido Vivo: el formulario está completo, pero no se guardó un usuario real.")
})
