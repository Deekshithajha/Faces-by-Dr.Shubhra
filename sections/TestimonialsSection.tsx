import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  items: Testimonial[];
}

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="What Our Clients Say"
            title="Experiences that inspire trust"
            description="Personal stories from patients who chose a calm, medically rigorous, and deeply personalized treatment journey."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
