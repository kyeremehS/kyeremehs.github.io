import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Logo } from "./ui";
import { nav, site, socialLinks } from "../data";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const overHero = pathname === "/" && !scrolled && !open;
  const classes = [
    "nav",
    overHero ? "nav-over nav-on-photo" : "nav-solid",
  ].join(" ");

  return (
    <nav className={classes}>
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Logo dark={overHero} onClick={closeMenu} />

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`btn hidden sm:inline-flex ${
              overHero ? "btn-amber" : "btn-primary"
            }`}
          >
            Get a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded border border-[var(--border-strong)] md:hidden ${
              overHero ? "text-white" : "text-[var(--ink)]"
            }`}
          >
            <span className="relative block h-3 w-4">
              <span
                className="absolute inset-x-0 top-0 h-[1.5px] bg-current transition-transform"
                style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }}
              />
              <span
                className="absolute inset-x-0 bottom-0 h-[1.5px] bg-current transition-transform"
                style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-white md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link px-1 py-2.5${isActive ? " active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={closeMenu} className="btn btn-primary mt-3">
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="band-alt border-t border-[var(--border)]">
      <div className="container-x grid gap-10 pt-14 pb-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm muted">
            Web development studio in Ghana. Websites, online stores and web apps
            — live in 2–4 weeks, and you own the code.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
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
          </div>
        </div>

        <div>
          <h3 className="label">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["Business websites", "/services"],
              ["Online stores", "/services"],
              ["Web apps & dashboards", "/services"],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="footer-link break-all">
                {site.email}
              </a>
            </li>
            <li className="muted">{site.location}</li>
            <li>
              <Link to="/contact" className="footer-link">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-x flex flex-col gap-2 py-5 text-xs muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>Built in Ghana · {site.email}</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
