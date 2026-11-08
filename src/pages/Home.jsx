import { Link } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import {
  CTABand,
  Reveal,
  SectionHeading,
} from "../components/ui";
import { PackageGrid } from "../components/PackageCard";
import {
  faqs,
  packages,
  process,
  services,
  site,
  stack,
  stats,
} from "../data";

function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <Motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className="overflow-hidden rounded-2xl border border-[var(--border-strong)]"
        style={{ backgroundColor: "var(--bg-elev)" }}
      >
        {/* browser chrome */}
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
          <span className="flex gap-1.5">
            <i className="block h-2.5 w-2.5 rounded-full bg-[#2c313a]" />
            <i className="block h-2.5 w-2.5 rounded-full bg-[#2c313a]" />
            <i className="block h-2.5 w-2.5 rounded-full bg-[#2c313a]" />
          </span>
          <span
            className="mono flex-1 truncate rounded-md border border-[var(--border)] px-3 py-1 text-[0.7rem] muted"
            style={{ backgroundColor: "var(--surface)" }}
          >
            yourbusiness.com.gh
          </span>
          <span className="mono hidden text-[0.65rem] yes sm:block">0.8s</span>
        </div>

        {/* page mock */}
        <div className="relative p-5">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-20 rounded bg-[#2c313a]" />
            <span className="flex gap-2">
              <i className="block h-2 w-8 rounded bg-[#22262d]" />
              <i className="block h-2 w-8 rounded bg-[#22262d]" />
              <i
                className="block h-2 w-12 rounded"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <span
                className="mono block text-[0.6rem] uppercase tracking-[0.16em]"
                style={{ color: "var(--accent)" }}
              >
                Open now
              </span>
              <span className="mt-2 block h-4 w-full max-w-[15rem] rounded bg-[#3a414c]" />
              <span className="mt-2 block h-4 w-3/4 rounded bg-[#3a414c]" />
              <span className="mt-3 block h-2 w-full rounded bg-[#22262d]" />
              <span className="mt-1.5 block h-2 w-5/6 rounded bg-[#22262d]" />
              <span
                className="mt-4 inline-block rounded-full px-4 py-1.5 text-[0.68rem] font-medium"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-ink)",
                }}
              >
                Book now
              </span>
            </div>

            <div className="grid gap-2.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-[var(--border)] p-2.5"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <span className="block h-8 w-8 shrink-0 rounded-md bg-[#2c313a]" />
                  <span className="flex-1">
                    <span className="block h-2 w-16 rounded bg-[#3a414c]" />
                    <span className="mt-1.5 block h-1.5 w-10 rounded bg-[#22262d]" />
                  </span>
                  <span
                    className="mono text-[0.6rem]"
                    style={{ color: "var(--accent)" }}
                  >
                    GHS
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mono mt-5 flex items-center justify-between rounded-lg border border-[var(--border)] px-3 py-2 text-[0.62rem]"
            style={{ backgroundColor: "var(--surface)", color: "var(--muted)" }}
          >
            <span>MTN MoMo · Paystack · Visa</span>
            <span style={{ color: "var(--accent)" }}>SSL ✓</span>
          </div>
        </div>
      </div>

      <div
        className="pill absolute -bottom-4 -left-3 hidden shadow-lg sm:block"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <span className="dot" /> Live in 2–4 weeks
      </div>
    </Motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-glow" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 pb-16 pt-28 md:pb-20 md:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <Motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pill mb-6 inline-flex"
            >
              <span className="dot" /> Web development · Ghana
            </Motion.span>

            <Motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="h1"
            >
              Websites that work
              <br />
              as hard as{" "}
              <span style={{ color: "var(--accent)" }}>you do</span>.
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="lead mt-6"
            >
              {site.intro}
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="btn btn-primary">
                Get a free consultation
              </Link>
              <Link to="/pricing" className="btn btn-ghost">
                See pricing
              </Link>
            </Motion.div>

            <Motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt
                    className="text-[1.15rem] tracking-tight"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {stat.value}
                  </dt>
                  <dd className="mono mt-1 text-[0.68rem] uppercase tracking-[0.1em] muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </Motion.dl>
          </div>

          <HeroVisual />
        </div>
      </header>

      {/* STACK STRIP */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-elev)]">
        <div className="container-x flex flex-wrap items-center gap-x-6 gap-y-3 py-5">
          <span className="mono text-[0.68rem] uppercase tracking-[0.16em] muted">
            Built with
          </span>
          {stack.map((item) => (
            <span key={item} className="text-sm muted">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What I build"
            title={
              <>
                Three ways to put your
                <br className="hidden md:block" /> business online.
              </>
            }
          />
          <Reveal>
            <Link to="/services" className="btn btn-ghost">
              Explore all services →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <Link to="/services" className="card card-accent block h-full">
                <span className="mono text-[0.72rem] muted">{service.index}</span>
                <h3 className="h3 mt-4">{service.title}</h3>
                <p className="mt-3 text-sm muted">{service.short}</p>
                <span
                  className="mono mt-6 inline-block text-[0.75rem]"
                  style={{ color: "var(--accent)" }}
                >
                  {service.price} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="section border-y border-[var(--border)] bg-[var(--bg-elev)]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why it works"
            title={
              <>
                A beautiful website that
                <br className="hidden md:block" /> doesn't sell is decoration.
              </>
            }
            intro="Most sites are slow, dated and invisible on Google — and they quietly turn customers away. Every build here is engineered for one outcome: more enquiries, more orders, more revenue."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Speed that ranks",
                body: "Sub-two-second loads and clean code — the thing Google rewards and customers never wait on.",
              },
              {
                title: "Designed to convert",
                body: "Clear offers, obvious calls to action and friction-free mobile checkout on every page.",
              },
              {
                title: "You own everything",
                body: "Code, domain and data are yours. No rented templates, no monthly hostage fees.",
              },
              {
                title: "Built to grow",
                body: "Start with a site, add a store, then a dashboard — the same foundation, no rebuild.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="card h-full">
                  <span
                    className="mono text-[0.72rem]"
                    style={{ color: "var(--accent)" }}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-[1.05rem]">{item.title}</h3>
                  <p className="mt-2.5 text-sm muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section container-x">
        <SectionHeading
          eyebrow="Process"
          title="Precision in every step."
          intro="No guesswork and no month-long silence. A structured path from first call to launch day."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.06} className="h-full">
              <div
                className="flex h-full flex-col p-6"
                style={{ backgroundColor: "var(--bg)" }}
              >
                <span
                  className="mono text-[0.72rem] uppercase tracking-[0.14em]"
                  style={{ color: "var(--accent)" }}
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-[1.05rem]">{item.title}</h3>
                <p className="mt-2.5 text-sm muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section border-y border-[var(--border)] bg-[var(--bg-elev)]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Investment"
            title="Transparent pricing, fixed quotes."
            intro="Published starting prices — no discovery fee, no vague estimates. What you're quoted is what you pay."
          />
          <div className="mt-12">
            <PackageGrid packages={packages} />
          </div>
          <Reveal className="mt-8 text-center">
            <Link to="/pricing" className="btn btn-ghost">
              Compare packages in detail →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Questions"
            title="Clarity first."
            intro="Everything clients usually ask before kickoff."
          />
          <Reveal>
            <div className="border-t border-[var(--border)]">
              {faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
