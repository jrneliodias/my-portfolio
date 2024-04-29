
export const timelineData = [
    {
        title: "Fullstack Developer",
        company: "Freelancing",
        tasks: ["Building modern web applications with API integration such as landing pages and dashboards"],
        tags: ["Next.Js", "React.Js", "Typescript", "REST API", "Hostiger"],
        year: "2024"
    },
    {
        title: "Full Stack Developer",
        company: "UFPA",
        tasks: ["Objetivo do Projeto: Desenvolvimento de um web aplicativo para o ensino e aprendizagem de português para refugiados venezuelanos, com ênfase no dialeto paraense.", "Funcionalidades da Plataforma: Sistema de login. Exercícios de leitura. Exercícios de áudio. Exercícios de escrita.", "Tecnologias Utilizadas no Front-end: Next Js, React JS, Tailwind CSS, Ant Design, Typescript.", " Tecnologias Utilizadas no Back-end: Node.js, Cadastro de usuários, Autenticação com o Next Auth, Banco de dados utilizando PostgreSQL, Prisma ORM, Supabase.", "Aplicação de metodologias Agéis, CI/CD, trabalho em equipe com o grupo de UX para melhorias contínuas."],
        tags: ["Node.js", "Next.js", "Typescript", "Prisma ORM", "Postgres SQL", "Tailwind CSS", "REST API", "Next Auth", "Supabase", "CI/CD"],
        year: "2023"
    },

]

