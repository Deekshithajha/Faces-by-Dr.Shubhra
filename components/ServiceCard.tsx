import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { Card } from "@/components/Card";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string | null;
  imageAlt?: string;
  /** Shown as an uppercase bordered tag (e.g. Medical dermatology). */
  categoryLabel: string;
  bookHref?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  imageUrl,
  imageAlt,
  categoryLabel,
  bookHref = "/book",
}: ServiceCardProps) {
  const alt = imageAlt ?? title;

  return (
    <Card className="flex h-full flex-col overflow-hidden !p-0 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_20px_48px_rgba(0,0,0,0.28)]">
      {imageUrl ? (
        <Link
          href={href}
          className="relative block w-full shrink-0 overflow-hidden border-b border-border/80"
        >
          {/* Medium frame: fixed band height so cards stay balanced across breakpoints */}
          <div className="relative h-40 w-full sm:h-44 md:h-48">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.02]"
              sizes="(min-width: 1024px) 280px, (min-width: 768px) 30vw, 88vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent" />
          </div>
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 md:px-6 md:pb-6 md:pt-5">
        <h3 className="font-serif text-lg leading-snug tracking-tight text-text-primary md:text-xl">
          {title}
        </h3>
        <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-text-secondary/90">
          {description}
        </p>

        <div className="mt-5 flex justify-center">
          <span className="inline-block rounded-full border border-primary/35 bg-background/40 px-3.5 py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-primary/95">
            {categoryLabel}
          </span>
        </div>

        <div className="hairline-top mt-5 flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
          <SecondaryButton
            href={href}
            className="h-10 w-full shrink-0 px-4 text-xs font-semibold uppercase tracking-[0.12em] sm:w-auto sm:min-w-[9.5rem]"
          >
            Discover more
          </SecondaryButton>
          <PrimaryButton
            href={bookHref}
            className="h-10 w-full shrink-0 px-4 text-xs font-semibold uppercase tracking-[0.12em] sm:w-auto sm:min-w-[9.5rem]"
          >
            Book now
          </PrimaryButton>
        </div>
      </div>
    </Card>
  );
}
