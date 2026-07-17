"use client";

import { useState, type CSSProperties } from "react";

import type { CircuitVariant, ServicePageContent } from "./service-page-types";

type NodeKind = "input" | "gate" | "decision" | "checkpoint" | "outcome";

const nodePatterns: Record<CircuitVariant, readonly NodeKind[]> = {
  market: ["input", "gate", "decision", "checkpoint", "outcome"],
  argument: ["input", "gate", "checkpoint", "decision", "outcome"],
  conversation: ["input", "decision", "gate", "checkpoint", "outcome"],
  citation: ["input", "checkpoint", "gate", "decision", "outcome"],
  deal: ["input", "decision", "checkpoint", "gate", "outcome"],
  campaign: ["input", "gate", "decision", "checkpoint", "outcome"],
  decision: ["input", "checkpoint", "decision", "gate", "outcome"],
  evidence: ["input", "decision", "checkpoint", "gate", "outcome"],
};

const topologyPatterns: Record<CircuitVariant, readonly number[]> = {
  market: [0, 0, -12, 0, 0],
  argument: [0, -12, -12, 12, 0],
  conversation: [0, 12, 0, -12, 0],
  citation: [0, -12, 0, 12, 0],
  deal: [0, 12, 12, -12, 0],
  campaign: [0, -12, 12, -12, 0],
  decision: [0, 0, 12, 12, 0],
  evidence: [0, 12, -12, 12, 0],
};

interface ServiceHeroSystemProps {
  service: ServicePageContent;
}

export function ServiceHeroSystem({ service }: ServiceHeroSystemProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stage = service.stages[activeIndex];
  const nodeKinds = nodePatterns[service.circuitVariant];
  const offsets = topologyPatterns[service.circuitVariant];
  const topologyPoints = offsets
    .map((offset, index) => `${10 + (index * 20)},${23 + offset}`)
    .join(" ");
  const progress = service.stages.length > 1
    ? (activeIndex / (service.stages.length - 1)) * 100
    : 100;

  return (
    <div
      aria-label={`${service.systemName} interactive operating circuit`}
      className="hero-system service-hero-system"
      data-service-circuit-start
      data-variant={service.circuitVariant}
    >
      <div className="system-topline">
        <span>{service.systemName.toUpperCase()} / {service.number}</span>
        <span className="live-dot">CHOOSE A STAGE</span>
      </div>
      <div className="service-hero-status">
        <p className="system-label">ACTIVE STAGE / {String(activeIndex + 1).padStart(2, "0")}</p>
        <strong>{stage.label}</strong>
      </div>
      <h2>{stage.title}</h2>

      <div
        aria-label={`${service.systemName} stages`}
        className="service-hero-path"
      >
        <svg
          aria-hidden="true"
          className="service-hero-path-lines"
          preserveAspectRatio="none"
          viewBox="0 0 100 46"
        >
          <polyline points={topologyPoints} vectorEffect="non-scaling-stroke" />
          <polyline
            className="is-progress"
            pathLength="100"
            points={topologyPoints}
            style={{ "--hero-dash": 100 - progress } as CSSProperties}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {service.stages.map((item, index) => (
          <button
            aria-label={`${String(index + 1).padStart(2, "0")}: ${item.label}`}
            aria-pressed={activeIndex === index}
            data-kind={nodeKinds[index] ?? "checkpoint"}
            key={item.label}
            onClick={() => setActiveIndex(index)}
            style={{ "--hero-offset": `${offsets[index]}px` } as CSSProperties}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{item.label}</b>
          </button>
        ))}
      </div>

      <div className="service-hero-detail" aria-live="polite">
        <div><span>INPUT</span><b>{stage.input}</b></div>
        <div><span>HUMAN CHECK</span><b>{stage.checkpoint}</b></div>
        <div><span>DURABLE OUTPUT</span><b>{stage.output}</b></div>
      </div>
    </div>
  );
}
