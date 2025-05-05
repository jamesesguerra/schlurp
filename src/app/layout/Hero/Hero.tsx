import React from 'react'
import FlavorShowcase from '@/app/ui/FlavorShowcase/FlavorShowcase';
import { flavors } from '@/app/data/flavors';
import Bottle from '@/app/ui/Bottle/Bottle';

const Hero = () => {
  return (
    <div>
      <section
        className="container mx-auto pt-4 pb-10 relative z-100 max-w-none bg-white px-5 lg:px-0 h-[30rem] md:h-[40rem] lg:h-auto 2xl:h-[45rem]">
          <h3 className="font-bold text-7xl md:text-9xl tracking-tight lg:tracking-wide font-accent pb-5">
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

      <section className="min-h-[100dvh] pt-[3000px] border border-solid">
        <h1 className="text-9xl">hello world</h1>
      </section>
    </div>
  )
}

export default Hero