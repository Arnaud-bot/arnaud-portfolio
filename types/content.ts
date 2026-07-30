export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  problem: string;
  research: string;
  analysis: string;
  designDecisions: string;
  development: string;
  results: string;
  lessonsLearned: string;
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
