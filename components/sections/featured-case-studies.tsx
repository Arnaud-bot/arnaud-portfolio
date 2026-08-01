import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { getCaseStudies } from "@/lib/content/case-studies";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function FeaturedCaseStudies({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const caseStudies = getCaseStudies(lang);

  return (
    <Section
      eyebrow={dict.featuredCaseStudies.eyebrow}
      title={dict.featuredCaseStudies.title}
      description={dict.featuredCaseStudies.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.05}>
            <Link
              href={`/${lang}/work/${study.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-accent"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
                <Image
                  src={study.thumbnail}
                  alt=""
                  aria-hidden
                  fill
                  className="scale-110 object-cover opacity-40 blur-2xl"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
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
                <h3 className="mt-5 text-lg font-semibold">{study.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                  {study.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {dict.featuredCaseStudies.seeCaseStudy}
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
