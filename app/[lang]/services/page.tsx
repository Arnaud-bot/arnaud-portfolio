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
import { getServices } from "@/lib/content/services";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const ICONS: Record<string, LucideIcon> = {
  SearchCheck,
  PenTool,
  Code2,
  Smartphone,
  Compass,
  TrendingUp,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  return dict.meta.services;
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  const services = getServices(lang);

  return (
    <Section
      align="center"
      eyebrow={dict.servicesPage.eyebrow}
      title={dict.servicesPage.title}
      description={dict.servicesPage.description}
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
