import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { getBlogPosts } from "@/lib/content/blog";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return getBlogPosts("fr").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const post = getBlogPosts(lang).find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Arnaud Malanda`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const post = getBlogPosts(lang).find((p) => p.slug === slug);
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
      <p className="mx-auto mt-8 max-w-[600px] text-left rtl:text-right text-base leading-[1.7] text-muted-foreground">
        {post.content}
      </p>
    </Section>
  );
}
