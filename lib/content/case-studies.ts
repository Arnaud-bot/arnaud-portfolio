import type { CaseStudy } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  fr: [
    {
      slug: "easyfitness-uae",
      title: "EasyFitness UAE",
      tagline:
        "Transformer un site de fitness en une expérience digitale orientée conversion.",
      tags: ["Audit UX", "Analyse UI", "Stratégie Produit", "Optimisation de la Conversion"],
      client: "Audit indépendant — non commandité",
      category: "Audit UX · Refonte UI",
      thumbnail: "/case-studies/easyfitness.jpg",
      summary:
        "Un audit UX/UI indépendant du site EasyFitness UAE, révélant des points de friction et proposant une stratégie de refonte pour augmenter l'engagement et les conversions.",
      overview:
        "EasyFitness UAE est une entreprise de fitness basée aux Émirats arabes unis. J'ai mené un audit UX/UI indépendant pour évaluer dans quelle mesure le site communique sa valeur, guide les utilisateurs dans leur parcours et convertit les visiteurs en membres — en allant au-delà de l'esthétique pour analyser comment les décisions de design influencent la confiance, l'engagement et la performance business.",
      challenge:
        "Si le site présentait une identité visuelle moderne, plusieurs axes d'amélioration existaient pour l'expérience utilisateur globale : certaines sections manquaient de hiérarchie, l'expérience mobile pouvait être plus cohérente, et le storytelling ne communiquait pas pleinement pourquoi choisir EasyFitness plutôt qu'un concurrent. L'objectif était d'identifier les points de friction et de proposer des améliorations concrètes pour augmenter l'engagement et les conversions.",
      approach: {
        intro: "J'ai analysé le site à la fois du point de vue utilisateur et business. L'audit a couvert :",
        points: ["Architecture de l'information", "Hiérarchie visuelle", "Expérience mobile", "Navigation", "Placement des appels à l'action", "Parcours utilisateur", "Cohérence de marque", "Opportunités de conversion"],
      },
      keyInsights: [
        "Identité visuelle propre et contenu pertinent dans l'ensemble",
        "La proposition de valeur devait être renforcée dès le premier écran",
        "La hiérarchie des CTA devait être améliorée",
        "L'expérience mobile nécessitait des ajustements",
        "Le storytelling devait être plus engageant",
        "La priorisation du contenu devait être améliorée",
        "Le parcours d'adhésion devait être clarifié",
      ],
      solution: {
        intro: "La stratégie de refonte s'est concentrée sur un parcours client plus fluide. Les recommandations incluaient :",
        points: ["Repenser la section Hero", "Simplifier la navigation", "Mettre en avant les avantages de l'adhésion", "Améliorer les mises en page mobile", "Créer une hiérarchie visuelle plus forte", "Introduire des parcours de conversion plus clairs"],
      },
      outcome: {
        intro: "Les améliorations proposées visent à :",
        points: ["Augmenter l'engagement des utilisateurs", "Renforcer la confiance", "Réduire le taux de rebond", "Augmenter les demandes d'adhésion", "Créer une perception de marque plus forte"],
      },
      lessonsLearned:
        "Ce projet a renforcé ma conviction que les sites efficaces ne se construisent pas autour de pages, mais autour de parcours utilisateurs. Un bon design n'est pas une question de décoration — il s'agit d'aider les utilisateurs à atteindre leurs objectifs tout en soutenant ceux de l'entreprise.",
      technologies: ["Figma", "Recherche UX", "Analyse Produit", "Wireframing", "Architecture de l'information"],
    },
    {
      slug: "konekta",
      title: "Konekta",
      tagline:
        "Concevoir un marketplace qui connecte entreprises et clients africains à travers de meilleures expériences digitales.",
      tags: ["Product Design", "Flutter", "Marketplace", "Stratégie UX"],
      client: "Projet personnel",
      category: "Product Design · Flutter",
      thumbnail: "/case-studies/konekta.png",
      summary:
        "Un marketplace conçu de zéro pour connecter entreprises et clients africains à travers une expérience de commerce digital simple, scalable et fiable.",
      overview:
        "Konekta est une plateforme marketplace conçue pour simplifier le commerce en Afrique en connectant entreprises locales, fournisseurs et clients au sein d'un même écosystème digital, avec l'ambition de résoudre de vrais défis de marché tout en offrant une expérience d'achat moderne et intuitive.",
      challenge:
        "De nombreuses petites entreprises peinent à accéder au commerce digital car les solutions existantes sont soit trop complexes, soit mal adaptées aux réalités locales, soit dépourvues d'une expérience utilisateur fluide. Le défi était de concevoir une plateforme simple pour les utilisateurs tout en restant scalable pour la croissance future.",
      approach: {
        intro: "Dès le départ, j'ai adopté une approche produit avant tout. Le projet a impliqué :",
        points: ["Recherche produit", "Design UX", "Architecture de l'information", "Stratégie marketplace", "Approche mobile-first", "Parcours utilisateurs", "Priorisation des fonctionnalités"],
      },
      keyInsights: [
        "Architecture marketplace flexible",
        "Catégories de produits dynamiques",
        "Gestion des vendeurs",
        "Expérience de paiement modernisée",
        "Onboarding optimisé",
        "Panneau d'administration scalable",
      ],
      solution: {
        intro: "La plateforme a été conçue pour offrir :",
        points: ["Une découverte de produits simple", "Une navigation intuitive", "Un processus d'achat rapide", "Une gestion de marketplace scalable", "Une expérience mobile moderne"],
      },
      outcome: {
        intro: "Konekta vise à :",
        points: ["Simplifier les achats en ligne", "Soutenir les entreprises locales", "Améliorer l'expérience client", "Renforcer la confiance dans le commerce digital", "Créer des opportunités pour les entrepreneurs africains"],
      },
      lessonsLearned:
        "Construire un marketplace va bien au-delà d'écrire du code — cela demande d'équilibrer besoins utilisateurs, objectifs business et scalabilité technique dès le premier jour.",
      technologies: ["Flutter", "Firebase", "REST APIs", "Stratégie Produit", "Design UX", "Git"],
    },
    {
      slug: "igc-video-translation",
      title: "IGC",
      tagline:
        "Automatiser la traduction vidéo multilingue pour une plateforme de formation en ligne au trading, afin de l'aider à s'étendre vers de nouveaux marchés internationaux.",
      tags: ["Automatisation", "Workflow IA", "Localisation"],
      client: "Contribution technique — automatisation",
      category: "Automatisation · Localisation",
      thumbnail: "/case-studies/igc.jpg",
      summary:
        "Un pipeline de traduction vidéo automatisé pour une plateforme de formation en ligne au trading, l'aidant à s'étendre vers de nouveaux marchés internationaux multilingues.",
      overview:
        "IGC est une plateforme de formation en ligne dédiée au trading. Mon rôle a été d'automatiser la traduction de leurs vidéos de formation en plusieurs langues, pour les aider à étendre leur marché vers différents pays et zones linguistiques.",
      challenge:
        "Le contenu de formation de la plateforme ne touchait qu'une seule audience linguistique, ce qui limitait son expansion à l'international. Traduire les vidéos manuellement pour chaque nouveau marché aurait été lent et coûteux. L'objectif était de construire un workflow automatisé capable de traduire le contenu vidéo en plusieurs langues rapidement, de façon cohérente et à grande échelle.",
      approach: {
        intro:
          "Je me suis concentré sur l'automatisation du pipeline de traduction de bout en bout, plutôt que sur un travail de traduction manuel au cas par cas. Cela impliquait de concevoir un processus reproductible que l'équipe pouvait exécuter pour chaque nouvelle vidéo et chaque nouvelle langue cible :",
        points: ["Conception d'un workflow de traduction automatisé", "Intégration de la traduction vidéo assistée par IA", "Mise en place d'un pipeline multilingue", "Points de contrôle qualité", "Documentation du processus pour l'équipe"],
      },
      keyInsights: [
        "La traduction manuelle ne pouvait pas s'adapter à plusieurs marchés à la fois",
        "Un pipeline automatisé pouvait gérer de nouvelles langues sans travail manuel supplémentaire par vidéo",
        "Des contrôles qualité restaient nécessaires pour détecter les erreurs de traduction de l'IA",
        "La cohérence entre les langues comptait autant que la vitesse",
      ],
      solution: {
        intro:
          "J'ai construit un workflow automatisé qui prend une vidéo source et produit des versions traduites dans plusieurs langues avec une intervention manuelle minimale, en combinant traduction assistée par IA et contrôles qualité structurés.",
        points: ["Traduction assistée par IA intégrée au pipeline vidéo", "Traitement automatisé pour plusieurs langues cibles", "Étape de revue structurée pour détecter les erreurs avant publication", "Processus réutilisable pour les futures vidéos et langues"],
      },
      outcome: {
        intro: "L'automatisation a permis à IGC de :",
        points: ["Traduire les vidéos de formation en plusieurs langues sans retravail manuel pour chacune", "Réduire le temps et le coût de localisation du contenu", "Étendre sa portée vers de nouveaux marchés internationaux non anglophones", "Faire évoluer la localisation de contenu au rythme de la croissance de la plateforme"],
      },
      lessonsLearned:
        "Ce projet m'a montré que la vraie valeur de l'IA n'est pas seulement la qualité de traduction — c'est d'éliminer le travail manuel répétitif pour permettre à une équipe de s'étendre vers de nouveaux marchés sans devoir recruter davantage. Construire un workflow reproductible et fiable comptait autant que la traduction elle-même.",
      technologies: ["Traduction assistée par IA", "Automatisation de workflow", "Localisation", "Assurance qualité"],
    },
  ],
  en: [
    {
      slug: "easyfitness-uae",
      title: "EasyFitness UAE",
      tagline: "Transforming a fitness website into a conversion-focused digital experience.",
      tags: ["UX Audit", "UI Analysis", "Product Strategy", "Conversion Optimization"],
      client: "Independent audit — not a commissioned engagement",
      category: "UX Audit · UI Redesign",
      thumbnail: "/case-studies/easyfitness.jpg",
      summary:
        "An independent UX/UI audit of the EasyFitness UAE website, uncovering friction points and proposing a redesign strategy to boost engagement and conversions.",
      overview:
        "EasyFitness UAE is a fitness company operating in the UAE. I conducted an independent UX/UI audit to evaluate how effectively the website communicates its value, guides users through their journey, and converts visitors into members — looking beyond aesthetics to how design decisions influence trust, engagement, and business performance.",
      challenge:
        "While the website presented a modern visual identity, several opportunities existed to improve the overall user experience: some sections lacked hierarchy, the mobile experience could be more consistent, and the storytelling didn't fully communicate why users should choose EasyFitness over competitors. The objective was to identify friction points and propose practical improvements that could increase engagement and conversions.",
      approach: {
        intro: "I analyzed the website from both a user and business perspective. The review covered:",
        points: ["Information Architecture", "Visual Hierarchy", "Mobile Experience", "Navigation", "Call-to-Action Placement", "User Journey", "Brand Consistency", "Conversion Opportunities"],
      },
      keyInsights: [
        "Clean visual identity and relevant content overall",
        "Value proposition needed to be stronger above the fold",
        "CTA hierarchy needed improvement",
        "Mobile responsiveness needed refinement",
        "Storytelling needed to be more engaging",
        "Content prioritization needed improvement",
        "Membership journey needed to be clearer",
      ],
      solution: {
        intro: "The redesign strategy focused on creating a smoother customer journey. Recommendations included:",
        points: ["Redesigning the Hero section", "Simplifying navigation", "Highlighting membership benefits", "Improving mobile layouts", "Creating stronger visual hierarchy", "Introducing clearer conversion paths"],
      },
      outcome: {
        intro: "The proposed improvements aim to:",
        points: ["Increase user engagement", "Improve trust", "Reduce bounce rate", "Increase membership inquiries", "Create a stronger brand perception"],
      },
      lessonsLearned:
        "This project reinforced my belief that effective websites aren't built around pages, but around user journeys. Good design isn't about decoration — it's about helping users reach their goals while supporting business objectives.",
      technologies: ["Figma", "UX Research", "Product Analysis", "Wireframing", "Information Architecture"],
    },
    {
      slug: "konekta",
      title: "Konekta",
      tagline:
        "Designing a marketplace that connects African businesses and customers through better digital experiences.",
      tags: ["Product Design", "Flutter", "Marketplace", "UX Strategy"],
      client: "Personal project",
      category: "Product Design · Flutter",
      thumbnail: "/case-studies/konekta.png",
      summary:
        "A marketplace platform built from the ground up to connect African businesses and customers through a simple, scalable and trustworthy digital commerce experience.",
      overview:
        "Konekta is a marketplace platform designed to simplify commerce in Africa by connecting local businesses, suppliers and customers within a single digital ecosystem, conceived with the ambition of solving real market challenges while delivering a modern and intuitive shopping experience.",
      challenge:
        "Many small businesses struggle to access digital commerce because existing solutions are either too complex, poorly adapted to local realities, or lack a seamless user experience. The challenge was to design a platform that feels simple for users while remaining scalable for future growth.",
      approach: {
        intro: "From the beginning, I adopted a product-first mindset. The project involved:",
        points: ["Product Research", "UX Design", "Information Architecture", "Marketplace Strategy", "Mobile-first Thinking", "User Flows", "Feature Prioritization"],
      },
      keyInsights: [
        "Flexible marketplace architecture",
        "Dynamic product categories",
        "Vendor management",
        "Modern checkout experience",
        "Optimized onboarding",
        "Scalable administration panel",
      ],
      solution: {
        intro: "The platform was designed to provide:",
        points: ["Simple product discovery", "Intuitive navigation", "Fast purchasing process", "Scalable marketplace management", "Modern mobile experience"],
      },
      outcome: {
        intro: "Konekta aims to:",
        points: ["Simplify online shopping", "Support local businesses", "Improve customer experience", "Build trust in digital commerce", "Create opportunities for African entrepreneurs"],
      },
      lessonsLearned:
        "Building a marketplace goes far beyond writing code — it requires balancing user needs, business goals and technical scalability from day one.",
      technologies: ["Flutter", "Firebase", "REST APIs", "Product Strategy", "UX Design", "Git"],
    },
    {
      slug: "igc-video-translation",
      title: "IGC",
      tagline:
        "Automating multilingual video translation for an online trading education platform, to help it expand into new international markets.",
      tags: ["Automation", "AI Workflow", "Localization"],
      client: "Technical contribution — automation",
      category: "Automation · Localization",
      thumbnail: "/case-studies/igc.jpg",
      summary:
        "An automated video translation pipeline for an online trading education platform, helping it expand into new international, multilingual markets.",
      overview:
        "IGC is an online trading education platform. My role was to automate the translation of their training videos into multiple languages, helping them expand into new international markets across different language regions.",
      challenge:
        "The platform's training content only reached one language audience, limiting its ability to expand internationally. Translating videos manually for every new market would have been slow and costly. The objective was to build an automated workflow that could translate video content into multiple languages quickly, consistently, and at scale.",
      approach: {
        intro:
          "I focused on automating the translation pipeline end-to-end, rather than relying on manual, one-off translation. That meant designing a repeatable process the team could run for every new video and every new target language:",
        points: ["Automated translation workflow design", "AI-powered video translation integration", "Multi-language pipeline setup", "Quality control checkpoints", "Process documentation for the team"],
      },
      keyInsights: [
        "Manual translation didn't scale across multiple markets",
        "An automated pipeline could handle new languages without extra manual work per video",
        "Quality checks were still needed to catch AI translation errors",
        "Consistency across languages mattered as much as speed",
      ],
      solution: {
        intro:
          "I built an automated workflow that takes a source video and produces translated versions in multiple languages with minimal manual intervention, combining AI-assisted translation with structured quality checks.",
        points: ["AI-assisted translation integrated into the video pipeline", "Automated processing for multiple target languages", "Structured review step to catch errors before publishing", "Reusable process for future videos and languages"],
      },
      outcome: {
        intro: "The automation allowed IGC to:",
        points: ["Translate training videos into multiple languages without manual rework for each one", "Reduce the time and cost of localizing content", "Expand its reach into new international, non-English-speaking markets", "Scale content localization as the platform grows"],
      },
      lessonsLearned:
        "This project showed me that the real value of AI isn't just translation quality — it's removing repetitive manual work so a team can scale into new markets without scaling headcount. Building the workflow to be repeatable and reliable mattered as much as the translation itself.",
      technologies: ["AI-assisted Translation", "Workflow Automation", "Localization", "Quality Assurance"],
    },
  ],
  ar: [
    {
      slug: "easyfitness-uae",
      title: "EasyFitness UAE",
      tagline: "تحويل موقع لياقة بدنية إلى تجربة رقمية موجهة نحو التحويل.",
      tags: ["تدقيق تجربة المستخدم", "تحليل الواجهة", "استراتيجية المنتج", "تحسين التحويل"],
      client: "تدقيق مستقل — غير مُكلَّف من قبل العميل",
      category: "تدقيق تجربة المستخدم · إعادة تصميم الواجهة",
      thumbnail: "/case-studies/easyfitness.jpg",
      summary:
        "تدقيق مستقل لتجربة وواجهة المستخدم لموقع EasyFitness UAE، يكشف نقاط الاحتكاك ويقترح استراتيجية إعادة تصميم لزيادة التفاعل والتحويلات.",
      overview:
        "EasyFitness UAE هي شركة لياقة بدنية تعمل في دولة الإمارات العربية المتحدة. أجريت تدقيقًا مستقلاً لتجربة وواجهة المستخدم لتقييم مدى فعالية الموقع في إيصال قيمته، وتوجيه المستخدمين خلال رحلتهم، وتحويل الزوار إلى أعضاء — متجاوزًا الجانب الجمالي لتحليل كيفية تأثير قرارات التصميم على الثقة والتفاعل والأداء التجاري.",
      challenge:
        "على الرغم من أن الموقع يقدّم هوية بصرية عصرية، كانت هناك عدة فرص لتحسين تجربة المستخدم الشاملة: بعض الأقسام تفتقر إلى التسلسل الهرمي، وتجربة الجوّال يمكن أن تكون أكثر اتساقًا، ولم يكن السرد يوضح بشكل كامل سبب اختيار EasyFitness بدلاً من المنافسين. كان الهدف هو تحديد نقاط الاحتكاك واقتراح تحسينات عملية يمكن أن تزيد التفاعل والتحويلات.",
      approach: {
        intro: "حللت الموقع من منظور المستخدم والأعمال معًا. شملت المراجعة:",
        points: ["هندسة المعلومات", "التسلسل الهرمي البصري", "تجربة الجوّال", "التنقل", "موضع أزرار الدعوة لاتخاذ إجراء", "رحلة المستخدم", "اتساق العلامة التجارية", "فرص التحويل"],
      },
      keyInsights: [
        "هوية بصرية نظيفة ومحتوى ملائم بشكل عام",
        "كانت القيمة المقترحة بحاجة إلى تعزيز في الجزء الظاهر أعلى الصفحة",
        "كان التسلسل الهرمي لأزرار الدعوة لاتخاذ إجراء بحاجة إلى تحسين",
        "كانت الاستجابة على الجوّال بحاجة إلى تحسين",
        "كان السرد بحاجة إلى أن يكون أكثر جاذبية",
        "كان ترتيب أولويات المحتوى بحاجة إلى تحسين",
        "كانت رحلة العضوية بحاجة إلى مزيد من الوضوح",
      ],
      solution: {
        intro: "ركّزت استراتيجية إعادة التصميم على تحقيق رحلة عميل أكثر سلاسة. شملت التوصيات:",
        points: ["إعادة تصميم قسم Hero", "تبسيط التنقل", "إبراز مزايا العضوية", "تحسين تخطيطات الجوّال", "بناء تسلسل هرمي بصري أقوى", "تقديم مسارات تحويل أوضح"],
      },
      outcome: {
        intro: "تهدف التحسينات المقترحة إلى:",
        points: ["زيادة تفاعل المستخدمين", "تعزيز الثقة", "تقليل معدل الارتداد", "زيادة طلبات العضوية", "بناء انطباع أقوى عن العلامة التجارية"],
      },
      lessonsLearned:
        "عزّز هذا المشروع قناعتي بأن المواقع الفعالة لا تُبنى حول الصفحات، بل حول رحلات المستخدمين. التصميم الجيد ليس مسألة زخرفة — بل يتعلق بمساعدة المستخدمين على تحقيق أهدافهم مع دعم أهداف الشركة في الوقت نفسه.",
      technologies: ["Figma", "بحث تجربة المستخدم", "تحليل المنتج", "Wireframing", "هندسة المعلومات"],
    },
    {
      slug: "konekta",
      title: "Konekta",
      tagline: "تصميم سوق إلكتروني يربط الشركات والعملاء الأفارقة من خلال تجارب رقمية أفضل.",
      tags: ["تصميم المنتج", "Flutter", "السوق الإلكتروني", "استراتيجية تجربة المستخدم"],
      client: "مشروع شخصي",
      category: "تصميم المنتج · Flutter",
      thumbnail: "/case-studies/konekta.png",
      summary:
        "سوق إلكتروني بُني من الصفر لربط الشركات والعملاء الأفارقة من خلال تجربة تجارة رقمية بسيطة وقابلة للتوسع وموثوقة.",
      overview:
        "Konekta هي منصة سوق إلكتروني مصممة لتبسيط التجارة في أفريقيا من خلال ربط الشركات المحلية والموردين والعملاء ضمن نظام رقمي واحد، وُلدت بطموح حل تحديات السوق الحقيقية مع تقديم تجربة تسوق حديثة وبديهية.",
      challenge:
        "تواجه العديد من الشركات الصغيرة صعوبة في الوصول إلى التجارة الرقمية لأن الحلول الحالية إما معقدة للغاية، أو غير مُكيَّفة جيدًا مع الواقع المحلي، أو تفتقر إلى تجربة مستخدم سلسة. كان التحدي هو تصميم منصة تبدو بسيطة للمستخدمين مع بقائها قابلة للتوسع لدعم النمو المستقبلي.",
      approach: {
        intro: "منذ البداية، تبنيت عقلية تُركّز على المنتج أولاً. شمل المشروع:",
        points: ["بحث المنتج", "تصميم تجربة المستخدم", "هندسة المعلومات", "استراتيجية السوق الإلكتروني", "التفكير بأسلوب mobile-first", "مسارات المستخدم", "ترتيب أولويات الميزات"],
      },
      keyInsights: [
        "بنية سوق إلكتروني مرنة",
        "فئات منتجات ديناميكية",
        "إدارة البائعين",
        "تجربة دفع حديثة",
        "تهيئة مستخدم محسّنة",
        "لوحة إدارة قابلة للتوسع",
      ],
      solution: {
        intro: "صُممت المنصة لتوفير:",
        points: ["اكتشاف منتجات بسيط", "تنقل بديهي", "عملية شراء سريعة", "إدارة سوق إلكتروني قابلة للتوسع", "تجربة جوّال حديثة"],
      },
      outcome: {
        intro: "تهدف Konekta إلى:",
        points: ["تبسيط التسوق عبر الإنترنت", "دعم الشركات المحلية", "تحسين تجربة العملاء", "بناء الثقة في التجارة الرقمية", "خلق فرص لرواد الأعمال الأفارقة"],
      },
      lessonsLearned:
        "بناء سوق إلكتروني يتجاوز كتابة الكود بكثير — فهو يتطلب موازنة احتياجات المستخدمين وأهداف الأعمال وقابلية التوسع التقنية منذ اليوم الأول.",
      technologies: ["Flutter", "Firebase", "REST APIs", "استراتيجية المنتج", "تصميم تجربة المستخدم", "Git"],
    },
    {
      slug: "igc-video-translation",
      title: "IGC",
      tagline:
        "أتمتة ترجمة الفيديو متعددة اللغات لمنصة تعليم تداول عبر الإنترنت، لمساعدتها على التوسع في أسواق دولية جديدة.",
      tags: ["الأتمتة", "سير عمل بالذكاء الاصطناعي", "الترجمة المحلية"],
      client: "مساهمة تقنية — أتمتة",
      category: "الأتمتة · الترجمة المحلية",
      thumbnail: "/case-studies/igc.jpg",
      summary:
        "مسار ترجمة فيديو آلي لمنصة تعليم تداول عبر الإنترنت، يساعدها على التوسع نحو أسواق دولية جديدة متعددة اللغات.",
      overview:
        "IGC هي منصة تعليم إلكترونية متخصصة في التداول. كان دوري أتمتة ترجمة فيديوهات التدريب الخاصة بهم إلى لغات متعددة، لمساعدتهم على توسيع نطاق سوقهم نحو دول ومناطق لغوية مختلفة.",
      challenge:
        "كان محتوى التدريب على المنصة يصل إلى جمهور لغة واحدة فقط، مما حدّ من قدرتها على التوسع دوليًا. كانت ترجمة الفيديوهات يدويًا لكل سوق جديد ستكون بطيئة ومكلفة. كان الهدف بناء سير عمل آلي قادر على ترجمة المحتوى المرئي إلى لغات متعددة بسرعة واتساق وعلى نطاق واسع.",
      approach: {
        intro:
          "ركّزت على أتمتة مسار الترجمة من البداية إلى النهاية، بدلاً من الاعتماد على ترجمة يدوية لكل حالة على حدة. كان ذلك يعني تصميم عملية قابلة للتكرار يمكن للفريق تنفيذها مع كل فيديو جديد وكل لغة مستهدفة جديدة:",
        points: ["تصميم سير عمل ترجمة آلي", "دمج الترجمة المرئية بمساعدة الذكاء الاصطناعي", "إعداد مسار متعدد اللغات", "نقاط تحقق من الجودة", "توثيق العملية للفريق"],
      },
      keyInsights: [
        "الترجمة اليدوية لم تكن قابلة للتوسع عبر أسواق متعددة",
        "المسار الآلي يمكنه التعامل مع لغات جديدة دون عمل يدوي إضافي لكل فيديو",
        "بقيت هناك حاجة لمراجعات الجودة لرصد أخطاء ترجمة الذكاء الاصطناعي",
        "كان الاتساق بين اللغات مهمًا بقدر أهمية السرعة",
      ],
      solution: {
        intro:
          "بنيت سير عمل آليًا يأخذ فيديو المصدر وينتج نسخًا مترجمة بعدة لغات بأقل تدخل يدوي ممكن، من خلال الجمع بين الترجمة بمساعدة الذكاء الاصطناعي ومراجعات جودة منظمة.",
        points: ["ترجمة بمساعدة الذكاء الاصطناعي مدمجة في مسار الفيديو", "معالجة آلية للغات مستهدفة متعددة", "خطوة مراجعة منظمة لرصد الأخطاء قبل النشر", "عملية قابلة لإعادة الاستخدام للفيديوهات واللغات المستقبلية"],
      },
      outcome: {
        intro: "سمحت الأتمتة لـ IGC بـ:",
        points: ["ترجمة فيديوهات التدريب إلى لغات متعددة دون إعادة عمل يدوي لكل فيديو", "تقليل وقت وتكلفة توطين المحتوى", "توسيع نطاق وصولها إلى أسواق دولية جديدة غير ناطقة بالإنجليزية", "توسيع نطاق توطين المحتوى مع نمو المنصة"],
      },
      lessonsLearned:
        "أظهر لي هذا المشروع أن القيمة الحقيقية للذكاء الاصطناعي ليست فقط في جودة الترجمة — بل في إزالة العمل اليدوي المتكرر لتمكين الفريق من التوسع إلى أسواق جديدة دون الحاجة لتوسيع عدد الموظفين. كان بناء سير عمل قابل للتكرار وموثوق به لا يقل أهمية عن الترجمة نفسها.",
      technologies: ["ترجمة بمساعدة الذكاء الاصطناعي", "أتمتة سير العمل", "الترجمة المحلية", "ضمان الجودة"],
    },
  ],
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return caseStudiesByLocale[locale];
}
