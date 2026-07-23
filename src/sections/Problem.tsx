import { problem } from "../content";
import { DotMatrix } from "../components/DotMatrix";
import { Reveal } from "../components/Reveal";

export function Problem() {
  return (
    <section id="problema" className="border-b border-mist bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-ember">{problem.eyebrow}</p>
          <h2 className="mt-5 max-w-lg text-[2.1rem] sm:text-[2.7rem]">
            {problem.headline}
          </h2>
          {problem.body.map((p, i) => (
            <p key={i} className="mt-5 max-w-lg text-ink/70">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120} className="lg:pt-4">
          <DotMatrix />
          <p className="mt-7 max-w-sm border-l-2 border-ember pl-4 text-[0.98rem] leading-snug text-ink/75">
            {problem.matrixCaption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
