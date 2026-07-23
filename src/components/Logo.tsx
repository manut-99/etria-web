import { site } from "../content";

/**
 * Marca: cinco barras descendentes = la escala de agudeza.
 * Va de naranja (emergencia) a azul profundo (cuidado en casa).
 * Sobre fondo oscuro se usa una rampa aclarada para que el último
 * escalón siga siendo visible, manteniendo la misma dirección.
 */
const RAMP_LIGHT = ["#ff6b2c", "#ffa23a", "#6f8fd0", "#1e4fa3", "#0b2a5b"];
const RAMP_DARK = ["#ff6b2c", "#ffa23a", "#a9c6f7", "#6f8fd0", "#3f6ec4"];

export function LogoMark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const ramp = onDark ? RAMP_DARK : RAMP_LIGHT;
  const heights = [17, 14, 11, 8, 5];
  return (
    <svg viewBox="0 0 26 22" className={className} aria-hidden="true">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 5.4}
          y={20 - h}
          width="3.2"
          height={h}
          rx="1.6"
          fill={ramp[i]}
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
      <LogoMark className="h-5 w-6" onDark={light} />
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
