import type { Metadata } from "next";
import { Manrope, Inter, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://arnaudmalanda.com"),
  title: {
    default: "Arnaud Malanda — Product-Focused Developer",
    template: "%s",
  },
  description:
    "J'aide les entreprises à transformer leurs produits digitaux en expériences que les gens aiment utiliser — UX audit, UI redesign, développement web et mobile.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Arnaud Malanda — Product-Focused Developer",
    description:
      "UX audit, UI redesign, développement web et mobile pour des produits digitaux premium.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`dark ${manrope.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
