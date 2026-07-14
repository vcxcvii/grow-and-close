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

test("server-renders the Grow & Close landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Grow &amp; Close — Your GTM backlog, shipped\.<\/title>/i);
  assert.match(html, /Your GTM backlog/);
  assert.match(html, /data-brand-system="gc-logic-v1"/);
  assert.match(html, /FOR FOUNDERS/);
  assert.match(html, /FOR CMOs/);
  assert.match(html, /FOR HEADS OF MARKETING/);
  assert.match(html, /Queue the priority/);
  assert.match(html, /Review, learn, repeat/);
  assert.match(html, /Pipeline One/);
  assert.match(html, /Pipeline Team/);
  assert.match(html, /Your first ship is free/);
  assert.match(html, /hello@growandclose\.com/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /#ff5c35|var\(--orange\)/i);
});

test("brand colors preserve accessible text pairings", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.doesNotMatch(css, /#dfff4f|#ff7a00|var\(--acid\)|var\(--signal\)/i);
  assert.ok(contrastRatio("#ffffff", "#0b4fe8") >= 4.5);
  assert.ok(contrastRatio("#0b4fe8", "#f6f7fb") >= 4.5);
  assert.ok(contrastRatio("#565b66", "#f6f7fb") >= 4.5);
  assert.ok(contrastRatio("#8aabff", "#090a0c") >= 4.5);
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

  assert.match(favicon, />G</);
  assert.match(favicon, />C</);
});

test("deployment config owns both production custom domains", async () => {
  const config = await readFile(new URL("../vite.config.ts", import.meta.url), "utf8");

  assert.match(config, /pattern: "growandclose\.com", custom_domain: true/);
  assert.match(config, /pattern: "www\.growandclose\.com", custom_domain: true/);
});
