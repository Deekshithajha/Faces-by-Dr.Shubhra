import { publishedTreatmentCatalog } from "@/data/publishedTreatments";
import { getTreatmentCardCategory } from "@/data/treatmentCardCategories";

export interface TreatmentServiceCardItem {
  slug: string;
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  categoryLabel: string;
}

function toCardItem(treatment: (typeof publishedTreatmentCatalog)[number]): TreatmentServiceCardItem {
  return {
    slug: treatment.slug,
    title: treatment.name,
    description: treatment.description,
    href: `/service/our-treatment/${treatment.slug}`,
    imageUrl: treatment.imageUrl,
    imageAlt: treatment.name,
    categoryLabel: getTreatmentCardCategory(treatment.slug),
  };
}

export function getTreatmentsCatalogView() {
  const exploreCatalog = publishedTreatmentCatalog.filter((item) => item.catalogSection === "explore");
  const uniqueCatalog = publishedTreatmentCatalog.filter((item) => item.catalogSection === "unique");

  return {
    allExploreServices: exploreCatalog.map(toCardItem),
    allUniqueServices: uniqueCatalog.map(toCardItem),
  };
}
