# Pruebas funcionales de Michel

## Alcance

Este documento registra las pruebas de registro, acceso, contacto y administración simulada de usuarios de Sonido Vivo. Los casos se relacionan con RF-05 Registrar usuario, RF-06 Iniciar sesión, RF-07 Enviar contacto, RF-10 Gestionar usuarios, RF-12 Validar usuario y RUN, y RF-13 Seleccionar comuna según región.

## Entorno

- Fecha: 12 de septiembre de 2026.
- Navegador: Google Chrome.
- Ejecución: servidor HTTP local.
- Datos: valores ficticios usados solamente para la demostración académica.

## Registro de usuario

| Caso | Entrada o acción | Resultado esperado | Resultado obtenido | Estado |
| --- | --- | --- | --- | --- |
| REG-01 | Presionar Registrarse con el RUN vacío | Mostrar que el RUN es obligatorio | Aparece el mensaje Debe ingresar su RUN | Aprobado |
| REG-02 | Escribir `12.345.678-5` | Rechazar puntos y guion | Aparece el mensaje de formato inválido | Aprobado |
| REG-03 | Escribir `123456789` | Rechazar el dígito verificador incorrecto | Aparece el mensaje de RUN inválido | Aprobado |
| REG-04 | Escribir `123456785` y completar los campos obligatorios | Aceptar los campos y aclarar que el registro es simulado | Aparece el mensaje de demostración y no se crea una cuenta real | Aprobado |

## Evidencia inicial

Los cuatro casos se ejecutaron en Chrome. El formulario detuvo las entradas inválidas y permitió el recorrido completo con datos de prueba.

## Inicio de sesión

| Caso | Entrada o acción | Resultado esperado | Resultado obtenido | Estado |
| --- | --- | --- | --- | --- |
| ACC-01 | Dejar el correo vacío | Indicar que el correo es obligatorio | Aparece el mensaje debajo del correo | Aprobado |
| ACC-02 | Escribir `michel@otro.cl` | Rechazar un dominio no permitido | Aparece el mensaje con los dominios permitidos | Aprobado |
| ACC-03 | Escribir una contraseña de 3 caracteres | Rechazar una contraseña demasiado corta | Aparece el mensaje de 4 a 10 caracteres | Aprobado |
| ACC-04 | Escribir una contraseña de 4 caracteres | Aceptar el límite mínimo | Aparece el mensaje de acceso simulado | Aprobado |
| ACC-05 | Escribir una contraseña de 10 caracteres | Aceptar el límite máximo | Aparece el mensaje de acceso simulado | Aprobado |
| ACC-06 | Escribir una contraseña de 11 caracteres | Rechazar una contraseña demasiado larga | Aparece el mensaje de 4 a 10 caracteres | Aprobado |

Los seis casos se ejecutaron en Chrome y se comprobaron los mensajes mostrados por JavaScript.

## Contacto

| Caso | Entrada o acción | Resultado esperado | Resultado obtenido | Estado |
| --- | --- | --- | --- | --- |
| CON-01 | Dejar el nombre vacío | Indicar que el nombre es obligatorio | Aparece el mensaje debajo del nombre | Aprobado |
| CON-02 | Dejar el comentario vacío | Indicar que el comentario es obligatorio | Aparece el mensaje debajo del comentario | Aprobado |
| CON-03 | Escribir `michel@otro.cl` | Rechazar un dominio no permitido | Aparece el mensaje con los dominios permitidos | Aprobado |
| CON-04 | Dejar el correo vacío y completar los campos obligatorios | Aceptar el correo opcional | Aparece el mensaje de envío simulado | Aprobado |
| CON-05 | Escribir un comentario de 500 caracteres | Aceptar el límite máximo | Aparece el mensaje de envío simulado | Aprobado |
| CON-06 | Escribir un comentario de 501 caracteres | Rechazar el comentario demasiado largo | Aparece el mensaje de máximo 500 caracteres | Aprobado |

Los seis casos se ejecutaron en Chrome. El formulario aceptó el correo vacío y detuvo las entradas inválidas.

## Región y comuna

| Caso | Entrada o acción | Resultado esperado | Resultado obtenido | Estado |
| --- | --- | --- | --- | --- |
| UBI-01 | Intentar registrarse sin seleccionar región | Detener el registro y solicitar una región | Aparece el mensaje debajo del selector de región | Aprobado |
| UBI-02 | Seleccionar Región de Valparaíso | Mostrar solamente sus comunas de demostración | Aparecen Valparaíso, Viña del Mar, Quilpué, Villa Alemana y Concón | Aprobado |
| UBI-03 | No seleccionar una comuna | Detener el registro y solicitar una comuna | Aparece el mensaje debajo del selector de comuna | Aprobado |
| UBI-04 | Elegir Viña del Mar y después cambiar a Región Metropolitana | Limpiar la comuna anterior y cargar las nuevas opciones | Viña del Mar se elimina, el valor queda vacío y aparece Santiago | Aprobado |
| UBI-05 | Seleccionar Región Metropolitana y Santiago | Permitir completar el recorrido | Aparece el mensaje de registro simulado | Aprobado |

Los cinco casos se ejecutaron en Chrome. Cada cambio de región actualizó las comunas y eliminó la selección anterior incompatible.
