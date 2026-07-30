import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { Journey } from "@/components/sections/journey";
import { PageIntro } from "@/components/sections/page-intro";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Orientação Jurídica",
  description:
    "Entenda o que se aplica ao seu caso antes de decidir se — e quando — abrir um processo.",
};

export default function OrientacaoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Orientação Jurídica"
        title="Antes do processo, uma orientação clara"
        description="Nem toda dúvida jurídica precisa virar processo. A orientação existe para você entender o que realmente se aplica ao seu caso antes de decidir o próximo passo."
      />

      <Section tone="pergaminho">
        <SectionHeading
          index="01"
          title="O que é a orientação"
          description="Uma etapa intermediária entre ler sobre o assunto e contratar um advogado — feita para qualificar a conversa, não para substituir a análise de um caso real."
        />
      </Section>

      <Journey />

      <ContactCta />
    </>
  );
}
