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

export type Breakdown = {
  slug: string;
  title: string;
  category: string;
  uxScore: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};
