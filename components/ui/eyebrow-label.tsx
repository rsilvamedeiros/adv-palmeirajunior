import clsx from "clsx";
import type { ReactNode } from "react";

export function EyebrowLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-latao",
        className,
      )}
    >
      <span className="h-px w-7 bg-latao" aria-hidden="true" />
      {children}
    </p>
  );
}
