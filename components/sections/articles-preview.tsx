import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { articles } from "@/lib/content/articles";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function ArticlesPreview() {
  return (
    <Section tone="pergaminho">
      <SectionHeading
        index="03"
        title="Do blog"
        description="Artigos escritos para responder dúvidas reais antes de qualquer processo — o ponto de partida da orientação jurídica."
      />

      <div className="mt-10 grid gap-px border border-grafite/10 bg-grafite/10 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href="/blog"
            className="group flex flex-col justify-between gap-8 bg-marfim p-8 transition-colors hover:bg-pergaminho"
          >
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-latao">
                {article.category}
              </p>
              <h3 className="mt-3 text-balance font-serif text-lg font-semibold leading-snug tracking-tight">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-70">
                {article.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between font-sans text-xs text-grafite/55">
              <span>{dateFormatter.format(new Date(article.date))}</span>
              <span>{article.readTime} de leitura</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/blog"
          className="font-sans text-sm font-semibold text-latao underline decoration-latao/40 underline-offset-4 hover:decoration-latao"
        >
          Ver todos os artigos →
        </Link>
      </div>
    </Section>
  );
}
