import { legacyTreatmentCatalog, type LegacyTreatmentCatalogItem } from "@/data/legacyTreatmentCatalog";
import { legacyTreatments, type LegacyTreatment } from "@/data/legacyTreatments";

const legacyBySlug = new Map(legacyTreatments.map((t) => [t.slug, t]));

/**
 * Catalogue entries that have a matching legacy treatment page.
 * Order follows `legacyTreatmentCatalog` — no catalogue-only or legacy-only extras.
 */
export const publishedTreatmentCatalog: LegacyTreatmentCatalogItem[] =
  legacyTreatmentCatalog.filter((c) => legacyBySlug.has(c.slug));

/** Legacy rows aligned to `publishedTreatmentCatalog` (same slugs, same order). */
export const publishedLegacyTreatments: LegacyTreatment[] = publishedTreatmentCatalog.map(
  (c) => legacyBySlug.get(c.slug)!,
);

export const publishedTreatmentSlugs: string[] = publishedTreatmentCatalog.map((c) => c.slug);
