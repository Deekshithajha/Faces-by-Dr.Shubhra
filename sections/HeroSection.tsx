import { Container } from "@/components/Container";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageStyle?: "panel" | "seamless";
  imagePosition?: "right" | "left";
  entryAnimation?: "reveal" | "glide";
}

export function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc = "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/dr-image/Screenshot%202025-07-21%20155603.png",
  imageAlt = "Dr. Shubhra Goel",
  imageFit = "cover",
  imageStyle = "panel",
  imagePosition = "right",
  entryAnimation = "reveal",
}: HeroSectionProps) {
  const isContainedImage = imageFit === "contain";
  const isSeamlessImage = imageStyle === "seamless";
  const isImageLeft = imagePosition === "left";
  const useGlideAnimation = entryAnimation === "glide";
  const textAnimationClass = useGlideAnimation ? "glide-in-right [animation-delay:220ms]" : "reveal-up";
  const imageAnimationClass = useGlideAnimation ? "glide-in-left [animation-delay:80ms]" : "reveal-up [animation-delay:120ms]";
  const imageClasses = isContainedImage ? "object-contain object-center" : "object-cover object-center";
  const imageWrapperClasses = isContainedImage
    ? `${imageAnimationClass} md:w-full md:max-w-[460px] ${isImageLeft ? "md:justify-self-start order-1" : "md:justify-self-end order-2"}`
    : isSeamlessImage
      ? `${imageAnimationClass} ${isImageLeft ? "order-1" : "order-2"}`
      : `${imageAnimationClass} elevated-panel rounded-2xl border border-border p-4 soft-shadow ${isImageLeft ? "order-1" : "order-2"}`;
  const imageContainerClasses = isContainedImage
    ? "relative h-full min-h-[420px] overflow-hidden md:min-h-[560px]"
    : isSeamlessImage
      ? "relative h-full min-h-[340px] overflow-hidden md:min-h-[460px]"
      : "relative h-full min-h-[340px] overflow-hidden rounded-xl border border-border md:min-h-[460px]";

  return (
    <section className="border-b border-border/70 bg-background">
      <Container className="grid gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-24 lg:py-28">
        <div className={`${textAnimationClass} flex flex-col gap-7 lg:gap-8 ${isImageLeft ? "order-2" : "order-1"}`}>
          <p className="section-label text-xs uppercase text-secondary">
            Advanced Dermatology and Oculofacial Care
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-primary md:text-6xl lg:text-[4.5rem]">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-text-secondary/95 md:text-lg">{subtitle}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            {primaryCta ? <PrimaryButton href={primaryCta.href}>{primaryCta.label}</PrimaryButton> : null}
            {secondaryCta ? <SecondaryButton href={secondaryCta.href}>{secondaryCta.label}</SecondaryButton> : null}
          </div>
        </div>
        <div className={imageWrapperClasses}>
          <div className={imageContainerClasses}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className={imageClasses}
              sizes="(min-width: 1024px) 38vw, (min-width: 768px) 45vw, 92vw"
              priority
            />
            {!isContainedImage && !isSeamlessImage ? (
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(8,11,16,0.26))]" />
            ) : null}
            {!isContainedImage && isSeamlessImage ? (
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_46%,rgba(8,11,16,0.22)_100%)]" />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
