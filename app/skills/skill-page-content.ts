import type { SkillPageContent } from "./skill-page-types";

export const icpSharpener: SkillPageContent = {
  slug: "icp-sharpener-b2b",
  name: "ICP Sharpener",
  metaTitle: "Free Claude Skill: ICP Sharpener for B2B SaaS | Grow & Close",
  metaDescription:
    "Free Claude skill that turns a vague B2B SaaS target market into a decision-ready ICP: named segments, buying triggers, disqualifiers, and message angles.",
  cardSummary:
    "Turns a vague target market into a decision-ready ICP: named segments, buying triggers, hard disqualifiers, and the message angle for each.",
  heroLead: "Turn “we sell to B2B companies” into",
  heroAccent: "an ICP your team can act on.",
  heroLede:
    "A free Claude skill that interviews you about your best and worst customers, finds the pattern in the evidence, and outputs a one-page ICP with segments, triggers, disqualifiers, and the message angle for each.",
  whatItDoes: [
    "Separates user, buyer, and champion instead of blending them into one persona",
    "Derives the ICP from real won/lost accounts, not founder aspiration",
    "Names 2–4 observable buying triggers so outbound has a reason to exist",
    "Forces 3–5 hard disqualifiers — a segment you can't say no to isn't a segment",
    "Flags which claims are evidence-backed vs. assumptions to test",
  ],
  whoFor:
    "Founders and first marketing hires at B2B SaaS companies whose targeting feels broad, whose outbound reply rates are flat, or who are about to brief ads, outbound, or a landing page without a written ICP.",
  inputExample:
    "Your website URL, plus 5–15 real accounts: best customers, worst customers, recent churns, recent closed-lost. Names optional, descriptions required.",
  outputExample:
    "ICP: Series A–B PLG SaaS, 20–80 FTE, first marketing hire just landed · Buying triggers: new VP Marketing in seat <90 days; outbound tool ripped out · Disqualifiers: no dedicated budget owner; services businesses · Message angle: “your first marketing hire just inherited a backlog”",
  steps: [
    { title: "Download and install", copy: "Get the .skill file by email, then add it to Claude via Settings → Capabilities → Skills (or drop the folder into your Claude Code skills directory)." },
    { title: "Bring your evidence", copy: "Paste your best and worst accounts, or just your website URL — the skill will draft and label every inference as an assumption to validate." },
    { title: "Get the one-pager", copy: "Claude runs the five-step sharpening workflow and outputs one to three ICP one-pagers with a recommendation on which to lead with." },
  ],
  faqs: [
    {
      question: "What is a Claude skill?",
      answer:
        "A Claude skill is a packaged instruction set (a SKILL.md file) that teaches Claude a repeatable expert workflow. Install it once and Claude applies the methodology automatically whenever the task comes up — in Claude.ai, Claude Code, or the API.",
    },
    {
      question: "How is this different from just prompting ChatGPT for an ICP?",
      answer:
        "A one-off prompt produces a generic persona. This skill encodes a methodology: it demands account-level evidence, splits user from buyer from champion, requires observable buying triggers, and refuses to output more than three segments. The constraints are the value.",
    },
    {
      question: "Do I need customer data to use it?",
      answer:
        "No — with only a website URL it drafts an ICP and explicitly labels every part as an assumption with the fastest way to test it. With 5–15 real accounts it produces an evidence-backed profile.",
    },
    {
      question: "Is it really free?",
      answer:
        "Yes. You get the .skill file in exchange for your email. No trial, no feature gate. It's how we show the quality bar of our positioning and messaging work.",
    },
  ],
  relatedService: {
    slug: "positioning-and-messaging",
    name: "Positioning & Messaging",
    pitch: "Want the full positioning system built for you — narrative, messaging hierarchy, and proof — not just the ICP?",
  },
};

