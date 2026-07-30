import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { processSteps } from "@/lib/content/testimonials";

export function Process() {
  return (
    <Section
      eyebrow="My Process"
      title="Un processus prévisible, pensé pour réduire le risque"
      description="Tu sais toujours où on en est et ce qui arrive ensuite."
    >
      <div className="grid gap-8 md:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.05}>
            <div>
              <span className="text-sm font-semibold text-primary">
                {step.step}
              </span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
