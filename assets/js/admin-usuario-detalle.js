const seleccionarUsuario = document.getElementById("seleccionar-usuario")
const detalleRun = document.getElementById("detalle-run")
const detalleNombre = document.getElementById("detalle-nombre")
const detalleEmail = document.getElementById("detalle-email")
const detalleRol = document.getElementById("detalle-rol")

for (let posicion = 0; posicion < usuarios.length; posicion++) {
    const usuario = usuarios[posicion]
    seleccionarUsuario.innerHTML = seleccionarUsuario.innerHTML + '<option value="' + posicion + '">' + usuario.nombre + ' ' + usuario.apellidos + '</option>'
}

seleccionarUsuario.addEventListener("change", function() {
    detalleRun.innerHTML = ""
    detalleNombre.innerHTML = ""
    detalleEmail.innerHTML = ""
    detalleRol.innerHTML = ""

    if (seleccionarUsuario.value === "") {
        return
    }

    const usuario = usuarios[Number(seleccionarUsuario.value)]
    detalleRun.innerHTML = usuario.run
    detalleNombre.innerHTML = usuario.nombre + " " + usuario.apellidos
    detalleEmail.innerHTML = usuario.email
    detalleRol.innerHTML = usuario.rol
})
