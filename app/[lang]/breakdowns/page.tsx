import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { getBreakdowns } from "@/lib/content/breakdowns";
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
  return dict.meta.breakdowns;
}

export default async function BreakdownsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  const breakdowns = getBreakdowns(lang);

  return (
    <Section
      align="center"
      eyebrow={dict.breakdownsPage.eyebrow}
      title={dict.breakdownsPage.title}
      description={dict.breakdownsPage.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {breakdowns.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 3) * 0.05}>
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
              <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                {item.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {dict.breakdownsPage.readAnalysis}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
