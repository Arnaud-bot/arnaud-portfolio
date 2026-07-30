import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { getCaseStudies } from "@/lib/content/case-studies";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { CaseStudy } from "@/types/content";

export function generateStaticParams() {
  return getCaseStudies("fr").map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const study = getCaseStudies(lang).find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Arnaud Malanda`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  const study = getCaseStudies(lang).find((s) => s.slug === slug);
  if (!study) notFound();

  const chapters: { key: keyof CaseStudy; label: string }[] = [
    { key: "problem", label: dict.workPage.chapters.problem },
    { key: "research", label: dict.workPage.chapters.research },
    { key: "analysis", label: dict.workPage.chapters.analysis },
    { key: "designDecisions", label: dict.workPage.chapters.designDecisions },
    { key: "development", label: dict.workPage.chapters.development },
    { key: "results", label: dict.workPage.chapters.results },
    { key: "lessonsLearned", label: dict.workPage.chapters.lessonsLearned },
  ];

  return (
    <>
      <Section align="center" narrow className="pb-0">
        <Badge variant="secondary" className="mx-auto w-fit">
          {study.category}
        </Badge>
        <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
          {study.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">{study.client}</p>
      </Section>

      <Section narrow>
        <div className="space-y-16">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.key} delay={i * 0.03}>
              <div>
                <h2 className="text-xl font-semibold">{chapter.label}</h2>
                <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
                  {study[chapter.key]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
