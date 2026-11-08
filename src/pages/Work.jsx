import { Link } from "react-router-dom";
import { CTABand, PageHeader, Reveal, SectionHeading } from "../components/ui";
import { socialLinks, workStatus } from "../data";

export default function Work() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Honest work, published as it ships."
        intro={workStatus.body}
      />

      <section className="section container-x">
        <div className="grid gap-6 sm:grid-cols-2">
          {workStatus.takingOn.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="card card-accent h-full">
                <span className="mono text-[0.72rem] muted">
                  0{i + 1}
                </span>
                <h3 className="h3 mt-4">{item.title}</h3>
                <p className="mt-3 text-sm muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section border-y border-[var(--border)] bg-[var(--bg-elev)]">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Case studies"
            title="What will appear here."
            intro="For each launch: the problem, the build, the stack, and the numbers — load time, enquiries, orders. No borrowed logos, no inflated claims."
          />
          <Reveal>
            <ol className="border-t border-[var(--border)]">
              {[
                {
                  n: "01",
                  t: "The brief",
                  b: "What the business was losing before the site existed.",
                },
                {
                  n: "02",
                  t: "The build",
                  b: "Pages, features and integrations, with screenshots.",
                },
                {
                  n: "03",
                  t: "The result",
                  b: "Speed, ranking and enquiry numbers after launch.",
                },
              ].map((item) => (
                <li
                  key={item.n}
                  className="flex gap-5 border-b border-[var(--border)] py-5"
                >
                  <span className="mono text-[0.72rem]" style={{ color: "var(--accent)" }}>
                    {item.n}
                  </span>
                  <div>
                    <h3 className="text-[1.02rem]">{item.t}</h3>
                    <p className="mt-1.5 text-sm muted">{item.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section container-x text-center">
        <Reveal className="mx-auto max-w-2xl">
          <span className="eyebrow justify-center flex">Code</span>
          <h2 className="h2 mt-4">Some of it is open.</h2>
          <p className="lead mt-5 mx-auto">
            Experiments, pipelines and tools I've built are on GitHub — a fair
            picture of how I write and ship code.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View GitHub
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Start a project
            </Link>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
