export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BreadcrumbStep {
  name: string;
  item: string;
}

/**
 * Shared BreadcrumbList builder. `steps` runs root-first (e.g. Home, then
 * Services, then the current page); `item` is an absolute URL.
 */
export function buildBreadcrumbJsonLd(steps: BreadcrumbStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: steps.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: step.item,
    })),
  };
}
