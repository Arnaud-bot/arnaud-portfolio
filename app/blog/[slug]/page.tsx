import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { blogPosts } from "@/lib/content/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Arnaud Malanda`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Section align="center" narrow>
      <Badge variant="secondary" className="mx-auto w-fit">
        {post.category}
      </Badge>
      <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
        {post.title}
      </h1>
      <time className="mt-4 block text-sm text-muted-foreground">
        {post.date}
      </time>
      <p className="mx-auto mt-8 max-w-[600px] text-left text-base leading-[1.7] text-muted-foreground">
        {post.content}
      </p>
    </Section>
  );
}
