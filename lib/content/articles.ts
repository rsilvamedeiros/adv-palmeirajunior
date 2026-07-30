export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

// Conteúdo placeholder no cluster de Direito de Família (docs/12-seo-content.md),
// alinhado à jornada Google → Artigo → Jornada → Atendimento (docs/05-user-flows.md).
export const articles: Article[] = [
  {
    slug: "guarda-compartilhada-como-funciona",
    title: "Guarda compartilhada: como funciona na prática",
    excerpt:
      "O que muda no dia a dia da família quando a guarda é compartilhada — e quais decisões continuam sendo conjuntas.",
    category: "Direito de Família",
    readTime: "6 min",
    date: "2026-03-10",
  },
  {
    slug: "pensao-alimenticia-como-e-calculada",
    title: "Como a pensão alimentícia é calculada",
    excerpt:
      "Critérios que os juízes consideram — renda, necessidades da criança e o que entra (ou não) no cálculo.",
    category: "Direito de Família",
    readTime: "5 min",
    date: "2026-02-24",
  },
  {
    slug: "uniao-estavel-reconhecimento",
    title: "Reconhecimento de união estável: quando vale a pena formalizar",
    excerpt:
      "A diferença prática entre uma relação de fato e uma união estável reconhecida — e o que isso protege.",
    category: "Direito de Família",
    readTime: "4 min",
    date: "2026-02-02",
  },
];
