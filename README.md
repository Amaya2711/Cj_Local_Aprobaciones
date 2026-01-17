# Cj_Validaciones_Celular

## Estructura del Proyecto

- `client/` - Aplicación React web (frontend)
- `mobile/` - Aplicación Expo (React Native, solo para desarrollo móvil)
- `api/` - Lógica de Express (backend)
- `server.js` - Archivo principal del backend Express
- `vercel.json` - Configuración de rutas para Vercel
- `README.md` - Documentación

## Despliegue en Vercel

1. Sube la carpeta raíz del proyecto a Vercel.
2. El frontend React se sirve desde `/client/build`.
3. Las rutas `/api/*` se redirigen al backend Express.
4. El proyecto Expo (`mobile`) es solo para desarrollo móvil y no se publica en Vercel.

## Recomendaciones
- Cada carpeta debe tener su propio `package.json` y `node_modules`.
- No mezcles dependencias entre carpetas.
- Elimina referencias a archivos incompatibles (como favicon.ico) en Expo.

## Uso
- Para desarrollo web: `cd client && npm start`
- Para desarrollo móvil: `cd mobile && npx expo start`
- Para backend: `node server.js` o `npm start` según configuración

---

¿Dudas? Revisa este README o consulta la documentación de cada framework.
