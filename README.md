# ALAS Coffee — Landing Page

Concepto de sitio premium para una cafetería de especialidad. Construido con Next.js 14 (App Router), TypeScript, Tailwind CSS y Framer Motion.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

Para producción:

```bash
npm run build
npm run start
```

## Estructura

```
src/
  app/            → layout.tsx (fuentes + SEO), page.tsx (ensambla la página), globals.css
  components/
    layout/       → Navbar (transparente → sticky al hacer scroll), Footer
    sections/     → Hero, OurStory, Menu, OurSpace, InstagramGallery, Locations, Testimonials, FinalCTA
    ui/           → Button, Container, FadeIn, RevealText, SectionHeading (primitivas reutilizables)
  lib/            → data.ts (contenido del menú, testimonios, ubicaciones, galería), utils.ts
  types/          → tipos compartidos (MenuItem, Testimonial, Location, GalleryImage)
```

## Notas

- Las imágenes son fotografías reales de Unsplash usadas como placeholders realistas (café, luz natural, interiores cálidos). Reemplázalas por fotografía propia de la marca antes de producción — solo hay que cambiar las URLs en `src/lib/data.ts` y dentro de cada sección.
- El mapa de "Ubicaciones" es una vista previa estilizada (sin API key). Se puede sustituir por un embed real de Google Maps o Mapbox.
- Los números de WhatsApp (`wa.me/50000000000`) y el correo son placeholders — actualízalos en `Footer.tsx` y `FinalCTA.tsx`.
- Contenido en español, tono editorial en vez de "marketing agresivo", según el brief original.
- Diseño responsive con layouts distintos por breakpoint (no solo apilado): grid editorial alterna en "Nuestra historia", galería tipo masonry en Instagram, sidebar sticky en "El espacio".
- Animaciones con Framer Motion: fade-up, reveal de texto, parallax sutil en hero e historia, hover en tarjetas. Respeta `prefers-reduced-motion`.
