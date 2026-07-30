import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function ValueProposition({ dict }: { dict: Dictionary }) {
  return (
    <Section
      align="center"
      eyebrow={dict.valueProposition.eyebrow}
      title={dict.valueProposition.title}
      description={dict.valueProposition.description}
    >
      <div className="grid gap-8 md:grid-cols-3">
        {dict.valueProposition.points.map((point, i) => (
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
