import type { ComponentType, SVGProps } from "react";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import { getLocale, getTranslations } from "next-intl/server";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CTAButton from "@/components/ui/CTAButton";
import { contacts, getCvHref } from "@/lib/data";
import type { AppLocale } from "@/i18n/routing";
import type { ContactKey } from "@/lib/types";

const ICONS: Record<ContactKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  Email: Mail,
  WhatsApp: MessageCircle,
  LinkedIn: TbBrandLinkedin,
  GitHub: TbBrandGithub,
};

export default async function Contact() {
  const t = await getTranslations("contact");
  const tUi = await getTranslations("ui");
  const locale = (await getLocale()) as AppLocale;

  return (
    <section className="relative px-6 md:px-12 py-20 md:py-32 bg-espresso text-linen overflow-hidden">
      <div className="grain grain-strong" />

      <div className="relative mx-auto w-full max-w-7xl">
        <SectionEyebrow className="mb-8 md:mb-10">{t("eyebrow")}</SectionEyebrow>

        <div className="grid gap-10 md:gap-20 md:grid-cols-[1fr_auto] items-end">
          <div>
            <h2 className="font-display text-display-lg tracking-tightest max-w-3xl">
              {t("closer")}
            </h2>
            <p className="mt-5 md:mt-6 text-[0.95rem] sm:text-body-lg text-linen/60 max-w-xl">{t("subtitle")}</p>
          </div>

          <div className="flex flex-wrap gap-2.5 md:gap-3">
            <CTAButton
              href="mailto:patrickandreia2505@gmail.com"
              variant="accent"
              trailing={
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              }
            >
              patrickandreia2505@gmail.com
            </CTAButton>
            <CTAButton
              href={getCvHref(locale)}
              variant="outline"
              external
              className="border-linen/25 text-linen hover:border-caramel hover:text-caramel"
              trailing={
                <span className="font-mono text-[0.65rem] text-linen/50 uppercase tracking-widest group-hover:text-caramel">
                  PDF
                </span>
              }
            >
              {tUi("downloadCV")}
            </CTAButton>
          </div>
        </div>

        <ul className="mt-12 md:mt-16 grid gap-px bg-linen/10 border-y border-linen/10">
          {contacts.map((c) => {
            const Icon = ICONS[c.key];
            const external = c.href.startsWith("http");
            return (
              <li key={c.key} className="bg-espresso">
                <a
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-3 md:gap-6 py-4 md:py-5 transition-colors duration-300 hover:text-caramel"
                >
                  <span className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                    <Icon className="h-5 w-5 shrink-0 text-linen/50 group-hover:text-caramel transition-colors duration-300" />
                    <span className="font-mono text-[0.6rem] md:text-label-xs uppercase tracking-widest text-linen/50 w-14 md:w-20 shrink-0">
                      {t(`labels.${c.key}`)}
                    </span>
                    <span className="text-sm sm:text-base md:text-body-lg truncate">{c.value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-linen/40 transition-all duration-300 ease-apple group-hover:text-caramel group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            );
          })}
        </ul>

        <footer className="mt-16 md:mt-20 pt-8 pb-[max(0px,env(safe-area-inset-bottom))] border-t border-linen/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 font-mono text-label-xs uppercase text-linen/40">
          <span>{t("footer")}</span>
          <span>{t("footerRight")}</span>
        </footer>
      </div>
    </section>
  );
}
