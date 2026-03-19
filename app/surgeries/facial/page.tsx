import { ProcedureCard } from "@/components";
import { procedureCategories, procedures } from "@/data";
import { CtaBanner, HeroSection } from "@/sections";

const facialCategory = procedureCategories.find((category) => category.id === "facial");
const facialProcedures = procedures.filter((procedure) => procedure.categoryId === "facial");

export default function FacialSurgeriesPage() {
  return (
    <>
      <HeroSection
        title={facialCategory?.heroTitle ?? "Skin Clarity and Rejuvenation"}
        subtitle={facialCategory?.heroSubtitle ?? "Personalized facial skin treatments"}
        primaryCta={{ href: "/contact", label: "Book Skin Consultation" }}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="section-label text-xs uppercase text-secondary">Skin Treatments</p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            Clear, healthy, naturally radiant skin
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {facialProcedures.map((procedure) => (
            <ProcedureCard key={procedure.slug} procedure={procedure} />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Build your personalized facial treatment plan"
        description="Receive a consultation focused on skin health, texture, tone, and long-term confidence."
        ctaHref="/contact"
        ctaLabel="Request Skin Review"
      />
    </>
  );
}
