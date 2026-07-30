"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && (
            <span className="mx-1 text-muted-foreground/40" aria-hidden>
              /
            </span>
          )}
          <Link
            href={`/${locale}${rest ? `/${rest}` : ""}`}
            aria-current={locale === lang ? "true" : undefined}
            className={cn(
              "text-xs font-medium uppercase transition-colors",
              locale === lang
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
