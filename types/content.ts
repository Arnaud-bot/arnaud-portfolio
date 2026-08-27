export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export type CaseStudySection = {
  intro: string;
  points: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  client: string;
  category: string;
  thumbnail: string;
  demoEmbed?: string;
  beforeUrl?: string;
  afterUrl?: string;
  pdfUrl?: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: CaseStudySection;
  keyInsights: string[];
  solution: CaseStudySection;
  outcome: CaseStudySection;
  lessonsLearned: string;
  technologies: string[];
};

export type LabDemo = {
  slug: string;
  industry: string;
  title: string;
  tagline: string;
  liveUrl: string;
  thumbnail: string;
};

export type Breakdown = {
  slug: string;
  title: string;
  category: string;
  uxScore: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  /** Link to the real site being reviewed, when available. */
  siteUrl?: string;
  /** Set to false while the real content isn't written yet — hides it without deleting it. */
  published?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  /** Set to false while the real article isn't written yet — hides it without deleting it. */
  published?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Set to false while this isn't a real client quote yet — hides it without deleting it. */
  published?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};
