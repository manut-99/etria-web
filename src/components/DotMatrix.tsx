import { useEffect, useRef, useState } from "react";
import { problem } from "../content";

const TOTAL = 100;
const NON_URGENT = 85;

/** Sólo cursores de precisión (mouse/trackpad): en touch no hay "hover" que abra un caso. */
function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    const onChange = () => setFine(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return fine;
}

export type PatientStory = { level: "nonUrgent" | "urgent"; text: string };

export function DotMatrix({
  onSelect,
}: {
  onSelect?: (story: PatientStory | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const finePointer = useFinePointer();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div
        className="grid grid-cols-[repeat(10,minmax(0,1fr))] gap-[6px] sm:grid-cols-[repeat(20,minmax(0,1fr))] sm:gap-2"
        role="img"
        aria-label={problem.matrixCaption}
        onMouseLeave={finePointer ? () => onSelect?.(null) : undefined}
      >
        {Array.from({ length: TOTAL }, (_, i) => {
          const nonUrgent = i < NON_URGENT;
          const handleEnter = finePointer
            ? () => {
                const list = nonUrgent
                  ? problem.stories.nonUrgent
                  : problem.stories.urgent;
                const idx = nonUrgent ? i : i - NON_URGENT;
                onSelect?.({
                  level: nonUrgent ? "nonUrgent" : "urgent",
                  text: list[idx % list.length],
                });
              }
            : undefined;
          return (
            <span
              key={i}
              onMouseEnter={handleEnter}
              className={`aspect-square rounded-[3px] transition-all duration-500 ease-out ${finePointer ? "cursor-pointer hover:brightness-110" : ""}`}
              style={{
                background: nonUrgent ? "var(--color-ember)" : "var(--color-deep)",
                opacity: on ? (nonUrgent ? 0.92 : 1) : 0.1,
                transform: on ? "none" : "scale(0.55)",
                transitionDelay: `${i * 9}ms`,
              }}
            />
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.72rem] text-ink/60">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-ember" />
          {problem.matrixLegendHigh}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-deep" />
          {problem.matrixLegendLow}
        </span>
      </div>
    </div>
  );
}
