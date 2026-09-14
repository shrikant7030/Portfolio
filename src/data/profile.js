// Single source of truth for everything shown on the site.
// Update the values here and every page picks them up.

export const CAREER_START = new Date("2021-04-01");

export function yearsOfExperience(from = CAREER_START) {
  const months =
    (new Date().getFullYear() - from.getFullYear()) * 12 +
    (new Date().getMonth() - from.getMonth());
  return Math.max(1, Math.floor(months / 12));
}

export const profile = {
  name: "Shrikant Goski",
  role: "Module Lead",
  headline: "Backend & Cloud Engineer",
  location: "Bengaluru, India",
  email: "goskishrikant111@gmail.com",
  phone: "+91 9561252643",
  linkedin: "https://www.linkedin.com/in/shrikant-goski-68455016b",
  github: "https://github.com/shrikant7030",
  resume: "/resume.pdf",
  summary:
    "I design and ship scalable backend systems — microservices, REST APIs and cloud-native automation — for enterprise clients. Most of my work lives in Node.js, NestJS and PostgreSQL, running on AWS and Azure.",
};

export const stats = [
  { value: `${yearsOfExperience()}+`, label: "Years of experience" },
  { value: "100+", label: "REST APIs shipped" },
  { value: "50%", label: "Manual effort removed" },
  { value: "1", label: "Sparkler Award" },
];

// `level` is a rough self-assessment (0-100) used for the proficiency bars.
export const skillGroups = [
  {
    category: "Languages",
    accent: "indigo",
    items: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Java", level: 72 },
      { name: "SQL", level: 88 },
      { name: "C", level: 65 },
    ],
  },
  {
    category: "Backend & Frameworks",
    accent: "cyan",
    items: [
      { name: "Node.js", level: 93 },
      { name: "NestJS", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 93 },
      { name: "Microservices", level: 82 },
    ],
  },
  {
    category: "Databases",
    accent: "violet",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 84 },
      { name: "DynamoDB", level: 78 },
    ],
  },
  {
    category: "Cloud & DevOps",
    accent: "emerald",
    items: [
      { name: "AWS (Lambda, S3, SQS, RDS)", level: 84 },
      { name: "Azure (Functions, B2C, Blob)", level: 82 },
      { name: "CI/CD & Git", level: 85 },
      { name: "RabbitMQ", level: 72 },
    ],
  },
  {
    category: "Frontend",
    accent: "amber",
    items: [
      { name: "React.js", level: 78 },
      { name: "Angular.js", level: 70 },
      { name: "HTML & CSS", level: 82 },
    ],
  },
  {
    category: "Currently learning",
    accent: "rose",
    items: [
      { name: "System Design (LLD & HLD)", level: 70 },
      { name: "Java Spring Boot", level: 62 },
      { name: "Distributed Systems", level: 60 },
      { name: "Design Patterns", level: 68 },
    ],
  },
];

// Impact-first highlights. Keep these outcome-shaped, not task-shaped.
export const achievements = [
  {
    metric: "70+",
    title: "REST APIs on a modernized platform",
    detail:
      "Rebuilt the legacy IBC application from Informix onto Node.js, Angular.js, Azure and PostgreSQL, with advanced search, pagination and filtering across the API surface.",
  },
  {
    metric: "40%",
    title: "Less manual shipment work",
    detail:
      "Automated shipment data validation and processing through scheduled cron jobs, cutting the operations team's manual workload.",
  },
  {
    metric: "50%",
    title: "Reduction in manual intervention",
    detail:
      "Delivered an end-to-end automated workflow system that shortened client turnaround time significantly.",
  },
  {
    metric: "25%",
    title: "Faster QA cycles",
    detail:
      "Automated DynamoDB test-data cleanup so QA could reset environments without engineering support.",
  },
  {
    metric: "30+",
    title: "Tested, access-controlled APIs",
    detail:
      "Built NestJS services with Jest unit tests and role-based access control implemented through NestJS Guards.",
  },
  {
    metric: "99%",
    title: "Accurate data ingestion",
    detail:
      "Designed client data-processing APIs on Node.js, Express and MongoDB with automated daily reporting for billing accuracy.",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Module Lead",
    company: "Trigent Software Pvt. Ltd.",
    place: "Bengaluru",
    date: "Jan 2023 — Present",
    current: true,
    points: [
      "Modernized the legacy IBC application from Informix to Node.js, Angular.js, Azure and PostgreSQL.",
      "Designed scalable database schemas and built 70+ REST APIs with advanced search, pagination and filtering.",
      "Implemented Azure B2C authorization and integrated Azure Blob Storage for file management.",
      "Automated shipment data validation and processing via cron jobs, reducing manual workload by 40%.",
      "Built 30+ REST APIs with Jest unit tests and implemented RBAC using NestJS Guards.",
      "Automated DynamoDB test-data cleanup, improving QA efficiency by 25%.",
    ],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "DynamoDB", "Azure", "Jest", "RBAC"],
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "Text Mercato Solutions Pvt. Ltd.",
    place: "Bengaluru",
    date: "Apr 2021 — Dec 2022",
    points: [
      "Built APIs for client data processing on Node.js, MongoDB and Express.js with 99% accurate ingestion.",
      "Automated daily reporting via scheduled cron jobs, improving operational efficiency and billing accuracy.",
      "Developed an end-to-end automated workflow system on Node.js, React.js and MongoDB.",
      "Implemented file-processing endpoints, web scraping and an AWS-based delivery pipeline.",
      "Reduced manual intervention by 50% and improved client turnaround time significantly.",
    ],
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS", "Cron Jobs"],
  },
  {
    type: "education",
    title: "B.E. Computer Science",
    company: "Solapur University",
    place: "Maharashtra, India",
    date: "Aug 2016 — Jun 2019",
    points: [
      "Algorithms, data structures, database systems and software engineering fundamentals.",
    ],
    technologies: [],
  },
];

export const certifications = [
  {
    title: "Scaler Academy — Software Development",
    issuer: "Scaler",
    date: "Ongoing",
    points: [
      "Advanced System Design (LLD & HLD)",
      "Backend development with Java & Spring Boot",
      "Distributed systems & design patterns",
      "Data structures & algorithms",
      "Database design & optimization",
    ],
  },
];

export const awards = [
  {
    title: "Sparkler Award",
    org: "Trigent Software",
    date: "Q1 2024",
    description:
      "Awarded for driving backend automation and API optimization, measurably improving client delivery and system performance.",
  },
];

// TODO: replace these with real LinkedIn recommendations or manager quotes.
// Delete any entry you don't have a genuine quote for — an empty array hides
// the whole section.
export const testimonials = [
  {
    quote:
      "Add a recommendation here — paste the text of a LinkedIn recommendation or a note from a manager or client.",
    author: "Name",
    title: "Title, Company",
    placeholder: true,
  },
  {
    quote:
      "A second short quote works well here. Two to four sentences reads best on the card.",
    author: "Name",
    title: "Title, Company",
    placeholder: true,
  },
];
