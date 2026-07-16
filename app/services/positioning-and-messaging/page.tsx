import type { Metadata } from "next";

import { ServiceLandingPage } from "../service-landing-page";
import { positioningAndMessaging as service } from "../service-page-content";

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/services/${service.slug}` },
  openGraph: { title: `${service.heroLead} ${service.heroAccent}`, description: service.metaDescription, url: `https://growandclose.com/services/${service.slug}`, type: "website" },
};

export default function PositioningAndMessagingPage() {
  return <ServiceLandingPage service={service} />;
}
