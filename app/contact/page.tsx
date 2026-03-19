import { clinicLocations } from "@/data";
import { ClinicLocationSection, ConsultationForm, HeroSection } from "@/sections";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Book your private consultation"
        subtitle="Connect with our team to plan your skin or oculofacial treatment journey with clarity, confidence, and concierge-level care."
        imageSrc="https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/dr-image/A%20detailed%20consultation%20is%20needed%20to%20understand%20the%20lifestyle,%20nutrition,%20work%20patterns,%20and%20ass.jpg"
        imageAlt="Consultation planning with Dr. Shubhra Goel"
        imageStyle="seamless"
        imagePosition="left"
        entryAnimation="glide"
      />
      <ConsultationForm />
      <ClinicLocationSection locations={clinicLocations} />
    </>
  );
}
