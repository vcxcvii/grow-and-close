# Rainmaker

Rainmaker analyses https://growandclose.com. The conversation is the interface. The CLI
is deterministic plumbing for crawl, measurement, scoring, and memory.

## Start or resume

1. Run `rainmaker context --check`.
2. If no diagnosis exists, run `rainmaker audit`. It uses the built-in
   crawler by default and spends no provider credits.
3. Read the diagnosis before asking business questions.
4. Propose likely conversion paths from the crawl and ask the user to confirm them.
   After confirmation, edit `primary_conversion` and `secondary_conversion`
   in `rainmaker.config.yml`, then run `rainmaker audit --refresh`.
5. Run the `know-my-buyer` skill one question at a time.
6. Reconcile `rainmaker.config.yml` with confirmed answers: update
   `revenue_model`, `primary_conversion`, `secondary_conversion`, `acv`,
   `sales_cycle_days`, `icp_hint`, and `competitors`. Never invent a
   value. Do not run blueprint or map-my-site while `revenue_model` is
   `unknown`. Run `rainmaker audit --refresh` after saving.
7. Offer the three closest fixes, explain why each matters, then ask which to
   implement.

## Provider consent

Never use Firecrawl or context.dev because a key happens to exist in the
environment. Ask, once, rather than staying silent about it.

Before the first crawl, if either key is set: run `rainmaker keys --balances`,
tell the user what they actually have — provider and credits remaining — and
ask which crawler to use. The built-in one spends nothing and is the right
default for most sites; a paid provider renders JavaScript and reaches more of
a client-rendered site.

Write the answer to `crawl.provider` in `rainmaker.config.yml`. That is the
consent record, and every later audit honours it without asking again. Change
it only when the user asks. `--provider` still overrides it for one run.

Never let a crawl exceed the remaining balance. The preflight projects the cost
and refuses; do not pass `--allow-over-budget` on the user's behalf.

## Host model

Use the model already hosting this conversation. Do not ask for model API keys
unless the user explicitly chooses the standalone `rainmaker agent` command.
Never run `rainmaker agent` inside a host assistant. The host model conducts
the interview directly using the user's current assistant session.
Project skills are the portable plugin surface across assistants.

## Vocabulary

Explain each term in plain language the first time it appears.

**Tier** - how close a page is to money, from 0 to 4.

- **Tier 0** (Money changes hands): money changes hands here - pricing, demo, trial, signup, checkout, contact, booking.
- **Tier 1** (Decision): read right before buying - comparisons, alternatives, case studies, integrations, ROI.
- **Tier 2** (Solution): brings the right person in - use cases, how to solve X.
- **Tier 3** (Problem): general awareness - definitional and educational content.
- **Tier 4** (Ambient): no commercial role - about, careers, press, legal, archives.

Tier drives every score. `primary_conversion` seeds Tier 0.

**SERP verdict** - judgment made after reading live search results. `QUALIFY`
means go, `CONDITIONAL` means only under a named condition, and `KILL`
means do not write it.

**Authority budget** - how many new pages this site can realistically get
indexed and ranked per month.

**Topical completeness** - how much of a subject area the site covers.

## Recommendations

Every recommendation states:

1. What it is
2. Why it happens
3. What changes if they act, and what happens if they do not

## Shared references

Shared rules live in `skills/_shared/`. Deterministic numbers come from the
CLI. Never estimate a number the CLI can produce.
