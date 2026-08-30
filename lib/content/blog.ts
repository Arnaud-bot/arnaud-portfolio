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
      slug: "premier-article",
      title: "[Article title]",
      category: "UX",
      excerpt: "[Short one-sentence summary of the article.]",
      coverImage: "/blog/ux-erreurs-dubai.svg",
      sections: [{ title: "[Section title]", paragraphs: ["[Article content to be written.]"] }],
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "deuxieme-article",
      title: "[Article title]",
      category: "Product Design",
      excerpt: "[Short one-sentence summary of the article.]",
      coverImage: "/blog/audit-ou-refonte.svg",
      sections: [{ title: "[Section title]", paragraphs: ["[Article content to be written.]"] }],
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "troisieme-article",
      title: "[Article title]",
      category: "Flutter",
      excerpt: "[Short one-sentence summary of the article.]",
      coverImage: "/blog/mobile-first-konekta.svg",
      sections: [{ title: "[Section title]", paragraphs: ["[Article content to be written.]"] }],
      date: "2026-07-29",
      published: false,
    },
  ],
  ar: [
    {
      slug: "premier-article",
      title: "[عنوان المقال]",
      category: "تجربة المستخدم",
      excerpt: "[ملخص قصير للمقال في جملة واحدة.]",
      coverImage: "/blog/ux-erreurs-dubai.svg",
      sections: [{ title: "[عنوان القسم]", paragraphs: ["[محتوى المقال بانتظار الكتابة.]"] }],
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "deuxieme-article",
      title: "[عنوان المقال]",
      category: "تصميم المنتج",
      excerpt: "[ملخص قصير للمقال في جملة واحدة.]",
      coverImage: "/blog/audit-ou-refonte.svg",
      sections: [{ title: "[عنوان القسم]", paragraphs: ["[محتوى المقال بانتظار الكتابة.]"] }],
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "troisieme-article",
      title: "[عنوان المقال]",
      category: "Flutter",
      excerpt: "[ملخص قصير للمقال في جملة واحدة.]",
      coverImage: "/blog/mobile-first-konekta.svg",
      sections: [{ title: "[عنوان القسم]", paragraphs: ["[محتوى المقال بانتظار الكتابة.]"] }],
      date: "2026-07-29",
      published: false,
    },
  ],
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return blogPostsByLocale[locale].filter((post) => post.published !== false);
}
