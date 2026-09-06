import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { SERVICE_ILLUSTRATIONS } from "@/components/illustrations/service-illustrations";
import { getServices } from "@/lib/content/services";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function Services({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const services = getServices(lang);

  return (
    <Section
      eyebrow={dict.homeServices.eyebrow}
      title={dict.homeServices.title}
      description={dict.homeServices.description}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Illustration = SERVICE_ILLUSTRATIONS[service.slug];
          return (
            <Reveal key={service.slug} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent">
                <Illustration className="h-[140px] w-full" />
                <h3 className="mt-4 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
