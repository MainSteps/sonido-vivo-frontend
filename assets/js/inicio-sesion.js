// Identificar el botón, como en el ejemplo de la Clase 6.
const botonInicioSesion = document.getElementById("btn-inicio-sesion")

// Identificar el campo de correo.
const inputEmailLogin = document.getElementById("input-email-login")

// Identificar el campo de contraseña.
const inputPasswordLogin = document.getElementById("input-password-login")

// Mostrar un aviso de demostración al hacer clic.
botonInicioSesion.addEventListener("click", function() {
    const email = inputEmailLogin.value
    const password = inputPasswordLogin.value

    if (email === "") {
        alert("Debe ingresar su correo electrónico.")
        return
    }

    if (password === "") {
        alert("Debe ingresar su contraseña.")
        return
    }

    alert("Demostración de Sonido Vivo: los campos están completados, pero no se inicia una sesión real.")
})
