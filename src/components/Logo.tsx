import { site } from "../content";

/** Marca: cinco barras descendentes = la escala de agudeza, de urgencia a casa. */
export function LogoMark({ className = "" }: { className?: string }) {
  const bars = [
    { h: 17, c: "var(--color-ember)" },
    { h: 14, c: "var(--color-amber)" },
    { h: 11, c: "#6f8fd0" },
    { h: 8, c: "var(--color-mid)" },
    { h: 5, c: "var(--color-sky)" },
  ];
  return (
    <svg viewBox="0 0 26 22" className={className} aria-hidden="true">
      {bars.map((b, i) => (
        <rect
          key={i}
          x={i * 5.4}
          y={20 - b.h}
          width="3.2"
          height={b.h}
          rx="1.6"
          fill={b.c}
        />
      ))}
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5"
      aria-label={`${site.brand} — inicio`}
    >
      <LogoMark className="h-5 w-6" />
      <span
        className={`font-display text-[1.35rem] tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
        style={{ fontWeight: 600 }}
      >
        {site.brand}
      </span>
    </a>
  );
}
