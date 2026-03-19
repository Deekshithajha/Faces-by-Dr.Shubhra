import { ProcedureCard } from "@/components";
import { procedureCategories, procedures } from "@/data";
import { CtaBanner, HeroSection } from "@/sections";

const breastCategory = procedureCategories.find((category) => category.id === "breast");
const breastProcedures = procedures.filter((procedure) => procedure.categoryId === "breast");

export default function BreastSurgeriesPage() {
  return (
    <>
      <HeroSection
        title={breastCategory?.heroTitle ?? "Oculofacial and Feature Refinement"}
        subtitle={breastCategory?.heroSubtitle ?? "Tailored eye-area and facial harmony solutions"}
        primaryCta={{ href: "/contact", label: "Book Oculofacial Consultation" }}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="section-label text-xs uppercase text-secondary">Oculofacial Treatments</p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            Precision for expression, comfort, and elegance
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {breastProcedures.map((procedure) => (
            <ProcedureCard key={procedure.slug} procedure={procedure} />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Receive a personalized oculofacial roadmap"
        description="Plan your treatment with a focus on functional comfort, natural expression, and lifestyle compatibility."
        ctaHref="/contact"
        ctaLabel="Request Oculofacial Review"
      />
    </>
  );
}
