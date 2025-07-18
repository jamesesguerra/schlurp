"use client";
import React, { useEffect, useState, useRef } from 'react';
import { flavors } from '../data/flavors';
import FlavorShowcase from '../components/flavors/flavor-showcase';
import Footer from '../components/layout/footer';
import Hero from '../components/ui/hero/hero';
import Bottle from '../components/ui/bottle/bottle';
import { useScroll, useTransform } from 'framer-motion';
import { useParallax } from '../utils/parallax';

const LandingPage = () => {
  const [flavorSrc, setFlavorSrc] = useState(flavors[0].bottleImage);
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  // Track scroll progress for the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to scale
  // const scale = useTransform(scrollYProgress, (progress) => {
  //   let currentScale = 1;
  //   flavors.forEach((_, index) => {
  //     const sectionStart = index / flavors.length;
  //     const sectionEnd = (index + 1) / flavors.length;
  //     const shrinkStart = sectionStart + 0.7; // Start shrinking 70% into the section
  //     const shrinkEnd = sectionStart + 0.9; // End shrinking 90% into the section

  //     if (progress >= shrinkStart && progress <= shrinkEnd) {
  //       // Scale down from 1 to 0.05
  //       currentScale = 1 - ((progress - shrinkStart) / (shrinkEnd - shrinkStart)) * 0.95;
  //     } else if (progress > shrinkEnd && progress <= sectionEnd && index < flavors.length - 1) {
  //       // Scale back up from 0.05 to 1 for the next section
  //       currentScale = 0.05 + ((progress - shrinkEnd) / (sectionEnd - shrinkEnd)) * 0.95;
  //     } else if (progress < shrinkStart && progress >= sectionStart) {
  //       // Maintain or reset to scale 1 within the current section
  //       currentScale = 1;
  //     }
  //   });
  //   return Math.max(currentScale, 0.05); // Ensure scale doesn't go below 0.05
  // });

useEffect(() => {
  const unsubscribe = scrollYProgress.on("change", (progress) => {
    // Clamp progress between 0 and 1
    const clampedProgress = Math.max(0, Math.min(1, progress));
    
    // Calculate which flavor should be active based on progress
    const activeFlavorIndex = Math.floor(clampedProgress * flavors.length);
    
    // Handle edge case where progress is exactly 1
    const safeIndex = Math.min(activeFlavorIndex, flavors.length - 1);
    
    // Update the flavor source if it's different
    const newFlavorSrc = flavors[safeIndex].bottleImage;
    const newFlavorBanner = flavors[safeIndex].bannerImage;

    if (flavorSrc !== newFlavorSrc) {
      setFlavorSrc(newFlavorSrc);
    }
  });

  return () => unsubscribe();
}, [scrollYProgress, flavorSrc, flavors]);

   const { scrollYProgress: heroScrollProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end center"],  // [top of ref, position of viewport], [end of ref, position of viewport]
    });

    const bottleY = useTransform(heroScrollProgress, [0, 1], [0,  -250]);

  return (
    <div ref={containerRef}>
      <Hero ref={heroRef} />
      <Bottle src={flavorSrc} y={bottleY}  />
      {flavors.map((flavor, index) => (
        <FlavorShowcase
          flavor={flavor}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

export default LandingPage;