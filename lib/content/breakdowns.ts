import type { Breakdown } from "@/types/content";

/**
 * Contenu placeholder — remplace par de vraies analyses de sites publics
 * (gym, restaurant, santé, immobilier, SaaS...) avant publication.
 */
export const breakdowns: Breakdown[] = [
  {
    slug: "breakdown-gym",
    title: "[Nom de la salle de sport] — Website Review",
    category: "Gym",
    uxScore: 6,
    summary:
      "[Résumé du problème UX principal identifié sur ce site de salle de sport.]",
    strengths: ["[Point fort 1]", "[Point fort 2]"],
    weaknesses: ["[Point faible 1]", "[Point faible 2]", "[Point faible 3]"],
    recommendations: ["[Recommandation 1]", "[Recommandation 2]"],
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
  },
  {
    slug: "breakdown-real-estate",
    title: "[Nom de l'agence] — Website Review",
    category: "Real Estate",
    uxScore: 4,
    summary: "[À compléter.]",
    strengths: ["[Point fort 1]"],
    weaknesses: ["[Point faible 1]", "[Point faible 2]", "[Point faible 3]"],
    recommendations: ["[Recommandation 1]", "[Recommandation 2]"],
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
  },
];
