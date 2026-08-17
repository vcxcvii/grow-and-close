import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function luminance(hex) {
  const channels = hex
    .replace("#", "")
    .match(/../g)
    .map((value) => Number.parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(first, second) {
  const [lighter, darker] = [luminance(first), luminance(second)].sort(
    (a, b) => b - a,
  );
  return (lighter + 0.05) / (darker + 0.05);
}

async function render(requestUrl = "http://localhost/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(requestUrl, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("redirects www requests to the canonical apex domain", async () => {
  const response = await render("https://www.growandclose.com/services?ref=www");

  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get("location"),
    "https://growandclose.com/services?ref=www",
  );
});

test("redirects insecure http requests to https on the apex domain", async () => {
  const response = await render("http://growandclose.com/pricing?utm=x");

  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get("location"),
    "https://growandclose.com/pricing?utm=x",
  );
});

test("redirects insecure www requests straight to the https apex", async () => {
  const response = await render("http://www.growandclose.com/");

  assert.equal(response.status, 301);
  assert.equal(response.headers.get("location"), "https://growandclose.com/");
});

test("server-renders the Grow & Close landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>GTM Execution Studio for B2B SaaS \| Grow &amp; Close<\/title>/i);
  assert.match(html, /Your GTM plan, shipped/);
  assert.match(html, /data-brand-system="gc-logic-v1"/);
  assert.match(html, /GROW<\/b><b><i>&amp;<\/i> CLOSE/i);
  assert.match(html, /FOR FOUNDERS/);
  assert.match(html, /FOR CMOs/);
  assert.match(html, /FOR HEADS OF MARKETING/);
  assert.match(html, /Queue the priority/);
  assert.match(html, /Review, learn, repeat/);
  assert.match(html, /Pipeline One/);
  assert.match(html, /Pipeline Team/);
  assert.match(html, /Customer advocacy/);
  assert.match(html, /services\/founder-led-content/);
  assert.match(html, /services\/positioning-and-messaging/);
  assert.match(html, /services\/landing-pages/);
  assert.match(html, /services\/outbound-activation/);
  assert.match(html, /services\/aeo-and-data-stories/);
  assert.match(html, /services\/sales-enablement/);
  assert.match(html, /services\/campaign-strategy/);
  assert.match(html, /services\/gtm-dashboards/);
  assert.match(html, /services\/customer-advocacy/);
  assert.match(html, /Make buyers understand why you, now/);
  assert.match(html, /Pages that convert because the argument holds/);
  assert.match(html, /Catch customer wins\. Turn them into usable proof\./);
  assert.match(html, /Give us one GTM priority/);
  assert.match(html, /Get one GTM priority shipped free/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/disclaimer"/);
  assert.match(html, /hello@growandclose\.com/);
  assert.match(html, /cal\.com\/varun-choraria\/30min/);
  assert.match(html, /href="\/pricing"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, /href="\/privacy"/);
  assert.doesNotMatch(html, /target="_blank"[^>]*>\s*<span>0/);
  assert.equal((html.match(/href="mailto:[^"]*\?subject/g) ?? []).length, 0);
  assert.doesNotMatch(html, /—/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /#ff5c35|var\(--orange\)/i);
});

test("server-renders the founder-led content service page", async () => {
  const response = await render(
    "http://localhost/services/founder-led-content",
  );
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Turn founder insight into an audience/);
  assert.match(html, /Founder Signal System/);
  assert.match(html, /Most founder content/);
  assert.match(html, /Customers become the proof layer/i);
  assert.match(html, /A typical first 90 days/i);
  assert.match(html, /Founder Signal Map/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /fully autonomous/i);
  assert.doesNotMatch(html, /#ff7a00|Geist|Georgia|Times New Roman/i);
});

