"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { GOOGLE_REVIEWS_URL, googleReviews } from "@/data/googleReviews";

const REVIEWS_PER_PAGE = 3;
const TOTAL_REVIEW_COUNT = 120;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GoogleReviewsSection() {
  const [start, setStart] = useState(0);

  const next = () => {
    setStart((prev) => (prev + REVIEWS_PER_PAGE >= googleReviews.length ? 0 : prev + REVIEWS_PER_PAGE));
  };

  const prev = () => {
    setStart((prev) =>
      prev === 0 ? Math.max(0, googleReviews.length - REVIEWS_PER_PAGE) : prev - REVIEWS_PER_PAGE,
    );
  };

  const visible = googleReviews.slice(start, start + REVIEWS_PER_PAGE);

  const openGoogleReviews = () => {
    window.open(GOOGLE_REVIEWS_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hairline-top border-t border-border bg-background py-16 text-text-primary md:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-2">
            <h2 className="section-label font-serif text-2xl font-semibold uppercase text-text-primary">
              Excellent
            </h2>
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 shrink-0" />
              ))}
            </div>
            <p className="text-sm text-text-secondary/95">Based on {TOTAL_REVIEW_COUNT} reviews</p>
            <p className="mt-2 text-2xl font-medium leading-none" aria-label="Google">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </p>
            <button
              type="button"
              onClick={openGoogleReviews}
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold tracking-wide text-[#0b0d11] shadow-[0_10px_24px_rgba(200,169,126,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_30px_rgba(200,169,126,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Leave a Review
              <span className="text-[#0b0d11]/80" aria-hidden>
                ★
              </span>
            </button>
          </div>

          <div className="flex gap-3 self-start md:self-center">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45"
              aria-label="Previous reviews"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45"
              aria-label="Next reviews"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((review) => (
            <article
              key={review.id}
              className="elevated-panel soft-shadow rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_20px_48px_rgba(0,0,0,0.28)]"
            >
              <div className="mb-4 flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-sm font-semibold text-[#0b0d11]"
                  aria-hidden
                >
                  {review.initial}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-text-primary">{review.name}</h3>
                  <div className="mt-1 flex gap-0.5 text-primary">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5 shrink-0" />
                    ))}
                  </div>
                </div>
                <div
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/90 bg-background text-[10px] font-semibold text-text-secondary"
                  aria-hidden
                >
                  G
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary/95">{review.review}</p>
              <button
                type="button"
                onClick={openGoogleReviews}
                className="mt-3 text-sm font-medium text-primary underline-offset-2 transition hover:text-primary-hover hover:underline"
              >
                Read more
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
