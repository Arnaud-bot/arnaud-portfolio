import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations/reveal";
import { getBlogPosts } from "@/lib/content/blog";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

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
  const dict = await getDictionary(lang);
  const allPosts = getBlogPosts(lang);
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = allPosts.filter((p) => p.slug !== slug);
  const related = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, 3);

  return (
    <>
      <Section
        align="center"
        narrow
        className="pt-16 pb-0 md:pt-12 md:pb-0 lg:pt-16 lg:pb-0"
      >
        <Badge variant="secondary" className="mx-auto w-fit">
          {post.category}
        </Badge>
        <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
          {post.title}
        </h1>
        <time className="mt-4 block text-sm text-muted-foreground">
          {post.date}
        </time>
      </Section>

      <Section narrow className="pt-10 pb-16 md:pt-10 md:pb-12 lg:pt-10 lg:pb-16">
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 720px, 100vw"
              priority
            />
          </div>
        </Reveal>
      </Section>

      <Section narrow className="pt-0 pb-0 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0">
        <div className="space-y-10">
          {post.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.04}>
              <div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="text-base leading-[1.7] text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="pt-0 pb-16 md:pt-0 md:pb-12 lg:pt-0 lg:pb-16">
          <h2 className="text-xl font-semibold">{dict.blogPage.relatedTitle}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${lang}/blog/${r.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-accent"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                  <Image
                    src={r.coverImage}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="secondary" className="w-fit">
                    {r.category}
                  </Badge>
                  <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
