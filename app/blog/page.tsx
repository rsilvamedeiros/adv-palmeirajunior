import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { articles } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos educativos sobre Direito de Família e outras áreas de atuação.",
};

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Artigos para entender antes de decidir"
        description="Conteúdo educativo, sem jargão — o ponto de partida de toda orientação jurídica."
      />

      <Section tone="pergaminho" border={false}>
        <div className="divide-y divide-grafite/10">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="grid grid-cols-1 gap-4 py-10 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div className="font-sans text-xs text-grafite/55">
                <p>{dateFormatter.format(new Date(article.date))}</p>
                <p className="mt-1 font-semibold uppercase tracking-[0.1em] text-latao">
                  {article.category}
                </p>
              </div>
              <div className="max-w-[62ch]">
                <h2 className="text-balance font-serif text-xl font-semibold tracking-tight">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed opacity-70">
                  {article.excerpt}
                </p>
                <p className="mt-4 font-sans text-xs text-grafite/55">
                  {article.readTime} de leitura
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
