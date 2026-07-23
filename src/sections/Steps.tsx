import { steps } from "../content";
import { Reveal } from "../components/Reveal";

export function Steps() {
  return (
    <section id="como-funciona" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-mid">{steps.eyebrow}</p>
          <h2 className="mt-5 max-w-xl text-[2.1rem] sm:text-[2.7rem]">
            {steps.headline}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {steps.items.map((s, i) => (
            <li key={s.title} className="bg-white">
              <Reveal delay={i * 90} className="h-full">
                <div className="flex h-full flex-col p-6 lg:p-7">
                  <span className="font-mono text-[0.72rem] tracking-[0.14em] text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[1.2rem] leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
