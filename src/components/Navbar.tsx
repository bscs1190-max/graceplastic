import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "../data/site";
import { company } from "../config/company";

function Logo({ light }: { light: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${company.name} home`}>
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-[0_8px_20px_-10px_rgba(11,31,58,0.55)] ring-1 ring-inset ring-navy-800/10">
        <img
          src="/images/image.png"
          alt={`${company.name} logo`}
          className="h-full w-full object-contain p-0.5"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight transition-colors sm:text-xl ${
            light ? "text-white" : "text-navy-800"
          }`}
        >
          {company.name}
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] transition-colors ${
            light ? "text-steel-200/80" : "text-slate-400"
          }`}
        >
          Plastic Industry
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;
  const lightNav = !solid;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 shadow-soft backdrop-blur-md"
          : "bg-gradient-to-b from-navy-950/75 to-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6 lg:h-24">
        <Logo light={lightNav} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive
                    ? lightNav
                      ? "text-white"
                      : "text-navy-800"
                    : lightNav
                      ? "text-steel-100/80 hover:text-white"
                      : "text-slate-500 hover:text-navy-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-[2px] origin-left rounded-full bg-accent-500 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
              lightNav
                ? "bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white hover:text-navy-800"
                : "bg-navy-800 text-white hover:bg-accent-500"
            }`}
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border transition-colors lg:hidden ${
            solid
              ? "border-navy-800/15 text-navy-800 hover:bg-navy-800 hover:text-white"
              : "border-white/25 text-white hover:bg-white hover:text-navy-800"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-950 transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col py-4" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-white/5 py-4 text-base font-semibold transition-colors ${
                  isActive ? "text-accent-400" : "text-steel-100/85 hover:text-white"
                }`
              }
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              <span className="flex items-center gap-3">
                <span className="text-[0.7rem] font-bold text-white/30">
                  0{index + 1}
                </span>
                {item.label}
              </span>
              <ArrowUpRight className="h-4 w-4 opacity-60" />
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-5 mb-3 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
