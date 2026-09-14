import portfolioImg from "../assets/imagenew.jpg";
import taskrunnrImg from "../assets/taskrunnr.png";
import kriyaImg from "../assets/kriya.png";

/**
 * `github` / `live` are optional — leave them `null` for client work you cannot
 * share and the buttons simply will not render.
 *
 * `image` is optional too. With `null`, the card falls back to a generated
 * monogram tile and the case study drops its hero image, so a project without a
 * screenshot still looks deliberate. Import the file and set it here when you
 * have a real screenshot to drop in.
 */
export const projects = [
  {
    slug: "packtrak-legacy-modernization",
    name: "Packtrak — Legacy Modernization",
    tagline: "Moving a 20-year-old logistics platform off Informix without downtime.",
    image: null,
    category: "Enterprise",
    role: "Module Lead",
    period: "2023 — Present",
    featured: true,
    company: "Trigent Software",
    overview:
      "Packtrak is a shipment tracking and billing platform that ran on a legacy Informix stack. I led the backend rewrite onto Node.js and PostgreSQL on Azure, redesigning the data model and rebuilding the API surface so the product could keep growing.",
    highlights: [
      "Designed scalable PostgreSQL schemas to replace the legacy Informix data model.",
      "Built 70+ REST APIs with advanced search, pagination and filtering.",
      "Implemented Azure B2C authorization and Azure Blob Storage for file management.",
      "Automated shipment data validation through cron jobs, cutting manual workload by 40%.",
    ],
    tech: ["Node.js", "Angular.js", "PostgreSQL", "Azure", "Azure B2C", "Blob Storage", "Cron Jobs"],
    github: null,
    live: null,
  },
  {
    slug: "shure-associate-portal",
    name: "Shure Associate Portal",
    tagline: "A role-aware internal portal built on NestJS and DynamoDB.",
    image: null,
    category: "Enterprise",
    role: "Module Lead",
    period: "2023 — 2024",
    featured: true,
    company: "Trigent Software",
    overview:
      "An internal associate portal where access rules differ sharply by role. I built the backend services, the permission layer and the test tooling the QA team relies on.",
    highlights: [
      "Built 30+ REST APIs with Jest unit tests across the service layer.",
      "Implemented role-based access control using NestJS Guards.",
      "Modelled data across DynamoDB and MySQL depending on access pattern.",
      "Automated DynamoDB test-data cleanup, improving QA efficiency by 25%.",
    ],
    tech: ["NestJS", "TypeScript", "AWS", "DynamoDB", "MySQL", "Jest", "RBAC", "Microservices"],
    github: null,
    live: null,
  },
  {
    slug: "taskrunnr",
    name: "TaskRunnr — Data Processing Platform",
    tagline: "High-accuracy ingestion and automated daily reporting.",
    image: taskrunnrImg,
    category: "Platform",
    role: "Software Engineer",
    period: "2021 — 2022",
    featured: true,
    company: "Text Mercato",
    overview:
      "A data processing platform handling client content pipelines end to end — ingestion, validation, and the daily reports the billing team worked from.",
    highlights: [
      "Built ingestion APIs on Node.js, Express and MongoDB reaching 99% accuracy.",
      "Automated daily reporting with scheduled cron jobs.",
      "Improved billing accuracy by removing manual report assembly.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "AWS", "Cron Jobs"],
    github: null,
    live: null,
  },
  {
    slug: "kriya-workflow-automation",
    name: "Kriya — Automated Workflow System",
    tagline: "An end-to-end workflow engine that removed half the manual steps.",
    image: kriyaImg,
    category: "Platform",
    role: "Software Engineer",
    period: "2021 — 2022",
    featured: true,
    company: "Text Mercato",
    overview:
      "Kriya turned a manual, multi-team content workflow into an automated pipeline: files in, processing and scraping in the middle, delivery out through AWS.",
    highlights: [
      "Built the workflow engine on Node.js, React.js and MongoDB.",
      "Implemented file-processing endpoints and web scraping routines.",
      "Delivered output through an AWS-based delivery pipeline.",
      "Reduced manual intervention by 50% and shortened client turnaround.",
    ],
    tech: ["Node.js", "React.js", "MongoDB", "AWS Lambda", "Web Scraping"],
    github: null,
    live: null,
  },
  {
    slug: "order-management-system",
    name: "Order Management System",
    tagline: "Full-stack order lifecycle with automated email workflows.",
    image: null,
    category: "Full Stack",
    role: "Backend Developer",
    period: "2023",
    featured: false,
    company: "Personal",
    overview:
      "A full-stack order management system covering the lifecycle from placement to fulfilment, designed as a system-design exercise with a production-shaped schema.",
    highlights: [
      "Designed the database schema and service boundaries from scratch.",
      "Built the order lifecycle workflow with status transitions.",
      "Automated transactional email notifications at each stage.",
    ],
    tech: ["NestJS", "React.js", "MySQL", "System Design", "Email Automation"],
    github: null,
    live: null,
  },
  {
    slug: "portfolio-website",
    name: "This Portfolio",
    tagline: "A React single-page site with a dark-first design system.",
    image: portfolioImg,
    category: "Personal",
    role: "Designer & Developer",
    period: "2025",
    featured: false,
    company: "Personal",
    overview:
      "The site you are reading. Built with React and hand-written CSS on a token-driven design system, with a dark-first theme, a light toggle and motion that respects reduced-motion preferences.",
    highlights: [
      "CSS custom-property design tokens driving both themes.",
      "Scroll-reveal animation via Framer Motion, disabled under prefers-reduced-motion.",
      "Fully responsive down to small mobile widths.",
    ],
    tech: ["React.js", "CSS3", "Framer Motion", "React Router", "Vercel"],
    github: "https://github.com/shrikant7030/Portfolio",
    live: null,
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
