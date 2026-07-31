import Link from "next/link";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { href: string; label: string };
}) {
  return (
    <section className="bg-navy text-marfim">
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-[46ch]">
          {breadcrumb && (
            <Link
              href={breadcrumb.href}
              className="mb-6 inline-block font-sans text-xs font-medium text-marfim/55 transition-colors hover:text-marfim/80"
            >
              ← {breadcrumb.label}
            </Link>
          )}
          {eyebrow && <EyebrowLabel>{eyebrow}</EyebrowLabel>}
          <h1 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-[0.95rem] leading-relaxed text-marfim/70">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
