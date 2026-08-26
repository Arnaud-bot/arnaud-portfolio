"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "radix-ui";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config";
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
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label={localeNames[lang]}
          className={cn(
            "flex size-9 items-center justify-center rounded-full text-lg transition-colors hover:bg-muted",
            className
          )}
        >
          <span aria-hidden>{localeFlags[lang]}</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[140px] overflow-hidden rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg"
        >
          {locales.map((locale) => (
            <DropdownMenu.Item key={locale} asChild>
              <Link
                href={`/${locale}${rest ? `/${rest}` : ""}`}
                aria-current={locale === lang ? "true" : undefined}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm outline-none",
                  locale === lang
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span aria-hidden className="text-base">
                  {localeFlags[locale]}
                </span>
                {localeNames[locale]}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
