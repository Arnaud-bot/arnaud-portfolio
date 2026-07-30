import {
  SearchCheck,
  PenTool,
  Code2,
  Smartphone,
  Compass,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { services } from "@/lib/content/services";

const ICONS: Record<string, LucideIcon> = {
  SearchCheck,
  PenTool,
  Code2,
  Smartphone,
  Compass,
  TrendingUp,
};

export function Services() {
  return (
    <Section
      eyebrow="Services"
      title="Ce que je peux faire pour ton produit"
      description="Du diagnostic à la mise en production, sur web comme sur mobile."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.slug} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-lg border border-border bg-card p-8 transition-colors hover:bg-accent">
                <Icon className="size-6 text-primary" strokeWidth={1.75} />
                <h3 className="mt-5 text-lg font-semibold">
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
