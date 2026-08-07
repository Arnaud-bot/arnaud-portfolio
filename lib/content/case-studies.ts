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
      client: "Audit UX présenté à l'équipe EasyFitness",
      category: "Audit UX · Refonte UI",
      thumbnail: "/case-studies/easyfitness.jpg",
      beforeUrl: "https://easyfitness-uae-website.vercel.app",
      afterUrl: "https://easyfitness-uae-redesign.vercel.app",
      pdfUrl: "/case-studies/easyfitness-recommendations.pdf",
      summary:
        "Un audit UX/UI du site EasyFitness UAE avec 8 recommandations concrètes, accompagné d'un concept de refonte codé.",
      overview:
        "EasyFitness UAE est un club de fitness premium basé à Dubaï. J'ai présenté à leur équipe une analyse du site existant et un concept de refonte, avec pour objectif d'améliorer l'expérience utilisateur et la conversion — en m'appuyant sur les points forts déjà en place.",
      challenge:
        "Le site offre une base solide, mais plusieurs sections restent pensées desktop-first, la Hero section ne capte pas assez vite l'attention, la preuve sociale est peu exploitée, et le parcours de conversion pourrait mieux guider les visiteurs vers une adhésion.",
      approach: {
        intro: "J'ai analysé le site sur huit axes, en le comparant à un concept de refonte que j'ai développé pour illustrer les améliorations proposées :",
        points: ["Expérience mobile", "Section Hero et première impression", "Preuve sociale", "Parcours de conversion", "Storytelling de la page d'accueil", "Présentation des abonnements", "Performance et SEO", "Stratégie de croissance digitale à long terme"],
      },
      keyInsights: [
        "Le site reflète déjà une identité premium avec un design propre et moderne",
        "Certaines sections sont adaptées du desktop plutôt que pensées mobile-first",
        "La section Hero pourrait mieux mettre en avant le positionnement premium et les indicateurs de confiance",
        "La preuve sociale (avis, témoignages, transformations) est sous-exploitée",
        "Le parcours de conversion manque de fluidité entre découverte et adhésion",
        "La page d'accueil gagnerait à suivre un fil narratif unique plutôt que des sections indépendantes",
      ],
      solution: {
        intro: "Huit recommandations concrètes, présentées à l'équipe avec un concept de refonte codé à l'appui :",
        points: ["Concevoir certaines sections spécifiquement pour mobile plutôt que d'adapter le desktop", "Renforcer la Hero section avec le positionnement premium, les avantages membres et des indicateurs de confiance", "Intégrer des avis Google, témoignages et parcours de transformation pour renforcer la confiance", "Optimiser le parcours de conversion avec des CTA mieux placés et des formulaires simplifiés", "Structurer la page d'accueil autour d'un fil narratif : Fitness → Recovery → Wellness", "Simplifier la comparaison des abonnements en mettant en avant le plan recommandé", "Améliorer la performance et le SEO technique pour la recherche locale", "Poser les bases d'une croissance digitale continue : CRO, landing pages, monitoring et itérations"],
      },
      outcome: {
        intro: "Ces recommandations visent à :",
        points: ["Renforcer la première impression et le positionnement premium de la marque", "Augmenter la confiance des visiteurs grâce à une preuve sociale plus visible", "Améliorer l'expérience mobile là où la majorité des visiteurs arrivent", "Fluidifier le parcours de conversion de la découverte à l'adhésion", "Poser les bases d'une croissance organique et digitale durable"],
      },
      lessonsLearned:
        "Ce projet m'a rappelé qu'un bon audit UX consiste à construire sur ce qui fonctionne déjà, pas seulement à pointer ce qui ne va pas — avec autant de diplomatie que de rigueur.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Figma"],
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
      thumbnail: "/case-studies/igc.png",
      demoEmbed: "/case-studies/igc-demo.html",
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
      client: "UX audit presented to the EasyFitness team",
      category: "UX Audit · UI Redesign",
      thumbnail: "/case-studies/easyfitness.jpg",
      beforeUrl: "https://easyfitness-uae-website.vercel.app",
      afterUrl: "https://easyfitness-uae-redesign.vercel.app",
      pdfUrl: "/case-studies/easyfitness-recommendations.pdf",
      summary:
        "A UX/UI audit of the EasyFitness UAE website with 8 concrete recommendations, paired with a coded redesign concept.",
      overview:
        "EasyFitness UAE is a premium fitness club based in Dubai. I presented their team with a review of the existing site and a redesign concept, aiming to improve the user experience and conversion — building on what already works well.",
      challenge:
        "The site has a strong foundation, but several sections are still desktop-first, the Hero section doesn't grab attention fast enough, social proof is underused, and the conversion journey could better guide visitors toward membership.",
      approach: {
        intro: "I reviewed the site across eight areas, comparing it to a redesign concept I built to illustrate the proposed improvements:",
        points: ["Mobile experience", "Hero section & first impression", "Social proof", "Conversion journey", "Homepage storytelling", "Membership presentation", "Performance & SEO", "Long-term digital growth strategy"],
      },
      keyInsights: [
        "The website already reflects a premium identity with a clean, modern design",
        "Some sections are adapted from desktop rather than designed mobile-first",
        "The Hero section could better emphasize premium positioning and trust indicators",
        "Social proof (reviews, testimonials, transformations) is underused",
        "The conversion journey lacks a smooth path from discovery to membership",
        "The homepage would benefit from a single narrative thread instead of independent sections",
      ],
      solution: {
        intro: "Eight concrete recommendations, presented to the team alongside a coded redesign concept:",
        points: ["Design certain sections specifically for mobile instead of adapting the desktop layout", "Strengthen the Hero section with premium positioning, member benefits and trust indicators", "Add Google Reviews, testimonials and transformation stories to build trust", "Optimize the conversion journey with stronger CTA placement and simplified forms", "Structure the homepage around one narrative: Fitness → Recovery → Wellness", "Simplify membership comparison by highlighting the recommended plan", "Improve performance and technical SEO for local search intent", "Lay the groundwork for continuous digital growth: CRO, campaign landing pages, monitoring and iteration"],
      },
      outcome: {
        intro: "These recommendations aim to:",
        points: ["Strengthen the brand's first impression and premium positioning", "Increase visitor trust through more visible social proof", "Improve the mobile experience, where most visitors arrive", "Smooth the conversion journey from discovery to membership", "Lay the foundation for sustainable organic and digital growth"],
      },
      lessonsLearned:
        "This project reminded me that a good UX audit is about building on what already works, not just pointing out flaws — with as much diplomacy as rigor.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Figma"],
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
      thumbnail: "/case-studies/igc.png",
      demoEmbed: "/case-studies/igc-demo.html",
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
      client: "تدقيق تجربة مستخدم قُدّم لفريق EasyFitness",
      category: "تدقيق تجربة المستخدم · إعادة تصميم الواجهة",
      thumbnail: "/case-studies/easyfitness.jpg",
      beforeUrl: "https://easyfitness-uae-website.vercel.app",
      afterUrl: "https://easyfitness-uae-redesign.vercel.app",
      pdfUrl: "/case-studies/easyfitness-recommendations.pdf",
      summary:
        "تدقيق لتجربة وواجهة مستخدم موقع EasyFitness UAE يتضمن 8 توصيات ملموسة، مرفقة بمفهوم إعادة تصميم مبرمج فعليًا.",
      overview:
        "EasyFitness UAE هو نادي لياقة بدنية متميز في دبي. قدّمت لفريقهم مراجعة للموقع الحالي ومفهوم إعادة تصميم، بهدف تحسين تجربة المستخدم والتحويل — مع البناء على ما ينجح بالفعل.",
      challenge:
        "يمتلك الموقع أساسًا قويًا، لكن بعض الأقسام لا تزال مصممة أولاً لسطح المكتب، ولا يجذب قسم Hero الانتباه بسرعة كافية، والدليل الاجتماعي غير مستغل، ويمكن لمسار التحويل أن يوجّه الزوار بشكل أفضل نحو العضوية.",
      approach: {
        intro: "راجعت الموقع عبر ثمانية محاور، بمقارنته بمفهوم إعادة تصميم بنيته لتوضيح التحسينات المقترحة:",
        points: ["تجربة الجوّال", "قسم Hero والانطباع الأول", "الدليل الاجتماعي", "مسار التحويل", "سرد قصة الصفحة الرئيسية", "عرض العضويات", "الأداء وتحسين محركات البحث", "استراتيجية النمو الرقمي طويلة المدى"],
      },
      keyInsights: [
        "يعكس الموقع بالفعل هوية متميزة بتصميم نظيف وعصري",
        "بعض الأقسام مُكيَّفة من تخطيط سطح المكتب بدلاً من أن تُصمَّم أولاً للجوّال",
        "يمكن لقسم Hero أن يبرز بشكل أفضل الموقع المتميز ومؤشرات الثقة",
        "الدليل الاجتماعي (المراجعات، الشهادات، قصص التحول) غير مستغل بالشكل الكافي",
        "يفتقر مسار التحويل إلى انتقال سلس من الاكتشاف إلى العضوية",
        "ستستفيد الصفحة الرئيسية من خيط سردي واحد بدلاً من أقسام منفصلة",
      ],
      solution: {
        intro: "ثماني توصيات ملموسة، قدّمتها للفريق إلى جانب مفهوم إعادة تصميم مبرمج:",
        points: ["تصميم أقسام معينة خصيصًا للجوّال بدلاً من تكييف تخطيط سطح المكتب", "تعزيز قسم Hero بالموقع المتميز، مزايا الأعضاء، ومؤشرات الثقة", "إضافة مراجعات Google والشهادات وقصص التحول لبناء الثقة", "تحسين مسار التحويل بوضع أفضل لأزرار الدعوة لاتخاذ إجراء ونماذج مبسطة", "بناء الصفحة الرئيسية حول سرد واحد: اللياقة ← التعافي ← العافية", "تبسيط مقارنة العضويات من خلال إبراز الخطة الموصى بها", "تحسين الأداء وتحسين محركات البحث التقني لنية البحث المحلي", "إرساء أسس نمو رقمي مستمر: تحسين معدل التحويل، صفحات الحملات، المراقبة والتكرار"],
      },
      outcome: {
        intro: "تهدف هذه التوصيات إلى:",
        points: ["تعزيز الانطباع الأول للعلامة التجارية وموقعها المتميز", "زيادة ثقة الزوار من خلال دليل اجتماعي أكثر وضوحًا", "تحسين تجربة الجوّال، حيث يصل معظم الزوار", "تسهيل مسار التحويل من الاكتشاف إلى العضوية", "إرساء الأساس لنمو عضوي ورقمي مستدام"],
      },
      lessonsLearned:
        "ذكّرني هذا المشروع بأن التدقيق الجيد لتجربة المستخدم يعني البناء على ما ينجح بالفعل، لا مجرد الإشارة إلى الأخطاء — بدبلوماسية بقدر الدقة.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Figma"],
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
      thumbnail: "/case-studies/igc.png",
      demoEmbed: "/case-studies/igc-demo.html",
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
