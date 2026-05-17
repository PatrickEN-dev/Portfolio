"use client";

import { ArrowUpRight } from "lucide-react";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { getTechIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/lib/types";
import CTAButton from "@/components/ui/CTAButton";
import ProjectMedia from "./ProjectMedia";

type Props = {
  project: ProjectMeta;
  index: number;
  total: number;
  tagline: string;
  metric: string;
  statusLabel: string;
  labels: { viewProject: string; repository: string };
};

const ARROW_HOVER = "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export default function ProjectCard({
  project,
  index,
  total,
  tagline,
  metric,
  statusLabel,
  labels,
}: Props) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, x: reversed ? 80 : -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "grid gap-8 md:gap-12 md:grid-cols-[1.4fr_1fr] items-center",
        reversed && "md:grid-cols-[1fr_1.4fr]"
      )}
    >
      <div className={cn(reversed && "md:order-2")}>
        <ProjectMedia project={project} statusLabel={statusLabel} />
      </div>

      <div className={cn(reversed && "md:order-1")}>
        <div className="font-mono text-label-xs uppercase text-ink-soft mb-3 flex items-center gap-3">
          <span>{project.year}</span>
          <span className="h-px w-6 bg-ink-soft/40" />
          <span>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <h3 className="font-display text-display-md tracking-tighter2">{project.name}</h3>
        <p className="mt-4 text-body-lg text-ink-muted max-w-xl">{tagline}</p>

        <div className="mt-5 font-display text-display-sm text-caramel">{metric}</div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => {
            const Icon = getTechIcon(t);
            return (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-espresso/75 bg-espresso/5 px-2.5 py-1 rounded-full"
              >
                <Icon className="h-3.5 w-3.5 text-caramel" strokeWidth={1.7} />
                {t}
              </span>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveHref && (
            <CTAButton
              href={project.liveHref}
              variant="primary"
              external
              trailing={<ArrowUpRight className={cn("h-4 w-4", ARROW_HOVER)} />}
            >
              {labels.viewProject}
            </CTAButton>
          )}
          {project.repoHref && (
            <CTAButton
              href={project.repoHref}
              variant="outline"
              external
              trailing={<TbBrandGithub className="h-4 w-4" />}
            >
              {labels.repository}
            </CTAButton>
          )}
        </div>
      </div>
    </motion.article>
  );
}
