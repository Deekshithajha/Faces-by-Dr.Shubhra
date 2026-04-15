import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

import { publishedLegacyTreatments } from "@/data/publishedTreatments";

interface ProcedurePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedLegacyTreatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: ProcedurePageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = publishedLegacyTreatments.find((item) => item.slug === slug);
  if (!treatment) {
    return { title: "Treatment | FACES" };
  }
  return {
    title: `${treatment.name} | FACES`,
    description: treatment.shortDescription,
  };
}

export default async function ProcedureRedirectPage({ params }: ProcedurePageProps) {
  const { slug } = await params;
  if (publishedLegacyTreatments.some((item) => item.slug === slug)) {
    permanentRedirect(`/service/our-treatment/${slug}`);
  }
  permanentRedirect("/service");
}
