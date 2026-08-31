import type { BlogPost } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

const blogPostsByLocale: Record<Locale, BlogPost[]> = {
  fr: [
    {
      slug: "5-erreurs-ux-dubai",
      title: "5 erreurs UX que je vois sur presque tous les sites d'entreprise à Dubaï",
      category: "UX",
      excerpt:
        "Des patterns qui reviennent site après site, tous secteurs confondus — et qui coûtent des clients sans que personne ne s'en rende compte.",
      coverImage: "/blog/ux-erreurs-dubai.svg",
      date: "2026-08-10",
      sections: [
        {
          title: "Le site existe, mais ne vend rien",
          paragraphs: [
            "La plupart des sites d'entreprise que j'audite ont été construits pour exister, pas pour convertir. Ils listent des services, affichent un logo soigné, mais ne racontent aucune histoire et ne guident personne vers une action précise.",
            "Résultat : un visiteur arrive, comprend vaguement ce que fait l'entreprise, et repart sans avoir été convaincu de faire quoi que ce soit. Le site remplit sa fonction de carte de visite numérique, pas celle d'outil de conversion.",
          ],
        },
        {
          title: "La preuve sociale est invisible ou mal placée",
          paragraphs: [
            "Presque toutes les entreprises que j'ai auditées ont de bons avis clients quelque part — sur Google, sur les réseaux sociaux, dans des emails de remerciement. Mais sur le site, cette preuve sociale est absente, ou reléguée tout en bas de page, après que le visiteur a déjà décidé de partir.",
            "La confiance se construit dans les dix premières secondes. Si ton meilleur argument (des clients satisfaits) n'apparaît qu'après trois scrolls, il ne sert à rien.",
          ],
        },
        {
          title: "Le parcours mobile est une version réduite du desktop",
          paragraphs: [
            "Beaucoup de sites sont \"responsive\" au sens technique — rien ne casse visuellement sur mobile — mais restent pensés pour un écran large. Les sections s'empilent, le texte devient un mur, et les actions importantes se perdent dans le défilement.",
            "Sur un marché comme Dubaï, où une part significative du trafic vient du mobile, ce n'est pas un détail. C'est souvent la majorité des visiteurs qui vivent une expérience de seconde zone.",
          ],
        },
        {
          title: "Le CTA principal se noie dans dix autres boutons",
          paragraphs: [
            "Un visiteur qui voit \"Nous contacter\", \"En savoir plus\", \"Nos services\", \"Demander un devis\" et \"S'inscrire à la newsletter\" sur le même écran ne sait plus lequel choisir. Et un visiteur indécis ne clique généralement sur rien.",
            "Chaque page devrait avoir une seule action prioritaire, visuellement dominante. Les autres liens peuvent exister, mais en retrait.",
          ],
        },
        {
          title: "Personne n'a mesuré ce qui bloque vraiment la conversion",
          paragraphs: [
            "La dernière erreur, la plus fréquente, c'est de changer des choses \"parce que ça a l'air mieux\" sans jamais avoir identifié le vrai point de friction. On refait un design entier alors que le problème était un seul formulaire mal placé.",
            "C'est exactement pour ça que je commence toujours par un audit avant de proposer quoi que ce soit : comprendre où les visiteurs décrochent, avant de décider quoi changer.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "audit-ou-refonte",
      title: "Audit UX ou refonte complète : comment savoir de quoi ton produit a vraiment besoin",
      category: "UX",
      excerpt:
        "La question que presque tous mes clients se posent avant de me contacter — et une règle simple pour y répondre soi-même.",
      coverImage: "/blog/audit-ou-refonte.svg",
      date: "2026-08-14",
      sections: [
        {
          title: "Le mauvais réflexe : tout casser pour tout reconstruire",
          paragraphs: [
            "Quand un site convertit mal, le réflexe naturel est de vouloir tout refaire : nouveau design, nouvelle structure, nouveau ton. C'est rassurant, ça donne l'impression de repartir sur des bases saines.",
            "Mais dans la majorité des cas que j'ai vus, une refonte complète traite des symptômes qu'un simple ajustement aurait suffi à corriger — et elle jette au passage tout ce qui fonctionnait déjà.",
          ],
        },
        {
          title: "Ce qu'un audit peut révéler que tu ne voyais pas",
          paragraphs: [
            "Un audit UX ne se contente pas de dire \"c'est joli\" ou \"ce n'est pas joli\". Il identifie précisément où les visiteurs hésitent, où ils abandonnent, et pourquoi. Souvent, le problème n'est pas visuel : c'est un parcours confus, une preuve sociale mal exploitée, ou un appel à l'action noyé dans la page.",
            "Sur EasyFitness UAE par exemple, l'audit a montré que la base était déjà solide — le vrai gain se trouvait dans la hiérarchie de l'information et le parcours vers l'adhésion, pas dans un nouveau design.",
          ],
        },
        {
          title: "Quand la refonte complète est vraiment justifiée",
          paragraphs: [
            "Il y a des cas où l'audit seul ne suffit pas : quand le positionnement business a changé, quand l'architecture technique est trop datée pour évoluer, ou quand le produit doit littéralement changer de public cible. Dans ces cas-là, retarder une refonte coûte plus cher que de la faire.",
          ],
        },
        {
          title: "Ma règle simple pour trancher",
          paragraphs: [
            "Si tu peux nommer précisément ce qui ne fonctionne pas sur ton site actuel, tu as probablement besoin d'un audit, pas d'une refonte. Si tu ne sais même plus dire à qui il s'adresse ni ce qu'il devrait accomplir, c'est le signe qu'il faut recommencer.",
            "Dans le doute, je recommande toujours de commencer par l'audit : il coûte moins cher, prend moins de temps, et te dira lui-même si une refonte est réellement nécessaire.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "concept-code-avant-refonte",
      title: "Pourquoi je propose toujours un concept codé avant une refonte complète",
      category: "Product Design",
      excerpt:
        "Une maquette se discute à l'infini. Un concept qui tourne dans un vrai navigateur se juge en quelques minutes.",
      coverImage: "/blog/concept-avant-refonte.svg",
      date: "2026-08-18",
      sections: [
        {
          title: "Une maquette, ça se discute. Un concept qui tourne, ça se juge",
          paragraphs: [
            "Une maquette statique laisse toujours de la place à l'interprétation : \"est-ce que ça sera vraiment comme ça ?\", \"comment ça réagit au scroll ?\", \"et sur mobile ?\". Ces questions retardent la décision et diluent le retour qu'on obtient.",
            "Un concept codé, même minimal, répond à ces questions instantanément. On clique, on scrolle, on teste sur son propre téléphone. Le retour devient concret : \"ça, ça marche\", \"ça, non\" — plutôt qu'un vague sentiment.",
          ],
        },
        {
          title: "Ça force à trancher les vrais problèmes, pas juste les couleurs",
          paragraphs: [
            "Coder un concept oblige à prendre des décisions qu'une maquette permet d'éviter : comment le menu se comporte réellement sur petit écran, ce qui se passe quand le contenu est plus long que prévu, comment le parcours s'enchaîne d'un écran à l'autre.",
            "C'est précisément dans ces détails, pas dans le choix d'une couleur, que se joue la majorité de l'expérience utilisateur.",
          ],
        },
        {
          title: "Ça donne un avant/après concret à montrer à une équipe",
          paragraphs: [
            "Présenter le site actuel à côté d'un concept fonctionnel, ouvert dans deux onglets, convainc beaucoup plus vite qu'un rapport de recommandations. C'est l'approche que j'ai suivie pour EasyFitness UAE : huit recommandations écrites, mais aussi un concept codé pour que l'équipe puisse littéralement se promener dedans.",
          ],
        },
        {
          title: "La limite : ce n'est pas encore le produit fini",
          paragraphs: [
            "Un concept n'est pas une version de production — il n'a pas toujours le back-end, les cas limites ou les optimisations d'un vrai site. Son rôle est de valider une direction avant d'investir dans la construction complète, pas de la remplacer.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "multilingue-rtl-product-thinking",
      title: "Ce que gérer le FR/EN/AR (avec RTL) sur mon propre site m'a appris sur le product thinking",
      category: "Product Design",
      excerpt:
        "Ajouter l'arabe à un site trilingue ne se résume pas à traduire des mots — ça oblige à remettre en question des suppositions qu'on ne savait même pas avoir.",
      coverImage: "/blog/multilingue-rtl.svg",
      date: "2026-08-21",
      sections: [
        {
          title: "Traduire, ce n'est pas juste changer les mots",
          paragraphs: [
            "En construisant la version arabe de mon propre portfolio, j'ai vite compris que la traduction n'était que la partie visible du travail. Les longueurs de texte changent, certaines tournures n'ont pas d'équivalent direct, et un ton informel en français ne se transpose pas automatiquement en arabe.",
          ],
        },
        {
          title: "Le RTL révèle toutes les suppositions cachées dans un design",
          paragraphs: [
            "Passer un site en RTL (de droite à gauche) est l'exercice le plus honnête qui soit pour tester un design. Chaque marge à gauche, chaque icône de flèche, chaque alignement de texte codé \"en dur\" devient un bug visible instantanément.",
            "Ça m'a forcé à utiliser des propriétés CSS logiques plutôt que physiques (\"début\"/\"fin\" plutôt que \"gauche\"/\"droite\") sur tout le site — une discipline que je n'aurais probablement jamais adoptée sans avoir dû livrer une vraie version RTL.",
          ],
        },
        {
          title: "Ce que ça change dans ma façon de concevoir, même pour des sites en une langue",
          paragraphs: [
            "Depuis ce projet, je conçois différemment même les sites monolingues : je pars du principe qu'une interface doit tenir sans dépendre d'une direction de lecture ou d'une longueur de texte précise. C'est ce genre de rigueur qui évite les mauvaises surprises quand un client demande, six mois plus tard, d'ajouter une nouvelle langue.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "mobile-first-konekta",
      title: "Mobile-first ne veut pas dire \"juste responsive\" : ce que j'ai appris en construisant Konekta",
      category: "Flutter",
      excerpt:
        "Le responsive reformate un design existant pour un petit écran. Le mobile-first oblige à repenser l'ordre des priorités dès le départ.",
      coverImage: "/blog/mobile-first-konekta.svg",
      date: "2026-08-24",
      sections: [
        {
          title: "Responsive, c'est reformater. Mobile-first, c'est repenser",
          paragraphs: [
            "Le responsive design part souvent d'une version desktop qu'on adapte ensuite à un écran plus petit : on empile les colonnes, on réduit les marges, on cache certains éléments. Le résultat fonctionne, mais reste une adaptation, pas une conception native.",
            "Construire Konekta mobile-first m'a obligé à inverser complètement l'ordre de travail : concevoir d'abord pour le plus petit écran, avec le moins d'espace et le moins d'attention disponible, puis enrichir progressivement pour les écrans plus grands.",
          ],
        },
        {
          title: "Ce que Konekta m'a obligé à repenser en premier",
          paragraphs: [
            "Konekta est une marketplace qui connecte des commerces africains à leurs clients — un contexte où une grande partie des utilisateurs navigue exclusivement sur mobile, parfois avec une connexion instable. Ça a changé mes priorités : la vitesse de chargement, la clarté d'un seul parcours d'achat, et la tolérance aux erreurs réseau sont devenues plus importantes que n'importe quel détail visuel.",
          ],
        },
        {
          title: "Le piège du \"on adaptera pour mobile plus tard\"",
          paragraphs: [
            "C'est la phrase que j'entends le plus souvent, et c'est presque toujours un mauvais calcul. Adapter un parcours conçu pour desktop revient à retirer des éléments un par un jusqu'à ce que ça tienne — jamais à obtenir la version la plus claire possible.",
            "Concevoir mobile-first dès le départ coûte plus cher en amont, mais évite ce travail de démontage, et donne en général une meilleure expérience sur tous les écrans, pas seulement le plus petit.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "pipeline-traduction-igc",
      title: "Automatiser un pipeline de traduction vidéo par IA : les leçons du projet IGC",
      category: "Automatisation",
      excerpt:
        "Traduire des vidéos de formation à la main ne pouvait pas suivre le rythme d'expansion d'IGC vers de nouveaux marchés. Voici comment j'ai construit un pipeline automatisé — et où j'ai gardé un humain dans la boucle.",
      coverImage: "/blog/pipeline-traduction-igc.svg",
      date: "2026-08-27",
      sections: [
        {
          title: "Le problème : traduire à la main ne scale pas",
          paragraphs: [
            "IGC est une plateforme de formation au trading en ligne. Chaque nouveau marché international signifiait, à l'origine, traduire manuellement chaque vidéo de formation — un travail lent, coûteux, et impossible à répéter à chaque nouvelle langue sans reprendre tout le processus depuis le début.",
          ],
        },
        {
          title: "Automatiser, mais garder un vrai contrôle qualité",
          paragraphs: [
            "La partie facile de ce projet était de brancher un service de traduction assistée par IA. La partie difficile était de construire un pipeline réutilisable — pas un script à usage unique — capable de traiter n'importe quelle nouvelle vidéo et n'importe quelle nouvelle langue cible sans intervention manuelle répétée à chaque fois.",
            "J'ai gardé une étape de contrôle qualité structurée avant chaque publication. L'IA traduit vite, mais elle fait aussi des erreurs qu'un simple visionnage permet d'attraper avant qu'elles n'atteignent un client.",
          ],
        },
        {
          title: "Ce que ce projet m'a appris sur l'IA en prod",
          paragraphs: [
            "La vraie valeur de l'IA ici n'était pas la qualité de traduction en elle-même, mais la suppression du travail manuel répétitif à chaque nouvelle langue. Automatiser un processus, pas juste une tâche isolée, c'est ce qui permet à une entreprise de grandir sans multiplier son équipe au même rythme.",
            "C'est aussi la leçon que j'applique maintenant à d'autres projets : avant d'ajouter de l'IA quelque part, je me demande d'abord quel processus complet elle doit remplacer — pas juste quelle tâche ponctuelle elle peut accélérer.",
          ],
        },
      ],
      published: true,
    },
  ],
  en: [
    {
      slug: "5-erreurs-ux-dubai",
      title: "5 UX mistakes I see on almost every company website in Dubai",
      category: "UX",
      excerpt:
        "Patterns that repeat site after site, across every industry — and quietly cost businesses customers.",
      coverImage: "/blog/ux-erreurs-dubai.svg",
      date: "2026-08-10",
      sections: [
        {
          title: "The site exists, but it doesn't sell anything",
          paragraphs: [
            "Most company sites I audit were built to exist, not to convert. They list services and show off a polished logo, but tell no story and guide no one toward a specific action.",
            "The result: a visitor lands, vaguely understands what the business does, and leaves without being convinced to do anything. The site does its job as a digital business card — not as a conversion tool.",
          ],
        },
        {
          title: "Social proof is invisible or badly placed",
          paragraphs: [
            "Almost every company I've audited has good reviews somewhere — on Google, on social media, in thank-you emails. But on the site itself, that social proof is either missing or buried at the bottom of the page, after the visitor has already decided to leave.",
            "Trust gets built in the first ten seconds. If your best argument — happy customers — only shows up after three scrolls, it isn't doing any work.",
          ],
        },
        {
          title: "The mobile journey is just a shrunk-down desktop",
          paragraphs: [
            "Many sites are technically \"responsive\" — nothing visibly breaks on mobile — but they're still designed for a wide screen. Sections stack, text turns into a wall, and important actions get lost in the scroll.",
            "In a market like Dubai, where a significant share of traffic comes from mobile, that's not a minor detail. It's often the majority of visitors getting a second-rate experience.",
          ],
        },
        {
          title: "The main CTA drowns among ten other buttons",
          paragraphs: [
            "A visitor who sees \"Contact us\", \"Learn more\", \"Our services\", \"Get a quote\" and \"Subscribe to our newsletter\" on the same screen no longer knows which one to pick. And an undecided visitor usually clicks nothing at all.",
            "Every page should have one dominant, priority action. The rest can still exist, just visually secondary.",
          ],
        },
        {
          title: "Nobody measured what's actually blocking conversion",
          paragraphs: [
            "The last, and most common, mistake is changing things because they \"look better\" without ever identifying the real friction point. An entire design gets rebuilt when the actual problem was a single badly placed form.",
            "That's exactly why I always start with an audit before proposing anything: understand where visitors drop off, before deciding what to change.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "audit-ou-refonte",
      title: "UX audit or full redesign: how to know what your product actually needs",
      category: "UX",
      excerpt:
        "The question almost every client asks before contacting me — and a simple rule to answer it yourself.",
      coverImage: "/blog/audit-ou-refonte.svg",
      date: "2026-08-14",
      sections: [
        {
          title: "The wrong reflex: tearing everything down to rebuild it",
          paragraphs: [
            "When a site converts poorly, the natural instinct is to redo everything: new design, new structure, new tone. It feels reassuring — like starting over on solid ground.",
            "But in most cases I've seen, a full redesign treats symptoms a simple adjustment would have fixed — and throws away everything that was already working along the way.",
          ],
        },
        {
          title: "What an audit can reveal that you couldn't see",
          paragraphs: [
            "A UX audit doesn't just say \"this looks nice\" or \"this doesn't\". It pinpoints exactly where visitors hesitate, where they abandon, and why. Often the problem isn't visual at all: a confusing flow, underused social proof, or a call to action buried in the page.",
            "On EasyFitness UAE, for example, the audit showed the foundation was already solid — the real gain was in the information hierarchy and the path to membership, not a new design.",
          ],
        },
        {
          title: "When a full redesign is actually justified",
          paragraphs: [
            "There are cases where an audit alone isn't enough: when the business positioning has changed, when the technical architecture is too dated to evolve, or when the product needs to reach a genuinely different audience. In those cases, delaying a redesign costs more than doing it.",
          ],
        },
        {
          title: "My simple rule for deciding",
          paragraphs: [
            "If you can name precisely what isn't working on your current site, you probably need an audit, not a redesign. If you can't even say who it's for anymore or what it should accomplish, that's the sign you need to start over.",
            "When in doubt, I always recommend starting with the audit: it costs less, takes less time, and will tell you itself whether a redesign is truly necessary.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "concept-code-avant-refonte",
      title: "Why I always propose a coded concept before a full redesign",
      category: "Product Design",
      excerpt:
        "A static mockup can be debated forever. A concept running in a real browser gets judged in minutes.",
      coverImage: "/blog/concept-avant-refonte.svg",
      date: "2026-08-18",
      sections: [
        {
          title: "A mockup gets discussed. A working concept gets judged",
          paragraphs: [
            "A static mockup always leaves room for interpretation: \"will it really look like that?\", \"how does it behave on scroll?\", \"and on mobile?\". Those questions delay the decision and dilute the feedback you get.",
            "A coded concept, even a minimal one, answers those questions instantly. You click, you scroll, you test it on your own phone. Feedback becomes concrete — \"this works\", \"this doesn't\" — instead of a vague feeling.",
          ],
        },
        {
          title: "It forces the real problems to be solved, not just the colors",
          paragraphs: [
            "Coding a concept forces decisions a mockup lets you avoid: how the menu actually behaves on a small screen, what happens when content is longer than expected, how the flow connects from one screen to the next.",
            "It's exactly in those details — not in a color choice — that most of the user experience is decided.",
          ],
        },
        {
          title: "It gives a concrete before/after to show a team",
          paragraphs: [
            "Showing the current site next to a working concept, open in two tabs, convinces far faster than a written report of recommendations. That's the approach I took for EasyFitness UAE: eight written recommendations, plus a coded concept the team could literally walk through.",
          ],
        },
        {
          title: "The limit: it's not the finished product yet",
          paragraphs: [
            "A concept isn't a production build — it doesn't always have the back-end, the edge cases, or the optimizations of a real site. Its role is to validate a direction before investing in the full build, not to replace it.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "multilingue-rtl-product-thinking",
      title: "What building FR/EN/AR (with RTL) on my own site taught me about product thinking",
      category: "Product Design",
      excerpt:
        "Adding Arabic to a trilingual site isn't just about translating words — it forces you to question assumptions you didn't even know you had.",
      coverImage: "/blog/multilingue-rtl.svg",
      date: "2026-08-21",
      sections: [
        {
          title: "Translating isn't just swapping words",
          paragraphs: [
            "Building the Arabic version of my own portfolio, I quickly realized translation was only the visible part of the work. Text lengths change, some phrasings have no direct equivalent, and an informal tone in French doesn't automatically carry over into Arabic.",
          ],
        },
        {
          title: "RTL exposes every hidden assumption in a design",
          paragraphs: [
            "Flipping a site to RTL (right-to-left) is the most honest test a design can go through. Every left margin, every arrow icon, every hardcoded text alignment becomes an instantly visible bug.",
            "It forced me to use logical CSS properties instead of physical ones (\"start\"/\"end\" rather than \"left\"/\"right\") across the entire site — a discipline I probably never would have adopted without having to ship a real RTL version.",
          ],
        },
        {
          title: "What it changed in how I design, even for single-language sites",
          paragraphs: [
            "Since that project, I design differently even for monolingual sites: I assume an interface has to hold up without depending on a specific reading direction or text length. That's the kind of rigor that avoids bad surprises when a client asks, six months later, to add a new language.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "mobile-first-konekta",
      title: "Mobile-first doesn't mean \"just responsive\": what I learned building Konekta",
      category: "Flutter",
      excerpt:
        "Responsive reformats an existing design for a smaller screen. Mobile-first forces you to rethink the order of priorities from the start.",
      coverImage: "/blog/mobile-first-konekta.svg",
      date: "2026-08-24",
      sections: [
        {
          title: "Responsive is reformatting. Mobile-first is rethinking",
          paragraphs: [
            "Responsive design usually starts from a desktop version that gets adapted to a smaller screen afterward: columns stack, margins shrink, some elements get hidden. It works, but it stays an adaptation, not a native design.",
            "Building Konekta mobile-first forced me to completely reverse the order of work: design first for the smallest screen, with the least space and the least attention available, then progressively enrich for larger screens.",
          ],
        },
        {
          title: "What Konekta forced me to rethink first",
          paragraphs: [
            "Konekta is a marketplace connecting African businesses to their customers — a context where a large share of users browse exclusively on mobile, sometimes on an unstable connection. That changed my priorities: loading speed, the clarity of a single purchase flow, and tolerance for network errors became more important than any visual detail.",
          ],
        },
        {
          title: "The trap of \"we'll adapt it for mobile later\"",
          paragraphs: [
            "That's the sentence I hear the most, and it's almost always a bad bet. Adapting a flow designed for desktop means stripping elements out one by one until it fits — never arriving at the clearest possible version.",
            "Designing mobile-first from the start costs more upfront, but avoids that teardown work, and generally produces a better experience across every screen, not just the smallest one.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "pipeline-traduction-igc",
      title: "Automating an AI video translation pipeline: lessons from the IGC project",
      category: "Automation",
      excerpt:
        "Manually translating training videos couldn't keep up with IGC's expansion into new markets. Here's how I built an automated pipeline — and where I kept a human in the loop.",
      coverImage: "/blog/pipeline-traduction-igc.svg",
      date: "2026-08-27",
      sections: [
        {
          title: "The problem: manual translation doesn't scale",
          paragraphs: [
            "IGC is an online trading education platform. Originally, every new international market meant manually translating every training video — slow, expensive work that couldn't be repeated for each new language without starting the whole process over.",
          ],
        },
        {
          title: "Automating it, while keeping real quality control",
          paragraphs: [
            "The easy part of this project was plugging in an AI-assisted translation service. The hard part was building a reusable pipeline — not a one-off script — able to handle any new video and any new target language without repeated manual intervention each time.",
            "I kept a structured quality-control step before every publish. AI translates fast, but it also makes mistakes that a simple review catches before they reach a customer.",
          ],
        },
        {
          title: "What this project taught me about AI in production",
          paragraphs: [
            "The real value of AI here wasn't the translation quality itself, but removing the repetitive manual work for every new language. Automating a whole process, not just an isolated task, is what lets a business grow without scaling its team at the same rate.",
            "That's also the lesson I now apply to other projects: before adding AI anywhere, I first ask what complete process it needs to replace — not just what single task it can speed up.",
          ],
        },
      ],
      published: true,
    },
  ],
  ar: [
    {
      slug: "5-erreurs-ux-dubai",
      title: "5 أخطاء في تجربة المستخدم أراها في كل موقع شركة تقريبًا في دبي",
      category: "تجربة المستخدم",
      excerpt:
        "أنماط تتكرر من موقع إلى آخر، في كل القطاعات — وتكلّف الشركات عملاء دون أن يلاحظ أحد ذلك.",
      coverImage: "/blog/ux-erreurs-dubai.svg",
      date: "2026-08-10",
      sections: [
        {
          title: "الموقع موجود، لكنه لا يبيع شيئًا",
          paragraphs: [
            "معظم مواقع الشركات التي أراجعها بُنيت لكي توجد، لا لكي تحوّل الزوار إلى عملاء. تسرد الخدمات وتعرض شعارًا أنيقًا، لكنها لا تحكي أي قصة ولا توجّه أحدًا نحو إجراء محدد.",
            "النتيجة: يصل الزائر، يفهم بشكل غامض ما تقدّمه الشركة، ويغادر دون أن يقتنع بفعل أي شيء. الموقع يؤدي دور بطاقة العمل الرقمية، لا أداة تحويل حقيقية.",
          ],
        },
        {
          title: "الدليل الاجتماعي غير مرئي أو في مكان خاطئ",
          paragraphs: [
            "تقريبًا كل شركة راجعتها تملك تقييمات جيدة في مكان ما — على جوجل، على وسائل التواصل، في رسائل شكر من العملاء. لكن على الموقع نفسه، يكون هذا الدليل الاجتماعي غائبًا أو مدفونًا في أسفل الصفحة، بعد أن يكون الزائر قد قرر المغادرة بالفعل.",
            "تُبنى الثقة في أول عشر ثوانٍ. إذا كانت أقوى حججك — عملاء راضون — لا تظهر إلا بعد ثلاث عمليات تمرير، فهي عمليًا بلا فائدة.",
          ],
        },
        {
          title: "تجربة الجوال مجرد نسخة مصغّرة من سطح المكتب",
          paragraphs: [
            "كثير من المواقع 'متجاوبة' من الناحية التقنية — لا شيء ينكسر بصريًا على الجوال — لكنها لا تزال مصممة لشاشة عريضة. تتكدس الأقسام، ويتحول النص إلى جدار، وتضيع الإجراءات المهمة أثناء التمرير.",
            "في سوق مثل دبي، حيث تأتي حصة كبيرة من الزيارات من الجوال، هذا ليس تفصيلاً بسيطًا. غالبًا ما يعيش أغلب الزوار تجربة من الدرجة الثانية.",
          ],
        },
        {
          title: "زر الدعوة الرئيسي يغرق بين عشرة أزرار أخرى",
          paragraphs: [
            "الزائر الذي يرى 'تواصل معنا' و'اعرف المزيد' و'خدماتنا' و'اطلب عرض سعر' و'اشترك في النشرة' على نفس الشاشة لم يعد يعرف أيها يختار. والزائر المتردد لا ينقر عادةً على شيء.",
            "يجب أن يكون لكل صفحة إجراء واحد ذو أولوية، بارز بصريًا. يمكن للروابط الأخرى أن تبقى، لكن في مرتبة ثانوية.",
          ],
        },
        {
          title: "لم يقس أحد ما يعيق التحويل فعلاً",
          paragraphs: [
            "الخطأ الأخير، والأكثر شيوعًا، هو تغيير الأشياء 'لأنها تبدو أفضل' دون تحديد نقطة الاحتكاك الحقيقية أبدًا. يُعاد تصميم الموقع بالكامل بينما كانت المشكلة استمارة واحدة سيئة الموضع.",
            "لهذا بالضبط أبدأ دائمًا بمراجعة قبل اقتراح أي شيء: فهم أين يتوقف الزوار، قبل تحديد ما يجب تغييره.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "audit-ou-refonte",
      title: "تدقيق تجربة المستخدم أم إعادة تصميم كاملة: كيف تعرف ما يحتاجه منتجك فعلاً",
      category: "تجربة المستخدم",
      excerpt:
        "السؤال الذي يطرحه تقريبًا كل عميل قبل التواصل معي — وقاعدة بسيطة للإجابة عنه بنفسك.",
      coverImage: "/blog/audit-ou-refonte.svg",
      date: "2026-08-14",
      sections: [
        {
          title: "ردة الفعل الخاطئة: هدم كل شيء لإعادة البناء",
          paragraphs: [
            "عندما لا يحوّل الموقع جيدًا، ردة الفعل الطبيعية هي إعادة كل شيء: تصميم جديد، بنية جديدة، نبرة جديدة. هذا يبدو مطمئنًا، وكأنك تبدأ من أساس متين.",
            "لكن في معظم الحالات التي رأيتها، تعالج إعادة التصميم الكاملة أعراضًا كان تعديل بسيط كافيًا لإصلاحها — وتتخلص في الطريق من كل ما كان يعمل بالفعل.",
          ],
        },
        {
          title: "ما يمكن أن يكشفه التدقيق ولم تكن تراه",
          paragraphs: [
            "لا يكتفي تدقيق تجربة المستخدم بالقول 'هذا جميل' أو 'هذا ليس جميلاً'. إنه يحدد بدقة أين يتردد الزوار، وأين يتخلون، ولماذا. غالبًا لا تكون المشكلة بصرية: مسار مربك، دليل اجتماعي غير مستغل، أو دعوة للعمل مدفونة في الصفحة.",
            "في حالة EasyFitness UAE مثلاً، أظهر التدقيق أن الأساس كان متينًا بالفعل — الكسب الحقيقي كان في ترتيب المعلومات ومسار الاشتراك، لا في تصميم جديد.",
          ],
        },
        {
          title: "متى تكون إعادة التصميم الكاملة مبررة فعلاً",
          paragraphs: [
            "هناك حالات لا يكفي فيها التدقيق وحده: عندما يتغير موقع الشركة في السوق، عندما تكون البنية التقنية قديمة جدًا لتتطور، أو عندما يحتاج المنتج فعليًا إلى جمهور مختلف تمامًا. في هذه الحالات، تأجيل إعادة التصميم يكلّف أكثر من القيام بها.",
          ],
        },
        {
          title: "قاعدتي البسيطة للحسم",
          paragraphs: [
            "إذا كنت قادرًا على تسمية ما لا يعمل بدقة في موقعك الحالي، فأنت على الأرجح بحاجة إلى تدقيق، لا إعادة تصميم. إذا لم تعد تعرف حتى لمن يتوجه الموقع أو ما الذي يجب أن يحققه، فهذه علامة على ضرورة البدء من جديد.",
            "عند الشك، أنصح دائمًا بالبدء بالتدقيق: تكلفته أقل، ووقته أقصر، وهو من سيخبرك إن كانت إعادة التصميم ضرورية فعلاً.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "concept-code-avant-refonte",
      title: "لماذا أقترح دائمًا مفهومًا مبرمجًا قبل إعادة تصميم كاملة",
      category: "تصميم المنتج",
      excerpt:
        "يمكن مناقشة نموذج ثابت إلى ما لا نهاية. أما مفهوم يعمل في متصفح حقيقي فيُحكم عليه خلال دقائق.",
      coverImage: "/blog/concept-avant-refonte.svg",
      date: "2026-08-18",
      sections: [
        {
          title: "النموذج يُناقش. المفهوم العامل يُحكم عليه",
          paragraphs: [
            "يترك النموذج الثابت دائمًا مجالاً للتأويل: 'هل سيكون فعلاً هكذا؟'، 'كيف يتفاعل مع التمرير؟'، 'وعلى الجوال؟'. هذه الأسئلة تؤخر القرار وتضعف التغذية الراجعة التي نحصل عليها.",
            "مفهوم مبرمج، حتى لو كان بسيطًا، يجيب عن هذه الأسئلة فورًا. تنقر، تمرر، تجربه على هاتفك الخاص. تصبح التغذية الراجعة ملموسة: 'هذا يعمل'، 'هذا لا يعمل' — بدلاً من انطباع غامض.",
          ],
        },
        {
          title: "يفرض حسم المشاكل الحقيقية، لا الألوان فقط",
          paragraphs: [
            "برمجة مفهوم تفرض قرارات يسمح النموذج بتجنبها: كيف يتصرف القائمة فعليًا على شاشة صغيرة، ماذا يحدث عندما يكون المحتوى أطول من المتوقع، كيف ينتقل المسار من شاشة إلى أخرى.",
            "في هذه التفاصيل بالضبط، لا في اختيار لون، تُحسم غالبية تجربة المستخدم.",
          ],
        },
        {
          title: "يمنح مقارنة قبل/بعد ملموسة لعرضها على فريق",
          paragraphs: [
            "عرض الموقع الحالي بجانب مفهوم عامل، مفتوحين في تبويبين، يقنع أسرع بكثير من تقرير توصيات. هذا هو النهج الذي اتبعته مع EasyFitness UAE: ثماني توصيات مكتوبة، إضافة إلى مفهوم مبرمج يمكن للفريق التجول فيه فعليًا.",
          ],
        },
        {
          title: "الحد: إنه ليس المنتج النهائي بعد",
          paragraphs: [
            "المفهوم ليس نسخة إنتاجية — لا يملك دائمًا الواجهة الخلفية أو الحالات الاستثنائية أو التحسينات التي يملكها موقع حقيقي. دوره هو التحقق من اتجاه معين قبل الاستثمار في البناء الكامل، لا أن يحل محله.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "multilingue-rtl-product-thinking",
      title: "ماذا علّمتني إدارة الفرنسية/الإنجليزية/العربية (مع RTL) في موقعي عن التفكير المنتجي",
      category: "تصميم المنتج",
      excerpt:
        "إضافة العربية إلى موقع ثلاثي اللغة لا تقتصر على ترجمة الكلمات — إنها تفرض إعادة النظر في افتراضات لم تكن تعلم أنك تحملها.",
      coverImage: "/blog/multilingue-rtl.svg",
      date: "2026-08-21",
      sections: [
        {
          title: "الترجمة ليست مجرد تغيير الكلمات",
          paragraphs: [
            "أثناء بناء النسخة العربية من موقعي الشخصي، أدركت بسرعة أن الترجمة لم تكن سوى الجزء الظاهر من العمل. تتغير أطوال النصوص، ولا تملك بعض الصياغات مقابلاً مباشرًا، والنبرة غير الرسمية بالفرنسية لا تُنقل تلقائيًا إلى العربية.",
          ],
        },
        {
          title: "اتجاه RTL يكشف كل الافتراضات الخفية في التصميم",
          paragraphs: [
            "تحويل موقع إلى اتجاه RTL (من اليمين إلى اليسار) هو أصدق اختبار يمكن أن يخضع له أي تصميم. كل هامش يسار، كل أيقونة سهم، كل محاذاة نص مكتوبة بشكل ثابت تصبح خللاً مرئيًا فورًا.",
            "هذا أجبرني على استخدام خصائص CSS منطقية بدلاً من الفيزيائية ('البداية'/'النهاية' بدلاً من 'اليسار'/'اليمين') في كامل الموقع — انضباط لم أكن لأتبناه على الأرجح لولا الحاجة إلى تسليم نسخة RTL حقيقية.",
          ],
        },
        {
          title: "ما غيّره هذا في طريقة تصميمي، حتى للمواقع أحادية اللغة",
          paragraphs: [
            "منذ هذا المشروع، أصمم بشكل مختلف حتى المواقع أحادية اللغة: أنطلق من افتراض أن الواجهة يجب أن تصمد دون الاعتماد على اتجاه قراءة أو طول نص محددين. هذا النوع من الصرامة هو ما يتجنب المفاجآت السيئة عندما يطلب عميل، بعد ستة أشهر، إضافة لغة جديدة.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "mobile-first-konekta",
      title: "الجوال أولاً لا يعني 'متجاوب فقط': ما تعلمته من بناء Konekta",
      category: "Flutter",
      excerpt:
        "التصميم المتجاوب يعيد تنسيق تصميم موجود لشاشة أصغر. أما الجوال أولاً فيفرض إعادة التفكير في ترتيب الأولويات منذ البداية.",
      coverImage: "/blog/mobile-first-konekta.svg",
      date: "2026-08-24",
      sections: [
        {
          title: "التجاوب إعادة تنسيق. الجوال أولاً إعادة تفكير",
          paragraphs: [
            "غالبًا ما ينطلق التصميم المتجاوب من نسخة لسطح المكتب يتم تكييفها لاحقًا مع شاشة أصغر: تتكدس الأعمدة، تصغر الهوامش، تُخفى بعض العناصر. النتيجة تعمل، لكنها تبقى تكيّفًا، لا تصميمًا أصليًا.",
            "بناء Konekta بمنطق الجوال أولاً أجبرني على عكس ترتيب العمل بالكامل: التصميم أولاً لأصغر شاشة، بأقل مساحة وأقل انتباه متاح، ثم الإثراء التدريجي للشاشات الأكبر.",
          ],
        },
        {
          title: "ما أجبرني Konekta على إعادة التفكير فيه أولاً",
          paragraphs: [
            "Konekta منصة تربط الشركات الأفريقية بعملائها — سياق يتصفح فيه جزء كبير من المستخدمين حصريًا عبر الجوال، أحيانًا باتصال غير مستقر. هذا غيّر أولوياتي: أصبحت سرعة التحميل، ووضوح مسار شراء واحد، وتحمّل أخطاء الشبكة أهم من أي تفصيل بصري.",
          ],
        },
        {
          title: "فخ 'سنكيّفه للجوال لاحقًا'",
          paragraphs: [
            "هذه هي الجملة التي أسمعها الأكثر، وهي دائمًا تقريبًا رهان خاسر. تكييف مسار مصمم لسطح المكتب يعني إزالة العناصر واحدًا تلو الآخر حتى يتناسب مع الشاشة — لا الوصول أبدًا إلى النسخة الأوضح الممكنة.",
            "تصميم الجوال أولاً منذ البداية يكلّف أكثر مسبقًا، لكنه يتجنب عملية التفكيك هذه، ويمنح عمومًا تجربة أفضل على كل الشاشات، لا أصغرها فقط.",
          ],
        },
      ],
      published: true,
    },
    {
      slug: "pipeline-traduction-igc",
      title: "أتمتة مسار ترجمة فيديو بالذكاء الاصطناعي: دروس من مشروع IGC",
      category: "الأتمتة",
      excerpt:
        "ترجمة فيديوهات التدريب يدويًا لم تستطع مواكبة توسع IGC نحو أسواق جديدة. إليك كيف بنيت مسارًا آليًا — وأين أبقيت الإنسان في الحلقة.",
      coverImage: "/blog/pipeline-traduction-igc.svg",
      date: "2026-08-27",
      sections: [
        {
          title: "المشكلة: الترجمة اليدوية لا تتوسع",
          paragraphs: [
            "IGC منصة تعليم للتداول عبر الإنترنت. في الأصل، كان كل سوق دولي جديد يعني ترجمة كل فيديو تدريبي يدويًا — عمل بطيء ومكلف، ويستحيل تكراره مع كل لغة جديدة دون إعادة العملية بأكملها من الصفر.",
          ],
        },
        {
          title: "الأتمتة، مع الحفاظ على مراقبة جودة حقيقية",
          paragraphs: [
            "الجزء السهل من هذا المشروع كان ربط خدمة ترجمة مدعومة بالذكاء الاصطناعي. الجزء الصعب كان بناء مسار قابل لإعادة الاستخدام — لا سكربت لمرة واحدة — قادر على معالجة أي فيديو جديد وأي لغة مستهدفة جديدة دون تدخل يدوي متكرر في كل مرة.",
            "حافظت على خطوة مراقبة جودة منظمة قبل كل نشر. الذكاء الاصطناعي يترجم بسرعة، لكنه أيضًا يرتكب أخطاء يمكن لمراجعة بسيطة رصدها قبل أن تصل إلى عميل.",
          ],
        },
        {
          title: "ما علّمني إياه هذا المشروع عن الذكاء الاصطناعي في الإنتاج",
          paragraphs: [
            "القيمة الحقيقية للذكاء الاصطناعي هنا لم تكن جودة الترجمة بحد ذاتها، بل إزالة العمل اليدوي المتكرر مع كل لغة جديدة. أتمتة عملية كاملة، لا مهمة معزولة فقط، هي ما يتيح لشركة أن تنمو دون مضاعفة فريقها بالوتيرة نفسها.",
            "هذا أيضًا الدرس الذي أطبقه الآن على مشاريع أخرى: قبل إضافة الذكاء الاصطناعي في أي مكان، أسأل أولاً عن العملية الكاملة التي يجب أن يستبدلها — لا فقط المهمة الواحدة التي يمكنه تسريعها.",
          ],
        },
      ],
      published: true,
    },
  ],
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return blogPostsByLocale[locale].filter((post) => post.published !== false);
}
