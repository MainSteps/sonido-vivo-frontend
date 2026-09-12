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
