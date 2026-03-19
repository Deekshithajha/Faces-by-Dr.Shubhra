import { getBeforeAfterCases, getTestimonials } from "@/lib/siteContent";
import { CtaBanner, HeroSection, ResultsGallerySection, TestimonialsSection } from "@/sections";

export default async function ResultsPage() {
  const [beforeAfterResults, testimonials] = await Promise.all([
    getBeforeAfterCases(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection
        title="Real patient outcomes"
        subtitle="A curated preview of before and after transformations created through personalized, diagnosis-led treatment planning."
        primaryCta={{ href: "/contact", label: "Start Your Journey" }}
      />
      <ResultsGallerySection items={beforeAfterResults} />
      <TestimonialsSection items={testimonials} />
      <CtaBanner
        title="Create your personalized transformation plan"
        description="Book a private consultation to discuss realistic outcomes and treatment options tailored to your goals."
        ctaHref="/contact"
        ctaLabel="Book Consultation"
      />
    </>
  );
}
