export type ProjectStatusKey = "production" | "testing" | "showcase";

export type ProjectMeta = {
  slug: string;
  msgKey: string;
  name: string;
  statusKey: ProjectStatusKey;
  stack: readonly string[];
  image: string;
  liveHref?: string;
  repoHref?: string;
  year: string;
};

export type DifferentialKey =
  | "architecture"
  | "product"
  | "production"
  | "leadership"
  | "ai";

export type ForYouKey = "onboarding" | "runtime" | "business" | "ownership";

export type ContactKey = "Email" | "WhatsApp" | "LinkedIn" | "GitHub";

export type ContactMeta = {
  key: ContactKey;
  value: string;
  href: string;
};

export type StatKey = "Years" | "Clients" | "Fintechs" | "Saas";

export type StatMeta = {
  key: StatKey;
  value: number;
  suffix: string;
};

export type ExperienceKey = "paytheory" | "sttart" | "freelancer" | "datacrazy" | "fcs";

export type ExperienceMeta = {
  key: ExperienceKey;
  year: string;
  current: boolean;
  stack: readonly string[];
  location?: "usa";
};

export type SkillCategoryKey =
  | "languages"
  | "frontend"
  | "backend"
  | "data"
  | "devops"
  | "architecture"
  | "ai";

export type SkillCategory = {
  key: SkillCategoryKey;
  items: readonly string[];
};
