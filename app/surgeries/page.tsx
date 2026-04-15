import { ServiceCard } from "@/components";
import { getTreatmentCardCategory } from "@/data/treatmentCardCategories";
import {
  EXPLORE_ALL_TREATMENTS_HEADING,
  UNIQUE_CLINICA_FAI_TREATMENTS_HEADING,
} from "@/data/treatmentSections";
import { publishedTreatmentCatalog } from "@/data/publishedTreatments";
import { CtaBanner, HeroSection } from "@/sections";

const exploreCatalog = publishedTreatmentCatalog.filter((item) => item.catalogSection === "explore");
const uniqueCatalog = publishedTreatmentCatalog.filter((item) => item.catalogSection === "unique");

export default function SurgeriesPage() {
  return (
    <>
      <HeroSection
        title="Treatment portfolio"
        subtitle="Every pathway below reflects the current FACES offering list—nothing inferred, nothing added beyond what is published here."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/service", label: "View Services Page" }}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="section-label text-xs uppercase text-secondary">
            {EXPLORE_ALL_TREATMENTS_HEADING}
          </p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            {EXPLORE_ALL_TREATMENTS_HEADING}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {exploreCatalog.map((treatment) => (
            <ServiceCard
              key={treatment.slug}
              title={treatment.name}
              description={treatment.description}
              href={`/service/our-treatment/${treatment.slug}`}
              imageUrl={treatment.imageUrl}
              imageAlt={treatment.name}
              categoryLabel={getTreatmentCardCategory(treatment.slug)}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-10">
          <p className="section-label text-xs uppercase text-secondary">
            {UNIQUE_CLINICA_FAI_TREATMENTS_HEADING}
          </p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            {UNIQUE_CLINICA_FAI_TREATMENTS_HEADING}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {uniqueCatalog.map((treatment) => (
            <ServiceCard
              key={treatment.slug}
              title={treatment.name}
              description={treatment.description}
              href={`/service/our-treatment/${treatment.slug}`}
              imageUrl={treatment.imageUrl}
              imageAlt={treatment.name}
              categoryLabel={getTreatmentCardCategory(treatment.slug)}
            />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Not sure which treatment fits your goals?"
        description="Our consultation process helps match your concerns with the safest, most appropriate clinical strategy from this portfolio."
        ctaHref="/contact"
        ctaLabel="Talk to Our Team"
      />
    </>
  );
}
