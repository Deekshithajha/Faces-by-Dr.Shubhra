"use client";

import { useCallback, useId, useState } from "react";

import { PrimaryButton } from "@/components/Button";
import { Container } from "@/components/Container";
import {
  type WhyChooseUsTabId,
  whyChooseUsDivisionMeta,
  whyChooseUsFaqs,
} from "@/data/whyChooseUsFaqs";

const TAB_ORDER: WhyChooseUsTabId[] = ["faces", "treatment", "admin"];

function IconFaces({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Sparkles + dots — reference layout: upper-left + lower-right */}
      <g opacity={0.92}>
        <path
          d="M6.75 6.8v3.1M4.2 8.35h5.1M24.9 20.1v2.55M23.15 21.38h3.5"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <circle cx="5.05" cy="10.35" r="0.52" fill="currentColor" />
        <circle cx="26.4" cy="19.75" r="0.46" fill="currentColor" />
        <circle cx="23.05" cy="23.15" r="0.4" fill="currentColor" />
      </g>

      {/* Secondary hair curve behind crown */}
      <path
        d="M11.35 12.1c-1.15-1.25-.95-3.05.6-4.2 1.35-1.05 3.35-.95 4.55.35"
        stroke="currentColor"
        strokeWidth="1.22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Primary hair: nape → back of head → over crown → forehead */}
      <path
        d="M13.15 25.35c-1.9-1.15-2.45-3.55-1.7-5.6.6-1.85 1.95-3.35 3.45-4.45 2-1.45 4.55-2.1 7.05-1.75 2.15.3 4.1 1.4 5.25 3.25 1.25 2 1.35 4.55.15 6.55"
        stroke="currentColor"
        strokeWidth="1.28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Face in profile (facing right): forehead → nose → lips → chin */}
      <path
        d="M20.85 9.95c1.4.65 2.5 2.1 2.85 3.75.4 1.9-.15 3.85-1.45 5.25-.7.75-1.6 1.25-2.55 1.45-.5.9-1.3 1.65-2.3 2.05-1 .4-2.1.35-3.05-.1"
        stroke="currentColor"
        strokeWidth="1.28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Front of neck from chin */}
      <path
        d="M16.25 19.55c-1.25 1.4-2 3.15-2.05 4.95-.05 1.4.35 2.75 1.15 3.9"
        stroke="currentColor"
        strokeWidth="1.22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Eye / brow hint */}
      <path
        d="M18.5 12.9c.8-.18 1.65-.12 2.4.25"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTreatment({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Heart + medical cross (caring treatment — matches supplied artwork) */}
      <path
        d="M16 8.15c-.48 0-.92.2-1.25.55l-.02.02c-.6-.78-1.68-1.22-2.72-1-1.28.26-2.18 1.3-2.22 2.55-.04 1.52 1.08 2.72 2.42 4.02L16 16.35l3.81-2.96c1.34-1.3 2.46-2.5 2.42-4.02-.04-1.25-.94-2.29-2.22-2.55-1.04-.22-2.12.22-2.72 1l-.02-.02c-.33-.35-.77-.55-1.25-.55z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M16 10.45v3.45M14.15 12.18h3.7"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      {/* Open hand supporting the heart — profile, palm up */}
      <path
        d="M9.85 26.35l1.25-3.95a2.2 2.2 0 0 1 2.1-1.62h.18c.55 1.35 1.65 2.45 3 2.95a5.6 5.6 0 0 0 4.45.05 5.5 5.5 0 0 0 2.95-1.55c.78-.72 1.92-.82 2.82-.28l2.22 1.28"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.9 27.15l1.15-2.95M9.55 27.4l1.05-2.75"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAdmin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="9"
        y="7"
        width="14"
        height="19"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M12 12h8M12 17h6M12 22h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const DIVISION_ICONS: Record<WhyChooseUsTabId, typeof IconFaces> = {
  faces: IconFaces,
  treatment: IconTreatment,
  admin: IconAdmin,
};

export function WhyChooseUsSection() {
  const baseId = useId();
  const [activeTab, setActiveTab] = useState<WhyChooseUsTabId | null>(null);
  const [hoverPreviewTab, setHoverPreviewTab] = useState<WhyChooseUsTabId | null>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = useCallback((id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const selectTab = useCallback((tabId: WhyChooseUsTabId) => {
    setActiveTab((current) => {
      if (current === tabId) {
        return null;
      }
      return tabId;
    });
    setOpenItems({});
    setHoverPreviewTab(null);
  }, []);

  const handleCardEnter = useCallback((tabId: WhyChooseUsTabId) => {
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
      setHoverPreviewTab(tabId);
    }
  }, []);

  const handleTablistLeave = useCallback(() => {
    setHoverPreviewTab(null);
  }, []);

  const faqs = activeTab ? whyChooseUsFaqs[activeTab] : [];

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_45%_at_50%_-8%,rgba(200,169,126,0.07),transparent_55%)]"
        aria-hidden
      />

      <Container className="relative">
        <header className="mb-12 max-w-3xl md:mb-14 lg:mb-16">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="mt-0.5 h-px w-10 shrink-0 self-center bg-primary md:w-12" aria-hidden />
            <p className="section-label m-0 text-xs uppercase leading-normal tracking-[0.22em] text-secondary">
              Why choose us
            </p>
          </div>
          <h2 className="mt-5 max-w-xl text-pretty font-serif text-4xl leading-[1.22] text-primary md:mt-6 md:max-w-2xl md:text-5xl md:leading-[1.2] lg:mt-7 lg:text-[3.35rem] lg:leading-[1.18]">
            Built on trust, precision, and calm care
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary/95 md:mt-7 md:text-lg">
            Our approach combines dermatology and oculoplasty-led expertise with an understated
            luxury experience designed to keep patients informed, safe, and confident.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Knowledge center divisions"
          className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6"
          onMouseLeave={handleTablistLeave}
        >
          {TAB_ORDER.map((tabId) => {
            const isSelected = activeTab === tabId;
            const isHoverPreview = hoverPreviewTab === tabId && !isSelected;
            const showExpandedLayout = isSelected || isHoverPreview;
            const division = whyChooseUsDivisionMeta[tabId];
            const Icon = DIVISION_ICONS[tabId];

            const cardSurface = isSelected
              ? "border-primary/50 bg-primary shadow-[0_20px_50px_rgba(200,169,126,0.18)]"
              : isHoverPreview
                ? "border-primary/45 bg-primary/[0.88] shadow-[0_18px_44px_rgba(200,169,126,0.16)]"
                : "border-border/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.03),rgba(255,255,255,0)),var(--surface)] hover:border-primary/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]";

            return (
              <button
                key={tabId}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tabId}`}
                aria-selected={isSelected}
                aria-controls={`${baseId}-panel`}
                tabIndex={0}
                onClick={() => selectTab(tabId)}
                onMouseEnter={() => handleCardEnter(tabId)}
                className={`group relative flex min-h-[300px] flex-col rounded-2xl border text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-h-[340px] ${cardSurface}`}
              >
                {showExpandedLayout ? (
                  <div className="flex h-full min-h-0 flex-1 flex-col px-7 pb-9 pt-9 text-left text-[#0b0d11] md:px-8 md:pb-10 md:pt-10">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#0b0d11]/80">
                      {division.title}
                    </p>
                    <p className="mt-5 min-h-0 flex-1 text-sm leading-relaxed text-[#0b0d11]/92 md:mt-6 md:text-[0.9375rem] md:leading-[1.75]">
                      {division.teaser}
                    </p>
                    <div className="mt-8 flex shrink-0 justify-center md:mt-10">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/35 text-[#0b0d11]">
                        <Icon className="h-7 w-7" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-[300px] flex-1 flex-col items-center px-7 pb-10 pt-11 md:min-h-[340px] md:px-8 md:pb-11 md:pt-12">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/12 ring-1 ring-primary/35 text-primary transition-colors duration-300 group-hover:bg-primary/18">
                      <Icon className="h-8 w-8" />
                    </span>
                    <h3 className="mt-7 shrink-0 font-sans text-lg font-semibold tracking-tight text-text-primary md:mt-8 md:text-xl">
                      {division.title}
                    </h3>
                    <span className="mt-4 h-px w-10 shrink-0 bg-primary/80" aria-hidden />
                    <p className="mt-auto shrink-0 pt-6 text-center text-[0.62rem] uppercase leading-relaxed tracking-[0.2em] text-secondary md:pt-8">
                      Select to view answers
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={activeTab ? `${baseId}-tab-${activeTab}` : undefined}
            aria-label={activeTab ? undefined : "Common questions"}
            className="rounded-2xl border border-border/50 bg-[linear-gradient(160deg,rgba(255,255,255,0.02),transparent),var(--surface)] px-4 py-3 md:px-8 md:py-5"
          >
            {activeTab === null ? (
              <p className="px-2 py-12 text-center text-base leading-relaxed text-text-secondary md:py-14 md:text-lg">
                Select <span className="text-text-primary">FACES</span>,{" "}
                <span className="text-text-primary">Treatment</span>, or{" "}
                <span className="text-text-primary">Admin</span> above to view questions and answers.
              </p>
            ) : (
              <ul className="divide-y divide-border/40">
                {faqs.map((item) => {
                  const isOpen = Boolean(openItems[item.id]);
                  const panelId = `${baseId}-faq-${item.id}`;
                  const buttonId = `${baseId}-faq-btn-${item.id}`;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(item.id)}
                        className="group flex w-full gap-4 py-5 text-left transition-colors duration-300 hover:bg-white/[0.02] md:gap-5 md:py-7"
                      >
                        <span
                          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center font-serif text-sm font-light text-primary/55 group-hover:text-primary/80 md:mt-1.5 md:h-6 md:w-6 md:text-base"
                          aria-hidden
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                        <span className="min-w-0 flex-1 font-serif text-base leading-snug text-text-primary md:text-lg md:leading-snug">
                          {item.question}
                        </span>
                      </button>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        hidden={!isOpen}
                        className={
                          isOpen
                            ? "border-l border-primary/30 pb-6 pl-4 md:ml-10 md:pl-5 md:pb-8"
                            : ""
                        }
                      >
                        {item.answer ? (
                          <p className="max-w-none text-sm leading-[1.75] text-text-secondary/95 md:text-base md:leading-[1.8]">
                            {item.answer}
                          </p>
                        ) : null}
                        {item.cta ? (
                          <div className={item.answer ? "mt-6" : ""}>
                            <PrimaryButton
                              href={item.cta.href}
                              className="min-h-11 px-7 text-[0.8125rem] tracking-[0.14em]"
                            >
                              {item.cta.label}
                            </PrimaryButton>
                          </div>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
