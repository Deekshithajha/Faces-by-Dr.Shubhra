import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TreatmentEducationContent } from "@/components/TreatmentEducationContent";
import {
  EXPLORE_ALL_TREATMENTS_HEADING,
  UNIQUE_CLINICA_FAI_TREATMENTS_HEADING,
} from "@/data/treatmentSections";
import { getTreatmentEducation } from "@/data/treatmentEducationContent";
import { publishedLegacyTreatments, publishedTreatmentCatalog } from "@/data/publishedTreatments";
import { CtaBanner, HeroSection } from "@/sections";

interface LegacyTreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedLegacyTreatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: LegacyTreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = publishedLegacyTreatments.find((item) => item.slug === slug);
  const treatmentCatalog = publishedTreatmentCatalog.find((item) => item.slug === slug);

  if (!treatment || !treatmentCatalog) {
    return { title: "Treatment Not Found | FACES" };
  }

  return {
    title: `${treatmentCatalog.name} | FACES`,
    description: treatmentCatalog.description,
  };
}

export default async function LegacyTreatmentPage({ params }: LegacyTreatmentPageProps) {
  const { slug } = await params;
  const treatment = publishedLegacyTreatments.find((item) => item.slug === slug);
  const treatmentCatalog = publishedTreatmentCatalog.find((item) => item.slug === slug);

  if (!treatment || !treatmentCatalog) {
    notFound();
  }

  const sectionBadge =
    treatmentCatalog.catalogSection === "unique"
      ? UNIQUE_CLINICA_FAI_TREATMENTS_HEADING
      : EXPLORE_ALL_TREATMENTS_HEADING;

  const education = getTreatmentEducation({
    slug: treatment.slug,
    name: treatment.name,
    overview: treatment.overview,
    catalogSection: treatmentCatalog.catalogSection,
  });

  return (
    <>
      <HeroSection
        title={treatmentCatalog.name}
        subtitle={treatmentCatalog.description}
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
        imageSrc={treatmentCatalog.imageUrl}
        imageAlt={treatmentCatalog.name}
        imageOverlayLabel={sectionBadge}
      />

      <TreatmentEducationContent data={education} />

      <CtaBanner
        title="Speak with our care team about next steps"
        description="A dedicated consultation helps determine candidacy, timeline, and a plan aligned with your goals."
        ctaHref="/contact"
        ctaLabel="Schedule Private Consultation"
      />
    </>
  );
}
