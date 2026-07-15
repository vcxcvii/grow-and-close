# Grow & Close — Design and Content System

Status: implementation source of truth  
Applies to: landing page, future service pages, campaign pages, and social cards  
Primary file map: `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `public/brand/`, `public/og.png`

## 1. Brand thesis

Grow & Close is a senior-led GTM execution studio for lean B2B SaaS teams. It turns an ordered backlog into live, connected pipeline motions.

The visual system must feel:

- Operational, not ornamental.
- Senior, not corporate.
- Fast, not frantic.
- AI-native, not AI-themed.
- Direct, not simplistic.

The page should look like an operating system for useful momentum: visible sequence, bounded work, clear ownership, and an obvious next action.

## 2. Audience hierarchy

Primary buyers:

1. Founder of a seed-to-Series-B B2B SaaS company.
2. CMO or VP Marketing with a clear roadmap and insufficient senior capacity.
3. Head of Marketing carrying both strategy and production.

Secondary readers:

- Revenue leaders evaluating cross-functional usefulness.
- Operators or investors referring a company.
- Future GTM engineers and marketers evaluating the studio.

Every primary buyer must self-identify above pricing. Never collapse all three into “busy teams.” Their circumstances differ; the common failure mode is missing end-to-end ownership.

## 3. Messaging spine

Core promise:

> Your GTM backlog, shipped.

Expanded promise:

> A senior execution pod turns one or two priorities into coherent, live pipeline motions.

Problem:

> The visible backlog is a symptom. The actual bottleneck is the ownership gap between strategy and shipped work.

Mechanism:

> One ordered backlog, bounded active work, weekly output, direct feedback, and a ship log.

Differentiator:

> Senior human judgment and accountability, accelerated by specialist AI systems.

Risk reversal:

> One application-gated GTM priority, shipped free.

Primary CTA:

> Get one GTM priority shipped free.

Secondary CTA:

> See monthly plans.

## 4. Content truth rules

- Never invent customers, logos, testimonials, revenue, conversion rates, or delivery times.
- Do not claim “full GTM team” as present staffing. Describe it as output or future vision only when context is explicit.
- Keep Varun’s ownership clear. AI supports the work; it does not replace accountability.
- Use “live-ready” unless Grow & Close has direct publishing access and actually launches the work.
- “Unlimited backlog” means unlimited queued requests, not unlimited concurrent work.
- Plans differ by active capacity, coordination, and operating cadence—not arbitrary capability gates.
- The free priority remains application-gated and capacity-limited.
- Replace placeholders only with supplied, verified destinations.

Banned vague phrases unless immediately made concrete:

- End-to-end solutions.
- Supercharge growth.
- Unlock potential.
- Seamless collaboration.
- Cutting-edge AI.
- Results-driven.
- 10x output.

## 5. Page sequence and exit criteria

### Header

Purpose: identify the brand, expose the page map, and preserve the primary CTA.

Must contain:

- G/C lockup.
- What we ship.
- How it works.
- Plans.
- FAQ.
- Ship one free.

Exit criterion: a visitor can navigate or act within five seconds.

### Hero

Purpose: state the outcome, audience, and operating category.

Must contain:

- “Your GTM backlog, shipped.”
- Founders, CMOs, and Heads of Marketing.
- “Senior execution pod” framing.
- Primary and secondary CTA.
- Senior-led / AI-accelerated / no-long-contract qualifier.
- A visual example of one active motion.

Exit criterion: a buyer can answer “what is this, for whom, and why now?”

### Signal strip

Purpose: make the commercial operating model scannable.

Items: one senior owner, weekly shipping, flat monthly fee, pause anytime.

### Problem

Purpose: show nuanced recognition before presenting the service.

Must contain:

- Shared ownership-gap diagnosis.
- Founder-specific symptom.
- CMO-specific symptom.
- Head of Marketing-specific symptom.
- Visible-symptom versus actual-problem close.

Exit criterion: at least one card feels uncomfortably specific to the reader.

### What we own

Purpose: show that the unit of work is a connected motion, not a bag of assets.

Sequence: sharpen story → launch motion → learn and improve.

### How we work

Purpose: make purchasing and collaboration feel low-friction.

Sequence:

1. Queue the priority.
2. Activate one or two motions.
3. Ship connected work weekly.
4. Review signals and reorder.

The current page compresses this into three customer-facing steps: queue, ship, improve.

Exit criterion: a buyer understands what they do, what Grow & Close does, and when work appears.

### Capability layer

Purpose: demonstrate range without turning the offer into an à-la-carte menu.

Rule: capabilities are ingredients. The motion and outcome remain the product.

### Studio model

Purpose: establish who owns judgment and how output scales.

Lead with human seniority. Mention AI systems after accountability is established.

### Pricing

Purpose: make the capacity distinction obvious.

- Pipeline One: one active motion; founders or lean marketing leaders.
- Pipeline Team: two active motions; CMOs and small GTM teams with stakeholder coordination.

Never hide the price behind a call unless the commercial model changes.

### Free GTM priority

Purpose: reduce perceived risk and move qualified readers into a concrete starting point.

Keep the examples bounded: homepage section, outbound sequence, campaign activation.

### FAQ

Purpose: resolve scope, category, capacity, exclusions, and cancellation questions.

### Closing and footer

Purpose: repeat the action and provide a complete information map.

Footer groups: Explore, Engage, Contact. Add LinkedIn and calendar only after exact URLs are supplied. Add Privacy and Terms only after those pages exist.

## 6. Color system

Core tokens:

| Token | Value | Role |
|---|---:|---|
| Ink | `#090a0c` | Structure, authority, dark fields |
| Paper | `#f6f7fb` | Main canvas |
| Paper deep | `#e7eaf0` | Secondary neutral fields |
| Electric | `#0b4fe8` | Brand action, active state, shipped node |
| Electric light | `#8aabff` | Small labels on ink fields |
| Muted | `#565b66` | Supporting text on paper |

