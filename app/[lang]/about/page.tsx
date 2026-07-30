import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  return dict.meta.about;
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);

  return (
    <Section eyebrow={dict.aboutPage.eyebrow} title={dict.aboutPage.title}>
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/Ras.jpg"
              alt="Arnaud Malanda"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-6 text-base leading-[1.7] text-muted-foreground">
            {dict.aboutPage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
