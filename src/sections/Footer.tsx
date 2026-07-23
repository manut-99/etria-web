import { footer, site } from "../content";
import { Logo } from "../components/Logo";

export function Footer() {
  return (
    <footer className="bg-ink px-5 pt-14 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Logo light />
        <p className="mt-6 max-w-2xl text-[0.88rem] leading-relaxed text-sky/55">
          {footer.disclaimer.replace("{emergency}", site.emergencyNumber)}
        </p>
        <p className="mt-8 border-t border-white/10 pt-6 font-mono text-[0.72rem] text-sky/40">
          © {new Date().getFullYear()} {site.brand}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
