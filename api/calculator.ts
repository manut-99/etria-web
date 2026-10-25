import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Registra cada uso de la calculadora (/calculadora) como una fila en una
 * Google Sheet, vía un Apps Script publicado como web app (ver README).
 *
 * Variables de entorno (Vercel → Settings → Environment Variables):
 *   SHEET_WEBHOOK_URL     URL /exec del Apps Script
 *   SHEET_WEBHOOK_SECRET  clave compartida; el script descarta lo que no la trae
 *
 * Si falta la config, responde ok sin registrar: la calculadora no depende de esto.
 */

// Misma cuenta que src/calculadora/formula.ts: si cambia allá, cambiar acá.
const TELE_SHARE = 0.8;
const PAYER_SHARE = 0.8;

const MAX = 1e9;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido" });
  }

  const b = (req.body ?? {}) as Record<string, unknown>;
  const members = Number(b.members);
  const visits = Number(b.visits);
  const nonUrgent = Number(b.nonUrgent);
  const redirect = Number(b.redirect);
  const guardCost = Number(b.guardCost);
  const teleCost = Number(b.teleCost);
  const perRedirect = TELE_SHARE * (guardCost - teleCost) + (1 - TELE_SHARE) * guardCost;

  if (
    ![members, visits, guardCost, teleCost].every((n) => Number.isFinite(n) && n > 0 && n < MAX) ||
    ![nonUrgent, redirect].every((n) => n > 0 && n <= 1) ||
    perRedirect <= 0
  ) {
    return res.status(400).json({ error: "Valores inválidos" });
  }

  const url = process.env.SHEET_WEBHOOK_URL;
  if (!url) return res.status(200).json({ ok: true });

  // El resultado se recalcula acá para que la planilla no dependa de lo que mande el navegador.
  const gross = visits * nonUrgent * redirect * perRedirect;
  const row = {
    secret: process.env.SHEET_WEBHOOK_SECRET ?? "",
    timestamp: new Date().toISOString(),
    members,
    visits,
    nonUrgent,
    redirect,
    guardCost,
    teleCost,
    // Bruto: ahorro total. Mostrado: con el margen de PAYER_SHARE, lo que ve en la página.
    gross: Math.round(gross),
    shown: Math.round(gross * PAYER_SHARE),
  };

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    });
    if (!r.ok) throw new Error(`Apps Script respondió ${r.status}: ${await r.text()}`);
  } catch (err) {
    console.error("[calculator] fallo el registro en la planilla:", err);
    return res.status(502).json({ error: "No se pudo registrar" });
  }

  return res.status(200).json({ ok: true });
}
