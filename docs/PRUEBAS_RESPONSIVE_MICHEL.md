# Pruebas de resoluciones y navegadores

## Objetivo

Verificar que las páginas de Sonido Vivo se puedan utilizar en los tamaños de pantalla y navegadores acordados, sin desbordes horizontales ni errores de JavaScript.

## Entorno de prueba

- Sistema operativo: macOS.
- Navegadores: Google Chrome y Safari.
- Resoluciones: 360, 768 y 1280 px de ancho.
- Versión revisada: commit `cbfaf370` de la rama `feat/michel-validaciones-regiones-usuarios`.

## Páginas revisadas

- Inicio, nosotros, blog y detalle de blog.
- Catálogo, detalle de producto y carrito.
- Registro, inicio de sesión y contacto.
- Administración de productos.
- Listado, creación, detalle y edición de usuarios.

## Resultados

| Navegador | 360 px | 768 px | 1280 px | Resultado |
| --- | ---: | ---: | ---: | --- |
| Google Chrome | 15 aprobadas | 15 aprobadas | 15 aprobadas | 45 de 45 |
| Safari | 15 aprobadas | 15 aprobadas | 15 aprobadas | 45 de 45 |

Se realizaron 90 comprobaciones. No se encontraron desbordes horizontales ni errores de JavaScript en las páginas y resoluciones revisadas. Los enlaces, campos, selectores y botones permanecieron accesibles.

## Hallazgos

No se encontraron fallos reproducibles que requirieran crear una nueva issue.
