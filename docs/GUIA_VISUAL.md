# Guía visual de Sonido Vivo

Esta guía define una base visual común para la tienda pública y la vista administrativa de Sonido Vivo. Se apoya en los mockups del **Anexo 1 de la Evaluación Parcial 1 de DSY1104**, especialmente en las Figuras 3 a 15. Los mockups establecen contenidos y distribuciones mínimas; no son una implementación literal ni fijan la identidad gráfica final.

## 1. Personalidad visual

Sonido Vivo debe sentirse cercano, creativo y contemporáneo. La interfaz utilizará una base oscura inspirada en escenarios musicales, con un acento rosado para destacar las acciones principales. El contenido debe conservar buen contraste, espacios amplios y controles fáciles de reconocer.

## 2. Colores

| Token CSS | Color | Uso |
|---|---:|---|
| `--color-fondo` | `#0B0B10` | Fondo principal de la tienda |
| `--color-superficie` | `#17171F` | Tarjetas, formularios y paneles |
| `--color-superficie-suave` | `#24232E` | Estados secundarios y separadores |
| `--color-texto` | `#F7F5FA` | Texto principal sobre fondos oscuros |
| `--color-texto-suave` | `#BDB8C7` | Descripciones y datos secundarios |
| `--color-acento` | `#F04483` | Botones, enlaces activos y foco |
| `--color-acento-hover` | `#FF6098` | Interacción al pasar el cursor |
| `--color-exito` | `#43C987` | Confirmaciones y disponibilidad |
| `--color-alerta` | `#F5B942` | Advertencias y stock crítico |
| `--color-error` | `#FF6577` | Mensajes de validación y errores |
| `--color-fondo-admin` | `#F4F3F6` | Fondo de la vista administrativa |
| `--color-texto-admin` | `#202027` | Texto principal del administrador |

El rosado se reserva para acciones y estados activos. No se utilizará como color de párrafos largos. Los mensajes nunca dependerán únicamente del color: deben incluir texto comprensible.

## 3. Tipografía

- Fuente principal: `Inter`, con alternativas `Segoe UI`, `Arial` y `sans-serif`.
- Títulos: peso 700 u 800, con altura de línea cercana a `1.1`.
- Texto general: entre `1rem` y `1.125rem`, con altura de línea mínima de `1.5`.
- Etiquetas, precios y botones: peso 600 o 700.
- No se usarán textos menores a `0.875rem` para información necesaria.

La aplicación debe funcionar aunque la fuente web no cargue; por eso siempre se incluyen fuentes alternativas del sistema.

## 4. Estructura de la tienda pública

### Encabezado

El encabezado se repite en las vistas públicas e incluye:

- Logo o nombre **Sonido Vivo** enlazado a la página principal.
- Menú con Inicio, Productos, Nosotros, Blog y Contacto.
- Accesos a inicio de sesión y registro cuando corresponda.
- Enlace al carrito con la cantidad total de unidades.

En pantallas pequeñas, el menú puede envolverse o transformarse en un control desplegable. El carrito debe permanecer reconocible y accesible por teclado.

### Contenido principal

Cada página utiliza un único elemento `main` y un encabezado principal `h1`. La HOME presenta primero una sección destacada con nombre, descripción, imagen y enlace a Productos. Después muestra una selección de productos, como propone la Figura 3.

### Pie de página

El pie incluye el nombre de la tienda, enlaces secundarios y una indicación de que se trata de un proyecto académico con datos simulados. No se solicitará una suscripción real ni se guardarán correos personales.

## 5. Componentes compartidos

### Botones

- Acción principal: fondo rosado, texto blanco y borde visible al recibir foco.
- Acción secundaria: fondo transparente y borde gris claro.
- Acción peligrosa: color de error y confirmación explícita antes de eliminar.
- Altura mínima recomendada: `44px` para facilitar el uso táctil.
- Bordes redondeados: entre `8px` y `12px`.

### Tarjetas

Las tarjetas de producto y blog incluyen imagen, título y contenido resumido. Las tarjetas de producto agregan precio y una acción clara. La imagen mantiene una proporción consistente mediante `aspect-ratio` y `object-fit: cover`.

