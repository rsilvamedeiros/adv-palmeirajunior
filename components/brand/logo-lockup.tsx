import clsx from "clsx";
import { LogoMark } from "./logo-mark";

type LogoLockupProps = {
  variant?: "horizontal" | "stacked";
  markClassName?: string;
  className?: string;
};

/**
 * Wordmark + mark, in `currentColor` — set text color on a wrapping element
 * (`text-marfim` on navy, `text-navy` on light grounds) to recolor.
 */
export function LogoLockup({
  variant = "horizontal",
  markClassName,
  className,
}: LogoLockupProps) {
  if (variant === "stacked") {
    return (
      <div className={clsx("flex flex-col items-center gap-3 text-center", className)}>
        <LogoMark className={clsx("h-11 w-11", markClassName)} />
        <div>
          <div className="font-serif text-lg font-semibold leading-none">
            Palmeira Junior
          </div>
          <div className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.26em] opacity-70">
            Advocacia
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx("flex items-center gap-3.5", className)}>
      <LogoMark className={clsx("h-9 w-9 shrink-0", markClassName)} />
      <div>
        <div className="font-serif text-lg font-semibold leading-none">
          Palmeira Junior
        </div>
        <div className="mt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.24em] opacity-70">
          Advocacia
        </div>
      </div>
    </div>
  );
}
