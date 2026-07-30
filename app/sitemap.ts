import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { getCaseStudies } from "@/lib/content/case-studies";
import { getBreakdowns } from "@/lib/content/breakdowns";
import { getBlogPosts } from "@/lib/content/blog";

const BASE_URL = "https://arnaudmalanda.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/breakdowns",
    "/services",
    "/about",
    "/blog",
    "/contact",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
      });
    }

    for (const study of getCaseStudies(locale)) {
      entries.push({
        url: `${BASE_URL}/${locale}/work/${study.slug}`,
        lastModified: new Date(),
      });
    }

    for (const item of getBreakdowns(locale)) {
      entries.push({
        url: `${BASE_URL}/${locale}/breakdowns/${item.slug}`,
        lastModified: new Date(),
      });
    }

    for (const post of getBlogPosts(locale)) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
      });
    }
  }

  return entries;
}
