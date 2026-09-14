# Especificación de Requisitos de Software (ERS)

## Sonido Vivo - Frontend

**Versión:** 1.0 parcial  
**Fecha:** 12-09-2026  
**Asignatura:** DSY1104 Desarrollo Full Stack II  
**Estado:** propuesta previa para la Evaluación 1

## 1. Propósito

Este documento define los requisitos comprobables del frontend de **Sonido Vivo**, una tienda musical ficticia creada con HTML, CSS y JavaScript. Esta versión cubre la propuesta de la Evaluación 1 y se actualizará durante el semestre.

## 2. Fuentes y trazabilidad

| Fuente | Identificador usado | Alcance |
|---|---|---|
| `DSY1104 Evaluación Parcial 1 - Anexo 1 Instrucciones.pdf` | ANEXO p. 1-17 | Requisitos académicos, vistas, validaciones y entrega |
| `README.md` | README | Alcance acordado, tecnologías y equipo |
| `docs/PLAN_OPERATIVO.md` | PLAN | Distribución de trabajo y etapas |
| Issues #2 al #22 del repositorio | GH-# | Criterios de aceptación y seguimiento |
| `docs/GUIA_VISUAL.md` | GUIA | Colores, componentes y adaptación visual |

Cuando un mockup y el texto del anexo difieran, se considera obligatorio el requisito escrito. Los mockups orientan la composición visual, pero no exigen una copia literal.

## 3. Alcance

La solución se divide en dos áreas:

1. **Tienda pública:** inicio, registro, acceso, Nosotros, blog, contacto, catálogo, detalle de producto y carrito.
2. **Administración:** inicio administrativo y mantenimiento de productos o usuarios, sujeto a la aclaración indicada en la sección 9.

La Evaluación 1 no procesa pagos reales, no autentica contra un servidor y no usa una base de datos. Los datos se simulan en JavaScript y el carrito se guarda en `localStorage`.

## 4. Actores

| Actor | Descripción |
|---|---|
| Visitante | Recorre la tienda, consulta productos, usa el carrito y completa formularios de demostración. |
| Cliente | Rol descrito por el anexo; en esta entrega utiliza únicamente la tienda. |
| Vendedor | Rol propuesto para visualizar productos y órdenes en una futura integración administrativa. |
| Administrador | Rol propuesto con acceso total al sistema administrativo. |
| Equipo de desarrollo | Mantiene el repositorio, prueba la solución y explica sus cambios. |

## 5. Requisitos funcionales

| ID | Requisito verificable | Fuente | Issue |
|---|---|---|---|
| RF-01 | El sistema permitirá navegar entre las vistas acordadas mediante enlaces y un menú común. | ANEXO p. 1-3 | #6, #13 |
| RF-02 | El inicio mostrará identificación de la tienda, contenido principal, productos destacados y pie de página. | ANEXO p. 3-4 | #6, #12 |
| RF-03 | El registro mostrará un formulario de usuario y validará sus campos con JavaScript. | ANEXO p. 5, 13, 15-16 | #10, #11 |
| RF-04 | El acceso solicitará correo y contraseña y mostrará errores personalizados. | ANEXO p. 6, 13 | #10, #11 |
| RF-05 | Nosotros explicará la empresa ficticia y presentará al equipo o sus áreas de trabajo. | ANEXO p. 6 | #6, #12 |
| RF-06 | El blog mostrará noticias con imagen, título y resumen, además de dos detalles con contenido largo. | ANEXO p. 6-7 | #6, #12 |
| RF-07 | Contacto permitirá ingresar nombre, correo y comentario con las validaciones definidas. | ANEXO p. 7, 13-14 | #10, #11 |
| RF-08 | El catálogo se generará desde un arreglo JavaScript y mostrará imagen, nombre, precio y acción para añadir. | ANEXO p. 8, 14 | #8, #12 |
| RF-09 | Al seleccionar un producto se abrirá su detalle con descripción, precio, stock, cantidad y acción para añadir. | ANEXO p. 8-9 | #8 |
| RF-10 | El usuario podrá agregar productos al carrito desde el catálogo y desde el detalle. | ANEXO p. 8-9, 14 | #7, #8 |
| RF-11 | El carrito permitirá cambiar cantidades, retirar productos, vaciar la selección y calcular subtotales y total. | ANEXO p. 14; reglas acordadas en #7 | #7 |
| RF-12 | El carrito conservará y recuperará su estado mediante `localStorage`. | ANEXO p. 14 | #7 |
| RF-13 | La vista administrativa incluirá un menú visible y acceso al mantenimiento acordado. | ANEXO p. 10-11 | #9, #11 |
| RF-14 | El mantenedor de productos permitirá listar, crear, editar y eliminar datos simulados aplicando sus reglas de validación y solicitando una confirmación visible antes de eliminar. | ANEXO p. 11-15 | #9 |
| RF-15 | El mantenedor de usuarios permitirá listar, crear o editar usuarios simulados y aplicar sus reglas de validación. | ANEXO p. 11-16 | #11 |
| RF-16 | La navegación administrativa representará los roles Administrador, Vendedor y Cliente sin afirmar que existe seguridad de servidor. | ANEXO p. 10, 16 | #11, #13 |

