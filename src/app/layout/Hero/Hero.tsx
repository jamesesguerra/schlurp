"use client";

import React from 'react'
import Bottle from '@/app/ui/Bottle/Bottle';
import FlavorShowcase from '@/app/ui/FlavorShowcase/FlavorShowcase';

const Hero = () => {
 
  return (
    <section>
      <div className="container mx-auto pt-4 pb-10 relative z-100 bg-white">
          <h3 className="font-bold text-9xl tracking-wide font-accent pb-5">
              WE MAKE <br />
              ALL NATURAL <br />
              CHOCOLATE <br />
              BARS. <br />
          </h3>

          <a href="" className="font-accent underline decoration-solid text-xl">READ ABOUT COPENHAGEN CHOCOLATE FACTORY</a>
      </div>

      <Bottle />
      
      <div className="space-y-[400px]">
        <FlavorShowcase isFirst={true} />
        <FlavorShowcase />
      </div>
    </section>
  )
}

export default Hero