import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import logo from "../assets/1788655337857_edit_60410530266523.jpg.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Our Bakes" },
  { to: "/contact", label: "Order & Contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Trio Bee Bakes logo"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-honey"
            />
            <div className="leading-tight">
              <span className="font-display text-lg font-bold text-foreground">
                Trio Bee Bakes
              </span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Baked with Love
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  pathname === l.to ? "text-primary underline decoration-honey decoration-2 underline-offset-8" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-honey px-5 py-2 text-sm font-bold text-honey-foreground shadow-sm transition-transform hover:scale-105"
            >
              Order Now
            </Link>
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-4 pb-4 md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-lg font-bold">Trio Bee Bakes</span>
            </div>
            <p className="mt-3 text-sm opacity-80">
              Luciano's Lunch Line · Home-based bakery in Ibisi Township, Umzimkhulu. Fresh baking and delivery — baked with love since August 2021.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-bold">Visit Us</h3>
            <p className="mt-3 text-sm opacity-80">
              177 Ibisi Township
              <br />
              Umzimkhulu, KwaZulu-Natal
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-bold">Get In Touch</h3>
            <p className="mt-3 text-sm opacity-80">
              <a href="tel:+27787307624" className="hover:text-honey">078 730 7624</a>
              <br />
              <a href="mailto:lucianoslunchline@gmail.com" className="hover:text-honey">
                lucianoslunchline@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 py-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Trio Bee Bakes · Baked with Love
        </div>
      </footer>
    </div>
  );
}
