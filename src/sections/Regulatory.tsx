import { regulatory, site } from "../content";
import { Reveal } from "../components/Reveal";

export function Regulatory() {
  return (
    <section id="regulatorio" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-ember">{regulatory.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-[2.1rem] text-white sm:text-[2.7rem]">
            {regulatory.headline}
          </h2>
          <p className="mt-5 max-w-lg text-sky/70">{regulatory.sub}</p>
        </Reveal>

        <dl className="mt-14 border-t border-white/12">
          {regulatory.items.map((it, i) => (
            <Reveal key={it.code} delay={i * 70}>
              <div className="grid gap-2 border-b border-white/12 py-6 sm:grid-cols-[9rem_14rem_1fr] sm:gap-8">
                <dt className="font-mono text-[0.82rem] tracking-wide text-ember">
                  {it.code}
                </dt>
                <dd className="text-[1rem] font-medium text-white">{it.title}</dd>
                <dd className="text-[0.95rem] leading-relaxed text-sky/65">
                  {it.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <p className="mt-8 max-w-2xl font-mono text-[0.72rem] leading-relaxed text-sky/45">
          {regulatory.note.replace("{date}", site.regulatoryAsOf)}
        </p>
      </div>
    </section>
  );
}
