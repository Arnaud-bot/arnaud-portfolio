import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function ContactCta({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-border bg-card px-8 py-16 text-center md:px-16">
            <h2 className="mx-auto max-w-[560px] text-3xl font-bold leading-[1.15] tracking-[-0.01em] md:text-4xl">
              {dict.contactCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-base leading-[1.7] text-muted-foreground">
              {dict.contactCta.description}
            </p>
            <Button asChild className="mt-8 h-12 px-8 text-base">
              <Link href={`/${lang}/contact`}>
                {dict.contactCta.cta}
                <ArrowRight className="size-4 rtl:-scale-x-100" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
