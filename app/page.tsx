import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ValueProposition } from "@/components/sections/value-proposition";
import { Services } from "@/components/sections/services";
import { FeaturedCaseStudies } from "@/components/sections/featured-case-studies";
import { BreakdownsTeaser } from "@/components/sections/breakdowns-teaser";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProposition />
      <Services />
      <FeaturedCaseStudies />
      <BreakdownsTeaser />
      <Process />
      <TechStack />
      <Testimonials />
      <AboutTeaser />
      <ContactCta />
    </>
  );
}
