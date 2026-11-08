import { useState } from "react";
import { PageHeader, Reveal, SectionHeading } from "../components/ui";
import { packages, site, socialLinks } from "../data";

const nextSteps = [
  {
    n: "01",
    t: "Tell me about the project",
    b: "A few lines on your business, what you need, and roughly when you want to launch.",
  },
  {
    n: "02",
    t: "Fixed quote & timeline",
    b: "You get the package, the exact price and the launch date in writing — no hourly surprises.",
  },
  {
    n: "03",
    t: "Confirm & kick off",
    b: "Terms confirmed, content shared, and we start. Most projects go live within a month.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    package: packages[0].name,
    message: "",
  });

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = `Project enquiry — ${form.package} package`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Package of interest: ${form.package}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        intro="Send a few lines about your business and what you need. I reply to every enquiry — usually within one working day."
      />

      <section className="section container-x">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* DETAILS */}
          <div>
            <Reveal>
              <span className="eyebrow">Direct</span>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 block break-words link-underline"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {site.email}
              </a>

              <dl className="mt-9 border-t border-[var(--border)]">
                <div className="flex justify-between gap-6 border-b border-[var(--border)] py-4">
                  <dt className="mono text-[0.72rem] uppercase tracking-[0.12em] muted">
                    Based in
                  </dt>
                  <dd className="text-sm">Ghana · remote-friendly</dd>
                </div>
                <div className="flex justify-between gap-6 border-b border-[var(--border)] py-4">
                  <dt className="mono text-[0.72rem] uppercase tracking-[0.12em] muted">
                    Reply time
                  </dt>
                  <dd className="text-sm">Within 1 working day</dd>
                </div>
                <div className="flex justify-between gap-6 border-b border-[var(--border)] py-4">
                  <dt className="mono text-[0.72rem] uppercase tracking-[0.12em] muted">
                    Availability
                  </dt>
                  <dd className="text-sm">Taking new projects</dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {Object.entries(socialLinks).map(([key, href]) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill capitalize transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
                  >
                    {key}
                  </a>
                ))}
              </div>
            </Reveal>

            <div className="mt-12">
              <SectionHeading eyebrow="How it works" title="Three steps." />
              <ol className="mt-8">
                {nextSteps.map((step, i) => (
                  <Reveal key={step.n} delay={i * 0.06}>
                    <li className="flex gap-5 border-b border-[var(--border)] py-5">
                      <span
                        className="mono text-[0.72rem]"
                        style={{ color: "var(--accent)" }}
                      >
                        {step.n}
                      </span>
                      <div>
                        <h3 className="text-[1.02rem]">{step.t}</h3>
                        <p className="mt-1.5 text-sm muted">{step.b}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* FORM */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <h2 className="h3">Request a quote</h2>
              <p className="mt-2 text-sm muted">
                Opens in your email app, pre-filled — nothing is stored on this
                site.
              </p>

              <div className="mt-7 flex flex-col gap-4">
                <label className="block">
                  <span className="mono mb-2 block text-[0.7rem] uppercase tracking-[0.12em] muted">
                    Your name
                  </span>
                  <input
                    className="field"
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Kwame Mensah"
                  />
                </label>

                <label className="block">
                  <span className="mono mb-2 block text-[0.7rem] uppercase tracking-[0.12em] muted">
                    Email
                  </span>
                  <input
                    className="field"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@business.com"
                  />
                </label>

                <label className="block">
                  <span className="mono mb-2 block text-[0.7rem] uppercase tracking-[0.12em] muted">
                    Package of interest
                  </span>
                  <select
                    className="field"
                    value={form.package}
                    onChange={update("package")}
                  >
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} — {pkg.price} ({pkg.tagline})
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mono mb-2 block text-[0.7rem] uppercase tracking-[0.12em] muted">
                    About your project
                  </span>
                  <textarea
                    className="field"
                    rows={5}
                    required
                    value={form.message}
                    onChange={update("message")}
                    placeholder="What do you sell, what do you need the site to do, and when do you want to launch?"
                  />
                </label>

                <button type="submit" className="btn btn-primary mt-1 w-full">
                  Send enquiry
                </button>

                <p className="mono text-center text-[0.7rem] muted">
                  or email {site.email} directly
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
