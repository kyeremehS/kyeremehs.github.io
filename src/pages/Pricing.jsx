import { Link } from "react-router-dom";
import { CTABand, PageHeader, Reveal, SectionHeading } from "../components/ui";
import { PackageGrid } from "../components/PackageCard";
import { faqs, includedInAll, packages, terms } from "../data";

const rows = [
  { label: "Pages & custom design", values: ["Up to 5 pages", "Unlimited*", "Unlimited*"] },
  { label: "Mobile-first build", values: [true, true, true] },
  { label: "Contact form + WhatsApp", values: [true, true, true] },
  { label: "On-page SEO & analytics", values: ["Basic", "Standard", "Advanced"] },
  { label: "Domain, hosting, SSL, 3 emails", values: [true, true, true] },
  { label: "Online store & checkout", values: [false, true, true] },
  { label: "Mobile Money + card payments", values: [false, true, true] },
  { label: "Blog / CMS publishing", values: [false, true, true] },
  { label: "User accounts & dashboards", values: [false, false, true] },
  { label: "Booking / approval workflows", values: [false, false, true] },
  { label: "Installable app (PWA)", values: [false, false, true] },
  { label: "Post-launch support", values: ["1 month", "3 months", "6 months priority"] },
];

function Cell({ value }) {
  if (value === true) return <span className="yes">✓</span>;
  if (value === false) return <span className="no">—</span>;
  return <span className="muted text-[0.85rem]">{value}</span>;
}

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Published prices. Fixed quotes."
        intro="Three packages, all with a year of domain, hosting, SSL and business emails included. Pick the closest fit — I'll confirm the exact scope on a short call before anything is charged."
      />

      <section className="container-x pt-14">
        <PackageGrid packages={packages} />
        <Reveal className="mt-8">
          <p className="mono text-center text-[0.75rem] muted">
            *Within a sensible page count for your project. Extra features are
            quoted before we build them, never after.
          </p>
        </Reveal>
      </section>

      {/* COMPARE */}
      <section className="section container-x">
        <SectionHeading
          eyebrow="Compare"
          title="What's in each package."
        />
        <Reveal className="mt-10 overflow-x-auto">
          <table className="compare">
            <thead>
              <tr>
                <th>Feature</th>
                {packages.map((pkg) => (
                  <th key={pkg.id}>
                    {pkg.name}
                    <span className="mt-1 block normal-case tracking-normal" style={{ color: "var(--accent)" }}>
                      {pkg.price}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {row.values.map((value, i) => (
                    <td key={`${row.label}-${i}`}>
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      {/* INCLUDED */}
      <section className="section border-y border-[var(--border)] bg-[var(--bg-elev)]">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Every package"
            title="Included as standard."
            intro="The parts people usually get charged extra for."
          />
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {includedInAll.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-[var(--border)] p-4 text-sm"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <span className="yes" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TERMS + FAQ */}
      <section className="section container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Terms" title="Straight terms." />
            <Reveal>
              <ul className="mt-8 border-t border-[var(--border)]">
                {terms.map((term) => (
                  <li
                    key={term}
                    className="flex gap-4 border-b border-[var(--border)] py-4 text-sm muted"
                  >
                    <span className="mono shrink-0" style={{ color: "var(--accent)" }}>
                      —
                    </span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <SectionHeading eyebrow="FAQ" title="Before you ask." />
            <Reveal>
              <div className="mt-8 border-t border-[var(--border)]">
                {faqs.slice(0, 6).map((faq) => (
                  <details key={faq.q} className="faq-item">
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-6">
        <Reveal>
          <div className="rounded-2xl border border-[var(--border)] p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <h3 className="h3">Not sure which package fits?</h3>
                <p className="mt-2 text-sm muted">
                  Describe your project in a few lines and I'll tell you the
                  smallest package that does the job.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Get a free quote
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
