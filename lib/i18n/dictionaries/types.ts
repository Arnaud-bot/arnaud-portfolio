export type Dictionary = {
  constructionBanner: { message: string; dismiss: string };
  meta: {
    home: { title: string; description: string; ogDescription: string };
    about: { title: string; description: string };
    services: { title: string; description: string };
    contact: { title: string; description: string };
    work: { title: string; description: string };
    blog: { title: string; description: string };
    breakdowns: { title: string; description: string };
    lab: { title: string; description: string };
  };
  nav: {
    work: string;
    lab: string;
    breakdowns: string;
    services: string;
    about: string;
    blog: string;
    letsTalk: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    viewMyWork: string;
    letsTalk: string;
    availableBadge: string;
  };
  trustBar: { quote: string; author: string };
  valueProposition: {
    eyebrow: string;
    title: string;
    description: string;
    points: { title: string; description: string }[];
  };
  homeServices: { eyebrow: string; title: string; description: string };
  featuredCaseStudies: {
    eyebrow: string;
    title: string;
    description: string;
    seeCaseStudy: string;
  };
  breakdownsTeaser: {
    eyebrow: string;
    title: string;
    description: string;
    readAnalysis: string;
    seeAll: string;
  };
  process: { eyebrow: string; title: string; description: string };
  techStack: { eyebrow: string; title: string };
  testimonialsSection: { eyebrow: string; title: string };
  aboutTeaser: { eyebrow: string; title: string; body: string; cta: string };
  contactCta: { title: string; description: string; cta: string };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    rights: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    sections: { title: string; paragraphs: string[] }[];
  };
  servicesPage: { eyebrow: string; title: string; description: string };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    linkedin: string;
    github: string;
    instagram: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sentTitle: string;
      sentBody: string;
      nameError: string;
      emailError: string;
      messageError: string;
      sendError: string;
    };
  };
  workPage: {
    eyebrow: string;
    title: string;
    description: string;
    seeCaseStudy: string;
    beforeSite: string;
    afterSite: string;
    readPdf: string;
    chapters: {
      overview: string;
      challenge: string;
      approach: string;
      keyInsights: string;
      solution: string;
      outcome: string;
      lessonsLearned: string;
      technologies: string;
    };
  };
  blogPage: {
    eyebrow: string;
    title: string;
    description: string;
    relatedTitle: string;
  };
  labPage: {
    eyebrow: string;
    title: string;
    description: string;
    exploreDemo: string;
    conceptNote: string;
  };
  breakdownsPage: {
    eyebrow: string;
    title: string;
    description: string;
    readAnalysis: string;
    strengths: string;
    weaknesses: string;
    recommendations: string;
    beforeAfterPlaceholder: string;
    visitSite: string;
  };
};
