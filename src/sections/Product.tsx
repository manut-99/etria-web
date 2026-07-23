import { product } from "../content";
import { Reveal } from "../components/Reveal";

export function Product() {
  return (
    <section id="producto" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-mid">{product.eyebrow}</p>
          <h2 className="mt-5 max-w-xl text-[2.1rem] sm:text-[2.7rem]">
            {product.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {product.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-2xl border border-mist bg-paper p-6 transition-colors hover:border-mid/30">
                <h3 className="text-[1.15rem] leading-tight">{it.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
