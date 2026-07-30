import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { caseStudies } from "@/lib/content/case-studies";

export function FeaturedCaseStudies() {
  return (
    <Section
      eyebrow="Case Studies"
      title="Des histoires, pas des captures d'écran"
      description="Chaque projet suit le même fil : problème, recherche, décisions, résultats."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.05}>
            <Link
              href={`/work/${study.slug}`}
              className="group flex h-full flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:bg-accent"
            >
              <Badge variant="secondary" className="w-fit">
                {study.category}
              </Badge>
              <h3 className="mt-5 text-lg font-semibold">{study.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                {study.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Voir l&apos;étude de cas
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
