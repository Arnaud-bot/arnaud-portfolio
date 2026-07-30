import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { RevealOnMount } from "@/components/animations/reveal-on-mount";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-10 md:pt-28 md:pb-24">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <RevealOnMount>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.06em] text-primary md:mb-6">
                Product-Focused Developer · Dubai, UAE
              </p>
            </RevealOnMount>

            <RevealOnMount delay={0.05}>
              <h1 className="text-3xl font-bold leading-[1.12] tracking-[-0.02em] sm:text-4xl md:text-5xl md:leading-[1.08] lg:text-6xl">
                Je transforme des produits digitaux en expériences que les
                gens aiment utiliser.
              </h1>
            </RevealOnMount>

            <RevealOnMount delay={0.1}>
              <p className="mt-5 max-w-[480px] text-base leading-[1.7] text-muted-foreground md:mt-6 md:text-lg">
                J&apos;analyse, je redesigne et je développe des sites et
                applications premium pour des fondateurs et des équipes
                produit qui veulent convertir plus et paraître plus
                crédibles.
              </p>
            </RevealOnMount>

            <RevealOnMount delay={0.15}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
                <Button asChild className="h-12 w-full px-8 text-base sm:w-auto">
                  <Link href="/work">
                    View My Work
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="h-10 px-4 text-sm sm:h-12 sm:border sm:border-border sm:px-8 sm:text-base"
                >
                  <Link href="/contact">Let&apos;s Talk</Link>
                </Button>
              </div>
            </RevealOnMount>
          </div>

          <RevealOnMount delay={0.1}>
            <div className="relative mx-auto w-[62%] max-w-[220px] sm:w-full sm:max-w-[420px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(24,168,255,0.18),transparent_70%)] sm:-inset-12"
              />
              {/* TODO: remplacer par la photo professionnelle */}
              <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-border bg-card text-sm text-muted-foreground md:aspect-[4/5]">
                Portrait
              </div>

              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-popover/95 px-3 py-2 text-[11px] shadow-lg backdrop-blur-sm sm:left-5 sm:translate-x-0 sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-xs">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                <span className="font-medium text-foreground">
                  Disponible pour nouveaux projets
                </span>
              </div>
            </div>
          </RevealOnMount>
        </div>
      </Container>
    </section>
  );
}
