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
  assert.match(html, /<title>Your GTM Backlog, Decided and Shipped \| B2B SaaS GTM Studio<\/title>/i);
  assert.match(html, /Your GTM backlog/);
  assert.match(html, /decided and shipped/);
  // The hero still resolves to the one metric every page is held to.
  assert.match(html, /qualified pipeline created/);
  assert.match(html, /data-brand-system="gc-logic-v1"/);
  assert.match(html, /GROW<\/b><b><i>&amp;<\/i> CLOSE/i);
  assert.match(html, /FOR FOUNDERS/);
  assert.match(html, /FOR CMOs/);
  assert.match(html, /FOR HEADS OF MARKETING/);
  assert.match(html, /Name every option/);
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
  assert.match(html, /Buyers cannot tell us apart/);
  assert.match(html, /Traffic arrives, nobody converts/);
  assert.match(html, /Deals stall after the demo/);
  assert.match(html, /We have wins, no usable proof/);
  assert.match(html, /Bring the decision you keep postponing\./);
  assert.match(html, /Book a call with the founder/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/disclaimer"/);
  assert.match(html, /hello@growandclose\.com/);
  assert.match(html, /href="\/book-a-call\?topic=/);
  assert.match(html, /href="\/pricing"/);
  assert.match(html, /href="\/privacy"/);
  // The locked position must be argued on the homepage, not only on /for/*.
  assert.match(html, /THE OLD WAY: BUY MORE PRODUCTION/);
  assert.match(html, /THE NEW WAY: BUY THE DECISION/);
  assert.match(html, /qualified pipeline created/i);
  assert.match(html, /href="\/llms\.txt"/);
  assert.match(html, /"@graph"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /href="\/for\/founders"/);
  assert.match(html, /href="\/for\/heads-of-marketing"/);
  assert.match(html, /href="\/for\/cmos"/);
  assert.match(html, /href="\/rubric"/);
  assert.match(html, /What counts as one motion\?/);
  assert.doesNotMatch(html, /no long contract/i);
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
  assert.match(html, /"@type":"BreadcrumbList".*services\/founder-led-content/);
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
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /"@type":"CollectionPage","name":"B2B SaaS GTM Services"/);
  assert.equal((html.match(/"@type":"Service"/g) ?? []).length, 9);
  assert.doesNotMatch(html, /#ff7a00|Geist|Georgia|Times New Roman/i);
});

test("server-renders the skills hub with a breadcrumb and a full collection schema", async () => {
  const response = await render("http://localhost/skills");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /"@type":"BreadcrumbList".*"name":"Skills"/);
  assert.match(html, /"@type":"CollectionPage"/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
});

