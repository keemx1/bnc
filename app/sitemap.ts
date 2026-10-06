import type { MetadataRoute } from "next";

const BASE = "https://bnc.co.ke";

/** XML sitemap — clean crawlable URLs (no .html extensions). */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/home-internet",
    "/business-internet",
    "/wholesale-bandwidth",
    "/cctv-security",
    "/coverage",
    "/about",
    "/support",
    "/contact",
    "/faq",
    "/blog",
  ];
  return routes.map((r) => ({
    url: `${BASE}${r === "/" ? "" : r}`,
    lastModified: new Date(),
    changeFrequency: r === "/" ? "weekly" : "monthly",
    priority: r === "/" ? 1 : r === "/home-internet" || r === "/wholesale-bandwidth" ? 0.9 : 0.7,
  }));
}
