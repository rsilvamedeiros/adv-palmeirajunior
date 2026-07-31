import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Section, SectionHeading } from "@/components/ui/section";
import { articles } from "@/lib/content/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const otherArticles = articles.filter((item) => item.slug !== article.slug);

  return (
    <>
      <PageIntro
        breadcrumb={{ href: "/blog", label: "Blog" }}
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      />

      <Section tone="pergaminho">
        <div className="max-w-[62ch]">
          <div className="flex items-center gap-3 font-sans text-xs text-grafite/55">
            <span>{dateFormatter.format(new Date(article.date))}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime} de leitura</span>
          </div>

          <p className="mt-6 text-[1.0625rem] leading-relaxed opacity-80">
            {article.intro}
          </p>

          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <div key={section.heading} className="border-t border-grafite/10 pt-8">
                <h2 className="font-serif text-xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[0.95rem] leading-relaxed opacity-75">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 border-t border-grafite/10 pt-8 text-xs leading-relaxed opacity-55">
            Este conteúdo tem caráter educativo e não substitui uma análise
            jurídica do seu caso específico.
          </p>
        </div>
      </Section>

      {otherArticles.length > 0 && (
        <Section tone="marfim">
          <SectionHeading index="—" title="Outros artigos" />
          <div className="mt-10 grid gap-px border border-grafite/10 bg-grafite/10 md:grid-cols-2">
            {otherArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group flex flex-col justify-between gap-6 bg-marfim p-8 transition-colors hover:bg-pergaminho"
              >
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-latao">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-balance font-serif text-lg font-semibold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="font-sans text-xs text-grafite/55">
                  {item.readTime} de leitura
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <ContactCta />
    </>
  );
}
