"use client";

import Link from "next/link";
import { useState } from "react";

interface SkillDiagramItem {
  input: string;
  name: string;
  output: string;
  slug: string;
}

interface SkillsLibrarySystemProps {
  skills: SkillDiagramItem[];
}

export function SkillsLibrarySystem({ skills }: SkillsLibrarySystemProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const skill = skills[activeIndex];

  return (
    <div className="hero-system skills-library-system" aria-label="Interactive Claude skill library diagram">
      <div className="system-topline">
        <span>GTM SKILL LIBRARY / {String(skills.length).padStart(2, "0")}</span>
        <span className="live-dot">SELECT A SKILL</span>
      </div>
      <p className="system-label">INSTALLED WORKFLOW</p>
      <h2>{skill.name}</h2>

      <div className="skills-system-flow" aria-live="polite">
        <div className="skills-system-node" data-kind="input">
          <span>INPUT</span>
          <p>{skill.input}</p>
        </div>
        <i aria-hidden="true" />
        <div className="skills-system-node" data-kind="gate">
          <span>METHOD</span>
          <b>GUARDED WORKFLOW</b>
        </div>
        <i aria-hidden="true" />
        <div className="skills-system-node" data-kind="outcome">
          <span>OUTPUT</span>
          <p>{skill.output}</p>
        </div>
      </div>

      <div className="skills-system-selector" aria-label="Available Claude skills">
        {skills.map((item, index) => (
          <button
            aria-label={`${String(index + 1).padStart(2, "0")}: ${item.name}`}
            aria-pressed={activeIndex === index}
            key={item.slug}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{item.name}</b>
          </button>
        ))}
      </div>

      <Link className="skills-system-link" href={`/skills/${skill.slug}`}>
        Open {skill.name} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
