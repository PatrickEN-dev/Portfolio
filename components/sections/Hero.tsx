import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { TbBrandGithub } from "react-icons/tb";
import { getTranslations, getLocale } from "next-intl/server";
import RevealText from "@/components/ui/RevealText";
import CTAButton from "@/components/ui/CTAButton";
import IconCircleButton from "@/components/ui/IconCircleButton";
import { contacts, profile, getCvHref } from "@/lib/data";
import type { AppLocale } from "@/i18n/routing";

export default async function Hero() {
  const t = await getTranslations("hero");
  const tUi = await getTranslations("ui");
  const locale = (await getLocale()) as AppLocale;

  const linkedin = contacts.find((c) => c.key === "LinkedIn");
  const github = contacts.find((c) => c.key === "GitHub");
  const email = contacts.find((c) => c.key === "Email");

  return (
    <section className="relative grid min-h-screen md:grid-cols-2 lg:grid-cols-[1.05fr_1fr]">
      <div className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-20 min-h-screen order-2 md:order-1 bg-linen overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />

        <div className="relative z-10 flex flex-col gap-5">
          <div className="font-mono text-label-xs uppercase text-ink-soft flex items-center gap-2">
            <span className="text-caramel">{"</>"}</span>
            {profile.shortName}
          </div>

          <span className="inline-flex w-fit items-center gap-3 rounded-full border border-emerald-600/25 bg-emerald-600/[0.06] px-4 py-2 text-sm font-medium text-ink">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </span>
            {t("availability")}
          </span>

          <div className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-soft flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span>{t("factExperience")}</span>
            <span className="text-ink-soft/40" aria-hidden>·</span>
            <span>{t("factStudy")}</span>
            <span className="text-ink-soft/40" aria-hidden>·</span>
            <span>{t("factRemote")}</span>
          </div>
        </div>

        <div className="relative z-10 max-w-xl py-12 md:py-0">
          <h1 className="font-display tracking-tightest leading-[0.95] text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold">
            <RevealText as="span" text={t("h1Line1")} className="block" byWord />
            <RevealText as="span" text={t("h1Line2")} className="block" delay={0.18} byWord />
            <RevealText as="span" text={t("h1Line3")} className="block text-caramel" delay={0.36} byWord />
            <RevealText as="span" text={t("h1Line4")} className="block text-caramel" delay={0.5} byWord />
          </h1>

          <p className="mt-8 max-w-md text-body-lg text-ink-muted">{t("subtitle")}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CTAButton
              href={getCvHref(locale)}
              variant="primary"
              external
              trailing={
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-linen/60 group-hover:text-linen">
                  PDF
                </span>
              }
            >
              {tUi("downloadCV")}
            </CTAButton>

            {linkedin && (
              <CTAButton
                href={linkedin.href}
                variant="outline"
                external
                trailing={
                  <ArrowDown className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-0.5" />
                }
              >
                LinkedIn
              </CTAButton>
            )}

            {github && (
              <IconCircleButton href={github.href} label="GitHub" external>
                <TbBrandGithub className="h-5 w-5" strokeWidth={1.8} />
              </IconCircleButton>
            )}
            {email && (
              <IconCircleButton href={email.href} label="Email">
                <Mail className="h-5 w-5" strokeWidth={1.8} />
              </IconCircleButton>
            )}
          </div>
        </div>

        <div className="relative z-10 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
          © 2026 {profile.shortName}
        </div>
      </div>

      <div className="relative h-[55vh] md:h-screen md:sticky md:top-0 order-1 md:order-2 overflow-hidden bg-sand">
        <Image
          src={profile.portrait}
          alt={profile.shortName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
          quality={100}
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-espresso/15 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-linen/30 to-transparent md:from-linen md:via-linen/40 md:w-12" />
      </div>
    </section>
  );
}
