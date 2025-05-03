"use client";

import React from 'react'
import Bottle from '@/app/ui/Bottle/Bottle';
import FlavorShowcase from '@/app/ui/FlavorShowcase/FlavorShowcase';
import { flavors } from '@/app/data/flavors';

const Hero = () => {
 
  return (
    <div>
      <section className="container mx-auto pt-4 pb-10 relative z-100 max-w-none bg-white px-5 lg:px-0">
          <h3 className="font-bold text-8xl md:text-9xl tracking-wide font-accent pb-5 h-[55dvh] lg:h-auto">
              WE MAKE <br />
              ALL NATURAL <br />
              CHOCOLATE <br />
              BARS. <br />
          </h3>

          <a href="" className="font-accent underline decoration-solid text-xl">READ ABOUT COPENHAGEN CHOCOLATE FACTORY</a>
      </section>

      <Bottle />
      
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