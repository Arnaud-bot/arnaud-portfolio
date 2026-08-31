import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle, Lightbulb, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { getBreakdowns } from "@/lib/content/breakdowns";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function generateStaticParams() {
  return getBreakdowns("fr").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const item = getBreakdowns(lang).find((b) => b.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Arnaud Malanda`,
    description: item.summary,
  };
}

export default async function BreakdownPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  const item = getBreakdowns(lang).find((b) => b.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Section
        align="center"
        narrow
        className="pt-16 pb-0 md:pt-12 md:pb-0 lg:pt-16 lg:pb-0"
      >
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
        {item.siteUrl && (
          <Button asChild variant="outline" size="sm" className="mt-6">
            <a href={item.siteUrl} target="_blank" rel="noreferrer">
              {dict.breakdownsPage.visitSite}
              <ExternalLink className="size-3.5" />
            </a>
          </Button>
        )}
      </Section>

      <Section narrow>
        <div className="space-y-12">
          <Reveal>
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <CheckCircle2 className="size-5 text-success" strokeWidth={1.75} />
                {dict.breakdownsPage.strengths}
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
                {dict.breakdownsPage.weaknesses}
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
                {dict.breakdownsPage.recommendations}
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

          {!item.siteUrl && (
            <Reveal delay={0.15}>
              <div className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                {dict.breakdownsPage.beforeAfterPlaceholder}
              </div>
            </Reveal>
          )}
        </div>
      </Section>
    </>
  );
}
