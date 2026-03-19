import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

type PrimaryButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type SecondaryButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({
  children,
  href,
  className = "",
  type = "button",
  ...buttonProps
}: PrimaryButtonProps) {
  const classes =
    "inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold tracking-wide text-[#0b0d11] shadow-[0_10px_24px_rgba(200,169,126,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_30px_rgba(200,169,126,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

  if (href) {
    return (
      <Link href={href} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${classes} ${className}`} {...buttonProps}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  className = "",
  type = "button",
  ...buttonProps
}: SecondaryButtonProps) {
  const classes =
    "inline-flex h-12 items-center justify-center rounded-xl border border-border bg-transparent px-6 text-sm font-medium tracking-wide text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45";

  if (href) {
    return (
      <Link href={href} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${classes} ${className}`} {...buttonProps}>
      {children}
    </button>
  );
}
