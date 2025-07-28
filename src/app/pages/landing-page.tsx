"use client";
import React, { useEffect, useState, useRef } from "react";
import { flavors } from "../data/flavors";
import FlavorShowcase from "../components/flavors/flavor-showcase";
import Hero from "../components/ui/hero/hero";
import Bottle from "../components/ui/bottle/bottle";
import { useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
  const [flavorSrc, setFlavorSrc] = useState(flavors[0].bottleImage);
  const [bottleY, setBottleY] = useState(0);

  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [bottleScale, setBottleScale] = useState(1);

  const handleScrollProgress = (progress: number, index: number) => {
    const overallProgress = scrollYProgress.get();
    const clampedProgress = Math.max(0, Math.min(1, overallProgress));
    const adjustedProgress = Math.max(0, clampedProgress - 0.05); // Delay switch

    // Calculate which flavor should be active based on progress
    const activeFlavorIndex = Math.floor(adjustedProgress * flavors.length);
    const safeIndex = Math.min(activeFlavorIndex, flavors.length - 1);

    // Update the flavor source if it's different
    const newFlavorSrc = flavors[safeIndex].bottleImage;
    if (flavorSrc !== newFlavorSrc) {
      setFlavorSrc(newFlavorSrc);
    }

    // Handle bottle scaling animation
    if (progress >= 0.6 && progress <= 1.0) {
      const scaleProgress = Math.min((progress - 0.6) / 0.4, 1);
      const newScale = 1 - scaleProgress;
      setBottleScale(newScale);
    }

    // Handle bottle slide up animation (for non-first flavors)
    if (progress >= 0.2 && progress <= 0.4 && index !== 0) {
      const slideUpProgress = Math.min((progress - 0.2) / 0.2, 1); // 0 → 1 from 0.2 → 0.4
      const newY = 1000 - slideUpProgress * 1000; // 1000 → 0
      setBottleY(newY);
      setBottleScale(1); // fully visible again
    }
  };

  return (
    <div ref={containerRef}>
      <Hero ref={heroRef} />
      <div className="hidden lg:block">
        <Bottle src={flavorSrc} y={bottleY} scale={bottleScale} />
      </div>
      {flavors.map((flavor, index) => (
        <FlavorShowcase
          flavor={flavor}
          key={index}
          index={index}
          onScrollProgress={(progress: number) =>
            handleScrollProgress(progress, index)
          }
        />
      ))}
    </div>
  );
};

export default LandingPage;
