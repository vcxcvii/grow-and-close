import { leads } from "../../../db/schema";
import { skillPages } from "../../skills/skill-page-content";
import skillDownloads from "../../skills/skill-downloads.json";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LeadPayload {
  email?: string;
  skill?: string;
}

// `cloudflare:workers` only resolves inside the Workers runtime, so both the
// env lookup and the DB module are loaded lazily to keep `vinext start` (Node)
// bootable.
async function getWorkerEnv(): Promise<Record<string, unknown> | null> {
  try {
    const { env } = await import("cloudflare:workers");
    return env as unknown as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function sendSkillEmail(email: string, skillName: string, downloadUrl: string) {
  const workerEnv = await getWorkerEnv();
  const apiKey = workerEnv?.RESEND_API_KEY as string | undefined;
  if (!apiKey) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Grow & Close <hello@growandclose.com>",
      to: [email],
      subject: `Your ${skillName} skill`,
      text: [
        `Here's your ${skillName} Claude skill:`,
        "",
        `Download: https://growandclose.com${downloadUrl}`,
        "",
        "Install: Claude → Settings → Capabilities → Skills → upload the .skill file.",
        "In Claude Code: unzip it into your skills directory.",
        "",
        "Questions, or a GTM backlog that needs shipping? Just reply.",
        "",
        "— Varun, Grow & Close",
        "https://growandclose.com",
      ].join("\n"),
    }),
  });
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = payload.email?.trim().toLowerCase() ?? "";
  const skillSlug = payload.skill ?? "";
  const skill = skillPages[skillSlug as keyof typeof skillPages];
  const fileName = (skillDownloads as Record<string, string>)[skillSlug];

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!skill || !fileName) {
    return Response.json({ error: "Unknown skill." }, { status: 400 });
  }

  const downloadUrl = `/downloads/${fileName}`;

  // Storage and email are best-effort: the visitor always gets the file.
  try {
    const { getDb } = await import("../../../db");
    const db = getDb();
    await db.insert(leads).values({ email, skillSlug });
  } catch (error) {
    console.error("lead insert failed", error);
  }

  try {
    await sendSkillEmail(email, skill.name, downloadUrl);
  } catch (error) {
    console.error("lead email failed", error);
  }

  return Response.json({ downloadUrl }, { status: 201 });
}
