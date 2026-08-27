import type { BlogPost } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

const blogPostsByLocale: Record<Locale, BlogPost[]> = {
  fr: [
    {
      slug: "premier-article",
      title: "[Titre de l'article]",
      category: "UX",
      excerpt: "[Résumé court de l'article en une phrase.]",
      content: "[Contenu de l'article à rédiger.]",
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "deuxieme-article",
      title: "[Titre de l'article]",
      category: "Product Design",
      excerpt: "[Résumé court de l'article en une phrase.]",
      content: "[Contenu de l'article à rédiger.]",
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "troisieme-article",
      title: "[Titre de l'article]",
      category: "Flutter",
      excerpt: "[Résumé court de l'article en une phrase.]",
      content: "[Contenu de l'article à rédiger.]",
      date: "2026-07-29",
      published: false,
    },
  ],
  en: [
    {
      slug: "premier-article",
      title: "[Article title]",
      category: "UX",
      excerpt: "[Short one-sentence summary of the article.]",
      content: "[Article content to be written.]",
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "deuxieme-article",
      title: "[Article title]",
      category: "Product Design",
      excerpt: "[Short one-sentence summary of the article.]",
      content: "[Article content to be written.]",
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "troisieme-article",
      title: "[Article title]",
      category: "Flutter",
      excerpt: "[Short one-sentence summary of the article.]",
      content: "[Article content to be written.]",
      date: "2026-07-29",
      published: false,
    },
  ],
  ar: [
    {
      slug: "premier-article",
      title: "[عنوان المقال]",
      category: "تجربة المستخدم",
      excerpt: "[ملخص قصير للمقال في جملة واحدة.]",
      content: "[محتوى المقال بانتظار الكتابة.]",
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "deuxieme-article",
      title: "[عنوان المقال]",
      category: "تصميم المنتج",
      excerpt: "[ملخص قصير للمقال في جملة واحدة.]",
      content: "[محتوى المقال بانتظار الكتابة.]",
      date: "2026-07-29",
      published: false,
    },
    {
      slug: "troisieme-article",
      title: "[عنوان المقال]",
      category: "Flutter",
      excerpt: "[ملخص قصير للمقال في جملة واحدة.]",
      content: "[محتوى المقال بانتظار الكتابة.]",
      date: "2026-07-29",
      published: false,
    },
  ],
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return blogPostsByLocale[locale].filter((post) => post.published !== false);
}
