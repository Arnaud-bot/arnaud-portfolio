"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { getDir, type Locale } from "@/lib/i18n/config";
import { getBlogPosts } from "@/lib/content/blog";
import { getBreakdowns } from "@/lib/content/breakdowns";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const dir = getDir(lang);
  const hasBlogPosts = getBlogPosts(lang).length > 0;
  const hasBreakdowns = getBreakdowns(lang).length > 0;

  const navLinks = [
    { href: `/${lang}/work`, label: dict.nav.work },
    { href: `/${lang}/lab`, label: dict.nav.lab },
    ...(hasBreakdowns
      ? [{ href: `/${lang}/breakdowns`, label: dict.nav.breakdowns }]
      : []),
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/about`, label: dict.nav.about },
    ...(hasBlogPosts ? [{ href: `/${lang}/blog`, label: dict.nav.blog }] : []),
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link href={`/${lang}`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher lang={lang} />
          <Button asChild className="h-10 px-5">
            <Link href={`/${lang}/contact`}>{dict.nav.letsTalk}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher lang={lang} />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={dir === "rtl" ? "left" : "right"} className="w-[280px]">
              <SheetTitle className="sr-only">{dict.nav.menu}</SheetTitle>
              <nav className="mt-12 flex flex-col gap-6 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href={`/${lang}/contact`}>{dict.nav.letsTalk}</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
