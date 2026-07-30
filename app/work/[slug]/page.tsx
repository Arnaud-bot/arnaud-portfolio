import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { caseStudies } from "@/lib/content/case-studies";
import type { CaseStudy } from "@/types/content";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Arnaud Malanda`,
    description: study.summary,
  };
}

const CHAPTERS: { key: keyof CaseStudy; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "research", label: "Research" },
  { key: "analysis", label: "Analysis" },
  { key: "designDecisions", label: "Design Decisions" },
  { key: "development", label: "Development" },
  { key: "results", label: "Results" },
  { key: "lessonsLearned", label: "Lessons Learned" },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

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
          {CHAPTERS.map((chapter, i) => (
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
