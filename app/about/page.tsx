import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "About — Arnaud Malanda",
  description:
    "Product-Focused Developer basé à Dubai, spécialisé en UX, conversion et développement web & mobile.",
};

export default function AboutPage() {
  return (
    <Section eyebrow="About" title="Arnaud Malanda">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          {/* TODO: remplacer par la photo professionnelle */}
          <div className="flex aspect-[4/5] w-full items-center justify-center rounded-lg border border-border bg-card text-sm text-muted-foreground">
            Portrait
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-6 text-base leading-[1.7] text-muted-foreground">
            <p>
              [Raconte ton histoire : comment tu es arrivé au développement
              et à l&apos;UX, quel a été le déclic qui t&apos;a fait réaliser
              que le vrai problème des produits digitaux est rarement
              technique.]
            </p>
            <p>
              [Explique ce qui te frustre dans les mauvaises expériences
              utilisateur, et pourquoi tu as choisi de te positionner comme
              Product-Focused Developer plutôt que comme freelance
              généraliste.]
            </p>
            <p>
              [Termine sur ce que tu veux que les visiteurs retiennent de
              toi : ta manière de travailler, tes valeurs, ce que ça change
              pour leurs produits.]
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
