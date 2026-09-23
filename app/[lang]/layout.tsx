import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Manrope, Inter, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/animations/motion-provider";
import {
  locales,
  hasLocale,
  getDir,
  defaultLocale,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildAlternates } from "@/lib/seo";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogLocaleMap: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  ar: "ar_AE",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL("https://arnaudmalanda.com"),
    title: {
      default: dict.meta.home.title,
      template: "%s",
    },
    description: dict.meta.home.description,
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale],
      title: dict.meta.home.title,
      description: dict.meta.home.ogDescription,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/opengraph-image"],
    },
    alternates: buildAlternates(locale, ""),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arnaud Malanda",
    jobTitle: dict.hero.eyebrow,
    description: dict.meta.home.description,
    url: `https://arnaudmalanda.com/${lang}`,
    image: "https://arnaudmalanda.com/Ras.jpg",
    sameAs: [
      "https://www.linkedin.com/in/arnaud-malanda-8883a7260/",
      "https://github.com/Arnaud-bot",
      "https://www.instagram.com/arnaud_kuyzer/",
    ],
  };

  return (
    <html
      lang={lang}
      dir={getDir(lang)}
      className={`dark ${manrope.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>
          <Navbar lang={lang} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer lang={lang} dict={dict} />
        </MotionProvider>
      </body>
    </html>
  );
}
