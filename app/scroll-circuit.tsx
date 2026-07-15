"use client";

import { useEffect, useRef, useState } from "react";

type CircuitKind = "square" | "diamond" | "circle";

type CircuitPoint = {
  key: string;
  kind: CircuitKind;
  overlay: boolean;
  progress: number;
  x: number;
  y: number;
};

type ScrollStop = {
  progress: number;
  scroll: number;
};

type CircuitGeometry = {
  complete: CircuitPoint;
  height: number;
  nodes: CircuitPoint[];
  path: string;
  stops: ScrollStop[];
  width: number;
};

type ActivationTarget = {
  element: HTMLElement;
  progress: number;
};

type RouteSource =
  | { selector: string }
  | { id: string; kind: CircuitKind; x: number; y: number };

const route: RouteSource[] = [
  { selector: "#problem [data-circuit-anchor]" },
  { selector: "#motions [data-circuit-anchor]" },
  { id: "workflow", kind: "square", x: 0.45, y: 0.16 },
  { selector: "#workflow [data-circuit-anchor]" },
  { selector: "#capabilities [data-circuit-anchor]" },
  { id: "studio", kind: "diamond", x: 0.52, y: 0.6 },
  { id: "pricing", kind: "square", x: 0.5, y: 0.68 },
  { id: "first-ship", kind: "circle", x: 0.5, y: 0.5 },
  { id: "faq", kind: "diamond", x: 0.38, y: 0.52 },
  { id: "closing", kind: "square", x: 0.84, y: 0.62 },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const overlayKind = (value: string | undefined): CircuitKind => {
  if (value === "diamond") return "diamond";
  if (value === "circle") return "circle";
  return "square";
};

function buildPath(points: CircuitPoint[]) {
  if (!points.length) return "";

  return points.slice(1).reduce((path, point, index) => {
    const previous = points[index];
    const bendY = previous.y + (point.y - previous.y) * 0.5;
    return `${path} V ${bendY} H ${point.x} V ${point.y}`;
  }, `M ${points[0].x} ${points[0].y}`);
}

export default function ScrollCircuit() {
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
    const main = document.querySelector("main");
    if (!(main instanceof HTMLElement)) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const measure = () => {
      const mainRect = main.getBoundingClientRect();
      const width = mainRect.width;
      const mobile = width <= 780;
      const outerRail = width - (mobile ? 5 : 30);
      const innerRail = width - (mobile ? 13 : 82);
      const motionDemo = document.getElementById("motion-demo");
      const demoRect = motionDemo?.getBoundingClientRect();

      if (!demoRect) return;

      const points: CircuitPoint[] = [{
        key: "start",
        kind: "square",
        overlay: false,
        progress: 0,
        x: clamp(demoRect.right - mainRect.left - 18, 0, outerRail),
        y: demoRect.bottom - mainRect.top - 18,
      }];
      const pointTargets: Array<HTMLElement | null> = [null];
      let mobileIndex = 0;

      route.forEach((source) => {
        if ("selector" in source) {
          const elements = Array.from(document.querySelectorAll<HTMLElement>(source.selector));
          if (!mobile && elements.some((element) => element.dataset.circuitOrder)) {
            elements.sort(
              (first, second) =>
                Number(first.dataset.circuitOrder) - Number(second.dataset.circuitOrder),
            );
          }
          elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            points.push({
              key: `${source.selector}-${points.length}`,
              kind: overlayKind(element.dataset.circuitKind),
              overlay: false,
              progress: 0,
              x: mobile
                ? (mobileIndex++ % 2 === 0 ? innerRail : outerRail)
                : rect.left - mainRect.left + rect.width * 0.5,
              y: rect.top - mainRect.top + rect.height * 0.5,
            });
            pointTargets.push(element.closest<HTMLElement>("[data-circuit-target]"));
          });
          return;
        }

        const element = document.getElementById(source.id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        points.push({
          key: source.id,
          kind: source.kind,
          overlay: true,
          progress: 0,
          x: mobile
            ? (mobileIndex++ % 2 === 0 ? innerRail : outerRail)
            : rect.left - mainRect.left + rect.width * source.x,
          y: rect.top - mainRect.top + rect.height * source.y,
        });
        pointTargets.push(null);
      });

      const footerLogic = document.querySelector(".footer-logic");
      const footerRect = footerLogic?.getBoundingClientRect();
      const completePoint = footerRect
        ? {
            key: "complete",
            kind: "circle" as const,
            overlay: false,
            progress: 1,
            x: footerRect.left - mainRect.left + footerRect.width * (1090 / 1200),
            y: footerRect.top - mainRect.top + footerRect.height * (538 / 630),
          }
        : {
            key: "complete",
            kind: "circle" as const,
            overlay: false,
            progress: 1,
            x: innerRail,
            y: main.scrollHeight - 80,
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

      const nextGeometry = {
        complete: measuredPoints[measuredPoints.length - 1],
        height: main.scrollHeight,
        nodes: measuredPoints.slice(1, -1).filter((point) => point.overlay),
        path: buildPath(measuredPoints),
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
        clamp(progress * 10, 0, 1) * clamp((1 - progress) * 18, 0, 1),
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
        element.dataset.circuitActive = String(reached);
      });

      let currentTarget: ActivationTarget | null = null;
      activationTargetsRef.current.forEach((target) => {
        if (target.progress > progress) return;
        if (!currentTarget || target.progress > currentTarget.progress) currentTarget = target;
      });
      activationTargetsRef.current.forEach((target) => {
        const isCurrent =
          target === currentTarget && progress - target.progress < 0.04;
        if (target.element.dataset.circuitCurrent !== String(isCurrent)) {
          target.element.dataset.circuitCurrent = String(isCurrent);
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
      const easing = 1 - Math.exp(-elapsed / 82);
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
      targetRef.current = reducedMotion.matches ? 1 : getScrollTarget();
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

    measure();
    window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("load", onResize, { once: true });
    reducedMotion.addEventListener("change", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
      reducedMotion.removeEventListener("change", update);
      activationTargetsRef.current.forEach(({ element }) => {
        delete element.dataset.circuitActive;
        delete element.dataset.circuitCurrent;
      });
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
    };
  }, []);

  if (!geometry) return null;

  const nodeSize = geometry.width <= 780 ? 4 : 5;

  return (
    <svg
      aria-hidden="true"
      className="scroll-circuit"
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
