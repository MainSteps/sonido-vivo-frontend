// Identificar el botón, como en el ejemplo de la Clase 6.
const botonInicioSesion = document.getElementById("btn-inicio-sesion")

// Identificar el campo de correo.
const inputEmailLogin = document.getElementById("input-email-login")

// Mostrar un aviso de demostración al hacer clic.
botonInicioSesion.addEventListener("click", function() {
    const email = inputEmailLogin.value

    if (email === "") {
        alert("Debe ingresar su correo electrónico.")
        return
    }

    alert("Demostración de Sonido Vivo: todavía no se validan los campos ni se inicia una sesión real.")
})
