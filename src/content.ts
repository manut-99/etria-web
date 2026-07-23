/**
 * Toda la redacción del sitio vive acá.
 * Editá este archivo para cambiar copy sin tocar componentes.
 */

export const site = {
  brand: "Etria",
  contactEmail: "info@etriahealth.com",
  bookingUrl: "https://calendar.app.google/BSyzQfLmfZ3xyqCr9",
  emergencyNumber: "107",
  /**
   * Vacío = el formulario abre el cliente de correo del visitante (mailto).
   * Para recibir los mensajes por HTTP, pegar acá el endpoint de Formspree
   * o Web3Forms y no hace falta tocar nada más.
   */
  formEndpoint: "",
  regulatoryAsOf: "julio 2026",
};

/** mailto con asunto precargado. */
export function mailto(subject: string) {
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;
}

export const nav = {
  links: [
    { label: "El problema", href: "#problema" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Motor clínico", href: "#motor" },
    { label: "Para el financiador", href: "#producto" },
  ],
  cta: "Pedir una demo",
};

export const hero = {
  headline: ["Nadie debería", "tener que adivinar", "si ir a la guardia."],
  sub: "Etria acompaña al afiliado desde la app de su cobertura: entiende lo que le está pasando y lo orienta hacia la atención médica que necesita.",
  ctaPrimary: "Pedir una demo",
  ctaSecondary: "Ver cómo funciona",
  demoLabel: "Sesión de ejemplo",
  demoDisclaimer:
    "Reproducción ilustrativa. No es una herramienta de diagnóstico ni una sesión real.",
};

/** Guion de la sesión que se reproduce en el hero. */
export const demoScript: Array<
  | { kind: "user"; text: string }
  | { kind: "bot"; text: string }
  | { kind: "answer"; text: string }
  | { kind: "result"; level: string; text: string; detail: string }
> = [
  { kind: "user", text: "Me duele mucho la cabeza desde ayer a la noche." },
  {
    kind: "bot",
    text: "Antes que nada, una pregunta de seguridad: ¿el dolor apareció de golpe y es el peor que sentiste en tu vida?",
  },
  { kind: "answer", text: "No" },
  {
    kind: "bot",
    text: "¿Tenés fiebre, rigidez en el cuello, confusión o dificultad para hablar?",
  },
  { kind: "answer", text: "No, solo el dolor" },
  {
    kind: "result",
    level: "Teleconsulta",
    text: "Podés resolverlo sin ir a la guardia.",
    detail: "Turno disponible hoy, 14:20 · Dra. Ferreyra, clínica médica",
  },
];

export const problem = {
  eyebrow: "El problema",
  headline: "Cuando algo duele, la guardia es el primer reflejo.",
  body: [
    "Es una reacción entendible: ante la duda, uno va donde sabe que lo van a atender. Pero sobre un relevamiento de más de un millón de consultas de ADECRA+CEDIM y su Comisión de Directores Médicos, el 84,5% de las consultas de guardia no correspondían a una urgencia.",
    "El costo lo absorbe el financiador. La espera la comparten todos, incluida la persona que sí necesitaba atención inmediata.",
  ],
  matrixCaption:
    "De cada 100 consultas a la guardia, 85 podían resolverse en otro nivel de atención. La pregunta no es cómo frenarlas, sino cómo orientarlas mejor.",
  sourceLabel: "ADECRA+CEDIM · Comisión de Directores Médicos (2024)",
  sourceUrl:
    "https://comunicacion.adecra.org.ar/wp-content/uploads/2024/10/Cuadernillo-DM-IV-confecha.pdf",
  matrixLegendHigh: "No urgente",
  matrixLegendLow: "Urgencia real",
};

export const steps = {
  eyebrow: "Cómo funciona",
  headline: "Una sesión, cuatro momentos.",
  items: [
    {
      title: "Empieza donde ya está",
      body: "Etria se abre dentro de la app de la cobertura. Sin descargar nada nuevo, sin otra contraseña y sin salir de la marca que el afiliado reconoce.",
    },
    {
      title: "Lo urgente se descarta primero",
      body: "Toda sesión arranca con un tamizaje universal de emergencia. Si aparece una señal crítica, la conversación se corta ahí mismo y deriva a emergencias.",
    },
    {
      title: "Pregunta poco, y con motivo",
      body: "La cantidad de intercambios mínima necesaria, en lenguaje cotidiano. Cada pregunta está ahí porque su respuesta cambia la decisión; si no la cambia, no se hace.",
    },
    {
      title: "Termina con el próximo paso resuelto",
      body: "No deja a la persona con un consejo suelto: le deja un turno de teleconsulta, una guardia sugerida con su espera estimada, o pautas de cuidado con señales de alarma claras para volver a consultar.",
    },
  ],
};

export const scale = {
  eyebrow: "La escala",
  headline: "Cinco caminos posibles, una sola decisión.",
  sub: "El naranja y el azul de Etria no son decoración: son los dos extremos de la escala de agudeza. Todo lo que hace el producto es encontrar el punto justo entre uno y otro para cada persona que consulta.",
  levels: [
    {
      name: "Emergencia",
      time: "Ahora",
      body: "Derivación inmediata a emergencias médicas, con el número marcado y la ubicación lista.",
    },
    {
      name: "Guardia",
      time: "Hoy",
      body: "Atención presencial en el día, con la guardia de cartilla más conveniente y su espera estimada.",
    },
    {
      name: "Teleconsulta",
      time: "En el día",
      body: "Resolución remota con un profesional de la cartilla, sin traslado ni sala de espera.",
    },
    {
      name: "Turno programado",
      time: "24 a 72 h",
      body: "Consulta con médico de cabecera o especialista, agendada dentro del mismo flujo.",
    },
    {
      name: "Cuidado en casa",
      time: "Seguimiento",
      body: "Pautas de manejo domiciliario y señales de alarma claras para volver a consultar.",
    },
  ],
};

export const engine = {
  eyebrow: "Motor clínico",
  headline: "Detrás de cada respuesta hay un protocolo.",
  items: [
    {
      title: "Protocolos de recomendación, clínicamente validados",
      body: "Contenido clínico licenciado, codificado a mano y revisado por profesionales matriculados. Ninguna recomendación se genera al vuelo.",
    },
    {
      title: "Preguntar y decidir son dos cosas distintas",
      body: "Una fase conversa y releva hallazgos. Otra recorre la escala de arriba hacia abajo con lógica explícita de banderas. La conversación puede ser natural justamente porque la decisión no depende de ella.",
    },
    {
      title: "Trazable pregunta por pregunta",
      body: "Cada sesión deja registro de qué se preguntó, qué se respondió y qué regla disparó la derivación. Si hay que revisar un caso, está todo ahí.",
    },
    {
      title: "Ante la duda, escalamos",
      body: "Cuando la información es ambigua, el sistema sube de nivel. Preferimos una guardia de más antes que una emergencia de menos, y medimos cuánto nos cuesta esa decisión.",
    },
  ],
};

export const product = {
  eyebrow: "Para el financiador",
  headline: "Vive dentro de tu app, con tu marca.",
  items: [
    {
      title: "Integración liviana",
      body: "Una vista embebida y un token de sesión. Tu equipo de ingeniería no toca lógica clínica ni queda a cargo de mantener el motor.",
    },
    {
      title: "Actualizaciones sin ciclo de release",
      body: "Los protocolos y las mejoras se publican del lado de Etria. No dependen de que tu app pase por las tiendas.",
    },
    {
      title: "White-label desde el primer día",
      body: "Tipografías, colores y tono se configuran por cliente. Para el afiliado, sigue siendo la app de su cobertura de siempre.",
    },
    {
      title: "Panel de derivación",
      body: "Sesiones, distribución por nivel de atención, banderas rojas detectadas y consultas de guardia evitadas, con corte por cartera.",
    },
    {
      title: "Espera de guardia, estimada",
      body: "Arrancamos con estimación histórica por prestador y avanzamos hacia datos directos a medida que se habilitan las integraciones.",
    },
    {
      title: "Agenda y cartilla conectadas",
      body: "La derivación termina en un turno concreto dentro de la red del financiador, no en una recomendación suelta.",
    },
  ],
};

/**
 * SECCIÓN REGULATORIA — DESACTIVADA POR AHORA.
 * El contenido queda acá listo para volver a publicarse cuando decidamos
 * comunicar el estado regulatorio (p. ej. al cerrar la consulta previa ANMAT).
 * Para reactivar: descomentar <Regulatory /> en src/App.tsx, volver a agregar
 * el link "Regulatorio" en `nav.links` y revisar los textos y fechas de abajo.
 */
export const regulatory = {
  eyebrow: "Regulatorio",
  headline: "Un producto médico, con todo lo que eso implica.",
  sub: "Etria se desarrolla bajo marco regulatorio desde el primer día. No es documentación que se suma al final para cerrar un trámite: es lo que define cómo está construido el producto.",
  items: [
    {
      code: "ANMAT",
      title: "Clase III · Disp. 9688/19 y 64/2025",
      body: "Consulta previa en curso. El fin previsto contempla vías de derivación a emergencia, y eso es lo que determina la clasificación.",
    },
    {
      code: "IEC 62304",
      title: "Ciclo de vida del software",
      body: "Control de cambios, versionado y baselines de release trazables contra requisitos.",
    },
    {
      code: "ISO 14971",
      title: "Gestión de riesgos",
      body: "Análisis de riesgo clínico por protocolo, con medidas de control verificadas.",
    },
    {
      code: "IEC 62366-1",
      title: "Ingeniería de usabilidad",
      body: "Validamos que la persona entienda la derivación y las señales de alarma. Si no se entiende, no sirve.",
    },
    {
      code: "ISO 13485",
      title: "Sistema de gestión de calidad",
      body: "Documentación técnica y procesos de calidad alineados al expediente regulatorio.",
    },
  ],
  note: "Estado regulatorio vigente a {date}. Etria no realiza diagnósticos ni reemplaza el criterio médico profesional.",
};

export const cta = {
  headline: "Hagamos el número con tu cartera.",
  sub: "Contanos cuántos afiliados cubrís y armamos juntos la proyección de guardias evitables con tus propios datos. Sin compromiso y sin integración previa.",
  alt: "O escribinos a",
  booking: {
    title: "Agendá una llamada",
    body: "Treinta minutos con el equipo, en el horario que te quede cómodo.",
    button: "Ver disponibilidad",
  },
  form: {
    title: "O contanos por acá",
    button: "Enviar consulta",
    sending: "Enviando…",
    okTitle: "Recibido.",
    okBody: "Te respondemos dentro de las próximas 24 horas hábiles.",
    errorBody:
      "No pudimos enviar el mensaje. Escribinos directamente a {email} y lo resolvemos.",
    mailtoNote: "Se va a abrir tu cliente de correo con el mensaje ya armado.",
    fields: {
      name: "Nombre y apellido",
      org: "Financiador / empresa",
      email: "Email de trabajo",
      members: "Cantidad de afiliados (aprox.)",
      message: "¿Qué te gustaría ver?",
    },
    required: "Completá nombre, email y mensaje.",
  },
};

export const footer = {
  brandLine: "Etria desarrolla tecnología clínica para el sistema de salud argentino.",
  disclaimer:
    "Etria es un software de orientación clínica. No realiza diagnósticos, no prescribe y no reemplaza la consulta con un profesional de la salud. Ante una emergencia, comunicate con el {emergency}.",
  rights: "Todos los derechos reservados.",
};
