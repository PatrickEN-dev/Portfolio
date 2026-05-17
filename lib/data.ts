import type {
  ContactMeta,
  ExperienceMeta,
  ProjectMeta,
  SkillCategory,
  StatMeta,
} from "@/lib/types";
import type { AppLocale } from "@/i18n/routing";

export const profile = {
  name: "Patrick de Almeida Engela",
  shortName: "Patrick Almeida",
  yearsExperience: 4,
  portrait: "/me/portrait.jpg",
  headshot: "/me/headshot.jpg",
} as const;

export const contacts: readonly ContactMeta[] = [
  { key: "Email", value: "patrickandreia2505@gmail.com", href: "mailto:patrickandreia2505@gmail.com" },
  { key: "WhatsApp", value: "+55 14 99133-6409", href: "https://wa.me/5514991336409" },
  { key: "LinkedIn", value: "patrick-almeida", href: "https://www.linkedin.com/in/patrick-almeida-64b897237/" },
  { key: "GitHub", value: "PatrickEN-dev", href: "https://github.com/PatrickEN-dev" },
];

export const stats: readonly StatMeta[] = [
  { key: "Years", value: 4, suffix: "+" },
  { key: "Clients", value: 4, suffix: "+" },
  { key: "Fintechs", value: 2, suffix: "" },
  { key: "Saas", value: 3, suffix: "+" },
];

export const experience: readonly ExperienceMeta[] = [
  { key: "datacrazy", year: "2023", current: false, stack: ["React", "Next.js", "NestJS", "C# .NET", "Kubernetes"] },
  { key: "fcs", year: "2024", current: false, stack: [".NET Core", "React", "AWS Lambda", "SQL"] },
  { key: "freelancer", year: "2024", current: true, stack: ["Next.js", "NestJS", "N8N", "OpenAI"] },
  { key: "sttart", year: "2026", current: true, stack: ["Python", "AWS Lambda", "Azure DevOps"] },
];

export const projects: readonly ProjectMeta[] = [
  {
    slug: "coldmail",
    msgKey: "coldmail",
    name: "Coldmail",
    statusKey: "production",
    stack: ["Next.js", "NestJS", "PostgreSQL", "N8N", "Redis"],
    image: "/projects/coldmail.png",
    liveHref: "https://coldmail-bg-ia-labtracker.vercel.app",
    year: "2024",
  },
  {
    slug: "bt-barber",
    msgKey: "btBarber",
    name: "BT Barber",
    statusKey: "testing",
    stack: ["Next.js", "NestJS", "AWS S3", "Tailwind"],
    image: "/projects/bt-barber.png",
    liveHref: "https://bt-barber.vercel.app",
    repoHref: "https://github.com/PatrickEN-dev/BT-Barber",
    year: "2025",
  },
  {
    slug: "banco-agil",
    msgKey: "bancoAgil",
    name: "Banco Ágil — AI Agents",
    statusKey: "showcase",
    stack: ["Python", "RAG", "OpenAI", "Next.js", "FastAPI"],
    image: "/projects/banco-agil.png",
    liveHref: "https://ia-agent-tech-for-humans-frontend.vercel.app",
    year: "2025",
  },
];

export const differentialKeys = ["architecture", "product", "production", "leadership", "ai"] as const;

export const forYouKeys = ["onboarding", "runtime", "business", "ownership"] as const;

export const skillsCategories: readonly SkillCategory[] = [
  { key: "languages", items: ["JavaScript", "TypeScript", "C#", "Python"] },
  { key: "frontend", items: ["HTML", "CSS", "React", "Next.js", "Tailwind", "shadcn/ui", "Ant Design"] },
  { key: "backend", items: ["Node.js", "NestJS", "Express", ".NET Core", "Django"] },
  { key: "data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "TypeORM"] },
  { key: "devops", items: ["Docker", "Kubernetes", "GitHub Actions", "Azure DevOps", "AWS", "GCP"] },
  { key: "architecture", items: ["DDD", "SOLID", "Microserviços", "Serverless"] },
  { key: "ai", items: ["LLMs", "RAG", "Agentes", "N8N"] },
];

const CV_PATH: Record<AppLocale, string> = {
  pt: "/cv/patrick-engela-pt.pdf",
  en: "/cv/patrick-engela-en.pdf",
  es: "/cv/patrick-engela-es.pdf",
};

export function getCvHref(locale: AppLocale): string {
  return CV_PATH[locale];
}
