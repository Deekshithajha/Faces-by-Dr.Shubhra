import { Card } from "@/components/Card";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  item: Testimonial;
}

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <p className="font-serif text-4xl leading-none text-accent/80">&ldquo;</p>
      <p className="mt-3 leading-8 text-text-secondary/95">{item.quote}</p>
      <p className="mt-7 text-sm font-semibold tracking-wide text-primary">{item.patientName}</p>
      <p className="section-label mt-2 text-xs uppercase text-secondary">{item.procedure}</p>
    </Card>
  );
}
