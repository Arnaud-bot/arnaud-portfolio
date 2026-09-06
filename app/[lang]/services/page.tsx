import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { SERVICE_ILLUSTRATIONS } from "@/components/illustrations/service-illustrations";
import { getServices } from "@/lib/content/services";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

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
          const Illustration = SERVICE_ILLUSTRATIONS[service.slug];
          return (
            <Reveal key={service.slug} delay={(i % 2) * 0.05}>
              <div className="h-full rounded-lg border border-border bg-card p-6">
                <Illustration className="h-[150px] w-full" />
                <h2 className="mt-4 text-xl font-semibold">
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
