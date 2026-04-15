import { doctorProfile } from "@/data";
import { getTestimonials, getTreatments } from "@/lib/siteContent";
import {
  ConsultationForm,
  DoctorIntroductionSection,
  HeroSection,
  ServicesGridSection,
  StarTreatmentsSection,
  TestimonialsSection,
  YouTubeTestimonialsSection,
} from "@/sections";

export default async function Home() {
  const [treatments, testimonials] = await Promise.all([
    getTreatments(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection
        title="Faces brings advanced skin and eye-area care with an editorial calm"
        subtitle="Dr. Shubhra Goel – Oculoplasty Surgeon. Experience evidence-based dermatology, regenerative aesthetics, and expert periocular treatments in a warm, premium clinical environment."
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
        secondaryCta={{ href: "/surgeries", label: "Explore Treatments" }}
        imageSrc="https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/dr-image/Image%2017-03-26%20at%2012.19%20PM.jpeg"
        imageAlt="Dr. Shubhra Goel – Oculoplasty Surgeon portrait"
        imageFit="contain"
      />

      <DoctorIntroductionSection
        doctor={doctorProfile}
        imageSrc="https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/dr-image/Image%2017-03-26%20at%2012.45%20PM.png"
        imageAlt="Dr. Shubhra Goel – Oculoplasty Surgeon"
      />
      <StarTreatmentsSection />
      <ServicesGridSection treatments={treatments} />
      <TestimonialsSection items={testimonials} />
      <YouTubeTestimonialsSection />
      <ConsultationForm />
    </>
  );
}
