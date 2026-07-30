import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Sobre",
  description: "A trajetória por trás do escritório e o jeito de trabalhar.",
};

const principles = [
  {
    title: "Sem promessas de resultado",
    description:
      "Cada caso é único. O compromisso é com o trabalho técnico bem-feito, não com garantias que ninguém pode dar.",
  },
  {
    title: "Conteúdo educativo",
    description:
      "Explicamos o que está em jogo antes de falar em processo, para que a decisão seja sua, informada.",
  },
  {
    title: "Atendimento individual",
    description:
      "Cada cliente é acompanhado de perto — sem repasse de caso, sem respostas genéricas.",
  },
  {
    title: "LGPD",
    description:
      "Seus dados e os documentos do seu caso são tratados com o sigilo que a advocacia exige.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageIntro
        eyebrow="Sobre"
        title="Um escritório construído sobre uma trajetória, não sobre um slogan."
        description="Advocacia que leva a sério tanto a técnica quanto a conversa que vem antes dela."
      />

      <Section tone="pergaminho">
        <SectionHeading
          index="01"
          title="Trajetória"
          description="[Espaço reservado para a história profissional do advogado — formação, áreas de especialização e marcos da carreira, a serem preenchidos com o conteúdo definitivo.]"
        />
      </Section>

      <Section tone="marfim">
        <SectionHeading
          index="02"
          title="Como trabalhamos"
          description="Quatro princípios que orientam qualquer caso, do primeiro contato ao encerramento."
        />
        <div className="mt-10 grid grid-cols-1 gap-px border border-grafite/10 bg-grafite/10 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="bg-marfim p-8">
              <h3 className="font-serif text-lg font-semibold tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-70">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
