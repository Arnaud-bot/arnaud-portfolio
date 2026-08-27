import type { Metadata } from "next";
import { Mail, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  return dict.meta.contact;
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);

  const contacts = [
    {
      icon: Mail,
      label: "arnaudmalanda1@gmail.com",
      href: "mailto:arnaudmalanda1@gmail.com",
    },
    {
      icon: ExternalLink,
      label: dict.contactPage.linkedin,
      href: "https://www.linkedin.com/in/arnaud-malanda-8883a7260/",
    },
    {
      icon: ExternalLink,
      label: dict.contactPage.github,
      href: "https://github.com/Arnaud-bot",
    },
    {
      icon: ExternalLink,
      label: dict.contactPage.instagram,
      href: "https://www.instagram.com/arnaud_kuyzer/",
    },
  ];

  return (
    <Section
      align="center"
      eyebrow={dict.contactPage.eyebrow}
      title={dict.contactPage.title}
      description={dict.contactPage.description}
      narrow
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <ul className="space-y-4">
            {contacts.map((contact) => (
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
          <ContactForm dict={dict.contactPage.form} />
        </Reveal>
      </div>
    </Section>
  );
}
