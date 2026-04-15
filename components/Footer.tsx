import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="hairline-top border-t border-border bg-[#070a0f]">
      <Container className="grid gap-10 py-16 text-sm text-text-secondary md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <div>
            <p className="font-serif text-2xl tracking-[0.15em] text-primary">FACES</p>
            <p className="text-xs tracking-[0.2em] text-secondary">Oculoplasty Surgeon</p>
          </div>
          <p className="max-w-md leading-7">
            Dr. Shubhra Goel – Oculoplasty Surgeon. Advanced dermatology and premium eye-area
            care with a patient-first experience focused on safe, natural-looking results.
          </p>
        </div>
        <div className="space-y-3">
          <p className="section-label text-xs uppercase text-secondary">Explore</p>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/service" className="transition-colors hover:text-primary">
              Our Services
            </Link>
            <Link href="/service#normal-services-grid" className="transition-colors hover:text-primary">
              Normal Services
            </Link>
            <Link href="/service#plexer-pro-grid" className="transition-colors hover:text-primary">
              Plexer Pro
            </Link>
            <Link href="/surgeries" className="transition-colors hover:text-primary">
              Treatments
            </Link>
            <Link href="/results" className="transition-colors hover:text-primary">
              Results
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="section-label text-xs uppercase text-secondary">Contact</p>
          <a
            href="https://maps.app.goo.gl/7wr3r91cz7cwLpieA"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-primary"
          >
            Banjara Hills, Hyderabad
          </a>
          <a href="tel:+916281117454" className="block transition-colors hover:text-primary">
            +91 62811 17454
          </a>
          <a href="mailto:contact@clinicafai.com" className="block transition-colors hover:text-primary">
            contact@clinicafai.com
          </a>
          <Link href="/contact" className="inline-block text-primary transition-colors hover:text-primary-hover">
            Book Consultation
          </Link>
        </div>
      </Container>
      <Container className="border-t border-border/70 py-5 text-xs tracking-wide text-text-secondary/80">
        <p>
          Dr. Shubhra Goel – Oculoplasty Surgeon · Faces — premium dermatology and eye-area care.
        </p>
      </Container>
    </footer>
  );
}
