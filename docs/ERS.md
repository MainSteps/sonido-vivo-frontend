# Especificación de Requisitos de Software (ERS)

## Sonido Vivo — Evaluación Parcial I

**Versión:** 1.0 de trabajo  
**Asignatura:** DSY1104 — Desarrollo Full Stack II  
**Tecnologías de esta entrega:** HTML, CSS y JavaScript  
**Estado:** borrador para revisión final del equipo

## 1. Propósito

Sonido Vivo es una tienda musical ficticia. Esta ERS describe el alcance verificable de la Evaluación Parcial I: una tienda pública y vistas administrativas simuladas, sin backend, autenticación real, pagos reales ni base de datos.

## 2. Fuentes y criterio de interpretación

| Fuente | Uso |
|---|---|
| Pauta de Evaluación Parcial I | Alcance técnico, vistas, validaciones y entregables obligatorios. |
| Issues del repositorio | Organización del trabajo y criterios operativos verificables. |
| Guía visual del proyecto | Criterios compartidos de presentación. |

Cuando el texto de la pauta y un mockup no coincidan, el requisito escrito de la pauta prevalece. Los mockups orientan la presentación y no obligan a una copia literal.

## 3. Alcance

### 3.1 Tienda pública

- Inicio con identidad de Sonido Vivo, navegación, productos destacados, contenido principal, carrito y footer.
- Catálogo construido desde un arreglo JavaScript y detalle de producto.
- Carrito simulado: agregar desde catálogo o detalle, actualizar cantidades, eliminar, vaciar, calcular total y conservar el estado mediante `localStorage`.
- Registro, inicio de sesión y contacto con datos de prueba y validaciones JavaScript.
- Nosotros y blog con dos artículos navegables en detalle.
- Video embebido relacionado con el contenido de la tienda.

### 3.2 Administración simulada

- Menú administrativo visible.
- Mantenedor de productos: listar, crear, editar y eliminar productos simulados con confirmación visible.
- Mantenedor de usuarios: listar, crear, consultar y editar usuarios simulados.
- Roles visibles: Administrador, Vendedor y Cliente.

### 3.3 Fuera de alcance

- Base de datos, API, backend, sesiones reales, contraseñas reales, pagos, envío de correos y manejo de datos personales reales.

## 4. Actores

| Actor | Capacidades de demostración |
|---|---|
| Visitante | Navega, consulta productos, lee contenidos, usa el carrito y completa formularios simulados. |
| Cliente | Rol visible asociado a la tienda pública y datos simulados. |
| Vendedor | Rol visible en administración simulada. |
| Administrador | Rol visible con acceso a mantenedores simulados. |
| Equipo | Prueba, mantiene y explica el producto y su colaboración en GitHub. |

## 5. Requisitos funcionales

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| RF-01 | Navegación pública | Las vistas acordadas se alcanzan mediante enlaces funcionales y menú común. |
| RF-02 | Inicio | Muestra identidad, contenido principal, productos destacados, carrito y footer. |
| RF-03 | Registro | Presenta formulario de usuario con validaciones y datos simulados. |
| RF-04 | Inicio de sesión | Solicita correo y contraseña; invalida entradas incorrectas sin afirmar autenticación real. |
| RF-05 | Nosotros y blog | Presenta información ficticia y dos artículos con detalle navegable. |
| RF-06 | Contacto | Solicita nombre y comentario; el correo es opcional y se valida si se informa. |
| RF-07 | Catálogo y detalle | Renderiza productos desde un arreglo JavaScript y permite abrir el detalle correcto. |
| RF-08 | Carrito | Agrega desde catálogo/detalle, actualiza cantidad, elimina, vacía, calcula total y persiste con `localStorage`. |
| RF-09 | Administración de productos | Lista, crea, edita y elimina productos simulados; la eliminación pide confirmación visible. |
| RF-10 | Administración de usuarios | Lista, crea, consulta y edita usuarios simulados; muestra roles. |
| RF-11 | Ubicación | Al seleccionar una región se cargan comunas compatibles; cambiar región limpia la comuna seleccionada. |
| RF-12 | Video | Incluye un video embebido relacionado con la tienda o contenido musical. |

## 6. Reglas de validación

| Campo | Regla |
|---|---|
| RUN de usuario | Obligatorio; sin puntos ni guion; entre 7 y 9 caracteres; dígito verificador válido. |
| Nombre de usuario | Obligatorio; máximo 50 caracteres. |
| Apellidos | Obligatorios; máximo 100 caracteres. |
| Correo de acceso/usuario | Obligatorio; máximo 100 caracteres; dominio `@duoc.cl`, `@profesor.duoc.cl` o `@gmail.com`. |
| Contraseña | Obligatoria; entre 4 y 10 caracteres. |
| Contacto: nombre | Obligatorio; máximo 100 caracteres. |
| Contacto: correo | Opcional; si se informa, máximo 100 caracteres y dominio permitido. |
| Contacto: comentario | Obligatorio; máximo 500 caracteres. |
| Producto: código | Obligatorio; texto de mínimo 3 caracteres; no se repite. |
| Producto: nombre | Obligatorio; máximo 100 caracteres. |
| Producto: precio | Obligatorio; número mayor o igual que 0; permite decimales. |
| Producto: stock | Obligatorio; entero mayor o igual que 0. |
| Producto: categoría | Obligatoria. |
| Dirección de usuario | Obligatoria; máximo 300 caracteres. |

Las validaciones se ejecutan en el evento `submit` del formulario, bloquean los envíos inválidos y muestran el mensaje junto al campo correspondiente.

## 7. Requisitos no funcionales

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| RNF-01 | HTML semántico | Las páginas usan estructura actual con `header`, `nav`, `main`, secciones, formularios y footer según corresponda. |
| RNF-02 | CSS externo y consistente | Todas las vistas usan estilos externos compartidos y no pierden presentación al navegar. |
| RNF-03 | Diseño adaptable | La interfaz se utiliza en 360, 768 y 1280 px sin desbordes horizontales ni controles inaccesibles. |
| RNF-04 | Errores claros | No hay errores JavaScript durante los flujos normales ni casos límite documentados. |
| RNF-05 | Seguridad académica | No se almacenan contraseñas reales, credenciales, tokens ni datos personales reales. |
| RNF-06 | Trabajo colaborativo | Los cambios llegan mediante ramas, commits descriptivos, Pull Requests, revisión humana y comprobación automática. |

## 8. Estado de implementación y cierre

Este documento distingue requisito de estado. La revisión final debe comprobar los requisitos contra la versión candidata de `main` antes de publicación y entrega. Un requisito se marca como terminado solo cuando su flujo se prueba en la versión integrada y el verificador del repositorio pasa.

## 9. Entregables

- Repositorio público de GitHub.
- URL pública de la versión candidata.
- Proyecto frontend comprimido desde el commit final.
- Esta ERS revisada por el equipo.
- Demostración funcional y preparación individual para preguntas.
