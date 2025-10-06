import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { Toaster } from "react-hot-toast";
import StructuredData from "../structuredData";

import "@/styles/globals.css";
import "react-vertical-timeline-component/style.min.css";

interface ILayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: ILayoutProps): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const { locale } = params;

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      t("keywords.nextjs"),
      t("keywords.3dPortfolio"),
      t("keywords.3dWeb"),
      t("keywords.reactThree"),
      t("keywords.framerMotion"),
      t("keywords.immersive"),
    ],
    metadataBase: new URL("https://ahmedmahmoud.de"),
    alternates: {
      canonical: `https://ahmedmmahmoud.de/${locale}`,
      languages: {
        en: "https://ahmedmahmoud/en",
        de: "https://ahmedmahmoud/de",
      },
    },
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      url: `https://ahmedmahmoud/${locale}`,
      siteName: "Ahmed Portfolio",
      images: [
        {
          url: "https://ahmedmahmoud.de/imgs/og-image.png",
          width: 1200,
          height: 630,
          alt: t("openGraph.images.alt"),
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("openGraph.description"),
      images: ["https://ahmedmahmoud.de/og-image.png"],
      creator: "@AhmedSa05787736",
    },
    icons: {
      icon: [
        { url: "/imgs/favicon.ico" }, // default
        { url: "/imgs/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/imgs/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/imgs/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/imgs/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [{ url: "/imgs/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

export default async function LocaleLayout(props: ILayoutProps) {
  const { params, children } = props;
  const { locale } = params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html suppressHydrationWarning={true} lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster position="top-center" />
        </NextIntlClientProvider>
      </body>
      <StructuredData />
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
