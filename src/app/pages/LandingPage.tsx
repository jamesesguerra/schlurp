"use client";

import React, { useEffect } from 'react'
import Hero from '../layout/Hero/Hero'
import Lenis from 'lenis'

const LandingPage = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
        <Hero />
    </>
  )
}

export default LandingPage