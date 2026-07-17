---
name: landing-page-teardown
description: >
  Run a conversion-focused teardown of a B2B SaaS landing page or homepage.
  Scores message clarity, offer strength, proof, and friction, then rewrites the
  weakest sections. Use when the user shares a landing page URL and asks for
  feedback, a review, a teardown, "why isn't this converting", or wants copy
  suggestions before a launch or paid campaign.
---

# Landing Page Teardown (B2B SaaS)

Audit a page the way a skeptical buyer reads it: five seconds of attention,
zero goodwill, one tab among nine.

## Setup

Fetch the URL. If the page is client-rendered and the fetch returns a shell,
ask the user to paste the visible copy top-to-bottom. Note who the page seems
aimed at and what action it wants; confirm both with the user — a teardown
against the wrong goal is noise.

## The teardown — score each 1–5, quote the evidence

### 1. Five-second test (headline + subhead)

Cover everything below the fold. From the headline block alone, can a
first-time visitor answer: what is this, who is it for, why care now?
Penalize: category jargon ("revenue orchestration platform"), unfalsifiable
claims ("smarter, faster, better"), headlines that describe the company
instead of the visitor's situation.

### 2. Offer clarity

What exactly does the CTA give me, and what does it cost me (time, email, a
sales call)? "Book a demo" as the only path for a cold visitor = automatic 2.
Look for a lower-commitment path: see pricing, watch a 2-min demo, get a
sample report, free tool.

### 3. Argument structure

Map the page's sections into an argument: problem → stakes → approach → proof
→ ask. Flag sections that are furniture (generic feature grids, logo walls
with no context, "How it works" that explains UI instead of value). Every
section must advance the argument or it's slowing the page down.

### 4. Proof density

Count specific proof: named customers, numbers with baselines ("cut onboarding
from 6 weeks to 9 days"), screenshots of real output, third-party validation.
Penalize adjectives posing as proof ("loved by thousands of teams").

### 5. Friction and risk

Form length vs. offer value, surprise fields, vague pricing, no answer to
"what happens after I click". List every point where a interested visitor
could stall.

## Output format

```
## Teardown: <URL>
**Verdict**: <one sentence — the single biggest reason this page leaks>
**Scores**: 5s-test X/5 · Offer X/5 · Argument X/5 · Proof X/5 · Friction X/5

### What's costing conversions (ranked)
1. <issue> — <quoted evidence> — <why it matters>
...

### Rewrites
<For the 2–3 weakest sections: current copy → rewritten copy, with one line on the reasoning. Match the company's voice; don't impose a generic SaaS voice.>

### Keep
<2–3 things the page does well — so they survive the next redesign>
```

## Rules

- Quote the page. Never critique from memory of "typical pages".
- Rewrites must be pasteable: real copy, right length, no [placeholders].
- If the page's biggest problem is upstream of copy (wrong audience, no
  differentiated offer), say so plainly instead of polishing sentences.
