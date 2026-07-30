import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { breakdowns } from "@/lib/content/breakdowns";

export function BreakdownsTeaser() {
  const featured = breakdowns.slice(0, 3);

  return (
    <Section
      eyebrow="Website Breakdowns"
      title="J'analyse des sites publics, gratuitement"
      description="Score UX, points forts, points faibles et recommandations — mon contenu signature."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.05}>
            <Link
              href={`/breakdowns/${item.slug}`}
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
                Lire l&apos;analyse
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" className="h-11 px-6">
          <Link href="/breakdowns">Voir toutes les analyses</Link>
        </Button>
      </div>
    </Section>
  );
}
