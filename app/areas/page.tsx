import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { practiceAreas } from "@/lib/content/practice-areas";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Direito de Família, Cível, Empresarial e Trabalhista — atendimento individual em cada frente.",
};

export default function AreasPage() {
  const featured = practiceAreas.find((area) => area.featured);
  const rest = practiceAreas.filter((area) => !area.featured);

  return (
    <>
      <PageIntro
        eyebrow="Áreas de Atuação"
        title="Quatro frentes, um mesmo jeito de trabalhar"
        description="Entender o caso antes de falar em processo — escolha uma área para ver como atuamos nela."
      />

      <Section tone="pergaminho">
        <div className="grid gap-px border border-grafite/10 bg-grafite/10 md:grid-cols-3">
          {featured && (
            <Link
              href={`/areas/${featured.slug}`}
              className="group flex flex-col justify-between gap-8 bg-marfim p-8 transition-colors hover:bg-pergaminho md:col-span-3 md:flex-row md:items-end md:p-10"
            >
              <div className="max-w-[46ch]">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-latao">
                  Área principal
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight md:text-[1.75rem]">
                  {featured.name}
                </h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed opacity-75">
                  {featured.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-[280px] md:justify-end">
                {featured.services.slice(0, 4).map((service) => (
                  <span
                    key={service.title}
                    className="border border-grafite/15 px-3 py-1.5 font-sans text-xs text-grafite/75"
                  >
                    {service.title}
                  </span>
                ))}
              </div>
            </Link>
          )}

          {rest.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex flex-col justify-between gap-6 bg-marfim p-8 transition-colors hover:bg-pergaminho"
            >
              <div>
                <h2 className="font-serif text-lg font-semibold tracking-tight">
                  {area.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed opacity-70">
                  {area.summary}
                </p>
              </div>
              <span className="font-sans text-sm font-semibold text-latao underline decoration-latao/40 underline-offset-4 group-hover:decoration-latao">
                Ver detalhes →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
