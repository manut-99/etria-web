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

## Contacto: las dos vías

La sección `#contacto` ofrece dos caminos en paralelo:

1. **Agendar una llamada** → abre `site.bookingUrl` (Google Calendar).
2. **Formulario** → manda los datos a `info@etriahealth.com`.

Ambos botones del sitio ("Pedir una demo" en el nav y en el hero) llevan a esa
sección, así que quien prefiere agenda y quien prefiere escribir encuentran lo
suyo en el mismo lugar.

### Configurar la agenda

En Google Calendar: **Crear → Horario de citas**, publicá la página y pegá el
link en `site.bookingUrl` (`src/content.ts`).

### Configurar el formulario

Por defecto `site.formEndpoint` está vacío: el formulario arma el mensaje y abre
el cliente de correo del visitante con todo cargado. Funciona sin backend, pero
depende de que la persona tenga mail configurado.

Para recibir los mensajes por HTTP, creá un formulario en
[Formspree](https://formspree.io) o [Web3Forms](https://web3forms.com) (ambos
tienen plan gratuito), apuntá el destino a `info@etriahealth.com` y pegá el
endpoint en `site.formEndpoint`. No hay que tocar nada más.

## Sección regulatoria (desactivada)

Está escrita y lista, pero fuera del sitio por ahora. Vive en
`src/sections/Regulatory.tsx` y `src/content.ts` (`regulatory`). Las
instrucciones para reactivarla están comentadas arriba de todo en `src/App.tsx`.

## Pendientes antes de publicar

- [ ] Pegar el link real de Google Calendar en `site.bookingUrl`
- [ ] Decidir si el formulario usa `mailto` o un endpoint (ver arriba)
- [ ] Imagen `og:image` (1200×630) y agregarla en `index.html`
- [ ] Revisión legal del disclaimer del footer
- [ ] Validar con un revisor clínico el ejemplo de sesión del hero

## Aviso

Este sitio es material institucional. El producto es un software de orientación
clínica que no diagnostica ni reemplaza la consulta médica.
