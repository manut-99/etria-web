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

## Contacto

La sección `#contacto` tiene una sola vía: el **formulario**, que manda los
datos a `info@etriahealth.com`. Al lado queda el mail directo, para quien
prefiere escribir por su cuenta.

Ambos botones del sitio ("Contactar" en el nav y en el hero) llevan a esa
sección.

> La agenda de Google Calendar se quitó a pedido. Si alguna vez vuelve, hay que
> reponer `site.bookingUrl` y el bloque `cta.booking` en `src/content.ts`, más
> la columna correspondiente en `src/sections/Contact.tsx`.

### Configurar el formulario

El formulario postea a `api/contact.ts`, una función serverless que corre en
Vercel. Hace dos cosas: manda el mail por **Resend** y crea una tarea en
**Jira GEN** con categoría **RRPP**. Si Jira falla, el mail sale igual y el
error queda en los logs.

#### 1. Verificar el dominio en Resend

Resend necesita comprobar que el dominio es tuyo antes de dejarte mandar mails
desde `@etriahealth.com` (si no, cualquiera podría mandar mails haciéndose pasar
por vos, y los proveedores lo mandarían a spam).

1. Creá una cuenta en [resend.com](https://resend.com) → **Domains** → **Add
   Domain** → `etriahealth.com`.
2. Resend muestra tres registros DNS para copiar: uno de **DKIM** (firma), uno
   de **SPF** (quién puede mandar) y uno de **DMARC** (qué hacer si algo no
   valida).
3. Pegalos donde estén los nameservers de `etriahealth.com`: el panel del
   registrador donde compraste el dominio, o Vercel (**Settings → Domains**) si
   delegaste el DNS ahí.
4. Volvé a Resend y apretá **Verify**. Suele tardar minutos; el DNS puede
   demorar hasta 48 h en propagar.
5. Creá una **API key** y guardala como `RESEND_API_KEY` en Vercel.

Mientras el dominio no esté verificado, Resend solo deja mandar desde su dominio
de prueba (`onboarding@resend.dev`), útil para probar el circuito.

#### 2. Token de Jira

Generá uno en
[id.atlassian.com → API tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
y guardalo como `JIRA_API_TOKEN`.

#### 3. Variables de entorno en Vercel

| Variable | Valor |
| --- | --- |
| `RESEND_API_KEY` | tu API key de Resend |
| `CONTACT_TO` | `info@etriahealth.com` |
| `CONTACT_FROM` | `Etria <web@etriahealth.com>` |
| `JIRA_BASE_URL` | `https://triarge.atlassian.net` |
| `JIRA_EMAIL` | mail de la cuenta Atlassian dueña del token |
| `JIRA_API_TOKEN` | token de Atlassian |
| `JIRA_PROJECT_KEY` | `GEN` |
| `JIRA_ISSUE_TYPE_ID` | `10060` (Task) |
| `JIRA_CATEGORY_FIELD` | `customfield_10105` (Category) |
| `JIRA_CATEGORY_ID` | `10022` (RRPP) |

Los últimos cinco ya vienen como valores por defecto en el código; solo hay que
declararlos si algo cambia en Jira.

#### Probar en local

`npm run dev` levanta solo el front y **no** sirve `/api`. Para probar el
formulario entero:

```bash
npm i -g vercel
vercel dev
```

Si `site.formEndpoint` se deja vacío en `src/content.ts`, el formulario vuelve
al comportamiento anterior (abre el cliente de correo). Útil para trabajar sin
credenciales.

## Sección regulatoria (desactivada)

Está escrita y lista, pero fuera del sitio por ahora. Vive en
`src/sections/Regulatory.tsx` y `src/content.ts` (`regulatory`). Las
instrucciones para reactivarla están comentadas arriba de todo en `src/App.tsx`.

## Registro de voz

El copy va en tercera persona e impersonal: nada en primera persona
("preferimos", "arrancamos") ni en segunda ("tu app", "contanos"). Se usa
"Etria", "el sistema", "el financiador" o la forma con `se` ("se define", "se
publica"). La única excepción es `demoScript`, que es un diálogo.

La capa clínica (`steps`, `scale`, `engine`) se afirma en presente porque ya
está decidida. La capa comercial (`product`, `partner`, `cta`) se enuncia como
alcance a definir con cada cliente — ver la sección `#programa`. Léxico: sí a
co-diseño, piloto, alcance acotado, por fases; no a beta, MVP, prototipo,
próximamente, "en construcción".

## Pendientes antes de publicar

- [ ] Verificar `etriahealth.com` en Resend y cargar las variables de entorno
- [ ] Imagen `og:image` (1200×630) y agregarla en `index.html`
- [ ] Revisión legal del disclaimer del footer
- [ ] Validar con un revisor clínico el ejemplo de sesión del hero

## Aviso

Este sitio es material institucional. El producto es un software de orientación
clínica que no diagnostica ni reemplaza la consulta médica.
