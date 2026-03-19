import Link from "next/link";
import { Card } from "@/components/Card";

import type { Procedure } from "@/types";

interface ProcedureCardProps {
  procedure: Procedure;
}

export function ProcedureCard({ procedure }: ProcedureCardProps) {
  return (
    <Card className="h-full">
      <h3 className="font-serif text-3xl text-primary">{procedure.name}</h3>
      <p className="mt-4 leading-8 text-text-secondary/95">{procedure.shortDescription}</p>
      <div className="section-label mt-6 grid grid-cols-2 gap-4 text-xs uppercase text-secondary">
        <p>Duration: {procedure.duration}</p>
        <p>Recovery: {procedure.recovery}</p>
      </div>
      <Link
        href={`/procedures/${procedure.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-all duration-300 hover:gap-3 hover:text-primary-hover"
      >
        View Treatment Details
      </Link>
    </Card>
  );
}
