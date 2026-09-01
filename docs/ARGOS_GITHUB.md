# Diseño de integración ArgOS–GitHub

## Objetivo

ArgOS será el coordinador operativo y revisor técnico común de Sonido Vivo. Debe informar, comprobar y organizar sin convertirse en administrador del repositorio ni reemplazar la comprensión del equipo.

## Incorporación gradual

### Fase 0 — Reglas visibles

- Plantillas de Issues y Pull Requests.
- Convención de ramas.
- Comprobación específica de nombres, secretos accidentales, conflictos y sintaxis básica.
- Sin credenciales de GitHub almacenadas en ArgOS.

### Fase 1 — Observación

- GitHub App instalada únicamente en `sonido-vivo-frontend`.
- Lectura de código, Issues, Pull Requests y resultados de comprobaciones.
- Resúmenes y alertas por Telegram sin copiar secretos ni datos personales.

### Fase 2 — Estado técnico

- ArgOS puede publicar el resultado de sus comprobaciones.
- No puede aprobar ni fusionar Pull Requests por sí solo.

### Fase 3 — Desarrollo solicitado

- Solo cuando Diego lo pida expresamente.
- ArgOS trabaja en una rama `argos/...`.
- Abre una Pull Request propia y queda sujeto a las mismas comprobaciones que el equipo.

## Permisos previstos

| Permiso de la GitHub App | Nivel |
|---|---|
| Metadata | Lectura obligatoria |
| Contents | Lectura |
| Issues | Lectura |
| Pull requests | Lectura |
| Checks | Escritura, recién en la Fase 2 |
| Actions | Lectura solo si una necesidad concreta lo exige |
| Administration | Ninguno |
| Secrets | Ninguno |
| Workflows | Ninguno |

La instalación debe limitarse a este repositorio. Cualquier ampliación de permisos requiere una nueva decisión explícita.

## Custodia de credenciales

La clave privada de la GitHub App quedará en un servicio dedicado del servidor, legible únicamente por `root`. Hermes solicitará operaciones delimitadas a ese servicio y nunca recibirá la clave ni un token reutilizable en el contexto del modelo.

## Protección de `main`

- Los cambios entran mediante Pull Request.
- La comprobación **Política y sintaxis** debe aprobarse.
- ArgOS no tiene permiso de omitir la regla ni de fusionar.
- Los cambios rojos requieren autorización humana explícita.

## Alertas útiles

ArgOS avisará únicamente cuando ocurra uno de estos eventos:

- Nueva Pull Request pendiente de revisión.
- Comprobación fallida.
- Issue obligatorio bloqueado.
- Fecha de integración o entrega próxima.

Se evitarán mensajes repetitivos de actividad normal.

## Estado

El diseño y las reglas locales están preparados. La creación de la GitHub App y su clave queda pendiente de una autorización específica, después de comprobar primero el flujo normal del equipo.
