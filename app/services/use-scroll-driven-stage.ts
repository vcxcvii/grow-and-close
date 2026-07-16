"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDrivenStage(stageCount: number) {
  const sectionRef = useRef<HTMLElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [announceChanges, setAnnounceChanges] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const updateFromScroll = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = window.scrollY + bounds.top;
      const start = sectionTop - viewportHeight * 0.2;
      const end = sectionTop + bounds.height - viewportHeight * 0.8;
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - start) / Math.max(1, end - start)),
      );
      const nextIndex = Math.min(
        stageCount - 1,
        Math.floor(progress * stageCount),
      );

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setAnnounceChanges(false);
        setActiveIndex(nextIndex);
      }
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [stageCount]);

  const selectStage = (index: number) => {
    activeIndexRef.current = index;
    setAnnounceChanges(true);
    setActiveIndex(index);
  };

  return { activeIndex, announceChanges, sectionRef, selectStage };
}
