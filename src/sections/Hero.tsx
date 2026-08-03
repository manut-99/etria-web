import { hero } from "../content";
import { ProgramBadge } from "../components/ProgramBadge";
import { SessionDemo } from "../components/SessionDemo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden bg-[linear-gradient(168deg,#061635_0%,#0a2450_55%,#0b2a5b_100%)] pt-28 pb-20 sm:pt-32 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="grid-field grid-field-mask absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(30,79,163,0.55),transparent)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <ProgramBadge className="rise" />

          <h1
            className="rise mt-6 text-[2.7rem] text-white sm:text-[3.6rem] lg:text-[4rem]"
            style={{ animationDelay: "80ms", fontWeight: 600 }}
          >
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
            <br />
            <span className="text-ember">{hero.headline[2]}</span>
          </h1>

          <p
            className="rise mt-6 max-w-xl text-[1.06rem] leading-relaxed text-sky/85"
            style={{ animationDelay: "160ms" }}
          >
            {hero.sub}
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#contacto"
              className="rounded-full bg-ember px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#ff7d45]"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-white/25 px-6 py-3 font-medium text-white/90 transition-colors hover:border-white/60"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="rise" style={{ animationDelay: "320ms" }}>
          <SessionDemo />
        </div>
      </div>
    </section>
  );
}
