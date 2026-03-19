import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { procedures } from "@/data";
import { CtaBanner, HeroSection } from "@/sections";

interface ProcedurePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return procedures.map((procedure) => ({ slug: procedure.slug }));
}

export async function generateMetadata({ params }: ProcedurePageProps): Promise<Metadata> {
  const { slug } = await params;
  const procedure = procedures.find((item) => item.slug === slug);

  if (!procedure) {
    return {
      title: "Treatment Not Found | Faces",
    };
  }

  return {
    title: `${procedure.name} | Faces`,
    description: procedure.shortDescription,
  };
}

export default async function ProcedurePage({ params }: ProcedurePageProps) {
  const { slug } = await params;
  const procedure = procedures.find((item) => item.slug === slug);

  if (!procedure) {
    notFound();
  }

  return (
    <>
      <HeroSection
        title={procedure.name}
        subtitle={procedure.shortDescription}
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
      />

      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="elevated-panel rounded-3xl border border-border p-8 md:p-12">
          <h2 className="font-serif text-4xl text-primary">Treatment Overview</h2>
          <p className="mt-5 leading-8 text-text-secondary">{procedure.overview}</p>

          <div className="mt-10 grid gap-5 rounded-2xl border border-border bg-background p-6 md:grid-cols-3">
            <div>
              <p className="section-label text-xs uppercase text-secondary">Typical Duration</p>
              <p className="mt-2 text-sm text-text-primary">{procedure.duration}</p>
            </div>
            <div>
              <p className="section-label text-xs uppercase text-secondary">Anesthesia</p>
              <p className="mt-2 text-sm text-text-primary">{procedure.anesthesia}</p>
            </div>
            <div>
              <p className="section-label text-xs uppercase text-secondary">Recovery Window</p>
              <p className="mt-2 text-sm text-text-primary">{procedure.recovery}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Speak with our care team about next steps"
        description="A dedicated consultation helps determine candidacy, timeline, and a plan aligned with your goals."
        ctaHref="/contact"
        ctaLabel="Schedule Private Consultation"
      />
    </>
  );
}
