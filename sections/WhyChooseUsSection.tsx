import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Individualized Planning",
    description:
      "Every treatment journey starts with diagnosis-led assessment and transparent expectations.",
  },
  {
    title: "Clinical Precision",
    description:
      "Modern evidence-based protocols and meticulous techniques prioritize safety and refined outcomes.",
  },
  {
    title: "Discreet Experience",
    description:
      "Private consultations, concierge guidance, and dignified care at every touchpoint.",
  },
  {
    title: "Natural Results Philosophy",
    description:
      "Enhancement focused on skin health, balance, identity preservation, and long-term confidence.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-surface py-20 md:py-24 lg:py-28">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Why Choose Us"
            title="Built on trust, precision, and calm care"
            description="Our approach combines dermatology and oculoplasty-led expertise with an understated luxury experience designed to keep patients informed, safe, and confident."
          />
        </div>
        <div className="overflow-hidden">
          <div className="why-choose-us-carousel-track flex w-max py-2">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex gap-6 pr-6">
                {reasons.map((reason) => (
                  <Card key={`${copyIndex}-${reason.title}`} className="h-full w-[260px] shrink-0 p-6 md:w-[300px]">
                    <div className="mb-3 h-8 w-8 rounded-full border border-accent/50 bg-accent/10" />
                    <h3 className="font-serif text-xl text-primary md:text-2xl">{reason.title}</h3>
                    <p className="mt-2 leading-7 text-text-secondary">{reason.description}</p>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
