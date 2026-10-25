import { useState } from "react";
import { calculator, footer, site } from "../content";
import { Logo } from "../components/Logo";
import {
  NON_URGENT_DEFAULT,
  REDIRECT_DEFAULT,
  TELE_SHARE,
  estimate,
  savingsPerRedirect,
} from "./formula";

const field =
  "w-full rounded-xl border border-mist bg-white px-3.5 py-2.5 text-[1rem] text-ink placeholder:text-ink/30 transition-colors focus:border-ember/70 focus:outline-none";
const label = "block font-mono text-[0.7rem] tracking-wider text-ink/55 uppercase";

const usd = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
// El PMPM suele quedar en pocos dólares: con centavos se lee mejor.
const usdCents = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const pct = (n: number) => `${Math.round(n * 100)}%`;

const FIELDS = ["members", "visits", "guardCost", "teleCost"] as const;

const SLIDERS = {
  nonUrgent: { min: 0.4, max: 0.95 },
  redirect: { min: 0.05, max: 0.5 },
} as const;

type Result = ReturnType<typeof estimate> | "invalid" | "noSavings" | null;

export function Calculator() {
  const [form, setForm] = useState({ members: "", visits: "", guardCost: "", teleCost: "" });
  const [rates, setRates] = useState({
    nonUrgent: NON_URGENT_DEFAULT,
    redirect: REDIRECT_DEFAULT,
  });
  const [result, setResult] = useState<Result>(null);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setResult(null);
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Acepta coma decimal (es-AR).
    const [members, visits, guardCost, teleCost] = FIELDS.map((k) =>
      Number(form[k].replace(",", ".")),
    );

    if (![members, visits, guardCost, teleCost].every((n) => Number.isFinite(n) && n > 0)) {
      return setResult("invalid");
    }
    if (savingsPerRedirect(guardCost, teleCost) <= 0) return setResult("noSavings");

    const inputs = { members, visits, ...rates, guardCost, teleCost };
    setResult(estimate(inputs));

    // Registro en la planilla: no bloquea el resultado y, si falla, no se avisa.
    fetch("/api/calculator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-mist">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo href="/" />
          <a href="/" className="text-[0.92rem] text-ink/60 hover:text-ink">
            {calculator.back}
          </a>
        </div>
      </header>

      <main className="flex-1 px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[2.2rem] sm:text-[2.8rem]">{calculator.title}</h1>
          <p className="mt-4 max-w-xl text-ink/70">{calculator.sub}</p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-6 rounded-2xl border border-mist bg-white p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {FIELDS.map((k) => (
                <div key={k}>
                  <label className={label} htmlFor={`c-${k}`}>
                    {calculator.fields[k]}
                  </label>
                  <input
                    id={`c-${k}`}
                    inputMode="decimal"
                    required
                    value={form[k]}
                    onChange={set(k)}
                    className={`${field} mt-1.5`}
                  />
                </div>
              ))}
            </div>

            {(Object.keys(SLIDERS) as (keyof typeof SLIDERS)[]).map((k) => (
              <div key={k}>
                <div className="flex items-baseline justify-between gap-4">
                  <label className={label} htmlFor={`c-${k}`}>
                    {calculator.fields[k]}
                  </label>
                  <span className="font-mono text-[0.95rem] text-ink">{pct(rates[k])}</span>
                </div>
                <input
                  id={`c-${k}`}
                  type="range"
                  min={SLIDERS[k].min}
                  max={SLIDERS[k].max}
                  step={0.05}
                  value={rates[k]}
                  onChange={(e) => {
                    setRates((r) => ({ ...r, [k]: Number(e.target.value) }));
                    setResult(null);
                  }}
                  className="mt-3 w-full accent-ember"
                />
              </div>
            ))}

            <button
              type="submit"
              className="justify-self-start rounded-full bg-ember px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {calculator.button}
            </button>
          </form>

          {result === "invalid" && (
            <p className="mt-6 text-[0.92rem] text-ember">{calculator.invalid}</p>
          )}
          {result === "noSavings" && (
            <p className="mt-6 text-[0.92rem] text-ember">{calculator.noSavings}</p>
          )}
          {result && typeof result === "object" && (
            <div className="pop mt-6 rounded-2xl bg-[linear-gradient(150deg,#0b2a5b,#061635)] p-6 sm:p-8">
              <p className="eyebrow text-sky/70">{calculator.results.monthly}</p>
              <p
                className="mt-3 font-display text-[2rem] leading-tight text-white sm:text-[2.6rem]"
                style={{ fontWeight: 600 }}
              >
                {usd.format(result.monthly)}
              </p>

              <div className="mt-6 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-sky/60">{calculator.results.annual}</p>
                  <p className="mt-1.5 text-[1.1rem] text-white">{usd.format(result.annual)}</p>
                </div>
                <div>
                  <p className="eyebrow text-sky/60">{calculator.results.pmpm}</p>
                  <p className="mt-1.5 text-[1.1rem] text-white">
                    {usdCents.format(result.pmpm)}
                  </p>
                </div>
              </div>
            </div>
          )}

          <p className="mt-6 max-w-xl text-[0.85rem] leading-relaxed text-ink/50">
            {calculator.assumptions
              .replace("{tele}", pct(TELE_SHARE))
              .replace("{home}", pct(1 - TELE_SHARE))}
          </p>
        </div>
      </main>

      <footer className="border-t border-mist px-5 py-8 sm:px-8">
        <p className="mx-auto max-w-3xl font-mono text-[0.72rem] text-ink/40">
          © {new Date().getFullYear()} {site.brand}. {footer.rights}
        </p>
      </footer>
    </div>
  );
}
