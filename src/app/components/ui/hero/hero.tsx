"use client";
import { useRef } from "react";

const Hero = ({ ref }: { ref: any}) => {

  return (
    <div className="hero-container pt-5 relative z-30" ref={ref}>
      <section className="container mx-auto bg-white px-5 lg:px-0 text-gray-800">
        <h3 className="font-bold text-7xl md:text-9xl tracking-tight lg:tracking-wide font-accent pb-5">
          WE MAKE <br />
          ALL NATURAL <br />
          CHOCOLATE <br />
          BARS. <br />
        </h3>

        <a href="" className="font-accent underline decoration-solid text-xl pb-10 block">
          READ ABOUT COPENHAGEN CHOCOLATE FACTORY
        </a>
      </section>
    </div>
  );
};

export default Hero;
