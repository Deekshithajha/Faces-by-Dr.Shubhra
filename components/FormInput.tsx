import type { ReactNode } from "react";

interface FormInputProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function FormInput({ label, children, className = "" }: FormInputProps) {
  return (
    <label className={`flex flex-col gap-2.5 text-sm tracking-wide text-text-secondary ${className}`}>
      <span className="text-xs uppercase tracking-[0.14em] text-secondary">{label}</span>
      {children}
    </label>
  );
}

export const formControlClassName =
  "h-12 rounded-xl border border-border bg-background px-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/70 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/35";

export const textAreaControlClassName =
  "rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/70 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/35";
