import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { legacyTreatmentCatalog } from "@/data/legacyTreatmentCatalog";
import { legacyTreatments } from "@/data/legacyTreatments";
import { CtaBanner, HeroSection } from "@/sections";

interface LegacyTreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return legacyTreatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: LegacyTreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = legacyTreatments.find((item) => item.slug === slug);
  const treatmentCatalog = legacyTreatmentCatalog.find((item) => item.slug === slug);

  if (!treatment || !treatmentCatalog) {
    return { title: "Treatment Not Found | Faces" };
  }

  return {
    title: `${treatmentCatalog.name} | Faces`,
    description: treatmentCatalog.description,
  };
}

export default async function LegacyTreatmentPage({
  params,
}: LegacyTreatmentPageProps) {
  const { slug } = await params;
  const treatment = legacyTreatments.find((item) => item.slug === slug);
  const treatmentCatalog = legacyTreatmentCatalog.find((item) => item.slug === slug);

  if (!treatment || !treatmentCatalog) {
    notFound();
  }

  return (
    <>
      <HeroSection
        title={treatmentCatalog.name}
        subtitle={treatmentCatalog.description}
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
      />

      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="elevated-panel rounded-3xl border border-border p-8 md:p-12">
          <div className="relative mb-8 h-72 overflow-hidden rounded-2xl border border-border">
            <Image
              src={treatmentCatalog.imageUrl}
              alt={treatmentCatalog.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 95vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full border border-border bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-secondary">
              {treatmentCatalog.category}
            </span>
          </div>

          <h2 className="font-serif text-4xl text-primary">Treatment Overview</h2>
          <p className="mt-5 leading-8 text-text-secondary">{treatmentCatalog.description}</p>

          <div className="mt-10 grid gap-5 rounded-2xl border border-border bg-background p-6 md:grid-cols-3">
            <div>
              <p className="section-label text-xs uppercase text-secondary">Typical Duration</p>
              <p className="mt-2 text-sm text-text-primary">{treatmentCatalog.duration}</p>
            </div>
            <div>
              <p className="section-label text-xs uppercase text-secondary">Anesthesia</p>
              <p className="mt-2 text-sm text-text-primary">{treatment.anesthesia}</p>
            </div>
            <div>
              <p className="section-label text-xs uppercase text-secondary">Recovery Window</p>
              <p className="mt-2 text-sm text-text-primary">{treatmentCatalog.recovery}</p>
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