Usage target:

- 55–65% paper.
- 25–35% ink.
- 8–15% electric blue.

Rules:

- No orange, lime, green, or secondary accent color.
- Electric blue owns brand, action, progress, shipping, and validated-state emphasis.
- Do not add gradients.
- Use white on electric blue for body copy.
- Do not place electric blue text on ink at body or label sizes. Use electric light or white.
- Focus rings use electric blue on light surfaces and white/electric light on blue or ink surfaces.

Verified pairs:

- White on electric blue: 6.37:1.
- Electric blue on paper: 5.95:1.
- Muted on paper: 6.36:1.
- Electric light on ink: above 8:1.

## 7. Typography

Families:

- Primary sans: IBM Plex Sans.
- Operational labels: IBM Plex Mono.
- Editorial emphasis: IBM Plex Sans italic. No unrelated serif family.

Hierarchy:

- Hero: `clamp(66px, 9.1vw, 148px)` desktop; `clamp(52px, 18vw, 78px)` mobile.
- Section H2: `clamp(48px, 5.6vw, 92px)`.
- Card H3: `clamp(28px, 3vw, 52px)`.
- Lead: 18–25px.
- Body: 15–19px.
- Labels: 9–12px mono, uppercase, 0.04–0.11em tracking.

Rules:

- Headlines use tight negative tracking and short line lengths.
- Body copy uses 1.5–1.65 line height.
- Never put paragraphs in all caps.
- Do not use more than three typographic voices in one viewport.
- On mobile, body text stays at least 16px with 1.5 line height.
- Avoid negative letter spacing below 24px. Operational labels may use `0.04–0.09em`; never exceed `0.11em`.

## 8. Logo construction

The logo is a CSS/text lockup. No image request is needed to render it.

Parts:

- Unboxed typographic G/C glyph with a fine divider.
- G and C inherit the surface text color.
- Electric-blue slash, rendered as a 3px bar matching the G/C cap height.
- Two-line GROW / & CLOSE wordmark.

Minimum size:

- Glyph cap height: approximately 24px.
- Full lockup width: approximately 96px.

