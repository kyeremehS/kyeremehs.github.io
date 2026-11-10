import { motion as Motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { site } from "../data";

/* ---------- motion ---------- */

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

/* ---------- icons (thin line) ---------- */

const ICONS = {
  websites: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M6.5 6.75h.01M9.25 6.75h.01" />
    </>
  ),
  stores: (
    <>
      <path d="M4.5 9.5V19a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.5" />
      <path d="M3.2 9.5 5 4.5h14l1.8 5a2.6 2.6 0 0 1-4.55 1.9 2.6 2.6 0 0 1-4.45 0 2.6 2.6 0 0 1-4.45 0A2.6 2.6 0 0 1 3.2 9.5Z" />
      <path d="M9.5 20v-5.5h5V20" />
    </>
  ),
  apps: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M9 4.5v15" />
      <path d="M12 9h5M12 12.5h5M12 16h3" />
    </>
  ),
  speed: <path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12L13 3Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  shield: (
    <path d="M12 3.5 5 6.2v5.4c0 4.3 2.9 7.4 7 8.9 4.1-1.5 7-4.6 7-8.9V6.2L12 3.5Z" />
  ),
  grow: (
    <>
      <path d="M4 17l5-5 4 3 6-7" />
      <path d="M15 8h4v4" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.4 2" />
    </>
  ),
};

export function Icon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      {ICONS[name]}
    </svg>
  );
}

/* ---------- structure ---------- */

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

export function Logo({ to = "/", dark = false, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`logo${dark ? " logo-on-dark" : ""}`}
      aria-label={`${site.name} — home`}
    >
      <span className="logo-mark">{site.initials}</span>
      <span className="logo-text">{site.name}</span>
    </Link>
  );
}

export function CTABand() {
  return (
    <section className="band-navy">
      <div className="container-x section text-center">
        <Reveal className="flex flex-col items-center">
          <span className="eyebrow mb-4">Next step</span>
          <h2 className="h2">Have a project in mind?</h2>
          <p className="lead mt-5 mx-auto">
            Tell me what you're building. You'll get a fixed quote, a timeline and
            a straight answer on whether I'm the right person for it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn btn-amber">
              Get a free quote
            </Link>
            <Link to="/pricing" className="btn btn-outline-white">
              See pricing
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="band-alt border-b border-[var(--border)]">
      <div className="container-x pt-28 pb-12 md:pt-36 md:pb-16">
        <Reveal>
          <span className="eyebrow mb-4">{eyebrow}</span>
          <h1 className="h1 max-w-4xl">{title}</h1>
          {intro && <p className="lead mt-6">{intro}</p>}
        </Reveal>
      </div>
    </header>
  );
}
