import { locales, type Locale } from "@/lib/i18n/config";

/**
 * Builds the canonical + hreflang alternates for a page.
 * `path` is the route segment(s) after the locale, without a leading slash
 * (e.g. "" for the homepage, "about", "work/easyfitness-uae").
 */
export function buildAlternates(lang: Locale, path: string) {
  const suffix = path ? `/${path}` : "";
  return {
    canonical: `/${lang}${suffix}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `/${l}${suffix}`])),
      "x-default": suffix || "/",
    },
  };
}
