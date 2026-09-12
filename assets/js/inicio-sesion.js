// Identificar el botón, como en el ejemplo de la Clase 6.
const botonInicioSesion = document.getElementById("btn-inicio-sesion")

// Identificar el campo de correo.
const inputEmailLogin = document.getElementById("input-email-login")

// Identificar el espacio para el mensaje del correo.
const mensajeEmailLogin = document.getElementById("mensaje-email-login")

// Identificar el campo de contraseña.
const inputPasswordLogin = document.getElementById("input-password-login")

// Mostrar un aviso de demostración al hacer clic.
botonInicioSesion.addEventListener("click", function() {
    const email = inputEmailLogin.value
    const password = inputPasswordLogin.value
    mensajeEmailLogin.innerHTML = ""

    if (email === "") {
        mensajeEmailLogin.innerHTML = "Debe ingresar su correo electrónico."
        alert("Debe ingresar su correo electrónico.")
        return
    }

    if (email.length > 100) {
        mensajeEmailLogin.innerHTML = "El correo electrónico no puede superar los 100 caracteres."
        alert("El correo electrónico no puede superar los 100 caracteres.")
        return
    }

    if (!email.endsWith("@duoc.cl") && !email.endsWith("@profesor.duoc.cl") && !email.endsWith("@gmail.com")) {
        mensajeEmailLogin.innerHTML = "Use un correo @duoc.cl, @profesor.duoc.cl o @gmail.com."
        alert("El correo debe pertenecer a los dominios @duoc.cl, @profesor.duoc.cl o @gmail.com.")
        return
    }

    if (password === "") {
        alert("Debe ingresar su contraseña.")
        return
    }

    if (password.length < 4 || password.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.")
        return
    }

    alert("Demostración de Sonido Vivo: los campos están completados, pero no se inicia una sesión real.")
})
