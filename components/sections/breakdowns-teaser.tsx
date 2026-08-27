import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { getBreakdowns } from "@/lib/content/breakdowns";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function BreakdownsTeaser({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const featured = getBreakdowns(lang).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <Section
      eyebrow={dict.breakdownsTeaser.eyebrow}
      title={dict.breakdownsTeaser.title}
      description={dict.breakdownsTeaser.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.05}>
            <Link
              href={`/${lang}/breakdowns/${item.slug}`}
              className="group flex h-full flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:bg-accent"
            >
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{item.category}</Badge>
                <span className="text-sm font-semibold text-primary">
                  {item.uxScore}/10
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                {item.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {dict.breakdownsTeaser.readAnalysis}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" className="h-11 px-6">
          <Link href={`/${lang}/breakdowns`}>{dict.breakdownsTeaser.seeAll}</Link>
        </Button>
      </div>
    </Section>
  );
}
