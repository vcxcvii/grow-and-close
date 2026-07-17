"use client";

import { useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface SkillDownloadFormProps {
  skillSlug: string;
  skillName: string;
}

export function SkillDownloadForm({ skillSlug, skillName }: SkillDownloadFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, skill: skillSlug }),
      });
      const payload = (await response.json()) as { downloadUrl?: string; error?: string };

      if (!response.ok || !payload.downloadUrl) {
        throw new Error(payload.error ?? "Something went wrong. Try again.");
      }

      window.gtag?.("event", "generate_lead", { skill: skillSlug });
      setDownloadUrl(payload.downloadUrl);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setStatus("error");
    }
  }

  if (status === "done" && downloadUrl) {
    return (
      <div className="skill-download-success">
        <p>
          <strong>{skillName}</strong> is yours. We also emailed you the link.
        </p>
        <a className="button button-primary" href={downloadUrl} download>
          Download the .skill file
        </a>
        <small>Install: Claude → Settings → Capabilities → Skills → upload the file.</small>
      </div>
    );
  }

  return (
    <form className="skill-download-form" onSubmit={handleSubmit}>
      <label htmlFor={`email-${skillSlug}`}>Work email</label>
      <div className="skill-download-row">
        <input
          id={`email-${skillSlug}`}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="button button-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Get the skill"}
        </button>
      </div>
      {error ? <p className="skill-download-error" role="alert">{error}</p> : null}
      <small>Free .skill file, sent to your inbox. No spam, unsubscribe anytime.</small>
    </form>
  );
}
