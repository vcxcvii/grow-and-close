export type LogicNodeKind = "square" | "and" | "diamond" | "circle";

export default function LogicNode({ kind, order }: { kind: LogicNodeKind; order?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`circuit-card-node circuit-card-node-${kind}`}
      data-circuit-anchor
      data-circuit-kind={kind}
      data-circuit-order={order}
    >
      <svg viewBox="0 0 72 44">
        {kind === "square" ? (
          <>
            <path className="logic-node-wire" d="M1 22h15M50 22h21" />
            <rect className="logic-node-core" height="28" width="34" x="16" y="8" />
          </>
        ) : null}
        {kind === "and" ? (
          <>
            <path className="logic-node-wire" d="M1 12h15M1 32h15M55 22h16" />
            <path className="logic-node-core" d="M16 6h18c14 0 21 7 21 16s-7 16-21 16H16Z" />
          </>
        ) : null}
        {kind === "diamond" ? (
          <>
            <path className="logic-node-wire" d="M1 22h17M54 22h17" />
            <path className="logic-node-core" d="m36 4 18 18-18 18-18-18Z" />
          </>
        ) : null}
        {kind === "circle" ? (
          <>
            <path className="logic-node-wire" d="M1 22h18M53 22h18" />
            <circle className="logic-node-core" cx="36" cy="22" r="17" />
          </>
        ) : null}
      </svg>
    </span>
  );
}
