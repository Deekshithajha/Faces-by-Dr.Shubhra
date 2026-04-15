"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/Container";
import { FormInput, formControlClassName, textAreaControlClassName } from "@/components/FormInput";
import { PrimaryButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { supabase } from "@/lib/supabaseClient";

type ConsultationFormValues = {
  fullName: string;
  phoneNumber: string;
  email: string;
  areaOfInterest: string;
  message: string;
};

const initialValues: ConsultationFormValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
  areaOfInterest: "Facial Dermatology",
  message: "",
};

export function ConsultationForm() {
  const [formValues, setFormValues] = useState<ConsultationFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError(null);
    setSubmissionSuccess(null);

    if (!formValues.fullName || !formValues.phoneNumber || !formValues.email) {
      setSubmissionError("Please complete name, phone number, and email.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("consultations").insert({
      full_name: formValues.fullName,
      phone_number: formValues.phoneNumber,
      email: formValues.email,
      area_of_interest: formValues.areaOfInterest,
      message: formValues.message,
    });
    setIsSubmitting(false);

    if (error) {
      setSubmissionError("We could not submit your request right now. Please try again.");
      return;
    }

    setFormValues(initialValues);
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
              <select
                className={formControlClassName}
                value={formValues.areaOfInterest}
                onChange={(event) =>
                  setFormValues((current) => ({ ...current, areaOfInterest: event.target.value }))
                }
              >
                <option>Facial Dermatology</option>
                <option>Body and Hair Care</option>
                <option>Oculoplasty & periocular aesthetics</option>
              </select>
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
