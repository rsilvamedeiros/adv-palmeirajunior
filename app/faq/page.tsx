import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Accordion } from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/ui/section";
import { faqItems } from "@/lib/content/faq";
import { practiceAreas } from "@/lib/content/practice-areas";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Dúvidas comuns sobre atendimento, prazos e cada área de atuação, organizadas por assunto.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Dúvidas comuns, organizadas por assunto — para ajudar a entender o cenário antes mesmo da primeira conversa."
      />

      <Section tone="pergaminho">
        <SectionHeading index="01" title="Geral" />
        <div className="mt-10 md:ml-[calc(200px+2.5rem)]">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {practiceAreas.map((area, index) => (
        <Section key={area.slug} tone={index % 2 === 0 ? "marfim" : "pergaminho"}>
          <SectionHeading
            index={String(index + 2).padStart(2, "0")}
            title={area.name}
          />
          <div className="mt-10 md:ml-[calc(200px+2.5rem)]">
            <Accordion items={area.faq} />
          </div>
        </Section>
      ))}

      <ContactCta />
    </>
  );
}
