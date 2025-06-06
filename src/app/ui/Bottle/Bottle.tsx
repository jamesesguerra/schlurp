"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { bottleDesktopAnimations, bottleMobileAnimations } from './bottle-tweens';

const Bottle = () => {
  gsap.registerPlugin(ScrollTrigger);

  const bottleContainer = useRef<HTMLDivElement | null>(null);
  const bottle = useRef(null);
  const containerRef = useRef(null);

  const [flavorSrc, setFlavorSrc] = useState('/blue-bottle.png');

  useGSAP(
    (context) => {
      const mm = gsap.matchMedia();

      requestAnimationFrame(() => {
        mm.add("(max-width: 1023px)", () => {
          bottleMobileAnimations({ bottleContainer, bottle, setFlavorSrc });
        });

        mm.add("(min-width: 1024px)", () => {
          bottleDesktopAnimations({ bottleContainer, bottle, setFlavorSrc });
        });

        ScrollTrigger.refresh(); 
      });

      return () => mm.revert();
    },
    { scope: containerRef, revertOnUpdate: true }
  );

  return (
    <div ref={containerRef}>
      <div
        className="fixed top-[25rem] lg:top-50 2xl:top-[20rem] left-1/2 -translate-x-1/2 z-90 perspective-dramatic"
        ref={bottleContainer}
      >
        <Image
          className="backface-visible"
          src={flavorSrc}
          width={500}
          height={1000}
          alt="a bottle of Schlurp"
          ref={bottle}
          id="bottle"
        />
      </div>
    </div>
  );
};

export default Bottle;
