import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-border py-8">
      <Container>
        <Reveal>
          <p className="text-center text-sm leading-[1.7] text-muted-foreground">
            &quot;{dict.trustBar.quote}&quot;
            <span className="ms-2 text-foreground">— {dict.trustBar.author}</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
