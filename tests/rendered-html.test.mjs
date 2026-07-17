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
  assert.match(html, /Your GTM backlog/);
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
  assert.match(html, /Turn customer outcomes into proof that travels/);
  assert.match(html, /Give us one GTM priority/);
  assert.match(html, /Get one GTM priority shipped free/);
  assert.match(html, /The self-driving GTM company for the AI era/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/disclaimer"/);
  assert.match(html, /hello@growandclose\.com/);
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
  assert.match(html, /governed source/);
  assert.match(html, /Customers become the proof layer/i);
  assert.match(html, /A typical first 90 days/i);
  assert.match(html, /Founder Signal Map/);
  assert.match(html, /INTERACTIVE SIGNAL CIRCUIT/);
  assert.match(html, /Pull founder truth/);
  assert.match(html, /See the full Grow &amp; Close operating system/);
  assert.match(html, /data-service-circuit-start/);
  assert.match(html, /data-service-circuit-target/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /opens in a new tab/);
  assert.doesNotMatch(html, /fully autonomous/i);
  assert.doesNotMatch(html, /#ff7a00|Geist|Georgia|Times New Roman/i);
});

test("server-renders the services SEO pillar with nine new-tab spokes", async () => {
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
  assert.match(html, /data-service-circuit-start/);
  assert.match(html, /data-service-circuit-target/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /opens in a new tab/);

  const serviceLinks = html.match(/href="\/services\/[^"]+"/g) ?? [];
  const newTabLinks = html.match(/target="_blank"/g) ?? [];
  assert.ok(serviceLinks.length >= 9);
  assert.ok(newTabLinks.length >= 9);
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
  assert.match(html, /AI-MANAGED SITE \/ HUMAN-GOVERNED RELEASE/);
  assert.match(html, /THE AUTONOMY LEDGER/);
  assert.match(html, /AGENT-RUN NOW/);
  assert.match(html, /HUMAN AUTHORITY/);
  assert.match(html, /NEXT AUTONOMY LAYER/);
  assert.match(html, /data-service-circuit-start/);
  assert.match(html, /data-service-circuit-target/);
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
    ["positioning-and-messaging", "Market Signal System", "Make your market understand", "Message Gap Map"],
    ["landing-pages", "Page Learning System", "Turn one sharp argument", "Page Argument Map"],
    ["outbound-activation", "Signal-to-Conversation System", "Turn account signals into", "Outbound Signal Map"],
    ["aeo-and-data-stories", "Citation Engine", "Own the answer buyers", "Answer-Ownership Map"],
    ["sales-enablement", "Deal Momentum System", "Help every live deal move", "Deal Friction Map"],
    ["campaign-strategy", "Campaign Operating System", "Turn one commercial bet into", "Campaign Architecture Map"],
    ["gtm-dashboards", "Decision Dashboard System", "Turn scattered metrics into", "Measurement Gap Map"],
    ["customer-advocacy", "Customer Evidence System", "Turn customer outcomes into", "Customer Evidence Map"],
  ];

  for (const [slug, system, headline, diagnostic] of services) {
    const response = await render(`http://localhost/services/${slug}`);
    assert.equal(response.status, 200, slug);

    const html = await response.text();
    assert.match(html, new RegExp(system, "i"), slug);
    assert.match(html, new RegExp(headline, "i"), slug);
    assert.match(html, new RegExp(diagnostic, "i"), slug);
    assert.match(html, /HUMAN CHECKPOINT/, slug);
    assert.match(html, /WHAT COMPOUNDS/, slug);
    assert.match(html, /A TYPICAL FIRST 30 DAYS/, slug);
    assert.match(html, /GROW &amp; CLOSE OWNS/, slug);
    assert.match(html, /data-service-circuit-start/, slug);
    assert.match(html, /data-service-circuit-target/, slug);
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

test("service circuits preserve deliberate selection and compact mobile controls", async () => {
  const [hook, serviceCircuit, founderCircuit, servicesCss, founderCss] =
    await Promise.all([
      readFile(
        new URL("../app/services/use-scroll-driven-stage.ts", import.meta.url),
        "utf8",
      ),
      readFile(new URL("../app/services/service-circuit.tsx", import.meta.url), "utf8"),
      readFile(
        new URL(
          "../app/services/founder-led-content/founder-circuit.tsx",
          import.meta.url,
        ),
        "utf8",
      ),
      readFile(new URL("../app/services/service-pages.css", import.meta.url), "utf8"),
      readFile(
        new URL(
          "../app/services/founder-led-content/founder-led-content.css",
          import.meta.url,
        ),
        "utf8",
      ),
    ]);

  assert.doesNotMatch(hook, /requestAnimationFrame|addEventListener\("scroll"/);
  assert.match(hook, /setActiveIndex\(Math\.min\(Math\.max\(index, 0\), stageCount - 1\)\)/);
  assert.match(serviceCircuit, /useState\(0\)/);
  assert.match(founderCircuit, /useScrollDrivenStage\(circuitStages\.length\)/);
  assert.match(serviceCircuit, /onClick=\{\(\) => selectStage\(index\)\}/);
  assert.match(founderCircuit, /onClick=\{\(\) => selectStage\(index\)\}/);
  assert.match(serviceCircuit, /Previous/);
  assert.match(serviceCircuit, /Next/);
  assert.doesNotMatch(servicesCss, /min-height:\s*230svh/);
  assert.doesNotMatch(founderCss, /min-height:\s*230svh/);
  assert.match(servicesCss, /grid-template-columns:\s*repeat\(5, minmax\(0, 1fr\)\)/);
  assert.match(servicesCss, /circuit-card-enter/);
  assert.doesNotMatch(
    servicesCss,
    /data-variant="(?:argument|decision)"[^}]*translateY/s,
  );
});

test("every service page owns a unique page-long scroll circuit", async () => {
  const [component, servicePage, founderPage, aboutPage, serviceCss] = await Promise.all([
    readFile(
      new URL("../app/services/service-scroll-circuit.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../app/services/service-landing-page.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL(
        "../app/services/founder-led-content/page.tsx",
        import.meta.url,
      ),
      "utf8",
    ),
    readFile(new URL("../app/about/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../app/services/service-pages.css", import.meta.url),
      "utf8",
    ),
  ]);

  for (const variant of [
    "market",
    "argument",
    "conversation",
    "founder",
    "pillar",
    "about",
    "citation",
    "deal",
    "campaign",
    "decision",
    "evidence",
  ]) {
    assert.match(component, new RegExp(`\\b${variant}: \\{`), variant);
  }

  assert.match(component, /ResizeObserver/);
  assert.match(component, /const contentHeight = main\.offsetHeight/);
  assert.doesNotMatch(component, /height: main\.scrollHeight/);
  assert.match(component, /requestAnimationFrame/);
  assert.match(component, /addEventListener\("scroll", update, \{ passive: true \}\)/);
  assert.match(component, /prefers-reduced-motion: reduce/);
  assert.match(component, /pageCircuitActive/);
  assert.match(component, /pageCircuitCurrent/);
  assert.match(servicePage, /<ServiceScrollCircuit variant=\{service\.circuitVariant\}/);
  assert.match(founderPage, /<ServiceScrollCircuit variant="founder"/);
  assert.match(aboutPage, /<ServiceScrollCircuit variant="about"/);
  assert.match(serviceCss, /\.service-page-scroll-circuit/);
  assert.match(serviceCss, /data-page-circuit-current="true"/);
});

test("service discovery links default to a new tab", async () => {
  const [header, homepage, services, footer] = await Promise.all([
    readFile(new URL("../app/components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/services/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site-footer.tsx", import.meta.url), "utf8"),
  ]);

  for (const source of [header, homepage, services, footer]) {
    assert.match(source, /target="_blank"/);
    assert.match(source, /rel="noopener noreferrer"/);
  }

  assert.match(header, /href="\/services"/);
  assert.match(footer, /href="\/services"/);
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

test("skills hub renders an interactive input-method-output system", async () => {
  const [page, diagram, css] = await Promise.all([
    readFile(new URL("../app/skills/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/skills/skills-library-system.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/skills/skills.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<SkillsLibrarySystem/);
  assert.match(diagram, /INPUT/);
  assert.match(diagram, /GUARDED WORKFLOW/);
  assert.match(diagram, /DURABLE OUTPUT|OUTPUT/);
  assert.match(diagram, /aria-pressed=\{activeIndex === index\}/);
  assert.match(css, /\.skills-system-flow/);
  assert.match(css, /\.skills-system-link\s*\{[^}]*font-size:\s*12px[^}]*min-height:\s*52px/s);
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

test("interactive motion and first-ship options remain accessible", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /aria-label="Explore the motion stages"/);
  assert.match(html, /aria-pressed="true"/);
  assert.match(html, /Free%20GTM%20priority%3A%20Homepage%20story/);
});

test("scroll circuit stays connected, passive, and motion-safe", async () => {
  const [component, logicNode, page, css] = await Promise.all([
    readFile(new URL("../app/scroll-circuit.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/logic-node.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(component, /requestAnimationFrame/);
  assert.match(component, /passive: true/);
  assert.match(component, /footer-logic/);
  assert.match(component, /1090 \/ 1200/);
  assert.match(component, /data-circuit-target/);
  assert.match(logicNode, /data-circuit-anchor/);
  assert.match(page, /audienceGateKinds/);
  assert.match(page, /capabilityGateKinds/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /\.scroll-circuit-pulse\s*\{\s*display: none;/);
});

test("deployment keeps its direct Worker fallback available", async () => {
  const config = await readFile(new URL("../vite.config.ts", import.meta.url), "utf8");

  assert.match(config, /workers_dev: true/);
});
