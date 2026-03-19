import { ProcedureCard } from "@/components";
import { procedureCategories, procedures } from "@/data";
import { CtaBanner, HeroSection } from "@/sections";

const bodyCategory = procedureCategories.find((category) => category.id === "body");
const bodyProcedures = procedures.filter((procedure) => procedure.categoryId === "body");

export default function BodySurgeriesPage() {
  return (
    <>
      <HeroSection
        title={bodyCategory?.heroTitle ?? "Body and Hair Wellness"}
        subtitle={bodyCategory?.heroSubtitle ?? "Targeted body-care and confidence treatments"}
        primaryCta={{ href: "/contact", label: "Book Body Consultation" }}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="section-label text-xs uppercase text-secondary">Body Treatments</p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            Balanced contours and smoother texture
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {bodyProcedures.map((procedure) => (
            <ProcedureCard key={procedure.slug} procedure={procedure} />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Explore advanced body-care options"
        description="Discover treatments designed to improve skin quality, contour confidence, and long-term comfort."
        ctaHref="/contact"
        ctaLabel="Request Body Review"
      />
    </>
  );
}
