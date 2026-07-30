import { Accordion } from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/ui/section";
import { faqItems } from "@/lib/content/faq";

export function Faq() {
  return (
    <Section tone="marfim">
      <SectionHeading
        index="04"
        title="Perguntas frequentes"
        description="Respostas diretas para as dúvidas mais comuns antes da primeira conversa."
      />

      <div className="mt-10 md:ml-[calc(200px+2.5rem)]">
        <Accordion items={faqItems} />
      </div>
    </Section>
  );
}
