import { cta, mailto, site } from "../content";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section id="contacto" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(150deg,#0b2a5b,#061635)] px-7 py-14 sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,44,0.35),transparent)]"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-[2rem] text-white sm:text-[2.6rem]">
              {cta.headline}
            </h2>
            <p className="mt-5 text-sky/80">{cta.sub}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={mailto("Proyección de guardias evitables")}
                className="rounded-full bg-ember px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#ff7d45]"
              >
                {cta.button}
              </a>
              <p className="font-mono text-[0.8rem] text-sky/60">
                {cta.alt}{" "}
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-sky underline underline-offset-4"
                >
                  {site.contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
