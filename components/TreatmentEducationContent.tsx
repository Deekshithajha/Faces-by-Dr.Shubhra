import type { TreatmentEducation } from "@/types/treatmentEducation";

interface TreatmentEducationContentProps {
  data: TreatmentEducation;
}

const gradingToneClass: Record<string, string> = {
  calm: "border-emerald-900/40 bg-emerald-950/20",
  caution: "border-amber-900/40 bg-amber-950/20",
  alert: "border-red-900/40 bg-red-950/15",
};

/** Set to true to show Myth Buster and Treatment Options again. */
const SHOW_MYTH_AND_TREATMENT_OPTIONS = false;

export function TreatmentEducationContent({ data }: TreatmentEducationContentProps) {
  const proprietaryTitle = data.proprietaryTitle ?? "FACES Proprietary Treatment";
  const promiseTitle = data.promiseTitle ?? "The FACES Promise";

  return (
    <div className="mx-auto w-full max-w-5xl space-y-16 px-6 pb-20 pt-16 md:pt-20">
      <section className="hairline-top scroll-mt-28 pt-12" aria-labelledby="causes-heading">
        <h2 id="causes-heading" className="font-serif text-3xl text-primary md:text-4xl">
          {data.causesTitle}
        </h2>
        {data.causesSubtitle ? (
          <p className="mt-4 max-w-3xl text-base leading-8 text-text-secondary">{data.causesSubtitle}</p>
        ) : null}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.causes.map((item) => (
            <div
              key={item.title}
              className="elevated-panel rounded-2xl border border-border p-6 transition-all duration-300 hover:border-accent/50"
            >
              <div className="text-2xl" aria-hidden>
                {item.icon}
              </div>
              <h3 className="mt-4 font-medium text-text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline-top scroll-mt-28 pt-12" aria-labelledby="concerns-heading">
        <h2 id="concerns-heading" className="font-serif text-3xl text-primary md:text-4xl">
          Common Patient Concerns
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.patientConcerns.map((item) => (
            <div
              key={item.title}
              className="elevated-panel rounded-2xl border border-border p-6 text-center transition-all duration-300 hover:border-accent/50"
            >
              <div className="text-2xl" aria-hidden>
                {item.icon}
              </div>
              <h3 className="mt-4 font-medium text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {SHOW_MYTH_AND_TREATMENT_OPTIONS ? (
        <>
          <section className="hairline-top scroll-mt-28 pt-12" aria-labelledby="myth-heading">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="myth-heading" className="font-serif text-3xl text-primary md:text-4xl">
                Myth Buster
              </h2>
              {data.mythSubtitle ? (
                <p className="mt-4 text-base leading-8 text-text-secondary">{data.mythSubtitle}</p>
              ) : null}
            </div>
            <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-5">
              {data.mythBusters.map((item) => (
                <div
                  key={item.myth}
                  className="elevated-panel rounded-2xl border border-border p-6 md:p-8"
                >
                  <p className="section-label text-[10px] text-secondary">Myth</p>
                  <p className="mt-2 text-sm font-medium text-red-300/90 line-through decoration-red-400/60">
                    &ldquo;{item.myth}&rdquo;
                  </p>
                  <p className="section-label mt-6 text-[10px] text-secondary">Truth</p>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{item.truth}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="hairline-top scroll-mt-28 pt-12" aria-labelledby="options-heading">
            <h2 id="options-heading" className="font-serif text-3xl text-primary md:text-4xl">
              {data.treatmentOptionsTitle ?? "Treatment Options"}
            </h2>
            {data.treatmentOptionsIntro ? (
              <p className="mt-4 max-w-3xl text-base leading-8 text-text-secondary">{data.treatmentOptionsIntro}</p>
            ) : null}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.treatmentOptions.map((item) => (
                <div
                  key={item.name}
                  className="elevated-panel rounded-2xl border border-border p-6 text-center transition-all duration-300 hover:border-accent/50"
                >
                  <div className="text-2xl" aria-hidden>
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-medium text-primary">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
            {data.treatmentOptionsNote ? (
              <div className="mt-10 flex gap-4 rounded-2xl border border-border bg-background/80 p-6 md:p-8">
                <span className="text-xl shrink-0" aria-hidden>
                  💡
                </span>
                <div>
                  <h3 className="font-medium text-primary">{data.treatmentOptionsNote.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{data.treatmentOptionsNote.body}</p>
                </div>
              </div>
            ) : null}
          </section>
        </>
      ) : null}

      <section className="hairline-top scroll-mt-28 pt-12" aria-labelledby="proprietary-heading">
        <h2 id="proprietary-heading" className="font-serif text-3xl text-primary md:text-4xl">
          {proprietaryTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-text-secondary">{data.proprietarySubtitle}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {data.proprietaryCards.map((item) => (
            <div
              key={item.title}
              className="elevated-panel rounded-2xl border border-border p-6 text-center transition-all duration-300 hover:border-accent/50"
            >
              <div className="text-2xl" aria-hidden>
                {item.icon}
              </div>
              <h3 className="mt-4 font-medium text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="elevated-panel mt-12 rounded-2xl border border-border p-8 text-center md:p-10">
          <h3 className="font-serif text-2xl text-primary md:text-3xl">{promiseTitle}</h3>
          <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left text-sm leading-7 text-text-secondary">
            {data.promiseItems.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="shrink-0 text-primary" aria-hidden>
                  ✓
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {data.proprietaryGrading ? (
          <div className="mt-14">
            <h3 className="text-center font-serif text-2xl text-primary md:text-3xl">
              {data.proprietaryGrading.title}
            </h3>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {data.proprietaryGrading.levels.map((level) => (
                <div
                  key={level.label}
                  className={`rounded-2xl border p-6 text-center ${gradingToneClass[level.tone] ?? "border-border bg-background/60"}`}
                >
                  <h4 className="font-medium text-primary">{level.label}</h4>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="hairline-top scroll-mt-28 pt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="font-serif text-3xl text-primary md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          {data.faqs.map((faq) => (
            <details
              key={faq.question}
              className="elevated-panel group rounded-2xl border border-border px-5 py-4 open:border-accent/45"
            >
              <summary className="cursor-pointer list-none font-medium text-text-primary [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-secondary transition-transform group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-7 text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
