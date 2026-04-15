import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { getTreatmentCardCategory } from "@/data/treatmentCardCategories";
import { publishedTreatmentCatalog } from "@/data/publishedTreatments";
import type { Treatment } from "@/types";

const fallbackImageBySlug = new Map(
  publishedTreatmentCatalog.map((item) => [item.slug, item.imageUrl]),
);

interface ServicesGridSectionProps {
  treatments: Treatment[];
}

export function ServicesGridSection({ treatments }: ServicesGridSectionProps) {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Treatments"
            title="Where clinical depth meets a calm, editorial pace"
            description="A preview of pathways from Explore All Our Treatments—each page lists only what is offered at FACES, without inferred add-ons."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {treatments.map((treatment) => (
            <ServiceCard
              key={treatment.id}
              title={treatment.title}
              description={treatment.shortDescription}
              href={`/service/our-treatment/${treatment.slug}`}
              imageUrl={treatment.imageUrl ?? fallbackImageBySlug.get(treatment.slug) ?? null}
              imageAlt={treatment.title}
              categoryLabel={getTreatmentCardCategory(treatment.slug)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