export const landingPageTeardown: SkillPageContent = {
  slug: "landing-page-teardown",
  name: "Landing Page Teardown",
  metaTitle: "Free Claude Skill: B2B Landing Page Teardown | Grow & Close",
  metaDescription:
    "Free Claude skill that audits a B2B SaaS landing page like a skeptical buyer: scores clarity, offer, proof, and friction, then rewrites the weakest sections.",
  cardSummary:
    "Audits your landing page like a skeptical buyer: scores clarity, offer, proof, and friction, then rewrites the weakest sections in your voice.",
  heroLead: "Audit your landing page like a buyer with",
  heroAccent: "five seconds and nine open tabs.",
  heroLede:
    "A free Claude skill that runs a conversion teardown of any B2B SaaS page: five-second test, offer clarity, argument structure, proof density, and friction — with pasteable rewrites for the weakest sections.",
  whatItDoes: [
    "Scores the headline block on the five-second test: what is this, who's it for, why now",
    "Checks the offer: what a click actually gives the visitor and what it costs them",
    "Maps every section into an argument — problem, stakes, approach, proof, ask — and flags furniture",
    "Counts real proof (named customers, numbers with baselines) vs. adjectives posing as proof",
    "Rewrites the 2–3 weakest sections in your voice, ready to paste",
  ],
  whoFor:
    "B2B SaaS founders and marketers about to launch a page, spend on paid traffic, or wondering why an existing page gets visits but no conversions.",
  inputExample: "A URL. If the page is client-rendered, paste the visible copy top to bottom.",
  outputExample:
    "Verdict: the page sells the category, not the visitor's situation · 5s-test 2/5 — headline “Revenue orchestration for modern teams” answers none of the three questions · Rewrite: “Your SDRs book 30% fewer meetings in quarter 2. Here's the fix.”",
  steps: [
    { title: "Download and install", copy: "Get the .skill file by email and add it to Claude via Settings → Capabilities → Skills." },
    { title: "Share the page", copy: "Give Claude the URL and confirm the page's audience and goal, so the teardown scores against the right job." },
    { title: "Ship the fixes", copy: "You get ranked issues with quoted evidence, scores across five dimensions, rewrites for the weakest sections, and the 2–3 things worth keeping." },
  ],
  faqs: [
    {
      question: "What does the teardown actually check?",
      answer:
        "Five dimensions, each scored 1–5 with quoted evidence: the five-second test on the headline block, offer clarity, argument structure, proof density, and friction. The verdict names the single biggest reason the page leaks conversions.",
    },
    {
      question: "Will the rewrites sound like generic AI copy?",
      answer:
        "The skill's rules ban placeholder copy and require rewrites to match the company's existing voice. Every rewrite comes with a one-line rationale so you can judge it, not just paste it.",
    },
    {
      question: "What if my page's problem isn't the copy?",
      answer:
        "The skill is instructed to say so plainly. If the real problem is upstream — wrong audience, undifferentiated offer — it flags that instead of polishing sentences that can't win.",
    },
    {
      question: "Does it work on homepages or only campaign pages?",
      answer:
        "Both. The method is the same; the difference is the goal you confirm at the start — a homepage is scored on routing and clarity, a campaign page on a single conversion action.",
    },
  ],
  relatedService: {
    slug: "landing-pages",
    name: "Landing Page System",
    pitch: "Want pages designed, written, and shipped for you — with the argument built in from the start?",
  },
};

export const outboundSequenceWriter: SkillPageContent = {
  slug: "outbound-sequence-writer",
  name: "Outbound Sequence Writer",
  metaTitle: "Free Claude Skill: Cold Outbound Sequence Writer | Grow & Close",
  metaDescription:
    "Free Claude skill that writes a complete 5-touch cold outbound sequence for one B2B SaaS segment — trigger-based, under 90 words per email, with a real point of view.",
  cardSummary:
    "Writes a complete 5-touch cold email + LinkedIn sequence for one segment — trigger-based, under 90 words per email, with a real point of view.",
  heroLead: "Outbound that reads like a colleague noticed something,",
  heroAccent: "not like a tool merged fields.",
  heroLede:
    "A free Claude skill that writes a full 5-touch email + LinkedIn sequence for one segment — grounded in an observable trigger, a genuine point of view, and an offer better than “15 minutes.”",
  whatItDoes: [
    "Refuses to write until you have a real segment, a trigger, a POV, and an offer — and helps you find each",
    "Architects 5 touches over 3 weeks, each earning the next",
    "Enforces the rules that matter: under 90 words, one idea per email, no sequence-speak",
    "Defines personalization slots an SDR can fill in 2 minutes, with examples",
    "Sets kill criteria so you know when the angle is dead instead of sending touch 6",
  ],
  whoFor:
    "Founders doing founder-led sales, first SDRs, and marketers activating a new segment who want replies, not just deliverability.",
  inputExample:
    "Your segment (or a broad target the skill will narrow with you), what you observe breaking in how those companies handle the problem, and what a reply earns the prospect.",
  outputExample:
    "Touch 1 · Subject: your sdr ramp · “You hired 4 SDRs in March — most teams that size lose month two to CRM setup, not selling. We wrote the ramp checklist we use with Series B teams. Want it?” · Why this works: names the trigger, gives before it asks.",
  steps: [
    { title: "Download and install", copy: "Get the .skill file by email and add it to Claude via Settings → Capabilities → Skills." },
    { title: "Pass the prerequisites", copy: "The skill walks you through segment, trigger, point of view, and offer — the four inputs that matter most before a word is written." },
    { title: "Get the sequence", copy: "All five touches with subjects and rationale, personalization slots with example values, and the kill criteria for the angle." },
  ],
  faqs: [
    {
      question: "Why does the skill refuse to write without a trigger and POV?",
      answer:
        "Because sequences without them are spam with good grammar. The trigger makes now the right time; the point of view gives the prospect something to react to. In our experience those two inputs move reply rate more than any copywriting trick.",
    },
    {
      question: "What channels does the sequence cover?",
      answer:
        "Four emails and one LinkedIn touch over roughly three weeks by default, adjusted to deal size — higher ACV gets more patience and deeper personalization per touch.",
    },
    {
      question: "Will this get my domain flagged?",
      answer:
        "The skill writes content, not sending infrastructure. Short, specific, low-link emails of the kind it enforces are also the kind spam filters and recipients punish least. Volume, warmup, and list hygiene remain your job.",
    },
    {
      question: "Can I use it for LinkedIn-only outreach?",
      answer:
        "Yes — tell Claude the constraint and it rebalances the architecture, keeping the same rules: reference something true and specific, give before you ask, one idea per touch.",
    },
  ],
  relatedService: {
    slug: "outbound-activation",
    name: "Outbound Activation",
    pitch: "Want the whole outbound motion run for you — lists, sequences, replies, and learning loops?",
  },
};

