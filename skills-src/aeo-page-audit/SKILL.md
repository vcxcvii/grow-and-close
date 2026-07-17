---
name: aeo-page-audit
description: >
  Audit a page or site for answer-engine optimization (AEO): whether ChatGPT,
  Perplexity, and Google AI Overviews can crawl, parse, and cite it, and what
  to change so they do. Use when the user asks how to show up in AI search,
  get cited/recommended by ChatGPT, do AEO/GEO/LLM SEO, or wants a page checked
  for AI-answer visibility.
---

# AEO Page Audit

Answer engines don't rank pages — they extract answers and cite sources.
This audit checks whether a page is extractable, and whether it deserves
to be the citation.

## Step 0: Define the prompts to own

Before auditing anything, ask: *which 3–5 buyer prompts should this page win?*
("best <category> for <segment>", "how do I <job>", "<product> vs <alternative>",
"<category> pricing"). Write them down. Every finding is judged against these
prompts — an AEO audit without target prompts is just an SEO audit with new
jargon.

If possible, test the prompts live in ChatGPT/Perplexity and record: is the
user's site mentioned, who is cited instead, and what those cited pages have
that this one lacks.

## The audit — four layers

### Layer 1: Access — can bots read it at all?

- Fetch the page. Does meaningful content arrive in the raw HTML, or is it
  client-rendered into an empty shell? (AI crawlers execute little to no JS.)
- Check robots.txt for blocks on `GPTBot`, `OAI-SearchBot`, `PerplexityBot`,
  `ClaudeBot`, `Google-Extended` — blocking them is opting out of citations.
- Gated/paywalled content: invisible. Gate the asset, never the explanation.
- Bonus signals: `llms.txt` present; sitemap current; clean canonical.

### Layer 2: Extractability — can a model lift the answer?

- **Answer-first structure**: does each section open with the answer in the
  first sentence, then support it? Flag sections that build suspense.
- **Question-shaped headings**: H2/H3s that match how buyers phrase prompts.
- **Self-contained blocks**: could a paragraph be quoted alone and still make
  sense? Flag pronouns pointing at prior sections ("this approach", "it").
- **Facts with numbers**: models prefer citing specifics — prices, timeframes,
  counts, dates. "Fast onboarding" is uncitable; "onboarding in 9 days" isn't.
- **Structured data**: FAQPage/Product/Service/Organization JSON-LD present
  and matching visible content.

### Layer 3: Answer quality — does it deserve the citation?

For each target prompt: does the page actually contain the best available
answer, stated more clearly and specifically than the currently cited
competitors? Generic content loses to specialized content in AI answers even
harder than in classic search. Flag sections that say what every competitor
says.

### Layer 4: Surround sound — is the entity known off-site?

Models triangulate. Check (and list gaps): consistent company description
across site/LinkedIn/directories, presence in relevant "best X" lists and
comparison pages, review sites for the category, community mentions (Reddit,
niche Slacks, HN where relevant). One page can't do AEO alone.

## Output format

```
## AEO Audit: <URL>
**Target prompts**: <the 3–5 prompts>
**Live test**: <cited today? who wins instead, and why — one line each>

### Fix now (blocking)
### Fix next (extractability)
### Content gaps (answer quality)
### Off-site gaps (surround sound)
```

Each finding: what's wrong → evidence from the page → the specific change,
with rewritten copy where relevant. End with the one change most likely to
earn a citation within 90 days.
