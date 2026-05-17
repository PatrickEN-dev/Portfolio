import { getTranslations } from "next-intl/server";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SlideIn from "@/components/ui/SlideIn";
import AboutFichaTecnica from "@/components/sections/about/AboutFichaTecnica";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutSummary from "@/components/sections/about/AboutSummary";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <section className="relative px-6 md:px-12 py-20 md:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow className="mb-10 md:mb-12">{t("eyebrow")}</SectionEyebrow>

        <div className="grid gap-8 md:gap-16 md:grid-cols-[1.35fr_1fr] items-start">
          <SlideIn from="left">
            <p className="font-display text-xl sm:text-2xl md:text-3xl leading-snug text-ink max-w-xl pt-2">
              {t("bioBefore")}
              <span className="italic text-caramel">{t("bioHighlight")}</span>
              {t("bioAfter")}
            </p>
          </SlideIn>

          <SlideIn from="right" delay={0.1}>
            <AboutSummary
              t={{
                label: t("summaryLabel"),
                focus: t("summaryFocus"),
                domain1: t("summaryDomain1"),
                domain2: t("summaryDomain2"),
                domain3: t("summaryDomain3"),
                stackLabel: t("summaryStackLabel"),
                workModel: t("summaryWorkModel"),
              }}
            />
          </SlideIn>
        </div>

        <div className="mt-14 md:mt-24">
          <AboutFichaTecnica
            t={{
              cargo: t("fichaCargo"),
              dominios: t("fichaDominios"),
              modelo: t("fichaModelo"),
              localizacao: t("fichaLocalizacao"),
              idiomas: t("fichaIdiomas"),
              formacao: t("fichaFormacao"),
              valueCargo: t("valueCargo"),
              specialty1: t("valueSpecialty1"),
              specialty2: t("valueSpecialty2"),
              specialty3: t("valueSpecialty3"),
              valueDominios: t("valueDominios"),
              valueModelo: t("valueModelo"),
              valueLocalizacao: t("valueLocalizacao"),
              valueIdiomas: t("valueIdiomas"),
              valueFormacao: t("valueFormacao"),
              valueFormacaoInst: t("valueFormacaoInst"),
              valueFormacao2: t("valueFormacao2"),
              valueFormacao2Inst: t("valueFormacao2Inst"),
              valueFormacao2Detail: t("valueFormacao2Detail"),
            }}
          />
        </div>

        <div className="mt-12 md:mt-20">
          <AboutStats />
        </div>
      </div>
    </section>
  );
}
