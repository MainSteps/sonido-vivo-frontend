# Cómo colaborar

## Regla principal

No se trabaja directamente sobre `main`. La única excepción fue el commit vacío con el que se creó el repositorio.

## Flujo con GitHub Desktop

1. Actualiza tu copia local con **Fetch origin** y **Pull**.
2. Abre o identifica el Issue correspondiente.
3. Crea una rama desde `main` actualizada.
4. Realiza cambios pequeños y comprobables.
5. Prueba el resultado y registra un commit descriptivo.
6. Publica la rama y abre una Pull Request relacionada con el Issue.
7. Atiende las observaciones antes de fusionar.

## Nombres de rama

- `feat/...`: funcionalidad nueva.
- `fix/...`: corrección.
- `docs/...`: documentación.
- `test/...`: pruebas.
- `chore/...`: configuración o mantenimiento.
- `argos/...`: trabajo solicitado expresamente a ArgOS.

Usa minúsculas y separa palabras con guiones, por ejemplo: `feat/carrito-local`.

## Riesgo del cambio

- **Verde:** documentación, estilos aislados o cambios fáciles de revertir.
- **Amarillo:** comportamiento compartido, validaciones, almacenamiento local o integración entre módulos.
- **Rojo:** alcance, arquitectura, entrega, seguridad, datos sensibles o cambios difíciles de revertir.

Los cambios rojos requieren decisión humana explícita antes de fusionarse.

## Definición de terminado

- Cumple los criterios de aceptación del Issue.
- Fue probado en el flujo normal y en al menos un caso límite.
- No deja errores en la consola del navegador.
- Funciona en las resoluciones acordadas cuando corresponda.
- La Pull Request explica el cambio y las pruebas realizadas.
- La persona autora puede explicar el código y sus decisiones.

## Uso de inteligencia artificial

La IA puede apoyar en generación, revisión y pruebas. En la Pull Request se declara su uso y la persona autora confirma que revisó, probó y comprende el resultado. La responsabilidad de la entrega sigue siendo humana.
