import "server-only";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("@/lib/i18n/dictionaries/fr").then((m) => m.fr),
  en: () => import("@/lib/i18n/dictionaries/en").then((m) => m.en),
  ar: () => import("@/lib/i18n/dictionaries/ar").then((m) => m.ar),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
