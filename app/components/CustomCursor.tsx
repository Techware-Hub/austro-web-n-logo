"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, label, summary, [role='button'], [role='tab'], " +
  ".portfolio-card, .pricing-card, .logo-service-card, .capability-card, .why-card, " +
  ".testimonial-card, .reel-card, .premium-service-card, .process-card, .logo-highlight-card, .logo-step-card";

export default function CustomCursor() {
  const layerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!layer || !dot || !ring) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let circleX = mouseX;
    let circleY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let running = false;
    let rafId = 0;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    place(ring, circleX, circleY);
    place(dot, dotX, dotY);

    const tick = () => {
      circleX += (mouseX - circleX) * 0.22;
      circleY += (mouseY - circleY) * 0.22;
      dotX += (mouseX - dotX) * 0.13;
      dotY += (mouseY - dotY) * 0.13;
      place(ring, circleX, circleY);
      place(dot, dotX, dotY);

      const settled =
        Math.abs(mouseX - circleX) < 0.1 &&
        Math.abs(mouseY - circleY) < 0.1 &&
        Math.abs(mouseX - dotX) < 0.1 &&
        Math.abs(mouseY - dotY) < 0.1;
      if (settled) {
        running = false;
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      layer.classList.remove("is-hidden");

      const target = event.target instanceof Element ? event.target : null;
      const active = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      dot.classList.toggle("is-active", active);
      ring.classList.toggle("is-active", active);

      if (reduced) {
        circleX = dotX = mouseX;
        circleY = dotY = mouseY;
        place(ring, circleX, circleY);
        place(dot, dotX, dotY);
      } else {
        startLoop();
      }
    };

    const onLeave = () => layer.classList.add("is-hidden");
    const onDown = () => ring.classList.add("is-press");
    const onUp = () => ring.classList.remove("is-press");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div ref={layerRef} className="cc-layer" aria-hidden="true">
      <div ref={ringRef} className="cc-ring" />
      <div ref={dotRef} className="cc-dot" />
    </div>
  );
}
