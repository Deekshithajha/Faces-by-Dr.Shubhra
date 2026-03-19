import Link from "next/link";
import { Card } from "@/components/Card";

import type { ProcedureCategory } from "@/types";

interface ProcedureCategoryCardProps {
  category: ProcedureCategory;
}

export function ProcedureCategoryCard({ category }: ProcedureCategoryCardProps) {
  return (
    <Card className="h-full">
      <p className="section-label text-xs uppercase text-secondary">Category</p>
      <h3 className="mt-3 font-serif text-3xl text-primary">{category.name}</h3>
      <p className="mt-4 leading-8 text-text-secondary">{category.description}</p>
      <Link
        href={`/surgeries/${category.id}`}
        className="mt-8 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary-hover"
      >
        Explore {category.name}
      </Link>
    </Card>
  );
}
