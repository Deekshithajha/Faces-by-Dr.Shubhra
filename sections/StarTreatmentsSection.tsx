import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { UNIQUE_CLINICA_FAI_TREATMENTS_HEADING } from "@/data/treatmentSections";
import { starTreatments } from "@/data/starTreatments";

export function StarTreatmentsSection() {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container>
        <SectionHeading
          label={UNIQUE_CLINICA_FAI_TREATMENTS_HEADING}
          title="Featured signature protocols"
          description="Focused FACES pathways that patients most often request—each aligned to the Unique FACES Treatments portfolio."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {starTreatments.map((treatment) => (
            <article
              key={treatment.id}
              className="elevated-panel rounded-2xl border border-border p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-border">
                <Image
                  src={treatment.imageUrl}
                  alt={treatment.name}
                  width={176}
                  height={176}
                  className="h-full w-full object-cover"
                  sizes="176px"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-primary">{treatment.name}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{treatment.description}</p>
              <Link
                href={treatment.href}
                className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary-hover"
              >
                Explore treatment
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
