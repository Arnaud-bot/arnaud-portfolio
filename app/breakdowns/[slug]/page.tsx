import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { breakdowns } from "@/lib/content/breakdowns";

export function generateStaticParams() {
  return breakdowns.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = breakdowns.find((b) => b.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Arnaud Malanda`,
    description: item.summary,
  };
}

export default async function BreakdownPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = breakdowns.find((b) => b.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Section align="center" narrow className="pb-0">
        <Badge variant="secondary" className="mx-auto w-fit">
          {item.category}
        </Badge>
        <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
          {item.title}
        </h1>
        <p className="mt-4 text-2xl font-semibold text-primary">
          {item.uxScore}
          <span className="text-base text-muted-foreground">/10</span>
        </p>
        <p className="mx-auto mt-4 max-w-[600px] text-base leading-[1.7] text-muted-foreground">
          {item.summary}
        </p>
      </Section>

      <Section narrow>
        <div className="space-y-12">
          <Reveal>
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <CheckCircle2 className="size-5 text-success" strokeWidth={1.75} />
                Points forts
              </h2>
              <ul className="mt-4 space-y-2">
                {item.strengths.map((s) => (
                  <li
                    key={s}
                    className="text-base leading-[1.7] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <XCircle className="size-5 text-destructive" strokeWidth={1.75} />
                Points faibles
              </h2>
              <ul className="mt-4 space-y-2">
                {item.weaknesses.map((w) => (
                  <li
                    key={w}
                    className="text-base leading-[1.7] text-muted-foreground"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Lightbulb className="size-5 text-warning" strokeWidth={1.75} />
                Recommandations
              </h2>
              <ul className="mt-4 space-y-2">
                {item.recommendations.map((r) => (
                  <li
                    key={r}
                    className="text-base leading-[1.7] text-muted-foreground"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              [Emplacement pour un concept Before/After — capture d&apos;écran
              avant, puis proposition de redesign.]
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
