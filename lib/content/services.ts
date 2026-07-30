import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "ux-audit",
    title: "UX Audit",
    description:
      "J'analyse ton produit existant pour identifier les frictions qui coûtent des conversions et des utilisateurs.",
    icon: "SearchCheck",
  },
  {
    slug: "ui-redesign",
    title: "UI/UX Redesign",
    description:
      "Je repense l'interface pour qu'elle soit à la hauteur de la qualité de ce que tu construis.",
    icon: "PenTool",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Sites et applications web rapides, accessibles et construits pour durer, avec React et Next.js.",
    icon: "Code2",
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    description:
      "Applications mobiles natives ou cross-platform avec Flutter, pensées produit avant d'être pensées code.",
    icon: "Smartphone",
  },
  {
    slug: "product-strategy",
    title: "Product Strategy",
    description:
      "Je t'aide à prioriser ce qui compte vraiment pour ton produit avant d'écrire la moindre ligne de code.",
    icon: "Compass",
  },
  {
    slug: "conversion-optimization",
    title: "Conversion Optimization",
    description:
      "J'identifie et je corrige les points de friction qui empêchent tes visiteurs de devenir des clients.",
    icon: "TrendingUp",
  },
];
