/**
 * The published scoring standard for the GTM Reset sprint's first deliverable.
 *
 * This file exists because /pricing, /book-a-call and the service pages all
 * promise a "published rubric" the buyer sees before paying, and tie a no-invoice
 * guarantee to it. Until this page shipped, that rubric was not published
 * anywhere, so the guarantee had no referent.
 *
 * Blocking criteria are the guarantee: if any one of them fails, there is no
 * invoice. Quality criteria are scored and reported but do not trigger the
 * guarantee, because they are judgement calls rather than binary checks.
 */

export interface RubricCriterion {
  number: string;
  title: string;
  /** The one-sentence standard, written to be quotable on its own. */
  standard: string;
  /** What specifically gets checked, so the score is not an opinion. */
  check: string;
  /** Why this is the bar, tied to how the work actually fails without it. */
  because: string;
}

export const BLOCKING_CRITERIA: RubricCriterion[] = [
  {
    number: "01",
    title: "The argument is decided, not described",
    standard:
      "The deliverable states one claim and names what it rejects.",
    check:
      "A reader can say, without prompting, what the company is no longer claiming. If the deliverable only adds a claim, it fails.",
    because:
      "Production is cheap now, so adding a claim costs nothing and changes nothing. A position is what you refuse to say.",
  },
  {
    number: "02",
    title: "No borrowed language",
    standard:
      "No sentence in the rebuilt asset appears, in substance, on a named competitor's equivalent page.",
    check:
      "Three competitors are named at kickoff and their equivalent pages are read. Shared phrases are listed in the deliverable and removed from it.",
    because:
      "Interchangeable language is why buyers price-shop. If the copy would work on a competitor's site unchanged, it is not positioning.",
  },
  {
    number: "03",
    title: "The problem comes before the product",
    standard:
      "The asset names the buyer's problem before it names the product or the company.",
    check:
      "Read the asset top to bottom. The problem appears above the first mention of the product. Not in the same sentence, before it.",
    because:
      "Buyers do not hire a product, they hire a fix for something making their work worse. Naming the product first asks them to translate.",
  },
  {
    number: "04",
    title: "One metric, with a baseline that exists today",
    standard:
      "The measurement plan names qualified pipeline created, or the explicit proxy standing in for it, plus the current number and the expected direction.",
    check:
      "The baseline is a figure that can be pulled today, from a named source, with the date it was pulled. A target with no baseline fails.",
    because:
      "Without a number that already exists, nobody can tell afterwards whether the work did anything, which makes the next decision guesswork again.",
  },
  {
    number: "05",
    title: "A falsifier is written down before launch",
    standard:
      "The deliverable states what result would prove the approach wrong.",
    check:
      "The falsifier is in the document at handoff, dated. A reason invented after the numbers arrive does not count.",
    because:
      "An approach that cannot be wrong cannot be learned from, and a plan with no falsifier quietly becomes unfalsifiable spend.",
  },
];

export const QUALITY_CRITERIA: RubricCriterion[] = [
  {
    number: "06",
    title: "The handoff is specified",
    standard:
      "The deliverable names who does what next, by when, for the asset to work in the real world.",
    check:
      "Every dependency outside our control is listed with an owner and a date. Routing, follow-up timing, and approvals count as dependencies.",
    because:
      "The most expensive failure is a good asset with a broken handoff: the work is fine, the response time around it is not, and the result reads as a content problem.",
  },
  {
    number: "07",
    title: "Every claim traces to a source",
    standard:
      "Each factual or comparative claim carries a source, a figure, or gets cut.",
    check:
      "Superlatives and rankings are verified live at handoff, not from memory, and the check is dated in the deliverable.",
    because:
      "Unsourced claims are the ones a prospect disproves in one search, and ranking claims decay faster than the page does.",
  },
  {
    number: "08",
    title: "It is extractable by machines",
    standard:
      "The asset answers its question in the first two sentences of the relevant section, in a passage that stands alone.",
    check:
      "Each key passage is read in isolation. If it opens with an undefined 'this' or 'these', or buries the answer under setup, it is rewritten.",
    because:
      "Buyers increasingly arrive through an answer engine that quotes a paragraph, not a page. A passage that needs its neighbours cannot be quoted.",
  },
];

export const RUBRIC_FAQS = [
  {
    question: "When is the rubric scored?",
    answer:
      "At handoff of the first deliverable, before any invoice is issued. The score is written into the ship log with the evidence for each line, so the result is auditable rather than asserted.",
  },
  {
    question: "What happens if a blocking criterion fails?",
    answer:
      "There is no invoice for the sprint. You keep the deliverable and the ship log either way. This applies to the first deliverable of the GTM Reset sprint.",
  },
  {
    question: "Who decides whether a criterion passed?",
    answer:
      "Each blocking criterion is written to be checkable rather than judged: a named competitor set, a dated baseline figure, a falsifier present in the document. If we disagree on a line, the failing reading stands and there is no invoice.",
  },
  {
    question: "Do the quality criteria affect the guarantee?",
    answer:
      "No. Criteria 06 to 08 are scored and reported because they change how well the work performs, but they involve judgement, so tying a refund to them would make the guarantee an argument instead of a standard.",
  },
];
