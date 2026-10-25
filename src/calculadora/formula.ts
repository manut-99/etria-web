/**
 * Ahorro mensual por guardias no urgentes que se redirigen:
 *
 *   redirigidas = visitas × % no urgentes × % redirigido
 *   por visita  = % a teleconsulta × (guardia − teleconsulta) + % a casa × guardia
 *   ahorro      = redirigidas × por visita × parte del financiador
 *
 * La página muestra solo el ahorro final; PAYER_SHARE es un margen
 * conservador que no se explicita.
 * api/calculator.ts repite la cuenta: si cambia acá, cambiar allá.
 */
export const NON_URGENT_DEFAULT = 0.85;
export const REDIRECT_DEFAULT = 0.25;
/**
 * De las redirigidas, cuántas van a teleconsulta; el resto, cuidado en casa
 * (costo 0). Jácome et al. 2019: de quienes iban a ir a la guardia y fueron
 * derivados, ~80% terminó con un médico y ~20% en autocuidado.
 */
export const TELE_SHARE = 0.8;
export const PAYER_SHARE = 0.8;

export type Inputs = {
  members: number;
  visits: number;
  nonUrgent: number;
  redirect: number;
  guardCost: number;
  teleCost: number;
};

export function savingsPerRedirect(guardCost: number, teleCost: number) {
  return TELE_SHARE * (guardCost - teleCost) + (1 - TELE_SHARE) * guardCost;
}

export function estimate({ members, visits, nonUrgent, redirect, guardCost, teleCost }: Inputs) {
  const monthly =
    visits * nonUrgent * redirect * savingsPerRedirect(guardCost, teleCost) * PAYER_SHARE;
  return { monthly, annual: monthly * 12, pmpm: monthly / members };
}
