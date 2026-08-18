/**
 * Single source of truth for the two Pipeline subscription tiers. Both the
 * homepage pricing teaser and /pricing render from this. They used to be
 * two hand-duplicated copies of the same cards and had already drifted out
 * of sync with each other.
 *
 * Tiers are differentiated by backlog pressure (how many priorities are
 * stuck at once), not by job title: "founder" vs. "CMO" described the same
 * buyer and read as overlapping rather than distinct.
 */
export interface PricingPlan {
  id: "pipeline-one" | "pipeline-team";
  name: string;
  label: string;
  topline: string;
  price: number;
  description: string;
  features: string[];
  ctaTopic: string;
  featured?: boolean;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "pipeline-one",
    name: "PIPELINE ONE",
    label: "Pipeline One",
    topline: "1 MOTION IN FLIGHT",
    price: 3500,
    description:
      "For one priority stuck at a time. The backlog queues behind it, and each motion ships before the next one starts.",
    features: [
      "One motion in flight",
      "Unlimited prioritized backlog",
      "Visible progress + ship log",
      "Slack collaboration",
      "Monthly priority planning",
      "Pause or cancel monthly",
    ],
    ctaTopic: "Pipeline One: one motion in flight, $3,500 per month",
  },
  {
    id: "pipeline-team",
    name: "PIPELINE TEAM",
    label: "Pipeline Team",
    topline: "2 MOTIONS IN FLIGHT",
    price: 7000,
    description:
      "For two priorities stuck at once, usually because they're connected: positioning feeding a landing-page rebuild, or founder content feeding a campaign. Both move in parallel instead of waiting in line.",
    features: [
      "Two motions in flight",
      "Unlimited prioritized backlog",
      "Weekly operating review",
      "Reporting dashboard",
      "Multi-stakeholder coordination",
      "Monthly GTM planning",
    ],
    ctaTopic: "Pipeline Team: two motions in flight, $7,000 per month",
    featured: true,
    badge: "FOR TWO PRIORITIES AT ONCE",
  },
];
