import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Services — Arnaud Malanda",
  description:
    "UX Audit, UI/UX Redesign, Web & Mobile Development, Product Strategy et Conversion Optimization.",
};

const ICONS: Record<string, LucideIcon> = {
  SearchCheck,
  PenTool,
  Code2,
  Smartphone,
  Compass,
  TrendingUp,
};

export default function ServicesPage() {
  return (
    <Section
      align="center"
      eyebrow="Services"
      title="Comment je peux aider ton produit"
      description="Chaque service peut être pris seul ou combiné selon où tu en es dans ton produit."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.slug} delay={(i % 2) * 0.05}>
              <div className="h-full rounded-lg border border-border bg-card p-8">
                <Icon className="size-6 text-primary" strokeWidth={1.75} />
                <h2 className="mt-5 text-xl font-semibold">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
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
