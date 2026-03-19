import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { DoctorProfile } from "@/types";
import Image from "next/image";

interface DoctorIntroductionSectionProps {
  doctor: DoctorProfile;
  imageSrc?: string;
  imageAlt?: string;
}

export function DoctorIntroductionSection({
  doctor,
  imageSrc = "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/dr-image/Image%2017-03-26%20at%2012.45%20PM.png",
  imageAlt = "Faces story portrait",
}: DoctorIntroductionSectionProps) {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal-up">
            <div className="relative h-[420px] overflow-hidden rounded-2xl md:h-[520px] lg:h-[580px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 46vw, (min-width: 768px) 52vw, 92vw"
              />
            </div>
          </div>
          <div className="reveal-up [animation-delay:100ms]">
            <SectionHeading
              label="Faces Story"
              title="Where clinical depth meets timeless refinement"
              description={doctor.bio}
            />
            <div className="mt-6 space-y-3 text-sm text-text-secondary">
              <p>{doctor.name}</p>
              <p>{doctor.credentials}</p>
              <p>{doctor.specialty}</p>
              <p>{doctor.experienceYears}+ years of focused clinical experience</p>
            </div>
            <p className="mt-8 border-l border-accent pl-5 font-serif text-2xl leading-relaxed text-primary">
              {doctor.philosophy}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
