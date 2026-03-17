type ProjectData = {
  title: string;
  image: string[];
  link: { repository?: string; production?: string };
  video?: string[];
  resume: string;
  text: {
    p?: string;
    h2?: string;
    ul?: string[];
  }[];
  tags: string[];
}[];

export const timelineData = [
  {
    title: "Desenvolvedor Fullstack Sênior",
    company: "Startamus",
    tasks: [
      "Desenvolvimento de uma plataforma de vendas de rifas com 16.000 usuários cadastrados, integração de API Java, gateway de pagamento do Mercado Pago e dashboard administrativo para gerenciamento dos sorteios, usuários e afiliados. Em conjunto com a equipo composta de 10 desenvolvedores.",
      "Criação de um dashboard financeiro para gerenciamento de empréstimos e cadastro de uma Fintech Financeira com 2.000 usuários cadastrados.",
    ],
    tags: [
      "Next.Js",
      "React.Js",
      "Typescript",
      "REST API",
      "Spring Boot",
      "Postgres SQL",
      "Node Js",
      "Docker",
      "Redis",
      "Tailwind Css",
      "AWS",
      "Amplify",
    ],
    year: "2026",
  },
  {
    title: "Desenvolvedor Fullstack",
    company: "Go Tech DS",
    tasks: [
      " Construção de aplicações web modernas com integrações de APIS, como landing pages e dashboards.",
      "Desenvolvimento de APIs para integrar sistemas de gestão de equipes, como o sistema de gestão de equipes de vendas.",
    ],
    tags: ["Next.Js", "React.Js", "Typescript", "REST API", "Hostiger", "Postgres SQL", "Node Js"],
    year: "2024",
  },
  {
    title: "Desenvolvedor Fullstack",
    company: "UFPA",
    tasks: [
      "Função: Desenvolvimento, integração e manutenção de um web aplicativo para o ensino e aprendizagem de português para refugiados venezuelanos, com ênfase no dialeto paraense.",
      "Funcionalidades da Plataforma: Sistema de login. Monitoramento do progresso do aluno, exercícios de leitura, áudio e escrita interativo e gameficados.",
      "Tecnologias Utilizadas no Front-end: Next Js, React JS, Tailwind CSS, Ant Design, Typescript.",
      " Tecnologias Utilizadas no Back-end: Node.js, Cadastro de usuários, Autenticação com o Next Auth, Banco de dados utilizando PostgreSQL, Prisma ORM, Supabase.",
      "Aplicação de metodologias Agéis, CI/CD, trabalho em equipe com o grupo de UX para melhorias contínuas.",
    ],
    tags: ["Node.js", "Next.js", "Typescript", "Prisma ORM", "Postgres SQL", "Tailwind CSS", "REST API", "Next Auth", "Supabase", "CI/CD"],
    year: "2023",
  },
];

