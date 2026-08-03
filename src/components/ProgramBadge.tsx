import { programBadge } from "../content";

/**
 * Distintivo del programa de primeros socios. Es un ancla a la sección de
 * implementación (#programa) y se usa siempre sobre fondo azul profundo:
 * hero y bloque de contacto. El `className` sólo aporta posición o animación.
 */
export function ProgramBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={programBadge.href}
      className={`inline-flex items-center gap-2 rounded-full border border-amber/40 bg-ember/10 px-3.5 py-1.5 font-mono text-[0.7rem] tracking-[0.11em] text-amber uppercase transition-colors hover:border-amber hover:bg-ember/20 ${className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ember" />
      {programBadge.label}
    </a>
  );
}
