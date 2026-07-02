"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function InteractionLayer() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    setTransitioning(true);
    const timeout = window.setTimeout(() => setTransitioning(false), 420);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className={`page-transition ${transitioning ? "is-active" : ""}`} aria-hidden="true" />
    </>
  );
}
