export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  intro: string;
  sections: ArticleSection[];
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
    intro:
      "Desde 2014, a guarda compartilhada é a regra no Brasil, não a exceção — o juiz só define guarda unilateral quando um dos pais não tem condições de exercê-la. Mesmo assim, é comum surgir a dúvida: se os dois têm a guarda, quem decide o quê, e como fica a rotina da criança?",
    sections: [
      {
        heading: "O que muda em relação à guarda unilateral",
        paragraphs: [
          "Na guarda unilateral, um dos pais concentra as decisões e o outro tem apenas direito de visita. Na compartilhada, a responsabilidade legal sobre a criança é dividida — escola, tratamento de saúde, viagens e outras decisões importantes precisam do consentimento dos dois.",
          "Isso não significa, necessariamente, que o tempo de convívio será dividido meio a meio. Guarda compartilhada é sobre responsabilidade conjunta nas decisões, não sobre uma divisão matemática de dias — embora o tempo de convívio também costume ficar mais equilibrado do que era antes de 2014.",
        ],
      },
      {
        heading: "Como fica a rotina dos filhos",
        paragraphs: [
          "A lei não impõe um modelo único de rotina. O acordo (ou a decisão judicial, quando não há consenso) define onde a criança mora de forma fixa — a chamada residência — e como funciona o convívio com o outro genitor: fins de semana alternados, dias fixos durante a semana, revezamento de férias e feriados.",
          "Quanto mais detalhado o acordo, menor a chance de conflito depois. Recomendamos sempre prever com antecedência situações como aniversários, viagens ao exterior e mudanças de cidade — são os pontos que mais geram disputa quando ficam em aberto.",
        ],
      },
      {
        heading: "Decisões que continuam sendo conjuntas",
        paragraphs: [
          "Escola, plano de saúde, tratamentos médicos, viagens e mudanças de domicílio costumam exigir concordância dos dois pais, mesmo quando a criança mora de forma fixa com apenas um deles. Decisões do dia a dia — o que a criança come, quando faz a lição de casa — ficam a critério de quem está com ela naquele momento.",
        ],
      },
      {
        heading: "E quando os pais não se entendem?",
        paragraphs: [
          "Guarda compartilhada não exige amizade entre os pais, mas exige comunicação mínima sobre a criança. Quando o desentendimento é grande, vale a pena formalizar mais detalhes no acordo — reduz a necessidade de negociar cada decisão em tempo real — e, em casos de descumprimento reiterado, é possível recorrer ao juiz para fazer valer o que foi combinado.",
        ],
      },
    ],
  },
  {
    slug: "pensao-alimenticia-como-e-calculada",
    title: "Como a pensão alimentícia é calculada",
    excerpt:
      "Critérios que os juízes consideram — renda, necessidades da criança e o que entra (ou não) no cálculo.",
    category: "Direito de Família",
    readTime: "5 min",
    date: "2026-02-24",
    intro:
      "Não existe uma fórmula fixa em lei para calcular pensão alimentícia — o que existe é um princípio, chamado binômio necessidade-possibilidade, que o juiz aplica caso a caso. Entender como esse princípio funciona ajuda a ter uma expectativa mais realista antes de entrar com o pedido.",
    sections: [
      {
        heading: "O binômio necessidade-possibilidade",
        paragraphs: [
          "De um lado, está a necessidade de quem recebe — no caso de um filho, isso inclui alimentação, moradia, educação, saúde e lazer compatíveis com o padrão de vida da família. Do outro, está a possibilidade de quem paga — sua renda e capacidade financeira real, sem inviabilizar o próprio sustento.",
          "O valor final é o equilíbrio entre essas duas pontas. É por isso que dois casos aparentemente parecidos podem ter valores de pensão bem diferentes.",
        ],
      },
      {
        heading: "O que costuma entrar no cálculo",
        paragraphs: [
          "Salário fixo, décimo terceiro, comissões recorrentes e outros rendimentos estáveis normalmente compõem a base de cálculo. Quando não há um valor fixo definido — uma porcentagem do salário, por exemplo —, o juiz pode arbitrar um valor fixo mensal, considerando o padrão de vida antes da separação.",
        ],
      },
      {
        heading: "O que normalmente não entra",
        paragraphs: [
          "Ganhos esporádicos e não recorrentes, como uma venda pontual de um bem, em geral não entram na base de cálculo da pensão mensal. Da mesma forma, despesas extraordinárias — uma cirurgia não coberta pelo plano de saúde, por exemplo — costumam ser tratadas à parte, divididas proporcionalmente entre os pais, e não embutidas no valor fixo da pensão.",
        ],
      },
      {
        heading: "Quando o valor pode ser revisto",
        paragraphs: [
          "A pensão não é definitiva. Uma mudança relevante — perda de emprego, aumento significativo de renda, novo filho de quem paga, ou mudança nas necessidades de quem recebe — pode justificar uma ação de revisão, para aumentar, reduzir ou até exonerar a obrigação.",
        ],
      },
    ],
  },
  {
    slug: "uniao-estavel-reconhecimento",
    title: "Reconhecimento de união estável: quando vale a pena formalizar",
    excerpt:
      "A diferença prática entre uma relação de fato e uma união estável reconhecida — e o que isso protege.",
    category: "Direito de Família",
    readTime: "4 min",
    date: "2026-02-02",
    intro:
      "Muitos casais vivem uma união estável sem nunca terem formalizado nada — e, legalmente, isso já pode ser suficiente para gerar direitos e deveres entre os dois. O problema aparece quando é preciso provar essa relação depois, seja numa separação, seja num inventário.",
    sections: [
      {
        heading: "O que caracteriza a união estável",
        paragraphs: [
          "A lei não exige um tempo mínimo de convivência nem que o casal more junto — o que caracteriza a união estável é a convivência pública, contínua e duradoura, com o objetivo de constituir família. Isso é uma questão de fato, avaliada pelo conjunto de provas, não um prazo fixo.",
        ],
      },
      {
        heading: "Diferenças em relação ao casamento",
        paragraphs: [
          "Em termos de direitos patrimoniais e sucessórios, a união estável se aproxima bastante do casamento — na ausência de contrato, aplica-se o mesmo regime de comunhão parcial de bens. A principal diferença prática está na prova: casamento tem certidão; união estável, quando não formalizada, depende de outras evidências.",
        ],
      },
      {
        heading: "Por que formalizar por contrato",
        paragraphs: [
          "Um contrato de convivência, feito por escritura pública ou instrumento particular, documenta a existência da união, a data de início e o regime de bens escolhido pelo casal — inclusive regimes diferentes do padrão legal, se for do interesse dos dois. Isso evita discussão futura sobre se a união existia e desde quando.",
          "Também facilita decisões práticas do dia a dia, como incluir o companheiro em plano de saúde ou como dependente, e simplifica o reconhecimento de direitos sucessórios em caso de falecimento.",
        ],
      },
      {
        heading: "Como funciona o reconhecimento judicial",
        paragraphs: [
          "Quando não há contrato prévio e a união precisa ser reconhecida depois — por exemplo, num inventário —, isso é feito por ação judicial (ou, havendo consenso entre as partes envolvidas, por escritura pública), com provas da convivência: fotos, contas conjuntas, testemunhas, endereço comum, entre outras.",
        ],
      },
    ],
  },
];
