import { team } from "../content";
import { Reveal } from "../components/Reveal";

/**
 * Las fotos son cuadradas y salen del mismo estudio, con el fondo azul de la
 * paleta: por eso van sin recorte circular y con un aro `mist` que las cose al
 * resto de las tarjetas. El ancho de la ficha (sm:grid-cols-2) mantiene la
 * medida de línea legible aunque las bios sean largas.
 */
export function Team() {
  return (
    <section id="equipo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-mid">{team.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-[2.1rem] sm:text-[2.7rem]">
            {team.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/65">
            {team.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={(i % 2) * 90}>
              <div className="h-full rounded-2xl border border-mist bg-white p-6 transition-colors hover:border-mid/30 sm:p-7">
                <div className="flex items-center gap-4">
                  <img
                    src={m.photo}
                    alt={`Retrato de ${m.name}`}
                    width={560}
                    height={560}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 shrink-0 rounded-xl object-cover ring-1 ring-mist sm:h-[5.5rem] sm:w-[5.5rem]"
                  />
                  <div>
                    <h3 className="text-[1.22rem] leading-tight">{m.name}</h3>
                    <p className="eyebrow mt-2 text-[0.68rem] text-mid">{m.role}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-mist pt-5">
                  {m.bio.map((p) => (
                    <p key={p} className="text-[0.95rem] leading-relaxed text-ink/65">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
