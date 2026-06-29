import type { ProjectData, TimelineData } from "../types";

export const timelineDataEn: TimelineData = [
  {
    title: "Senior Full Stack Developer",
    company: "Startamus",
    tasks: [
      "Developed B2B financial backoffice portal (Portal Billing) in React 19, TypeScript and Vite for billing, delinquency, commissions, receivables, webhooks and automated reports — domain-driven architecture with TanStack Query, React Hook Form, Zod, RBAC, multi-domain white-label, i18n and deployment via Jenkins/Firebase.",
      "Implemented backend features in NestJS 11 + TypeScript for a B2B SaaS platform serving medical communities (ALLM), including community-level RBAC, media pipeline with AWS Lambda, Redis caching, Firebase FCM notifications and Jest tests.",
      "Developed white-label checkout in React integrated with a payment gateway for P4F/MAPFRE Pay, supporting card, Pix, bank slip and direct debit, contributing to a ~40% reduction in legacy flow load time.",
      "Built web gaming platform in SvelteKit 5 + TypeScript for Nuuvem, with gamepad/keyboard navigation, internationalization for 5 languages, JWT authentication and GitLab CI/CD pipeline with Vitest and Playwright.",
      "Developed administrative dashboards with Next.js, React, TypeScript and TanStack Query, along with APIs using Django REST Framework, PostgreSQL, AWS S3 and Twilio, contributing to code reviews, coding standards and technical delivery coordination.",
    ],
    tags: [
      "React",
      "Next.js",
      "SvelteKit",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "NestJS",
      "Node.js",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "AWS",
      "Docker",
      "Firebase",
      "Jenkins",
      "GitHub Actions",
      "Sentry",
      "Vitest",
      "Playwright",
    ],
    year: "2026",
  },
  {
    title: "Fullstack Developer",
    company: "Go Tech DS",
    tasks: [
      "Built modern web applications with API integrations, such as landing pages and dashboards.",
      "Developed APIs to integrate team management systems, such as the sales team management system.",
    ],
    tags: ["Next.Js", "React.Js", "Typescript", "REST API", "Hostiger", "Postgres SQL", "Node Js"],
    year: "2022",
  },
  {
    title: "Fullstack Developer",
    company: "UFPA",
    tasks: [
      "Role: Development, integration and maintenance of a web application for teaching and learning Portuguese for Venezuelan refugees, with emphasis on the Pará dialect.",
      "Platform Features: Login system. Student progress monitoring, interactive and gamified reading, audio and writing exercises.",
      "Frontend Technologies: Next Js, React JS, Tailwind CSS, Ant Design, Typescript.",
      "Backend Technologies: Node.js, User registration, Authentication with Next Auth, Database using PostgreSQL, Prisma ORM, Supabase.",
      "Application of Agile methodologies, CI/CD, teamwork with the UX group for continuous improvements.",
    ],
    tags: ["Node.js", "Next.js", "Typescript", "Prisma ORM", "Postgres SQL", "Tailwind CSS", "REST API", "Next Auth", "Supabase", "CI/CD"],
    year: "2022",
  },
];

