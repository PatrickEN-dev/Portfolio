import type { ComponentType, SVGProps } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiSharp,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAntdesign,
  SiShadcnui,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiDotnet,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGooglecloud,
  SiOpenai,
  SiN8N,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { TbBrandAws, TbBrandAzure, TbDatabase, TbCpu, TbCode, TbCloud, TbBoxModel } from "react-icons/tb";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type TechSpec = {
  icon: IconComponent;
  color: string;
};

const TECH: Record<string, TechSpec> = {
  // Languages
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F0DB4F" },
  "C#": { icon: SiSharp, color: "#9B4F96" },
  Python: { icon: SiPython, color: "#3776AB" },

  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "shadcn/ui": { icon: SiShadcnui, color: "#000000" },
  "Ant Design": { icon: SiAntdesign, color: "#1677FF" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  Express: { icon: SiExpress, color: "#303030" },
  ".NET Core": { icon: SiDotnet, color: "#512BD4" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  Django: { icon: SiDjango, color: "#0C4B33" },
  FastAPI: { icon: SiFastapi, color: "#009688" },

  // Data
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Prisma: { icon: SiPrisma, color: "#2D3748" },
  TypeORM: { icon: TbDatabase, color: "#E83524" },
  SQL: { icon: TbDatabase, color: "#336791" },

  // DevOps & Cloud
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "Azure DevOps": { icon: TbBrandAzure, color: "#0078D7" },
  AWS: { icon: TbBrandAws, color: "#FF9900" },
  "AWS Lambda": { icon: TbBrandAws, color: "#FF9900" },
  "AWS S3": { icon: TbBrandAws, color: "#FF9900" },
  GCP: { icon: SiGooglecloud, color: "#4285F4" },

  // AI & Automation
  OpenAI: { icon: SiOpenai, color: "#412991" },
  LLMs: { icon: TbCpu, color: "#8B5E34" },
  RAG: { icon: TbCpu, color: "#8B5E34" },
  Agentes: { icon: TbCpu, color: "#8B5E34" },
  "AI Agents": { icon: TbCpu, color: "#8B5E34" },
  N8N: { icon: SiN8N, color: "#EA4B71" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },

  // Web fundamentals
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  "Responsive Design": { icon: TbBoxModel, color: "#8B5E34" },

  // Architecture
  DDD: { icon: TbCode, color: "#8B5E34" },
  SOLID: { icon: TbCode, color: "#8B5E34" },
  Microserviços: { icon: TbCloud, color: "#8B5E34" },
  Serverless: { icon: TbCloud, color: "#8B5E34" },
};

const FALLBACK: TechSpec = { icon: TbCode, color: "#8B5E34" };

export function getTechIcon(name: string): IconComponent {
  return TECH[name]?.icon ?? FALLBACK.icon;
}

export function getTechColor(name: string): string {
  return TECH[name]?.color ?? FALLBACK.color;
}

export function getTechSpec(name: string): TechSpec {
  return TECH[name] ?? FALLBACK;
}
