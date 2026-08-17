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
    topline: "1 ACTIVE MOTION",
    price: 3500,
    description:
      "For one priority stuck at a time. The backlog queues behind it, and each motion ships before the next one starts.",
    features: [
      "One active pipeline motion",
      "Unlimited prioritized backlog",
      "Weekly shipping + ship log",
      "Slack collaboration",
      "Monthly priority planning",
      "Pause or cancel monthly",
    ],
    ctaTopic: "Pipeline One: one active motion, $3,500 per month",
  },
  {
    id: "pipeline-team",
    name: "PIPELINE TEAM",
    label: "Pipeline Team",
    topline: "2 ACTIVE MOTIONS",
    price: 7000,
    description:
      "For two priorities stuck at once, usually because they're connected: positioning feeding a landing-page rebuild, or founder content feeding a campaign. Both move in parallel instead of waiting in line.",
    features: [
      "Two parallel pipeline motions",
      "Unlimited prioritized backlog",
      "Weekly operating review",
      "Reporting dashboard",
      "Multi-stakeholder coordination",
      "Monthly GTM planning",
    ],
    ctaTopic: "Pipeline Team: two active motions, $7,000 per month",
    featured: true,
    badge: "FOR TWO PRIORITIES AT ONCE",
  },
];
