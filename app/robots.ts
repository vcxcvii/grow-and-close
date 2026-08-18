import type { MetadataRoute } from "next";

import { SITE_URL } from "./site";

/**
 * Crawlers refused outright. These four are the ones with no surface this site
 * can ever be cited on: CCBot feeds Common Crawl and every scraper downstream of
 * it, Bytespider is ByteDance, and Amazonbot and meta-externalagent return
 * nothing pointable. Every other AI crawler is deliberately allowed, including
 * the training crawlers GPTBot and ClaudeBot, because the frameworks are already
 * public at github.com/vcxcvii/pipeline-skills and the association between the
 * method and this name is worth more than withholding the text.
 *
 * This policy used to live in a Cloudflare dashboard toggle (Security Settings,
 * Bot traffic, "set your preference to block training in robots.txt") which
 * injected a managed block disallowing nine crawlers and declaring
 * `ai-train=no`. That contradicted the point of the site, and the toggle could
 * not be edited per crawler, only switched on or off. It is off. The policy
 * lives here instead, where a diff can show it changing.
 */
const REFUSED_CRAWLERS = [
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...REFUSED_CRAWLERS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
