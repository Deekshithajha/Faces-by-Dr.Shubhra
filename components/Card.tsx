import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`elevated-panel soft-shadow rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/55 ${className}`}
    >
      {children}
    </article>
  );
}
