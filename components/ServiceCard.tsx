import Link from "next/link";
import { Card } from "@/components/Card";

interface ServiceCardProps {
  label: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ label, title, description, href }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <p className="section-label text-xs uppercase text-secondary">{label}</p>
      <h3 className="mt-4 font-serif text-3xl text-primary">{title}</h3>
      <p className="mt-4 flex-1 leading-8 text-text-secondary/95">{description}</p>
      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-all duration-300 hover:gap-3 hover:text-primary-hover"
      >
        Discover more
      </Link>
    </Card>
  );
}
