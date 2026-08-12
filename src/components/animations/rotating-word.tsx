"use client";

import { useEffect, useState } from "react";

const words = ["Beres.", "Siap.", "Rapi."];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setIndex((value) => (value + 1) % words.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span key={index} className="animate-word">
      {words[index]}
    </span>
  );
}