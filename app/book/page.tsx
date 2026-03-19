import { ConsultationForm, HeroSection } from "@/sections";

export default function BookPage() {
  return (
    <>
      <HeroSection
        title="Book your private appointment"
        subtitle="Share a few details and our care team will contact you to schedule a personalized consultation at your preferred time."
        imageSrc="https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/dr-image/A%20detailed%20consultation%20is%20needed%20to%20understand%20the%20lifestyle,%20nutrition,%20work%20patterns,%20and%20ass.jpg"
        imageAlt="Patient consultation booking at Faces"
        imageStyle="seamless"
        imagePosition="left"
        entryAnimation="glide"
      />
      <ConsultationForm />
    </>
  );
}
