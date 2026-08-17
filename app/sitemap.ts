import type { MetadataRoute } from "next";

import { servicePages } from "./services/service-page-content";
import { SITE_URL } from "./site";
import { skillPages } from "./skills/skill-page-content";

/**
 * Real modification dates. A render-time `new Date()` marks every URL as changed
 * today on every crawl, which is a false freshness signal and gets discounted.
 * Update the entry when the page content actually changes.
 */
const LAST_MODIFIED: Record<string, string> = {
  "/": "2026-08-17",
  "/services": "2026-08-17",
  "/pricing": "2026-08-17",
  "/contact": "2026-08-17",
  "/skills": "2026-08-17",
  "/about": "2026-07-17",
  "/disclaimer": "2026-07-17",
  "/privacy": "2026-08-17",
  "/terms": "2026-08-17",
};

const SERVICE_LAST_MODIFIED = "2026-08-17";
const SKILL_LAST_MODIFIED = "2026-07-17";

function lastModified(path: string, fallback: string) {
  return new Date(LAST_MODIFIED[path] ?? fallback);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: lastModified("/", "2026-08-17"), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: lastModified("/services", "2026-08-17"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: lastModified("/pricing", "2026-08-17"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/skills`, lastModified: lastModified("/skills", "2026-08-17"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: lastModified("/contact", "2026-08-17"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: lastModified("/about", "2026-07-17"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: lastModified("/privacy", "2026-08-17"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: lastModified("/terms", "2026-08-17"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/disclaimer`, lastModified: lastModified("/disclaimer", "2026-07-17"), changeFrequency: "yearly", priority: 0.2 },
    // founder-led-content has its own route file, so it is not in servicePages
    { url: `${SITE_URL}/services/founder-led-content`, lastModified: new Date(SERVICE_LAST_MODIFIED), changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicePages).map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(SERVICE_LAST_MODIFIED),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const skillRoutes: MetadataRoute.Sitemap = Object.keys(skillPages).map((slug) => ({
    url: `${SITE_URL}/skills/${slug}`,
    lastModified: new Date(SKILL_LAST_MODIFIED),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...skillRoutes];
}
