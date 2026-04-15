export type TreatmentCatalogSectionName = "explore" | "unique";

export interface TreatmentEducationCause {
  title: string;
  description: string;
  icon: string;
}

export interface TreatmentEducationConcern {
  title: string;
  description: string;
  icon: string;
}

export interface TreatmentEducationMyth {
  myth: string;
  truth: string;
}

export interface TreatmentEducationOption {
  name: string;
  description: string;
  icon: string;
}

export interface TreatmentEducationProprietaryCard {
  title: string;
  description: string;
  icon: string;
}

export interface TreatmentEducationGradingLevel {
  label: string;
  description: string;
  tone: "calm" | "caution" | "alert";
}

export interface TreatmentEducation {
  causesTitle: string;
  causesSubtitle?: string;
  causes: TreatmentEducationCause[];
  patientConcerns: TreatmentEducationConcern[];
  mythSubtitle?: string;
  mythBusters: TreatmentEducationMyth[];
  treatmentOptionsTitle?: string;
  treatmentOptionsIntro?: string;
  treatmentOptions: TreatmentEducationOption[];
  treatmentOptionsNote?: { title: string; body: string };
  proprietaryTitle?: string;
  proprietarySubtitle: string;
  proprietaryCards: TreatmentEducationProprietaryCard[];
  promiseTitle?: string;
  promiseItems: string[];
  proprietaryGrading?: { title: string; levels: TreatmentEducationGradingLevel[] };
  faqs: { question: string; answer: string }[];
}

export interface TreatmentEducationContext {
  slug: string;
  name: string;
  overview: string;
  catalogSection: TreatmentCatalogSectionName;
}
