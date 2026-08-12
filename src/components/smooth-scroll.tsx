"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let lenis: Lenis | null = null;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      let rafId = 0;
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis?.destroy();
      };
    } catch {
      // fallback: native scroll
    }
  }, []);

  return <>{children}</>;
}