### Formularios

- Etiquetas visibles sobre cada campo.
- Campos obligatorios identificados con texto, no solo con color.
- Mensaje de ayuda antes del error cuando exista una regla específica.
- Mensaje de error junto al campo y resumen general solo si aporta claridad.
- Foco visible en campos, enlaces y botones.
- Ancho cómodo de lectura; los formularios no ocuparán toda la pantalla en escritorio.

### Carrito

Siguiendo la Figura 15, el carrito presenta:

- Nombre, imagen, precio y cantidad de cada producto.
- Controles para aumentar, disminuir y eliminar unidades.
- Subtotal por producto y total general.
- Estado vacío con enlace para volver a Productos.
- Botón de pago únicamente demostrativo, sin transacciones reales.

## 6. Vista administrativa

La administración utiliza fondo claro para diferenciarla de la tienda. Mantiene los mismos principios tipográficos y de accesibilidad.

- Menú lateral visible en escritorio, según las Figuras 11 a 13.
- Encabezado superior con título de la vista.
- Listados dentro de tablas adaptables o tarjetas en pantallas estrechas.
- Formularios de creación y edición con la misma presentación y validación.
- Las acciones editar y eliminar deben tener etiquetas de texto, no depender solo de iconos.

## 7. Comportamiento adaptable

Se trabajará con enfoque **mobile first** y tres rangos orientativos:

| Rango | Comportamiento esperado |
|---|---|
| Menos de `600px` | Una columna, navegación compacta, formularios al ancho disponible y carrito apilado |
| Desde `600px` | Dos columnas cuando el contenido lo permita |
| Desde `960px` | Navegación completa, cuadrículas de tres o cuatro columnas y menú administrativo lateral |

Reglas generales:

- No debe existir desplazamiento horizontal en anchos desde `320px`.
- Imágenes y videos usan `max-width: 100%`.
- Las cuadrículas utilizan `grid` con columnas flexibles.
- Los espacios laterales se ajustan con `clamp()`.
- El orden visual debe coincidir con el orden de lectura del HTML.
- Las tablas administrativas deben permitir desplazamiento dentro de su contenedor cuando no sea posible reorganizarlas.

## 8. Accesibilidad y estados

- Contraste suficiente entre texto y fondo.
- Texto alternativo útil en imágenes informativas; alternativa vacía en imágenes decorativas.
- Navegación completa mediante teclado.
- Indicador de foco claramente visible.
- Uso semántico de `header`, `nav`, `main`, `section`, `article`, `form` y `footer`.
- Mensajes dinámicos anunciados con `aria-live` cuando corresponda.
- Respeto por `prefers-reduced-motion` en animaciones no esenciales.
- Estados de carga, contenido vacío, éxito y error con mensajes comprensibles.

## 9. Vistas mínimas y responsables de integración

| Área | Vistas mínimas del anexo | Consideración de integración |
|---|---|---|
| Tienda | HOME, Productos, Detalle, Nosotros, Blog, dos detalles de blog y Contacto | Comparten encabezado, navegación y pie |
| Acceso | Registro e Inicio de sesión | Comparten estilos de formulario |
| Carrito | Carrito accesible desde Productos y Detalle | Usa los mismos datos de producto y `localStorage` |
| Administración | HOME, listados y formularios de Productos y Usuarios | Comparte menú lateral y estilos administrativos |

## 10. Decisiones abiertas

- El logotipo definitivo no está incluido en el anexo; inicialmente se utilizará el nombre Sonido Vivo como marca textual.
- Las imágenes finales deben ser propias, tener una licencia compatible o registrar claramente su procedencia.
- El contenido del blog y de Nosotros debe ser ficticio y aprobado por el equipo.
- La autenticación y el pago son demostrativos en esta evaluación; no deben presentarse como servicios reales.
- Cualquier cambio de paleta o componentes debe actualizar esta guía para mantener consistencia entre ramas.

## Fuente de referencia

**DSY1104 Evaluación Parcial 1 - Anexo 1 Instrucciones**, páginas 2 a 16, Figuras 1 a 15. Consultado como pauta académica y referencia estructural para la Evaluación 1.
