import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

const COLUMNS = [
  {
    title: "Navigation",
    links: [
      { href: "/work", label: "Work" },
      { href: "/breakdowns", label: "Breakdowns" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Let's Talk" },
      { href: "mailto:hello@arnaudmalanda.com", label: "Email" },
    ],
  },
];

const SOCIALS = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
  { href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-card">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-base font-semibold tracking-tight">
              Arnaud Malanda
            </p>
            <p className="mt-3 max-w-[320px] text-sm leading-[1.7] text-muted-foreground">
              Product-Focused Developer basé à Dubai. J&apos;aide les
              entreprises à transformer leurs produits digitaux en
              expériences que les gens aiment utiliser.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Arnaud Malanda. Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
