import type { Service } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

const servicesByLocale: Record<Locale, Service[]> = {
  fr: [
    {
      slug: "ux-audit",
      title: "UX Audit",
      description:
        "J'analyse ton produit existant pour identifier les frictions qui coûtent des conversions et des utilisateurs.",
      icon: "SearchCheck",
    },
    {
      slug: "ui-redesign",
      title: "UI/UX Redesign",
      description:
        "Je repense l'interface pour qu'elle soit à la hauteur de la qualité de ce que tu construis.",
      icon: "PenTool",
    },
    {
      slug: "web-development",
      title: "Web Development",
      description:
        "Sites et applications web rapides, accessibles et construits pour durer, avec React et Next.js.",
      icon: "Code2",
    },
    {
      slug: "mobile-development",
      title: "Mobile Development",
      description:
        "Applications mobiles natives ou cross-platform avec Flutter, pensées produit avant d'être pensées code.",
      icon: "Smartphone",
    },
    {
      slug: "product-strategy",
      title: "Product Strategy",
      description:
        "Je t'aide à prioriser ce qui compte vraiment pour ton produit avant d'écrire la moindre ligne de code.",
      icon: "Compass",
    },
    {
      slug: "conversion-optimization",
      title: "Conversion Optimization",
      description:
        "J'identifie et je corrige les points de friction qui empêchent tes visiteurs de devenir des clients.",
      icon: "TrendingUp",
    },
  ],
  en: [
    {
      slug: "ux-audit",
      title: "UX Audit",
      description:
        "I analyze your existing product to identify the friction points costing you conversions and users.",
      icon: "SearchCheck",
    },
    {
      slug: "ui-redesign",
      title: "UI/UX Redesign",
      description:
        "I rethink the interface so it matches the quality of what you're building.",
      icon: "PenTool",
    },
    {
      slug: "web-development",
      title: "Web Development",
      description:
        "Fast, accessible websites and web apps built to last, with React and Next.js.",
      icon: "Code2",
    },
    {
      slug: "mobile-development",
      title: "Mobile Development",
      description:
        "Native or cross-platform mobile apps with Flutter, product-thinking before code-thinking.",
      icon: "Smartphone",
    },
    {
      slug: "product-strategy",
      title: "Product Strategy",
      description:
        "I help you prioritize what actually matters for your product before a single line of code is written.",
      icon: "Compass",
    },
    {
      slug: "conversion-optimization",
      title: "Conversion Optimization",
      description:
        "I identify and fix the friction points stopping your visitors from becoming customers.",
      icon: "TrendingUp",
    },
  ],
  ar: [
    {
      slug: "ux-audit",
      title: "تدقيق تجربة المستخدم",
      description:
        "أحلّل منتجك الحالي لتحديد نقاط الاحتكاك التي تكلفك تحويلات ومستخدمين.",
      icon: "SearchCheck",
    },
    {
      slug: "ui-redesign",
      title: "إعادة تصميم الواجهة",
      description: "أعيد التفكير في الواجهة لتكون في مستوى جودة ما تبنيه.",
      icon: "PenTool",
    },
    {
      slug: "web-development",
      title: "تطوير الويب",
      description:
        "مواقع وتطبيقات ويب سريعة، متاحة، ومبنية لتدوم، باستخدام React وNext.js.",
      icon: "Code2",
    },
    {
      slug: "mobile-development",
      title: "تطوير تطبيقات الجوّال",
      description:
        "تطبيقات جوّال أصلية أو متعددة المنصات باستخدام Flutter، بتفكير المنتج قبل الكود.",
      icon: "Smartphone",
    },
    {
      slug: "product-strategy",
      title: "استراتيجية المنتج",
      description:
        "أساعدك على تحديد أولويات ما يهم فعلاً لمنتجك قبل كتابة أي سطر من الكود.",
      icon: "Compass",
    },
    {
      slug: "conversion-optimization",
      title: "تحسين معدل التحويل",
      description:
        "أحدّد وأصلح نقاط الاحتكاك التي تمنع زوارك من أن يصبحوا عملاء.",
      icon: "TrendingUp",
    },
  ],
};

export function getServices(locale: Locale): Service[] {
  return servicesByLocale[locale];
}
