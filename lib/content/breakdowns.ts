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
    {
      slug: "breakdown-barbershop",
      title: "Cuts Gents Salon — Analyse du site",
      category: "Salon de coiffure",
      uxScore: 6,
      summary:
        "Un salon qui affiche ses prix et raconte une vraie histoire de marque — mais une incohérence de nom et l'absence totale d'avis clients freinent la confiance.",
      strengths: [
        "Les tarifs sont affichés directement sur le site (45-210 AED) — un vrai gain de confiance pour un salon, alors que beaucoup cachent leurs prix",
        "La page « About » raconte une vraie histoire de marque (les fondateurs Ali et Emad, leur mission) plutôt qu'un simple paragraphe générique",
        "Plusieurs CTA « Book an Appointment » bien répartis sur la page, avec un lien WhatsApp direct",
      ],
      weaknesses: [
        "Le nom de marque utilisé partout sur le site (email, copyright) est « Cutsinuae », différent du nom de domaine « cutsuae.com » — cette incohérence peut faire hésiter un visiteur qui vérifie qu'il est sur le bon site",
        "Le tableau de prix ne couvre que 8 des 12 services mis en avant juste au-dessus (pas de prix pour le massage, la coloration, le threading ou les soins) — pour ces prestations, il faut appeler pour connaître le tarif",
        "Aucun avis client ni note affichée, alors que c'est justement ce qui rassure le plus avant de réserver dans un nouveau salon",
      ],
      recommendations: [
        "Aligner le nom de marque affiché (email, copyright) avec le nom de domaine pour éviter toute confusion",
        "Compléter le tableau de prix avec les services manquants, ou au moins indiquer une fourchette « à partir de »",
        "Ajouter les avis Google ou des témoignages clients directement sur la page d'accueil",
      ],
      siteUrl: "https://cutsuae.com",
      published: true,
    },
    {
      slug: "breakdown-construction",
      title: "Contrast (ContrastTKP) — Analyse du site",
      category: "Construction",
      uxScore: 6,
      summary:
        "Un site B2B qui inspire confiance grâce à des références clients solides et une FAQ bien pensée — mais un canal de contact cassé et un portfolio trop peu détaillé freinent la conversion.",
      strengths: [
        "Une liste de clients très forte pour la crédibilité (Emaar, Nakheel, Meraas, Yas Island...) qui rassure immédiatement un acheteur B2B ou un particulier haut de gamme",
        "Une FAQ qui répond directement aux vraies objections avant contact (délais, zones couvertes, garantie, gestion des coûts)",
        "Un discours de marque travaillé (« Contrast isn't just our name, it's our language ») qui différencie l'entreprise d'un simple prestataire BTP générique",
      ],
      weaknesses: [
        "L'adresse email affichée en pied de page et dans la section contact s'affiche littéralement comme « [email protected] » au lieu de la vraie adresse — un canal de contact entier est cassé pour le visiteur",
        "Chaque service utilise le même lien « Learn More » sans texte différenciant — un visiteur qui scanne rapidement la page ne peut pas distinguer les liens entre eux",
        "La section « Featured Projects » ne montre que des noms de projets (SALT Cairo, Sahel - Villa 1...) sans description, chiffres ou avant/après, alors que c'est justement la preuve qui devrait convaincre après 35 ans d'expérience",
      ],
      recommendations: [
        "Corriger l'affichage de l'adresse email (probablement un plugin d'obfuscation mal configuré) pour rétablir ce canal de contact",
        "Donner un texte spécifique à chaque lien « Learn More » (ex : « Découvrir les Turnkey Projects »)",
        "Transformer chaque projet en mini étude de cas avec quelques lignes de contexte et des visuels avant/après",
      ],
      siteUrl: "https://contrasttkp.com",
      published: true,
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
    {
      slug: "breakdown-barbershop",
      title: "Cuts Gents Salon — Website Review",
      category: "Barbershop",
      uxScore: 6,
      summary:
        "A salon that shows its prices and tells a real brand story — but a name mismatch and the total absence of reviews hold back trust.",
      strengths: [
        "Prices are shown directly on the site (AED 45-210) — a real trust signal for a salon, when many hide their pricing",
        "The About section tells a real brand story (founders Ali and Emad, their mission) instead of a generic paragraph",
        "Multiple well-placed \"Book an Appointment\" CTAs across the page, with a direct WhatsApp link",
      ],
      weaknesses: [
        "The brand name used everywhere on the site (email, copyright) is \"Cutsinuae\", different from the domain name \"cutsuae.com\" — this mismatch can make a visitor double-check they're on the right site",
        "The pricing table only covers 8 of the 12 services promoted just above it (no price for massage, coloring, threading or treatments) — for those, you have to call to find out",
        "No customer reviews or rating shown anywhere, when that's exactly what reassures people most before booking at a new salon",
      ],
      recommendations: [
        "Align the displayed brand name (email, copyright) with the domain name to avoid confusion",
        "Fill in the missing services in the pricing table, or at least show a \"starting from\" range",
        "Add Google reviews or client testimonials directly on the homepage",
      ],
      siteUrl: "https://cutsuae.com",
      published: true,
    },
    {
      slug: "breakdown-construction",
      title: "Contrast (ContrastTKP) — Website Review",
      category: "Construction",
      uxScore: 6,
      summary:
        "A B2B site that builds trust through strong client references and a well-thought-out FAQ — but a broken contact channel and a thin portfolio hold back conversion.",
      strengths: [
        "A very strong client list for credibility (Emaar, Nakheel, Meraas, Yas Island...) that immediately reassures a B2B buyer or a high-end individual client",
        "An FAQ that directly answers real objections before contact (timelines, coverage areas, warranty, cost management)",
        "A crafted brand voice (\"Contrast isn't just our name, it's our language\") that sets the company apart from a generic construction contractor",
      ],
      weaknesses: [
        "The email address shown in the footer and contact section literally displays as \"[email protected]\" instead of the real address — an entire contact channel is broken for visitors",
        "Every service uses the same \"Learn More\" link text with nothing to differentiate it — a visitor scanning the page quickly can't tell the links apart",
        "The \"Featured Projects\" section only shows project names (SALT Cairo, Sahel - Villa 1...) with no description, numbers or before/after, when that's exactly the proof that should close the deal after 35 years in business",
      ],
      recommendations: [
        "Fix the broken email display (likely a misconfigured obfuscation plugin) to restore that contact channel",
        "Give each \"Learn More\" link unique, specific text (e.g. \"Explore Turnkey Projects\")",
        "Turn each project into a mini case study with a few lines of context and before/after visuals",
      ],
      siteUrl: "https://contrasttkp.com",
      published: true,
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
    {
      slug: "breakdown-barbershop",
      title: "Cuts Gents Salon — مراجعة الموقع",
      category: "صالون حلاقة",
      uxScore: 6,
      summary:
        "صالون يعرض أسعاره ويروي قصة علامة تجارية حقيقية — لكن تناقض الاسم وغياب تقييمات العملاء كليًا يُضعفان الثقة.",
      strengths: [
        "الأسعار معروضة مباشرة على الموقع (45-210 درهم) — عامل ثقة حقيقي لصالون، بينما تُخفي مواقع كثيرة أسعارها",
        "قسم 'من نحن' يروي قصة علامة تجارية حقيقية (المؤسسان علي وعماد ورسالتهما) بدلاً من فقرة عامة",
        "عدة أزرار 'احجز موعدك' موزعة بشكل جيد على الصفحة، مع رابط واتساب مباشر",
      ],
      weaknesses: [
        "اسم العلامة التجارية المستخدم في كل مكان بالموقع (البريد الإلكتروني، حقوق النشر) هو 'Cutsinuae'، وهو مختلف عن اسم النطاق 'cutsuae.com' — هذا التناقض قد يجعل الزائر يتردد في التأكد من أنه في الموقع الصحيح",
        "جدول الأسعار يغطي فقط 8 من أصل 12 خدمة مُبرزة أعلاه (لا يوجد سعر للمساج أو صبغ الشعر أو النمص أو العلاجات) — لمعرفة أسعارها يجب الاتصال",
        "لا توجد أي تقييمات أو آراء عملاء ظاهرة، رغم أنها بالضبط ما يطمئن الزوار أكثر قبل حجز موعد في صالون جديد",
      ],
      recommendations: [
        "توحيد اسم العلامة التجارية الظاهر (البريد الإلكتروني، حقوق النشر) مع اسم النطاق لتفادي أي لبس",
        "استكمال جدول الأسعار بالخدمات الناقصة، أو على الأقل ذكر سعر تقريبي 'ابتداءً من'",
        "إضافة تقييمات جوجل أو آراء العملاء مباشرة على الصفحة الرئيسية",
      ],
      siteUrl: "https://cutsuae.com",
      published: true,
    },
    {
      slug: "breakdown-construction",
      title: "Contrast (ContrastTKP) — مراجعة الموقع",
      category: "الإنشاءات",
      uxScore: 6,
      summary:
        "موقع B2B يبني الثقة بفضل مراجع عملاء قوية وأسئلة شائعة مدروسة جيدًا — لكن قناة تواصل معطلة وملف أعمال غير مفصّل بما يكفي يعيقان التحويل.",
      strengths: [
        "قائمة عملاء قوية جدًا تمنح مصداقية فورية (إعمار، نخيل، مراس، ياس آيلاند...) وتطمئن المشتري سواء كان شركة أو فردًا يبحث عن مستوى راقٍ",
        "قسم أسئلة شائعة يجيب مباشرة عن التحفظات الحقيقية قبل التواصل (المدة، المناطق المخدومة، الضمان، إدارة التكاليف)",
        "خطاب علامة تجارية مدروس ('Contrast ليس مجرد اسمنا، إنه لغتنا') يميز الشركة عن مقاول إنشاءات عادي",
      ],
      weaknesses: [
        "عنوان البريد الإلكتروني الظاهر في تذييل الصفحة وقسم التواصل يظهر حرفيًا كـ '[email protected]' بدلاً من العنوان الحقيقي — قناة تواصل كاملة معطلة أمام الزائر",
        "تستخدم كل خدمة نفس رابط 'Learn More' دون أي نص مميز — الزائر الذي يتصفح الصفحة بسرعة لا يمكنه التفريق بين الروابط",
        "قسم 'المشاريع المميزة' يعرض فقط أسماء المشاريع (SALT Cairo، Sahel - Villa 1...) دون وصف أو أرقام أو صور قبل/بعد، رغم أن هذا بالضبط ما يجب أن يقنع العميل بعد 35 عامًا من الخبرة",
      ],
      recommendations: [
        "إصلاح عرض البريد الإلكتروني (على الأرجح مكوّن إضافي لإخفاء البريد معطّل) لاستعادة قناة التواصل هذه",
        "إعطاء كل رابط 'Learn More' نصًا مميزًا وخاصًا به (مثال: 'اكتشف مشاريع Turnkey')",
        "تحويل كل مشروع إلى دراسة حالة مصغّرة مع سطرين من السياق وصور قبل/بعد",
      ],
      siteUrl: "https://contrasttkp.com",
      published: true,
    },
  ],
};

export function getBreakdowns(locale: Locale): Breakdown[] {
  return breakdownsByLocale[locale].filter((item) => item.published !== false);
}
