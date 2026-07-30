import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ValueProposition } from "@/components/sections/value-proposition";
import { Services } from "@/components/sections/services";
import { FeaturedCaseStudies } from "@/components/sections/featured-case-studies";
import { BreakdownsTeaser } from "@/components/sections/breakdowns-teaser";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ContactCta } from "@/components/sections/contact-cta";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <TrustBar dict={dict} />
      <ValueProposition dict={dict} />
      <Services lang={lang} dict={dict} />
      <FeaturedCaseStudies lang={lang} dict={dict} />
      <BreakdownsTeaser lang={lang} dict={dict} />
      <Process lang={lang} dict={dict} />
      <TechStack dict={dict} />
      <Testimonials lang={lang} dict={dict} />
      <AboutTeaser lang={lang} dict={dict} />
      <ContactCta lang={lang} dict={dict} />
    </>
  );
}
