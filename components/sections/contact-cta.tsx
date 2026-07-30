import { ContactForm } from "@/components/sections/contact-form";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Section } from "@/components/ui/section";

export function ContactCta() {
  return (
    <Section tone="navy" id="contato">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <EyebrowLabel>Fale com um advogado</EyebrowLabel>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            O primeiro passo é uma conversa, não um contrato.
          </h2>
          <p className="mt-5 max-w-[42ch] text-[0.95rem] leading-relaxed text-marfim/70">
            Conte um pouco da sua situação e retornamos para marcar um
            horário de atendimento individual.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 font-sans text-sm text-marfim/70">
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-marfim/45">
                Telefone
              </dt>
              <dd className="mt-1">(11) ————-————</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-marfim/45">
                E-mail
              </dt>
              <dd className="mt-1">contato@palmeirajunior.adv.br</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-marfim/45">
                Endereço
              </dt>
              <dd className="mt-1">—, São Paulo — SP</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-marfim/45">
                Atendimento
              </dt>
              <dd className="mt-1">Seg. a sex., 9h às 18h</dd>
            </div>
          </dl>
        </div>

        <ContactForm variant="on-navy" />
      </div>
    </Section>
  );
}
