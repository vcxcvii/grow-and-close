import { serviceOfferings } from "./service-offerings";

/**
 * The four metric levers, in the order they're always shown: Reach feeds
 * Capture feeds Convert feeds Compound. Single source of truth for grouping
 * services by lever, used by the header mega-menu and the footer so the two
 * never drift out of the same order again.
 */
const LEVER_GROUPS = [
  {
    label: "REACH",
    question: "Do the right people find you?",
    slugs: ["aeo-and-data-stories", "founder-led-content", "campaign-strategy"],
  },
  {
    label: "CAPTURE",
    question: "Do they turn into conversations?",
    slugs: ["landing-pages", "outbound-activation"],
  },
  {
    label: "CONVERT",
    question: "Do conversations turn into revenue?",
    slugs: ["positioning-and-messaging", "sales-enablement", "customer-advocacy"],
  },
  {
    label: "COMPOUND",
    question: "Do you know what worked?",
    slugs: ["gtm-dashboards"],
  },
] as const;

const serviceBySlug = new Map(
  serviceOfferings.map((service) => [service.slug, service]),
);

export const serviceLeverGroups = LEVER_GROUPS.map((group) => ({
  label: group.label,
  question: group.question,
  services: group.slugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service)),
}));
