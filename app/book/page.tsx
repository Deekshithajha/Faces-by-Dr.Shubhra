import { ConsultationForm, HeroSection } from "@/sections";

export default function BookPage() {
  return (
    <>
      <HeroSection
        title="Book your private appointment"
        subtitle="Share a few details and our care team will contact you to schedule a personalized consultation at your preferred time."
        imageSrc="https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/dr-image/Screenshot%202026-04-15%20at%207.19.07%20PM.png"
        imageAlt="Patient consultation booking at FACES"
        imageStyle="seamless"
        imagePosition="left"
        entryAnimation="glide"
      />
      <ConsultationForm />
    </>
  );
}