export const projectData: ProjectData = [
  {
    title: "PLATAFORMA EDUCACIONAL MÉDICA",
    image: ["/mielofibrose-1.png", "/mielofibrose-2.png", "/mielofibrose-3.png", "/mielofibrose-4.png"],
    link: { production: "https://mielofibrosegsk.com.br/" },
    resume:
      "Plataforma educacional da GSK para o programa Mielofibrose IN Foco, voltada a hematologistas para atualização científica e discussão de casos clínicos. A plataforma organiza informações sobre eventos, coortes e permite inscrição de especialistas.",
    text: [
      {
        p: "O site apresenta o programa Mielofibrose IN Foco, uma iniciativa educacional da GSK voltada a hematologistas para atualização científica e discussão de casos clínicos relacionados à mielofibrose.",
      },
      { h2: "Objetivo da plataforma:" },
      {
        ul: [
          "Divulgar o programa educacional",
          "Organizar informações sobre eventos e coortes",
          "Permitir inscrição de especialistas",
          "Disponibilizar conteúdo científico e informativo",
        ],
      },
      { h2: "Funcionalidades:" },
      {
        ul: [
          "Landing page com navegação vertical",
          "Seções modulares para conteúdo científico",
          "Call-to-actions para inscrição",
          "Layout responsivo",
          "Integração com formulários de inscrição",
        ],
      },
      { h2: "Contribuição técnica:" },
      {
        ul: ["Desenvolvimento da interface web", "Implementação do layout responsivo", "Estruturação das páginas para navegação clara e conversão"],
      },
    ],
    tags: ["Next.js", "React.js", "Typescript", "Tailwind CSS", "Responsivo"],
  },
  {
    title: "PLATAFORMA DE PAGAMENTOS PAY2B",
    image: ["/pay2b-1.png", "/pay2b-2.png", "/pay2b-3.png", "/pay2b-4.png"],
    link: { production: "https://pay2b.com.br/" },
    resume:
      "Pay2B é uma plataforma tecnológica de pagamentos multi-provedores voltada para seguradoras e empresas que precisam integrar múltiplos métodos de pagamento — Pix, cartão e boleto — em uma única infraestrutura com automação de cobranças e checkout white-label.",
    text: [
      {
        p: "A Pay2B é uma plataforma tecnológica de pagamentos multi-provedores voltada principalmente para seguradoras e empresas que precisam integrar múltiplos métodos de pagamento em uma única infraestrutura.",
      },
      { h2: "Objetivo da plataforma:" },
      {
        ul: [
          "Integração com múltiplos meios de pagamento (Pix, cartão, boleto)",
          "Automação de cobranças",
          "Gestão de inadimplência",
          "Checkout white-label customizável",
        ],
      },
      { h2: "Funcionalidades:" },
      {
        ul: [
          "Landing page institucional",
          "Componentes para apresentação de features",
          "Formulários de contato e geração de leads",
          "Navegação clara para produtos e soluções",
        ],
      },
      { h2: "Contribuição técnica:" },
      {
        ul: [
          "Desenvolvimento de interfaces web",
          "Implementação de seções modulares",
          "Otimização da experiência de usuário",
          "Suporte à integração com sistemas da plataforma",
        ],
      },
    ],
    tags: ["Next.js", "React.js", "Typescript", "Tailwind CSS", "Responsivo"],
  },
  {
    title: "SPAWND — PLATAFORMA WEB DE GAMES",
    image: ["/spawnd-1.png", "/spawnd-2.png"],
    link: { production: "https://www.spawnd.gg/pt" },
    resume:
      "Spawnd é uma plataforma que permite jogar games diretamente no navegador, sem necessidade de instalação ou download. A interface foi projetada para oferecer uma experiência imersiva com catálogo de jogos, navegação simplificada e suporte a fullscreen.",
    text: [
      {
        p: "Spawnd é uma plataforma que permite jogar games diretamente no navegador, sem necessidade de instalação ou download, com experiência instantânea e em modo fullscreen.",
      },
      { h2: "Objetivo da plataforma:" },
      {
        ul: ["Experiência de jogo instantânea sem instalação", "Suporte a modo fullscreen", "Acessível diretamente via navegador"],
      },
      { h2: "Funcionalidades:" },
      {
        ul: ["Catálogo de jogos", "Layout focado em imersão", "Navegação simplificada", "Suporte a fullscreen"],
      },
      { h2: "Contribuição técnica:" },
      {
        ul: ["Desenvolvimento da interface web", "Construção da experiência de navegação", "Integração com sistema de jogos em nuvem"],
      },
    ],
    tags: ["Next.js", "React.js", "Typescript", "Tailwind CSS", "Responsivo"],
  },
  {
    title: "INVESTMONEY — PLATAFORMA FINANCEIRA PARA CLÍNICAS",
    image: ["/investmoney-1.png", "/investmoney-2.png", "/investmoney-3.png"],
    link: { production: "https://investmoneysa.com.br/" },
    resume:
      "Investmoney é uma plataforma financeira especializada em soluções para clínicas odontológicas e de estética, permitindo parcelamento de tratamentos via boleto enquanto a clínica recebe o valor à vista. Mais de 2.500 clínicas parceiras no Brasil.",
    text: [
      {
        p: "A Investmoney é uma empresa especializada em soluções financeiras para clínicas odontológicas e de estética, permitindo parcelamento de tratamentos via boleto enquanto a clínica recebe o valor à vista. A empresa possui mais de 2.500 clínicas parceiras no Brasil.",
      },
      { h2: "Objetivo da plataforma:" },
      {
        ul: [
          "Apresentar o modelo de financiamento",
          "Captar clínicas interessadas na solução",
          "Explicar o funcionamento da antecipação de recebíveis",
        ],
      },
      { h2: "Funcionalidades:" },
      {
        ul: ["Landing page institucional", "Fluxo explicativo de serviço", "Formulários de contato", "Seções de depoimentos e prova social"],
      },
      { h2: "Contribuição técnica:" },
      {
        ul: ["Desenvolvimento da interface web", "Estruturação da navegação", "Implementação de páginas informativas e formulários"],
      },
    ],
    tags: ["Next.js", "React.js", "Typescript", "Tailwind CSS", "Responsivo"],
  },
  {
    title: "PC DOS SONHOS",
    image: [
      "/pc-dos-sonhos-1.png",
      "/pc-dos-sonhos-2.png",
      "/pc-dos-sonhos-3.png",
      "/pc-dos-sonhos-4.png",
      "/pc-dos-sonhos-5.png",
      "/pc-dos-sonhos-6.png",
    ],
    link: { production: "https://pc-dos-sonhos.vercel.app/" },
    video: [""],
    resume:
      "Pc dos sonhos é uma plataforma de vendas de rifas com o propósito de sorteio de Pc gamers e consoles com mais de 16.000 usuários cadastrados e sistema de afiliados. Desenvolvi o dashboard administrativo para gerenciamento dos sorteios, usuários, afiliados. ",
    text: [
      {
        p: "Pc dos sonhos é uma plataforma de vendas de rifas com o propósito do sorteio de Pc gamers e consoles com mais de 16.000 usuários cadastrados e sistema de afiliados. Desenvolvi o dashboard administrativo para gerenciamento dos sorteios, usuários, afiliados.",
      },
      { h2: "Fetures do sistema:" },
      {
        ul: [
          "Layout tanto para desktop quanto para mobile",
          "Gateway de pagamento do Mercado Pago",
          "Painel Administrativo para gerenciamento dos sorteios, usuários, afiliados",
          "O usuário afiliado possui dashboard para gerenciar sua comissão e seus saques",
          "O Dashboard pode criar novas campanhas, criar novos usuários e gerenciar os afiliados",
          "O carrinho possui todas as funções necessárias pra calcular a ordem do usuário junto com a  quantidade e o preço utilizando context API.",
          "Cada usuário possui um gerenciador de tickets onde pode consultá-los e verificar suas cotas.",
        ],
      },
    ],
    tags: [
      "Next Js 14",
      "React.Js",
      "Tanstack Query",
      "Tailwind CSS",
      "Typescript",
      "Java",
      "Swagger",
      "Shadcn Ui",
      "Autenticação JWT",
      "Context API",
      "Postgres SQL",
      "REST API",
      "Redis",
      "Mercado Pago",
      "Spring Boot",
      "Docker",
      "Github Actions",
      "AWS",
      "Gitlab CI/CD",
      "Github Actions",
      "Gitlab CI/CD",
    ],
  },
  {
    title: "FSW FOODS",
    image: [
      "/fsw-foods-0.png",
      "/fsw-foods-1.png",
      "/fsw-foods-2.png",
      "/fsw-foods-3.png",
      "/fsw-foods-4.png",
      "/fsw-foods-5.png",
      "/fsw-foods-6.png",
      "/fsw-foods-7.png",
      "/fsw-foods-8.png",
    ],
    link: {
      production: "https://fsw-foods.vercel.app/",
      repository: "https://github.com/jrneliodias/fsw-foods",
    },
    video: ["https://www.youtube.com/embed/MI4Cvqn_TCg?si=awukChlFi3omtevO"],
    resume:
      "FSW foods é um projeto Full Stack com todo o desenvolvimento de um e-commmerce de restaurantes estilo Ifood com o catalogo dos produtos, dos restaurantes, com login do usuário e carrinho de compra e pagamento.",
    text: [
      {
        p: "FSW foods é um projeto Full Stack com todo o desenvolvimento de um e-commmerce de restaurantes estilo Ifood com o catalogo dos produtos, dos restaurantes, com login do usuário e carrinho de compra e pagamento para sua loja. O diferencial é o total controle sobre os componentes da loja e o sistema de pagamento. Podendo expandi-lo com novas funcionalidades.",
      },
      {
        p: "Então mesmo que seja algo pronto e passo a passo, tem seu valor aprender com projetos reais, visto que você precisa acompanhar o racíocionio de outra pessoa para chegar no objetivo, é um curso longo, vai aparecer erros que não apaprece no código dele e sempre deixamos passar algo. Além disso, você aprende novas sacadas e soluções para problemas cotidianos na vida de um Dev.",
      },
      { h2: "Fetures do sistema:" },
      {
        ul: [
          "Layout tanto para desktop quanto para mobile",
          "O usuário pode buscar o restaurante na barra de pesquisa",
          "O carrinho possui todas as funções necessárias pra calcular a ordem do usuário junto com a  quantidade e o preço utilizando context API.",
          "Cada usuário pode criar uma lista de restaurantes favoritos",
          "Cada usuário possui um gerenciador de pedidos onde pode consultar todos os pedidos e até refazê-los.",
        ],
      },
      { h2: "Melhorias feitas por mim:" },
      {
        ul: [
          "Além do projeto feito durante o evento, inseri a responsividade do site para as versões desktop e tablet com o Figma do projeto fornecido, adicionei o sistema de avaliação do restaurante no banco de dados e nas queries dos restaurantes para renderizar os componentes. ",
        ],
      },
    ],
    tags: [
      "Next Js 14",
      "React.Js",
      "Typescript",
      "Shadcn Ui",
      "Prisma ORM",
      "Stripe",
      "Context API",
      "Next Auth",
      "Postgres SQL",
      "REST API",
      "Serve Actions",
      "Vercel Deploy",
      "Neon Database",
    ],
  },
  {
    title: "PROJETO LINGO",
    image: ["/lingo-project-1.png", "/lingo-project-2.png", "/lingo-project-3.png"],
    link: {
      repository: "https://github.com/jrneliodias/lingo-project",
      production: "https://lingo-project.vercel.app",
    },
    video: ["https://www.youtube.com/embed/D_McBEfwxJY?si=5xPyMtiC87neRHH8"],
    resume:
      "Lingo é um projeto que cria uma plataforma de aprendizado de idiomas de forma gameficada semelhante o Duolingo. O objetivo do projeto é construir um sistema robusto e escalável para múltiplas linguagens, controle de usuários e pontuações.",
    text: [
      {
        p: "Lingo é um projeto de uma plataforma de aprendizado de idiomas de forma gameficada semelhante o Duolingo. O objetivo do projeto é construir um sistema robusto e escalável para múltiplas linguagens, controle de usuários e pontuações. Além disso, é uma oportunidade de aplicar o Project Based Learning (PBL), ou seja me atualizar e aprofundar meus conhecimentos na integrações de tecnologias com um desenvolvimento de um projeto open-source. Claro que isso foi possível pelo trabalho espetacular do Antonio do Code With Antonio que criou esse curso maravilhoso gratuito. Recomendadissímo os cursos dele.",
      },
      {
        p: "Então mesmo que seja algo pronto e passo a passo, tem seu valor aprender com projetos reais, visto que você precisa acompanhar o racíocionio de outra pessoa para chegar no objetivo, é um curso longo, vai aparecer erros que não apaprece no código dele e sempre deixamos passar algo. Além disso, você aprende novas sacadas e soluções para problemas cotidianos na vida de um Dev.",
      },
      { h2: "Fetures do sistema:" },
      {
        ul: [
          "🖥️ Sistema personalizado para cada usuário",
          "🔊 Efeitos Sonoros",
          "❤️ Sistema de tentativas com os corações",
          "🌟 Sistema de Pontos / XP ",
          "🔄 Práticas de lições antigas para ganhar corações",
          "🏆 Tabela de lideres ",
          "🗺 Desafios valendo pontos",
          "🛍 Sistema de shop para obter mais corações ou Assinar o plano mensal",
          "📚 Dashboard para monitorar o progresso dos usuários",
        ],
      },
    ],
    tags: [
      "Next Js 14",
      "React.Js",
      "Typescript",
      "Shadcn Ui",
      "Drizzle ORM",
      "Stripe",
      "Zustend",
      "Clerk",
      "Eleven Labs",
      "Postgres SQL",
      "REST API",
      "Serve Actions",
      "Vercel Deploy",
    ],
  },
  {
    title: "VIDEO OBJECT DETECTIONS BY IA INTERFACE",
    image: ["/detect-object-interface.png", "/detect-objects-schema.png"],
    link: {
      repository: "https://github.com/jrneliodias/detect-object-interface",
    },
    video: ["https://www.youtube.com/embed/BLGKxnFnMqo?si=JGmcAzIXM4BivgTt"],
    resume:
      "Desenvolvimento do frontend, backend e banco de dados Postgres de uma interface para detecção de objetos em videos utilizando React, Python, Flask, IA YOLOv8 e Open CV. O usuário pode inserir um video que deseja detectar, configurar o modelo YOLO e receber o resultado em video na mesma interface com as detecções em tabela",
    text: [
      {
        p: "Esse projeto é o desenvolvimento de uma interface para o usuário detectar objetos e pessoas dentro de um video utilizando inteligência artificial utilizando o modelo Yolo v8. Na interface o usuário pode configurar os principais parâmetros do modelo, obter o video com as detecções e receber os resultados em uma tabela. Veja o video no final para mais informações.",
      },
      {
        p: "Na segunda figura, temos o esquema do fluxo de informações do app. O sistema é divido em três áreas distintas: Frontend, Backend e banco de dados, cada uma desempenhando um papel fundamental no funcionamento do projeto. Vamos dar uma olhada nas tecnologias que utilizamos em cada uma delas:",
      },
      {
        h2: "Tecnologias da interface da interface do usuário:",
        p: "No frontend, optei por:",
        ul: [
          "React com Vite para uma experiência de desenvolvimento ágil.",
          "Typescript para um código mais robusto e seguro.",
          "Shadcn Ui para componentes visuais consistentes e modernos.",
          "Tailwind CSS para facilitar a estilização e o design responsivo.",
          "ViTest para testes automatizados e garantia de qualidade.",
        ],
      },
      {
        h2: "Tecnologias do servidor:",
        p: "Para o Backend, escolhi:",
        ul: [
          "React com Vite para uma experiência de desenvolvimento ágil.",
          "Python como linguagem principal devido à sua versatilidade e poder.",
          "Flask como framework web, oferecendo uma estrutura leve e flexível.",
          "Pytest para testes unitários e de integração, garantindo a estabilidade do sistema.",
          "Open CV para manipular os frames do video e desenhar a detecação do objeto",
          "SQL Alchemy para a comunicação eficiente com o banco de dados e manipulação de dados.",
          "E, é claro, YOLOv8 para a detecção de objetos com precisão e rapidez.",
        ],
      },
      {
        h2: "Tecnologias do banco de dados:",
        p: "No banco de dados, utilizamos:",
        ul: [
          "Docker para criar ambientes isolados e facilitar a implantação.",
          "Postgres SQL para armazenar e gerenciar os dados de forma eficiente e confiável.",
        ],
      },
      {
        h2: "Considerações",
        p: "Este projeto representou um verdadeiro desafio para mim, pois tive que lidar com diferentes tecnologias e arquiteturas, além de aprender a integrá-las de forma coesa. Desde a estruturação do frontend e do backend até a comunicação com o banco de dados, cada etapa foi uma oportunidade para aprimorar meus conhecimentos em arquitetura de software e práticas de Clean Code. Além disso, a experiência de trabalhar com Flask para construir uma API robusta e eficiente, juntamente com a integração de um modelo de IA como uma ferramenta no processo, foi extremamente enriquecedora. ",
      },
      {
        p: "Aprendi muito sobre como gerenciar erros, planejar rotas e garantir uma comunicação eficaz entre o servidor e o cliente. Não posso deixar de mencionar minha jornada com Docker, onde adquiri habilidades para criar imagens personalizadas e gerenciar ambientes de desenvolvimento de forma eficiente, utilizando o docker-compose.",
      },
    ],
    tags: ["Vite", "React.Js", "Typescript", "Shadcn Ui", "Vitest", "Python", "Flask", "YOLOv8", "Open CV", "Postgres SQL", "REST API"],
  },
  {
    title: "Modern Next Js To Do App",
    image: ["/nextjs_todo.png"],
    link: {
      repository: "https://github.com/jrneliodias/next-react-todo-app",
      production: "https://todo-list-app-nelio.vercel.app/",
    },
    video: ["https://www.youtube.com/embed/QOixX-uKVP4?si=LkrFqwM3cpOyOkPv"],
    resume:
      "To Do App é um projeto clássico que visa criar experiência no front end com interfaces em React, utilizando múltiplos filtros com manipulação de estados, backend Node para o desenvolvimento de API, arquitetura REST para criar um CRUD, banco de dados hospedado na Vercel e aplicação de testes unitários com Jest.",
    text: [
      {
        p: "To Do App é um projeto clássico que visa criar experiência no front end com interfaces em React, com múltiplos filtros com manipulação de estados, backend Node para o desenvolvimento de API, arquitetura REST para criar um CRUD, banco de dados hospedado na Vercel e aplicação de testes unitários com Jest.",
      },
      {
        h2: "Fetures do sistema:",
      },
      {
        ul: [
          "O usuário pode criar, editar, apagar, escolher uma cor para a tarefa, marcar como feito e marcar como favorito qualquer tarefa.",
          "Todas as tarefas favoritas são movidas para o topo da lista.",
          "A interface tem filtos para as cores e por tarefa favorita. Sendo que pode escolher múltiplos filtros.",
        ],
      },
      {
        h2: "Back-end:",
      },
      {
        ul: [
          "Toda edição em uma tarefa pelo usuário é salva no banco de dados via API.",
          "A API foi testada com Jest e encontra-se no repositório. Coloquei na imagem abaixo os resultados.",
        ],
      },
    ],
    tags: ["Next Js", "React", "Typescript ", "Postgres SQL", "Daisy Ui", "Vercel Deploy", "Jest", "GIT"],
  },
  {
    title: "LABVCON v2.0",
    image: ["/labvconv2-1.png", "/labvconv2-2.png"],
    link: { repository: "https://github.com/jrneliodias/tcc-labvcon-python" },
    video: ["https://www.youtube.com/embed/BrZvD8XTm4Y?si=a--Qdn2FS0wERt65"],
    resume:
      "LABVCON v2.0 é uma interface de controle de protótipos de sistemas dinâmicos implementados em Arduino em tempo real. Com ela se pode implementar os controladores PID, IMC (Internal Model Control), GMV (Generalized Minimum Variance) e GPC (Generalized Predictive Control) em sistemas SISO (Single Input Single Output).",
    text: [
      {
        p: "LABVCON v2.0 é uma interface de controle de protótipos de sistemas dinâmicos implementados em Arduino em tempo real usando técnicas de Engeharia de Controle. Com ela se pode implementar os controladores PID, IMC (Internal Model Control), GMV (Generalized Minimum Variance) e GPC (Generalized Predictive Control) em sistemas SISO (Single Input Single Output).",
      },
      {
        p: "O objetivo é construir um laboratório para alunos da engenharia implementarem esses controladores sem precisarem escrever todo o código necessário para esses controles. Dessa forma, o usuário insere o modelo do sistema e o tempo de amostragem, implementa os controladores no sistema e consegue receber os gráficos de resposta, do sinal de controle e índices de Métricas IAE e TVC para comparar os resultados.",
      },
    ],
    tags: ["Python", "Arduino", "Pyserial", "Robotic", "Streamlit", "Prototype"],
  },

  {
    title: "LABVCON v1.0",
    image: ["/labvcon_website.png", "/Logo_LABVCON.png"],
    link: { repository: "https://github.com/jrneliodias/LABVCON", production: "https://jrneliodias.github.io/LABVCON/" },
    video: [""],
    resume:
      "Esse projeto tem como objetivo desenvolver um software que simula um laboratório de engenharia de controle clássico para um usuário que não tenha acesso aos instrumentos básicos necessários. Nesse laboratório, o usuário poderá explorar as estrututuras clássicas de um controlador PID, explorar suas sintonias por tabela e simular essas configurações nas funções de transferências das plantas desejadas.",
    text: [
      {
        p: "Esse projeto tem como objetivo desenvolver um software que simula um laboratório de engenharia de controle clássico para um usuário que não tenha acesso aos instrumentos básicos necessários. Nesse laboratório, o usuário poderá explorar as estrututuras clássicas de PID, explorar as sintonias de PID por tabela e simular essas configurações nas funções de transferências das plantas desejadas.",
      },
      {
        p: "O site foi construido para apresentar o projeto e desenvolver um manual de instruções e tutoriais de uso da plataforma.",
      },
    ],
    tags: ["HTML", "CSS", "Javascript", "Matlab", "git"],
  },
];
