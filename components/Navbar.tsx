"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { UNIQUE_CLINICA_FAI_TREATMENTS_HEADING } from "@/data/treatmentSections";

type NavLink = {
  href: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
};

const clinicPhoneTel = "tel:+916281117454";

const leftNavLinks: NavLink[] = [
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/service",
    label: "What we do",
    children: [
      { href: "/service#explore-all-treatments-grid", label: "Explore All Our Treatments" },
      { href: "/service#unique-clinica-fai-treatments-grid", label: UNIQUE_CLINICA_FAI_TREATMENTS_HEADING },
    ],
  },
];

const rightNavLinks: NavLink[] = [
  { href: clinicPhoneTel, label: "Contact" },
  { href: "/book", label: "Book" },
];

const mobileLinks: NavLink[] = [...leftNavLinks, ...rightNavLinks];
const instagramProfileUrl = "https://www.instagram.com/drshubhragoel/";

function isActivePath(pathname: string, href: string) {
  const [baseHref] = href.split("#");
  return baseHref === "/" ? pathname === "/" : pathname.startsWith(baseHref);
}

function navClassname(pathname: string, href: string, children?: NavLink["children"]) {
  const isActive = isActivePath(pathname, href) || Boolean(children?.some((item) => isActivePath(pathname, item.href)));
  return `text-sm tracking-[0.12em] uppercase transition-colors ${
    isActive ? "text-primary" : "text-text-secondary hover:text-primary"
  }`;
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "border-border bg-background/96 shadow-[0_8px_24px_rgba(0,0,0,0.22)]" : "border-border/70 bg-background/88"
      }`}
    >
      <Container className="relative py-4">
        <div className="hidden items-center md:flex">
          <nav className="flex w-1/3 items-center justify-start gap-10">
            {leftNavLinks.map((link) => (
              <div key={link.href} className="group relative">
                <Link href={link.href} className={navClassname(pathname, link.href, link.children)}>
                  {link.label}
                </Link>
                {link.children?.length ? (
                  <div className="invisible absolute left-0 top-full z-40 mt-3 min-w-56 rounded-xl border border-border bg-surface p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-lg px-3 py-2 text-xs tracking-[0.08em] uppercase transition-colors ${
                          isActivePath(pathname, child.href)
                            ? "text-primary"
                            : "text-text-secondary hover:bg-background hover:text-primary"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex w-1/3 items-center justify-center">
            <Link
              href="/"
              className="flex flex-col items-center leading-none text-primary transition-colors hover:text-primary-hover"
            >
              <span className="font-serif text-[1.75rem] uppercase tracking-[0.14em] lg:text-3xl">FACES</span>
              <span className="mt-1 text-[0.56rem] tracking-wide text-secondary">
                by Dr. Shubhra Goel
              </span>
            </Link>
          </div>

          <nav className="flex w-1/3 items-center justify-end gap-10 pr-12">
            {rightNavLinks.map((link) =>
              link.href.startsWith("tel:") ? (
                <a key={link.href} href={link.href} className={navClassname(pathname, link.href)}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={navClassname(pathname, link.href)}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Instagram profile"
            className="absolute right-6 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-primary transition-colors hover:text-primary-hover lg:right-10"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex flex-col items-center leading-none text-primary">
              <span className="font-serif text-xl uppercase tracking-[0.12em]">FACES</span>
              <span className="mt-1 text-[0.5rem] tracking-wide text-secondary">
                by Dr. Shubhra Goel
              </span>
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-primary"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? "X" : "Menu"}
            </button>
          </div>
          {mobileOpen ? (
            <nav className="mt-4 rounded-xl border border-border bg-surface p-4">
              <div className="flex flex-col gap-3">
                {mobileLinks.map((link) => (
                  <div key={link.href} className="flex flex-col gap-2">
                    {link.href.startsWith("tel:") ? (
                      <a
                        href={link.href}
                        className={navClassname(pathname, link.href, link.children)}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={navClassname(pathname, link.href, link.children)}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`pl-4 text-xs tracking-widest uppercase transition-colors ${
                          isActivePath(pathname, child.href)
                            ? "text-primary"
                            : "text-text-secondary hover:text-primary"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pt-2 text-xs tracking-[0.12em] uppercase text-secondary transition-colors hover:text-primary"
                >
                  Instagram
                </a>
              </div>
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
