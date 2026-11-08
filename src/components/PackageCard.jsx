import { Link } from "react-router-dom";
import { Reveal } from "./ui";

export function PriceCard({ pkg, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className={`card card-accent relative flex h-full flex-col ${
        pkg.popular ? "border-[rgba(194,242,74,0.45)] bg-[var(--surface-2)]" : ""
      }`}
    >
      {pkg.popular && (
        <span className="tag absolute -top-3 left-6">Most popular</span>
      )}

      <div className="flex items-baseline justify-between gap-3">
        <h3 className="h3">{pkg.name}</h3>
        <span className="mono text-[0.72rem] uppercase tracking-[0.12em] muted">
          {pkg.tagline}
        </span>
      </div>

      <div className="mt-5 flex items-end gap-2">
        <span
          className="text-[2.4rem] leading-none tracking-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          {pkg.price}
        </span>
      </div>
      <p className="mono mt-2 text-[0.75rem] muted">
        one-off · typical build {pkg.delivery}
      </p>

      <p className="mt-4 text-sm muted">{pkg.pitch}</p>

      <hr className="rule my-6" />

      <ul className="flex flex-col gap-2.5 text-sm">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <span className="yes mt-0.5 shrink-0" aria-hidden="true">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {pkg.missing.length > 0 && (
        <ul className="mt-5 flex flex-col gap-2 text-[0.82rem] muted">
          {pkg.missing.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-0.5 shrink-0" aria-hidden="true">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-7">
        <Link
          to="/contact"
          className={`btn w-full ${pkg.popular ? "btn-primary" : "btn-ghost"}`}
        >
          Start with {pkg.name}
        </Link>
      </div>
    </Reveal>
  );
}

export function PackageGrid({ packages }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {packages.map((pkg, i) => (
        <PriceCard key={pkg.id} pkg={pkg} delay={i * 0.08} />
      ))}
    </div>
  );
}
