import { useEffect, useState } from "react";
import { demoScript, hero } from "../content";
import { LogoMark } from "./Logo";

const STEP_MS = [1600, 2100, 1200, 2100, 1200, 2400];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function SessionDemo() {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reduced ? demoScript.length : 0);

  useEffect(() => {
    if (reduced) {
      setVisible(demoScript.length);
      return;
    }
    if (visible >= demoScript.length) {
      const restart = setTimeout(() => setVisible(0), 6000);
      return () => clearTimeout(restart);
    }
    const t = setTimeout(
      () => setVisible((v) => v + 1),
      STEP_MS[visible] ?? 1600,
    );
    return () => clearTimeout(t);
  }, [visible, reduced]);

  const pending =
    !reduced &&
    visible < demoScript.length &&
    demoScript[visible]?.kind === "bot";

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(255,107,44,0.22),transparent_70%)] blur-xl"
      />
      <p className="sr-only">
        {hero.demoLabel}: una persona consulta por dolor de cabeza, Etria descarta
        banderas rojas con dos preguntas de seguridad y deriva a una teleconsulta
        en el día. {hero.demoDisclaimer}
      </p>
      <div className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.045] p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.75)] backdrop-blur-sm">
        <div className="rounded-[1.4rem] bg-white">
          {/* Barra de la app del financiador */}
          <div className="flex items-center justify-between border-b border-mist px-4 py-3">
            <span className="eyebrow text-mid/70">Mi cobertura</span>
            <span className="flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1">
              <LogoMark className="h-3 w-3.5" />
              <span className="font-mono text-[0.65rem] tracking-wide text-deep">
                Etria
              </span>
            </span>
          </div>

          {/* Conversación */}
          <div
            className="flex h-[30rem] flex-col justify-end gap-3 overflow-hidden px-4 py-5 sm:h-[31rem]"
            aria-hidden="true"
          >
            {demoScript.slice(0, visible).map((m, i) => {
              if (m.kind === "user")
                return (
                  <p
                    key={i}
                    className="pop max-w-[85%] self-end rounded-2xl rounded-br-md bg-deep px-3.5 py-2.5 text-[0.94rem] leading-snug text-white"
                  >
                    {m.text}
                  </p>
                );
              if (m.kind === "bot")
                return (
                  <p
                    key={i}
                    className="pop max-w-[88%] self-start rounded-2xl rounded-bl-md bg-paper px-3.5 py-2.5 text-[0.94rem] leading-snug text-ink"
                  >
                    {m.text}
                  </p>
                );
              if (m.kind === "answer")
                return (
                  <span
                    key={i}
                    className="pop self-end rounded-full border border-deep/25 px-3.5 py-1.5 text-[0.85rem] font-medium text-deep"
                  >
                    {m.text}
                  </span>
                );
              return (
                <div
                  key={i}
                  className="pop rounded-2xl border border-mid/20 bg-[linear-gradient(160deg,#f4f7fc,#e6eefb)] p-4"
                >
                  <span className="eyebrow text-mid">Derivación</span>
                  <p
                    className="mt-2 font-display text-[1.6rem] leading-none text-deep"
                    style={{ fontWeight: 600 }}
                  >
                    {m.level}
                  </p>
                  <p className="mt-1.5 text-[0.92rem] leading-snug text-ink/75">
                    {m.text}
                  </p>
                  <div className="mt-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <span className="text-[0.82rem] leading-tight text-deep">
                      {m.detail}
                    </span>
                  </div>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="mt-2.5 w-full cursor-default rounded-xl bg-ember py-2.5 text-[0.9rem] font-semibold text-white"
                  >
                    Confirmar turno
                  </button>
                </div>
              );
            })}

            {pending && (
              <span className="flex w-fit gap-1 self-start rounded-2xl rounded-bl-md bg-paper px-3.5 py-3.5">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="typing-dot h-1.5 w-1.5 rounded-full bg-mid"
                    style={{ animationDelay: `${d * 0.18}s` }}
                  />
                ))}
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="mt-3 px-1 font-mono text-[0.68rem] leading-relaxed text-sky/60">
        {hero.demoDisclaimer}
      </p>
    </div>
  );
}
