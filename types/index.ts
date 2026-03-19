export type ProcedureCategorySlug = "facial" | "body" | "breast";

export interface DoctorProfile {
  name: string;
  credentials: string;
  specialty: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
}

export interface ProcedureCategory {
  id: ProcedureCategorySlug;
  name: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
}

export interface Procedure {
  slug: string;
  name: string;
  categoryId: ProcedureCategorySlug;
  shortDescription: string;
  overview: string;
  duration: string;
  anesthesia: string;
  recovery: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  procedure: string;
  quote: string;
  rating?: number;
}

export interface BeforeAfterResult {
  id: string;
  procedureSlug: string;
  title: string;
  description: string;
  timeframe: string;
  category?: string;
  beforeImageUrl?: string | null;
  afterImageUrl?: string | null;
  recoveryNote?: string | null;
}

export interface ClinicLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: ProcedureCategorySlug;
  imageUrl?: string | null;
  displayOrder: number;
}
