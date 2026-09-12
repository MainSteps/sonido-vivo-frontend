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

botonCrearUsuario.addEventListener("click", function() {
    if (inputCrearRun.value === "" || inputCrearNombre.value === "" || inputCrearApellidos.value === "" || inputCrearEmail.value === "" || inputCrearPassword.value === "" || inputCrearRol.value === "" || inputCrearRegion.value === "" || inputCrearComuna.value === "" || inputCrearDireccion.value === "") {
        alert("Debe completar todos los campos obligatorios del usuario.")
        return
    }

    alert("Demostración de Sonido Vivo: el formulario está completo, pero no se guardó un usuario real.")
})
