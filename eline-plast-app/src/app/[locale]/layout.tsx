import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";

import "../globals.css";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { structuredData } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// TODO: update to the real production domain when available.
const siteUrl = "https://www.elineplast.tn";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: "%s | Eline Plast",
    },
    description: t("description"),
    applicationName: "Eline Plast",
    keywords: [
      "irrigation",
      "PVC pipes",
      "PEHD pipes",
      "drip irrigation",
      "agricultural irrigation",
      "watering systems",
      "sprinklers",
      "Tunisia",
    ],
    authors: [{ name: "Eline Plast" }],
    creator: "Eline Plast",
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      type: "website",
      siteName: "Eline Plast",
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}/${locale}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {t("skipToContent")}
          </a>
          <Navbar />
          <main id="main" className="flex-1 scroll-mt-16">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
