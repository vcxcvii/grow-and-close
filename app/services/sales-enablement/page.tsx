import type { Metadata } from "next";

import { ServiceLandingPage } from "../service-landing-page";
import { salesEnablement as service } from "../service-page-content";

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/services/${service.slug}` },
  openGraph: { title: `${service.heroLead} ${service.heroAccent}`, description: service.metaDescription, url: `https://growandclose.com/services/${service.slug}`, type: "website" },
};

export default function SalesEnablementPage() {
  return <ServiceLandingPage service={service} />;
}
