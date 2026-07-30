import { Section, SectionHeading } from "@/components/ui/section";

const steps = [
  {
    title: "Você pesquisa",
    description:
      "Uma dúvida concreta leva a uma busca — “como funciona guarda compartilhada”, por exemplo.",
  },
  {
    title: "Encontra um artigo",
    description:
      "Conteúdo educativo, sem jargão, que responde à dúvida real antes de falar em processo.",
  },
  {
    title: "Segue a orientação",
    description:
      "Entende o que se aplica ao seu caso específico, sem compromisso de contratação.",
  },
  {
    title: "Fala com um advogado",
    description: "Atendimento individual para definir o próximo passo com clareza.",
  },
];

export function Journey() {
  return (
    <Section tone="petroleo">
      <SectionHeading
        index="02"
        title="Como um caso normalmente começa"
        description="O caminho mais comum antes da primeira conversa — nenhuma etapa precisa ser pulada."
      />

      <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <div className="font-serif text-3xl font-semibold text-latao-light">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 font-serif text-lg font-semibold">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-marfim/70">
              {step.description}
            </p>
            {i < steps.length - 1 && (
              <span
                className="absolute -right-5 top-1 hidden font-serif text-xl text-marfim/25 md:block"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
