export interface SkillPageContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  cardSummary: string;
  heroLead: string;
  heroAccent: string;
  heroLede: string;
  whatItDoes: readonly string[];
  whoFor: string;
  inputExample: string;
  outputExample: string;
  steps: readonly { title: string; copy: string }[];
  faqs: readonly { question: string; answer: string }[];
  relatedService: { slug: string; name: string; pitch: string };
}
