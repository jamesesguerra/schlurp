"use client";

import React, { useRef } from 'react'
import Image from 'next/image';
import FlavorShowcase from '@/app/ui/FlavorShowcase/FlavorShowcase';
import { flavors } from '@/app/data/flavors';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';


const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const bottleContainerRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
      gsap.to(bottleContainerRef.current, {
          scrollTrigger: {
          trigger: bottleContainerRef.current,
          scrub: true,
          start: "top+=50 top",
          end: "+=500"
          },
          y: -75
      });
  }, { scope: containerRef });
  
 
  return (
    <div>
      <section
        className="container mx-auto pt-4 pb-10 relative z-100 max-w-none bg-white px-5 lg:px-0 h-[30rem] md:h-[40rem] lg:h-auto">
          <h3 className="font-bold text-7xl md:text-9xl lg:tracking-wide font-accent pb-5">
              WE MAKE <br />
              ALL NATURAL <br />
              CHOCOLATE <br />
              BARS. <br />
          </h3>

          <a href="" className="font-accent underline decoration-solid text-xl">READ ABOUT COPENHAGEN CHOCOLATE FACTORY</a>
      </section>

      <div className="fixed top-[55vh] lg:top-50 left-1/2 -translate-x-1/2 z-90" ref={bottleContainerRef}>
          <Image src="/bottle.png" width={500} height={1000} alt="a bottle of Schlurp" />
      </div>
      
      <section className="space-y-[400px]">
        { flavors.map((flavor, index) => {
            return (<FlavorShowcase isFirst={index === 0} flavor={flavor} key={index} />)
          })
        }
      </section>
    </div>
  )
}

export default Hero