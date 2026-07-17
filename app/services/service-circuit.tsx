"use client";

import Link from "next/link";
import { useState } from "react";

import type { ServicePageContent } from "./service-page-types";

interface ServiceCircuitProps {
  service: ServicePageContent;
}

export function ServiceCircuit({ service }: ServiceCircuitProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = service.stages[activeIndex];
  const selectStage = (index: number) => {
    setActiveIndex(Math.min(Math.max(index, 0), service.stages.length - 1));
  };

  return (
    <section
      className="service-circuit"
      aria-labelledby={`${service.slug}-circuit-title`}
      data-service-circuit-target
    >
      <div className="service-circuit-intro">
        <p className="section-kicker section-kicker-light">INTERACTIVE {service.systemName}</p>
        <h2 id={`${service.slug}-circuit-title`}>{service.circuitHeading}</h2>
        <p>{service.circuitLede}</p>
        <Link className="circuit-home-link" href="/#workflow">
          See the full Grow &amp; Close operating system <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div
        className="service-circuit-board"
        data-active={activeIndex}
        data-variant={service.circuitVariant}
      >
        <div className="service-circuit-topline">
          <span>{service.systemName.toUpperCase()} / LIVE</span>
          <span className="live-dot">STAGE {activeIndex + 1} OF {service.stages.length}</span>
        </div>

        <div className="service-circuit-track" aria-label={`${service.systemName} stages`}>
          <div className="service-circuit-line" aria-hidden="true">
            <i />
          </div>
          {service.stages.map((stage, index) => (
            <button
              aria-controls={`${service.slug}-circuit-output`}
              aria-pressed={activeIndex === index}
              className={activeIndex === index ? "is-active" : undefined}
              key={stage.label}
              onClick={() => selectStage(index)}
              type="button"
            >
              <span className="service-circuit-marker">
                {String(index + 1).padStart(2, "0")}
              </span>
              <b>{stage.label}</b>
            </button>
          ))}
        </div>

        <div
          className="service-circuit-output"
          id={`${service.slug}-circuit-output`}
          aria-live="polite"
        >
          <div className="service-circuit-output-body" key={activeStage.label}>
            <div className="service-circuit-output-meta">
              <span>ACTIVE NODE / {String(activeIndex + 1).padStart(2, "0")}</span>
              <b>{activeStage.label}</b>
            </div>
            <h3>{activeStage.title}</h3>
            <p>{activeStage.copy}</p>
            <div className="service-circuit-io">
              <div><span>INPUT</span><b>{activeStage.input}</b></div>
              <div><span>OUTPUT</span><b>{activeStage.output}</b></div>
            </div>
            <div className="service-circuit-check">
              <span>HUMAN CHECKPOINT</span>
              <b>{activeStage.checkpoint}</b>
            </div>
            <div className="service-circuit-controls" aria-label="Circuit stage controls">
              <button
                disabled={activeIndex === 0}
                onClick={() => selectStage(activeIndex - 1)}
                type="button"
              >
                <span aria-hidden="true">←</span> Previous
              </button>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(service.stages.length).padStart(2, "0")}</span>
              <button
                disabled={activeIndex === service.stages.length - 1}
                onClick={() => selectStage(activeIndex + 1)}
                type="button"
              >
                Next <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="service-circuit-return">
          <span>RETURN PATH</span>
          <i aria-hidden="true" />
          <b>{service.returnLabel}</b>
        </div>
      </div>
    </section>
  );
}