## 6. Requisitos no funcionales

| ID | Requisito verificable | Fuente | Issue |
|---|---|---|---|
| RNF-01 | Las páginas usarán HTML actual y elementos semánticos apropiados. | ANEXO p. 1 | #6 |
| RNF-02 | Los estilos estarán en archivos CSS externos. | ANEXO p. 1 | #4, #6 |
| RNF-03 | El diseño mantendrá colores, tipografía y componentes consistentes. | ANEXO p. 1; GUIA | #4, #6, #13 |
| RNF-04 | Las vistas se adaptarán como mínimo a celular y computador sin pérdida de contenido. | ANEXO p. 1 | #6, #15 |
| RNF-05 | Los controles interactivos podrán identificarse y operarse con teclado. | Buenas prácticas acordadas; GUIA | #6, #14 |
| RNF-06 | Los formularios mostrarán sugerencias y errores personalizados mediante JavaScript. | ANEXO p. 1, 13 | #11 |
| RNF-07 | La solución no almacenará contraseñas reales, datos personales reales ni credenciales. | README; #12 | #10, #11, #12 |
| RNF-08 | Cada cambio se desarrollará en una rama y llegará a `main` mediante Pull Request con pruebas registradas. | ANEXO p. 1; CONTRIBUTING | #2, #14-#16 |
| RNF-09 | El flujo normal y al menos un caso límite no producirán errores en la consola. | CONTRIBUTING | #14-#16 |

## 7. Reglas de validación

| Vista/campo | Obligatorio | Restricciones |
|---|---:|---|
| Acceso - correo | Sí | Máximo 100 caracteres; dominios `@duoc.cl`, `@profesor.duoc.cl` o `@gmail.com`. |
| Acceso - contraseña | Sí | Entre 4 y 10 caracteres. |
| Contacto - nombre | Sí | Máximo 100 caracteres. |
| Contacto - correo | No | Si se ingresa: máximo 100 caracteres y uno de los dominios permitidos. |
| Contacto - comentario | Sí | Máximo 500 caracteres. |
| Producto - código | Sí | Texto; mínimo 3 caracteres. |
| Producto - nombre | Sí | Máximo 100 caracteres. |
| Producto - descripción | No | Máximo 500 caracteres. |
| Producto - precio | Sí | Número mayor o igual que 0; puede contener decimales. |
| Producto - stock | Sí | Número entero mayor o igual que 0. |
| Producto - stock crítico | No | Número entero mayor o igual que 0. |
| Producto - categoría | Sí | Selección desde las categorías disponibles. |
| Producto - imagen | No | Recurso permitido o con procedencia registrada. |
| Usuario - RUN | Sí | Sin puntos ni guion; entre 7 y 9 caracteres; dígito verificador válido. |
| Usuario - nombre | Sí | Máximo 50 caracteres. |
| Usuario - apellidos | Sí | Máximo 100 caracteres. |
| Usuario - correo | Sí | Máximo 100 caracteres y uno de los dominios permitidos. |
| Usuario - fecha de nacimiento | No | Fecha válida si se informa. |
| Usuario - tipo | En administración | Administrador, Cliente o Vendedor. |
| Usuario - región/comuna | Según formulario | Las comunas disponibles cambian al seleccionar una región. |
| Usuario - dirección | Sí | Máximo 300 caracteres. |

