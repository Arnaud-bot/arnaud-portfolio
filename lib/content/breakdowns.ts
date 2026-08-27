import type { Breakdown } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

/**
 * Restaurant, healthcare et SaaS restent en placeholder (published: false)
 * en attendant de vraies analyses.
 */
const breakdownsByLocale: Record<Locale, Breakdown[]> = {
  fr: [
    {
      slug: "breakdown-gym",
      title: "EasyFitness UAE — Analyse du site",
      category: "Gym",
      uxScore: 7,
      summary:
        "Un site au design premium qui met déjà en avant l'offre et les avis clients — mais avec un vrai potentiel de conversion encore sous-exploité au-delà du premier écran.",
      strengths: [
        "Une offre promotionnelle claire et visible dès l'arrivée sur le site (prix barré, sentiment d'urgence)",
        "Une galerie photo de qualité qui donne une vraie preuve visuelle de la salle",
        "Les avis Google (4.8★, 355 avis) sont affichés directement sur la page — la preuve sociale a clairement été renforcée",
      ],
      weaknesses: [
        "Plusieurs sections restent pensées desktop-first, ce qui complique le suivi de l'expérience sur mobile",
        "Après l'offre promo, le parcours vers l'adhésion manque de guidage : il faut cliquer sur « Sign Up Now » sans voir clairement ce qui est inclus dans le prix",
        "La page enchaîne des sections indépendantes sans fil narratif qui accompagne le visiteur de la découverte à l'adhésion",
      ],
      recommendations: [
        "Ajouter une section « Ce qui est inclus » juste après l'offre pour justifier le prix avant le CTA",
        "Repenser les sections clés en mobile-first plutôt qu'en adaptation du desktop",
        "Construire un fil narratif unique sur la page d'accueil, du premier écran jusqu'à l'adhésion",
      ],
      siteUrl: "https://easyfitness-uae.com",
      published: true,
    },
    {
      slug: "breakdown-restaurant",
      title: "[Nom du restaurant] — Website Review",
      category: "Restaurant",
      uxScore: 5,
      summary: "[À compléter.]",
      strengths: ["[Point fort 1]"],
      weaknesses: ["[Point faible 1]", "[Point faible 2]"],
      recommendations: ["[Recommandation 1]", "[Recommandation 2]"],
      published: false,
    },
    {
      slug: "breakdown-healthcare",
      title: "[Nom de la clinique] — Website Review",
      category: "Healthcare",
      uxScore: 7,
      summary: "[À compléter.]",
      strengths: ["[Point fort 1]", "[Point fort 2]"],
      weaknesses: ["[Point faible 1]"],
      recommendations: ["[Recommandation 1]"],
      published: false,
    },
    {
      slug: "breakdown-staffing",
      title: "Skill Set — Analyse du site",
      category: "Recrutement",
      uxScore: 6,
      summary:
        "Un site B2B bien structuré par type de service, mais une incohérence de contact et un positionnement flou dès le premier écran qui peuvent freiner la confiance.",
      strengths: [
        "Les services sont clairement catégorisés (nettoyage, usine, construction, hôtellerie) avec un visuel dédié pour chacun",
        "La section « Pourquoi nous choisir » est complète et rassurante pour un acheteur B2B",
        "Un blog actif avec du contenu récent et pertinent pour le secteur du recrutement",
      ],
      weaknesses: [
        "Le numéro affiché en pied de page utilise l'indicatif +977 (Népal) alors que l'entreprise est basée à Dubaï (Business Bay) et cible le marché des Émirats — une incohérence qui peut faire douter un visiteur pressé",
        "Le premier écran met en avant un témoignage individuel (« Home Renovation Specialist »), ce qui brouille le positionnement B2B de fourniture de main-d'œuvre à des entreprises",
        "Les articles du blog affichent tous la même date de publication, ce qui peut donner une impression de contenu généré en une seule fois plutôt que d'une activité continue",
      ],
      recommendations: [
        "Vérifier et corriger l'indicatif téléphonique affiché en pied de page",
        "Clarifier le positionnement B2B dès le premier écran plutôt qu'un témoignage individuel",
        "Étaler les dates de publication du blog pour renforcer la perception d'une activité éditoriale continue",
      ],
      siteUrl: "https://skillsetservice.com",
      published: true,
    },
    {
      slug: "breakdown-saas",
      title: "[Nom du SaaS] — Website Review",
      category: "SaaS",
      uxScore: 8,
      summary: "[À compléter.]",
      strengths: ["[Point fort 1]", "[Point fort 2]"],
      weaknesses: ["[Point faible 1]"],
      recommendations: ["[Recommandation 1]"],
      published: false,
    },
  ],
  en: [
    {
      slug: "breakdown-gym",
      title: "EasyFitness UAE — Website Review",
      category: "Gym",
      uxScore: 7,
      summary:
        "A premium-looking site that already leads with its offer and reviews — but with real conversion potential still untapped past the first screen.",
      strengths: [
        "A clear promotional offer front and center as soon as you land (crossed-out price, sense of urgency)",
        "A quality photo gallery that gives real visual proof of the gym",
        "Google reviews (4.8★, 355 reviews) shown directly on the page — social proof has clearly been strengthened",
      ],
      weaknesses: [
        "Several sections still feel designed desktop-first, which makes the mobile experience harder to follow",
        "After the promo offer, the path to membership lacks guidance: visitors have to click \"Sign Up Now\" without clearly seeing what's included in the price",
        "The homepage strings together independent sections without a single narrative thread guiding visitors from discovery to membership",
      ],
      recommendations: [
        "Add a \"What's included\" section right after the offer to justify the price before the CTA",
        "Rethink key sections mobile-first instead of adapting from desktop",
        "Build a single narrative thread on the homepage, from the first screen to membership",
      ],
      siteUrl: "https://easyfitness-uae.com",
      published: true,
    },
    {
      slug: "breakdown-restaurant",
      title: "[Restaurant name] — Website Review",
      category: "Restaurant",
      uxScore: 5,
      summary: "[To complete.]",
      strengths: ["[Strength 1]"],
      weaknesses: ["[Weakness 1]", "[Weakness 2]"],
      recommendations: ["[Recommendation 1]", "[Recommendation 2]"],
      published: false,
    },
    {
      slug: "breakdown-healthcare",
      title: "[Clinic name] — Website Review",
      category: "Healthcare",
      uxScore: 7,
      summary: "[To complete.]",
      strengths: ["[Strength 1]", "[Strength 2]"],
      weaknesses: ["[Weakness 1]"],
      recommendations: ["[Recommendation 1]"],
      published: false,
    },
    {
      slug: "breakdown-staffing",
      title: "Skill Set — Website Review",
      category: "Staffing",
      uxScore: 6,
      summary:
        "A well-structured B2B site by service type, but a contact inconsistency and unclear positioning on the first screen that can undermine trust.",
      strengths: [
        "Services are clearly categorized (cleaning, factory, construction, hospitality) with a dedicated visual for each",
        "The \"Why Choose Us\" section is thorough and reassuring for a B2B buyer",
        "An active blog with recent, industry-relevant content",
      ],
      weaknesses: [
        "The phone number shown in the footer uses the +977 (Nepal) country code, while the company is based in Dubai (Business Bay) and targets the UAE market — an inconsistency that can make a hurried visitor hesitate",
        "The first screen leads with an individual testimonial (\"Home Renovation Specialist\"), which blurs the B2B positioning of supplying manpower to companies",
        "Blog posts all show the same publish date, which can read as batch-generated content rather than ongoing activity",
      ],
      recommendations: [
        "Verify and correct the phone country code shown in the footer",
        "Clarify the B2B positioning on the first screen instead of an individual testimonial",
        "Stagger blog publish dates to reinforce a sense of ongoing editorial activity",
      ],
      siteUrl: "https://skillsetservice.com",
      published: true,
    },
    {
      slug: "breakdown-saas",
      title: "[SaaS name] — Website Review",
      category: "SaaS",
      uxScore: 8,
      summary: "[To complete.]",
      strengths: ["[Strength 1]", "[Strength 2]"],
      weaknesses: ["[Weakness 1]"],
      recommendations: ["[Recommendation 1]"],
      published: false,
    },
  ],
  ar: [
    {
      slug: "breakdown-gym",
      title: "إيزي فيتنس الإمارات — مراجعة الموقع",
      category: "صالة رياضية",
      uxScore: 7,
      summary:
        "موقع ذو تصميم مميز يبرز العرض وآراء العملاء منذ الوهلة الأولى — لكن إمكانات التحويل الحقيقية لا تزال غير مستغلة بالكامل بعد الشاشة الأولى.",
      strengths: [
        "عرض ترويجي واضح وبارز فور الدخول إلى الموقع (سعر مشطوب، إحساس بالإلحاح)",
        "معرض صور عالي الجودة يقدّم دليلاً بصرياً حقيقياً على الصالة",
        "تقييمات جوجل (4.8 نجوم، 355 تقييمًا) معروضة مباشرة على الصفحة — تم تعزيز الدليل الاجتماعي بوضوح",
      ],
      weaknesses: [
        "لا تزال عدة أقسام مصممة أولاً لسطح المكتب، ما يُصعّب متابعة تجربة الجوال",
        "بعد العرض الترويجي، يفتقر المسار نحو الاشتراك إلى التوجيه: يضطر الزائر للنقر على 'Sign Up Now' دون أن يرى بوضوح ما يشمله السعر",
        "تتوالى أقسام الصفحة الرئيسية بشكل مستقل دون خط سردي واحد يرافق الزائر من الاكتشاف إلى الاشتراك",
      ],
      recommendations: [
        "إضافة قسم 'ما الذي يشمله الاشتراك' مباشرة بعد العرض لتبرير السعر قبل زر الدعوة للعمل",
        "إعادة تصميم الأقسام الرئيسية بمنطق الجوال أولاً بدلاً من تكييفها من سطح المكتب",
        "بناء خط سردي واحد للصفحة الرئيسية، من الشاشة الأولى وحتى الاشتراك",
      ],
      siteUrl: "https://easyfitness-uae.com",
      published: true,
    },
    {
      slug: "breakdown-restaurant",
      title: "[اسم المطعم] — مراجعة الموقع",
      category: "مطعم",
      uxScore: 5,
      summary: "[أكمل هذا القسم.]",
      strengths: ["[نقطة قوة 1]"],
      weaknesses: ["[نقطة ضعف 1]", "[نقطة ضعف 2]"],
      recommendations: ["[توصية 1]", "[توصية 2]"],
      published: false,
    },
    {
      slug: "breakdown-healthcare",
      title: "[اسم العيادة] — مراجعة الموقع",
      category: "الرعاية الصحية",
      uxScore: 7,
      summary: "[أكمل هذا القسم.]",
      strengths: ["[نقطة قوة 1]", "[نقطة قوة 2]"],
      weaknesses: ["[نقطة ضعف 1]"],
      recommendations: ["[توصية 1]"],
      published: false,
    },
    {
      slug: "breakdown-staffing",
      title: "سكيل سِت — مراجعة الموقع",
      category: "التوظيف",
      uxScore: 6,
      summary:
        "موقع B2B منظم بوضوح حسب نوع الخدمة، لكن تناقضًا في رقم التواصل وموقعًا غير واضح في الشاشة الأولى قد يُضعفان الثقة.",
      strengths: [
        "الخدمات مصنّفة بوضوح (تنظيف، مصانع، إنشاءات، ضيافة) مع صورة مخصصة لكل منها",
        "قسم 'لماذا تختارنا' شامل ومطمئن لمشتري الأعمال",
        "مدونة نشطة بمحتوى حديث وذي صلة بقطاع التوظيف",
      ],
      weaknesses: [
        "رقم الهاتف الظاهر في تذييل الصفحة يحمل رمز الدولة +977 (نيبال)، بينما الشركة مقرها دبي (بزنس باي) وتستهدف سوق الإمارات — تناقض قد يثير شك الزائر المستعجل",
        "تبرز الشاشة الأولى شهادة فردية ('أخصائي تجديد منازل')، ما يُشوّش على موقع الشركة كمزوّد قوى عاملة للمؤسسات",
        "تحمل جميع مقالات المدونة تاريخ نشر واحد، ما قد يُوحي بمحتوى تم إنشاؤه دفعة واحدة بدلاً من نشاط مستمر",
      ],
      recommendations: [
        "التحقق من رمز الدولة في رقم الهاتف بتذييل الصفحة وتصحيحه",
        "توضيح موقع الشركة كمزوّد B2B منذ الشاشة الأولى بدلاً من شهادة فردية",
        "توزيع تواريخ نشر المدونة لتعزيز الانطباع بنشاط تحريري مستمر",
      ],
      siteUrl: "https://skillsetservice.com",
      published: true,
    },
    {
      slug: "breakdown-saas",
      title: "[اسم منتج SaaS] — مراجعة الموقع",
      category: "SaaS",
      uxScore: 8,
      summary: "[أكمل هذا القسم.]",
      strengths: ["[نقطة قوة 1]", "[نقطة قوة 2]"],
      weaknesses: ["[نقطة ضعف 1]"],
      recommendations: ["[توصية 1]"],
      published: false,
    },
  ],
};

export function getBreakdowns(locale: Locale): Breakdown[] {
  return breakdownsByLocale[locale].filter((item) => item.published !== false);
}
