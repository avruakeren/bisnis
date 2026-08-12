"use client";

import { useEffect, useRef } from "react";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function StaggerReveal({
  children,
  className,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-revealed");
      return;
    }
    const sayReduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (sayReduce) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const kids = Array.from(el.children) as HTMLElement[];
          kids.forEach((kid, index) => {
            kid.style.transitionDelay = `${index * 90}ms`;
          });
          el.classList.add("is-revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`stagger-reveal ${className ?? ""}`}>
      {children}
    </div>
  );
}