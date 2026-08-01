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
      thumbnail: "/case-studies/konekta.jpg",
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
        "Rendre le contenu éducatif accessible dans plusieurs langues grâce à la localisation par IA.",
      tags: ["Workflow IA", "Localisation", "Collaboration Produit"],
      client: "Collaboration produit",
      category: "Workflow IA · Localisation",
      thumbnail: "/case-studies/igc.jpg",
      summary:
        "Une plateforme de traduction vidéo multilingue propulsée par l'IA, aidant les organisations à rendre leur contenu éducatif accessible dans plusieurs langues.",
      overview:
        "IGC est une plateforme de traduction vidéo multilingue conçue pour aider les organisations à toucher une audience mondiale en traduisant du contenu vidéo éducatif dans plusieurs langues. Ma contribution s'est concentrée sur le workflow de localisation et l'expérience produit globale.",
      challenge:
        "Le contenu éducatif ne touche souvent qu'une seule audience car la barrière de la langue limite son accessibilité. L'objectif était de fluidifier le workflow de traduction tout en préservant clarté, cohérence et expérience utilisateur.",
      approach: {
        intro:
          "J'ai collaboré sur ce projet en analysant le processus de localisation, en revoyant les workflows produit et en contribuant à l'expérience multilingue — avec pour objectif que le contenu traduit reste naturel, compréhensible et accessible.",
        points: [],
      },
      keyInsights: ["Analyse du workflow de localisation", "Collaboration produit", "Revue qualité", "Améliorations de l'expérience utilisateur", "Optimisation des processus", "Cohérence inter-langues"],
      solution: {
        intro:
          "La plateforme intègre une traduction assistée par IA avec un processus de revue structuré pour accélérer la production de contenu multilingue tout en maintenant la qualité.",
        points: [],
      },
      outcome: {
        intro:
          "Ce projet a démontré comment l'IA peut considérablement améliorer l'accessibilité du contenu éducatif, en réduisant l'effort manuel et en permettant une distribution internationale plus rapide.",
        points: [],
      },
      lessonsLearned:
        "Travailler sur une plateforme propulsée par l'IA a renforcé ma compréhension du développement produit multilingue, de la collaboration inter-équipes, et de l'importance de concevoir des workflows qui équilibrent automatisation et contrôle qualité humain.",
      technologies: ["Traduction assistée par IA", "Localisation", "Conception de workflow", "Assurance qualité", "Collaboration Produit"],
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
      thumbnail: "/case-studies/konekta.jpg",
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
      tagline: "Making educational content accessible across languages through AI-powered localization.",
      tags: ["AI Workflow", "Localization", "Product Collaboration"],
      client: "Product collaboration",
      category: "AI Workflow · Localization",
      thumbnail: "/case-studies/igc.jpg",
      summary:
        "A multilingual AI-powered video translation platform helping organizations make educational content accessible across languages.",
      overview:
        "IGC is a multilingual video translation platform designed to help organizations reach a global audience by translating educational video content into multiple languages. My contribution focused on the localization workflow and the overall product experience.",
      challenge:
        "Educational content often reaches only one audience because language barriers limit accessibility. The objective was to streamline the translation workflow while preserving clarity, consistency and user experience.",
      approach: {
        intro:
          "I collaborated on the project by analyzing the localization process, reviewing product workflows and contributing to the multilingual experience — with a focus on ensuring translated content remained natural, understandable and accessible.",
        points: [],
      },
      keyInsights: ["Localization workflow analysis", "Product collaboration", "Quality review", "User experience improvements", "Process optimization", "Cross-language consistency"],
      solution: {
        intro:
          "The platform integrates AI-assisted translation with a structured review process to accelerate multilingual content production while maintaining quality.",
        points: [],
      },
      outcome: {
        intro:
          "The project demonstrated how AI can significantly improve the accessibility of educational content, reducing manual effort and enabling faster international distribution.",
        points: [],
      },
      lessonsLearned:
        "Working on an AI-powered platform strengthened my understanding of multilingual product development, cross-team collaboration, and the importance of designing workflows that balance automation with human quality control.",
      technologies: ["AI-assisted Translation", "Localization", "Workflow Design", "Quality Assurance", "Product Collaboration"],
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
      thumbnail: "/case-studies/konekta.jpg",
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
      tagline: "إتاحة الوصول إلى المحتوى التعليمي بلغات متعددة من خلال الترجمة المحلية المدعومة بالذكاء الاصطناعي.",
      tags: ["سير عمل بالذكاء الاصطناعي", "الترجمة المحلية", "تعاون على المنتج"],
      client: "تعاون على المنتج",
      category: "سير عمل بالذكاء الاصطناعي · الترجمة المحلية",
      thumbnail: "/case-studies/igc.jpg",
      summary:
        "منصة ترجمة فيديو متعددة اللغات مدعومة بالذكاء الاصطناعي، تساعد المؤسسات على إتاحة محتواها التعليمي بلغات متعددة.",
      overview:
        "IGC هي منصة ترجمة فيديو متعددة اللغات مصممة لمساعدة المؤسسات على الوصول إلى جمهور عالمي من خلال ترجمة المحتوى التعليمي المرئي إلى لغات متعددة. ركّزت مساهمتي على سير عمل الترجمة المحلية وتجربة المنتج بشكل عام.",
      challenge:
        "غالبًا ما يصل المحتوى التعليمي إلى جمهور واحد فقط لأن حاجز اللغة يحدّ من إمكانية الوصول إليه. كان الهدف هو تبسيط سير عمل الترجمة مع الحفاظ على الوضوح والاتساق وتجربة المستخدم.",
      approach: {
        intro:
          "تعاونت في هذا المشروع من خلال تحليل عملية الترجمة المحلية، ومراجعة سير عمل المنتج، والمساهمة في التجربة متعددة اللغات — مع التركيز على أن يبقى المحتوى المترجم طبيعيًا ومفهومًا وسهل الوصول إليه.",
        points: [],
      },
      keyInsights: ["تحليل سير عمل الترجمة المحلية", "التعاون على المنتج", "مراجعة الجودة", "تحسينات تجربة المستخدم", "تحسين العمليات", "الاتساق بين اللغات"],
      solution: {
        intro:
          "تدمج المنصة الترجمة بمساعدة الذكاء الاصطناعي مع عملية مراجعة منظمة لتسريع إنتاج المحتوى متعدد اللغات مع الحفاظ على الجودة.",
        points: [],
      },
      outcome: {
        intro:
          "أظهر المشروع كيف يمكن للذكاء الاصطناعي أن يحسّن بشكل كبير إمكانية الوصول إلى المحتوى التعليمي، مع تقليل الجهد اليدوي وتمكين توزيع دولي أسرع.",
        points: [],
      },
      lessonsLearned:
        "عزّز العمل على منصة مدعومة بالذكاء الاصطناعي فهمي لتطوير المنتجات متعددة اللغات، والتعاون بين الفرق، وأهمية تصميم سير عمل يوازن بين الأتمتة والرقابة البشرية على الجودة.",
      technologies: ["ترجمة بمساعدة الذكاء الاصطناعي", "الترجمة المحلية", "تصميم سير العمل", "ضمان الجودة", "التعاون على المنتج"],
    },
  ],
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return caseStudiesByLocale[locale];
}
