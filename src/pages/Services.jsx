import { Link } from "react-router-dom";
import { CTABand, Icon, PageHeader, Reveal, SectionHeading } from "../components/ui";
import { services, stack, terms } from "../data";
import teamCollab from "../assets/team-collab.jpg";

const serviceIcons = ["websites", "stores", "apps"];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to sell online."
        intro="Websites, online stores and web apps — designed, built and launched by one person who stays accountable from first call to post-launch support."
      />

      {/* PHOTO */}
      <section>
        <img
          src={teamCollab}
          alt="Three colleagues reviewing a website together on a laptop in an office"
          width="1408"
          height="768"
          className="h-60 w-full border-b border-[var(--border)] object-cover md:h-[440px]"
        />
      </section>

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
              <span className="icon-line">
                <Icon name={serviceIcons[i]} />
              </span>
              <span className="num">{service.index}</span>
              <h2 className="h2 mt-3">{service.title}</h2>
              <p className="lead mt-5">{service.body}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <span className="text-lg font-bold text-[var(--navy)]">
                  {service.price}
                </span>
                <span className="pill">{service.deliverable}</span>
              </div>
              <Link to="/contact" className="btn btn-primary mt-7">
                Discuss this
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <Icon name="check" className="check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </section>

      {/* STACK */}
      <section className="section band-alt border-y border-[var(--border)]">
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
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--amber)]" />
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
