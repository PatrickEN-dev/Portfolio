import { getTranslations } from "next-intl/server";
import { projects } from "@/lib/data";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ProjectCard from "@/components/sections/projects/ProjectCard";

export default async function Projects() {
  const t = await getTranslations("projects");
  const tUi = await getTranslations("ui");

  const cardLabels = {
    viewProject: tUi("viewProject"),
    repository: tUi("repository"),
  };

  return (
    <section id="projetos" className="cv-auto relative px-6 md:px-12 py-20 md:py-40 bg-linen overflow-hidden">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-end justify-between gap-8 mb-12 md:mb-24">
          <div>
            <SectionEyebrow className="mb-4">{t("eyebrow")}</SectionEyebrow>
            <h2 className="font-display text-display-xl tracking-tightest">{t("title")}</h2>
            <p className="mt-3 md:mt-4 text-[0.95rem] sm:text-body-lg text-ink-muted">{t("intro")}</p>
          </div>
          <div className="hidden md:block font-mono text-sm uppercase tracking-widest text-ink-soft">
            {String(projects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>
        </div>

        <div className="grid gap-12 md:gap-24">
          {projects.map((p, idx) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={idx}
              total={projects.length}
              tagline={t(`items.${p.msgKey}.tagline`)}
              metric={t(`items.${p.msgKey}.metric`)}
              statusLabel={t(`status.${p.statusKey}`)}
              labels={cardLabels}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