export const gtmDashboardSpec: SkillPageContent = {
  slug: "gtm-dashboard-spec",
  name: "GTM Dashboard Spec",
  metaTitle: "Free Claude Skill: GTM Dashboard & Metrics Spec | Grow & Close",
  metaDescription:
    "Free Claude skill that designs a GTM dashboard spec for B2B SaaS: the questions to answer, exact metric definitions with formulas, sources, layout, and data gaps.",
  cardSummary:
    "Specs your GTM reporting before anyone opens Looker: the questions that matter, engineer-grade metric definitions, layout, and the data gaps.",
  heroLead: "A dashboard is a set of questions",
  heroAccent: "with numbers attached.",
  heroLede:
    "A free Claude skill that specs your GTM reporting before anyone opens Looker: audience, the 5–7 questions that matter, engineer-grade metric definitions, tile-by-tile layout, and the data gaps that would sink it.",
  whatItDoes: [
    "Separates operator, leadership, and board dashboards instead of building one for all three",
    "Writes the questions first — every metric must serve one or gets cut",
    "Defines each metric like an engineer: formula, source, filters, owner, target",
    "Forces decisions on the classic ambiguities: MQL definition, attribution model, date basis",
    "Names every data gap and its workaround, so the dashboard survives week 2",
  ],
  whoFor:
    "Founders, marketing leaders, and RevOps at B2B SaaS companies whose reporting is a pile of contested numbers, or who are standing up pipeline reporting for the first time.",
  inputExample:
    "Who looks at the dashboard and when, your stack (CRM, analytics, spreadsheets), and how you define a qualified opportunity today — even if the answer is “we argue about it.”",
  outputExample:
    "Metric: Qualified pipeline created · Formula: Σ opportunity amount where created in period and stage ≥ SQL · Source: HubSpot, Opportunity object · Exclusions: renewals, test accounts · Owner: RevOps · Target: 4× coverage of next-quarter number",
  steps: [
    { title: "Download and install", copy: "Get the .skill file by email and add it to Claude via Settings → Capabilities → Skills." },
    { title: "Answer the audience questions", copy: "The skill pins down who the dashboard is for and what they argue about — the questions become the spec's skeleton." },
    { title: "Hand off the spec", copy: "One document: questions, metric definition blocks, layout with the top-left tile first, data gaps, and an ordered build checklist for whoever implements it." },
  ],
  faqs: [
    {
      question: "Which tools does the spec work with?",
      answer:
        "Any — Looker, Metabase, HubSpot, Salesforce dashboards, or a spreadsheet. The spec is deliberately tool-agnostic: questions, definitions, and layout are the hard part; charting is the easy part.",
    },
    {
      question: "What GTM metrics should a B2B SaaS team track?",
      answer:
        "Depends on the audience: operators need campaign-level qualified pipeline and stall points weekly; leadership needs coverage, CAC payback, and win-rate movement; boards need efficiency (burn multiple, magic number) and forecast accuracy. The skill builds the right set per audience instead of a 40-tile wall.",
    },
    {
      question: "How does it handle attribution?",
      answer:
        "It forces you to pick one model, name its known bias, and move on — because teams that argue about attribution ship no reporting at all. The spec records the choice so future arguments have a written baseline.",
    },
    {
      question: "What if our data is too messy for a dashboard?",
      answer:
        "That's step five of the workflow: every metric the stack can't produce cleanly gets listed with the missing piece and an interim workaround. A spec that pretends the data is clean gets abandoned in two weeks.",
    },
  ],
  relatedService: {
    slug: "gtm-dashboards",
    name: "GTM Dashboards",
    pitch: "Want the dashboard built, wired to your stack, and maintained — not just specced?",
  },
};

