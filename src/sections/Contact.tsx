import { useState } from "react";
import { cta, site } from "../content";
import { Reveal } from "../components/Reveal";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-[0.95rem] text-white placeholder:text-sky/35 transition-colors focus:border-ember/70 focus:bg-white/10 focus:outline-none";
const label = "block font-mono text-[0.7rem] tracking-wider text-sky/60 uppercase";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    members: "",
    message: "",
    website: "", // honeypot anti-spam: si viene completo, es un bot
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus("sending");

    const body = [
      `Nombre: ${form.name}`,
      `Financiador / empresa: ${form.org || "—"}`,
      `Email: ${form.email}`,
      `Afiliados (aprox.): ${form.members || "—"}`,
      "",
      form.message,
    ].join("\n");

    // Sin endpoint configurado: abrimos el cliente de correo con todo armado.
    if (!site.formEndpoint) {
      window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
        `Consulta desde el sitio — ${form.org || form.name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("ok");
      return;
    }

    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "Consulta desde el sitio de Etria" }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(150deg,#0b2a5b,#061635)] px-7 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,44,0.35),transparent)]"
          />

          <div className="relative">
            <h2 className="max-w-2xl text-[2rem] text-white sm:text-[2.5rem]">
              {cta.headline}
            </h2>
            <p className="mt-5 max-w-xl text-sky/80">{cta.sub}</p>

            <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-14">
              {/* Opción 1: agenda */}
              <div className="flex flex-col">
                <h3 className="text-[1.35rem] text-white" style={{ fontWeight: 600 }}>
                  {cta.booking.title}
                </h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-sky/70">
                  {cta.booking.body}
                </p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit rounded-full bg-ember px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#ff7d45]"
                >
                  {cta.booking.button}
                </a>

                <p className="mt-8 border-t border-white/10 pt-6 font-mono text-[0.78rem] text-sky/60">
                  {cta.alt}{" "}
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="text-sky underline underline-offset-4"
                  >
                    {site.contactEmail}
                  </a>
                </p>
              </div>

              {/* Opción 2: formulario */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <h3 className="text-[1.15rem] text-white" style={{ fontWeight: 600 }}>
                  {cta.form.title}
                </h3>

                {status === "ok" ? (
                  <div className="pop mt-6 rounded-xl border border-ember/30 bg-ember/10 p-5">
                    <p className="text-[1.05rem] text-white" style={{ fontWeight: 600 }}>
                      {cta.form.okTitle}
                    </p>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-sky/75">
                      {site.formEndpoint ? cta.form.okBody : cta.form.mailtoNote}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={label} htmlFor="f-name">
                          {cta.form.fields.name}
                        </label>
                        <input
                          id="f-name"
                          required
                          value={form.name}
                          onChange={set("name")}
                          className={`${field} mt-1.5`}
                        />
                      </div>
                      <div>
                        <label className={label} htmlFor="f-org">
                          {cta.form.fields.org}
                        </label>
                        <input
                          id="f-org"
                          value={form.org}
                          onChange={set("org")}
                          className={`${field} mt-1.5`}
                        />
                      </div>
                      <div>
                        <label className={label} htmlFor="f-email">
                          {cta.form.fields.email}
                        </label>
                        <input
                          id="f-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={set("email")}
                          className={`${field} mt-1.5`}
                        />
                      </div>
                      <div>
                        <label className={label} htmlFor="f-members">
                          {cta.form.fields.members}
                        </label>
                        <input
                          id="f-members"
                          inputMode="numeric"
                          value={form.members}
                          onChange={set("members")}
                          className={`${field} mt-1.5`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={label} htmlFor="f-message">
                        {cta.form.fields.message}
                      </label>
                      <textarea
                        id="f-message"
                        required
                        rows={3}
                        value={form.message}
                        onChange={set("message")}
                        className={`${field} mt-1.5 resize-none`}
                      />
                    </div>

                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={form.website}
                      onChange={set("website")}
                      className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                    />

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="rounded-full bg-white px-6 py-3 font-semibold text-deep transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                      >
                        {status === "sending" ? cta.form.sending : cta.form.button}
                      </button>
                      {status === "error" && (
                        <p className="text-[0.85rem] text-ember">
                          {cta.form.errorBody.replace("{email}", site.contactEmail)}
                        </p>
                      )}
                    </div>

                    <p className="text-[0.78rem] leading-relaxed text-sky/50">
                      {cta.form.privacy}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
