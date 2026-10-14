import type { MetadataRoute } from "next";
import { siteUrl, navigation } from "@/data/site-config";
import { publicProjects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    ...navigation.map((n) => n.href),
    ...publicProjects.map((p) => `/projetos/${p.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
