import type { Metadata } from "next";
import { Mail, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact — Arnaud Malanda",
  description: "Parlons de ton produit et de la manière dont je peux aider.",
};

const CONTACTS = [
  { icon: Mail, label: "hello@arnaudmalanda.com", href: "mailto:hello@arnaudmalanda.com" },
  { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: ExternalLink, label: "GitHub", href: "https://github.com" },
  { icon: ExternalLink, label: "Instagram", href: "https://instagram.com" },
];

export default function ContactPage() {
  return (
    <Section
      align="center"
      eyebrow="Contact"
      title="Parlons de ton produit"
      description="Décris ce que tu construis et ce qui te bloque — je réponds sous 24 à 48h."
      narrow
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <ul className="space-y-4">
            {CONTACTS.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <contact.icon className="size-4" strokeWidth={1.75} />
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.05}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
