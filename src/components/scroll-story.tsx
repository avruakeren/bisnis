"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(ScrollTrigger);
  } catch {
    // jsdom
  }
}

type Step = {
  key: string;
  label: string;
  node: React.ReactNode;
};

type ScrollStoryProps = {
  steps: Step[];
};

export default function ScrollStory({ steps }: ScrollStoryProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    html.classList.add("snap-scroll");

    const triggers: ScrollTrigger[] = [];

    try {
      const slides = sectionRef.current?.querySelectorAll("[data-step-index]");
      slides?.forEach((slide, index) => {
        const content = slide.querySelector(".scene-content");
        const image = slide.querySelector(".scene-image");
        if (!content) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        if (image) {
          tl.fromTo(
            image,
            { yPercent: -5, scale: 1.08 },
            { yPercent: 5, scale: 1.08, ease: "none" },
            0,
          );
        }

        tl.fromTo(
          content,
          { yPercent: 8, opacity: 0.85 },
          { yPercent: -4, opacity: 1, ease: "none" },
          0,
        );

        if (index === 0) {
          gsap.set(content, { yPercent: 0, opacity: 1 });
        }

        triggers.push(tl.scrollTrigger!);
      });

      ScrollTrigger.refresh();
    } catch {
      // jsdom
    }

    return () => {
      html.classList.remove("snap-scroll");
      triggers.forEach((t) => t.kill());
    };
  }, [steps.length]);

  return (
    <section ref={sectionRef}>
      {steps.map((step, index) => (
        <div
          key={step.key}
          data-step-index={index}
          className="relative h-screen w-full snap-start snap-always overflow-hidden"
        >
          {step.node}
        </div>
      ))}
    </section>
  );
}