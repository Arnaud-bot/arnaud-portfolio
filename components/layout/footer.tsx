import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { getBlogPosts } from "@/lib/content/blog";
import { getBreakdowns } from "@/lib/content/breakdowns";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/arnaud-malanda-8883a7260/",
    label: "LinkedIn",
    Icon: FaLinkedin,
    color: "#0A66C2",
  },
  { href: "https://github.com", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.instagram.com/arnaud_kuyzer/",
    label: "Instagram",
    Icon: FaInstagram,
    color: "#E4405F",
  },
  {
    href: "https://wa.me/message/6D2CAPBPUT7ZN1",
    label: "WhatsApp",
    Icon: FaWhatsapp,
    color: "#25D366",
  },
];

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const hasBlogPosts = getBlogPosts(lang).length > 0;
  const hasBreakdowns = getBreakdowns(lang).length > 0;

  const columns = [
    {
      title: dict.footer.navTitle,
      links: [
        { href: `/${lang}/work`, label: dict.nav.work },
        { href: `/${lang}/lab`, label: dict.nav.lab },
        ...(hasBreakdowns
          ? [{ href: `/${lang}/breakdowns`, label: dict.nav.breakdowns }]
          : []),
        { href: `/${lang}/services`, label: dict.nav.services },
        { href: `/${lang}/about`, label: dict.nav.about },
        ...(hasBlogPosts ? [{ href: `/${lang}/blog`, label: dict.nav.blog }] : []),
      ],
    },
    {
      title: dict.footer.contactTitle,
      links: [
        { href: `/${lang}/contact`, label: dict.nav.letsTalk },
        { href: "mailto:hello@arnaudmalanda.com", label: "Email" },
      ],
    },
  ];

  return (
    <footer className="mt-auto bg-card">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-base font-semibold tracking-tight">
              Arnaud Malanda
            </p>
            <p className="mt-3 max-w-[320px] text-sm leading-[1.7] text-muted-foreground">
              {dict.footer.tagline}
            </p>
          </div>

          {columns.map((col) => (
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
            © {new Date().getFullYear()} Arnaud Malanda. {dict.footer.rights}
          </p>
          <div className="flex gap-5">
            {SOCIALS.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                <Icon size={20} style={color ? { color } : undefined} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
