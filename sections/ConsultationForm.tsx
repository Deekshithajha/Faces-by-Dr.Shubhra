"use client";

import {
  type FormEvent,
  type MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Container } from "@/components/Container";
import { FormInput, formControlClassName, textAreaControlClassName } from "@/components/FormInput";
import { PrimaryButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { publishedTreatmentCatalog } from "@/data/publishedTreatments";
import { supabase } from "@/lib/supabaseClient";

const defaultTreatmentName = publishedTreatmentCatalog[0]?.name ?? "";

function findTreatmentByExactName(raw: string) {
  const q = raw.trim().toLowerCase();
  return publishedTreatmentCatalog.find((item) => item.name.toLowerCase() === q) ?? null;
}

function filterTreatmentsBySubstring(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) {
    return publishedTreatmentCatalog;
  }
  return publishedTreatmentCatalog.filter((item) => item.name.toLowerCase().includes(q));
}

type ConsultationFormValues = {
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const initialValues: ConsultationFormValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
  message: "",
};

export function ConsultationForm() {
  const [formValues, setFormValues] = useState<ConsultationFormValues>(initialValues);
  const [treatmentInput, setTreatmentInput] = useState(defaultTreatmentName);
  const [treatmentPanelOpen, setTreatmentPanelOpen] = useState(false);
  const lastCommittedTreatment = useRef(defaultTreatmentName);
  const blurDismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);

  const filteredTreatments = useMemo(() => filterTreatmentsBySubstring(treatmentInput), [treatmentInput]);

  useEffect(() => {
    return () => {
      if (blurDismissTimer.current !== null) {
        clearTimeout(blurDismissTimer.current);
      }
    };
  }, []);

  const clearBlurDismissTimer = () => {
    if (blurDismissTimer.current !== null) {
      clearTimeout(blurDismissTimer.current);
      blurDismissTimer.current = null;
    }
  };

  const commitTreatmentName = (name: string) => {
    lastCommittedTreatment.current = name;
    setTreatmentInput(name);
  };

  const handleTreatmentInputChange = (value: string) => {
    setTreatmentInput(value);
    setTreatmentPanelOpen(true);
  };

  const handleTreatmentInputBlur = () => {
    blurDismissTimer.current = setTimeout(() => {
      setTreatmentPanelOpen(false);
      const exact = findTreatmentByExactName(treatmentInput);
      if (exact) {
        commitTreatmentName(exact.name);
      } else {
        setTreatmentInput(lastCommittedTreatment.current);
      }
      blurDismissTimer.current = null;
    }, 150);
  };

  const handleTreatmentOptionMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSelectTreatment = (name: string) => {
    clearBlurDismissTimer();
    commitTreatmentName(name);
    setTreatmentPanelOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError(null);
    setSubmissionSuccess(null);

    if (!formValues.fullName || !formValues.phoneNumber || !formValues.email) {
      setSubmissionError("Please complete name, phone number, and email.");
      return;
    }

    const areaMatch = findTreatmentByExactName(treatmentInput);
    if (!areaMatch) {
      setSubmissionError(
        "Please choose an area of interest from the suggestions, or type letters to search and then select a treatment.",
      );
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("consultations").insert({
      full_name: formValues.fullName,
      phone_number: formValues.phoneNumber,
      email: formValues.email,
      area_of_interest: areaMatch.name,
      message: formValues.message,
    });
    setIsSubmitting(false);

    if (error) {
      setSubmissionError("We could not submit your request right now. Please try again.");
      return;
    }

    setFormValues(initialValues);
    commitTreatmentName(defaultTreatmentName);
    setSubmissionSuccess("Thank you. Our care team will contact you shortly.");
  };

  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container className="max-w-5xl">
        <div className="elevated-panel rounded-2xl border border-border p-8 md:p-10">
          <SectionHeading
            label="Book Consultation"
            title="Let us design your treatment plan"
            description="Share your concerns and our care team will help you schedule a private, personalized consultation."
          />
          <form className="mt-10 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
            <FormInput label="Full Name">
              <input
                type="text"
                className={formControlClassName}
                placeholder="Your name"
                value={formValues.fullName}
                onChange={(event) => setFormValues((current) => ({ ...current, fullName: event.target.value }))}
                required
              />
            </FormInput>
            <FormInput label="Phone Number">
              <input
                type="tel"
                className={formControlClassName}
                placeholder="+91"
                value={formValues.phoneNumber}
                onChange={(event) =>
                  setFormValues((current) => ({ ...current, phoneNumber: event.target.value }))
                }
                required
              />
            </FormInput>
            <FormInput label="Email">
              <input
                type="email"
                className={formControlClassName}
                placeholder="you@email.com"
                value={formValues.email}
                onChange={(event) => setFormValues((current) => ({ ...current, email: event.target.value }))}
                required
              />
            </FormInput>
            <FormInput label="Area of Interest">
              <div className="relative">
                <input
                  type="text"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-expanded={treatmentPanelOpen}
                  aria-controls="consultation-treatment-suggestions"
                  className={formControlClassName}
                  placeholder="Type to search (e.g. abs, acne, peel)…"
                  autoComplete="off"
                  value={treatmentInput}
                  onChange={(event) => handleTreatmentInputChange(event.target.value)}
                  onFocus={(event) => {
                    clearBlurDismissTimer();
                    event.target.select();
                    setTreatmentPanelOpen(true);
                  }}
                  onBlur={handleTreatmentInputBlur}
                />
                {treatmentPanelOpen ? (
                  <ul
                    id="consultation-treatment-suggestions"
                    role="listbox"
                    className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-border bg-background py-1 shadow-lg"
                  >
                    {filteredTreatments.length === 0 ? (
                      <li className="px-4 py-3 text-sm text-text-secondary">No treatments match that search.</li>
                    ) : (
                      filteredTreatments.map((item) => (
                        <li key={item.slug} role="presentation">
                          <button
                            type="button"
                            role="option"
                            aria-selected={
                              findTreatmentByExactName(treatmentInput)?.slug === item.slug
                            }
                            className="flex w-full px-4 py-2.5 text-left text-sm text-text-primary hover:bg-border/40 focus:bg-border/40 focus:outline-none"
                            onMouseDown={handleTreatmentOptionMouseDown}
                            onClick={() => handleSelectTreatment(item.name)}
                          >
                            {item.name}
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                ) : null}
              </div>
            </FormInput>
            <FormInput label="Message" className="md:col-span-2">
              <textarea
                rows={4}
                className={textAreaControlClassName}
                placeholder="Tell us your goals"
                value={formValues.message}
                onChange={(event) => setFormValues((current) => ({ ...current, message: event.target.value }))}
              />
            </FormInput>
            {submissionError ? (
              <p className="md:col-span-2 text-sm text-red-300" role="alert">
                {submissionError}
              </p>
            ) : null}
            {submissionSuccess ? (
              <p className="md:col-span-2 text-sm text-emerald-300" role="status">
                {submissionSuccess}
              </p>
            ) : null}
            <div className="md:col-span-2">
              <PrimaryButton
                type="submit"
                className="w-full md:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Consultation"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
