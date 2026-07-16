"use client";

import Link from "next/link";

import { useScrollDrivenStage } from "../use-scroll-driven-stage";

const circuitStages = [
  {
    label: "Capture",
    title: "Pull founder truth into a governed source.",
    copy: "Interviews, calls, product decisions, old writing, customer language, and proof become reusable context, not another disappearing brief.",
    inputs: "FOUNDER SOURCE",
    outputs: "VOICE SPEC · CLAIM LIBRARY",
  },
  {
    label: "Create",
    title: "Turn one idea into channel-native media.",
    copy: "The thesis stays coherent while each format earns its shape: LinkedIn post, carousel, visual story, newsletter section, and sales-ready excerpt.",
    inputs: "ONE STRONG IDEA",
    outputs: "SOCIAL · VISUAL · OWNED",
  },
  {
    label: "Own",
    title: "Give borrowed attention somewhere to return.",
    copy: "Newsletter, archive, welcome flow, and useful segmentation convert a temporary feed impression into an audience the company can reach again.",
    inputs: "EARNED ATTENTION",
    outputs: "SUBSCRIBERS · ARCHIVE · SEGMENTS",
  },
  {
    label: "Amplify",
    title: "Put spend and distribution behind proof.",
    copy: "Strong organic angles become thought-leadership ads, partner activations, retargeting creative, and deliberate ICP follow-up. Weak ideas do not get budget.",
    inputs: "PROVEN ANGLES",
    outputs: "PAID · PARTNERS · ICP REACH",
  },
  {
    label: "Learn",
    title: "Feed market response into the next idea.",
    copy: "Replies, saves, subscriber quality, engaged accounts, search demand, and pipeline context update the story map. Next cycle starts smarter.",
    inputs: "MARKET SIGNAL",
    outputs: "SIGNAL DIGEST · NEXT BET",
  },
] as const;

export function FounderCircuit() {
  const { activeIndex, announceChanges, sectionRef, selectStage } =
    useScrollDrivenStage(circuitStages.length);
  const activeStage = circuitStages[activeIndex];

  return (
    <section
      className="founder-circuit"
      aria-labelledby="founder-circuit-title"
      ref={sectionRef}
    >
      <div className="founder-circuit-intro">
        <p className="section-kicker section-kicker-light">INTERACTIVE SIGNAL CIRCUIT</p>
        <h2 id="founder-circuit-title">Touch any node. See what it feeds next.</h2>
        <p>
          Founder-led content compounds only when source, media, audience,
          amplification, and learning stay electrically connected.
        </p>
        <Link className="circuit-home-link" href="/#workflow">
          See the full Grow &amp; Close operating system <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="founder-circuit-board" data-active={activeIndex}>
        <div className="circuit-topline">
          <span>FOUNDER SIGNAL CIRCUIT / LIVE</span>
          <span className="live-dot">SELECT A NODE</span>
        </div>
        <div className="circuit-track" aria-label="Founder signal circuit stages">
          <div className="circuit-line" aria-hidden="true"><i /></div>
          {circuitStages.map((stage, index) => (
            <button
              aria-controls="circuit-stage-output"
              aria-pressed={activeIndex === index}
              className={activeIndex === index ? "is-active" : undefined}
              key={stage.label}
              onClick={() => selectStage(index)}
              type="button"
            >
              <span className="circuit-node-marker">{String(index + 1).padStart(2, "0")}</span>
              <b>{stage.label}</b>
            </button>
          ))}
        </div>

        <div
          className="circuit-output"
          id="circuit-stage-output"
          aria-live={announceChanges ? "polite" : "off"}
        >
          <div className="circuit-output-body" key={activeStage.label}>
            <div className="circuit-output-meta">
              <span>ACTIVE NODE / {String(activeIndex + 1).padStart(2, "0")}</span>
              <b>{activeStage.label}</b>
            </div>
            <h3>{activeStage.title}</h3>
            <p>{activeStage.copy}</p>
            <div className="circuit-io">
              <div><span>INPUT</span><b>{activeStage.inputs}</b></div>
              <div><span>OUTPUT</span><b>{activeStage.outputs}</b></div>
            </div>
          </div>
        </div>

        <div className="circuit-return">
          <span>RETURN PATH</span>
          <i aria-hidden="true" />
          <b>LEARNING RE-ENTERS THE SOURCE</b>
        </div>
      </div>
    </section>
  );
}
