import {
  beforeAfterResults as fallbackResults,
  procedureCategories,
  testimonials as fallbackTestimonials,
} from "@/data";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import type { BeforeAfterResult, Testimonial, Treatment } from "@/types";

const fallbackTreatments: Treatment[] = [
  {
    id: "facial-default",
    slug: "deep-plane-facelift",
    title: "Facial Dermatology",
    shortDescription: procedureCategories[0].description,
    category: "facial",
    imageUrl: null,
    displayOrder: 1,
  },
  {
    id: "body-default",
    slug: "abdominoplasty",
    title: "Body and Hair Care",
    shortDescription: procedureCategories[1].description,
    category: "body",
    imageUrl: null,
    displayOrder: 2,
  },
  {
    id: "breast-default",
    slug: "breast-augmentation",
    title: "Oculoplasty & periocular aesthetics",
    shortDescription: procedureCategories[2].description,
    category: "breast",
    imageUrl: null,
    displayOrder: 3,
  },
];

type DbTreatment = {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  category: string;
  image_url: string | null;
  display_order: number;
};

type DbTestimonial = {
  id: string;
  patient_name: string;
  treatment_type: string;
  testimonial: string;
  rating: number | null;
  display_order: number;
};

type DbCase = {
  id: string;
  title: string;
  category: string;
  description: string;
  before_image_url: string | null;
  after_image_url: string | null;
  recovery_note: string | null;
  display_order: number;
};

export async function getTreatments(): Promise<Treatment[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return fallbackTreatments;
  }

  const { data, error } = await supabase
    .from("treatments")
    .select("id, slug, title, short_description, category, image_url, display_order")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error || !data || data.length === 0) {
    return fallbackTreatments;
  }

  return (data as DbTreatment[]).map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    shortDescription: item.short_description,
    category: (item.category as Treatment["category"]) ?? "facial",
    imageUrl: item.image_url,
    displayOrder: item.display_order,
  }));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return fallbackTestimonials;
  }

  const { data, error } = await supabase
    .from("testimonials")
    .select("id, patient_name, treatment_type, testimonial, rating, display_order")
    .eq("is_featured", true)
    .order("display_order", { ascending: true });

  if (error || !data || data.length === 0) {
    return fallbackTestimonials;
  }

  return (data as DbTestimonial[]).map((item) => ({
    id: item.id,
    patientName: item.patient_name,
    procedure: item.treatment_type,
    quote: item.testimonial,
    rating: item.rating ?? undefined,
  }));
}

export async function getBeforeAfterCases(): Promise<BeforeAfterResult[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return fallbackResults;
  }

  const { data, error } = await supabase
    .from("before_after_cases")
    .select(
      "id, title, category, description, before_image_url, after_image_url, recovery_note, display_order",
    )
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  if (error || !data || data.length === 0) {
    return fallbackResults;
  }

  return (data as DbCase[]).map((item) => ({
    id: item.id,
    procedureSlug: item.category,
    title: item.title,
    description: item.description,
    timeframe: item.recovery_note ?? "Recovery timeline discussed in consultation",
    category: item.category,
    beforeImageUrl: item.before_image_url,
    afterImageUrl: item.after_image_url,
    recoveryNote: item.recovery_note,
  }));
}
