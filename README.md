# DataCraft — Sitio Web

Sitio web de marketing para DataCraft, agencia de desarrollo web. Construido con React, Vite, TypeScript, Tailwind CSS y Framer Motion.

## Requisitos

- Node.js 18 o superior
- npm (o pnpm/yarn si prefieres)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Esto abre el sitio en `http://localhost:5173`.

## Compilar para producción

```bash
npm run build
```

Los archivos optimizados quedan en la carpeta `dist/`. Puedes subir el contenido de `dist/` a cualquier hosting estático (Hostinger, Netlify, Vercel, etc.).

Para previsualizar el build de producción localmente:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
  components/    Componentes reutilizables (navbar, footer, UI, animaciones)
  pages/         Las 5 páginas del sitio (Inicio, Servicios, Portafolio, Nosotros, Contacto)
  lib/           Utilidades
  index.css      Estilos globales y tema de colores (Tailwind v4, basado en CSS)
public/
  images/        Imágenes del sitio (logo, portafolio, hero)
```

## Personalización

- **Colores de marca**: editar las variables en `src/index.css` (sección `:root` y `.dark`).
- **Número de WhatsApp**: buscar `573015999122` en `src/pages/contacto.tsx`, `src/components/whatsapp-fab.tsx` y `src/components/layout/footer.tsx`, y reemplazar por el número real.
- **Textos e imágenes**: cada página vive en `src/pages/*.tsx`.

## Notas

- El formulario de contacto no envía correos: arma un mensaje de WhatsApp con los datos ingresados y abre `wa.me` con el mensaje precargado.
- Las imágenes de portafolio son ilustrativas (generadas). Reemplázalas en `public/images/` con fotos reales de tus proyectos cuando estén disponibles.
