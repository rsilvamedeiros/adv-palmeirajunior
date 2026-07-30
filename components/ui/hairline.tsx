import clsx from "clsx";

export function Hairline({ className }: { className?: string }) {
  return <div className={clsx("h-px w-full bg-current opacity-10", className)} />;
}
