# Contenido simulado de Sonido Vivo

Este documento registra los textos, datos e imágenes preparados para las vistas de la tienda. Todo el contenido es ficticio y se utiliza únicamente en el proyecto académico Sonido Vivo.

## Datos compartidos

El archivo `assets/js/contenido.js` centraliza:

- Nombre, lema y descripción de la empresa.
- Seis productos con código, nombre, categoría, precio, stock, imagen y descripción.
- Dos artículos de blog con resumen, imagen y contenido extendido.

Centralizar estos datos evita que HOME, Productos, Detalle, Blog y Carrito muestren nombres o precios diferentes.

## Categorías acordadas

- Guitarras
- Bajos
- Teclados
- Audio
- Accesorios

## Procedencia de las imágenes

Las nueve ilustraciones SVG almacenadas en `assets/images` fueron creadas específicamente para Sonido Vivo. Utilizan formas geométricas, degradados y texto propio; no copian logotipos, fotografías ni material de terceros.

| Archivo | Uso previsto | Procedencia |
|---|---|---|
| `hero-sonido-vivo.svg` | Sección principal de HOME | Ilustración original del proyecto |
| `producto-guitarra.svg` | Guitarra eléctrica Aurora | Ilustración original del proyecto |
| `producto-bajo.svg` | Bajo eléctrico Pulse | Ilustración original del proyecto |
| `producto-teclado.svg` | Teclado Nova 61 | Ilustración original del proyecto |
| `producto-microfono.svg` | Micrófono Stage Dynamic | Ilustración original del proyecto |
| `producto-audifonos.svg` | Audífonos Studio One | Ilustración original del proyecto |
| `producto-pedal.svg` | Pedal Eco Delay | Ilustración original del proyecto |
| `blog-ensayo.svg` | Artículo sobre ensayos | Ilustración original del proyecto |
| `blog-cuidados.svg` | Artículo sobre cuidados | Ilustración original del proyecto |

## Reglas de uso

- No reemplazar los datos con nombres, direcciones, correos o contraseñas reales.
- Mostrar precios en pesos chilenos mediante `Intl.NumberFormat` para conservar un formato consistente.
- Usar el código del producto como identificador estable entre catálogo, detalle y carrito.
- Si se agregan nuevas imágenes, registrar su autoría o licencia en este documento.
- Revisar ortografía y coherencia cada vez que se modifique el contenido.
