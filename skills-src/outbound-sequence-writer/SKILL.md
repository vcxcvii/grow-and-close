---
name: outbound-sequence-writer
description: >
  Write a complete cold outbound sequence (email + LinkedIn) for one B2B SaaS
  segment: 4–6 touches, each earning the next, grounded in a real trigger and
  a specific point of view. Use when the user asks for cold emails, an outbound
  sequence, SDR messaging, or wants to activate a new segment or launch outbound
  for the first time.
---

# Outbound Sequence Writer (B2B SaaS)

Write outbound that reads like a sharp colleague noticed something — not like
a tool merged fields into a template.

## Prerequisites — refuse to write without these

1. **One segment, not "our ICP"**: a specific slice with a shared situation.
   If the user gives a broad target, narrow it first (offer 2–3 candidate
   slices and pick one together).
2. **A trigger**: the observable event that makes *now* the right time (hired
   a RevOps lead, migrated stacks, posted a job, raised, shipped a feature).
3. **A point of view**: one opinion about the prospect's situation the sender
   actually holds. No POV = no sequence; help the user find one by asking
   what they see broken in how these companies handle the problem today.
4. **The offer**: what a reply gets the prospect. A meeting is not an offer;
   an audit, a teardown, a benchmark, a relevant asset is.

## Sequence architecture

Default: 5 touches over ~3 weeks. Adjust to deal size (higher ACV = more
patience, more personalization per touch).

| Touch | Channel | Job |
|-------|---------|-----|
| 1 | Email | Name the trigger + situation, state the POV, small ask |
| 2 | Email (+2d) | New angle on same POV — evidence or example, not "bumping this" |
| 3 | LinkedIn | Connect, no pitch. One line referencing something true about them |
| 4 | Email (+5d) | The give: the offer itself, no strings |
| 5 | Email (+7d) | Straight close: honest, short, permission to say no |

## Writing rules — apply to every touch

- **Under 90 words** for emails. Touch 5 under 50.
- **First line is about them**, verifiable, and impossible to send to anyone
  else in the segment... but templatable via the trigger. Never "I hope this
  finds you well", never "My name is".
- **One idea per email.** One link max. One question max.
- **Subject lines**: 2–4 words, lowercase, specific ("your sdr ramp",
  "re: the pricing page"). No clickbait, no "quick question".
- **No sequence-speak**: "just floating this to the top", "any thoughts?",
  "did you get my last email?" — banned.
- **The ask ladder**: interest ("worth a look?") before time ("15 minutes?").
  Never open with a calendar link.

## Output format

```
## Sequence: <segment> · trigger: <trigger>
**POV**: <one sentence>
**Offer**: <what a reply earns them>

### Touch 1 — Email · Day 0
Subject: <subject>
<body>
*Why this works*: <one line>

...(all touches)...

### Personalization slots
<List each {variable} used, with 2 real-looking example values and where an SDR finds it in 2 minutes>

### Kill criteria
<When to stop: replies handling, opt-out language, and the signal that means this segment/angle is dead (e.g. <1% reply after 100 sends)>
```

## Quality bar

Read each email aloud. If it sounds like software wrote it, rewrite it.
If every email in the sequence could be sent by any vendor to any company,
start over from the POV step.