export const projectData = [
    {
        title: "PROJETO LINGO",
        image: ["https://source.unsplash.com/random/500x800?software"],
        link: ["https://github.com/jrneliodias/lingo-project", "https://lingo-project.vercel.app"],
        resume: "Lingo é um projeto que cria uma plataforma de aprendizado de idiomas de forma gameficada semelhante o Duolingo. O objetivo do projeto é construir um sistema robusto e escalável para múltiplas linguagens, controle de usuários e pontuações.",
        text: [
            "Lingo é um projeto que cria uma plataforma de aprendizado de idiomas de forma gameficada semelhante o Duolingo. O objetivo do projeto é construir um sistema robusto e escalável para múltiplas linguagens, controle de usuários e pontuações. Além disso, é uma oportunidade de aplicar o Project Based Learning (PBL), ou seja me atualizar e aprofundar meus conhecimentos na integrações de tecnologias com um desenvolvimento de um projeto open-source. Claro que isso foi possível pelo trabalho espetacular do Antonio do Code With Antonio que criou esse curso maravilhoso gratuito. Recomendadissímo os cursos dele.",
            "Então mesmo que seja algo pronto e passo a passo, tem seu valor aprender com projetos reais, visto que você precisa acompanhar o racíocionio de outra pessoa para chegar no objetivo, é um curso longo, vai aparecer erros que não apaprece no código dele e sempre deixamos passar algo. Além disso, você aprende novas sacadas e soluções para problemas cotidianos na vida de um Dev.",
        ],
        tags: ["Next Js 14", "React.Js", "Typescript", "Shadcn Ui", "Drizzle ORM", "Stripe", "Zustend", "Clerk", "Eleven Labs", "Postgres SQL", "REST API", "Serve Actions", "Vercel Deploy"],
    },
    {
        title: "VIDEO OBJECT DETECTIONS BY IA INTERFACE",
        image: ["https://source.unsplash.com/random/800x600?software"],
        link: ["https://github.com/jrneliodias/detect-object-interface"],
        resume: "Desenvolvimento do frontend, backend e banco de dados de um sistema de detecção de objetos em videos utilizando IA e Open CV",
        text: [
            "Objetivo: Construir a interface  intuitiva de comunicação do usuário, o servidor para o processamento do video e o banco de dados para armazenar os resultados. Desse modo, o usuário envia seu video para o servidor pela interface e, após o processamento é devolvido para o navegador.",
            "Experiências com o projeto: Adquiri experiência ao trabalhar com um projeto com 3 servidores independentes. Desenvolvi toda estrutura do frontend, backend e banco de dados. Obtive experiência na construção de API utilizando Flask e Python e na utilização do modelo YOLOv8 e Open CV.",
            "Distribuição: Criação de containers para cada servidor com docker-compose."
        ],
        tags: ["Vite", "React.Js", "Typescript", "Shadcn Ui", "Vitest", "Python", "Flask", "YOLOv8", "Open CV", "Postgres SQL", "REST API"],
    },
    {
        title: "Modern Next Js To Do App",
        image: ["/download.jpeg"],
        link: ["https://github.com/jrneliodias/next-react-todo-app", "https://todo-list-app-nelio.vercel.app/"],
        resume: "To Do App é um projeto clássico que visa criar experiência no front end com interfaces em React, utilizando múltiplos filtros com manipulação de estados, backend Node para o desenvolvimento de API, arquitetura REST para criar um CRUD, banco de dados hospedado na Vercel e aplicação de testes unitários com Jest.",
        text: ["To Do App é um projeto clássico que visa criar experiência no front end com interfaces em React e Next Js",
            "Múltiplos filtros com manipulação de estados",
            "backend Node para o desenvolvimento de API, arquitetura REST para criar um CRUD, banco de dados hospedado na Vercel",
            "Aplicação de testes unitários com Jest."],
        tags: ["Next Js", "React", "Typescript ", "Postgres SQL", "Daisy Ui", "Vercel Deploy", "Jest", "GIT"]
    },
    {
        title: "LABVCON v2.0",
        image: ["/download.jpeg"],
        link: ["https://github.com/jrneliodias/tcc-labvcon-python"],
        resume: "LABVCON v2.0 é uma interface de controle de protótipos de sistemas dinâmicos implementados em Arduino em tempo real. Com ela se pode implementar os controladores PID, IMC (Internal Model Control), GMV (Generalized Minimum Variance) e GPC (Generalized Predictive Control) em sistemas SISO (Single Input Single Output).",
        text: ["LABVCON v2.0 é uma interface de controle de protótipos de sistemas dinâmicos implementados em Arduino em tempo real. Com ela se pode implementar os controladores PID, IMC (Internal Model Control), GMV (Generalized Minimum Variance) e GPC (Generalized Predictive Control) em sistemas SISO (Single Input Single Output).", "O usuário insere o modelo do sistema e o tempo de amostragem, implementa os controladores no sistema e consegue receber os gráficos de resposta, do sinal de controle e índices de Métricas IAE e TVC para comparar os resultados."],
        tags: ["Python", "Arduino", "Pyserial", "Robotic", "Streamlit", "Prototype"]
    },
    {
        title: "LABVCON v1.0",
        image: ["/download.jpeg"],
        link: ["https://github.com/jrneliodias/LABVCON", "https://jrneliodias.github.io/LABVCON/"],
        resume: "Esse projeto tem como objetivo desenvolver um software que simula um laboratório de engenharia de controle clássico para um usuário que não tenha acesso aos instrumentos básicos necessários. Nesse laboratório, o usuário poderá explorar as estrututuras clássicas de um controlador PID, explorar suas sintonias por tabela e simular essas configurações nas funções de transferências das plantas desejadas.",
        text: ["LABVCON v2.0 é uma interface de controle de protótipos de sistemas dinâmicos implementados em Arduino em tempo real. Com ela se pode implementar os controladores PID, IMC (Internal Model Control), GMV (Generalized Minimum Variance) e GPC (Generalized Predictive Control) em sistemas SISO (Single Input Single Output).", "O usuário insere o modelo do sistema e o tempo de amostragem, implementa os controladores no sistema e consegue receber os gráficos de resposta, do sinal de controle e índices de Métricas IAE e TVC para comparar os resultados."],
        tags: ["HTML", "CSS", "Javascript", "Matlab", "git"]
    },

]