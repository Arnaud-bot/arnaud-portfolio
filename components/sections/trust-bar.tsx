import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";

/**
 * Barre de confiance sous le hero — recommandée pendant l'étape IA pour
 * exposer la preuve sociale avant que le visiteur ne scrolle.
 * Remplace les crochets par de vrais logos clients ou une vraie citation.
 */
export function TrustBar() {
  return (
    <section className="border-y border-border py-8">
      <Container>
        <Reveal>
          <p className="text-center text-sm leading-[1.7] text-muted-foreground">
            &quot;[Citation courte d&apos;un client à propos du résultat obtenu]&quot;
            <span className="ml-2 text-foreground">
              — [Nom, poste chez Client]
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
