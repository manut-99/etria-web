import { partner } from "../content";
import { Reveal } from "../components/Reveal";

/**
 * Los colores son los de la escala de agudeza (ver index.css): azul profundo
 * para lo que ya está resuelto, ember para lo que todavía está abierto.
 * El orden de las columnas importa: primero la prueba, después la invitación.
 */
const rail = ["bg-deep", "bg-[linear-gradient(180deg,#ff6b2c,#ffa23a)]"];
const dot = ["bg-mid", "bg-ember"];

export function Partner() {
  return (
    <section id="programa" className="border-t border-mist bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-ember">{partner.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-[2.1rem] sm:text-[2.7rem]">
            {partner.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/65">
            {partner.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {partner.columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 90}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-mist bg-white p-6 sm:p-7">
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-[3px] ${rail[i]}`}
                />
                <h3 className="pl-3 text-[1.15rem] leading-tight">{col.title}</h3>
                <ul className="mt-5 flex flex-col gap-3 pl-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 text-[0.95rem] leading-relaxed text-ink/70"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-[0.58em] left-0 h-[5px] w-[5px] rounded-full ${dot[i]}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <p
            className="mt-12 max-w-2xl border-t border-deep/15 pt-8 text-[1.25rem] leading-snug text-deep sm:text-[1.45rem]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            {partner.close}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
