import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { breakdowns } from "@/lib/content/breakdowns";

export const metadata: Metadata = {
  title: "Website Breakdowns — Arnaud Malanda",
  description:
    "Analyses UX de sites publics : score, points forts, points faibles, recommandations.",
};

export default function BreakdownsPage() {
  return (
    <Section
      align="center"
      eyebrow="Website Breakdowns"
      title="Analyses de sites publics"
      description="Mon contenu signature : un regard critique et constructif sur de vraies interfaces."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {breakdowns.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 3) * 0.05}>
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
              <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>
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
    </Section>
  );
}
