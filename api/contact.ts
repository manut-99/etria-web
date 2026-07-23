import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Recibe el formulario del sitio y hace dos cosas:
 *   1. Manda un mail vía Resend (camino crítico).
 *   2. Crea una tarea en Jira GEN con categoría RRPP (best effort).
 *
 * Variables de entorno (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY      obligatoria
 *   CONTACT_TO          destino  (ej. info@etriahealth.com)
 *   CONTACT_FROM        remitente verificado (ej. "Etria <web@etriahealth.com>")
 *   JIRA_BASE_URL       https://triarge.atlassian.net
 *   JIRA_EMAIL          mail de la cuenta Atlassian dueña del token
 *   JIRA_API_TOKEN      token de https://id.atlassian.com/manage-profile/security/api-tokens
 *   JIRA_PROJECT_KEY    GEN
 *   JIRA_ISSUE_TYPE_ID  10060  (Task)
 *   JIRA_CATEGORY_FIELD customfield_10105
 *   JIRA_CATEGORY_ID    10022  (RRPP)
 *
 * Si falta la config de Jira, el endpoint sigue mandando el mail sin romperse.
 */

type Lead = {
  name: string;
  org: string;
  email: string;
  members: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function plainText(lead: Lead) {
  return [
    `Nombre: ${lead.name}`,
    `Financiador / empresa: ${lead.org || "—"}`,
    `Email: ${lead.email}`,
    `Afiliados (aprox.): ${lead.members || "—"}`,
    "",
    lead.message,
  ].join("\n");
}

async function sendEmail(lead: Lead) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY no configurada");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Etria <web@etriahealth.com>",
      to: [process.env.CONTACT_TO ?? "info@etriahealth.com"],
      reply_to: lead.email,
      subject: `Consulta desde el sitio — ${lead.org || lead.name}`,
      text: plainText(lead),
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend respondió ${res.status}: ${await res.text()}`);
  }
}

async function createJiraIssue(lead: Lead) {
  const base = process.env.JIRA_BASE_URL;
  const user = process.env.JIRA_EMAIL;
  const token = process.env.JIRA_API_TOKEN;
  if (!base || !user || !token) return; // Jira es opcional

  const categoryField = process.env.JIRA_CATEGORY_FIELD ?? "customfield_10105";

  const fields: Record<string, unknown> = {
    project: { key: process.env.JIRA_PROJECT_KEY ?? "GEN" },
    issuetype: { id: process.env.JIRA_ISSUE_TYPE_ID ?? "10060" },
    summary: `Consulta web — ${lead.org || lead.name}`,
    labels: ["sitio-web"],
    // Category es obligatorio en el proyecto GEN (Jira Work Management)
    [categoryField]: { id: process.env.JIRA_CATEGORY_ID ?? "10022" },
    description: {
      type: "doc",
      version: 1,
      content: plainText(lead)
        .split("\n")
        .map((line) => ({
          type: "paragraph",
          content: line ? [{ type: "text", text: line }] : [],
        })),
    },
  };

  const res = await fetch(`${base}/rest/api/3/issue`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString("base64")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) {
    throw new Error(`Jira respondió ${res.status}: ${await res.text()}`);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido" });
  }

  const b = (req.body ?? {}) as Record<string, string>;

  // Honeypot: los bots completan todo, las personas no ven este campo.
  if (b.website) return res.status(200).json({ ok: true });

  const lead: Lead = {
    name: (b.name ?? "").trim().slice(0, 200),
    org: (b.org ?? "").trim().slice(0, 200),
    email: (b.email ?? "").trim().slice(0, 200),
    members: (b.members ?? "").trim().slice(0, 50),
    message: (b.message ?? "").trim().slice(0, 5000),
  };

  if (!lead.name || !lead.message || !EMAIL_RE.test(lead.email)) {
    return res.status(400).json({ error: "Faltan datos o el email no es válido" });
  }

  try {
    await sendEmail(lead);
  } catch (err) {
    console.error("[contact] fallo el envío de mail:", err);
    return res.status(502).json({ error: "No pudimos enviar el mensaje" });
  }

  // El ticket no bloquea la respuesta: si falla, queda en los logs.
  try {
    await createJiraIssue(lead);
  } catch (err) {
    console.error("[contact] fallo la creación del ticket en Jira:", err);
  }

  return res.status(200).json({ ok: true });
}
