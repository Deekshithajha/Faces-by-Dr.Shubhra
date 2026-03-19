import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import type { Treatment } from "@/types";

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
            title="Advanced care tailored to your skin, features, and goals"
            description="Explore diagnosis-led treatment categories designed to improve skin health, preserve natural expression, and elevate long-term confidence."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {treatments.map((treatment) => (
            <ServiceCard
              key={treatment.id}
              label="Treatment"
              title={treatment.title}
              description={treatment.shortDescription}
              href={`/procedures/${treatment.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
