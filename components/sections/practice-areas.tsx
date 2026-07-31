import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { practiceAreas } from "@/lib/content/practice-areas";

export function PracticeAreas() {
  const featured = practiceAreas.find((area) => area.featured);
  const rest = practiceAreas.filter((area) => !area.featured);

  return (
    <Section tone="pergaminho">
      <SectionHeading
        index="01"
        title="Áreas de Atuação"
        description="Quatro frentes, um mesmo jeito de trabalhar: entender o caso antes de falar em processo."
      />

      <div className="mt-10 grid gap-px border border-grafite/10 bg-grafite/10 md:grid-cols-3">
        {featured && (
          <div className="flex flex-col justify-between gap-8 bg-marfim p-8 md:col-span-3 md:flex-row md:items-end md:p-10">
            <div className="max-w-[46ch]">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-latao">
                Área principal
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight md:text-[1.75rem]">
                {featured.name}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed opacity-75">
                {featured.summary}
              </p>
              <Link
                href={`/areas/${featured.slug}`}
                className="mt-5 inline-block font-sans text-sm font-semibold text-latao underline decoration-latao/40 underline-offset-4 hover:decoration-latao"
              >
                Ver detalhes →
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-[280px] md:justify-end">
              {featured.services.map((service) => (
                <span
                  key={service.title}
                  className="border border-grafite/15 px-3 py-1.5 font-sans text-xs text-grafite/75"
                >
                  {service.title}
                </span>
              ))}
            </div>
          </div>
        )}

        {rest.map((area) => (
          <div
            key={area.slug}
            className="flex flex-col justify-between gap-6 bg-marfim p-8"
          >
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-tight">
                {area.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-70">
                {area.summary}
              </p>
            </div>
            <Link
              href={`/areas/${area.slug}`}
              className="font-sans text-sm font-semibold text-latao underline decoration-latao/40 underline-offset-4 hover:decoration-latao"
            >
              Ver detalhes →
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