Clear space:

- Keep at least half the glyph width on every side.

Rules:

- Do not box, round, or fill the glyph.
- Do not add shadows.
- Do not separate G/C into unrelated icons.
- On dark backgrounds, use white G/C letters and wordmark; retain electric slash.
- Keep the ampersand visible in every full lockup; the compact favicon remains G/C only.
- `aria-label` must read “Grow and Close home”; decorative glyph content stays hidden from assistive technology.

Favicon:

- Full-bleed electric-blue square.
- White geometric G and C, converted to deterministic SVG paths for reliable small-size rendering.
- Ink diagonal slash, thick and equal to the letter cap height.
- No border, gradient, shadow, or secondary color.

## 9. GTM logic visual language

The distinctive visual motif is a system of AND/OR logic diagrams translated into GTM motions. It must communicate real dependencies, choices, handoffs, and outcomes—not become arbitrary tech decoration.

### Shape grammar

| Shape | GTM meaning |
|---|---|
| Square | Input, asset, constraint, or source signal |
| Wedge / D gate | AND: multiple conditions must work together |
| Diamond | OR: decision, route, segment, or test branch |
| Small square | Checkpoint, handoff, or activation step |
| Circle | Market-facing outcome or destination |
| Electric-blue checked circle | Shipped, validated, or ready to learn |
| Thin orthogonal line | Dependency, sequence, or feedback route |

Composition rules:

- Read left to right. Inputs enter from left; outcomes finish at right.
- Use 2–4 numbered rows. Preserve visible sequence `01`, `02`, `03`, `04`.
- Use thin 1–2px lines, square corners, right-angle branches, and generous negative space.
- One blue node per diagram is preferred. Two is the absolute maximum.
- Blue always marks the active, shipped, or decisive node. It never fills random shapes.
- White shapes live on ink. Ink-outlined paper shapes live on paper.
- Keep diagrams flat. No shadows, glow, gradients, 3D extrusion, glass, or neon effects.
- Diagram meaning must be explainable in one sentence. If not, simplify it.

Reusable source assets:

- `public/brand/logic-and.svg`: converging prerequisites.
- `public/brand/logic-or.svg`: branching activation path.
- `public/brand/logic-ship.svg`: shipped/validated outcome.
- `public/brand/logic-system.svg`: large multi-row motion map.

Use checked-in SVGs for exact cross-channel consistency. Do not ask an image model to redraw the G/C mark or these icons when an existing asset fits. Prompt-based generation is for new compositions only; final production layouts should overlay the real logo and SVG assets in Figma, Canva, HTML, or another deterministic layout tool.

### Web usage

- Small icon: 120–180px wide, aligned to the content grid, never smaller than 72px.
- Large section motif: 30–60% of section width at 8–18% opacity.
- Footer background: anchor bottom-right, crop intentionally, 10–16% opacity, `aria-hidden`.
- Footer system uses outlined nodes and sparse routes. Keep solid neutral blocks out of the text field.
- Icons stay decorative with empty alt text unless the diagram conveys information not present in nearby copy.
- On mobile, place icon below the copy or in its own row. Never squeeze text beside an icon below 360px.

### Model-agnostic master prompt

Copy this block before any channel-specific prompt:

```text
Create a Grow & Close brand visual for a senior-led GTM execution studio serving B2B SaaS.
Visual language: Swiss editorial grid meets operational systems diagram. Flat off-white #f6f7fb and near-black #090a0c fields, thin black grid lines, exact electric blue #0b4fe8 as the only accent. IBM Plex Sans for display/body; IBM Plex Mono for labels and step numbers. Use AND/OR logic-gate geometry translated into GTM motions: squares are inputs, a D-shaped or wedge gate means combined prerequisites, a diamond means a decision or branch, small squares are checkpoints, circles are outcomes, and one blue checked circle means shipped or validated. Number motion rows 01–04. Strong negative space, crisp vector-like edges, square corners, restrained asymmetry.
Do not use orange, lime, green, purple, gradients, soft shadows, glassmorphism, 3D, neon, generic AI imagery, robots, brains, rockets, stock photography, rounded SaaS cards, fake dashboards, or decorative shapes without operational meaning.
Never redraw or mutate the G/C logo. Leave a clean reserved area for the supplied vector mark. Preserve supplied copy verbatim; if accurate typography cannot be guaranteed, render no text and leave the copy area blank for deterministic overlay.
```

