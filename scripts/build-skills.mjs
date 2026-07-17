#!/usr/bin/env node
// Zips each skills-src/<name>/ into public/downloads/<name>-<hash>.skill and
// writes app/skills/skill-downloads.json mapping slug -> filename.
// Run manually after editing a SKILL.md, then commit the outputs:
//   node scripts/build-skills.mjs

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const srcDir = join(root, "skills-src");
const outDir = join(root, "public", "downloads");

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const manifest = {};

for (const name of readdirSync(srcDir).filter((d) => !d.startsWith("."))) {
  const skillMd = readFileSync(join(srcDir, name, "SKILL.md"));
  const hash = createHash("sha256").update(skillMd).digest("hex").slice(0, 10);
  const filename = `${name}-${hash}.skill`;
  execFileSync("zip", ["-r", "-X", join(outDir, filename), name], {
    cwd: srcDir,
    stdio: "pipe",
  });
  manifest[name] = filename;
}

writeFileSync(
  join(root, "app", "skills", "skill-downloads.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);

console.log("Built skills:", manifest);
