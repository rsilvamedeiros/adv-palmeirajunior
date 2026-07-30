import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { practiceAreas } from "@/lib/content/practice-areas";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Direito de Família, Cível, Empresarial e Trabalhista — atendimento individual em cada frente.",
};

export default function AreasPage() {
  return (
    <>
      <PageIntro
        eyebrow="Áreas de Atuação"
        title="Quatro frentes, um mesmo jeito de trabalhar"
        description="Entender o caso antes de falar em processo — em qualquer uma das áreas abaixo."
      />

      <Section tone="pergaminho" border={false}>
        <div className="divide-y divide-grafite/10">
          {practiceAreas.map((area, index) => (
            <div
              key={area.slug}
              id={area.slug}
              className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div>
                <div className="font-sans text-xs tracking-[0.08em] opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
                  {area.name}
                </h2>
              </div>
              <div className="max-w-[60ch]">
                <p className="text-[0.95rem] leading-relaxed opacity-75">
                  {area.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <li
                      key={topic}
                      className="border border-grafite/15 px-3 py-1.5 font-sans text-xs text-grafite/75"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/contato" variant="outline-navy" className="px-5 py-2.5 text-xs">
                    Conversar sobre {area.name.toLowerCase()}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