test("server-renders the marketing manifesto, addressed to all four buyers", async () => {
  const response = await render("http://localhost/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Our B2B SaaS Marketing Manifesto \| Grow &amp; Close<\/title>/i);
  assert.match(html, /Everyone can produce/);
  assert.match(html, /Almost nobody decides/);
  assert.match(html, /Seven beliefs about B2B SaaS marketing/);

  // The manifesto is the spine of the page, so every belief has to render.
  assert.match(html, /Marketing is a decision function, not a production function/);
  assert.match(html, /One motion finished beats five motions started/);
  assert.match(html, /Sameness is what good tools produce by default/);
  assert.match(html, /AI belongs at the keystroke\. Humans belong at the decision/);
  assert.match(html, /Minimum intervention is not zero responsibility/);

  // Relatable to all four personas means all four are named and linked.
  assert.match(html, /href="\/for\/founders"/);
  assert.match(html, /href="\/for\/heads-of-marketing"/);
  assert.match(html, /href="\/for\/cmos"/);
  assert.match(html, /href="\/for\/agencies"/);

  // The honest ledger keeps the parts that cost deals.
  assert.match(html, /WHAT WE WILL NOT SELL YOU/);
  assert.match(html, /qualified pipeline created/i);

  // The founder photo links out to the personal site everywhere it appears.
  assert.match(html, /varunchoraria\.com/);

  assert.match(html, /"@type":"BreadcrumbList".*"name":"About"/);
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
    ["positioning-and-messaging", "Market Signal System", "Buyers cannot tell you apart", "positioning reset"],
    ["landing-pages", "Page Learning System", "The page looks finished", "page rebuild"],
    ["outbound-activation", "Signal-to-Conversation System", "Cold outreach buyers answer", "outbound rebuild"],
    ["aeo-and-data-stories", "Citation Engine", "Buyers ask a model first", "answer-ownership build"],
    ["sales-enablement", "Deal Momentum System", "Your reps rebuild the pitch", "enablement rebuild"],
    ["campaign-strategy", "Campaign Operating System", "One campaign idea, carried", "campaign build"],
    ["gtm-dashboards", "Decision Dashboard System", "Reporting that ends in a decision", "measurement build"],
    ["customer-advocacy", "Customer Evidence System", "Customer wins happen every week", "proof build"],
  ];

  for (const [slug, , headline] of services) {
    const response = await render(`http://localhost/services/${slug}`);
    assert.equal(response.status, 200, slug);

    const html = await response.text();
    assert.match(html, new RegExp(headline, "i"), slug);
    assert.match(html, /THE OFFER · \$3,000 · 10 WORKING DAYS/, slug);
    assert.match(html, /Book a call with the founder/, slug);
    assert.match(html, /href="\/book-a-call\?topic=/, slug);
    assert.match(html, /WHAT COMPOUNDS/, slug);
    assert.match(html, /A TYPICAL FIRST 30 DAYS/, slug);
    assert.match(html, /GROW &amp; CLOSE OWNS/, slug);
    assert.match(html, /href="\/services"/, slug);
    assert.match(html, new RegExp(`"@type":"BreadcrumbList".*services/${slug}`), slug);
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
  // `body` had overflow-x: clip but `html` didn't, and Chromium measures
  // document.documentElement.scrollWidth off the html box, not body's, so an
  // absolutely-positioned decorative bleed (e.g. .footer-logic) still forced
  // a horizontal scrollbar on narrow viewports despite body's own clip.
  assert.match(globals, /html\s*\{[^}]*overflow-x:\s*clip;/s);
  assert.match(layout, /IBM_Plex_Sans/);
  assert.match(layout, /IBM_Plex_Mono/);
  assert.match(globals, /@import "\.\/components\/site-header\.css"/);
  assert.match(
    globals,
    /@import "\.\/services\/founder-led-content\/founder-led-content\.css"/,
  );
  assert.match(globals, /@import "\.\/services\/service-pages\.css"/);
  assert.ok(
    globals.split("\n").length < 2200,
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

  // The logic-gate glyph sets its own `color` directly, so it never inherits
  // .capability-item:hover's white text. It needs its own hover override, or
  // the wire strokes (stroke: currentColor) stay near-black on the new black
  // background and disappear.
  assert.match(
    globals,
    /\.capability-item:hover \.circuit-card-node\s*\{\s*color: var\(--electric-light\);/,
  );
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
  // One state value drives both disclosures, so opening either closes the other.
  assert.match(header, /const \[openMenu, setOpenMenu\]/);
  assert.match(header, /type OpenMenu = "services" \| "personas" \| null/);
  assert.match(header, /document\.addEventListener\("pointerdown", closeWhenOutside\)/);
  // Escape closes whichever disclosure is open and returns focus to the
  // trigger that opened it, rather than dropping focus to the document.
  assert.match(header, /event\.key !== "Escape"/);
  assert.match(header, /servicesTriggerRef\.current\?\.focus\(\)/);
  assert.match(header, /personasTriggerRef\.current\?\.focus\(\)/);
  assert.match(header, /aria-label=\{navOpen \? "Close navigation" : "Open navigation"\}/);
  // Mobile stacks the nav in DOM order, so the two disclosures that lead to
  // revenue pages come before the flat secondary links.
  assert.ok(header.indexOf('className="services-menu"') < header.indexOf('href="/about"'));
  assert.ok(header.indexOf('Who it is for') < header.indexOf('href="/#faq"'));
  assert.match(css, /\.services-home-link\s*\{[^}]*font-size:\s*12px[^}]*min-height:\s*52px/s);
  assert.match(css, /\.menu-toggle\s*\{[^}]*min-height:\s*44px[^}]*min-width:\s*44px/s);

  // Clicking dead space inside an open panel (heading, padding, gaps between
  // tiles) must close it too, not just clicks fully outside <header>. Both
  // toggle buttons must stop propagation so opening a menu doesn't
  // immediately close itself via the new header-level handler.
  assert.match(header, /<header\b[^>]*onClick=\{/s);
  const stopPropagationCount = (header.match(/event\.stopPropagation\(\)/g) ?? []).length;
  assert.equal(stopPropagationCount, 2);
  assert.match(header, /serviceLeverGroups/);
  // The per-tile lever badge repeated the column heading on every tile and was
  // removed; the lever question now sits once, in the group label.
  assert.doesNotMatch(css, /services-mega-tile-lever/);
  assert.match(css, /\.services-mega-group-label span\s*\{/);
  assert.match(header, /personaShortLabel/);
  assert.match(css, /\.personas-menu\s*\{/);
  assert.match(css, /\.services-mega-group\s*\{/);
  assert.doesNotMatch(css, /\.site-header-services \.header-cta\s*\{[^}]*display:\s*none/s);
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
  assert.match(html, /<title>Pricing \| Decision Studio for B2B SaaS \| Grow &amp; Close<\/title>/i);
  assert.match(html, /rel="canonical" href="https:\/\/growandclose\.com\/pricing"/i);
  assert.match(html, /GTM RESET/);
  assert.match(html, /\$3,000/);
  assert.match(html, /\$3,500/);
  assert.match(html, /\$7,000/);
  assert.match(html, /FAQPage/);
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /href="\/book-a-call\?topic=/);
  // Prices must be machine-readable, not only prose.
  assert.match(html, /"@type":"OfferCatalog"/);
  assert.equal((html.match(/"@type":"Offer"/g) ?? []).length, 3);
  assert.match(html, /"price":"3000","priceCurrency":"USD"/);
  assert.match(html, /"price":"3500"/);
  assert.match(html, /"price":"7000"/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /—/);
  assert.doesNotMatch(html, /no long contract/i);
  assert.doesNotMatch(html, /FOR SMALL GTM TEAMS|lean Head of Marketing|CMOs and small marketing teams/);
});

test("server-renders the book-a-call page with an embedded calendar, an email, and proof", async () => {
  const response = await render("http://localhost/book-a-call");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Book a Call \| Grow &amp; Close<\/title>/i);
  assert.match(html, /cal\.com\/varun-choraria\/30min/);
  assert.match(html, /hello@growandclose\.com/);
  assert.match(html, /ContactPage/);
  assert.match(html, /href="\/skills"/);
  assert.match(html, /Replies within one working day/i);
  assert.match(html, /AI-assisted delivery, human-approved before release/i);
  assert.match(html, /class="book-split"/);
  assert.match(html, /class="book-split-calendar" id="calendar"/);
  assert.match(html, /class="book-split-info"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /Is there a fee for the call\?/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /—/);
});

test("/contact redirects to /book-a-call", async () => {
  const response = await render("http://localhost/contact");
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "http://localhost/book-a-call");
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
  for (const route of ["/pricing", "/book-a-call", "/privacy", "/terms", "/rubric", "/for/"]) {
    assert.ok(sitemap.includes(`${route}\``) || sitemap.includes(route), route);
  }
});

// Regex-matching JSON-LD cannot catch malformed JSON, which is the failure that
// actually breaks a parser. Parse every block on every route instead.
test("every JSON-LD block on every route is valid parseable JSON", async () => {
  const routes = [
    "/",
    "/pricing",
    "/services",
    "/skills",
    "/about",
    "/book-a-call",
    "/rubric",
    "/for/founders",
    "/for/heads-of-marketing",
    "/for/cmos",
    "/for/agencies",
    "/services/landing-pages",
    "/skills/icp-sharpener-b2b",
  ];

  for (const route of routes) {
    const response = await render(`http://localhost${route}`);
    assert.equal(response.status, 200, route);
    const html = await response.text();

    const blocks = [
      ...html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      ),
    ].map((match) => match[1]);

    assert.ok(blocks.length > 0, `${route} has no JSON-LD`);

    for (const block of blocks) {
      let parsed;
      assert.doesNotThrow(() => {
        parsed = JSON.parse(block);
      }, `${route} has unparseable JSON-LD`);
      assert.ok(parsed["@context"], `${route} JSON-LD missing @context`);
      assert.ok(
        parsed["@type"] || parsed["@graph"],
        `${route} JSON-LD missing @type and @graph`,
      );
    }
  }
});

test("the founder and organization resolve inside one graph, cross-referenced by @id", async () => {
  const response = await render();
  const html = await response.text();

  const blocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((match) => JSON.parse(match[1]));

  const graphBlock = blocks.find((block) => Array.isArray(block["@graph"]));
  assert.ok(graphBlock, "no @graph block found");

  const graph = graphBlock["@graph"];
  const ids = graph.map((node) => node["@id"]);
  assert.ok(ids.includes("https://growandclose.com/#founder"));
  assert.ok(ids.includes("https://growandclose.com/#organization"));

  const org = graph.find((node) => node["@type"] === "Organization");
  const person = graph.find((node) => node["@type"] === "Person");

  // Every @id the graph points at must exist as a node inside the same graph,
  // otherwise the reference dangles and the entity link is silently lost.
  assert.equal(org.founder["@id"], person["@id"]);
  assert.equal(person.worksFor["@id"], org["@id"]);
  assert.deepEqual(org.sameAs, [
    "https://github.com/vcxcvii",
    "https://www.linkedin.com/in/varunchoraria",
  ]);
  assert.ok(person.sameAs.includes("https://varunchoraria.com"));
});

test("the rubric page publishes the standard the guarantee refers to", async () => {
  const response = await render("http://localhost/rubric");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>The Published Rubric \| Grow &amp; Close<\/title>/i);
  assert.match(html, /rel="canonical" href="https:\/\/growandclose\.com\/rubric"/i);
  assert.match(html, /there is no invoice/i);
  assert.match(html, /BLOCKING/);
  // Five blocking criteria plus three scored ones. Match the rendered element,
  // not the bare class name: the RSC flight payload embedded further down the
  // document repeats every className, so a class-only count doubles.
  assert.equal((html.match(/<li class="rubric-item/g) ?? []).length, 8);
  assert.equal((html.match(/<li class="rubric-item rubric-item-blocking/g) ?? []).length, 5);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /—/);
});

test("no page promises a rubric without linking to the published one", async () => {
  for (const route of ["/pricing", "/book-a-call", "/services/landing-pages"]) {
    const response = await render(`http://localhost${route}`);
    const html = await response.text();

    if (/rubric/i.test(html)) {
      assert.ok(
        html.includes('href="/rubric"') || html.includes("growandclose.com/rubric"),
        `${route} mentions a rubric but does not point at /rubric`,
      );
    }
  }
});

test("no page claims a client base that does not exist yet", async () => {
  for (const route of ["/", "/pricing", "/services", "/book-a-call", "/for/founders"]) {
    const response = await render(`http://localhost${route}`);
    const html = await response.text();
    assert.doesNotMatch(html, /most clients/i, route);
    assert.doesNotMatch(html, /our clients (say|tell|report)/i, route);
    assert.doesNotMatch(html, /trusted by \d/i, route);
  }
});

test("each persona page carries one reframe, one metric, and cited third-party evidence", async () => {
  const personas = [
    ["/for/founders", "You are the bottleneck", "Founder"],
    ["/for/heads-of-marketing", "You own the plan", "Head of Marketing"],
    ["/for/cmos", "The strategy is signed off", "CMO"],
    ["/for/agencies", "You are not short of clients", "Agency principal"],
  ];

  for (const [route, headline] of personas) {
    const response = await render(`http://localhost${route}`);
    assert.equal(response.status, 200, route);

    const html = await response.text();
    assert.match(html, new RegExp(headline, "i"), route);
    // The shared villain and reframe must appear on every persona page.
    assert.match(html, /THE OLD WAY: BUY MORE PRODUCTION/, route);
    assert.match(html, /THE NEW WAY: BUY THE DECISION/, route);
    // The one metric every page resolves to.
    assert.match(html, /qualified pipeline created/i, route);
    // Evidence is optional per page, but where a page shows it, it is cited.
    if (/WHY THIS IS TRUE NOW/.test(html)) {
      assert.match(html, /<cite>/, route);
      assert.match(html, /MKT1/, route);
    }
    assert.match(html, /href="\/rubric"/, route);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, route);
    assert.doesNotMatch(html, /—/, route);
    assert.doesNotMatch(html, /#ff7a00|Geist|Georgia|Times New Roman/i, route);
  }
});
