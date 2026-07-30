import { Section } from "@/components/layout/section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Reveal } from "@/components/animations/reveal";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="Ce que les clients en disent"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name + i} delay={i * 0.05}>
            <figure className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-8">
              <blockquote className="text-sm leading-[1.7] text-foreground">
                &quot;{t.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {t.name
                      .replace(/[[\]]/g, "")
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
