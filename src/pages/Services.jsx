import { Link } from "react-router-dom";
import { CTABand, PageHeader, Reveal, SectionHeading } from "../components/ui";
import { services, stack, terms } from "../data";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to sell online."
        intro="Websites, online stores and web apps — designed, built and launched by one person who stays accountable from first call to post-launch support."
      />

      <section className="container-x">
        {services.map((service, i) => (
          <div
            key={service.id}
            className={`grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 ${
              i > 0 ? "border-t border-[var(--border)]" : ""
            }`}
            id={service.id}
          >
            <Reveal>
              <span className="mono text-[0.72rem] muted">{service.index}</span>
              <h2 className="h2 mt-3">{service.title}</h2>
              <p className="lead mt-5">{service.body}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span
                  className="mono text-[0.95rem]"
                  style={{ color: "var(--accent)" }}
                >
                  {service.price}
                </span>
                <span className="pill">{service.deliverable}</span>
              </div>
              <Link to="/contact" className="btn btn-ghost mt-7">
                Discuss this →
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-[var(--border)] p-4 text-sm"
                    style={{ backgroundColor: "var(--surface)" }}
                  >
                    <span
                      className="mono block text-[0.7rem]"
                      style={{ color: "var(--accent)" }}
                    >
                      ✓
                    </span>
                    <span className="mt-2 block">{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      {/* STACK */}
      <section className="section border-y border-[var(--border)] bg-[var(--bg-elev)]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Tech stack"
            title="Modern, boring, reliable."
            intro="Proven tools with long support lives — nothing experimental running your business."
          />
          <Reveal className="mt-9">
            <div className="flex flex-wrap gap-2.5">
              {stack.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCOPE */}
      <section className="section container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Good to know"
            title="Scope, without the fine print."
          />
          <Reveal>
            <ul className="border-t border-[var(--border)]">
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
      </section>

      <CTABand />
    </>
  );
}
