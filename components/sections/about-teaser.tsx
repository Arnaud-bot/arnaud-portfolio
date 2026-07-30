import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function AboutTeaser({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <Section>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/Ras.jpg"
              alt="Arnaud Malanda"
              fill
              className="object-cover object-top"
              sizes="400px"
            />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-xs font-medium uppercase tracking-[0.06em] text-primary">
            {dict.aboutTeaser.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-[-0.01em] md:text-4xl">
            {dict.aboutTeaser.title}
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
            {dict.aboutTeaser.body}
          </p>
          <Button asChild variant="outline" className="mt-6 h-11 px-6">
            <Link href={`/${lang}/about`}>
              {dict.aboutTeaser.cta}
              <ArrowRight className="size-4 rtl:-scale-x-100" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