### LinkedIn portrait prompt — 1080 × 1350

```text
[PASTE MASTER PROMPT]
Canvas: 1080 × 1350, LinkedIn portrait.
Layout: 58% paper editorial message field on the left/top; 42% ink logic-system field on the right/bottom. Keep a 72px safe zone. Use one large short headline, maximum 8 words, with one electric-blue italic emphasis. Place a four-row GTM logic motion diagram opposite the headline. Reserve bottom-left space for the supplied G/C lockup. Make the graphic legible in a mobile feed and at thumbnail size.
Exact headline: "[INSERT APPROVED HEADLINE]"
Exact eyebrow: "[INSERT APPROVED EYEBROW]"
Output without invented supporting copy, badges, logos, or metrics.
```

### LinkedIn landscape / social card prompt — 1200 × 630

```text
[PASTE MASTER PROMPT]
Canvas: 1200 × 630, landscape social card.
Layout: 60% paper message field left, 40% ink logic field right, joined by thin grid lines. Headline occupies no more than three lines. Place a 01–04 logic sequence on the ink field with one blue checked completion node. Reserve a bottom-left lockup zone. Maintain at least 72px safe margins.
Exact headline: "[INSERT APPROVED HEADLINE]"
Exact eyebrow: "GTM EXECUTION STUDIO FOR B2B SAAS"
Do not invent claims, proof, statistics, or customer logos.
```

### Campaign motion diagram prompt — no headline

```text
[PASTE MASTER PROMPT]
Create only a clean GTM motion diagram on a transparent-feeling paper or ink field; no headline and no logo. Show this logic: [INPUT A] AND [INPUT B] feed [CHECKPOINT]; branch by [DECISION]; finish at [OUTCOME]. Mark only [SHIPPED STEP] in electric blue. Use 2px orthogonal lines, numbered stages, generous padding, and simple geometric nodes. No labels unless supplied verbatim.
```

### Faded background prompt

```text
[PASTE MASTER PROMPT]
Create a large sparse four-row GTM logic network with no text, no logo, no outer frame, and no background texture. White strokes and shapes for placement over #090a0c; exact blue #0b4fe8 only on one completion node. Keep most of the canvas empty. Intended use: cropped footer background at 10–16% opacity.
```

### Prompt QA

Reject generated work if any answer is “no”:

1. Is blue the only accent?
2. Can every logic shape be mapped to a GTM meaning?
3. Are logo and typography either exact assets or intentionally left for overlay?
4. Does the layout survive a mobile-feed thumbnail?
5. Is all copy supplied and approved rather than invented?
6. Are grid, spacing, and line weights visibly disciplined?

## 10. Layout system

Desktop canvas:

- Maximum visual working width is controlled by section padding, not a centered card container.
- Horizontal gutter: `clamp(20px, 6vw, 100px)`.
- Hero/header gutter: `clamp(20px, 4vw, 72px)`.
- Major section vertical space: 80–180px.
- Internal card padding: 22–58px.
- Grid gaps: 22–140px based on hierarchy.

Breakpoints:

- Wide desktop: above 1100px.
- Tablet/small desktop: 781–1100px.
- Mobile: up to 780px.
- Narrow mobile: up to 480px.

Grid rules:

- Every grid child that contains text must tolerate `min-width: 0`.
- Role cards are three columns desktop and one column mobile.
- Pricing is two columns desktop and one column mobile.
- Capabilities are four columns wide, two columns tablet, one column mobile.
- Footer is brand plus three link groups desktop; single-column shell on mobile.

## 11. Borders, shadows, and shape

