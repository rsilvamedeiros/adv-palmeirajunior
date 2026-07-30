import clsx from "clsx";
import type { ReactNode } from "react";

type SectionTone = "pergaminho" | "navy" | "marfim" | "petroleo";

const toneClasses: Record<SectionTone, string> = {
  pergaminho: "bg-pergaminho text-grafite",
  navy: "bg-navy text-marfim",
  marfim: "bg-marfim text-grafite",
  petroleo: "bg-petroleo text-marfim",
};

export function Section({
  children,
  tone = "pergaminho",
  border = true,
  className,
  id,
}: {
  children: ReactNode;
  tone?: SectionTone;
  border?: boolean;
  className?: string;
  id?: string;
}) {
  const isDark = tone === "navy" || tone === "petroleo";

  return (
    <section
      id={id}
      className={clsx(
        toneClasses[tone],
        border && "border-t",
        border && (isDark ? "border-marfim/10" : "border-grafite/10"),
        className,
      )}
    >
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-16 md:px-10 md:py-24">
        {children}
      </div>
    </section>
  );
}

/**
 * Narrow label column + wide content column — the same rhythm used across
 * the brand board (docs/brand/identidade-visual.html). Reused everywhere a
 * section needs a heading, instead of a centered hero-style title.
 */
export function SectionHeading({
  index,
  title,
  description,
  className,
}: {
  index?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10",
        className,
      )}
    >
      <div>
        {index && (
          <div className="font-sans text-xs tracking-[0.08em] opacity-60">
            {index}
          </div>
        )}
        <h2 className="mt-2 text-balance font-serif text-2xl font-semibold tracking-tight md:text-[1.75rem]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-[52ch] text-[0.95rem] leading-relaxed opacity-75">
          {description}
        </p>
      )}
    </div>
  );
}
