import { Link } from "react-router-dom";
import { CTABand, PageHeader, Reveal, SectionHeading } from "../components/ui";
import { about, resume, site, socialLinks, stints } from "../data";
import workspace from "../assets/workspace.jpg";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>Samuel Kyeremeh — engineer, builder, one-person studio.</>}
        intro={about.intro}
      />

      {/* PHOTO */}
      <section>
        <img
          src={workspace}
          alt="A quiet workspace with a laptop, plant and a view over the city"
          width="1408"
          height="768"
          className="h-56 w-full border-b border-[var(--border)] object-cover md:h-96"
          loading="lazy"
        />
      </section>

      <section className="section container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            {about.story.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p className="lead mb-5">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal className="mt-8 flex flex-wrap gap-3">
              <a href={resume.url} className="btn btn-outline" download>
                {resume.label}
              </a>
              <Link to="/contact" className="btn btn-primary">
                Work with me
              </Link>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <span className="eyebrow">Experience</span>
              <ul className="mt-6 border-t border-[var(--border)]">
                {stints.map((stint) => (
                  <li
                    key={stint.company}
                    className="border-b border-[var(--border)] py-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-[0.98rem] font-semibold text-[var(--ink)]">
                        {stint.role}
                      </span>
                      <a
                        href={stint.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-sm font-semibold text-[var(--navy)]"
                      >
                        {stint.company}
                      </a>
                    </div>
                    <p className="mt-1 text-sm muted">{stint.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section band-alt border-y border-[var(--border)]">
        <div className="container-x">
          <SectionHeading eyebrow="Journey" title="How I got here." />
          <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {about.timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.07}>
                <div className="card h-full">
                  <span className="num">{item.year}</span>
                  <h3 className="mt-3 text-[1.02rem]">{item.title}</h3>
                  <p className="mt-1 text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--muted-2)] uppercase">
                    {item.organisation}
                  </p>
                  <p className="mt-3 text-sm muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS + EDUCATION */}
      <section className="section container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Skills" title="What I work with." />
            <Reveal>
              <dl className="mt-9 border-t border-[var(--border)]">
                {about.skills.map((skill) => (
                  <div
                    key={skill.category}
                    className="grid gap-1 border-b border-[var(--border)] py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                  >
                    <dt className="label mb-0 pt-1">{skill.category}</dt>
                    <dd className="text-sm">{skill.items}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div>
            <SectionHeading eyebrow="Education" title="Foundation." />
            <Reveal>
              <div className="card mt-9">
                <a
                  href={about.education.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline h3 inline-block"
                >
                  {about.education.institution}
                </a>
                <p className="mt-3 text-sm muted">{about.education.degree}</p>
                <p className="mt-1 text-[0.8rem] muted">
                  {about.education.period}
                </p>
              </div>

              <div className="card mt-6">
                <span className="eyebrow">Elsewhere</span>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {Object.entries(socialLinks).map(([key, href]) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill capitalize"
                    >
                      {key}
                    </a>
                  ))}
                  <a href={`mailto:${site.email}`} className="pill">
                    email
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
