import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { BeforeAfterResult } from "@/types";

interface ResultsGallerySectionProps {
  items: BeforeAfterResult[];
  showViewAll?: boolean;
}

export function ResultsGallerySection({ items, showViewAll = false }: ResultsGallerySectionProps) {
  return (
    <section className="bg-surface py-20 md:py-24 lg:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            label="Results Showcase"
            title="Before & after highlights"
            description="A curated selection of transformations focused on natural proportions, harmony, and patient confidence."
          />
          {showViewAll ? (
            <Link href="/results" className="text-sm font-medium text-primary transition-colors hover:text-primary-hover">
              View full gallery
            </Link>
          ) : null}
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          {["Facial", "Body", "Oculofacial"].map((filter) => (
            <button
              key={filter}
              type="button"
              className="h-10 rounded-lg border border-border bg-background px-4 text-xs uppercase tracking-[0.18em] text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-primary"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden p-0">
              {item.beforeImageUrl || item.afterImageUrl ? (
                <div className="grid h-52 grid-cols-2 border-b border-border">
                  <div className="relative">
                    {item.beforeImageUrl ? (
                      <Image
                        src={item.beforeImageUrl}
                        alt={`${item.title} before`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 16vw, 50vw"
                      />
                    ) : (
                      <div className="h-full bg-[linear-gradient(145deg,rgba(200,169,126,0.16),rgba(9,12,18,1)_65%)]" />
                    )}
                  </div>
                  <div className="relative border-l border-border">
                    {item.afterImageUrl ? (
                      <Image
                        src={item.afterImageUrl}
                        alt={`${item.title} after`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 16vw, 50vw"
                      />
                    ) : (
                      <div className="h-full bg-[linear-gradient(145deg,rgba(95,127,134,0.25),rgba(9,12,18,1)_70%)]" />
                    )}
                  </div>
                </div>
              ) : (
                <div className="h-52 border-b border-border bg-[linear-gradient(145deg,rgba(200,169,126,0.16),rgba(9,12,18,1)_65%,rgba(95,127,134,0.25))]" />
              )}
              <div className="space-y-3 p-6">
                <h3 className="font-serif text-2xl text-primary">{item.title}</h3>
                <p className="text-sm leading-7 text-text-secondary">{item.description}</p>
                <p className="section-label text-xs uppercase text-secondary">{item.timeframe}</p>
              </div>
            </Card>
          ))}
        </div>
        {items.length === 0 ? (
          <p className="rounded-xl border border-border bg-background px-6 py-5 text-sm text-text-secondary">
            Results will appear here once cases are published.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
