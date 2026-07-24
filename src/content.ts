/**
 * Toda la redacción del sitio vive acá.
 * Editá este archivo para cambiar copy sin tocar componentes.
 */

export const site = {
  brand: "Etria",
  contactEmail: "info@etriahealth.com",
  bookingUrl: "https://calendar.app.google/NSBTSUABvMsnJug76",
  emergencyNumber: "107",
  /**
   * Endpoint propio (api/contact.ts): manda el mail por Resend y crea la
   * tarea en Jira. Si se deja vacío, el formulario cae de nuevo en `mailto:`.
   */
  formEndpoint: "/api/contact",
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
  {
    kind: "user",
    text: "Hola, me duele la panza desde hace una hora y media. Sin parar.",
  },
  {
    kind: "bot",
    text: "Hola. ¿El dolor es leve o moderado? ¿Te duele al tocarte el abdomen? ¿Tenés fiebre o vómitos?",
  },
  {
    kind: "user",
    text: "Es un dolor moderado. No, no me duele al tocarme y no tengo fiebre ni vomité.",
  },
  {
    kind: "bot",
    text: "En base a lo que me contaste deberías hablar con un médico por teleconsulta. Si el dolor empeora, se vuelve punzante o aparecen nuevos síntomas como fiebre o vómitos, acudí a la guardia.",
  },
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
  storyDisclaimer: "Ejemplo ilustrativo. No corresponde a una persona real.",
  stories: {
    nonUrgent: [
      "Resfrío con tos hace tres días, sin fiebre. Se fue con pautas de cuidado en casa.",
      "Dolor lumbar leve después de mover muebles el fin de semana. Analgésicos y reposo.",
      "Mancha en la piel, sin picazón ni fiebre. Derivación a dermatología por turno programado.",
      "Dolor de cabeza tensional, sin señales de alarma. Se resolvió con una teleconsulta esa misma tarde.",
      "Fiebre baja y dolor de garganta. Faringitis viral, seguida por teleconsulta.",
      "Torcedura de tobillo caminando, sin deformidad ni imposibilidad de apoyar. Hielo y reposo.",
    ],
    urgent: [
      "Dolor torácico opresivo que se irradia al brazo. Ingresó directo a shockroom por sospecha de infarto.",
      "Caída con golpe en la cabeza y pérdida de conciencia breve. Tomografía y observación inmediata.",
      "Dificultad para respirar y labios azulados en un bebé de 8 meses. Derivación inmediata a emergencias.",
      "Fractura expuesta tras un accidente en bicicleta. Atención quirúrgica de urgencia.",
      "Dolor abdominal intenso y súbito, con el abdomen en tabla. Sospecha de apendicitis, cirugía de urgencia.",
    ],
  },
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
      body: "Contenido clínico licenciado, revisado por profesionales matriculados y certificado. Decisiones basadas en datos recolectados por años, no probabilidades de palabras.",
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
    privacy:
      "Usamos estos datos solo para responderte. No los compartimos con terceros y podés pedirnos que los borremos cuando quieras.",
  },
};

export const footer = {
  brandLine: "Etria desarrolla tecnología clínica para el sistema de salud argentino.",
  disclaimer:
    "Etria es un software de orientación clínica. No realiza diagnósticos, no prescribe y no reemplaza la consulta con un profesional de la salud. Ante una emergencia, comunicate con el {emergency}.",
  rights: "Todos los derechos reservados.",
};
