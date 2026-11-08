import { motion as Motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { site } from "../data";

export function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <Motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left" }) {
  return (
    <Reveal
      className={align === "center" ? "text-center flex flex-col items-center" : ""}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="h2">{title}</h2>
      {intro && <p className="lead mt-5">{intro}</p>}
    </Reveal>
  );
}

export function Logo({ to = "/" }) {
  return (
    <Link to={to} className="flex items-center gap-2.5 group" aria-label="Home">
      <span
        className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] font-semibold tracking-tight transition-colors group-hover:border-[var(--accent)]"
        style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
      >
        {site.initials}
      </span>
      <span
        className="hidden text-[0.95rem] font-medium tracking-tight sm:block"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {site.name}
      </span>
    </Link>
  );
}

export function CTABand() {
  return (
    <section className="container-x pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center sm:px-12">
          <div className="bg-glow" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow mb-4 justify-center flex">Next step</span>
            <h2 className="h2">Have a project in mind?</h2>
            <p className="lead mt-5 mx-auto">
              Tell me what you're building. You'll get a fixed quote, a timeline
              and a straight answer on whether I'm the right person for it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn btn-primary">
                Get a free quote
              </Link>
              <Link to="/pricing" className="btn btn-ghost">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="bg-grid" aria-hidden="true" />
      <div className="container-x relative pt-28 pb-14 md:pt-36 md:pb-20">
        <Reveal>
          <span className="eyebrow mb-4">{eyebrow}</span>
          <h1 className="h1 max-w-4xl">{title}</h1>
          {intro && <p className="lead mt-6">{intro}</p>}
        </Reveal>
      </div>
    </header>
  );
}
