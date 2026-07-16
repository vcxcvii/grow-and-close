export type CircuitVariant =
  | "market"
  | "argument"
  | "conversation"
  | "citation"
  | "deal"
  | "campaign"
  | "decision"
  | "evidence";

export interface ServiceStage {
  label: string;
  title: string;
  copy: string;
  input: string;
  output: string;
  checkpoint: string;
}

export interface ServicePageContent {
  number: string;
  slug: string;
  name: string;
  systemName: string;
  circuitVariant: CircuitVariant;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  heroAccent: string;
  heroLede: string;
  diagnosticName: string;
  ctaLabel: string;
  diagnosticHref: string;
  outcomes: readonly string[];
  problemHeading: string;
  problemLede: string;
  problems: readonly {
    title: string;
    copy: string;
  }[];
  symptom: string;
  rootCause: string;
  circuitHeading: string;
  circuitLede: string;
  stages: readonly ServiceStage[];
  returnLabel: string;
  assetHeading: string;
  assetLede: string;
  assets: readonly {
    label: string;
    title: string;
    copy: string;
  }[];
  packageHeading: string;
  packageLede: string;
  phases: readonly {
    period: string;
    title: string;
    copy: string;
    deliverables: string;
  }[];
  studioOwns: readonly string[];
  customerOwns: readonly string[];
  diagnosticHeading: string;
  diagnosticCopy: string;
  diagnosticIncludes: readonly string[];
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  closingKicker: string;
  closingHeading: string;
}
