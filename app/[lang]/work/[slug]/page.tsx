import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { getCaseStudies } from "@/lib/content/case-studies";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function generateStaticParams() {
  return getCaseStudies("fr").map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const study = getCaseStudies(lang).find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Arnaud Malanda`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  const study = getCaseStudies(lang).find((s) => s.slug === slug);
  if (!study) notFound();

  const { chapters } = dict.workPage;

  return (
    <>
      <Section align="center" narrow className="pb-0">
        <Badge variant="secondary" className="mx-auto w-fit">
          {study.category}
        </Badge>
        <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
          {study.title}
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] text-base leading-[1.7] text-muted-foreground">
          {study.tagline}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{study.client}</p>
      </Section>

      <Section narrow className="pt-10">
        <Reveal>
          {study.demoEmbed ? (
            <div className="h-[380px] w-full overflow-hidden rounded-lg border border-border sm:h-[430px] md:h-[460px]">
              <iframe
                src={study.demoEmbed}
                title={study.title}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-background">
              <Image
                src={study.thumbnail}
                alt=""
                aria-hidden
                fill
                className="scale-110 object-cover opacity-40 blur-2xl"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
              <Image
                src={study.thumbnail}
                alt={study.title}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
                priority
              />
            </div>
          )}
        </Reveal>
      </Section>

      <Section narrow className="pt-0">
        <div className="space-y-16">
          <Reveal>
            <div>
              <h2 className="text-xl font-semibold">{chapters.overview}</h2>
              <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
                {study.overview}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.03}>
            <div>
              <h2 className="text-xl font-semibold">{chapters.challenge}</h2>
              <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
                {study.challenge}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <h2 className="text-xl font-semibold">{chapters.approach}</h2>
              <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
                {study.approach.intro}
              </p>
              {study.approach.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {study.approach.points.map((point) => (
                    <li
                      key={point}
                      className="ms-5 list-disc text-base leading-[1.7] text-muted-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.09}>
            <div>
              <h2 className="text-xl font-semibold">{chapters.keyInsights}</h2>
              <ul className="mt-4 space-y-2">
                {study.keyInsights.map((point) => (
                  <li
                    key={point}
                    className="ms-5 list-disc text-base leading-[1.7] text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h2 className="text-xl font-semibold">{chapters.solution}</h2>
              <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
                {study.solution.intro}
              </p>
              {study.solution.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {study.solution.points.map((point) => (
                    <li
                      key={point}
                      className="ms-5 list-disc text-base leading-[1.7] text-muted-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h2 className="text-xl font-semibold">{chapters.outcome}</h2>
              <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
                {study.outcome.intro}
              </p>
              {study.outcome.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {study.outcome.points.map((point) => (
                    <li
                      key={point}
                      className="ms-5 list-disc text-base leading-[1.7] text-muted-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div>
              <h2 className="text-xl font-semibold">{chapters.lessonsLearned}</h2>
              <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
                {study.lessonsLearned}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.21}>
            <div>
              <h2 className="text-xl font-semibold">{chapters.technologies}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
