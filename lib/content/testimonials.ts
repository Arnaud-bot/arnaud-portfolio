import type { Testimonial, ProcessStep } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

const testimonialsByLocale: Record<Locale, Testimonial[]> = {
  fr: [
    {
      quote:
        "Travailler avec Arnaud a été une expérience exceptionnelle. Dès le premier jour, il a fait preuve d'un professionnalisme, d'une créativité et d'une expertise technique remarquables dans le développement de notre site pour EasyFitness. Son souci du détail, sa réactivité et sa capacité à transformer notre vision en un site moderne et performant ont dépassé nos attentes. Je recommande vivement Arnaud à quiconque recherche un développeur web fiable et talentueux, sincèrement investi dans la qualité de son travail.",
      name: "Ali Chaikhi",
      role: "COO, EasyFitness UAE",
    },
    {
      quote: "[Témoignage à recueillir auprès d'un client réel.]",
      name: "[Nom du client]",
      role: "[Poste, entreprise]",
      published: false,
    },
    {
      quote: "[Témoignage à recueillir auprès d'un client réel.]",
      name: "[Nom du client]",
      role: "[Poste, entreprise]",
      published: false,
    },
  ],
  en: [
    {
      quote:
        "Working with Arnaud has been an outstanding experience. From day one, he has demonstrated exceptional professionalism, creativity, and technical expertise in developing our website for EasyFitness. His attention to detail, responsiveness, and ability to transform our vision into a modern, high-performing website have exceeded our expectations. I highly recommend Arnaud to anyone looking for a reliable and talented web developer who genuinely cares about delivering quality results.",
      name: "Ali Chaikhi",
      role: "COO, EasyFitness UAE",
    },
    {
      quote: "[Testimonial to collect from a real client.]",
      name: "[Client name]",
      role: "[Role, company]",
      published: false,
    },
    {
      quote: "[Testimonial to collect from a real client.]",
      name: "[Client name]",
      role: "[Role, company]",
      published: false,
    },
  ],
  ar: [
    {
      quote:
        "كان العمل مع أرنو تجربة استثنائية. منذ اليوم الأول، أظهر احترافية وإبداعًا وخبرة تقنية استثنائية في تطوير موقعنا لـ EasyFitness. اهتمامه بالتفاصيل، واستجابته السريعة، وقدرته على تحويل رؤيتنا إلى موقع حديث وعالي الأداء فاقت توقعاتنا. أوصي بشدة بأرنو لأي شخص يبحث عن مطوّر ويب موثوق وموهوب يهتم فعلاً بتقديم نتائج عالية الجودة.",
      name: "Ali Chaikhi",
      role: "COO، EasyFitness UAE",
    },
    {
      quote: "[شهادة سيتم جمعها من عميل حقيقي.]",
      name: "[اسم العميل]",
      role: "[المنصب، الشركة]",
      published: false,
    },
    {
      quote: "[شهادة سيتم جمعها من عميل حقيقي.]",
      name: "[اسم العميل]",
      role: "[المنصب، الشركة]",
      published: false,
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
  return testimonialsByLocale[locale].filter((t) => t.published !== false);
}

export function getProcessSteps(locale: Locale): ProcessStep[] {
  return processStepsByLocale[locale];
}
