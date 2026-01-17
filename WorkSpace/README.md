# Cj_Validaciones_Celular

## Estructura
- `/client`: Frontend React para validar usuario
- `/server.js` y `/api`: Backend Express para lógica de validación
- `vercel.json`: Configuración de rutas para producción en Vercel

## Despliegue en Vercel
1. El frontend React se construye y sirve desde `/client/build`.
2. Las rutas `/api/*` se redirigen al backend Express.
3. El resto de rutas se sirven desde el frontend React.

## Uso
- Ejecuta `npm start` en `/client` para desarrollo local del frontend.
- Ejecuta el backend Express en el puerto 3000 para desarrollo local.
- Para producción, sube la carpeta `WorkSpace` a Vercel.

## Formulario Validar Usuario
El formulario está en el componente `ValidarUsuarioForm.js` y consume el endpoint `/api/validarUsuario`.
