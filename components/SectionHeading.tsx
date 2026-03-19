interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const descriptionAlignment = align === "center" ? "mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="section-label text-xs uppercase text-secondary">{label}</p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-primary md:text-5xl lg:text-[3.35rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 text-text-secondary/95 md:text-lg ${descriptionAlignment}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
