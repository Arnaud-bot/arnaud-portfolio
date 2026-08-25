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
    {
      slug: "real-estate",
      industry: "Immobilier",
      title: "Dubai Prime Properties",
      tagline: "Un site immobilier premium pensé pour convertir les recherches en visites.",
      liveUrl: "https://dubai-prime-properties.vercel.app",
      thumbnail: "/lab/dubai-prime-properties.jpg",
    },
    {
      slug: "restaurant",
      industry: "Restaurant",
      title: "LUMA Dubai",
      tagline: "Un restaurant contemporain, pensé pour donner envie de réserver.",
      liveUrl: "https://restaurant-demo-pied-nine.vercel.app",
      thumbnail: "/lab/luma-dubai.jpg",
    },
    {
      slug: "saas",
      industry: "SaaS",
      title: "FlowDesk AI",
      tagline: "Une landing page SaaS pensée pour convertir dès la première visite.",
      liveUrl: "https://startup-saas-demo.vercel.app",
      thumbnail: "/lab/flowdesk-ai.jpg",
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
    {
      slug: "real-estate",
      industry: "Real Estate",
      title: "Dubai Prime Properties",
      tagline: "A premium real estate site designed to turn searches into viewings.",
      liveUrl: "https://dubai-prime-properties.vercel.app",
      thumbnail: "/lab/dubai-prime-properties.jpg",
    },
    {
      slug: "restaurant",
      industry: "Restaurant",
      title: "LUMA Dubai",
      tagline: "A contemporary restaurant site designed to make you want to book a table.",
      liveUrl: "https://restaurant-demo-pied-nine.vercel.app",
      thumbnail: "/lab/luma-dubai.jpg",
    },
    {
      slug: "saas",
      industry: "SaaS",
      title: "FlowDesk AI",
      tagline: "A SaaS landing page designed to convert from the very first visit.",
      liveUrl: "https://startup-saas-demo.vercel.app",
      thumbnail: "/lab/flowdesk-ai.jpg",
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
    {
      slug: "real-estate",
      industry: "العقارات",
      title: "Dubai Prime Properties",
      tagline: "موقع عقاري متميز مصمم لتحويل عمليات البحث إلى زيارات فعلية.",
      liveUrl: "https://dubai-prime-properties.vercel.app",
      thumbnail: "/lab/dubai-prime-properties.jpg",
    },
    {
      slug: "restaurant",
      industry: "المطاعم",
      title: "LUMA Dubai",
      tagline: "موقع مطعم عصري مصمم لجعلك ترغب في حجز طاولة.",
      liveUrl: "https://restaurant-demo-pied-nine.vercel.app",
      thumbnail: "/lab/luma-dubai.jpg",
    },
    {
      slug: "saas",
      industry: "SaaS",
      title: "FlowDesk AI",
      tagline: "صفحة هبوط لمنتج SaaS مصممة للتحويل من الزيارة الأولى.",
      liveUrl: "https://startup-saas-demo.vercel.app",
      thumbnail: "/lab/flowdesk-ai.jpg",
    },
  ],
};

export function getLabDemos(locale: Locale): LabDemo[] {
  return labDemosByLocale[locale];
}
