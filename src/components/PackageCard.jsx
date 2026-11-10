import { Link } from "react-router-dom";
import { Icon, Reveal } from "./ui";

export function PriceCard({ pkg, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className={`card relative flex h-full flex-col ${
        pkg.popular ? "border-[var(--navy)] border-t-4 border-t-[var(--amber)]" : ""
      }`}
    >
      {pkg.popular && <span className="tag absolute -top-3 left-6">Most popular</span>}

      <div className="flex items-baseline justify-between gap-3">
        <h3 className="h3">{pkg.name}</h3>
        <span className="text-[0.72rem] font-semibold tracking-[0.1em] text-[var(--muted-2)] uppercase">
          {pkg.tagline}
        </span>
      </div>

      <div className="mt-5 flex items-end gap-2">
        <span className="text-[2.3rem] leading-none font-bold tracking-tight text-[var(--ink)]">
          {pkg.price}
        </span>
      </div>
      <p className="mt-2 text-[0.8rem] muted">
        one-off · typical build {pkg.delivery}
      </p>

      <p className="mt-4 text-sm muted">{pkg.pitch}</p>

      <hr className="rule my-6" />

      <ul className="flex flex-col gap-2.5 text-sm">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <Icon name="check" className="check" />
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
          className={`btn w-full ${pkg.popular ? "btn-primary" : "btn-outline"}`}
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
