import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { getBlogPosts } from "@/lib/content/blog";
import { hasLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  return dict.meta.blog;
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const dict = await getDictionary(lang);
  const blogPosts = getBlogPosts(lang);

  return (
    <Section
      align="center"
      eyebrow={dict.blogPage.eyebrow}
      title={dict.blogPage.title}
      description={dict.blogPage.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 0.05}>
            <Link
              href={`/${lang}/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-accent"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
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
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
