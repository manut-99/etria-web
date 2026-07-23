import { useEffect, useRef, useState } from "react";
import { problem } from "../content";

const TOTAL = 100;
const NON_URGENT = 85;

export function DotMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

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
      >
        {Array.from({ length: TOTAL }, (_, i) => {
          const nonUrgent = i < NON_URGENT;
          return (
            <span
              key={i}
              className="aspect-square rounded-[3px] transition-all duration-500 ease-out"
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
