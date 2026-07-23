import { scale } from "../content";
import { Reveal } from "../components/Reveal";

const DOT = ["#ff6b2c", "#ffa23a", "#6f8fd0", "#1e4fa3", "#8fb8f5"];

export function Scale() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0b2a5b,#061635)] py-24 sm:py-32">
      <div aria-hidden="true" className="grid-field absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-ember">{scale.eyebrow}</p>
          <h2 className="mt-5 max-w-xl text-[2.1rem] text-white sm:text-[2.7rem]">
            {scale.headline}
          </h2>
          <p className="mt-5 max-w-lg text-sky/75">{scale.sub}</p>
        </Reveal>

        <div className="mt-14 flex gap-6 sm:gap-10">
          <div
            aria-hidden="true"
            className="acuity-ramp w-1 shrink-0 rounded-full opacity-90"
          />
          <ul className="flex-1">
            {scale.levels.map((l, i) => (
              <li key={l.name}>
                <Reveal delay={i * 80}>
                  <div className="grid gap-2 border-b border-white/10 py-6 sm:grid-cols-[13rem_1fr] sm:items-baseline sm:gap-8">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="h-2.5 w-2.5 shrink-0 translate-y-[-1px] rounded-full"
                        style={{ background: DOT[i] }}
                      />
                      <h3
                        className="text-[1.35rem] text-white"
                        style={{ fontWeight: 600 }}
                      >
                        {l.name}
                      </h3>
                      <span className="font-mono text-[0.7rem] tracking-wider text-sky/55 uppercase">
                        {l.time}
                      </span>
                    </div>
                    <p className="text-[0.98rem] leading-relaxed text-sky/75">
                      {l.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
