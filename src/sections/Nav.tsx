import { useEffect, useState } from "react";
import { nav } from "../content";
import { Logo } from "../components/Logo";

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-mist bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo light={!solid} />

        {/* gap ajustado: con seis links el renglón no entra a 1024px con gap-7 */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.92rem] transition-opacity hover:opacity-100 ${
                solid ? "text-ink/70" : "text-white/70"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-ember px-4 py-2 text-[0.88rem] font-semibold text-white transition-transform hover:-translate-y-px hover:bg-[#ff7d45]"
        >
          {nav.cta}
        </a>
      </nav>
    </header>
  );
}
