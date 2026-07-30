import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { getProcessSteps } from "@/lib/content/testimonials";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function Process({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const processSteps = getProcessSteps(lang);

  return (
    <Section
      eyebrow={dict.process.eyebrow}
      title={dict.process.title}
      description={dict.process.description}
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
