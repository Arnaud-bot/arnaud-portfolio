import type { Testimonial, ProcessStep } from "@/types/content";

export const testimonials: Testimonial[] = [
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
];

export const processSteps: ProcessStep[] = [
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
];
