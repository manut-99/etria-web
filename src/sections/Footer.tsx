import { footer, site } from "../content";
import { Logo } from "../components/Logo";
import { LinkedInIcon } from "../components/LinkedInIcon";

export function Footer() {
  return (
    <footer className="bg-ink px-5 pt-14 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-6">
          <Logo light />
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-[0.88rem] text-sky/90 transition-colors hover:border-white/40 hover:text-white sm:px-4"
            >
              <LinkedInIcon className="h-5 w-5" />
              <span className="hidden sm:inline">{footer.linkedinLabel}</span>
              <span className="sr-only sm:hidden">{footer.linkedinLabel}</span>
            </a>
          )}
        </div>
        <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-sky/85">
          {footer.brandLine}
        </p>
        <p className="mt-5 max-w-2xl text-[0.85rem] leading-relaxed text-sky/50">
          {footer.disclaimer.replace("{emergency}", site.emergencyNumber)}
        </p>
        <p className="mt-8 border-t border-white/10 pt-6 font-mono text-[0.72rem] text-sky/40">
          © {new Date().getFullYear()} {site.brand}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
