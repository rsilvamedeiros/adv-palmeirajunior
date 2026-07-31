import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Accordion } from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/ui/section";
import { articles } from "@/lib/content/articles";
import { practiceAreas } from "@/lib/content/practice-areas";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);
  if (!area) return {};
  return {
    title: area.name,
    description: area.summary,
  };
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  const relatedArticles = articles.filter((article) => article.category === area.name);
  const articlesIndex = relatedArticles.length > 0 ? "03" : null;
  const faqIndex = articlesIndex ? "04" : "03";

  return (
    <>
      <PageIntro
        breadcrumb={{ href: "/areas", label: "Áreas de Atuação" }}
        eyebrow="Área de Atuação"
        title={area.name}
        description={area.summary}
      />

      <Section tone="pergaminho">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10">
          <div>
            <div className="font-sans text-xs tracking-[0.08em] opacity-60">
              01
            </div>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight md:text-[1.75rem]">
              Visão geral
            </h2>
          </div>
          <div className="max-w-[62ch] space-y-4">
            {area.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[0.95rem] leading-relaxed opacity-75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="marfim">
        <SectionHeading
          index="02"
          title="Como podemos ajudar"
          description="As frentes mais comuns dentro dessa área — cada caso costuma combinar mais de uma delas."
        />
        <div className="mt-10 grid gap-px border border-grafite/10 bg-grafite/10 sm:grid-cols-2">
          {area.services.map((service) => (
            <div key={service.title} className="bg-marfim p-8">
              <h3 className="font-serif text-lg font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {relatedArticles.length > 0 && (
        <Section tone="pergaminho">
          <SectionHeading
            index={articlesIndex ?? undefined}
            title="Artigos relacionados"
            description="Leitura para entender melhor o assunto antes da primeira conversa."
          />
          <div className="mt-10 grid gap-px border border-grafite/10 bg-grafite/10 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col justify-between gap-8 bg-marfim p-8 transition-colors hover:bg-pergaminho"
              >
                <div>
                  <h3 className="text-balance font-serif text-lg font-semibold leading-snug tracking-tight">
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
        </Section>
      )}

      <Section tone="marfim">
        <SectionHeading
          index={faqIndex}
          title="Perguntas frequentes"
          description={`Dúvidas comuns sobre ${area.name.toLowerCase()}.`}
        />
        <div className="mt-10 md:ml-[calc(200px+2.5rem)]">
          <Accordion items={area.faq} />
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
