import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com o escritório para marcar um atendimento individual.",
};

export default function ContatoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contato"
        title="Vamos conversar sobre o seu caso"
        description="Preencha o formulário abaixo ou use um dos canais diretos — o retorno costuma ser rápido."
      />
      <ContactCta />
    </>
  );
}