- Default border: 1px ink.
- Dark border: 1px white at 20–26% opacity.
- Radius: zero, except circular progress indicators.
- Hero system shadow: hard electric-blue offset, no blur.
- Button hover shadow: hard ink offset, no blur.
- Never use soft card shadows, glass cards, or pill-shaped containers.

## 12. Components

### Buttons

Primary: electric-blue background, white text, ink border.
Dark: ink background, white text.  
Light-on-blue: paper background, ink text.  
Minimum height: 52px desktop, 44px mobile.  
Narrow mobile: important CTAs become full width.

Hover transforms apply only where hover exists. Keyboard focus must remain visible without relying on movement.

### Problem card

Required order: role label → symptom headline → business consequence. Cards stay visible together; do not convert them into tabs or a carousel.

### Workflow step

Required order: step number → verb-led title → explanation → cadence label. Keep the explanation under four lines on desktop where possible.

### Pricing card

Keep identical anatomy and comparable feature count. Pipeline Team uses the dark featured treatment. Feature differences must reflect actual service delivery.

### FAQ

Use native `details` and `summary`. The first item may open by default. Preserve keyboard interaction and a visible focus ring.

## 13. Responsive behavior

At 1100px:

- Hero becomes one column.
- Workflow and studio model become one column.
- Capability grid becomes two columns.
- Footer columns compress.

At 780px:

- Desktop navigation hides; primary header CTA remains.
- Header uses 16px side padding and a 44px CTA.
- Hero system follows hero copy.
- Signal strip becomes two columns.
- Problem, motion, pricing, first-ship, and FAQ layouts stack.
- Pricing cards lose forced minimum height.
- FAQ headings stop sticking.
- Footer becomes one shell column; link groups may remain two-up.
- Major section gutters become 16px.
- Logic icons move below copy rather than compressing it.
- Role cards lose forced tall heights.

At 480px:

- Remove hero-system and ticket rotation.
- Make primary hero and first-ship buttons full width.
- Motion numbers move above text.
- Footer link groups stack.
- Price toplines wrap.

Mandatory test widths: 320, 375, 390, 430, 768, 1024, and 1440px.

## 14. Accessibility

- Maintain WCAG AA contrast for body text.
- All interactive targets are at least 44px high on touch layouts.
- Preserve semantic landmarks: header, nav, main, sections, footer.
- Every section anchor uses a sticky-header scroll offset.
- Do not encode state by color alone.
- Decorative visuals use `aria-hidden`; explanatory visuals get useful labels.
- Respect `prefers-reduced-motion`.
- Test at 200% zoom.
- Test keyboard order through header, CTAs, pricing, FAQ, and footer.
- No horizontal scroll at 320px.

## 15. Interaction rules

- Motion should communicate response, not decorate idle states.
- Navigation underline: 180ms.
- Button lift: 150ms, hover-capable devices only.
- FAQ indicator rotation: 180ms.
- Hero motion stages are buttons. Selection updates status, explanation, and output ticket with an `aria-live` announcement.
- A continuous logic circuit draws from the hero system through measured section anchors and connects to the shipped check in the footer.
- On desktop, the route travels across the page and connects to real problem, motion, and capability nodes. Problem cards use an input, AND gate, and outcome sequence. Capability cards use a repeated square, AND, decision, and outcome grammar.
- Each grid reserves a signal band between its meta label and headline. Circuit lines may only occupy this band or a section perimeter.
- Copy sits on an opaque content layer above the circuit, so responsive reflow can never leave a line visible through text.
- Reached cards receive only a quiet surface tint. The current card receives a short electric status edge; structural card borders stay ink.
- On mobile, the route collapses to a narrow edge rail while the same in-card nodes activate in sequence.
- The circuit uses a passive scroll listener, cached SVG path length, and one `requestAnimationFrame` loop. Reduced-motion mode renders the completed route without a traveling pulse.
- First-ship starting points are direct, pre-addressed email links with hover, press, and keyboard focus states.
- No scroll-jacking, marquee, autoplay media, or parallax.

## 16. External destinations and dependencies

Current safe placeholders:

