import type { MetadataRoute } from "next";

import { servicePages } from "./services/service-page-content";
import { skillPages } from "./skills/skill-page-content";

const BASE_URL = "https://growandclose.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/services/founder-led-content`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/skills`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const skillRoutes: MetadataRoute.Sitemap = Object.keys(skillPages).map((slug) => ({
    url: `${BASE_URL}/skills/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicePages).map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...skillRoutes];
}
