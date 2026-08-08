"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { splitText } from "animejs/text";

export default function AnimatedHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof ResizeObserver === "undefined") return;
    if (
      typeof window.matchMedia !== "function" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const split = splitText(el, { chars: true });

    animate(split.chars, {
      opacity: { from: 0 },
      y: { from: "100%" },
      duration: 650,
      ease: "out(3)",
      delay: stagger(20),
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
    >
      Produk pembelajaran{" "}
      <span className="text-blue-500">siap pakai</span>{" "}
      untuk sekolah SD.
    </h1>
  );
}
