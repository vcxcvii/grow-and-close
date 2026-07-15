"use client";

import { useState } from "react";

const stages = [
  {
    number: "01",
    label: "Plan",
    meta: "Segment + angle",
    status: "READY",
    update: "Audience, signal, and offer defined.",
    ticketLabel: "MOTION BRIEF",
    ticketTime: "Tue / 2:00 PM",
  },
  {
    number: "02",
    label: "Ship",
    meta: "Page + sequence",
    status: "SHIPPING",
    update: "Landing page and outbound sequence in production.",
    ticketLabel: "CAMPAIGN LIVE",
    ticketTime: "Fri / 4:00 PM",
  },
  {
    number: "03",
    label: "Learn",
    meta: "Signal + next move",
    status: "NEXT",
    update: "Replies and conversions shape the next move.",
    ticketLabel: "SIGNAL REVIEW",
    ticketTime: "Mon / 11:00 AM",
  },
] as const;

export default function MotionDemo() {
  const [activeStage, setActiveStage] = useState(1);
  const active = stages[activeStage];

  return (
    <div className="hero-system" id="motion-demo" aria-label="Interactive pipeline motion from priority to learning">
      <div className="system-topline">
        <span>ACTIVE MOTION / 01</span>
        <span className="live-dot">{active.status}</span>
      </div>
      <p className="system-label">CURRENT PRIORITY</p>
      <h2>Turn dormant leads into qualified conversations.</h2>
      <div className="system-stage-controls" aria-label="Explore the motion stages">
        {stages.map((stage, index) => (
          <button
            className="system-stage"
            data-state={index < activeStage ? "complete" : index === activeStage ? "active" : "pending"}
            key={stage.number}
            onClick={() => setActiveStage(index)}
            type="button"
            aria-pressed={index === activeStage}
          >
            <span>{stage.number}</span>
            <b>{stage.label}</b>
            <small>{stage.meta}</small>
          </button>
        ))}
      </div>
      <p className="system-feedback" aria-live="polite">{active.update}</p>
      <div className="ship-ticket">
        <span>SELECTED STAGE</span>
        <strong>{active.ticketLabel}</strong>
        <span>{active.ticketTime}</span>
      </div>
    </div>
  );
}
