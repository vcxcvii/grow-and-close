"use client";

import { useRef, useState } from "react";

// Kept as shared API for existing circuit components. Stage changes are intentionally
// user-controlled; scroll position must never override a deliberate selection.
export function useScrollDrivenStage(stageCount: number) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [announceChanges, setAnnounceChanges] = useState(false);

  const selectStage = (index: number) => {
    setAnnounceChanges(true);
    setActiveIndex(Math.min(Math.max(index, 0), stageCount - 1));
  };

  return { activeIndex, announceChanges, sectionRef, selectStage };
}
