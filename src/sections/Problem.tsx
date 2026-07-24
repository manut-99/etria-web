import { useState } from "react";
import { problem } from "../content";
import { DotMatrix, type PatientStory } from "../components/DotMatrix";
import { Reveal } from "../components/Reveal";

export function Problem() {
  const [story, setStory] = useState<PatientStory | null>(null);

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
          <DotMatrix onSelect={setStory} />
          <p className="mt-7 max-w-sm border-l-2 border-ember pl-4 text-[0.98rem] leading-snug text-ink/75">
            {problem.matrixCaption}
          </p>
          <a
            href={problem.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block font-mono text-[0.72rem] text-mid underline decoration-mid/30 underline-offset-4 transition-colors hover:decoration-mid"
          >
            Fuente: {problem.sourceLabel} ↗
          </a>

          {story && (
            <div className="mt-5 max-w-sm rounded-2xl border border-mist bg-white p-4 shadow-sm">
              <span
                className={`eyebrow ${story.level === "nonUrgent" ? "text-ember" : "text-deep"}`}
              >
                {story.level === "nonUrgent"
                  ? problem.matrixLegendHigh
                  : problem.matrixLegendLow}
              </span>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink/75">
                {story.text}
              </p>
              <p className="mt-2.5 font-mono text-[0.68rem] text-mid/60">
                {problem.storyDisclaimer}
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
