"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { getTechIcon } from "@/lib/tech-icons";
import type { ProjectMeta } from "@/lib/types";
import ProjectStatusBadge from "./ProjectStatusBadge";

type Props = {
  project: ProjectMeta;
  statusLabel: string;
};

export default function ProjectMedia({ project, statusLabel }: Props) {
  const [imgError, setImgError] = useState(false);

  const url = project.liveHref ?? project.repoHref;
  const displayUrl = useMemo(() => (url ? new URL(url).host : project.slug), [url, project.slug]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-espresso/10 bg-sand shadow-sm">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-linen border-b border-espresso/10">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-3 truncate font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
          {displayUrl}
        </span>
        <ProjectStatusBadge
          statusKey={project.statusKey}
          label={statusLabel}
          className="ml-auto shadow-none"
        />
      </div>

      <div className="relative aspect-[16/10] bg-sand">
        {!imgError ? (
          <Image
            src={project.image}
            alt={`Screenshot ${project.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 720px"
            quality={80}
            loading="lazy"
            className="object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center bg-gradient-to-br from-sand via-linen to-caramel/10">
            <span className="font-display text-display-md text-espresso/35 tracking-tighter2 leading-none">
              {project.name}
            </span>
            <div className="flex items-center justify-center gap-3 text-caramel/60">
              {project.stack.slice(0, 5).map((t) => {
                const Icon = getTechIcon(t);
                return <Icon key={t} className="h-5 w-5" strokeWidth={1.5} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
