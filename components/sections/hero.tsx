import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFlutter,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { RevealOnMount } from "@/components/animations/reveal-on-mount";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

type StackBadge = {
  name: string;
  Icon: IconType;
  color: string;
  position: string;
  delay: number;
};

const STACK_BADGES: StackBadge[] = [
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#081A2F",
    position: "-top-[8%] -left-[12%]",
    delay: 0,
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
    position: "top-[2%] -right-[14%]",
    delay: 0.8,
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    position: "top-[42%] -left-[20%]",
    delay: 1.6,
  },
  {
    name: "Flutter",
    Icon: SiFlutter,
    color: "#02569B",
    position: "-bottom-[4%] -right-[10%]",
    delay: 2.4,
  },
  {
    name: "Tailwind",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    position: "-bottom-[2%] -left-[16%]",
    delay: 3.2,
  },
];

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [beforeHighlight, afterHighlight] = dict.hero.title.split(
    dict.hero.titleHighlight
  );

  return (
    <section className="relative overflow-hidden pt-12 pb-10 md:pt-14 md:pb-12">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <RevealOnMount>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.06em] text-primary md:mb-6">
                {dict.hero.eyebrow}
              </p>
            </RevealOnMount>

            <RevealOnMount delay={0.05}>
              <h1 className="text-3xl font-bold leading-[1.12] tracking-[-0.02em] sm:text-4xl md:text-5xl md:leading-[1.08] lg:text-6xl">
                {beforeHighlight}
                <span className="text-primary">{dict.hero.titleHighlight}</span>
                {afterHighlight}
              </h1>
            </RevealOnMount>

            <RevealOnMount delay={0.1}>
              <p className="mt-5 max-w-[480px] text-base leading-[1.7] text-muted-foreground md:mt-6 md:text-lg">
                {dict.hero.description}
              </p>
            </RevealOnMount>

            <RevealOnMount delay={0.15}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
                <Button asChild className="h-12 w-full px-8 text-base sm:w-auto">
                  <Link href={`/${lang}/work`}>
                    {dict.hero.viewMyWork}
                    <ArrowRight className="size-4 rtl:-scale-x-100" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="h-10 px-4 text-sm sm:h-12 sm:border sm:border-border sm:px-8 sm:text-base"
                >
                  <Link href={`/${lang}/contact`}>{dict.hero.letsTalk}</Link>
                </Button>
              </div>
            </RevealOnMount>
          </div>

          <RevealOnMount delay={0.1}>
            <div className="relative mx-auto w-[62%] max-w-[220px] sm:w-full sm:max-w-[420px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(242,169,59,0.18),transparent_70%)] sm:-inset-12"
              />
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-card md:aspect-[4/5]">
                <Image
                  src="/Ras.jpg"
                  alt="Portrait"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 420px, 220px"
                />
              </div>

              {STACK_BADGES.map(({ name, Icon, color, position, delay }) => (
                <div
                  key={name}
                  aria-hidden
                  className={cn(
                    "absolute z-10 flex flex-col items-center gap-1 rounded-2xl border border-primary-foreground/15 bg-primary px-2.5 py-2 shadow-lg motion-safe:animate-float sm:gap-1.5 sm:px-3 sm:py-2.5",
                    position
                  )}
                  style={{ animationDelay: `${delay}s` }}
                >
                  <Icon className="size-3.5 sm:size-[18px]" style={{ color }} />
                  <span className="font-mono text-[7px] font-semibold tracking-tight text-primary-foreground sm:text-[9.5px]">
                    {name}
                  </span>
                </div>
              ))}

              <div className="absolute -bottom-4 start-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-popover/95 px-3 py-2 text-[11px] shadow-lg backdrop-blur-sm sm:start-5 sm:translate-x-0 sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-xs">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                <span className="font-medium text-foreground">
                  {dict.hero.availableBadge}
                </span>
              </div>
            </div>
          </RevealOnMount>
        </div>
      </Container>
    </section>
  );
}
