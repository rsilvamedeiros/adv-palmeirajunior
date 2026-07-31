export type PracticeAreaService = {
  title: string;
  description: string;
};

export type PracticeAreaFaq = {
  question: string;
  answer: string;
};

export type PracticeArea = {
  slug: string;
  name: string;
  featured?: boolean;
  summary: string;
  intro: string[];
  services: PracticeAreaService[];
  faq: PracticeAreaFaq[];
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
    intro: [
      "Direito de Família lida com decisões que continuam depois que o processo termina — quem fica com a casa não é só uma questão jurídica, é também o próximo capítulo da vida de alguém. Por isso a primeira conversa é sempre sobre entender a situação completa, não só o pedido.",
      "Atuamos em processos consensuais e litigiosos, sempre buscando primeiro o caminho mais rápido e menos desgastante — o acordo — sem deixar de preparar o processo judicial quando ele é inevitável.",
    ],
    services: [
      {
        title: "Divórcio e separação",
        description:
          "Consensual em cartório ou judicial, com partilha de bens e definição de guarda quando há filhos.",
      },
      {
        title: "Guarda e convivência",
        description:
          "Guarda compartilhada, unilateral e regulamentação de visitas, com foco no melhor interesse da criança.",
      },
      {
        title: "Pensão alimentícia",
        description:
          "Fixação, revisão e execução de pensão — para filhos, ex-cônjuges ou entre parentes.",
      },
      {
        title: "Partilha de bens",
        description:
          "Divisão de patrimônio conforme o regime de bens, incluindo imóveis, empresas e bens anteriores ao casamento.",
      },
      {
        title: "União estável",
        description:
          "Reconhecimento, contrato de convivência e dissolução de uniões estáveis.",
      },
    ],
    faq: [
      {
        question: "Divórcio consensual precisa de advogado para os dois?",
        answer:
          "Sim — mesmo no divórcio consensual em cartório, a lei exige que cada parte tenha seu próprio advogado, ou um advogado comum a ambos, para garantir que o acordo seja equilibrado.",
      },
      {
        question: "Dá para pedir guarda compartilhada mesmo sem boa relação entre os pais?",
        answer:
          "Sim, é o modelo padrão previsto em lei. A rotina precisa ficar bem definida no acordo — quanto mais clara, menos espaço sobra para conflito no dia a dia.",
      },
      {
        question: "A pensão alimentícia pode ser revista depois de fixada?",
        answer:
          "Pode, sempre que houver mudança relevante na necessidade de quem recebe ou na capacidade de quem paga.",
      },
    ],
  },
  {
    slug: "civel",
    name: "Direito Cível",
    summary:
      "Contratos, responsabilidade civil e disputas patrimoniais, da negociação à execução.",
    intro: [
      "Direito Cível é o campo mais amplo da advocacia — cobre desde um contrato mal cumprido até um acidente que gerou prejuízo. O ponto em comum é sempre o mesmo: alguém não cumpriu o que devia, e é preciso resolver isso de forma justa.",
      "Antes de entrar com uma ação, avaliamos se existe um caminho de negociação viável — processo judicial é o último recurso, não o primeiro.",
    ],
    services: [
      {
        title: "Contratos",
        description:
          "Elaboração, revisão e negociação de contratos civis, para reduzir risco antes que o problema apareça.",
      },
      {
        title: "Indenizações",
        description:
          "Danos morais e materiais decorrentes de acidentes, negligência ou descumprimento contratual.",
      },
      {
        title: "Cobranças e execução",
        description:
          "Cobrança judicial e extrajudicial de dívidas, com acompanhamento até a efetiva recuperação do valor.",
      },
      {
        title: "Disputas de consumo",
        description:
          "Defesa de consumidores em problemas com produtos, serviços e relações de consumo em geral.",
      },
    ],
    faq: [
      {
        question: "Vale a pena processar por uma dívida pequena?",
        answer:
          "Depende do custo do processo frente ao valor da dívida — muitas vezes o Juizado Especial Cível é o caminho mais rápido e barato, e avaliamos isso já na primeira conversa.",
      },
      {
        question: "Todo atraso em contrato gera direito a indenização?",
        answer:
          "Não necessariamente — é preciso comprovar o prejuízo e o nexo entre o descumprimento e o dano. Avaliamos isso caso a caso.",
      },
      {
        question: "Quanto tempo leva um processo cível?",
        answer:
          "Varia muito conforme a complexidade e a existência de recursos — de alguns meses a alguns anos. Damos uma estimativa realista já na análise inicial.",
      },
    ],
  },
  {
    slug: "empresarial",
    name: "Direito Empresarial",
    summary:
      "Estruturação societária, contratos comerciais e prevenção de litígios para pequenas e médias empresas.",
    intro: [
      "Para pequenas e médias empresas, o jurídico costuma aparecer tarde — só quando já há um problema. Trabalhamos para inverter isso: contrato revisado antes da assinatura, sociedade bem estruturada antes do primeiro desentendimento entre sócios.",
      "Também atuamos no contencioso, quando a prevenção não foi suficiente ou o problema já existia antes de chegarmos.",
    ],
    services: [
      {
        title: "Contratos societários",
        description:
          "Elaboração e revisão de contrato social, acordos de sócios e alterações contratuais.",
      },
      {
        title: "Recuperação de crédito",
        description:
          "Cobrança de valores devidos à empresa, judicial e extrajudicialmente.",
      },
      {
        title: "Compliance contratual",
        description:
          "Revisão de contratos com fornecedores e clientes para reduzir exposição a risco.",
      },
      {
        title: "Consultivo preventivo",
        description:
          "Acompanhamento jurídico contínuo para as decisões do dia a dia da empresa, antes que virem litígio.",
      },
    ],
    faq: [
      {
        question: "Minha empresa precisa de advogado fixo ou só quando surge um problema?",
        answer:
          "O ideal é o consultivo preventivo — mas entendemos que nem toda empresa está pronta para isso, e também atendemos sob demanda quando um problema específico aparece.",
      },
      {
        question: "Vocês atuam em disputas entre sócios?",
        answer:
          "Sim, desde a mediação até o litígio, quando a divergência não se resolve por acordo.",
      },
      {
        question: "Fazem apenas o contrato ou também acompanham a execução dele?",
        answer:
          "Os dois — elaboramos o contrato e acompanhamos o cumprimento, incluindo cobrança em caso de descumprimento.",
      },
    ],
  },
  {
    slug: "trabalhista",
    name: "Direito Trabalhista",
    summary:
      "Defesa de empregadores e empregados em rescisões, verbas e reclamações trabalhistas.",
    intro: [
      "Atuamos dos dois lados da relação de trabalho — defendendo empregados que tiveram direitos desrespeitados e empresas que precisam se resguardar juridicamente nas relações com seus funcionários.",
      "Rescisão, verbas não pagas e reclamações trabalhistas são os casos mais comuns — mas o objetivo, sempre que possível, é o acordo, que costuma ser mais rápido do que esperar uma decisão judicial.",
    ],
    services: [
      {
        title: "Rescisões",
        description:
          "Análise do tipo de rescisão e das verbas devidas, com ou sem justa causa.",
      },
      {
        title: "Verbas trabalhistas",
        description:
          "Cálculo e cobrança de horas extras, férias, 13º e demais verbas não pagas corretamente.",
      },
      {
        title: "Acordos extrajudiciais",
        description:
          "Negociação direta para resolver o caso sem a demora de um processo judicial.",
      },
      {
        title: "Reclamações trabalhistas",
        description:
          "Ajuizamento e defesa em reclamações trabalhistas, para empregados e empregadores.",
      },
    ],
    faq: [
      {
        question: "Fui demitido sem justa causa, tenho direito a quê?",
        answer:
          "Em geral, aviso prévio, saldo de salário, férias proporcionais, 13º proporcional, multa do FGTS e seguro-desemprego — mas o valor exato depende do seu contrato específico.",
      },
      {
        question: "Quanto tempo tenho para entrar com uma reclamação trabalhista?",
        answer:
          "Até dois anos após o fim do contrato, e o direito de cobrar alcança os últimos cinco anos trabalhados.",
      },
      {
        question: "A empresa pode ser processada mesmo com tudo assinado?",
        answer:
          "Pode — assinar um documento não significa que todas as obrigações foram cumpridas. Nossa análise verifica se o que foi pago corresponde ao que era devido.",
      },
    ],
  },
];
