---
name: gtm-dashboard-spec
description: >
  Design a GTM reporting dashboard spec for a B2B SaaS team: the questions it
  must answer, the exact metrics with definitions and formulas, data sources,
  and layout — ready to hand to whoever builds it in Looker, HubSpot, Metabase,
  or a spreadsheet. Use when the user asks what GTM metrics to track, wants a
  pipeline or marketing dashboard, complains that reporting is a mess, or is
  preparing board/leadership reporting.
---

# GTM Dashboard Spec

A dashboard is a set of questions with numbers attached. Specify the questions
first; tools and charts come last.

## Step 1: Identify the audience and cadence

Ask who looks at this and when. Different audiences get different dashboards —
never one dashboard for all three:

- **Operator** (daily/weekly): what needs action this week
- **Leadership** (weekly/monthly): is the machine working, where's the constraint
- **Board** (quarterly): trajectory, efficiency, predictability

## Step 2: Write the questions before the metrics

5–7 questions the audience actually argues about. Examples by audience:

- Operator: "Which campaigns created qualified pipeline this month?" "Where do
  deals stall?" "What's outbound reply rate by segment this week?"
- Leadership: "Is pipeline coverage sufficient for next quarter's target?"
  "What's CAC payback by channel?" "Is win rate moving, and why?"
- Board: "Is net-new ARR growth efficient (burn multiple, magic number)?"
  "How predictable is the pipeline (forecast vs. actual, last 4 quarters)?"

Every metric on the dashboard must serve one of the questions. A metric with
no question is decoration — cut it.

## Step 3: Define every metric like an engineer

For each metric produce a definition block. Ambiguity here is why teams argue
about numbers instead of decisions:

```
**Metric**: Qualified pipeline created
**Formula**: Σ amount of opportunities created in period where stage ≥ <qualification stage>
**Source**: <CRM> · object: Opportunity · fields: amount, created_date, stage
**Filters/exclusions**: renewals excluded, test accounts excluded, currency normalized
**Owner**: <who fixes it when it looks wrong>
**Target/benchmark**: <number, or "baseline TBD after 1 quarter">
```

Force decisions on the classic ambiguities: MQL definition, pipeline stage
that counts as "qualified", attribution model (pick one, name its known bias,
move on), whether expansion counts, date basis (created vs. closed).

## Step 4: Specify layout

Top-left is the most valuable pixel. Order: the one number that summarizes
health → the questions in priority order → supporting breakdowns. Max ~12
tiles; a dashboard that scrolls twice is a report, not a dashboard.

For each tile: question it answers, metric(s), chart type (default: big
number + trend line; bar for comparisons; table for "which ones" questions —
avoid pies), time grain, comparison (vs. target, vs. prior period).

## Step 5: Name the data gaps

List every metric the current stack can't produce cleanly, the missing piece
(field, integration, hygiene rule), and the workaround until it's fixed.
A spec that pretends the data is clean gets abandoned in week 2.

## Output

Deliver as one document: audience + cadence, questions, metric definition
blocks, tile-by-tile layout, data gaps, and a build checklist ordered so the
top-left tile ships first.
