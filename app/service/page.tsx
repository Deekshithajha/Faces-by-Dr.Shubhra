import { GoogleReviewsSection } from "@/components";
import { CtaBanner, HeroSection, TreatmentsCatalogSections } from "@/sections";

export default function LegacyServicePage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Explore the complete FACES treatment portfolio—structured as two clear sections for straightforward navigation."
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
      />

      <TreatmentsCatalogSections />

      <CtaBanner
        title="Need help choosing the right service?"
        description="Speak with our team for a personalised recommendation and treatment roadmap."
        ctaHref="/contact"
        ctaLabel="Talk to Our Team"
      />

      <GoogleReviewsSection />
    </>
  );
}
