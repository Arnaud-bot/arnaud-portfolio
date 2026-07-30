import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";

const POINTS = [
  {
    title: "J'analyse",
    description:
      "Avant de dessiner ou de coder quoi que ce soit, j'identifie ce qui bloque réellement tes utilisateurs et ta conversion.",
  },
  {
    title: "Je redesigne",
    description:
      "Je transforme les problèmes identifiés en interfaces claires, cohérentes et alignées avec ton positionnement.",
  },
  {
    title: "Je construis",
    description:
      "Je développe des produits rapides et fiables — web et mobile — prêts pour de vrais utilisateurs.",
  },
];

export function ValueProposition() {
  return (
    <Section
      align="center"
      eyebrow="Ma mission"
      title="Je ne construis pas simplement des sites"
      description="J'aide les entreprises à transformer leurs produits digitaux en expériences que les gens aiment utiliser."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {POINTS.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                {point.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
