import { ProcedureCategoryCard, ServiceCard } from "@/components";
import { procedureCategories } from "@/data";
import { getTreatments } from "@/lib/siteContent";
import { CtaBanner, HeroSection } from "@/sections";

export default async function SurgeriesPage() {
  const treatments = await getTreatments();

  return (
    <>
      <HeroSection
        title="Comprehensive dermatology and oculofacial treatment portfolio"
        subtitle="Explore medical, aesthetic, and eye-area treatment pathways designed for healthy skin and refined, natural-looking outcomes."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="section-label text-xs uppercase text-secondary">Categories</p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            Choose your area of care
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {procedureCategories.map((category) => (
            <ProcedureCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-10">
          <p className="section-label text-xs uppercase text-secondary">All Treatments</p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            Signature Faces treatments
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
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
      </section>

      <CtaBanner
        title="Not sure which treatment fits your goals?"
        description="Our consultation process helps match your concerns with the safest, most effective clinical strategy."
        ctaHref="/contact"
        ctaLabel="Talk to Our Team"
      />
    </>
  );
}
