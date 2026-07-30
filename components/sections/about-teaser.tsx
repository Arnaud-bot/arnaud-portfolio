import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";

export function AboutTeaser() {
  return (
    <Section>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          {/* TODO: remplacer par la photo professionnelle */}
          <div className="flex aspect-[4/5] w-full max-w-[400px] items-center justify-center rounded-lg border border-border bg-card text-sm text-muted-foreground">
            Portrait
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-xs font-medium uppercase tracking-[0.06em] text-primary">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-[-0.01em] md:text-4xl">
            Pourquoi je fais ce métier
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
            [Ton histoire : pourquoi tu t&apos;es intéressé aux produits
            digitaux, ce qui te frustre dans les mauvaises expériences
            utilisateur, et ce qui te motive à construire de meilleurs
            produits pour tes clients.]
          </p>
          <Button asChild variant="outline" className="mt-6 h-11 px-6">
            <Link href="/about">
              En savoir plus sur moi
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
