/**
 * Toda la redacción del sitio vive acá.
 * Editá este archivo para cambiar copy sin tocar componentes.
 */

export const site = {
  brand: "Etria",
  contactEmail: "hola@etria.health", // TODO: reemplazar por el mail real
  emergencyNumber: "107",
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
    { label: "Regulatorio", href: "#regulatorio" },
  ],
  cta: "Pedir una demo",
};

export const hero = {
  eyebrow: "Software como producto médico · Consulta previa ANMAT en curso",
  headline: ["Cada síntoma tiene", "un nivel de atención", "correcto."],
  sub: "Etria es un motor de triage clínico que se integra en la app de tu prepaga u obra social. Orienta al afiliado hacia la guardia, la teleconsulta o el cuidado en casa en menos de dos minutos, con protocolos revisados y trazables.",
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
  headline: "La guardia se convirtió en la puerta de entrada al sistema.",
  body: [
    "Sobre un relevamiento de más de un millón de consultas de ADECRA+CEDIM y su Comisión de Directores Médicos, el 84,5% de las consultas de guardia no correspondían a una urgencia.",
    "El costo lo absorbe el financiador. La espera la pagan los afiliados que sí necesitaban atención inmediata.",
  ],
  matrixCaption:
    "De cada 100 consultas a la guardia, 85 podían resolverse en otro nivel de atención.",
  matrixLegendHigh: "No urgente",
  matrixLegendLow: "Urgencia real",
};

export const steps = {
  eyebrow: "Cómo funciona",
  headline: "Una sesión, cuatro momentos.",
  items: [
    {
      title: "Entra desde la app que ya usa",
      body: "Etria se abre dentro de la app de la cobertura. Sin descargar nada nuevo, sin otra contraseña, sin salir de la marca del financiador.",
    },
    {
      title: "Descartamos banderas rojas primero",
      body: "Toda sesión arranca con un tamizaje universal de emergencia. Si aparece una señal crítica, la conversación se interrumpe y deriva a emergencias en el acto.",
    },
    {
      title: "Pregunta lo mínimo necesario",
      body: "Entre seis y siete intercambios. Cada pregunta existe porque su respuesta cambia la decisión: si no la cambia, no se pregunta.",
    },
    {
      title: "Deriva con el próximo paso resuelto",
      body: "No termina en un consejo. Termina en un turno de teleconsulta, una guardia sugerida con tiempo de espera estimado, o pautas de cuidado con señales de alarma explícitas.",
    },
  ],
};

export const scale = {
  eyebrow: "La escala",
  headline: "Cinco destinos, una sola decisión.",
  sub: "El naranja y el azul de Etria no son decoración: son los extremos de la escala de agudeza. Todo lo que hace el producto es ubicar a la persona en el punto justo entre uno y otro.",
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
  headline: "El criterio clínico no lo improvisa un modelo.",
  items: [
    {
      title: "Protocolos Schmitt-Thompson, codificados uno por uno",
      body: "Contenido clínico licenciado y codificado manualmente, con revisión y firma de profesionales matriculados. Nada se genera al vuelo.",
    },
    {
      title: "Preguntar y decidir son dos fases separadas",
      body: "Una fase releva hallazgos con lenguaje natural. Otra evalúa la escala de arriba hacia abajo con lógica explícita de banderas. La decisión nunca queda del lado del lenguaje.",
    },
    {
      title: "Trazable pregunta por pregunta",
      body: "Cada sesión deja registro de qué se preguntó, qué se respondió y qué regla disparó la derivación. Auditable caso por caso.",
    },
    {
      title: "Sesgo explícito a la seguridad",
      body: "Ante ambigüedad, el sistema escala. Preferimos una guardia de más antes que una emergencia de menos, y lo medimos.",
    },
  ],
};

export const product = {
  eyebrow: "Para el financiador",
  headline: "Se embebe en tu app. No la reemplaza.",
  items: [
    {
      title: "Integración liviana",
      body: "Una vista embebida y un token de sesión. Tu equipo de ingeniería no toca lógica clínica ni asume mantenimiento del motor.",
    },
    {
      title: "Actualizaciones sin ciclo de release",
      body: "Los protocolos y las mejoras se publican del lado de Etria. No dependen de que tu app pase por las tiendas.",
    },
    {
      title: "White-label desde el primer día",
      body: "Tipografías, colores y tono configurables por cliente. Para el afiliado, sigue siendo la app de su cobertura.",
    },
    {
      title: "Panel de derivación",
      body: "Sesiones, distribución por nivel de atención, banderas rojas detectadas y consultas de guardia evitadas, con corte por cartera.",
    },
    {
      title: "Espera de guardia en tiempo real",
      body: "Arrancamos con estimación histórica por prestador y avanzamos hacia datos directos a medida que se habilitan las integraciones.",
    },
    {
      title: "Agenda y cartilla conectadas",
      body: "La derivación termina en un turno concreto dentro de la red del financiador, no en una recomendación suelta.",
    },
  ],
};

export const regulatory = {
  eyebrow: "Regulatorio",
  headline: "Construido para pasar una auditoría, no para esquivarla.",
  sub: "Etria se desarrolla como producto médico de software desde el primer commit. El marco no se agrega al final: define la arquitectura.",
  items: [
    {
      code: "ANMAT",
      title: "Clase III · Disp. 9688/19 y 64/2025",
      body: "Consulta previa en curso. El fin previsto contempla vías de derivación a emergencia, lo que fija la clasificación.",
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
      body: "Validación de que el afiliado entiende la derivación y las señales de alarma.",
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
  headline: "¿Cuántas guardias evitables tiene tu cartera este año?",
  sub: "Contanos cuántos afiliados cubrís y armamos la proyección con tus propios números. Sin compromiso y sin integración previa.",
  button: "Escribinos",
  alt: "O escribinos directamente a",
};

export const footer = {
  disclaimer:
    "Etria es un software de orientación clínica. No realiza diagnósticos, no prescribe y no reemplaza la consulta con un profesional de la salud. Ante una emergencia, comunicate con el {emergency}.",
  rights: "Todos los derechos reservados.",
};
