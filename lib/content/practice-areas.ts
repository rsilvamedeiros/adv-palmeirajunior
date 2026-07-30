export type PracticeArea = {
  slug: string;
  name: string;
  featured?: boolean;
  summary: string;
  topics: string[];
};

// Direito de Família vem primeiro e como featured: é o cluster de SEO
// documentado em docs/12-seo-content.md, não uma escolha arbitrária.
export const practiceAreas: PracticeArea[] = [
  {
    slug: "familia",
    name: "Direito de Família",
    featured: true,
    summary:
      "Divórcio, guarda, pensão alimentícia e partilha de bens conduzidos com atenção ao lado humano de cada processo.",
    topics: [
      "Divórcio e separação",
      "Guarda e convivência",
      "Pensão alimentícia",
      "Partilha de bens",
      "Reconhecimento de união estável",
    ],
  },
  {
    slug: "civel",
    name: "Direito Cível",
    summary:
      "Contratos, responsabilidade civil e disputas patrimoniais, da negociação à execução.",
    topics: [
      "Contratos",
      "Indenizações",
      "Cobranças",
      "Disputas de consumo",
    ],
  },
  {
    slug: "empresarial",
    name: "Direito Empresarial",
    summary:
      "Estruturação societária, contratos comerciais e prevenção de litígios para pequenas e médias empresas.",
    topics: [
      "Contratos societários",
      "Recuperação de crédito",
      "Compliance contratual",
      "Consultivo preventivo",
    ],
  },
  {
    slug: "trabalhista",
    name: "Direito Trabalhista",
    summary:
      "Defesa de empregadores e empregados em rescisões, verbas e reclamações trabalhistas.",
    topics: ["Rescisões", "Verbas trabalhistas", "Acordos", "Reclamações trabalhistas"],
  },
];