test("server-renders the services SEO pillar with nine in-tab spokes", async () => {
  const response = await render("http://localhost/services");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>B2B SaaS GTM Services \| Grow &amp; Close<\/title>/i);
  assert.match(html, /rel="canonical" href="https:\/\/growandclose\.com\/services"/i);
  assert.match(html, /Choose the bottleneck/);
  assert.match(html, /GTM problems do not respect departmental boundaries/);
  assert.match(html, /Not nine retainers/);
  assert.match(html, /Positioning &amp; messaging/);
  assert.match(html, /Founder-led content/);
  assert.match(html, /Customer advocacy/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);

  const serviceLinks = html.match(/href="\/services\/[^"]+"/g) ?? [];
  assert.ok(serviceLinks.length >= 9);
  assert.doesNotMatch(html, /href="\/services\/[^"]+"[^>]*target="_blank"/);
  assert.doesNotMatch(html, /#ff7a00|Geist|Georgia|Times New Roman/i);
});

test("server-renders the self-driving company manifesto with an honest autonomy ledger", async () => {
  const response = await render("http://localhost/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>About Grow &amp; Close \| The Self-Driving GTM Company<\/title>/i);
  assert.match(html, /A GTM company that learns to/);
  assert.match(html, /drive itself/);
  assert.match(html, /Self-driving does not mean human-free/);
  assert.match(html, /Minimum intervention is not zero responsibility/);
  assert.match(html, /A category claim should come with a truth table/);
  assert.match(html, /AGENT-RUN NOW/);
  assert.match(html, /HUMAN AUTHORITY/);
  assert.match(html, /NEXT AUTONOMY LAYER/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /#ff7a00|Geist|Georgia|Times New Roman/i);
});

test("server-renders a linked operational disclaimer", async () => {
  const response = await render("http://localhost/disclaimer");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Disclaimer \| Grow &amp; Close<\/title>/i);
  assert.match(html, /AI-assisted work/);
  assert.match(html, /does not guarantee/i);
  assert.match(html, /Client responsibility/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/services"/);
  assert.doesNotMatch(html, /#ff7a00|Geist|Georgia|Times New Roman/i);
});

test("server-renders every service system with a unique diagnostic", async () => {
  const services = [
    ["positioning-and-messaging", "Market Signal System", "Your product is different", "Message Gap Map"],
    ["landing-pages", "Page Learning System", "The page looks finished", "Page Argument Map"],
    ["outbound-activation", "Signal-to-Conversation System", "Cold outreach buyers answer", "Outbound Signal Map"],
    ["aeo-and-data-stories", "Citation Engine", "Own the answer buyers", "Answer-Ownership Map"],
    ["sales-enablement", "Deal Momentum System", "Your reps rebuild the pitch", "Deal Friction Map"],
    ["campaign-strategy", "Campaign Operating System", "One campaign idea, carried", "Campaign Architecture Map"],
    ["gtm-dashboards", "Decision Dashboard System", "Reporting that ends in a decision", "Measurement Gap Map"],
    ["customer-advocacy", "Customer Evidence System", "Customer wins happen every week", "Customer Evidence Map"],
  ];

  for (const [slug, , headline, diagnostic] of services) {
    const response = await render(`http://localhost/services/${slug}`);
    assert.equal(response.status, 200, slug);

    const html = await response.text();
    assert.match(html, new RegExp(headline, "i"), slug);
    assert.match(html, new RegExp(diagnostic, "i"), slug);
    assert.match(html, /WHAT COMPOUNDS/, slug);
    assert.match(html, /A TYPICAL FIRST 30 DAYS/, slug);
    assert.match(html, /GROW &amp; CLOSE OWNS/, slug);
    assert.match(html, /href="\/services"/, slug);
    assert.doesNotMatch(html, /#ff7a00|Geist|Georgia|Times New Roman/i, slug);
  }
});

test("brand colors preserve accessible text pairings", async () => {
  const [globals, header, founder, services, layout] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(
      new URL("../app/components/site-header.css", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL(
        "../app/services/founder-led-content/founder-led-content.css",
        import.meta.url,
      ),
      "utf8",
    ),
    readFile(new URL("../app/services/service-pages.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);
  const css = `${globals}\n${header}\n${founder}\n${services}`;

  assert.match(globals, /--ink:\s*#090a0c/);
  assert.match(globals, /--paper:\s*#f6f7fb/);
  assert.match(globals, /--electric:\s*#0b4fe8/);
  assert.match(layout, /IBM_Plex_Sans/);
  assert.match(layout, /IBM_Plex_Mono/);
  assert.match(globals, /@import "\.\/components\/site-header\.css"/);
  assert.match(
    globals,
    /@import "\.\/services\/founder-led-content\/founder-led-content\.css"/,
  );
  assert.match(globals, /@import "\.\/services\/service-pages\.css"/);
  assert.ok(
    globals.split("\n").length < 2000,
    "globals.css should stay a compact authority stylesheet, not absorb legacy service CSS",
  );
  assert.doesNotMatch(
    `${css}\n${layout}`,
    /#dfff4f|#ff7a00|var\(--acid\)|var\(--signal\)|--signal|Geist|Georgia|Times New Roman/i,
  );
  assert.ok(contrastRatio("#ffffff", "#0b4fe8") >= 4.5);
  assert.ok(contrastRatio("#0b4fe8", "#f6f7fb") >= 4.5);
  assert.ok(contrastRatio("#565b66", "#f6f7fb") >= 4.5);
  assert.ok(contrastRatio("#8aabff", "#090a0c") >= 4.5);
  assert.match(css, /\.closing \.button\s*\{[^}]*color: white;/s);
});

test("service copy stays specific, governed, and free of stale brand rules", async () => {
  const content = await readFile(
    new URL("../app/services/service-page-content.ts", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(content, /—/);
  assert.doesNotMatch(content, /#ff7a00|Geist|Georgia|Times New Roman|--signal/i);
  assert.doesNotMatch(content, /10x output|growth hacking machine|unlimited requests/i);
  assert.match(content, /human approval/i);
  assert.match(content, /consent/i);
  assert.match(content, /stop condition/i);
});

test("service heroes cap wide-screen typography against viewport height", async () => {
  const css = await readFile(
    new URL("../app/services/service-pages.css", import.meta.url),
    "utf8",
  );

  assert.match(css, /\.hero\.system-service-hero,\s*\.hero\.founder-hero/);
  assert.match(css, /min-height:\s*calc\(100svh - 78px\)/);
  assert.match(
    css,
    /font-size:\s*clamp\(52px, min\(5\.4vw, 9vh\), 100px\)/,
  );
  assert.doesNotMatch(css, /\.hero\.system-service-hero[^}]*overflow:\s*hidden/s);
});

test("navigation disclosures close predictably and keep mobile priorities explicit", async () => {
  const [header, css] = await Promise.all([
    readFile(new URL("../app/components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site-header.css", import.meta.url), "utf8"),
  ]);

  assert.match(header, /const \[navOpen, setNavOpen\]/);
  assert.match(header, /const \[servicesOpen, setServicesOpen\]/);
  assert.match(header, /document\.addEventListener\("pointerdown", closeWhenOutside\)/);
  assert.match(header, /event\.key === "Escape"/);
  assert.match(header, /aria-label=\{navOpen \? "Close navigation" : "Open navigation"\}/);
  assert.ok(header.indexOf('href="/about"') < header.indexOf('className="services-menu"'));
  assert.match(css, /\.services-home-link\s*\{[^}]*font-size:\s*12px[^}]*min-height:\s*52px/s);
  assert.match(css, /\.menu-toggle\s*\{[^}]*min-height:\s*44px[^}]*min-width:\s*44px/s);
});

test("brand system ships deterministic reusable assets", async () => {
  const [andGlyph, orGlyph, shipGlyph, logicSystem, favicon] = await Promise.all([
    readFile(new URL("../public/brand/logic-and.svg", import.meta.url), "utf8"),
    readFile(new URL("../public/brand/logic-or.svg", import.meta.url), "utf8"),
    readFile(new URL("../public/brand/logic-ship.svg", import.meta.url), "utf8"),
    readFile(new URL("../public/brand/logic-system.svg", import.meta.url), "utf8"),
    readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
  ]);

  for (const asset of [andGlyph, orGlyph, shipGlyph, logicSystem, favicon]) {
    assert.match(asset, /#0b4fe8/i);
    assert.doesNotMatch(asset, /#ff7a00|#dfff4f/i);
  }

  assert.match(favicon, /<rect[^>]+fill="#0b4fe8"/i);
  assert.match(favicon, /id="g"[^>]+fill="#ffffff"/i);
  assert.match(favicon, /id="slash"[^>]+fill="#090a0c"/i);
  assert.match(favicon, /id="c"[^>]+fill="#ffffff"/i);
});

test("deployment keeps its direct Worker fallback available", async () => {
  const config = await readFile(new URL("../vite.config.ts", import.meta.url), "utf8");

  assert.match(config, /workers_dev: true/);
});

test("navigation keeps visitors in one tab and routes them to the calendar", async () => {
  const [header, homepage, services, footer] = await Promise.all([
    readFile(new URL("../app/components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/services/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site-footer.tsx", import.meta.url), "utf8"),
  ]);

  for (const source of [header, homepage, services]) {
    assert.doesNotMatch(source, /target="_blank"/);
  }

  // The footer may open external profiles in a new tab, never internal routes.
  assert.doesNotMatch(footer, /href=\{service\.href\}[^>]*target="_blank"/s);

  const site = await readFile(new URL("../app/site.ts", import.meta.url), "utf8");
  assert.match(site, /cal\.com\/varun-choraria\/30min/);
  assert.doesNotMatch(homepage, /mailto:[^"]*\?subject/);
});

test("server-renders the pricing page with plans, schema, and one booking path", async () => {
  const response = await render("http://localhost/pricing");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Pricing \| GTM Execution for B2B SaaS \| Grow &amp; Close<\/title>/i);
  assert.match(html, /rel="canonical" href="https:\/\/growandclose\.com\/pricing"/i);
  assert.match(html, /GTM RESET/);
  assert.match(html, /\$3,000/);
  assert.match(html, /\$3,500/);
  assert.match(html, /\$7,000/);
  assert.match(html, /FAQPage/);
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /cal\.com\/varun-choraria\/30min/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /—/);
});

test("server-renders the contact page with a calendar, an email, and a free option", async () => {
  const response = await render("http://localhost/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Contact \| Grow &amp; Close<\/title>/i);
  assert.match(html, /cal\.com\/varun-choraria\/30min/);
  assert.match(html, /hello@growandclose\.com/);
  assert.match(html, /ContactPage/);
  assert.match(html, /href="\/skills"/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /—/);
});

test("server-renders privacy and terms before any email capture runs", async () => {
  for (const [path, title] of [
    ["/privacy", "Privacy"],
    ["/terms", "Terms"],
  ]) {
    const response = await render(`http://localhost${path}`);
    assert.equal(response.status, 200, path);

    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title} \\| Grow &amp; Close</title>`, "i"), path);
    assert.match(html, /LAST UPDATED/, path);
    assert.match(html, /hello@growandclose\.com/, path);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, path);
    assert.doesNotMatch(html, /—/, path);
  }
});

test("the sitemap publishes real modification dates and the new routes", async () => {
  const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

  assert.doesNotMatch(sitemap, /lastModified:\s*now/);
  assert.doesNotMatch(sitemap, /const now = new Date\(\)/);
  for (const route of ["/pricing", "/contact", "/privacy", "/terms"]) {
    assert.ok(sitemap.includes(`${route}\``) || sitemap.includes(route), route);
  }
});
