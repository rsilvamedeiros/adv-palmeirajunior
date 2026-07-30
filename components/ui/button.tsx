import clsx from "clsx";
import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "outline-navy" | "outline-marfim";

const variantClasses: Record<Variant, string> = {
  primary: "bg-latao text-navy-ink hover:bg-latao-light",
  "outline-navy":
    "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-marfim",
  "outline-marfim":
    "border border-marfim/35 text-marfim hover:border-marfim/70",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 font-sans text-sm font-semibold tracking-[0.01em] transition-colors";

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">) {
  const classes = clsx(base, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
