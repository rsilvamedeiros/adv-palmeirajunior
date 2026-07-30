import { LogoMark } from "@/components/brand/logo-mark";
import { Button } from "@/components/ui/button";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Stat } from "@/components/ui/stat";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-marfim text-grafite">
      <LogoMark
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-navy opacity-[0.05] sm:block md:h-[42rem] md:w-[42rem]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[var(--container-page)] px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="max-w-[38ch]">
          <EyebrowLabel>
            Família · Cível · Empresarial · Trabalhista
          </EyebrowLabel>
          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-navy md:text-5xl">
            Orientação jurídica com clareza, do primeiro contato ao
            acompanhamento do caso.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-grafite/75">
            Atendimento individual, sem promessas de resultado — só uma
            explicação honesta das suas opções e um plano claro para seguir
            em frente.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contato" variant="primary">
              Falar com um advogado
            </Button>
            <Button href="/areas" variant="outline-navy">
              Ver áreas de atuação
            </Button>
          </div>
        </div>
      </div>

      <div className="relative border-t border-grafite/10">
        <div className="mx-auto flex max-w-[var(--container-page)] flex-wrap divide-x divide-grafite/10 px-6 md:px-10">
          <Stat tone="light" value="— anos" label="de atuação" />
          <Stat tone="light" value="OAB/—" label="registro ativo" />
          <Stat tone="light" value="— casos" label="acompanhados" />
        </div>
      </div>
    </section>
  );
}
