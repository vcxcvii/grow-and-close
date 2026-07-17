"use client";

import { useEffect, useRef, useState } from "react";

import type { CircuitVariant } from "./service-page-types";

type PageCircuitVariant = CircuitVariant | "founder" | "pillar" | "about";
type CircuitKind = "square" | "diamond" | "circle";
type PathMode = "horizontal" | "stair" | "vertical";

interface CircuitPattern {
  bends: readonly number[];
  kinds: readonly CircuitKind[];
  mode: PathMode;
  rails: readonly number[];
}

interface CircuitPoint {
  key: string;
  kind: CircuitKind;
  progress: number;
  x: number;
  y: number;
}

interface ScrollStop {
  progress: number;
  scroll: number;
}

interface CircuitGeometry {
  complete: CircuitPoint;
  height: number;
  nodes: CircuitPoint[];
  path: string;
  stops: ScrollStop[];
  width: number;
}

interface ActivationTarget {
  element: HTMLElement;
  progress: number;
}

const patterns: Record<PageCircuitVariant, CircuitPattern> = {
  market: {
    bends: [0.28, 0.72, 0.42],
    kinds: ["square", "diamond", "circle"],
    mode: "vertical",
    rails: [0.08, 0.5, 0.92, 0.24, 0.76],
  },
  argument: {
    bends: [0.34, 0.66],
    kinds: ["square", "square", "diamond", "square", "circle"],
    mode: "horizontal",
    rails: [0.08, 0.32, 0.68, 0.92, 0.5],
  },
  conversation: {
    bends: [0.22, 0.58, 0.78],
    kinds: ["circle", "diamond", "square"],
    mode: "vertical",
    rails: [0.92, 0.1, 0.86, 0.14, 0.72],
  },
  founder: {
    bends: [0.4, 0.7, 0.3],
    kinds: ["diamond", "square", "circle", "square"],
    mode: "horizontal",
    rails: [0.5, 0.92, 0.1, 0.82, 0.18],
  },
  pillar: {
    bends: [0.2, 0.5, 0.8],
    kinds: ["square", "diamond", "circle", "diamond"],
    mode: "stair",
    rails: [0.5, 0.08, 0.92, 0.3, 0.7],
  },
  about: {
    bends: [0.16, 0.48, 0.84, 0.32],
    kinds: ["diamond", "circle", "square", "diamond", "circle"],
    mode: "stair",
    rails: [0.84, 0.16, 0.5, 0.92, 0.08, 0.68, 0.32],
  },
  citation: {
    bends: [0.18, 0.5, 0.82],
    kinds: ["circle", "circle", "diamond", "circle"],
    mode: "vertical",
    rails: [0.08, 0.92, 0.5, 0.18, 0.82],
  },
  deal: {
    bends: [0.5],
    kinds: ["square", "diamond", "square", "circle"],
    mode: "stair",
    rails: [0.1, 0.28, 0.46, 0.64, 0.82, 0.94],
  },
  campaign: {
    bends: [0.25, 0.75],
    kinds: ["diamond", "circle", "square", "circle"],
    mode: "horizontal",
    rails: [0.5, 0.88, 0.5, 0.12],
  },
  decision: {
    bends: [0.38, 0.62],
    kinds: ["square", "square", "diamond", "circle"],
    mode: "stair",
    rails: [0.92, 0.72, 0.52, 0.32, 0.12],
  },
  evidence: {
    bends: [0.2, 0.8, 0.5],
    kinds: ["circle", "diamond", "circle", "square"],
    mode: "vertical",
    rails: [0.08, 0.92, 0.92, 0.08, 0.5],
  },
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function buildPath(points: CircuitPoint[], pattern: CircuitPattern) {
  if (!points.length) return "";

  return points.slice(1).reduce((path, point, index) => {
    const previous = points[index];
    const bend = pattern.bends[index % pattern.bends.length];

    if (pattern.mode === "stair") {
      return `${path} H ${point.x} V ${point.y}`;
    }

    if (pattern.mode === "horizontal") {
      const bendX = previous.x + (point.x - previous.x) * bend;
      return `${path} H ${bendX} V ${point.y} H ${point.x}`;
    }

    const bendY = previous.y + (point.y - previous.y) * bend;
    return `${path} V ${bendY} H ${point.x} V ${point.y}`;
  }, `M ${points[0].x} ${points[0].y}`);
}

interface ServiceScrollCircuitProps {
  variant: PageCircuitVariant;
}

export function ServiceScrollCircuit({ variant }: ServiceScrollCircuitProps) {
  const pattern = patterns[variant];
  const [geometry, setGeometry] = useState<CircuitGeometry | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGGElement>(null);
  const completeRef = useRef<SVGGElement>(null);
  const geometryRef = useRef<CircuitGeometry | null>(null);
  const activationTargetsRef = useRef<ActivationTarget[]>([]);
  const activationStateRef = useRef(new WeakMap<HTMLElement, boolean>());
  const pathLengthRef = useRef(0);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const lastFrameRef = useRef(0);

  useEffect(() => {
    geometryRef.current = geometry;
  }, [geometry]);

  useEffect(() => {
    const main = document.querySelector("main[data-service]");
    if (!(main instanceof HTMLElement)) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const measure = () => {
      const mainRect = main.getBoundingClientRect();
      const contentHeight = main.offsetHeight;
      const width = mainRect.width;
      const mobile = width <= 780;
      const outerRail = width - (mobile ? 16 : 30);
      const innerRail = mobile ? 16 : 30;
      const calmRails = [0.16, 0.16, 0.5, 0.5, 0.84, 0.84] as const;
      const startElement = main.querySelector<HTMLElement>("[data-service-circuit-start]");
      const startRect = startElement?.getBoundingClientRect();
      const firstRail = pattern.rails[0];
      const startPoint: CircuitPoint = {
        key: "start",
        kind: pattern.kinds[0],
        progress: 0,
        x: mobile
          ? innerRail
          : startRect
            ? clamp(startRect.left - mainRect.left + startRect.width * 0.5, innerRail, outerRail)
            : clamp(width * firstRail, innerRail, outerRail),
        y: startRect ? startRect.bottom - mainRect.top - 18 : 120,
      };
      const points: CircuitPoint[] = [startPoint];
      const pointTargets: Array<HTMLElement | null> = [null];
      const targets = Array.from(
        main.querySelectorAll<HTMLElement>("[data-service-circuit-target]"),
      );

      targets.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const fraction = calmRails[index % calmRails.length];
        const x = mobile ? innerRail : clamp(width * fraction, innerRail, outerRail);
        points.push({
          key: `${variant}-${index}`,
          kind: pattern.kinds[index % pattern.kinds.length],
          progress: 0,
          x,
          y: rect.top - mainRect.top + rect.height * 0.5,
        });
        pointTargets.push(element);
      });

      const lastRail = calmRails[(targets.length + 1) % calmRails.length];
      const completePoint: CircuitPoint = {
        key: "complete",
        kind: "circle",
        progress: 1,
        x: mobile ? innerRail : clamp(width * lastRail, innerRail, outerRail),
        y: contentHeight - 56,
      };
      points.push(completePoint);
      pointTargets.push(null);

      let distance = 0;
      const distances = points.map((point, index) => {
        if (index > 0) {
          const previous = points[index - 1];
          distance += Math.abs(point.x - previous.x) + Math.abs(point.y - previous.y);
        }
        return distance;
      });
      const totalDistance = Math.max(distance, 1);
      const measuredPoints = points.map((point, index) => ({
        ...point,
        progress: distances[index] / totalDistance,
      }));

      activationTargetsRef.current = pointTargets.flatMap((element, index) =>
        element ? [{ element, progress: measuredPoints[index].progress }] : [],
      );

      const viewport = window.innerHeight;
      const maxScroll = Math.max(document.documentElement.scrollHeight - viewport, 1);
      let previousScroll = clamp(measuredPoints[0].y - viewport * 0.72, 0, maxScroll);
      const stops = measuredPoints.map((point, index) => {
        const desired = index === measuredPoints.length - 1
          ? maxScroll
          : clamp(point.y - viewport * 0.56, 0, maxScroll);
        const scroll = index === 0 ? previousScroll : Math.max(desired, previousScroll + 8);
        previousScroll = Math.min(scroll, maxScroll);
        return { progress: point.progress, scroll: previousScroll };
      });

      const nextGeometry: CircuitGeometry = {
        complete: measuredPoints[measuredPoints.length - 1],
        height: contentHeight,
        nodes: measuredPoints.slice(1, -1),
        path: buildPath(measuredPoints, pattern),
        stops,
        width,
      };

      pathLengthRef.current = 0;
      geometryRef.current = nextGeometry;
      setGeometry(nextGeometry);
    };

    const paint = (progress: number) => {
      const path = progressPathRef.current;
      const pulse = pulseRef.current;
      const complete = completeRef.current;
      if (!path || !pulse || !complete) return;

      path.style.strokeDashoffset = String(1 - progress);
      if (!pathLengthRef.current) pathLengthRef.current = path.getTotalLength();
      const point = path.getPointAtLength(pathLengthRef.current * progress);
      pulse.setAttribute("transform", `translate(${point.x} ${point.y})`);
      pulse.style.opacity = String(
        0.55 * clamp(progress * 10, 0, 1) * clamp((1 - progress) * 18, 0, 1),
      );
      complete.style.opacity = String(clamp((progress - 0.96) / 0.04, 0, 1));

      svgRef.current?.querySelectorAll<SVGGElement>(".scroll-circuit-node").forEach((node) => {
        const reached = progress >= Number(node.dataset.threshold ?? 1);
        if (node.dataset.reached !== String(reached)) node.dataset.reached = String(reached);
      });

      activationTargetsRef.current.forEach(({ element, progress: threshold }) => {
        const reached = progress >= threshold;
        if (activationStateRef.current.get(element) === reached) return;
        activationStateRef.current.set(element, reached);
        element.dataset.pageCircuitActive = String(reached);
      });

      let currentTarget: ActivationTarget | null = null;
      activationTargetsRef.current.forEach((target) => {
        if (target.progress > progress) return;
        if (!currentTarget || target.progress > currentTarget.progress) currentTarget = target;
      });
      activationTargetsRef.current.forEach((target) => {
        const isCurrent = target === currentTarget;
        if (target.element.dataset.pageCircuitCurrent !== String(isCurrent)) {
          target.element.dataset.pageCircuitCurrent = String(isCurrent);
        }
      });
    };

    const getScrollTarget = () => {
      const currentGeometry = geometryRef.current;
      if (!currentGeometry?.stops.length) return 0;
      const stops = currentGeometry.stops;
      const scroll = window.scrollY;

      if (scroll <= stops[0].scroll) return stops[0].progress;
      if (scroll >= stops[stops.length - 1].scroll) return 1;

      for (let index = 1; index < stops.length; index += 1) {
        const next = stops[index];
        if (scroll > next.scroll) continue;
        const previous = stops[index - 1];
        const local = clamp(
          (scroll - previous.scroll) / Math.max(next.scroll - previous.scroll, 1),
          0,
          1,
        );
        return previous.progress + (next.progress - previous.progress) * local;
      }

      return 1;
    };

    const animate = (time: number) => {
      const elapsed = lastFrameRef.current ? Math.min(time - lastFrameRef.current, 64) : 16;
      lastFrameRef.current = time;
      const delta = targetRef.current - progressRef.current;
      const easing = 1 - Math.exp(-elapsed / 180);
      progressRef.current += delta * easing;

      if (Math.abs(delta) < 0.0004) progressRef.current = targetRef.current;
      paint(progressRef.current);

      if (progressRef.current !== targetRef.current) {
        frameRef.current = window.requestAnimationFrame(animate);
      } else {
        frameRef.current = null;
        lastFrameRef.current = 0;
      }
    };

    const update = () => {
      if (reducedMotion.matches) {
        targetRef.current = 1;
        progressRef.current = 1;
        paint(1);
        if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
        lastFrameRef.current = 0;
        return;
      }

      targetRef.current = getScrollTarget();
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    };

    let resizeFrame: number | null = null;
    const onResize = () => {
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => {
        measure();
        update();
        resizeFrame = null;
      });
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(main);
    measure();
    const initialFrame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    reducedMotion.addEventListener("change", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
      reducedMotion.removeEventListener("change", update);
      activationTargetsRef.current.forEach(({ element }) => {
        delete element.dataset.pageCircuitActive;
        delete element.dataset.pageCircuitCurrent;
      });
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      window.cancelAnimationFrame(initialFrame);
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
    };
  }, [pattern, variant]);

  if (!geometry) return null;

  const nodeSize = geometry.width <= 780 ? 4 : 5;

  return (
    <svg
      aria-hidden="true"
      className="scroll-circuit service-page-scroll-circuit"
      data-variant={variant}
      height={geometry.height}
      ref={svgRef}
      viewBox={`0 0 ${geometry.width} ${geometry.height}`}
      width="100%"
    >
      <path className="scroll-circuit-base" d={geometry.path} />
      <path
        className="scroll-circuit-progress"
        d={geometry.path}
        pathLength="1"
        ref={progressPathRef}
      />

      {geometry.nodes.map((node) => (
        <g
          className="scroll-circuit-node"
          data-threshold={node.progress}
          key={node.key}
          transform={`translate(${node.x} ${node.y})`}
        >
          {node.kind === "circle" ? <circle r={nodeSize} /> : null}
          {node.kind === "square" ? (
            <rect height={nodeSize * 2} width={nodeSize * 2} x={-nodeSize} y={-nodeSize} />
          ) : null}
          {node.kind === "diamond" ? (
            <path d={`M 0 ${-nodeSize - 1} L ${nodeSize + 1} 0 L 0 ${nodeSize + 1} L ${-nodeSize - 1} 0 Z`} />
          ) : null}
        </g>
      ))}

      <g className="scroll-circuit-pulse" ref={pulseRef}>
        <circle className="scroll-circuit-pulse-ring" r="7" />
        <circle r="3" />
      </g>

      <g
        className="scroll-circuit-complete"
        ref={completeRef}
        transform={`translate(${geometry.complete.x} ${geometry.complete.y})`}
      >
        <circle r="16" />
        <path d="m-7 0 5 5 10-11" />
      </g>
    </svg>
  );
}
