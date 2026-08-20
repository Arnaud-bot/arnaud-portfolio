import type { LabDemo } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

const labDemosByLocale: Record<Locale, LabDemo[]> = {
  fr: [
    {
      slug: "fitness",
      industry: "Fitness",
      title: "EasyFitness Concept",
      tagline: "Un club de fitness premium, repensé pour convertir.",
      liveUrl: "https://easyfitness-uae-redesign.vercel.app",
      thumbnail: "/lab/easyfitness-lab.jpg",
    },
  ],
  en: [
    {
      slug: "fitness",
      industry: "Fitness",
      title: "EasyFitness Concept",
      tagline: "A premium fitness club, redesigned to convert.",
      liveUrl: "https://easyfitness-uae-redesign.vercel.app",
      thumbnail: "/lab/easyfitness-lab.jpg",
    },
  ],
  ar: [
    {
      slug: "fitness",
      industry: "اللياقة البدنية",
      title: "مفهوم EasyFitness",
      tagline: "نادي لياقة بدنية متميز، أُعيد تصميمه لزيادة التحويل.",
      liveUrl: "https://easyfitness-uae-redesign.vercel.app",
      thumbnail: "/lab/easyfitness-lab.jpg",
    },
  ],
};

export function getLabDemos(locale: Locale): LabDemo[] {
  return labDemosByLocale[locale];
}
