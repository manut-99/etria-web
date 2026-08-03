import { engine } from "../content";
import { Reveal } from "../components/Reveal";

export function Engine() {
  return (
    <section id="motor" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-ember">{engine.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-[2.1rem] sm:text-[2.7rem]">
            {engine.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {engine.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="border-t border-deep/15 pt-5">
                <h3 className="text-[1.22rem] leading-tight">{it.title}</h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-ink/65">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
