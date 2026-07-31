import { LogoMark } from "@/components/brand/logo-mark";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-marfim text-grafite">
      <LogoMark
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 text-navy opacity-[0.05] sm:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[var(--container-page)] px-6 py-28 md:px-10 md:py-36">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-latao">
          Erro 404
        </p>
        <h1 className="mt-5 max-w-[20ch] text-balance font-serif text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          Essa página não foi encontrada.
        </h1>
        <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-grafite/75">
          O endereço pode ter mudado ou não existe mais. Volte para o início
          ou fale diretamente com a gente.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Voltar para o início
          </Button>
          <Button href="/contato" variant="outline-navy">
            Falar com um advogado
          </Button>
        </div>
      </div>
    </section>
  );
}
