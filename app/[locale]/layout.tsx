import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { routing } from "@/i18n/routing";
import LenisProvider from "@/components/providers/LenisProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "../globals.css";

const SITE_URL = "https://patrickengela.com";

const OG_LOCALE: Record<string, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1EA" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0D0A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const localePath = locale === routing.defaultLocale ? "/" : `/${locale}`;
  const ogLocale = OG_LOCALE[locale] ?? "pt_BR";
  const ogAlternates = routing.locales
    .filter((l) => l !== locale)
    .map((l) => OG_LOCALE[l] ?? l);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: "%s — Patrick Almeida",
    },
    description: t("description"),
    applicationName: "Patrick Almeida",
    keywords: [
      "Patrick Almeida",
      "Patrick Engela",
      "Patrick de Almeida Engela",
      "Full Stack Developer",
      "Software Architect",
      "Arquiteto de Software",
      "FinTech",
      "SaaS",
      "Multi-tenant",
      "TypeScript",
      "Next.js",
      "NestJS",
      ".NET",
      "Python",
      "AWS",
      "Azure DevOps",
      "Kubernetes",
      "Microserviços",
      "DDD",
      "Botucatu",
      "Brasil",
    ],
    authors: [{ name: "Patrick de Almeida Engela", url: "https://github.com/PatrickEN-dev" }],
    creator: "Patrick de Almeida Engela",
    publisher: "Patrick de Almeida Engela",
    category: "technology",
    alternates: {
      canonical: localePath,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l === "pt" ? "pt-BR" : l === "en" ? "en-US" : "es-ES",
          l === routing.defaultLocale ? "/" : `/${l}`,
        ]),
      ),
    },
    openGraph: {
      type: "website",
      siteName: "Patrick Almeida",
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: localePath,
      locale: ogLocale,
      alternateLocale: ogAlternates,
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      creator: "@PatrickEN_dev",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: false,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-linen text-espresso antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <LenisProvider>{children}</LenisProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
