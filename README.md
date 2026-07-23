# Etria — sitio institucional

Landing de una sola página para Etria, orientada a financiadores de salud
(prepagas y obras sociales) en Argentina.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v4
**Deploy:** Vercel (plan Hobby / gratuito), sitio 100% estático.

---

## Correr en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/
npm run typecheck
```

## Deploy en Vercel

1. Subí este repo a GitHub (ver abajo).
2. En [vercel.com/new](https://vercel.com/new) elegí **Import Git Repository**.
3. Vercel detecta Vite solo. Si pide configuración:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Cada push a `main` publica producción; cada PR genera un preview.
5. Dominio propio: Settings → Domains (incluido en el plan gratuito).

## Subir a GitHub

```bash
git remote add origin git@github.com:<TU-USUARIO>/etria-web.git
git branch -M main
git push -u origin main
```

---

## Dónde se edita qué

| Qué                      | Archivo                          |
| ------------------------ | -------------------------------- |
| **Todo el copy**         | `src/content.ts`                 |
| Colores y tipografías    | `src/index.css` (bloque `@theme`) |
| Guion de la demo animada | `src/content.ts` → `demoScript`  |
| Secciones                | `src/sections/*.tsx`             |
| Meta tags / SEO          | `index.html`                     |

Toda la redacción vive en un único archivo (`src/content.ts`) justamente para
poder iterar el mensaje sin tocar componentes.

### Sistema de color

La paleta **es** la escala de agudeza clínica: naranja = urgencia, azul profundo
= resolución. Los tokens están en `@theme` dentro de `src/index.css`, así que un
white-label para un cliente se resuelve cambiando cinco variables.

| Token           | Valor     | Uso                        |
| --------------- | --------- | -------------------------- |
| `--color-ink`   | `#061635` | fondos oscuros, texto      |
| `--color-deep`  | `#0b2a5b` | azul principal             |
| `--color-mid`   | `#1e4fa3` | azul interactivo           |
| `--color-sky`   | `#8fb8f5` | texto sobre oscuro         |
| `--color-paper` | `#f4f7fc` | fondo claro                |
| `--color-ember` | `#ff6b2c` | acento naranja, CTAs       |
| `--color-amber` | `#ffa23a` | segundo escalón de la escala |

---

## Pendientes antes de publicar

- [ ] Reemplazar `contactEmail` en `src/content.ts` (hoy: `hola@etria.health`)
- [ ] Confirmar la cita de la estadística de ADECRA+CEDIM (link a la fuente)
- [ ] Revisión legal del disclaimer del footer y del aviso regulatorio
- [ ] Imagen `og:image` (1200×630) y agregarla en `index.html`
- [ ] Decidir si el formulario de contacto reemplaza al `mailto:`
- [ ] Validar con Legales que el ejemplo de sesión del hero no se lea como consejo médico

## Aviso

Este sitio es material institucional. El producto es un software de orientación
clínica que no diagnostica ni reemplaza la consulta médica.
