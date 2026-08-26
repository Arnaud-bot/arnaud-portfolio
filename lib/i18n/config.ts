export const locales = ["fr", "en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const rtlLocales: readonly Locale[] = ["ar"];

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function getDir(locale: Locale): "rtl" | "ltr" {
  return isRtlLocale(locale) ? "rtl" : "ltr";
}

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

export const localeFlags: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇺🇸",
  ar: "🇦🇪",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
