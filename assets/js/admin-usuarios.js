// Identificar el cuerpo de la tabla de usuarios.
const listaUsuarios = document.getElementById("lista-usuarios")

// Mostrar cada usuario simulado en una fila.
for (let posicion = 0; posicion < usuarios.length; posicion++) {
    const usuario = usuarios[posicion]

    listaUsuarios.innerHTML = listaUsuarios.innerHTML + `
        <tr>
            <td>${usuario.run}</td>
            <td>${usuario.nombre} ${usuario.apellidos}</td>
            <td>${usuario.email}</td>
            <td>${usuario.rol}</td>
        </tr>
    `
}