export const aeoPageAudit: SkillPageContent = {
  slug: "aeo-page-audit",
  name: "AEO Page Audit",
  metaTitle: "Free Claude Skill: AEO Audit — Get Cited by ChatGPT | Grow & Close",
  metaDescription:
    "Free Claude skill that audits your site for answer-engine optimization: crawlability by AI bots, extractable answer structure, and what to change to earn citations.",
  cardSummary:
    "Audits any page across four layers — AI-bot access, extractability, answer quality, off-site signals — against the buyer prompts you want to win.",
  heroLead: "Answer engines don't rank pages.",
  heroAccent: "They extract answers and cite sources.",
  heroLede:
    "A free Claude skill that audits any page across four layers — bot access, extractability, answer quality, and off-site mentions — against the 3–5 buyer prompts you want to win.",
  whatItDoes: [
    "Starts from target prompts, not keywords — which questions should this page win in ChatGPT and Perplexity",
    "Checks whether GPTBot, PerplexityBot, and ClaudeBot can read the page at all",
    "Audits extractability: answer-first structure, question-shaped headings, self-contained blocks, citable numbers",
    "Compares your answer against who gets cited today, and why",
    "Ends with the single highest-leverage change to go after first",
  ],
  whoFor:
    "B2B SaaS marketers watching search traffic flatten while buyers ask ChatGPT what to buy — and anyone told to “do AEO” without a concrete definition of what that means.",
  inputExample:
    "A URL plus the 3–5 buyer prompts you want to own (or let the skill derive them). Live prompt-test results from ChatGPT/Perplexity make the audit sharper.",
  outputExample:
    "Fix now: robots.txt blocks GPTBot — you've opted out of citations · Extractability: “How it works” section builds suspense for 4 paragraphs before the answer; move the answer to sentence one · First play: publish the pricing-comparison table competitors won’t",
  steps: [
    { title: "Download and install", copy: "Get the .skill file by email and add it to Claude via Settings → Capabilities → Skills." },
    { title: "Define the prompts to own", copy: "The audit is judged against real buyer prompts — “best X for Y”, “how do I Z” — not abstract SEO scores." },
    { title: "Work the ranked fixes", copy: "Findings arrive in four buckets: blocking access issues, extractability fixes, content gaps, and off-site gaps — each with evidence and rewritten copy where relevant." },
  ],
  faqs: [
    {
      question: "What is AEO and how is it different from SEO?",
      answer:
        "Answer-engine optimization is making your content the source that AI assistants (ChatGPT, Perplexity, Google AI Overviews) extract and cite when buyers ask questions. Classic SEO optimizes for ranked links; AEO optimizes for being the quoted answer — which rewards specificity, answer-first structure, and off-site corroboration.",
    },
    {
      question: "How do I get my company recommended by ChatGPT?",
      answer:
        "Three things this skill audits: make your site readable to AI crawlers (no bot blocks, content in raw HTML), publish specific extractable answers to the prompts your buyers ask, and build consistent off-site mentions — the same company description in the comparison pages, directories, and communities models triangulate from.",
    },
    {
      question: "Does gated content hurt AEO?",
      answer:
        "Gated pages are invisible to answer engines — they can't extract what they can't read. The rule the skill enforces: gate the asset, never the explanation. The page explaining the thing must be fully crawlable.",
    },
    {
      question: "Can one page audit really improve AI visibility?",
      answer:
        "One page can win specific prompts, and the audit is honest about the rest: layer four checks off-site signals, because models triangulate across sources. You'll get both the on-page fixes and the off-site gap list.",
    },
  ],
  relatedService: {
    slug: "aeo-and-data-stories",
    name: "AEO & Data Stories",
    pitch: "Want the citations engineered for you — original data assets and the off-site mentions included?",
  },
};

export const skillForService: Record<string, SkillPageContent> = {
  "positioning-and-messaging": icpSharpener,
  "landing-pages": landingPageTeardown,
  "outbound-activation": outboundSequenceWriter,
  "gtm-dashboards": gtmDashboardSpec,
  "aeo-and-data-stories": aeoPageAudit,
};

export const skillPages = {
  [icpSharpener.slug]: icpSharpener,
  [landingPageTeardown.slug]: landingPageTeardown,
  [outboundSequenceWriter.slug]: outboundSequenceWriter,
  [gtmDashboardSpec.slug]: gtmDashboardSpec,
  [aeoPageAudit.slug]: aeoPageAudit,
} as const;
