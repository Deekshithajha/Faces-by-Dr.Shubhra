import { SecondaryButton, ServiceCard } from "@/components";
import { SectionHeading } from "@/components/SectionHeading";
import { VaultIcon } from "@/components/VaultIcon";
import {
  EXPLORE_ALL_TREATMENTS_HEADING,
  UNIQUE_CLINICA_FAI_TREATMENTS_HEADING,
} from "@/data/treatmentSections";
import { getTreatmentsCatalogView, type TreatmentServiceCardItem } from "@/data/treatmentsCatalogView";

interface ServiceSectionProps {
  sectionId: string;
  listId: string;
  eyebrow: string;
  title: string;
  description: string;
  viewAllHref: string;
  allServices: TreatmentServiceCardItem[];
}

function ServiceGrid({ items }: { items: TreatmentServiceCardItem[] }) {
  return (
    <div className="grid gap-7 md:grid-cols-3 md:gap-8">
      {items.map((card) => (
        <ServiceCard
          key={card.href}
          title={card.title}
          description={card.description}
          href={card.href}
          imageUrl={card.imageUrl}
          imageAlt={card.imageAlt}
          categoryLabel={card.categoryLabel}
        />
      ))}
    </div>
  );
}

function ServiceSection({
  sectionId,
  listId,
  eyebrow,
  title,
  description,
  viewAllHref,
  allServices,
}: ServiceSectionProps) {
  return (
    <section id={sectionId} className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-12 first:pt-20 md:py-16">
      <div className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-10">
        <div className="flex min-w-0 max-w-3xl flex-1 gap-4">
          <VaultIcon className="mt-2 shrink-0" />
          <div className="min-w-0 flex-1">
            <SectionHeading label={eyebrow} title={title} description={description} />
          </div>
        </div>
        <SecondaryButton href={viewAllHref} className="w-fit shrink-0 self-start md:self-auto">
          View all
        </SecondaryButton>
      </div>

      <div id={listId} className="scroll-mt-28">
        <p className="mb-8 max-w-2xl text-sm leading-7 text-text-secondary/95 md:mb-10 md:text-base md:leading-8">
          Every offering in this grid is part of the FACES treatment portfolio for this category.
        </p>
        <ServiceGrid items={allServices} />
      </div>
    </section>
  );
}

export function TreatmentsCatalogSections() {
  const { allExploreServices, allUniqueServices } = getTreatmentsCatalogView();

  return (
    <>
      <ServiceSection
        sectionId="explore-all-treatments"
        listId="explore-all-treatments-grid"
        eyebrow={EXPLORE_ALL_TREATMENTS_HEADING}
        title={EXPLORE_ALL_TREATMENTS_HEADING}
        description="Concern-led care across skin, periocular, and oculoplastic pathways—planned with candid counsel and medically grounded judgment."
        viewAllHref="/service#explore-all-treatments-grid"
        allServices={allExploreServices}
      />

      <ServiceSection
        sectionId="unique-clinica-fai-treatments"
        listId="unique-clinica-fai-treatments-grid"
        eyebrow={UNIQUE_CLINICA_FAI_TREATMENTS_HEADING}
        title={UNIQUE_CLINICA_FAI_TREATMENTS_HEADING}
        description="Signature FACES protocols and Plexr-led options, selected when they match your anatomy, goals, and downtime preferences."
        viewAllHref="/service#unique-clinica-fai-treatments-grid"
        allServices={allUniqueServices}
      />
    </>
  );
}