## 8. Criterios de aceptación por módulo

| Módulo | Criterios mínimos reflejados en GitHub |
|---|---|
| Estructura y navegación (#6) | HTML semántico; navegación acordada; CSS externo adaptable; consola sin errores. |
| Carrito (#7) | Agregar desde catálogo o detalle; modificar y eliminar; totales correctos; persistencia local. |
| Catálogo y detalle (#8) | Datos desde JavaScript; listado y detalle navegables; contenido consistente; caso de ID inexistente. |
| Mantenedor de productos (#9) | Listar, crear, editar y eliminar datos simulados; validar reglas de producto; solicitar confirmación visible antes de eliminar; informar resultados. |
| Registro, acceso y contacto (#10) | Formularios completos, etiquetados y conectados a su navegación. |
| Validaciones y usuarios (#11) | Mensajes personalizados; bloquear envíos inválidos; validar al intentar enviar o durante la interacción, según la implementación; regiones/comunas y reglas de usuario. |
| Contenido simulado (#12) | Nombres, precios y categorías consistentes; imágenes permitidas; sin datos reales; ortografía revisada. |
| Integración y calidad (#13-#16) | Navegación integrada; flujos y casos límite probados; resoluciones comprobadas; hallazgos corregidos. |

## 9. Vacíos, contradicciones y decisiones

| Tema | Hallazgo | Tratamiento para la versión 1 |
|---|---|---|
| Mockups | El anexo los describe como requisitos mínimos y sugerencias. | Se respeta su contenido mínimo, pero no se copian literalmente. |
| Mantenedor administrativo | El texto usa “Producto o Usuario”, mientras el flujo muestra ambos. | Se mantienen ambos requisitos como provisionales; el equipo debe confirmar con el docente el mínimo evaluable. |
| Autenticación y permisos | El anexo menciona protección y roles, pero no define persistencia ni credenciales para esta entrega. | Solo se representa la interfaz y visibilidad de roles; no se declara seguridad real. |
| Pago y cupón | Aparecen en el mockup del carrito, pero no están exigidos en el texto de la Evaluación 1. | No se procesa pago ni se exige cupón. El carrito se declara simulación académica. |
| Reglas del carrito | El anexo pide investigarlas, pero no fija cantidades, eliminación ni stock. | #7 acuerda cambiar/eliminar, calcular totales, mínimo 1 y máximo igual al stock. |
| Página de productos | El anexo la llama “Productos”; el proyecto usa `catalogo.html`. | El nombre visible sigue siendo Productos; el archivo interno puede llamarse Catálogo. |
| Datos de usuarios | Los formularios solicitan datos personales, pero el proyecto es académico. | Las pruebas usarán exclusivamente datos ficticios. |

## 10. Evidencia y entrega

La entrega deberá incluir el enlace público de GitHub, el proyecto frontend comprimido y esta propuesta previa del ERS. Durante la presentación, cada integrante deberá explicar el flujo **Issue → rama → commit → Pull Request**, demostrar el desarrollo funcional y responder preguntas técnicas sobre sus cambios.

