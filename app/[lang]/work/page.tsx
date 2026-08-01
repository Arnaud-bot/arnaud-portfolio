import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { getCaseStudies } from "@/lib/content/case-studies";
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
  return dict.meta.work;
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  const caseStudies = getCaseStudies(lang);

  return (
    <Section
      align="center"
      eyebrow={dict.workPage.eyebrow}
      title={dict.workPage.title}
      description={dict.workPage.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={(i % 3) * 0.05}>
            <Link
              href={`/${lang}/work/${study.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-accent"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <Badge variant="secondary" className="w-fit">
                  {study.category}
                </Badge>
                <h2 className="mt-5 text-lg font-semibold">{study.title}</h2>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                  {study.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {dict.workPage.seeCaseStudy}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
