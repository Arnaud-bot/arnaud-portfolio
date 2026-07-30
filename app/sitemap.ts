import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content/case-studies";
import { breakdowns } from "@/lib/content/breakdowns";
import { blogPosts } from "@/lib/content/blog";

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
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const workRoutes = caseStudies.map((study) => ({
    url: `${BASE_URL}/work/${study.slug}`,
    lastModified: new Date(),
  }));

  const breakdownRoutes = breakdowns.map((item) => ({
    url: `${BASE_URL}/breakdowns/${item.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...workRoutes, ...breakdownRoutes, ...blogRoutes];
}
