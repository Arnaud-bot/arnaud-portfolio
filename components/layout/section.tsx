import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type SectionProps = React.ComponentProps<"section"> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  narrow?: boolean;
};

export function Section({
  eyebrow,
  title,
  description,
  align = "left",
  narrow,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-12 lg:py-16", className)}
      {...props}
    >
      <Container narrow={narrow}>
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-12 md:mb-16",
              align === "center" && "mx-auto max-w-[640px] text-center"
            )}
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.06em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.01em] md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-[1.7] text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
