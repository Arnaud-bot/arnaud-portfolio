import type { Testimonial, ProcessStep } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

const testimonialsByLocale: Record<Locale, Testimonial[]> = {
  fr: [
    {
      quote: "[Témoignage à recueillir auprès d'un client réel.]",
      name: "[Nom du client]",
      role: "[Poste, entreprise]",
    },
    {
      quote: "[Témoignage à recueillir auprès d'un client réel.]",
      name: "[Nom du client]",
      role: "[Poste, entreprise]",
    },
    {
      quote: "[Témoignage à recueillir auprès d'un client réel.]",
      name: "[Nom du client]",
      role: "[Poste, entreprise]",
    },
  ],
  en: [
    {
      quote: "[Testimonial to collect from a real client.]",
      name: "[Client name]",
      role: "[Role, company]",
    },
    {
      quote: "[Testimonial to collect from a real client.]",
      name: "[Client name]",
      role: "[Role, company]",
    },
    {
      quote: "[Testimonial to collect from a real client.]",
      name: "[Client name]",
      role: "[Role, company]",
    },
  ],
  ar: [
    {
      quote: "[شهادة سيتم جمعها من عميل حقيقي.]",
      name: "[اسم العميل]",
      role: "[المنصب، الشركة]",
    },
    {
      quote: "[شهادة سيتم جمعها من عميل حقيقي.]",
      name: "[اسم العميل]",
      role: "[المنصب، الشركة]",
    },
    {
      quote: "[شهادة سيتم جمعها من عميل حقيقي.]",
      name: "[اسم العميل]",
      role: "[المنصب، الشركة]",
    },
  ],
};

const processStepsByLocale: Record<Locale, ProcessStep[]> = {
  fr: [
    {
      step: "01",
      title: "Discovery",
      description:
        "On clarifie l'objectif business, le public cible et les contraintes avant de parler design ou code.",
    },
    {
      step: "02",
      title: "Audit & Analyse",
      description:
        "J'analyse l'existant (UX, données, concurrence) pour identifier ce qui bloque réellement la conversion.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Je conçois des interfaces qui résolvent le problème identifié, justifiées par la donnée et l'usage.",
    },
    {
      step: "04",
      title: "Développement",
      description:
        "Je construis un produit rapide, accessible et maintenable, avec des composants réutilisables.",
    },
    {
      step: "05",
      title: "Mesure & Itération",
      description:
        "On mesure l'impact réel après lancement et on itère sur ce que les données montrent.",
    },
  ],
  en: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We clarify the business goal, target audience and constraints before talking design or code.",
    },
    {
      step: "02",
      title: "Audit & Analysis",
      description:
        "I analyze what exists (UX, data, competitors) to identify what's actually blocking conversion.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "I design interfaces that solve the identified problem, backed by data and usage.",
    },
    {
      step: "04",
      title: "Development",
      description:
        "I build a fast, accessible and maintainable product, with reusable components.",
    },
    {
      step: "05",
      title: "Measure & Iterate",
      description:
        "We measure real impact after launch and iterate on what the data shows.",
    },
  ],
  ar: [
    {
      step: "01",
      title: "الاستكشاف",
      description: "نوضّح الهدف التجاري، الجمهور المستهدف، والقيود قبل الحديث عن التصميم أو الكود.",
    },
    {
      step: "02",
      title: "التدقيق والتحليل",
      description:
        "أحلّل الوضع الحالي (تجربة المستخدم، البيانات، المنافسين) لتحديد ما يعيق التحويل فعلاً.",
    },
    {
      step: "03",
      title: "التصميم",
      description: "أصمّم واجهات تحل المشكلة المحددة، مبنية على البيانات والاستخدام الفعلي.",
    },
    {
      step: "04",
      title: "التطوير",
      description: "أبني منتجًا سريعًا، متاحًا، وقابلاً للصيانة، بمكوّنات قابلة لإعادة الاستخدام.",
    },
    {
      step: "05",
      title: "القياس والتكرار",
      description: "نقيس الأثر الحقيقي بعد الإطلاق ونكرّر العملية بناءً على ما تُظهره البيانات.",
    },
  ],
};

export function getTestimonials(locale: Locale): Testimonial[] {
  return testimonialsByLocale[locale];
}

export function getProcessSteps(locale: Locale): ProcessStep[] {
  return processStepsByLocale[locale];
}
