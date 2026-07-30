import clsx from "clsx";

export function Stat({
  value,
  label,
  tone = "dark",
}: {
  value: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="px-6 py-5 first:pl-0 md:px-8">
      <div
        className={clsx(
          "font-serif text-xl font-semibold md:text-2xl",
          tone === "dark" ? "text-marfim" : "text-navy",
        )}
      >
        {value}
      </div>
      <div
        className={clsx(
          "mt-1 font-sans text-xs tracking-[0.03em]",
          tone === "dark" ? "text-marfim/65" : "text-grafite/60",
        )}
      >
        {label}
      </div>
    </div>
  );
}