- Production domain: `growandclose.com`; live on Cloudflare Workers.
- Email CTAs: `hello@growandclose.com`.
- Payment: not connected.
- Newsletter: not connected.
- Calendar: intentionally omitted.
- LinkedIn: intentionally omitted.

Required from owner before enabling each dependency:

1. Add supplied A, CNAME, and ownership-verification TXT records at the DNS provider.
2. Confirm inbox receiving `hello@growandclose.com`.
3. Add Resend API key and verify sending domain privately.
4. Add Razorpay subscription/payment links or product IDs.
5. Supply exact calendar URL, if calls are offered.
6. Supply exact LinkedIn/company URLs, if included.
7. Approve proof: customer names, logos, testimonials, or quantified outcomes.
8. Approve Privacy and Terms copy before collecting payment or newsletter data.

Never commit secrets. Use host-managed environment variables.

## 17. Social card

Canvas: 1200 × 630px.  
Copy: brand name, “Your GTM backlog, shipped.”, and “Senior-led GTM execution for B2B SaaS.”  
Style: ink/paper field, electric-blue completion node, G/C mark, GTM logic system.
Safe zone: keep critical copy 72px from every edge.  
Use no orange, lime, green, gradient, or unapproved accent.

## 18. Implementation guardrails

- Prefer server-rendered static content.
- Avoid client JavaScript unless interaction requires it.
- Keep content arrays at the top of `app/page.tsx` for easy editing.
- Keep tokens in `:root`; do not scatter new hex values through components.
- Reuse existing classes before creating near-duplicates.
- Prefer checked-in deterministic SVG diagrams over model-redrawn icons.
- No stock-person photography.
- No fake dashboard screenshots.
- No dependency for a component CSS can express.
- Keep the page functional if images fail.

## 19. Preflight checklist

Content:

- [ ] Founder, CMO, and Head of Marketing are named.
- [ ] Each role has a distinct problem statement.
- [ ] Offer is described as a motion, not asset volume.
- [ ] Pipeline One and Team capacity difference is explicit.
- [ ] AI follows senior human accountability.
- [ ] No unsupported proof exists.

Design:

- [ ] No lime green remains.
- [ ] No orange remains.
- [ ] G/C logo is legible at mobile size.
- [ ] Blue is the only accent and marks action, progress, or completion.
- [ ] Logic symbols follow the defined GTM meaning map.
- [ ] No horizontal overflow at 320px.
- [ ] Footer has Explore, Engage, and Contact.
- [ ] Social card matches the current palette.

Interaction and accessibility:

- [ ] All anchors clear the sticky header.
- [ ] Focus rings are visible.
- [ ] Touch targets meet 44px minimum.
- [ ] Reduced motion works.
- [ ] FAQ works by keyboard.
- [ ] 200% zoom preserves reading order.

Commercial wiring:

- [ ] Domain resolves with valid TLS.
- [ ] Inbox receives every mailto CTA.
- [ ] Resend domain is verified before newsletter launch.
- [ ] Razorpay links complete a real test payment.
- [ ] Privacy and Terms exist before form/payment collection.
- [ ] Analytics events are documented before adding scripts.

Release:

- [ ] `npm run build` passes.
- [ ] Server-render test passes.
- [ ] Metadata uses the production domain.
- [ ] Open Graph image returns 200.
- [ ] Mobile width matrix checked.
- [ ] CTA destinations checked manually.
- [ ] Private preview approved before public deployment.

## 20. Never do

- Reintroduce orange, lime, green, or an unapproved secondary accent.
- Ask a model to recreate an existing logo or checked-in logic asset.
- Turn the visual system into generic SaaS gradients and rounded cards.
- Lead with AI agents instead of buyer outcomes.
- Present the future team as current headcount.
- Add testimonials, logos, or numbers without written approval.
- Hide pricing behind “book a demo.”
- Add social/calendar links with guessed URLs.
- Add mobile carousels for core information.
- Create a second primary CTA competing with the free-priority offer.
- Publish a credential, API key, or payment secret.
