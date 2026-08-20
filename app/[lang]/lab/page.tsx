import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { getLabDemos } from "@/lib/content/lab-demos";
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
  return dict.meta.lab;
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  const demos = getLabDemos(lang);

  return (
    <Section
      align="center"
      eyebrow={dict.labPage.eyebrow}
      title={dict.labPage.title}
      description={dict.labPage.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {demos.map((demo, i) => (
          <Reveal key={demo.slug} delay={(i % 3) * 0.05}>
            <a
              href={demo.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-accent"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
                <Image
                  src={demo.thumbnail}
                  alt=""
                  aria-hidden
                  fill
                  className="scale-110 object-cover opacity-40 blur-2xl"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <Image
                  src={demo.thumbnail}
                  alt={demo.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <Badge variant="secondary" className="w-fit">
                  {demo.industry}
                </Badge>
                <h2 className="mt-5 text-lg font-semibold">{demo.title}</h2>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                  {demo.tagline}
                </p>
                <p className="mt-4 text-xs leading-[1.6] text-muted-foreground/70">
                  {dict.labPage.conceptNote}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {dict.labPage.exploreDemo}
                  <ExternalLink className="size-3.5" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
