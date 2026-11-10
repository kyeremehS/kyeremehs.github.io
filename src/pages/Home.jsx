import { Link } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { CTABand, Icon, Reveal, SectionHeading } from "../components/ui";
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

const serviceIcons = ["websites", "stores", "apps"];

const advantages = [
  {
    icon: "speed",
    title: "Speed that ranks",
    body: "Sub-two-second loads and clean code — what Google rewards and customers never wait on.",
  },
  {
    icon: "target",
    title: "Designed to convert",
    body: "Clear offers, obvious calls to action and friction-free mobile checkout on every page.",
  },
  {
    icon: "shield",
    title: "You own everything",
    body: "Code, domain and data are yours. No rented templates, no monthly lock-in fees.",
  },
  {
    icon: "grow",
    title: "Built to grow",
    body: "Start with a site, add a store, then a dashboard — the same foundation, no rebuild.",
  },
];

function HeroMockup() {
  const reduce = useReducedMotion();
  return (
    <Motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="overflow-hidden rounded-md border border-white/20 bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]">
        {/* browser chrome */}
        <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[var(--bg-alt)] px-4 py-2.5">
          <span className="flex gap-1.5">
            <i className="block h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
            <i className="block h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
            <i className="block h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
          </span>
          <span className="flex-1 truncate rounded bg-white px-3 py-1 text-center text-[0.7rem] muted">
            yourbusiness.com.gh
          </span>
          <span className="hidden text-[0.68rem] font-semibold text-[var(--navy)] sm:block">
            0.8s
          </span>
        </div>

        {/* page mock */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="block h-3 w-24 rounded-sm bg-[var(--navy)]" />
            <span className="flex gap-2">
              <i className="block h-2 w-8 rounded-sm bg-[var(--border-strong)]" />
              <i className="block h-2 w-8 rounded-sm bg-[var(--border-strong)]" />
              <i className="block h-2 w-12 rounded-sm bg-[var(--amber)]" />
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="block text-[0.6rem] font-bold tracking-[0.14em] text-[var(--amber-600)] uppercase">
                Open now
              </span>
              <span className="mt-2 block h-4 w-full max-w-[15rem] rounded-sm bg-[var(--navy)]" />
              <span className="mt-2 block h-4 w-3/4 rounded-sm bg-[var(--navy)]" />
              <span className="mt-3 block h-2 w-full rounded-sm bg-[var(--border-strong)]" />
              <span className="mt-1.5 block h-2 w-5/6 rounded-sm bg-[var(--border-strong)]" />
              <span className="mt-4 inline-block rounded-sm bg-[var(--amber)] px-4 py-1.5 text-[0.68rem] font-bold text-[var(--ink)]">
                Book now
              </span>
            </div>

            <div className="grid gap-2.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded border border-[var(--border)] bg-[var(--bg-alt)] p-2.5"
                >
                  <span className="block h-8 w-8 shrink-0 rounded-sm bg-[var(--navy)]/15" />
                  <span className="flex-1">
                    <span className="block h-2 w-16 rounded-sm bg-[var(--border-strong)]" />
                    <span className="mt-1.5 block h-1.5 w-10 rounded-sm bg-[var(--border)]" />
                  </span>
                  <span className="text-[0.6rem] font-bold text-[var(--navy)]">
                    GHS
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded border border-[var(--border)] bg-[var(--bg-alt)] px-3 py-2 text-[0.65rem] muted">
            <span>MTN MoMo · Paystack · Visa</span>
            <span className="font-bold text-[var(--navy)]">SSL ✓</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-3 hidden items-center gap-2 rounded border border-[var(--border)] bg-white px-4 py-2 text-[0.78rem] font-semibold text-[var(--ink)] shadow-lg sm:flex">
        <span className="dot" /> Live in 2–4 weeks
      </div>
    </Motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="band-navy relative overflow-hidden">
        <div className="container-x relative grid items-center gap-12 pt-28 pb-16 md:pt-36 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-5 flex items-center gap-2.5"
            >
              <span className="dot" /> Web development · Ghana
            </Motion.span>

            <Motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="h1"
            >
              Websites, online stores <strong>& web apps</strong> built to{" "}
              <span className="accent">sell</span>.
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
              <Link to="/contact" className="btn btn-amber">
                Get a free consultation
              </Link>
              <Link to="/pricing" className="btn btn-outline-white">
                See pricing
              </Link>
            </Motion.div>

            <Motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-12 hidden grid-cols-4 gap-6 border-t border-white/15 pt-8 md:grid"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[1.15rem] font-bold tracking-tight text-white">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[0.72rem] font-medium tracking-[0.06em] text-[var(--on-navy-muted)] uppercase">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </Motion.dl>
          </div>

          <HeroMockup />
        </div>
      </header>

      {/* STACK STRIP */}
      <section className="hidden border-b border-[var(--border)] bg-white md:block">
        <div className="container-x flex flex-wrap items-center gap-x-7 gap-y-3 py-4">
          <span className="text-[0.72rem] font-bold tracking-[0.14em] text-[var(--muted-2)] uppercase">
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
            <Link to="/services" className="text-link">
              Explore all services →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <Link to="/services" className="card flex h-full flex-col">
                <span className="icon-line">
                  <Icon name={serviceIcons[i]} />
                </span>
                <h3 className="h3">{service.title}</h3>
                <p className="mt-3 text-sm muted">{service.short}</p>
                <span className="mt-5 text-sm font-bold text-[var(--navy)]">
                  {service.price} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* POSITIONING (desktop) */}
      <section className="band-navy hidden md:block">
        <div className="container-x section">
          <SectionHeading
            eyebrow="Why it works"
            title={
              <>
                A beautiful website that
                <br /> doesn't sell is decoration.
              </>
            }
            intro="Most sites are slow, dated and invisible on Google — and they quietly turn customers away. Every build here is engineered for one outcome: more enquiries, more orders, more revenue."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div>
                  <span className="icon-line" style={{ background: "rgba(255,255,255,0.08)", color: "var(--amber)" }}>
                    <Icon name={item.icon} />
                  </span>
                  <h3 className="text-[1.05rem] text-white">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-[var(--on-navy-muted)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section band-alt border-y border-[var(--border)]">
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
            <Link to="/pricing" className="text-link">
              Compare packages in detail →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section container-x">
        <SectionHeading
          eyebrow="Process"
          title="Precision in every step."
          intro="No guesswork and no month-long silence. A structured path from first call to launch day."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col border-t-2 border-[var(--amber)] bg-white pt-5">
                <span className="num">{item.step}</span>
                <h3 className="mt-3 text-[1.05rem]">{item.title}</h3>
                <p className="mt-2.5 text-sm muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section band-alt border-t border-[var(--border)]">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
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
