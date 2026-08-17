import { redirect } from "next/navigation";

/**
 * /contact was a secondary page nobody's primary CTA linked to. Folded into
 * /book-a-call, which now carries the calendar embed plus the email/skills
 * fallbacks this page used to hold. Kept as a redirect so old links and
 * bookmarks still land somewhere useful.
 */
export default function ContactPage() {
  redirect("/book-a-call");
}
