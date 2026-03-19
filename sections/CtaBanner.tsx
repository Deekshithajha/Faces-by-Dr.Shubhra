import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/Button";

interface CtaBannerProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CtaBanner({ title, description, ctaLabel, ctaHref }: CtaBannerProps) {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="elevated-panel rounded-2xl border border-border px-8 py-12 md:px-12">
          <p className="section-label text-xs uppercase text-secondary">Consultation</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl lg:text-[3.35rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-text-secondary/95">{description}</p>
          <PrimaryButton href={ctaHref} className="mt-8">
            {ctaLabel}
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