export const projectDataEn: ProjectData = [
  {
    title: "PORTAL BILLING — B2B FINANCIAL BACKOFFICE",
    image: ["/portal-billing-1.png", "/portal-billing-2.png", "/portal-billing-3.png", "/portal-billing-4.png"],
    link: { production: "https://sandbox.sancor.portal.pay2b.net/" },
    resume:
      "B2B backoffice SPA built with React 19, TypeScript and Vite for managing billing, delinquency, commissions, receivables, webhooks and automated reports. Domain-driven architecture with TanStack Query, React Hook Form, Zod, RBAC, multi-domain white-label and deployment via Jenkins/Firebase.",
    text: [
      {
        p: "Portal Billing is a B2B corporate SPA for financial operations, covering everything from billing and delinquency management to webhooks, CSV uploads and automated report scheduling. The architecture was organized by domain, with clear separation between pages, components, hooks, services, schemas and types.",
      },
      { h2: "Modules and features:" },
      {
        ul: [
          "Billing management with advanced filters, pagination, configurable columns and financial totals",
          "Delinquency and commission reports with PDF, XLS and JSON export",
          "CSV file uploads for batch financial processing",
          "Webhooks module with CRUD, ping, resend and request/response history",
          "Automatic report scheduling via email, FTP, FTPS and SFTP",
          "Financial dashboard with Recharts charts and delinquency and commission KPIs",
          "Client and broker registrations with validated forms and postal code lookup",
          "Per-domain white-label with configurable favicon, background and messages",
        ],
      },
      { h2: "Architecture and technical decisions:" },
      {
        ul: [
          "Domain-driven architecture: pages → components → hooks → services → Axios",
          "TanStack Query for server cache, staleTime, placeholderData and post-mutation invalidation",
          "React Hook Form + Zod for typed forms with CPF/CNPJ validation, including alphanumeric CNPJ from RFB",
          "RBAC with route guards, permission-driven sidebar and super admin-only restricted routes",
          "Lazy-loaded routes with React.lazy and Suspense for optimized loading",
          "Zustand for local state of modals and dialogs",
          "i18next with PT-BR, EN and ES support and automatic language detection",
          "Sentry with tracing and replay, global error boundaries and standardized loading/error states",
        ],
      },
      { h2: "Quality and delivery:" },
      {
        ul: [
          "TypeScript strict, ESLint, Prettier, Husky and lint-staged",
          "Unit tests with Vitest covering document validation and edge cases",
          "Parameterized Jenkins pipeline for sandbox and production environments",
          "Firebase Hosting deployment with sourcemaps and per-environment Sentry DSN",
        ],
      },
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "Radix UI",
      "Zustand",
      "Axios",
      "Recharts",
      "i18next",
      "Sentry",
      "Vitest",
      "Jenkins",
      "Firebase",
      "RBAC",
      "Webhooks",
    ],
  },
  {
    title: "MAPFREPAY CHECKOUT — MAPFRE PAYMENT INTERFACE",
    image: ["/mapfrepay-1.png", "/mapfrepay-2.png", "/mapfrepay-3.png", "/mapfrepay-4.png", "/mapfrepay-5.png"],
    link: {},
    resume:
      "Payment interface for MAPFRE, one of Brazil's largest insurance companies. A responsive, secure, multi-method web application handling credit card, PIX, bank slip, direct debit and BolePix — with subscription billing and payment method replacement flows. Built as a white-label app in React 19, Vite and strict TypeScript.",
    text: [
      {
        p: "MapfrePay Checkout is the product end customers interact with when paying for MAPFRE insurance. The same codebase serves multiple product contexts via session token, adapting flow, validation and UX across five distinct payment methods.",
      },
      { h2: "What was delivered:" },
      {
        ul: [
          "Full checkout with 5 payment methods (credit card, PIX, bank slip, direct debit and BolePix), each with its own flow, validation and UX",
          "Dynamic installment plans fetched from the API",
          "Pre-authorization flow with automatic polling and retry (up to 3 attempts with backoff)",
          "Card replacement for active subscriptions without contract interruption",
          "PIX QR code with clipboard copy, adapted for mobile and desktop",
          "Complete Brazilian document validation (CPF, CNPJ, alphanumeric CNPJ) using the Federal Revenue algorithm",
          "Client-side RSA encryption of card data before sending to the tokenizer — PCI-aligned",
        ],
      },
      { h2: "Key engineering decisions:" },
      {
        ul: [
          "Token-based sessions: every route requires /:token/*, eliminating explicit authentication and centralizing authorization in the backend",
          "Per-route code splitting with React.lazy() — minimal initial bundle, critical in mobile contexts",
          "Dual Zod schemas: direct debit forms use a full schema for new orders and a partial one for method replacement in subscriptions",
          "Android/Radix Portal stability: exit animations removed from DialogContent, SelectContent and TooltipContent; native <select> on touch devices via useIsTouchDevice hook — bug tracked and documented via Sentry before being resolved",
        ],
      },
      { h2: "Code quality:" },
      {
        ul: [
          "TypeScript in strict mode — no implicit any, no type shortcuts",
          "Custom ESLint rules enforcing hook safety, accessibility (jsx-a11y), mandatory nullish coalescing and optional chaining",
          "Husky enforcing lint and type-check before every commit",
          "Vitest + Testing Library covering critical payment logic",
          "Parameterized Jenkins pipeline for sandbox and production environments",
        ],
      },
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Zustand",
      "React Router",
      "JSEncrypt",
      "DOMPurify",
      "Sentry",
      "Vitest",
      "Firebase",
      "Jenkins",
      "PIX",
      "RSA",
    ],
  },
  {
    title: "MEDICAL EDUCATIONAL PLATFORM",
    image: ["/mielofibrose-1.png", "/mielofibrose-2.png", "/mielofibrose-3.png", "/mielofibrose-4.png"],
    link: { production: "https://mielofibrosegsk.com.br/" },
    resume:
      "GSK educational platform for the Mielofibrose IN Foco program, aimed at hematologists for scientific updates and clinical case discussions. The platform organizes information about events, cohorts and allows specialist registration.",
    text: [
      {
        p: "The site presents the Mielofibrose IN Foco program, a GSK educational initiative aimed at hematologists for scientific updates and discussion of clinical cases related to myelofibrosis.",
      },
      { h2: "Platform objective:" },
      {
        ul: [
          "Promote the educational program",
          "Organize information about events and cohorts",
          "Allow specialist registration",
          "Make scientific and informational content available",
        ],
      },
      { h2: "Features:" },
      {
        ul: [
          "Landing page with vertical navigation",
          "Modular sections for scientific content",
          "Call-to-actions for registration",
          "Responsive layout",
          "Integration with registration forms",
        ],
      },
      { h2: "Technical contribution:" },
      { ul: ["Web interface development", "Responsive layout implementation", "Page structuring for clear navigation and conversion"] },
    ],
    tags: ["Next.js", "React.js", "Typescript", "Tailwind CSS", "Responsivo"],
  },
  {
    title: "PAY2B PAYMENT PLATFORM",
    image: ["/pay2b-1.png", "/pay2b-2.png", "/pay2b-3.png", "/pay2b-4.png"],
    link: { production: "https://pay2b.com.br/" },
    resume:
      "Pay2B is a multi-provider payment technology platform aimed at insurance companies and businesses that need to integrate multiple payment methods — Pix, card and bank slip — into a single infrastructure with automated billing and white-label checkout.",
    text: [
      {
        p: "Pay2B is a multi-provider payment technology platform primarily aimed at insurance companies and businesses that need to integrate multiple payment methods into a single infrastructure.",
      },
      { h2: "Platform objective:" },
      {
        ul: [
          "Integration with multiple payment methods (Pix, card, bank slip)",
          "Automated billing",
          "Delinquency management",
          "Customizable white-label checkout",
        ],
      },
      { h2: "Features:" },
      {
        ul: [
          "Institutional landing page",
          "Components for feature presentation",
          "Contact forms and lead generation",
          "Clear navigation for products and solutions",
        ],
      },
      { h2: "Technical contribution:" },
      {
        ul: [
          "Web interface development",
          "Modular section implementation",
          "User experience optimization",
          "Support for platform system integration",
        ],
      },
    ],
    tags: ["Next.js", "React.js", "Typescript", "Tailwind CSS", "Responsivo"],
  },
  {
    title: "SPAWND — WEB GAMING PLATFORM",
    image: ["/spawnd-1.png", "/spawnd-2.png"],
    link: { production: "https://www.spawnd.gg/pt" },
    resume:
      "Spawnd is a platform that lets you play games directly in the browser, without installation or download. The interface was designed to offer an immersive experience with a game catalog, simplified navigation and fullscreen support.",
    text: [
      {
        p: "Spawnd is a platform that lets you play games directly in the browser, without installation or download, with an instant fullscreen experience.",
      },
      { h2: "Platform objective:" },
      { ul: ["Instant gaming experience without installation", "Fullscreen mode support", "Directly accessible via browser"] },
      { h2: "Features:" },
      { ul: ["Game catalog", "Immersion-focused layout", "Simplified navigation", "Fullscreen support"] },
      { h2: "Technical contribution:" },
      { ul: ["Web interface development", "Navigation experience construction", "Integration with cloud gaming system"] },
    ],
    tags: ["Next.js", "React.js", "Typescript", "Tailwind CSS", "Responsivo"],
  },
  {
    title: "INVESTMONEY — FINANCIAL PLATFORM FOR CLINICS",
    image: ["/investmoney-1.png", "/investmoney-2.png", "/investmoney-3.png"],
    link: { production: "https://investmoneysa.com.br/" },
    resume:
      "Investmoney is a financial platform specializing in solutions for dental and aesthetic clinics, allowing treatment installments via bank slip while the clinic receives the full amount upfront. Over 2,500 partner clinics in Brazil.",
    text: [
      {
        p: "Investmoney is a company specializing in financial solutions for dental and aesthetic clinics, allowing treatment installments via bank slip while the clinic receives the full amount upfront. The company has over 2,500 partner clinics in Brazil.",
      },
      { h2: "Platform objective:" },
      { ul: ["Present the financing model", "Attract clinics interested in the solution", "Explain how receivables anticipation works"] },
      { h2: "Features:" },
      { ul: ["Institutional landing page", "Service explanatory flow", "Contact forms", "Testimonial and social proof sections"] },
      { h2: "Technical contribution:" },
      { ul: ["Web interface development", "Navigation structuring", "Implementation of informational pages and forms"] },
    ],
    tags: ["Next.js", "React.js", "Typescript", "Tailwind CSS", "Responsivo"],
  },
  {
    title: "PC OF DREAMS",
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
      "PC of Dreams is a raffle sales platform for drawing gaming PCs and consoles with over 16,000 registered users and an affiliate system. I developed the administrative dashboard for managing draws, users and affiliates.",
    text: [
      {
        p: "PC of Dreams is a raffle sales platform for drawing gaming PCs and consoles with over 16,000 registered users and an affiliate system. I developed the administrative dashboard for managing draws, users and affiliates.",
      },
      { h2: "System features:" },
      {
        ul: [
          "Layout for both desktop and mobile",
          "Mercado Pago payment gateway",
          "Administrative panel for managing draws, users and affiliates",
          "Affiliate users have a dashboard to manage their commissions and withdrawals",
          "The dashboard can create new campaigns, new users and manage affiliates",
          "The cart has all the necessary functions to calculate the user's order along with quantity and price using Context API.",
          "Each user has a ticket manager where they can check and view their quotas.",
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
    link: { production: "https://fsw-foods.vercel.app/", repository: "https://github.com/jrneliodias/fsw-foods" },
    video: ["https://www.youtube.com/embed/MI4Cvqn_TCg?si=awukChlFi3omtevO"],
    resume:
      "FSW Foods is a Full Stack project with the complete development of a restaurant e-commerce in iFood style, including product catalog, restaurant listing, user login, shopping cart and payment.",
    text: [
      {
        p: "FSW Foods is a Full Stack project with the complete development of a restaurant e-commerce in iFood style, including product catalog, restaurant listing, user login, shopping cart and payment. The highlight is total control over the store components and the payment system, allowing it to be expanded with new features.",
      },
      {
        p: "Even though it's a step-by-step project, there is value in learning from real projects, since you need to follow another person's reasoning to reach the objective. It's a long course, errors will appear that don't appear in his code, and we always miss something. On top of that, you learn new tricks and solutions for everyday problems in a Dev's life.",
      },
      { h2: "System features:" },
      {
        ul: [
          "Layout for both desktop and mobile",
          "Users can search for restaurants in the search bar",
          "The cart has all the necessary functions to calculate the user's order along with quantity and price using Context API.",
          "Each user can create a list of favorite restaurants",
          "Each user has an order manager where they can check all orders and even reorder them.",
        ],
      },
      { h2: "My improvements:" },
      {
        ul: [
          "Beyond the project built during the event, I added responsiveness for desktop and tablet versions using the provided Figma design, added the restaurant rating system to the database and restaurant queries to render the components.",
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
    title: "LINGO PROJECT",
    image: ["/lingo-project-1.png", "/lingo-project-2.png", "/lingo-project-3.png"],
    link: { repository: "https://github.com/jrneliodias/lingo-project", production: "https://lingo-project.vercel.app" },
    video: ["https://www.youtube.com/embed/D_McBEfwxJY?si=5xPyMtiC87neRHH8"],
    resume:
      "Lingo is a project that creates a gamified language learning platform similar to Duolingo. The goal is to build a robust and scalable system for multiple languages, user management and scoring.",
    text: [
      {
        p: "Lingo is a gamified language learning platform similar to Duolingo. The goal is to build a robust and scalable system for multiple languages, user management and scoring. It is also an opportunity to apply Project Based Learning (PBL), updating and deepening knowledge in technology integrations through an open-source project. This was made possible by the spectacular work of Antonio from Code With Antonio who created this wonderful free course. Highly recommended.",
      },
      {
        p: "Even though it's a step-by-step project, there is value in learning from real projects, since you need to follow another person's reasoning to reach the objective. It's a long course, errors will appear that don't appear in his code, and we always miss something. On top of that, you learn new tricks and solutions for everyday problems in a Dev's life.",
      },
      { h2: "System features:" },
      {
        ul: [
          "🖥️ Personalized system for each user",
          "🔊 Sound effects",
          "❤️ Try system with hearts",
          "🌟 Points / XP system",
          "🔄 Old lesson practices to earn hearts",
          "🏆 Leaderboard",
          "🗺 Point-earning challenges",
          "🛍 Shop system to get more hearts or subscribe to the monthly plan",
          "📚 Dashboard to monitor user progress",
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
    title: "VIDEO OBJECT DETECTION BY AI INTERFACE",
    image: ["/detect-object-interface.png", "/detect-objects-schema.png"],
    link: { repository: "https://github.com/jrneliodias/detect-object-interface" },
    video: ["https://www.youtube.com/embed/BLGKxnFnMqo?si=JGmcAzIXM4BivgTt"],
    resume:
      "Development of the frontend, backend and Postgres database for an object detection interface in videos using React, Python, Flask, YOLOv8 AI and OpenCV. The user can insert a video to detect objects in, configure the YOLO model and receive the result video on the same interface with detections in a table.",
    text: [
      {
        p: "This project is the development of an interface for users to detect objects and people within a video using artificial intelligence with the Yolo v8 model. On the interface the user can configure the main model parameters, get the video with the detections and receive results in a table. See the video at the end for more information.",
      },
      {
        p: "In the second figure, we have the app information flow diagram. The system is divided into three distinct areas: Frontend, Backend and database, each playing a fundamental role in the project's operation. Let's look at the technologies used in each:",
      },
      {
        h2: "User interface technologies:",
        p: "For the frontend, I chose:",
        ul: [
          "React with Vite for an agile development experience.",
          "TypeScript for more robust and secure code.",
          "Shadcn UI for consistent and modern visual components.",
          "Tailwind CSS to facilitate styling and responsive design.",
          "ViTest for automated testing and quality assurance.",
        ],
      },
      {
        h2: "Server technologies:",
        p: "For the Backend, I chose:",
        ul: [
          "React with Vite for an agile development experience.",
          "Python as the main language due to its versatility and power.",
          "Flask as the web framework, offering a lightweight and flexible structure.",
          "Pytest for unit and integration tests, ensuring system stability.",
          "OpenCV to manipulate video frames and draw object detections.",
          "SQLAlchemy for efficient database communication and data manipulation.",
          "And, of course, YOLOv8 for accurate and fast object detection.",
        ],
      },
      {
        h2: "Database technologies:",
        p: "For the database, we used:",
        ul: ["Docker to create isolated environments and facilitate deployment.", "PostgreSQL to store and manage data efficiently and reliably."],
      },
      {
        h2: "Considerations",
        p: "This project was a true challenge, as I had to deal with different technologies and architectures while learning to integrate them cohesively. From structuring the frontend and backend to database communication, each step was an opportunity to improve my knowledge of software architecture and Clean Code practices. The experience of working with Flask to build a robust and efficient API, together with integrating an AI model as a tool in the process, was extremely enriching.",
      },
      {
        p: "I learned a lot about managing errors, planning routes and ensuring effective communication between server and client. I also gained skills in creating custom Docker images and managing development environments efficiently using docker-compose.",
      },
    ],
    tags: ["Vite", "React.Js", "Typescript", "Shadcn Ui", "Vitest", "Python", "Flask", "YOLOv8", "Open CV", "Postgres SQL", "REST API"],
  },
  {
    title: "Modern Next.js To Do App",
    image: ["/nextjs_todo.png"],
    link: { repository: "https://github.com/jrneliodias/next-react-todo-app", production: "https://todo-list-app-nelio.vercel.app/" },
    video: ["https://www.youtube.com/embed/QOixX-uKVP4?si=LkrFqwM3cpOyOkPv"],
    resume:
      "To Do App is a classic project aimed at building frontend experience with React interfaces, using multiple filters with state management, a Node backend for API development, REST architecture for CRUD operations, a database hosted on Vercel and unit tests with Jest.",
    text: [
      {
        p: "To Do App is a classic project aimed at building frontend experience with React interfaces, with multiple filters with state management, a Node backend for API development, REST architecture for CRUD operations, a database hosted on Vercel and unit tests with Jest.",
      },
      { h2: "System features:" },
      {
        ul: [
          "Users can create, edit, delete, choose a color for the task, mark as done and mark as favorite any task.",
          "All favorite tasks are moved to the top of the list.",
          "The interface has filters for colors and favorite tasks, with multiple filter selection.",
        ],
      },
      { h2: "Back-end:" },
      {
        ul: [
          "Every task edit by the user is saved to the database via API.",
          "The API was tested with Jest and can be found in the repository. Results are shown in the image below.",
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
      "LABVCON v2.0 is a real-time control interface for dynamic system prototypes implemented in Arduino. It allows implementing PID, IMC (Internal Model Control), GMV (Generalized Minimum Variance) and GPC (Generalized Predictive Control) controllers in SISO (Single Input Single Output) systems.",
    text: [
      {
        p: "LABVCON v2.0 is a real-time control interface for dynamic system prototypes implemented in Arduino using Control Engineering techniques. It allows implementing PID, IMC (Internal Model Control), GMV (Generalized Minimum Variance) and GPC (Generalized Predictive Control) controllers in SISO (Single Input Single Output) systems.",
      },
      {
        p: "The goal is to build a laboratory for engineering students to implement these controllers without needing to write all the necessary code. The user enters the system model and sampling time, implements the controllers on the system and receives response graphs, the control signal and IAE and TVC metric indices to compare results.",
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
      "This project aims to develop software that simulates a classic control engineering laboratory for users without access to the necessary basic instruments. In this laboratory, the user can explore the classic structures of a PID controller, explore tuning by table and simulate these configurations on the desired transfer functions.",
    text: [
      {
        p: "This project aims to develop software that simulates a classic control engineering laboratory for users without access to the necessary basic instruments. In this laboratory, the user can explore the classic structures of a PID controller, explore tuning by table and simulate these configurations on the desired transfer functions.",
      },
      { p: "The site was built to present the project and develop an instruction manual and platform usage tutorials." },
    ],
    tags: ["HTML", "CSS", "Javascript", "Matlab", "git"],
  },
];
