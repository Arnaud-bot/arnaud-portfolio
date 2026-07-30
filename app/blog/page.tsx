import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog — Arnaud Malanda",
  description: "UX, Product Design, Flutter, React, Case Studies, AI, Business, Development.",
};

export default function BlogPage() {
  return (
    <Section
      align="center"
      eyebrow="Blog"
      title="Articles"
      description="UX, product design, développement, et retours d'expérience."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex h-full flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:bg-accent"
            >
              <Badge variant="secondary" className="w-fit">
                {post.category}
              </Badge>
              <h2 className="mt-5 text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                {post.excerpt}
              </p>
              <time className="mt-6 text-xs text-muted-foreground">
                {post.date}
              </time>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
