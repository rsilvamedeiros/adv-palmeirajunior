import Link from "next/link";
import { LogoLockup } from "@/components/brand/logo-lockup";
import { practiceAreas } from "@/lib/content/practice-areas";

const navColumns = [
  {
    title: "Navegação",
    links: [
      { href: "/", label: "Início" },
      { href: "/areas", label: "Áreas de Atuação" },
      { href: "/sobre", label: "Sobre" },
      { href: "/blog", label: "Blog" },
      { href: "/orientacao", label: "Orientação Jurídica" },
      { href: "/faq", label: "Perguntas Frequentes" },
      { href: "/contato", label: "Contato" },
    ],
  },
  {
    title: "Áreas de Atuação",
    links: practiceAreas.map((area) => ({
      href: `/areas/${area.slug}`,
      label: area.name,
    })),
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-marfim">
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <LogoLockup markClassName="h-9 w-9" />
            <p className="mt-5 max-w-[32ch] text-sm leading-relaxed text-marfim/65">
              Orientação jurídica com clareza, do primeiro contato ao
              acompanhamento do caso.
            </p>
          </div>

          {navColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-marfim/50">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-marfim/80 transition-colors hover:text-marfim"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-marfim/50">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-marfim/80">
              <li>OAB/— nº —</li>
              <li>—, São Paulo — SP</li>
              <li>(11) ————-————</li>
              <li>contato@palmeirajunior.adv.br</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-marfim/10 pt-8 text-xs text-marfim/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Palmeira Junior Advocacia. Todos os
            direitos reservados.
          </p>
          <p className="max-w-[52ch]">
            Conteúdo educativo, sem promessa de resultado. Tratamento de
            dados conforme a LGPD.
          </p>
        </div>
      </div>
    </footer>
  );
}
