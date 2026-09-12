const editarSeleccion = document.getElementById("editar-seleccion")
const editarRun = document.getElementById("editar-run")
const editarNombre = document.getElementById("editar-nombre")
const editarApellidos = document.getElementById("editar-apellidos")
const editarEmail = document.getElementById("editar-email")
const editarRol = document.getElementById("editar-rol")
const botonEditarUsuario = document.getElementById("btn-editar-usuario")

for (let posicion = 0; posicion < usuarios.length; posicion++) {
    const usuario = usuarios[posicion]
    editarSeleccion.innerHTML = editarSeleccion.innerHTML + '<option value="' + posicion + '">' + usuario.nombre + ' ' + usuario.apellidos + '</option>'
}

editarSeleccion.addEventListener("change", function() {
    if (editarSeleccion.value === "") {
        editarRun.value = ""
        editarNombre.value = ""
        editarApellidos.value = ""
        editarEmail.value = ""
        editarRol.value = "Cliente"
        return
    }

    const usuario = usuarios[Number(editarSeleccion.value)]
    editarRun.value = usuario.run
    editarNombre.value = usuario.nombre
    editarApellidos.value = usuario.apellidos
    editarEmail.value = usuario.email
    editarRol.value = usuario.rol
})

botonEditarUsuario.addEventListener("click", function() {
    if (editarSeleccion.value === "") {
        alert("Debe seleccionar un usuario para editar.")
        return
    }

    if (editarNombre.value === "" || editarApellidos.value === "" || editarEmail.value === "" || editarRol.value === "") {
        alert("Debe completar los campos obligatorios de la edición.")
        return
    }

    alert("Demostración de Sonido Vivo: los cambios están completos, pero no se modificó un usuario real.")
})
