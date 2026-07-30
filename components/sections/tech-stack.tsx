import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";

const STACK = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Flutter",
  "Framer Motion",
  "Figma",
  "Node.js",
];

export function TechStack() {
  return (
    <Section
      align="center"
      eyebrow="Tech Stack"
      title="Les outils que j'utilise au quotidien"
    >
      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
